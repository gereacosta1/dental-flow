import type {
  Appointment,
  Clinic,
  ClinicDaySchedule,
  Dentist,
  Patient,
  Treatment,
  User,
} from '../types'

/* =========================================================
   CLINIC
   ========================================================= */

export const clinic: Clinic = {
  id: 'clinic-001',

  name: 'Dental Center',

  phone: '+1 305 555 0147',
  email: 'contact@dentalcenter.com',

  address: '2450 NW 2nd Ave',
  city: 'Miami',
  country: 'United States',

  timezone: 'America/New_York',

  createdAt: '2026-01-10T14:00:00.000Z',
  updatedAt: '2026-10-01T14:00:00.000Z',
}

/* =========================================================
   CURRENT USER
   ========================================================= */

export const currentUser: User = {
  id: 'user-001',

  firstName: 'Lucas',
  lastName: 'Herrera',

  email: 'lucas@dentalcenter.com',

  role: 'owner',

  clinicId: clinic.id,

  createdAt: '2026-01-10T14:00:00.000Z',
  updatedAt: '2026-10-01T14:00:00.000Z',
}

/* =========================================================
   DENTISTS
   ========================================================= */

export const dentists: Dentist[] = [
  {
    id: 'dentist-001',

    firstName: 'Lucas',
    lastName: 'Herrera',

    specialty: 'Odontología general',

    email: 'lucas@dentalcenter.com',
    phone: '+1 305 555 0101',

    status: 'active',

    color: '#1683f3',

    createdAt: '2026-01-10T14:00:00.000Z',
    updatedAt: '2026-10-01T14:00:00.000Z',
  },

  {
    id: 'dentist-002',

    firstName: 'Camila',
    lastName: 'López',

    specialty: 'Endodoncia',

    email: 'camila@dentalcenter.com',
    phone: '+1 305 555 0102',

    status: 'active',

    color: '#7b6ff0',

    createdAt: '2026-02-12T14:00:00.000Z',
    updatedAt: '2026-10-01T14:00:00.000Z',
  },

  {
    id: 'dentist-003',

    firstName: 'Martín',
    lastName: 'Torres',

    specialty: 'Ortodoncia',

    email: 'martin@dentalcenter.com',
    phone: '+1 305 555 0103',

    status: 'active',

    color: '#18a886',

    createdAt: '2026-03-05T14:00:00.000Z',
    updatedAt: '2026-10-01T14:00:00.000Z',
  },
]

/* =========================================================
   TREATMENTS
   ========================================================= */

export const treatments: Treatment[] = [
  {
    id: 'treatment-001',

    name: 'Consulta general',

    category: 'general',

    duration: 30,

    price: 80,

    description:
      'Evaluación general del estado bucal y planificación del tratamiento.',

    active: true,

    createdAt: '2026-01-10T14:00:00.000Z',
    updatedAt: '2026-10-01T14:00:00.000Z',
  },

  {
    id: 'treatment-002',

    name: 'Limpieza dental',

    category: 'preventive',

    duration: 45,

    price: 120,

    description:
      'Limpieza profesional para remover placa, sarro y manchas superficiales.',

    active: true,

    createdAt: '2026-01-10T14:00:00.000Z',
    updatedAt: '2026-10-01T14:00:00.000Z',
  },

  {
    id: 'treatment-003',

    name: 'Revisión',

    category: 'preventive',

    duration: 20,

    price: 60,

    description:
      'Control de seguimiento y revisión del estado dental del paciente.',

    active: true,

    createdAt: '2026-01-10T14:00:00.000Z',
    updatedAt: '2026-10-01T14:00:00.000Z',
  },

  {
    id: 'treatment-004',

    name: 'Restauración',

    category: 'restorative',

    duration: 60,

    price: 180,

    description:
      'Restauración dental mediante resina compuesta.',

    active: true,

    createdAt: '2026-01-10T14:00:00.000Z',
    updatedAt: '2026-10-01T14:00:00.000Z',
  },

  {
    id: 'treatment-005',

    name: 'Endodoncia',

    category: 'endodontics',

    duration: 90,

    price: 650,

    description:
      'Tratamiento de conducto para conservar una pieza dental afectada.',

    active: true,

    createdAt: '2026-01-10T14:00:00.000Z',
    updatedAt: '2026-10-01T14:00:00.000Z',
  },

  {
    id: 'treatment-006',

    name: 'Extracción dental',

    category: 'surgery',

    duration: 45,

    price: 250,

    description:
      'Extracción de una pieza dental cuando su conservación no es viable.',

    active: true,

    createdAt: '2026-01-10T14:00:00.000Z',
    updatedAt: '2026-10-01T14:00:00.000Z',
  },

  {
    id: 'treatment-007',

    name: 'Consulta de ortodoncia',

    category: 'orthodontics',

    duration: 40,

    price: 100,

    description:
      'Evaluación inicial para tratamiento de ortodoncia.',

    active: true,

    createdAt: '2026-01-10T14:00:00.000Z',
    updatedAt: '2026-10-01T14:00:00.000Z',
  },

  {
    id: 'treatment-008',

    name: 'Blanqueamiento dental',

    category: 'cosmetic',

    duration: 75,

    price: 450,

    description:
      'Tratamiento estético para aclarar el tono de las piezas dentales.',

    active: true,

    createdAt: '2026-01-10T14:00:00.000Z',
    updatedAt: '2026-10-01T14:00:00.000Z',
  },

  {
    id: 'treatment-009',

    name: 'Implante dental',

    category: 'implantology',

    duration: 120,

    price: 2400,

    description:
      'Procedimiento quirúrgico para colocación de implante dental.',

    active: true,

    createdAt: '2026-01-10T14:00:00.000Z',
    updatedAt: '2026-10-01T14:00:00.000Z',
  },
]

/* =========================================================
   PATIENTS
   ========================================================= */

export const patients: Patient[] = [
  {
    id: 'patient-001',

    firstName: 'Sofía',
    lastName: 'Martínez',

    phone: '+1 305 555 1001',
    email: 'sofia.martinez@email.com',

    dateOfBirth: '1997-05-14',

    status: 'active',

    contactPreference: 'whatsapp',

    createdAt: '2026-05-20T14:00:00.000Z',
    updatedAt: '2026-09-29T14:00:00.000Z',
  },

  {
    id: 'patient-002',

    firstName: 'Mateo',
    lastName: 'González',

    phone: '+1 305 555 1002',
    email: 'mateo.gonzalez@email.com',

    dateOfBirth: '1991-11-08',

    status: 'active',

    contactPreference: 'phone',

    createdAt: '2026-06-04T14:00:00.000Z',
    updatedAt: '2026-09-22T14:00:00.000Z',
  },

  {
    id: 'patient-003',

    firstName: 'Valentina',
    lastName: 'Rodríguez',

    phone: '+1 305 555 1003',
    email: 'valentina.rodriguez@email.com',

    dateOfBirth: '1988-03-22',

    status: 'active',

    contactPreference: 'whatsapp',

    createdAt: '2026-04-17T14:00:00.000Z',
    updatedAt: '2026-09-30T14:00:00.000Z',
  },

  {
    id: 'patient-004',

    firstName: 'Thiago',
    lastName: 'Fernández',

    phone: '+1 305 555 1004',
    email: 'thiago.fernandez@email.com',

    dateOfBirth: '1994-08-12',

    status: 'active',

    contactPreference: 'email',

    createdAt: '2026-07-02T14:00:00.000Z',
    updatedAt: '2026-09-25T14:00:00.000Z',
  },

  {
    id: 'patient-005',

    firstName: 'Emma',
    lastName: 'Sánchez',

    phone: '+1 305 555 1005',
    email: 'emma.sanchez@email.com',

    dateOfBirth: '2000-01-19',

    status: 'active',

    contactPreference: 'whatsapp',

    createdAt: '2026-08-09T14:00:00.000Z',
    updatedAt: '2026-09-26T14:00:00.000Z',
  },

  {
    id: 'patient-006',

    firstName: 'Benjamín',
    lastName: 'Ramírez',

    phone: '+1 305 555 1006',
    email: 'benjamin.ramirez@email.com',

    dateOfBirth: '1985-07-03',

    status: 'active',

    contactPreference: 'phone',

    createdAt: '2026-03-11T14:00:00.000Z',
    updatedAt: '2026-09-18T14:00:00.000Z',
  },

  {
    id: 'patient-007',

    firstName: 'Isabella',
    lastName: 'Morales',

    phone: '+1 305 555 1007',
    email: 'isabella.morales@email.com',

    dateOfBirth: '1999-12-26',

    status: 'active',

    contactPreference: 'whatsapp',

    createdAt: '2026-08-18T14:00:00.000Z',
    updatedAt: '2026-09-28T14:00:00.000Z',
  },

  {
    id: 'patient-008',

    firstName: 'Samuel',
    lastName: 'Castro',

    phone: '+1 305 555 1008',
    email: 'samuel.castro@email.com',

    dateOfBirth: '1979-09-10',

    status: 'active',

    contactPreference: 'email',

    createdAt: '2026-02-22T14:00:00.000Z',
    updatedAt: '2026-09-20T14:00:00.000Z',
  },

  {
    id: 'patient-009',

    firstName: 'Olivia',
    lastName: 'Navarro',

    phone: '+1 305 555 1009',
    email: 'olivia.navarro@email.com',

    dateOfBirth: '1996-04-30',

    status: 'active',

    contactPreference: 'whatsapp',

    createdAt: '2026-09-02T14:00:00.000Z',
    updatedAt: '2026-09-27T14:00:00.000Z',
  },

  {
    id: 'patient-010',

    firstName: 'Daniel',
    lastName: 'Vega',

    phone: '+1 305 555 1010',
    email: 'daniel.vega@email.com',

    dateOfBirth: '1982-06-15',

    status: 'active',

    contactPreference: 'phone',

    notes: 'Prefiere turnos durante la mañana.',

    createdAt: '2026-01-28T14:00:00.000Z',
    updatedAt: '2026-09-24T14:00:00.000Z',
  },

  {
    id: 'patient-011',

    firstName: 'Mía',
    lastName: 'Alvarez',

    phone: '+1 305 555 1011',

    dateOfBirth: '2002-02-11',

    status: 'active',

    contactPreference: 'whatsapp',

    createdAt: '2026-09-14T14:00:00.000Z',
    updatedAt: '2026-09-30T14:00:00.000Z',
  },

  {
    id: 'patient-012',

    firstName: 'Tomás',
    lastName: 'Méndez',

    phone: '+1 305 555 1012',
    email: 'tomas.mendez@email.com',

    dateOfBirth: '1990-10-05',

    status: 'inactive',

    contactPreference: 'email',

    createdAt: '2026-01-18T14:00:00.000Z',
    updatedAt: '2026-06-15T14:00:00.000Z',
  },
]

/* =========================================================
   APPOINTMENTS
   ========================================================= */

export const appointments: Appointment[] = [
  {
    id: 'appointment-001',

    patientId: 'patient-001',
    dentistId: 'dentist-001',
    treatmentId: 'treatment-002',

    date: '2026-10-01',
    startTime: '09:00',
    endTime: '09:45',

    status: 'confirmed',
    source: 'whatsapp',
    priority: 'normal',

    createdAt: '2026-09-25T14:00:00.000Z',
    updatedAt: '2026-09-30T14:00:00.000Z',
  },

  {
    id: 'appointment-002',

    patientId: 'patient-002',
    dentistId: 'dentist-001',
    treatmentId: 'treatment-001',

    date: '2026-10-01',
    startTime: '10:30',
    endTime: '11:00',

    status: 'confirmed',
    source: 'phone',
    priority: 'normal',

    createdAt: '2026-09-24T14:00:00.000Z',
    updatedAt: '2026-09-30T14:00:00.000Z',
  },

  {
    id: 'appointment-003',

    patientId: 'patient-003',
    dentistId: 'dentist-002',
    treatmentId: 'treatment-005',

    date: '2026-10-01',
    startTime: '12:00',
    endTime: '13:30',

    status: 'scheduled',
    source: 'reception',
    priority: 'normal',

    notes: 'Confirmar disponibilidad antes de las 10:00.',

    createdAt: '2026-09-22T14:00:00.000Z',
    updatedAt: '2026-09-29T14:00:00.000Z',
  },

  {
    id: 'appointment-004',

    patientId: 'patient-004',
    dentistId: 'dentist-001',
    treatmentId: 'treatment-006',

    date: '2026-10-01',
    startTime: '14:30',
    endTime: '15:15',

    status: 'confirmed',
    source: 'website',
    priority: 'normal',

    createdAt: '2026-09-27T14:00:00.000Z',
    updatedAt: '2026-09-30T14:00:00.000Z',
  },

  {
    id: 'appointment-005',

    patientId: 'patient-005',
    dentistId: 'dentist-002',
    treatmentId: 'treatment-003',

    date: '2026-10-01',
    startTime: '16:00',
    endTime: '16:20',

    status: 'cancelled',
    source: 'whatsapp',
    priority: 'normal',

    notes: 'Paciente solicitó reprogramar.',

    createdAt: '2026-09-26T14:00:00.000Z',
    updatedAt: '2026-10-01T14:00:00.000Z',
  },

  {
    id: 'appointment-006',

    patientId: 'patient-006',
    dentistId: 'dentist-003',
    treatmentId: 'treatment-007',

    date: '2026-10-01',
    startTime: '17:00',
    endTime: '17:40',

    status: 'confirmed',
    source: 'phone',
    priority: 'normal',

    createdAt: '2026-09-28T14:00:00.000Z',
    updatedAt: '2026-09-30T14:00:00.000Z',
  },

  {
    id: 'appointment-007',

    patientId: 'patient-007',
    dentistId: 'dentist-001',
    treatmentId: 'treatment-004',

    date: '2026-10-02',
    startTime: '09:30',
    endTime: '10:30',

    status: 'confirmed',
    source: 'website',
    priority: 'normal',

    createdAt: '2026-09-28T14:00:00.000Z',
    updatedAt: '2026-09-30T14:00:00.000Z',
  },

  {
    id: 'appointment-008',

    patientId: 'patient-008',
    dentistId: 'dentist-002',
    treatmentId: 'treatment-005',

    date: '2026-10-02',
    startTime: '11:00',
    endTime: '12:30',

    status: 'scheduled',
    source: 'reception',
    priority: 'normal',

    createdAt: '2026-09-29T14:00:00.000Z',
    updatedAt: '2026-09-29T14:00:00.000Z',
  },

  {
    id: 'appointment-009',

    patientId: 'patient-009',
    dentistId: 'dentist-001',
    treatmentId: 'treatment-008',

    date: '2026-10-02',
    startTime: '14:00',
    endTime: '15:15',

    status: 'confirmed',
    source: 'whatsapp',
    priority: 'normal',

    createdAt: '2026-09-30T14:00:00.000Z',
    updatedAt: '2026-09-30T14:00:00.000Z',
  },

  {
    id: 'appointment-010',

    patientId: 'patient-010',
    dentistId: 'dentist-003',
    treatmentId: 'treatment-007',

    date: '2026-10-03',
    startTime: '09:00',
    endTime: '09:40',

    status: 'confirmed',
    source: 'phone',
    priority: 'normal',

    createdAt: '2026-09-24T14:00:00.000Z',
    updatedAt: '2026-09-30T14:00:00.000Z',
  },

  {
    id: 'appointment-011',

    patientId: 'patient-011',
    dentistId: 'dentist-001',
    treatmentId: 'treatment-001',

    date: '2026-10-03',
    startTime: '10:30',
    endTime: '11:00',

    status: 'scheduled',
    source: 'website',
    priority: 'normal',

    createdAt: '2026-09-30T14:00:00.000Z',
    updatedAt: '2026-09-30T14:00:00.000Z',
  },

  {
    id: 'appointment-012',

    patientId: 'patient-003',
    dentistId: 'dentist-002',
    treatmentId: 'treatment-003',

    date: '2026-10-05',
    startTime: '15:00',
    endTime: '15:20',

    status: 'confirmed',
    source: 'whatsapp',
    priority: 'normal',

    createdAt: '2026-09-30T14:00:00.000Z',
    updatedAt: '2026-10-01T14:00:00.000Z',
  },

  {
    id: 'appointment-013',

    patientId: 'patient-006',
    dentistId: 'dentist-001',
    treatmentId: 'treatment-006',

    date: '2026-10-06',
    startTime: '13:30',
    endTime: '14:15',

    status: 'scheduled',
    source: 'phone',
    priority: 'urgent',

    notes: 'Paciente reporta dolor intenso.',

    createdAt: '2026-10-01T15:00:00.000Z',
    updatedAt: '2026-10-01T15:00:00.000Z',
  },
]

/* =========================================================
   CLINIC SCHEDULE
   ========================================================= */

export const clinicSchedule: ClinicDaySchedule[] = [
  {
    day: 'monday',
    enabled: true,
    ranges: [
      {
        start: '09:00',
        end: '18:00',
      },
    ],
  },

  {
    day: 'tuesday',
    enabled: true,
    ranges: [
      {
        start: '09:00',
        end: '18:00',
      },
    ],
  },

  {
    day: 'wednesday',
    enabled: true,
    ranges: [
      {
        start: '09:00',
        end: '18:00',
      },
    ],
  },

  {
    day: 'thursday',
    enabled: true,
    ranges: [
      {
        start: '09:00',
        end: '18:00',
      },
    ],
  },

  {
    day: 'friday',
    enabled: true,
    ranges: [
      {
        start: '09:00',
        end: '18:00',
      },
    ],
  },

  {
    day: 'saturday',
    enabled: true,
    ranges: [
      {
        start: '09:00',
        end: '14:00',
      },
    ],
  },

  {
    day: 'sunday',
    enabled: false,
    ranges: [],
  },
]