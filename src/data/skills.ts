import { experiences } from './experience'
import { projects } from './projects'
import { independentResearch, labs } from './research'
import { slugify } from '../utils/slug'

export type SkillEntry = {
  title: string
  kind: 'Experience' | 'Research' | 'Project'
  context?: string
  path: string
  technologies: string[]
}

// Every experience, research project and project, indexed by its technical tags
export const skillEntries: SkillEntry[] = [
  ...experiences.map((experience) => ({
    title: experience.organization,
    kind: 'Experience' as const,
    context: experience.role,
    path: `/experience?focus=${slugify(experience.organization)}`,
    technologies: experience.technologies,
  })),
  ...labs.flatMap((lab) =>
    lab.projects.map((research) => ({
      title: research.title,
      kind: 'Research' as const,
      context: lab.name,
      path: `/research?focus=${slugify(research.title)}`,
      technologies: research.technologies,
    })),
  ),
  ...independentResearch.map((research) => ({
    title: research.title,
    kind: 'Research' as const,
    context: research.lab,
    path: `/research?focus=${slugify(research.title)}`,
    technologies: research.technologies,
  })),
  ...projects.map((project) => ({
    title: project.title,
    kind: 'Project' as const,
    path: `/projects?focus=${slugify(project.title)}`,
    technologies: project.technologies,
  })),
]

export const allSkills = [...new Set(skillEntries.flatMap((entry) => entry.technologies))].sort(
  (a, b) => a.localeCompare(b),
)
