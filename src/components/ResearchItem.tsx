import { FaFileLines, FaGithub, FaGlobe } from 'react-icons/fa6'
import { SiArxiv } from 'react-icons/si'
import ExpandableCard from './ExpandableCard'
import IconLinks from './IconLinks'
import { SELF, type IndependentResearch } from '../data/research'
import { slugify } from '../utils/slug'

const linkTypes = [
  { key: 'arxiv', label: 'arXiv', icon: SiArxiv },
  { key: 'website', label: 'Website', icon: FaGlobe },
  { key: 'paper', label: 'Paper', icon: FaFileLines },
  { key: 'github', label: 'GitHub', icon: FaGithub },
] as const

type ResearchItemProps = {
  research: IndependentResearch
}

function ResearchItem({ research }: ResearchItemProps) {
  const links = linkTypes.flatMap(({ key, label, icon }) => {
    const href = research.links?.[key]
    return href ? [{ label, href, icon }] : []
  })

  const technologies = research.technologies.length > 0 && (
    <ul className="tags">
      {research.technologies.map((technology) => (
        <li key={technology}>{technology}</li>
      ))}
    </ul>
  )

  // Authors take precedence over the lab when both are given
  const attribution = research.authors?.length ? (
    <span className="research-authors">
      {research.authors.map((author, i) => (
        <span key={author}>
          {i > 0 && ', '}
          {author.replace(/[*†‡]+$/, '') === SELF ? <u>{author}</u> : author}
        </span>
      ))}
    </span>
  ) : (
    research.lab
  )

  const meta = (attribution || research.year) && (
    <div>
      {attribution}
      {attribution && research.year && ' · '}
      {research.year && <strong>{research.year}</strong>}
    </div>
  )

  return (
    <ExpandableCard
      id={slugify(research.title)}
      title={research.title}
      subtitle={
        research.description ? (
          meta
        ) : (
          <>
            {meta}
            {technologies}
          </>
        )
      }
      trailing={
        <>
          {research.ongoing && <span className="research-ongoing">Ongoing</span>}
          <IconLinks links={links} />
        </>
      }
    >
      {research.description && (
        <>
          <p>{research.description}</p>
          {technologies}
        </>
      )}
    </ExpandableCard>
  )
}

export default ResearchItem
