import { hexToRgb } from '../utils/color'
import MagneticButton from './MagneticButton'
import useIntersect from '../hooks/useIntersect'

function ProjectCard({ project, index }) {
  const [ref, visible] = useIntersect({ threshold: 0.15 })
  const liveButtonClassName = `button button--project-primary${
    project.live ? '' : ' button--disabled'
  }`
  const codeButtonClassName = `button button--project-secondary${
    project.code ? '' : ' button--disabled'
  }`

  return (
    <article
      ref={ref}
      className="project-card"
      data-visible={visible}
      style={{
        '--project-color': project.color,
        '--project-accent': project.accent,
        '--project-rgb': hexToRgb(project.color),
        transitionDelay: `${index * 120}ms`,
      }}
    >
      <div className="project-card__surface">
        <div className="project-card__glow" aria-hidden="true" />

        <div className="project-card__header">
          <div>
            <div className="project-card__tag">{project.tag}</div>
            <h3 className="project-card__title">{project.name}</h3>
          </div>

          <span className="project-card__year">{project.year}</span>
        </div>

        <p className="project-card__description">{project.description}</p>

        <div className="project-card__tech">
          {project.tech.map((item) => (
            <span key={item} className="project-card__tech-item">
              {item}
            </span>
          ))}
        </div>

        <div className="project-card__actions">
          {project.live ? (
            <MagneticButton
              href={project.live}
              cursorLabel="open"
              className={liveButtonClassName}
              style={{ '--button-color': project.color }}
            >
              Visit Site
            </MagneticButton>
          ) : (
            <button
              type="button"
              className={liveButtonClassName}
              disabled
              aria-disabled="true"
            >
              Visit Site
            </button>
          )}

          {project.code ? (
            <MagneticButton
              href={project.code}
              cursorLabel="code"
              className={codeButtonClassName}
            >
              View Code
            </MagneticButton>
          ) : (
            <button
              type="button"
              className={codeButtonClassName}
              disabled
              aria-disabled="true"
            >
              View Code
            </button>
          )}
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
