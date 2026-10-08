import PageHeader from '../components/PageHeader'
import ExternalButtons from '../components/ExternalButtons'
import SkillSearch from '../components/SkillSearch'
import { highlights } from '../data/highlights'
import { semesters } from '../data/courses'

function Home() {
  return (
    <>
      <PageHeader
        title="Ivan Zhang"
        subtitle="Artificial Intelligence | Robotics"
      />
      <ExternalButtons />
      <section className="section about-me">
        <h2>About Me</h2>
        <p>
          I'm Ivan (or Enspikond wherever you find that moniker), an undergraduate
          studying <b>Computer Science</b> at <b>Carnegie Mellon University</b>.
          I'm really interested in the fusion the machine learning and robotic
          systems, and experimenting with how we interact and improve artificial
          intelligence. Currently, I'm trying to improve my skills both in software
          and hardware to accomplish this goal. If that sounds exciting to you, then
          I would love to get in touch!
        </p>
      </section>
      <hr className="section-divider" />
      <section className="section">
        <h2>Updates</h2>
        <ul className="highlights">
          {highlights.map((highlight) => (
            <li key={`${highlight.date}-${highlight.text}`}>
              <span className="highlight-date">{highlight.date}</span>
              <span>
                {highlight.text}
                {highlight.link && (
                  <>
                    {' '}
                    <a href={highlight.link} target="_blank" rel="noreferrer">
                      Learn more →
                    </a>
                  </>
                )}
              </span>
            </li>
          ))}
        </ul>
      </section>
      <hr className="section-divider" />
      <section className="section">
        <h2>Skill Search</h2>
        <SkillSearch />
      </section>
      <hr className="section-divider" />
      <section className="section">
        <h2>Courses</h2>
        <ul className="courses">
          {semesters.map((semester) => (
            <li key={semester.term}>
              <span className="course-term">{semester.term}</span>
              <ul>
                {semester.courses.map((course, index) => (
                  <li key={`${course.number}-${index}`}>
                    <span className="course-number">{course.number}</span>
                    {course.name}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}

export default Home
