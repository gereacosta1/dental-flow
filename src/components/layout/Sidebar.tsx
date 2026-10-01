import {
  Activity,
  CalendarDays,
  ChevronDown,
  Clock3,
  LayoutDashboard,
  Settings,
  Stethoscope,
  Users,
  X,
} from 'lucide-react'
import { NavLink } from 'react-router'

import { useClinicStore } from '../../store/clinicStore'

import './Sidebar.css'

interface SidebarProps {
  open: boolean
  onClose: () => void
}

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

export default function Sidebar({
  open,
  onClose,
}: SidebarProps) {
  const clinic = useClinicStore(
    (state) => state.clinic,
  )

  const currentUser = useClinicStore(
    (state) => state.currentUser,
  )

  const userName = `${currentUser.firstName} ${currentUser.lastName}`

  const initials = getInitials(
    currentUser.firstName,
    currentUser.lastName,
  )

  return (
    <>
      <aside
        className={`sidebar ${
          open ? 'sidebar--open' : ''
        }`}
      >
        {/* =================================================
            BRAND
        ================================================= */}

        <div className="sidebar__header">
          <div className="sidebar-brand">
            <div className="sidebar-brand__logo">
              <Activity
                size={22}
                strokeWidth={2.2}
              />
            </div>

            <div className="sidebar-brand__content">
              <span className="sidebar-brand__name">
                DentalFlow
              </span>

              <span className="sidebar-brand__tagline">
                Gestión clínica
              </span>
            </div>
          </div>

          <button
            type="button"
            className="sidebar__close"
            onClick={onClose}
            aria-label="Cerrar menú"
          >
            <X size={20} />
          </button>
        </div>

        {/* =================================================
            CLINIC
        ================================================= */}

        <button
          type="button"
          className="clinic-selector"
        >
          <div className="clinic-selector__logo">
            <Stethoscope
              size={18}
              strokeWidth={2}
            />
          </div>

          <div className="clinic-selector__content">
            <span>Consultorio</span>

            <strong>{clinic.name}</strong>
          </div>

          <ChevronDown
            size={16}
            className="clinic-selector__chevron"
          />
        </button>

        {/* =================================================
            NAVIGATION
        ================================================= */}

        <nav className="sidebar-nav">
          <span className="sidebar-nav__title">
            Gestión
          </span>

          <div className="sidebar-nav__links">
            {navigation.map((item) => {
              const Icon = item.icon

              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={onClose}
                  className={({
                    isActive,
                  }) =>
                    [
                      'sidebar-link',
                      isActive
                        ? 'sidebar-link--active'
                        : '',
                    ]
                      .filter(Boolean)
                      .join(' ')
                  }
                >
                  <div className="sidebar-link__icon">
                    <Icon
                      size={19}
                      strokeWidth={1.9}
                    />
                  </div>

                  <span>{item.label}</span>
                </NavLink>
              )
            })}
          </div>
        </nav>

        {/* =================================================
            BOTTOM
        ================================================= */}

        <div className="sidebar__bottom">
          <div className="sidebar-divider" />

          <NavLink
            to="/settings"
            onClick={onClose}
            className={({ isActive }) =>
              [
                'sidebar-link',
                isActive
                  ? 'sidebar-link--active'
                  : '',
              ]
                .filter(Boolean)
                .join(' ')
            }
          >
            <div className="sidebar-link__icon">
              <Settings
                size={19}
                strokeWidth={1.9}
              />
            </div>

            <span>Configuración</span>
          </NavLink>

          {/* =================================================
              USER
          ================================================= */}

          <button
            type="button"
            className="sidebar-user"
          >
            <div className="sidebar-user__avatar">
              {initials}
            </div>

            <div className="sidebar-user__info">
              <strong>{userName}</strong>

              <span>
                {formatRole(
                  currentUser.role,
                )}
              </span>
            </div>

            <ChevronDown
              size={15}
              className="sidebar-user__chevron"
            />
          </button>
        </div>
      </aside>

      {open && (
        <button
          type="button"
          className="sidebar-backdrop"
          onClick={onClose}
          aria-label="Cerrar navegación"
        />
      )}
    </>
  )
}

/* =========================================================
   HELPERS
   ========================================================= */

function getInitials(
  firstName: string,
  lastName: string,
) {
  const first =
    firstName.trim().charAt(0)

  const last =
    lastName.trim().charAt(0)

  return `${first}${last}`.toUpperCase()
}

function formatRole(
  role:
    | 'owner'
    | 'admin'
    | 'receptionist'
    | 'dentist',
) {
  const labels = {
    owner: 'Propietario',
    admin: 'Administrador',
    receptionist: 'Recepción',
    dentist: 'Odontólogo',
  }

  return labels[role]
}