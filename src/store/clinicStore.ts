import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import {
  appointments as initialAppointments,
  clinic as initialClinic,
  clinicSchedule as initialClinicSchedule,
  currentUser as initialCurrentUser,
  dentists as initialDentists,
  patients as initialPatients,
  treatments as initialTreatments,
} from '../data/mockData'

import type {
  Appointment,
  AppointmentStatus,
  Clinic,
  ClinicDaySchedule,
  Dentist,
  Patient,
  Treatment,
  User,
} from '../types'

/* =========================================================
   INPUT TYPES
   ========================================================= */

export type CreatePatientInput = Omit<
  Patient,
  'id' | 'createdAt' | 'updatedAt'
>

export type UpdatePatientInput = Partial<
  Omit<Patient, 'id' | 'createdAt' | 'updatedAt'>
>

export type CreateAppointmentInput = Omit<
  Appointment,
  'id' | 'createdAt' | 'updatedAt'
>

export type UpdateAppointmentInput = Partial<
  Omit<Appointment, 'id' | 'createdAt' | 'updatedAt'>
>

export type CreateTreatmentInput = Omit<
  Treatment,
  'id' | 'createdAt' | 'updatedAt'
>

export type UpdateTreatmentInput = Partial<
  Omit<Treatment, 'id' | 'createdAt' | 'updatedAt'>
>

export type CreateDentistInput = Omit<
  Dentist,
  'id' | 'createdAt' | 'updatedAt'
>

export type UpdateDentistInput = Partial<
  Omit<Dentist, 'id' | 'createdAt' | 'updatedAt'>
>

/* =========================================================
   STORE INTERFACE
   ========================================================= */

interface ClinicStore {
  clinic: Clinic

  currentUser: User

  dentists: Dentist[]
  patients: Patient[]
  treatments: Treatment[]
  appointments: Appointment[]
  clinicSchedule: ClinicDaySchedule[]

  /* -------------------------------------------------------
     PATIENTS
     ------------------------------------------------------- */

  addPatient: (patient: CreatePatientInput) => Patient

  updatePatient: (
    patientId: string,
    changes: UpdatePatientInput,
  ) => void

  removePatient: (patientId: string) => void

  /* -------------------------------------------------------
     APPOINTMENTS
     ------------------------------------------------------- */

  addAppointment: (
    appointment: CreateAppointmentInput,
  ) => Appointment

  updateAppointment: (
    appointmentId: string,
    changes: UpdateAppointmentInput,
  ) => void

  removeAppointment: (appointmentId: string) => void

  setAppointmentStatus: (
    appointmentId: string,
    status: AppointmentStatus,
  ) => void

  /* -------------------------------------------------------
     TREATMENTS
     ------------------------------------------------------- */

  addTreatment: (
    treatment: CreateTreatmentInput,
  ) => Treatment

  updateTreatment: (
    treatmentId: string,
    changes: UpdateTreatmentInput,
  ) => void

  removeTreatment: (treatmentId: string) => void

  /* -------------------------------------------------------
     DENTISTS
     ------------------------------------------------------- */

  addDentist: (
    dentist: CreateDentistInput,
  ) => Dentist

  updateDentist: (
    dentistId: string,
    changes: UpdateDentistInput,
  ) => void

  removeDentist: (dentistId: string) => void

  /* -------------------------------------------------------
     CLINIC
     ------------------------------------------------------- */

  updateClinic: (changes: Partial<Clinic>) => void

  updateClinicSchedule: (
    schedule: ClinicDaySchedule[],
  ) => void

  /* -------------------------------------------------------
     DEVELOPMENT
     ------------------------------------------------------- */

  resetDemoData: () => void
}

/* =========================================================
   HELPERS
   ========================================================= */

function createId(prefix: string) {
  if (
    typeof crypto !== 'undefined' &&
    typeof crypto.randomUUID === 'function'
  ) {
    return `${prefix}-${crypto.randomUUID()}`
  }

  return `${prefix}-${Date.now()}-${Math.random()
    .toString(36)
    .slice(2, 9)}`
}

function now() {
  return new Date().toISOString()
}

/* =========================================================
   STORE
   ========================================================= */

export const useClinicStore = create<ClinicStore>()(
  persist(
    (set) => ({
      clinic: initialClinic,

      currentUser: initialCurrentUser,

      dentists: [...initialDentists],
      patients: [...initialPatients],
      treatments: [...initialTreatments],
      appointments: [...initialAppointments],
      clinicSchedule: [...initialClinicSchedule],

      /* =====================================================
         PATIENTS
         ===================================================== */

      addPatient: (patientData) => {
        const timestamp = now()

        const newPatient: Patient = {
          ...patientData,

          id: createId('patient'),

          createdAt: timestamp,
          updatedAt: timestamp,
        }

        set((state) => ({
          patients: [
            newPatient,
            ...state.patients,
          ],
        }))

        return newPatient
      },

      updatePatient: (
        patientId,
        changes,
      ) => {
        set((state) => ({
          patients: state.patients.map(
            (patient) =>
              patient.id === patientId
                ? {
                    ...patient,
                    ...changes,
                    updatedAt: now(),
                  }
                : patient,
          ),
        }))
      },

      removePatient: (patientId) => {
        set((state) => ({
          patients: state.patients.filter(
            (patient) =>
              patient.id !== patientId,
          ),

          appointments:
            state.appointments.filter(
              (appointment) =>
                appointment.patientId !==
                patientId,
            ),
        }))
      },

      /* =====================================================
         APPOINTMENTS
         ===================================================== */

      addAppointment: (
        appointmentData,
      ) => {
        const timestamp = now()

        const newAppointment: Appointment = {
          ...appointmentData,

          id: createId('appointment'),

          createdAt: timestamp,
          updatedAt: timestamp,
        }

        set((state) => ({
          appointments: [
            ...state.appointments,
            newAppointment,
          ],
        }))

        return newAppointment
      },

      updateAppointment: (
        appointmentId,
        changes,
      ) => {
        set((state) => ({
          appointments:
            state.appointments.map(
              (appointment) =>
                appointment.id ===
                appointmentId
                  ? {
                      ...appointment,
                      ...changes,
                      updatedAt: now(),
                    }
                  : appointment,
            ),
        }))
      },

      removeAppointment: (
        appointmentId,
      ) => {
        set((state) => ({
          appointments:
            state.appointments.filter(
              (appointment) =>
                appointment.id !==
                appointmentId,
            ),
        }))
      },

      setAppointmentStatus: (
        appointmentId,
        status,
      ) => {
        set((state) => ({
          appointments:
            state.appointments.map(
              (appointment) =>
                appointment.id ===
                appointmentId
                  ? {
                      ...appointment,
                      status,
                      updatedAt: now(),
                    }
                  : appointment,
            ),
        }))
      },

      /* =====================================================
         TREATMENTS
         ===================================================== */

      addTreatment: (treatmentData) => {
        const timestamp = now()

        const newTreatment: Treatment = {
          ...treatmentData,

          id: createId('treatment'),

          createdAt: timestamp,
          updatedAt: timestamp,
        }

        set((state) => ({
          treatments: [
            ...state.treatments,
            newTreatment,
          ],
        }))

        return newTreatment
      },

      updateTreatment: (
        treatmentId,
        changes,
      ) => {
        set((state) => ({
          treatments: state.treatments.map(
            (treatment) =>
              treatment.id === treatmentId
                ? {
                    ...treatment,
                    ...changes,
                    updatedAt: now(),
                  }
                : treatment,
          ),
        }))
      },

      removeTreatment: (treatmentId) => {
        set((state) => ({
          treatments:
            state.treatments.filter(
              (treatment) =>
                treatment.id !==
                treatmentId,
            ),

          appointments:
            state.appointments.filter(
              (appointment) =>
                appointment.treatmentId !==
                treatmentId,
            ),
        }))
      },

      /* =====================================================
         DENTISTS
         ===================================================== */

      addDentist: (dentistData) => {
        const timestamp = now()

        const newDentist: Dentist = {
          ...dentistData,

          id: createId('dentist'),

          createdAt: timestamp,
          updatedAt: timestamp,
        }

        set((state) => ({
          dentists: [
            ...state.dentists,
            newDentist,
          ],
        }))

        return newDentist
      },

      updateDentist: (
        dentistId,
        changes,
      ) => {
        set((state) => ({
          dentists: state.dentists.map(
            (dentist) =>
              dentist.id === dentistId
                ? {
                    ...dentist,
                    ...changes,
                    updatedAt: now(),
                  }
                : dentist,
          ),
        }))
      },

      removeDentist: (dentistId) => {
        set((state) => ({
          dentists:
            state.dentists.filter(
              (dentist) =>
                dentist.id !== dentistId,
            ),

          appointments:
            state.appointments.filter(
              (appointment) =>
                appointment.dentistId !==
                dentistId,
            ),
        }))
      },

      /* =====================================================
         CLINIC
         ===================================================== */

      updateClinic: (changes) => {
        set((state) => ({
          clinic: {
            ...state.clinic,
            ...changes,
            updatedAt: now(),
          },
        }))
      },

      updateClinicSchedule: (
        schedule,
      ) => {
        set({
          clinicSchedule: schedule,
        })
      },

      /* =====================================================
         RESET
         ===================================================== */

      resetDemoData: () => {
        set({
          clinic: initialClinic,

          currentUser: initialCurrentUser,

          dentists: [...initialDentists],

          patients: [...initialPatients],

          treatments: [
            ...initialTreatments,
          ],

          appointments: [
            ...initialAppointments,
          ],

          clinicSchedule: [
            ...initialClinicSchedule,
          ],
        })
      },
    }),

    {
      name: 'dentalflow-storage-v1',
    },
  ),
)