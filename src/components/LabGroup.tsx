import { FaGlobe } from 'react-icons/fa6'
import IconLinks from './IconLinks'
import ResearchItem from './ResearchItem'
import type { Lab } from '../data/research'

type LabGroupProps = {
  lab: Lab
}

function LabGroup({ lab }: LabGroupProps) {
  const links = lab.website ? [{ label: 'Lab website', href: lab.website, icon: FaGlobe }] : []

  return (
    <article className="card lab-group">
      <div className="lab-group-header">
        <h2>{lab.name}</h2>
        <IconLinks links={links} />
      </div>
      {lab.description && <p className="lab-group-description">{lab.description}</p>}
      <div className="stack">
        {lab.projects.map((project) => (
          <ResearchItem key={project.title} research={project} />
        ))}
      </div>
    </article>
  )
}

export default LabGroup
