import useIntersect from '../hooks/useIntersect'

function SkillOrb({ skill, index }) {
  const [ref, visible] = useIntersect({ threshold: 0.1 })

  return (
    <div
      ref={ref}
      className="skill-orb"
      data-cursor="skill"
      data-visible={visible}
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      {skill}
    </div>
  )
}

export default SkillOrb
