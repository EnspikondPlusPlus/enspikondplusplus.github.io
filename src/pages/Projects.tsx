import PageHeader from '../components/PageHeader'
import ProjectItem from '../components/ProjectItem'
import { projects } from '../data/projects'

function Projects() {
  return (
    <>
      <PageHeader title="Projects" subtitle="What I've built." />
      <section className="stack">
        {projects.map((project) => (
          <ProjectItem key={project.title} project={project} />
        ))}
      </section>
    </>
  )
}

export default Projects
