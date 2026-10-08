import PageHeader from '../components/PageHeader'
import ExperienceItem from '../components/ExperienceItem'
import { experiences } from '../data/experience'

function Experience() {
  return (
    <>
      <PageHeader title="Experience" subtitle="What I've done in industry and academic orgs." />
      <section className="stack">
        {experiences.map((experience) => (
          <ExperienceItem
            key={`${experience.organization}-${experience.role}`}
            experience={experience}
          />
        ))}
      </section>
    </>
  )
}

export default Experience
