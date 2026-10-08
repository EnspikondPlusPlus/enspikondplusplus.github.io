export type Experience = {
  role: string
  organization: string
  logo?: string
  dates: string
  duration: string
  location: string
  highlights: string[]
  technologies: string[]
}

export const experiences: Experience[] = [
  {
    role: 'Perception Software Engineering Intern',
    organization: 'Astrobotic',
    logo: 'src/assets/astrobotic.jpg',
    dates: 'Summer 2026',
    duration: '3 months',
    location: 'Pittsburgh, PA',
    highlights: [
      'Developed and optimized algorithms for terrain-relative navigation (TRN) for lunar landers using LiDAR point-cloud data. Improved codebase testing, CI/CD, and documentation.'
    ],
    technologies: ['Python', 'C++', 'LiDAR', 'Point Cloud Registration', 'OpenCV', 'Open3D', 'Gaussian Splatting', 'PyInstrument', 'Sphinx', 'CI/CD'],
  },
  {
    role: 'Educational Fellow',
    organization: 'Navteca',
    logo: 'src/assets/navteca.jpg',
    dates: 'Summer 2026',
    duration: '4 months',
    location: 'Greenbelt, MD (Remote)',
    highlights: [
      'Researched performance of vision foundation models on segmentation tasks for Mars rover imagery, and developed data clean procedures and lightweight mitigations to improve model performance.'
    ],
    technologies: ['PyTorch', 'Computer Vision', 'Data Pipelines', 'PEFT/LoRA', 'Vision Foundation Models', 'Modal', 'Python'],
  },
  {
    role: 'Machine Learning and HPC Intern',
    organization: 'NASA Goddard Space Flight Center',
    logo: 'src/assets/gsfc.jpg',
    dates: 'Summer 2025',
    duration: '3 months',
    location: 'Greenbelt, MD',
    highlights: [
      'Developed ML model architectures with PyTorch and JupyterLab for learned data compression. Created automation scripts and tooling to improve compression method experimentation efficiency. Discussed findings with research scientists from GMAO to guide data workflows.'
    ],
    technologies: ['PyTorch', 'JupyterLab', 'Data Pipelines', 'Python'],
  },
  {
    role: 'Software Developer and Mentor',
    organization: 'FIRST Tech Challenge (Equilibrium.exe)',
    logo: 'src/assets/ftc.jpg',
    dates: '2020 - 2025',
    duration: '5 years',
    location: 'Rockville, MD',
    highlights: [
      'Developed software for autonomous and driver-controlled functionality for robots using Java. Created and publish a game-scoring application with React native and Expo Go, with 300+ downloads. Designed and taught Java curricula for summer classes.'
    ],
    technologies: ['Java', 'State Machines', 'React Native', 'Expo', '3D Printing'],
  },
]
