import { NavLink } from 'react-router-dom'
import ThemeSelector from './ThemeSelector'

const links = [
  { to: '/', label: 'Home' },
  { to: '/experience', label: 'Experience' },
    { to: '/research', label: 'Research' },
  { to: '/projects', label: 'Projects' },
]

function NavBar() {
  return (
    <header className="navbar">
      <nav>
        <ul>
          {links.map((link) => (
            <li key={link.to}>
              <NavLink to={link.to} end>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <ThemeSelector />
    </header>
  )
}

export default NavBar
