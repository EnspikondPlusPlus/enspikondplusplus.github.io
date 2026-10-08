import { useEffect, useRef, useState, type MouseEvent, type ReactNode } from 'react'
import { useSearchParams } from 'react-router-dom'
import { FaChevronDown } from 'react-icons/fa6'

type ExpandableCardProps = {
  id?: string
  title: ReactNode
  subtitle?: ReactNode
  leading?: ReactNode
  trailing?: ReactNode
  children?: ReactNode
}

function ExpandableCard({ id, title, subtitle, leading, trailing, children }: ExpandableCardProps) {
  const [searchParams] = useSearchParams()
  const focused = id !== undefined && searchParams.get('focus') === id
  const [open, setOpen] = useState(focused)
  const ref = useRef<HTMLElement>(null)
  const expandable = Boolean(children)

  // Cards linked to with ?focus=<id> start open and scroll into view
  useEffect(() => {
    if (focused) ref.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }, [focused])

  const toggle = (event: MouseEvent) => {
    if (!(event.target as Element).closest('a')) setOpen(!open)
  }

  return (
    <article
      ref={ref}
      id={id}
      className={`card expandable${open ? ' open' : ''}${focused ? ' focused' : ''}`}
    >
      <div
        className={`expandable-header${expandable ? '' : ' static'}`}
        onClick={expandable ? toggle : undefined}
      >
        {leading}
        <div className="expandable-title">
          <h2>{title}</h2>
          {subtitle && <div className="expandable-subtitle">{subtitle}</div>}
        </div>
        {trailing && <div className="expandable-trailing">{trailing}</div>}
        {expandable && (
          <button
            type="button"
            className="expandable-toggle"
            aria-expanded={open}
            aria-label={open ? 'Hide details' : 'Show details'}
          >
            <FaChevronDown aria-hidden="true" />
          </button>
        )}
      </div>
      {open && expandable && <div className="expandable-body">{children}</div>}
    </article>
  )
}

export default ExpandableCard
