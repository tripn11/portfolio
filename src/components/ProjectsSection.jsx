import { PROJECTS } from '../data/portfolioContent'
import SectionIntro from './SectionIntro'
import ProjectCard from './ProjectCard'

function ProjectsSection() {
  return (
    <section id="projects" className="portfolio-section projects-section">
      <SectionIntro label="Selected Work" title="Things I&apos;ve Built" />

      <div className="projects-section__grid">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={project.name} project={project} index={index} />
        ))}
      </div>
    </section>
  )
}

export default ProjectsSection
