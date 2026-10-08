import { FaGithub } from 'react-icons/fa6'
import ExpandableCard from './ExpandableCard'
import IconLinks from './IconLinks'
import type { Project } from '../data/projects'
import { slugify } from '../utils/slug'

const isVideo = (src: string) => /\.(mp4|webm|mov)$/i.test(src)

type ProjectItemProps = {
  project: Project
}

function ProjectItem({ project }: ProjectItemProps) {
  const links = project.github ? [{ label: 'GitHub', href: project.github, icon: FaGithub }] : []

  return (
    <ExpandableCard
      id={slugify(project.title)}
      title={
        <>
          {project.title}
          {project.psymatronics && <span className="tag tag-psymatronics">Psymatronics</span>}
          {project.ongoing && <span className="tag tag-ongoing">Ongoing</span>}
        </>
      }
      subtitle={project.blurb}
      trailing={<IconLinks links={links} />}
    >
      <p>{project.summary}</p>
      {project.media && project.media.length > 0 && (
        <div className="project-media">
          {project.media.map((media) =>
            isVideo(media.src) ? (
              <video
                key={media.src}
                src={media.src}
                aria-label={media.alt}
                autoPlay
                loop
                muted
                playsInline
              />
            ) : (
              <img key={media.src} src={media.src} alt={media.alt} loading="lazy" />
            ),
          )}
        </div>
      )}
      {project.technologies.length > 0 && (
        <ul className="tags">
          {project.technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
      )}
    </ExpandableCard>
  )
}

export default ProjectItem
