import type { IconType } from 'react-icons'

export type IconLink = {
  label: string
  href: string
  icon: IconType
}

type IconLinksProps = {
  links: IconLink[]
}

function IconLinks({ links }: IconLinksProps) {
  if (links.length === 0) return null

  return (
    <ul className="icon-links">
      {links.map(({ label, href, icon: Icon }) => (
        <li key={label}>
          <a href={href} target="_blank" rel="noreferrer" title={label} aria-label={label}>
            <Icon aria-hidden="true" />
          </a>
        </li>
      ))}
    </ul>
  )
}

export default IconLinks
