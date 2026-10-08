export type Course = {
  number: string
  name: string
}

export type Semester = {
  term: string
  courses: Course[]
}

export const semesters: Semester[] = [
  {
    term: 'Fall 2026',
    courses: [
      { number: '11-485', name: 'Introduction to Deep Learning' },
      { number: '15-259', name: 'Probability and Computing' },
      { number: '15-210', name: 'Parallel and Sequential Data Structures and Algorithms' },
      { number: '16-385', name: 'Computer Vision' },
      { number: '80-180', name: 'Introduction to Linguistics' },
    ],
  },
  {
    term: 'Spring 2026',
    courses: [
      { number: '15-213', name: 'Introduction to Computer Systems' },
      { number: '21-266', name: 'Vector Calculus using Matrix Algebra' },
      { number: '15-150', name: 'Principles of Functional Programming' },
      { number: '11-345', name: 'Independent Study in LTI' },
      { number: '07-280', name: 'Concepts in Artificial Intelligence' },
      { number: '16-280', name: 'Concepts in Robotics' },
    ],
  },
  {
    term: 'Fall 2025',
    courses: [
      { number: '15-151', name: 'Concepts of Mathematics' },
      { number: '21-241', name: 'Matrix Algebra' },
      { number: '15-122', name: 'Principles of Imperative Computation' },
      { number: '82-279', name: 'Anime, Visual Interplay Between Japan and the World' },
    ],
  },
]
