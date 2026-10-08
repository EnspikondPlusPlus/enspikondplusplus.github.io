import ExpandableCard from './ExpandableCard'
import type { Experience } from '../data/experience'
import { slugify } from '../utils/slug'

type ExperienceItemProps = {
  experience: Experience
}

function ExperienceItem({ experience }: ExperienceItemProps) {
  return (
    <ExpandableCard
      id={slugify(experience.organization)}
      title={`${experience.organization} · ${experience.role}`}
      subtitle={`${experience.duration} · ${experience.location}`}
      leading={
        <div className="experience-logo">
          {experience.logo ? (
            <img src={experience.logo} alt="" />
          ) : (
            experience.organization.charAt(0)
          )}
        </div>
      }
      trailing={<span className="experience-period">{experience.dates}</span>}
    >
      <ul>
        {experience.highlights.map((highlight) => (
          <li key={highlight}>{highlight}</li>
        ))}
      </ul>
      {experience.technologies.length > 0 && (
        <ul className="tags">
          {experience.technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
      )}
    </ExpandableCard>
  )
}

export default ExperienceItem
