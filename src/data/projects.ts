export type ProjectMedia = {
  src: string
  alt: string
}

export type Project = {
  title: string
  github?: string
  blurb: string
  psymatronics?: boolean
  ongoing?: boolean
  summary: string
  media?: ProjectMedia[]
  technologies: string[]
}

export const projects: Project[] = [
  {
    title: 'Dahlia',
    github: 'https://github.com/Psymatronics-Lab/Dahlia',
    psymatronics: true,
    ongoing: true,
    blurb: 'Custom 5+1 DOF robotic arm with wireless control and inverse kinematics.',
    summary:
      'A robotic arm engineered from scratch with an Arduino UNO Q and 3D-printed, custom-CADed components. I wrote C++/Python firmware to control bus servos, expose BLE services for wireless control, solve inverse kinematics, and integrate with the LeRobot environment.',
    technologies: ['Arduino', 'BLE', 'LeRobot', 'CAD', '3D Printing', 'C++', 'Python'],
  },
  {
    title: 'Posematic',
    ongoing: true,
    blurb: '2D-to-3D sketch-to-pose app for posing 3D models from drawings and images.',
    summary:
      'A cross-platform 2D-to-3D sketch-to-pose application built with CMU ScottyLabs. I developed Blender data pipelines, TypeScript/Three.js frontend tooling for VRM manipulation, and shared API contracts between a PyTriton inference backend and the frontend.',
    technologies: ['TypeScript', 'Three.js', 'Blender', 'Python', 'PyTriton'],
  },
  {
    title: 'Neophytic Rooms',
    github: 'https://github.com/EnspikondPlusPlus/neophytic-rooms-green',
    blurb: 'Reasoning benchmark and RL environment for LLMs.',
    summary:
      'An OpenEnv RL environment, built for Berkeley RDI AgentBeats, that benchmarks reasoning with imperfect information in LLMs and RL agents. I made A2A servers to agentify the environment and deployed it with Docker and GHCR.',
    technologies: ['OpenEnv', 'A2A', 'Docker', 'GHCR', 'Python'],
  },
  {
    title: 'Lasagna (BitCamp Hackathon 2026)',
    github: 'https://github.com/EnspikondPlusPlus/lasagna',
    blurb: 'Drag-and-drop block-style programming for deep learning.',
    summary:
      'A Scratch-esque platform for designing and creating basic neural networks and quantum neural networks using autoconnecting blocks. I created backend scripts that managed "transpiling", training, and exporting the model as a working PyTorch class.',
    technologies: ['PennyLane', 'PyTorch', 'FastAPI', 'Python'],
  },
  {
    title: 'FluSight MDPredict',
    github: 'https://github.com/EnspikondPlusPlus/mdpredict-flusightfork',
    blurb: 'Predicting US influenza hospitalizations using SIRS modeling.',
    summary:
      'A MCMC and SIRS-based prediction model of influenza hospitalization trends across the US. I created data processing and modeling algorithms for CDC datasets, and our model achieved the highest accuracy on national hospitalizations in the 2024-2025 season, weighted by weeks participated.',
    technologies: ['MCMC Modeling', 'Python'],
  },
]
