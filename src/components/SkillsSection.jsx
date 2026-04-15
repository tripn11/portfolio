import { SKILLS, VALUES } from '../data/portfolioContent'
import useIntersect from '../hooks/useIntersect'
import SectionIntro from './SectionIntro'
import SkillOrb from './SkillOrb'
import ValueCard from './ValueCard'

function SkillsSection() {
  const [introRef, visible] = useIntersect({ threshold: 0.1 })

  return (
    <section id="skills" className="portfolio-section skills-section">
      <div ref={introRef}>
        <SectionIntro label="Capabilities" title="What I Work With" visible={visible} />
      </div>

      <div className="skills-section__orbs">
        {SKILLS.map((skill, index) => (
          <SkillOrb key={skill} skill={skill} index={index} />
        ))}
      </div>

      <div className="skills-section__values">
        {VALUES.map((value, index) => (
          <ValueCard key={value.title} value={value} index={index} />
        ))}
      </div>
    </section>
  )
}

export default SkillsSection
