export type ResearchLinks = {
  arxiv?: string
  website?: string
  paper?: string
  github?: string
}

// Name underlined in author lists
export const SELF = 'Ivan Zhang'

export type Research = {
  title: string
  // Paper authors in order, shown instead of the lab when present
  authors?: string[]
  year?: string
  ongoing?: boolean
  description?: string
  technologies: string[]
  links?: ResearchLinks
}

export type IndependentResearch = Research & {
  lab?: string
}

export type Lab = {
  name: string
  website?: string
  description?: string
  projects: Research[]
}

export const labs: Lab[] = [
  {
    name: 'ChangeLing Lab, CMU',
    website: 'https://changelinglab.github.io/',
    description:
      "Working under the guidance of Professor David Mortensen on exploring LLM reasoning and reasoning transfer.",
    projects: [
      {
        title: 'Reasoning Behavior Distributions',
        ongoing: true,
        description: "Exploring behavior distributions of LLMs before and after fine-tuning.",
        technologies: ['Python', 'PyTorch', 'HuggingFace', 'PEFT/LoRA', 'SLURM', 'vLLM', 'SGLang'],
      },
      {
        title: 'Sound Change Cascade Task, TerminalBench 3.0',
        authors: ['Atharva Naik', 'Ivan Zhang', 'Yash Mathur', 'David Mortensen'],
        year: '2026',
        description: "Worked with Atharva Naik on developing and submitting a task for TerminalBench 3.0 based on forward reconstruction tasks from PBEBench.",
        technologies: ['Python', 'GitHub'],
        links: {
          website: 'https://hub.harborframework.com/tasks/terminal-bench/sound-change-cascade'
        }
      },
    ],
  }
]

export const independentResearch: IndependentResearch[] = [
  {
    title: 'Training Robots to Reason in Natural Language via Reinforcement Learning',
    lab: 'AIRe Lab, CMU',
    authors: ['Lehong Wu', 'Yuxiao Qu', 'Zheyuan Hu', 'Ivan Zhang', 'Limin Wei', 'Zackory Erickson', 'Aviral Kumar'],
    year: '2026',
    description: 'Worked with Lehong Wu on developing task categories and reasoning trace data-generation prompts for RL training on reasoning data for robot tasks.',
    technologies: ['Python'],
    links: {
      arxiv: 'https://arxiv.org/pdf/2608.26053',
      website: 'https://robotic-reasoner.github.io/'
    }
  },
  {
    title: 'Redteaming Decomposition Attack Defenses',
    lab: 'CMU AI Safety Initiative',
    year: '2026',
    description: 'Built agent harnesses to red-team an AI safety framework designed to defend against decomposition attacks. Utilized prompt injection techniques to jailbreak models to complete tasks on BountyBench and CyBench. Set up orchestration over AWS and Docker to run experiments at scale.',
    technologies: ['Docker', 'AWS', 'Python', 'LLM APIs']
  },
  {
    title: 'A Real-Time, Self-Tuning Moderator Framework for Adversarial Prompt Detection',
    lab: 'Non-Trivial Foundation Fellowship',
    authors: ['Ivan Zhang'],
    year: '2025',
    description:
      'Designed and developed an adaptive jailbreak detection framework driven by weighted safety rubrics, improving adversarial prompt detection by 35-47% across benchmark datasets, and demonstrating light adaptation to novel attacks.',
    technologies: ['Python', 'LLM APIs'],
    links: {
      arxiv: 'https://arxiv.org/abs/2508.07139',
    },
  },
]
