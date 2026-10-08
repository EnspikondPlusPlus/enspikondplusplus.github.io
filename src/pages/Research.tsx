import LabGroup from '../components/LabGroup'
import PageHeader from '../components/PageHeader'
import ResearchItem from '../components/ResearchItem'
import { independentResearch, labs } from '../data/research'

function Research() {
  return (
    <>
      <PageHeader title="Research" subtitle="What I've investigated." />
      <section className="stack">
        {labs.map((lab) => (
          <LabGroup key={lab.name} lab={lab} />
        ))}
        {independentResearch.map((item) => (
          <ResearchItem key={item.title} research={item} />
        ))}
      </section>
    </>
  )
}

export default Research
