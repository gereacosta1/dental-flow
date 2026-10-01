export type ID = string

/* =========================================================
   APPOINTMENTS
   ========================================================= */

export type AppointmentStatus =
  | 'scheduled'
  | 'confirmed'
  | 'waiting'
  | 'in_progress'
  | 'completed'
  | 'cancelled'
  | 'no_show'

export type AppointmentSource =
  | 'phone'
  | 'whatsapp'
  | 'website'
  | 'reception'
  | 'other'

export type AppointmentPriority = 'normal' | 'urgent'

export interface Appointment {
  id: ID

  patientId: ID
  dentistId: ID
  treatmentId: ID

  date: string
  startTime: string
  endTime: string

  status: AppointmentStatus
  source: AppointmentSource
  priority: AppointmentPriority

  notes?: string

  createdAt: string
  updatedAt: string
}


/* =========================================================
   PATIENTS
   ========================================================= */

export type PatientStatus = 'active' | 'inactive'

export type ContactPreference =
  | 'whatsapp'
  | 'phone'
  | 'email'

export interface Patient {
  id: ID

  firstName: string
  lastName: string

  phone: string
  email?: string

  dateOfBirth?: string

  status: PatientStatus

  contactPreference: ContactPreference

  notes?: string

  createdAt: string
  updatedAt: string
}


/* =========================================================
   DENTISTS
   ========================================================= */

export type DentistStatus =
  | 'active'
  | 'inactive'
  | 'vacation'

export interface Dentist {
  id: ID

  firstName: string
  lastName: string

  specialty: string

  email?: string
  phone?: string

  status: DentistStatus

  color: string

  createdAt: string
  updatedAt: string
}


/* =========================================================
   TREATMENTS
   ========================================================= */

export type TreatmentCategory =
  | 'general'
  | 'preventive'
  | 'restorative'
  | 'endodontics'
  | 'surgery'
  | 'orthodontics'
  | 'cosmetic'
  | 'implantology'
  | 'other'

export interface Treatment {
  id: ID

  name: string
  category: TreatmentCategory

  duration: number

  price?: number

  description?: string

  active: boolean

  createdAt: string
  updatedAt: string
}


/* =========================================================
   CLINIC
   ========================================================= */

export interface Clinic {
  id: ID

  name: string

  phone: string
  email: string

  address: string
  city: string
  country: string

  timezone: string

  logoUrl?: string

  createdAt: string
  updatedAt: string
}


/* =========================================================
   CLINIC SCHEDULE
   ========================================================= */

export type WeekDay =
  | 'monday'
  | 'tuesday'
  | 'wednesday'
  | 'thursday'
  | 'friday'
  | 'saturday'
  | 'sunday'

export interface ScheduleRange {
  start: string
  end: string
}

export interface ClinicDaySchedule {
  day: WeekDay

  enabled: boolean

  ranges: ScheduleRange[]
}


/* =========================================================
   USERS
   ========================================================= */

export type UserRole =
  | 'owner'
  | 'admin'
  | 'receptionist'
  | 'dentist'

export interface User {
  id: ID

  firstName: string
  lastName: string

  email: string

  role: UserRole

  avatarUrl?: string

  clinicId: ID

  createdAt: string
  updatedAt: string
}


/* =========================================================
   DASHBOARD
   ========================================================= */

export interface DashboardStats {
  totalAppointments: number
  confirmedAppointments: number
  pendingAppointments: number
  cancelledAppointments: number
  completedAppointments: number
  noShowAppointments: number

  occupancyPercentage: number

  bookedMinutes: number
  availableMinutes: number
}


/* =========================================================
   SEARCH
   ========================================================= */

export type SearchResultType =
  | 'patient'
  | 'appointment'
  | 'dentist'
  | 'treatment'

export interface SearchResult {
  id: ID
  type: SearchResultType

  title: string
  subtitle?: string
}


/* =========================================================
   NOTIFICATIONS
   ========================================================= */

export type NotificationType =
  | 'appointment'
  | 'confirmation'
  | 'cancellation'
  | 'system'

export interface AppNotification {
  id: ID

  type: NotificationType

  title: string
  description: string

  read: boolean

  createdAt: string
}


/* =========================================================
   UI HELPERS
   ========================================================= */

export interface SelectOption<T = string> {
  label: string
  value: T
}

export interface Pagination {
  page: number
  pageSize: number
  totalItems: number
  totalPages: number
}