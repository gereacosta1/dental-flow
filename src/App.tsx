import {
  Activity,
  CalendarDays,
  ChevronDown,
  Clock3,
  LayoutDashboard,
  Menu,
  Plus,
  Search,
  Settings,
  Stethoscope,
  Users,
  X,
} from 'lucide-react'
import { useState } from 'react'
import { Navigate, NavLink, Route, Routes } from 'react-router'

import './App.css'

type AppointmentStatus = 'confirmed' | 'pending' | 'cancelled'

interface Appointment {
  id: number
  time: string
  patient: string
  treatment: string
  dentist: string
  status: AppointmentStatus
}

const appointments: Appointment[] = [
  {
    id: 1,
    time: '09:00',
    patient: 'Sofía Martínez',
    treatment: 'Limpieza dental',
    dentist: 'Dr. Lucas Herrera',
    status: 'confirmed',
  },
  {
    id: 2,
    time: '10:30',
    patient: 'Mateo González',
    treatment: 'Consulta general',
    dentist: 'Dr. Lucas Herrera',
    status: 'confirmed',
  },
  {
    id: 3,
    time: '12:00',
    patient: 'Valentina Rodríguez',
    treatment: 'Endodoncia',
    dentist: 'Dra. Camila López',
    status: 'pending',
  },
  {
    id: 4,
    time: '14:30',
    patient: 'Thiago Fernández',
    treatment: 'Extracción',
    dentist: 'Dr. Lucas Herrera',
    status: 'confirmed',
  },
  {
    id: 5,
    time: '16:00',
    patient: 'Emma Sánchez',
    treatment: 'Revisión',
    dentist: 'Dra. Camila López',
    status: 'cancelled',
  },
]

const navigation = [
  {
    label: 'Inicio',
    path: '/dashboard',
    icon: LayoutDashboard,
  },
  {
    label: 'Calendario',
    path: '/calendar',
    icon: CalendarDays,
  },
  {
    label: 'Turnos',
    path: '/appointments',
    icon: Clock3,
  },
  {
    label: 'Pacientes',
    path: '/patients',
    icon: Users,
  },
  {
    label: 'Tratamientos',
    path: '/treatments',
    icon: Stethoscope,
  },
]

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="app">
      <aside className={`sidebar ${sidebarOpen ? 'sidebar--open' : ''}`}>
        <div className="sidebar__top">
          <div className="brand">
            <div className="brand__mark">
              <Activity size={21} strokeWidth={2.4} />
            </div>

            <div className="brand__text">
              <strong>DentalFlow</strong>
              <span>Clinic OS</span>
            </div>
          </div>

          <button
            type="button"
            className="sidebar__close"
            onClick={() => setSidebarOpen(false)}
            aria-label="Cerrar menú"
          >
            <X size={20} />
          </button>
        </div>

        <div className="clinic-switcher">
          <div className="clinic-switcher__avatar">DC</div>

          <div className="clinic-switcher__info">
            <span className="clinic-switcher__label">Consultorio</span>
            <strong>Dental Center</strong>
          </div>

          <ChevronDown size={17} />
        </div>

        <nav className="sidebar__nav">
          <span className="sidebar__section-title">GESTIÓN</span>

          {navigation.map((item) => {
            const Icon = item.icon

            return (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setSidebarOpen(false)}
                className={({ isActive }) =>
                  `nav-item ${isActive ? 'nav-item--active' : ''}`
                }
              >
                <Icon size={19} strokeWidth={2} />
                <span>{item.label}</span>
              </NavLink>
            )
          })}
        </nav>

        <div className="sidebar__bottom">
          <NavLink
            to="/settings"
            onClick={() => setSidebarOpen(false)}
            className={({ isActive }) =>
              `nav-item ${isActive ? 'nav-item--active' : ''}`
            }
          >
            <Settings size={19} strokeWidth={2} />
            <span>Configuración</span>
          </NavLink>

          <div className="user-card">
            <div className="user-card__avatar">LH</div>

            <div className="user-card__content">
              <strong>Lucas Herrera</strong>
              <span>Administrador</span>
            </div>

            <ChevronDown size={16} />
          </div>
        </div>
      </aside>

      {sidebarOpen && (
        <button
          type="button"
          className="sidebar-overlay"
          aria-label="Cerrar menú"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div className="workspace">
        <header className="topbar">
          <button
            type="button"
            className="topbar__menu"
            onClick={() => setSidebarOpen(true)}
            aria-label="Abrir menú"
          >
            <Menu size={21} />
          </button>

          <div className="global-search">
            <Search size={18} />

            <input
              type="text"
              placeholder="Buscar paciente, turno..."
              aria-label="Buscar"
            />

            <kbd>⌘ K</kbd>
          </div>

          <div className="topbar__actions">
            <button type="button" className="button button--primary">
              <Plus size={18} />
              <span>Nuevo turno</span>
            </button>
          </div>
        </header>

        <main className="main-content">
          <Routes>
            <Route
              path="/"
              element={<Navigate to="/dashboard" replace />}
            />

            <Route path="/dashboard" element={<Dashboard />} />
            <Route
              path="/calendar"
              element={<PlaceholderPage title="Calendario" />}
            />
            <Route
              path="/appointments"
              element={<PlaceholderPage title="Turnos" />}
            />
            <Route
              path="/patients"
              element={<PlaceholderPage title="Pacientes" />}
            />
            <Route
              path="/treatments"
              element={<PlaceholderPage title="Tratamientos" />}
            />
            <Route
              path="/settings"
              element={<PlaceholderPage title="Configuración" />}
            />

            <Route
              path="*"
              element={<Navigate to="/dashboard" replace />}
            />
          </Routes>
        </main>
      </div>
    </div>
  )
}

function Dashboard() {
  const confirmed = appointments.filter(
    (appointment) => appointment.status === 'confirmed',
  ).length

  const pending = appointments.filter(
    (appointment) => appointment.status === 'pending',
  ).length

  const cancelled = appointments.filter(
    (appointment) => appointment.status === 'cancelled',
  ).length

  return (
    <div className="dashboard">
      <section className="page-heading">
        <div>
          <p className="page-heading__eyebrow">Jueves, 1 de octubre</p>
          <h1>Buenos días, Lucas</h1>
          <p className="page-heading__subtitle">
            Este es el resumen de actividad del consultorio para hoy.
          </p>
        </div>

        <button type="button" className="button button--secondary">
          <CalendarDays size={18} />
          Ver calendario
        </button>
      </section>

      <section className="metrics-grid">
        <article className="metric-card">
          <div className="metric-card__header">
            <span>Turnos de hoy</span>

            <div className="metric-card__icon">
              <CalendarDays size={19} />
            </div>
          </div>

          <strong className="metric-card__value">{appointments.length}</strong>

          <span className="metric-card__detail">
            Jornada de 09:00 a 18:00
          </span>
        </article>

        <article className="metric-card">
          <div className="metric-card__header">
            <span>Confirmados</span>

            <div className="metric-card__icon">
              <Activity size={19} />
            </div>
          </div>

          <strong className="metric-card__value">{confirmed}</strong>

          <span className="metric-card__detail metric-card__detail--positive">
            Listos para atender
          </span>
        </article>

        <article className="metric-card">
          <div className="metric-card__header">
            <span>Pendientes</span>

            <div className="metric-card__icon">
              <Clock3 size={19} />
            </div>
          </div>

          <strong className="metric-card__value">{pending}</strong>

          <span className="metric-card__detail">
            Requieren confirmación
          </span>
        </article>

        <article className="metric-card">
          <div className="metric-card__header">
            <span>Cancelados</span>

            <div className="metric-card__icon">
              <X size={19} />
            </div>
          </div>

          <strong className="metric-card__value">{cancelled}</strong>

          <span className="metric-card__detail">Durante el día de hoy</span>
        </article>
      </section>

      <section className="dashboard-grid">
        <article className="panel appointments-panel">
          <div className="panel__header">
            <div>
              <h2>Próximos turnos</h2>
              <p>Agenda programada para hoy</p>
            </div>

            <button type="button" className="text-button">
              Ver todos
            </button>
          </div>

          <div className="appointments-list">
            {appointments.map((appointment) => (
              <div className="appointment" key={appointment.id}>
                <div className="appointment__time">
                  <strong>{appointment.time}</strong>
                </div>

                <div className="appointment__patient">
                  <div className="patient-avatar">
                    {getInitials(appointment.patient)}
                  </div>

                  <div>
                    <strong>{appointment.patient}</strong>
                    <span>{appointment.treatment}</span>
                  </div>
                </div>

                <div className="appointment__dentist">
                  {appointment.dentist}
                </div>

                <StatusBadge status={appointment.status} />

                <button
                  type="button"
                  className="appointment__menu"
                  aria-label={`Opciones para ${appointment.patient}`}
                >
                  •••
                </button>
              </div>
            ))}
          </div>
        </article>

        <aside className="dashboard-side">
          <article className="panel occupancy-card">
            <div className="panel__header">
              <div>
                <h2>Ocupación</h2>
                <p>Agenda de hoy</p>
              </div>
            </div>

            <div className="occupancy">
              <div className="occupancy__ring">
                <div>
                  <strong>72%</strong>
                  <span>ocupado</span>
                </div>
              </div>

              <div className="occupancy__legend">
                <div>
                  <span className="legend-dot legend-dot--primary" />
                  <p>
                    <strong>6h 30m</strong>
                    <span>Reservado</span>
                  </p>
                </div>

                <div>
                  <span className="legend-dot" />
                  <p>
                    <strong>2h 30m</strong>
                    <span>Disponible</span>
                  </p>
                </div>
              </div>
            </div>
          </article>

          <article className="panel quick-action">
            <div className="quick-action__icon">
              <Plus size={21} />
            </div>

            <div>
              <h3>¿Nuevo paciente?</h3>
              <p>
                Registralo y asignale su primer turno desde un mismo lugar.
              </p>
            </div>

            <button type="button" className="button button--dark">
              Agregar paciente
            </button>
          </article>
        </aside>
      </section>
    </div>
  )
}

function PlaceholderPage({ title }: { title: string }) {
  return (
    <section className="placeholder-page">
      <span className="placeholder-page__eyebrow">DentalFlow</span>
      <h1>{title}</h1>
      <p>
        Esta sección la vamos a construir en los próximos archivos.
      </p>
    </section>
  )
}

function StatusBadge({ status }: { status: AppointmentStatus }) {
  const labels: Record<AppointmentStatus, string> = {
    confirmed: 'Confirmado',
    pending: 'Pendiente',
    cancelled: 'Cancelado',
  }

  return (
    <span className={`status-badge status-badge--${status}`}>
      <span />
      {labels[status]}
    </span>
  )
}

function getInitials(name: string) {
  return name
    .split(' ')
    .slice(0, 2)
    .map((word) => word.charAt(0))
    .join('')
    .toUpperCase()
}

export default App