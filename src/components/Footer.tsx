import { socialLinks } from '../data/social'

function Footer() {
  return (
    <footer className="footer">
      <ul>
        {socialLinks.map(({ label, href, icon: Icon }) => (
          <li key={label}>
            <a href={href} target="_blank" rel="noreferrer">
              <Icon aria-hidden="true" />
              {label}
            </a>
          </li>
        ))}
      </ul>
      <p>© {new Date().getFullYear()} enspikondplusplus</p>
    </footer>
  )
}

export default Footer
