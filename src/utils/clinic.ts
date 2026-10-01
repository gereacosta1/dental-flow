import {
  differenceInMinutes,
  format,
  isSameDay,
  isToday,
  parseISO,
} from 'date-fns'
import { es } from 'date-fns/locale'

import type {
  Appointment,
  AppointmentStatus,
  Dentist,
  Patient,
  Treatment,
} from '../types'

/* =========================================================
   PATIENT HELPERS
   ========================================================= */

export function getPatientFullName(patient?: Patient) {
  if (!patient) {
    return 'Paciente desconocido'
  }

  return `${patient.firstName} ${patient.lastName}`
}

export function getPatientInitials(patient?: Patient) {
  if (!patient) {
    return '?'
  }

  return getInitials(
    `${patient.firstName} ${patient.lastName}`,
  )
}

/* =========================================================
   DENTIST HELPERS
   ========================================================= */

export function getDentistFullName(dentist?: Dentist) {
  if (!dentist) {
    return 'Profesional desconocido'
  }

  return `${dentist.firstName} ${dentist.lastName}`
}

export function getDentistDisplayName(
  dentist?: Dentist,
) {
  if (!dentist) {
    return 'Profesional desconocido'
  }

  return `Dr. ${dentist.firstName} ${dentist.lastName}`
}

export function getDentistInitials(
  dentist?: Dentist,
) {
  if (!dentist) {
    return '?'
  }

  return getInitials(
    `${dentist.firstName} ${dentist.lastName}`,
  )
}

/* =========================================================
   GENERAL NAME HELPERS
   ========================================================= */

export function getInitials(name: string) {
  const words = name
    .trim()
    .split(/\s+/)
    .filter(Boolean)

  if (words.length === 0) {
    return '?'
  }

  return words
    .slice(0, 2)
    .map((word) => word.charAt(0))
    .join('')
    .toUpperCase()
}

/* =========================================================
   LOOKUPS
   ========================================================= */

export function findPatient(
  patientId: string,
  patients: Patient[],
) {
  return patients.find(
    (patient) => patient.id === patientId,
  )
}

export function findDentist(
  dentistId: string,
  dentists: Dentist[],
) {
  return dentists.find(
    (dentist) => dentist.id === dentistId,
  )
}

export function findTreatment(
  treatmentId: string,
  treatments: Treatment[],
) {
  return treatments.find(
    (treatment) =>
      treatment.id === treatmentId,
  )
}

/* =========================================================
   APPOINTMENT RELATIONS
   ========================================================= */

export function getAppointmentPatient(
  appointment: Appointment,
  patients: Patient[],
) {
  return findPatient(
    appointment.patientId,
    patients,
  )
}

export function getAppointmentDentist(
  appointment: Appointment,
  dentists: Dentist[],
) {
  return findDentist(
    appointment.dentistId,
    dentists,
  )
}

export function getAppointmentTreatment(
  appointment: Appointment,
  treatments: Treatment[],
) {
  return findTreatment(
    appointment.treatmentId,
    treatments,
  )
}

/* =========================================================
   DATE HELPERS
   ========================================================= */

export function formatDate(
  date: string | Date,
  pattern = "d 'de' MMMM 'de' yyyy",
) {
  const parsedDate =
    typeof date === 'string'
      ? parseISO(date)
      : date

  return format(parsedDate, pattern, {
    locale: es,
  })
}

export function formatShortDate(
  date: string | Date,
) {
  const parsedDate =
    typeof date === 'string'
      ? parseISO(date)
      : date

  return format(
    parsedDate,
    'dd/MM/yyyy',
    {
      locale: es,
    },
  )
}

export function formatLongDate(
  date: string | Date,
) {
  const parsedDate =
    typeof date === 'string'
      ? parseISO(date)
      : date

  return format(
    parsedDate,
    "EEEE, d 'de' MMMM",
    {
      locale: es,
    },
  )
}

export function formatWeekday(
  date: string | Date,
) {
  const parsedDate =
    typeof date === 'string'
      ? parseISO(date)
      : date

  return format(
    parsedDate,
    'EEEE',
    {
      locale: es,
    },
  )
}

export function capitalizeFirstLetter(
  value: string,
) {
  if (!value) {
    return ''
  }

  return (
    value.charAt(0).toUpperCase() +
    value.slice(1)
  )
}

export function formatDashboardDate(
  date: string | Date,
) {
  return capitalizeFirstLetter(
    formatLongDate(date),
  )
}

export function isDateToday(
  date: string | Date,
) {
  const parsedDate =
    typeof date === 'string'
      ? parseISO(date)
      : date

  return isToday(parsedDate)
}

export function isSameCalendarDay(
  firstDate: string | Date,
  secondDate: string | Date,
) {
  const first =
    typeof firstDate === 'string'
      ? parseISO(firstDate)
      : firstDate

  const second =
    typeof secondDate === 'string'
      ? parseISO(secondDate)
      : secondDate

  return isSameDay(first, second)
}

/* =========================================================
   TIME HELPERS
   ========================================================= */

export function timeToMinutes(
  time: string,
) {
  const [hours, minutes] = time
    .split(':')
    .map(Number)

  return hours * 60 + minutes
}

export function minutesToTime(
  totalMinutes: number,
) {
  const hours = Math.floor(
    totalMinutes / 60,
  )

  const minutes =
    totalMinutes % 60

  return `${String(hours).padStart(
    2,
    '0',
  )}:${String(minutes).padStart(
    2,
    '0',
  )}`
}

export function calculateTimeDuration(
  startTime: string,
  endTime: string,
) {
  const start = timeToMinutes(startTime)
  const end = timeToMinutes(endTime)

  return Math.max(end - start, 0)
}

export function formatMinutes(
  minutes: number,
) {
  if (minutes <= 0) {
    return '0 min'
  }

  const hours = Math.floor(
    minutes / 60,
  )

  const remainingMinutes =
    minutes % 60

  if (hours === 0) {
    return `${remainingMinutes} min`
  }

  if (remainingMinutes === 0) {
    return `${hours}h`
  }

  return `${hours}h ${remainingMinutes}m`
}

/* =========================================================
   APPOINTMENT STATUS
   ========================================================= */

export const appointmentStatusLabels: Record<
  AppointmentStatus,
  string
> = {
  scheduled: 'Pendiente',
  confirmed: 'Confirmado',
  waiting: 'En espera',
  in_progress: 'En consulta',
  completed: 'Completado',
  cancelled: 'Cancelado',
  no_show: 'No asistió',
}

export function getAppointmentStatusLabel(
  status: AppointmentStatus,
) {
  return appointmentStatusLabels[status]
}

/* =========================================================
   APPOINTMENT FILTERS
   ========================================================= */

export function getAppointmentsByDate(
  appointments: Appointment[],
  date: string,
) {
  return appointments
    .filter(
      (appointment) =>
        appointment.date === date,
    )
    .sort(
      (first, second) =>
        timeToMinutes(first.startTime) -
        timeToMinutes(second.startTime),
    )
}

export function getAppointmentsByPatient(
  appointments: Appointment[],
  patientId: string,
) {
  return appointments
    .filter(
      (appointment) =>
        appointment.patientId === patientId,
    )
    .sort((first, second) => {
      const firstDate = new Date(
        `${first.date}T${first.startTime}`,
      )

      const secondDate = new Date(
        `${second.date}T${second.startTime}`,
      )

      return (
        secondDate.getTime() -
        firstDate.getTime()
      )
    })
}

export function getAppointmentsByDentist(
  appointments: Appointment[],
  dentistId: string,
) {
  return appointments.filter(
    (appointment) =>
      appointment.dentistId === dentistId,
  )
}

/* =========================================================
   APPOINTMENT COUNTERS
   ========================================================= */

export function countAppointmentsByStatus(
  appointments: Appointment[],
  status: AppointmentStatus,
) {
  return appointments.filter(
    (appointment) =>
      appointment.status === status,
  ).length
}

export function countActiveAppointments(
  appointments: Appointment[],
) {
  return appointments.filter(
    (appointment) =>
      appointment.status !== 'cancelled' &&
      appointment.status !== 'no_show',
  ).length
}

/* =========================================================
   OCCUPANCY
   ========================================================= */

export function calculateBookedMinutes(
  appointments: Appointment[],
) {
  return appointments.reduce(
    (total, appointment) => {
      if (
        appointment.status === 'cancelled' ||
        appointment.status === 'no_show'
      ) {
        return total
      }

      return (
        total +
        calculateTimeDuration(
          appointment.startTime,
          appointment.endTime,
        )
      )
    },
    0,
  )
}

export function calculateOccupancyPercentage(
  bookedMinutes: number,
  availableMinutes: number,
) {
  if (availableMinutes <= 0) {
    return 0
  }

  const percentage =
    (bookedMinutes /
      availableMinutes) *
    100

  return Math.min(
    Math.round(percentage),
    100,
  )
}

/* =========================================================
   TREATMENTS
   ========================================================= */

export function formatPrice(
  price?: number,
  currency = 'USD',
) {
  if (
    price === undefined ||
    price === null
  ) {
    return 'Sin precio'
  }

  return new Intl.NumberFormat(
    'en-US',
    {
      style: 'currency',
      currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    },
  ).format(price)
}

/* =========================================================
   SEARCH NORMALIZATION
   ========================================================= */

export function normalizeText(
  value: string,
) {
  return value
    .normalize('NFD')
    .replace(
      /[\u0300-\u036f]/g,
      '',
    )
    .toLowerCase()
    .trim()
}

export function includesSearchTerm(
  value: string,
  search: string,
) {
  return normalizeText(value).includes(
    normalizeText(search),
  )
}

/* =========================================================
   PHONE / EMAIL HELPERS
   ========================================================= */

export function getWhatsAppUrl(
  phone: string,
) {
  const normalizedPhone =
    phone.replace(/\D/g, '')

  return `https://wa.me/${normalizedPhone}`
}

export function getPhoneUrl(
  phone: string,
) {
  return `tel:${phone.replace(
    /\s/g,
    '',
  )}`
}

export function getEmailUrl(
  email: string,
) {
  return `mailto:${email}`
}

/* =========================================================
   DATE + TIME COMBINATION
   ========================================================= */

export function createAppointmentDateTime(
  date: string,
  time: string,
) {
  return new Date(`${date}T${time}`)
}

export function getMinutesUntilAppointment(
  appointment: Appointment,
) {
  const appointmentDate =
    createAppointmentDateTime(
      appointment.date,
      appointment.startTime,
    )

  return differenceInMinutes(
    appointmentDate,
    new Date(),
  )
}

/* =========================================================
   APPOINTMENT VALIDATION
   ========================================================= */

export function appointmentsOverlap(
  firstStart: string,
  firstEnd: string,
  secondStart: string,
  secondEnd: string,
) {
  const firstStartMinutes =
    timeToMinutes(firstStart)

  const firstEndMinutes =
    timeToMinutes(firstEnd)

  const secondStartMinutes =
    timeToMinutes(secondStart)

  const secondEndMinutes =
    timeToMinutes(secondEnd)

  return (
    firstStartMinutes <
      secondEndMinutes &&
    secondStartMinutes <
      firstEndMinutes
  )
}

export function hasDentistConflict(
  appointments: Appointment[],
  dentistId: string,
  date: string,
  startTime: string,
  endTime: string,
  ignoreAppointmentId?: string,
) {
  return appointments.some(
    (appointment) => {
      if (
        appointment.id ===
        ignoreAppointmentId
      ) {
        return false
      }

      if (
        appointment.dentistId !==
          dentistId ||
        appointment.date !== date
      ) {
        return false
      }

      if (
        appointment.status ===
          'cancelled' ||
        appointment.status ===
          'no_show'
      ) {
        return false
      }

      return appointmentsOverlap(
        startTime,
        endTime,
        appointment.startTime,
        appointment.endTime,
      )
    },
  )
}