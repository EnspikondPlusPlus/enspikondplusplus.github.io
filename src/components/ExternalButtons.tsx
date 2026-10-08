import { socialLinks } from '../data/social'

function ExternalButtons() {
  return (
    <ul className="external-buttons">
      {socialLinks.map(({ label, href, icon: Icon }) => (
        <li key={label}>
          <a href={href} target="_blank" rel="noreferrer">
            <Icon aria-hidden="true" />
            {label}
          </a>
        </li>
      ))}
    </ul>
  )
}

export default ExternalButtons
