import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaMagnifyingGlass } from 'react-icons/fa6'
import { allSkills, skillEntries } from '../data/skills'

function SkillSearch() {
  const [query, setQuery] = useState('')
  const term = query.trim().toLowerCase()

  const matchingSkills = term
    ? allSkills.filter((skill) => skill.toLowerCase().includes(term))
    : allSkills
  const results = term
    ? skillEntries.filter((entry) =>
        entry.technologies.some((technology) => technology.toLowerCase().includes(term)),
      )
    : []

  return (
    <div className="skill-search">
      <label className="skill-search-input">
        <FaMagnifyingGlass aria-hidden="true" />
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search a skill, e.g. PyTorch"
          aria-label="Search a skill"
        />
      </label>
      {matchingSkills.length > 0 && (
        <ul className="tags skill-search-skills">
          {matchingSkills.map((skill) => (
            <li key={skill}>
              <button
                type="button"
                className={skill.toLowerCase() === term ? 'active' : undefined}
                onClick={() => setQuery(skill)}
              >
                {skill}
              </button>
            </li>
          ))}
        </ul>
      )}
      {term && (
        <ul className="skill-search-results">
          {results.length > 0 ? (
            results.map((entry) => (
              <li key={entry.path}>
                <span className="skill-search-kind">{entry.kind}</span>
                <span>
                  <Link to={entry.path}>{entry.title}</Link>
                  {entry.context && <span className="skill-search-context"> · {entry.context}</span>}
                </span>
              </li>
            ))
          ) : (
            <li className="skill-search-empty">No experience, research or projects use that skill yet.</li>
          )}
        </ul>
      )}
    </div>
  )
}

export default SkillSearch
