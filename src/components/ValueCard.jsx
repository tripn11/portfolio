import useIntersect from '../hooks/useIntersect'

function ValueCard({ value, index }) {
  const [ref, visible] = useIntersect({ threshold: 0.1 })

  return (
    <article
      ref={ref}
      className="value-card"
      data-visible={visible}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="value-card__icon" aria-hidden="true">
        {value.icon}
      </div>
      <h3 className="value-card__title">{value.title}</h3>
      <p className="value-card__description">{value.description}</p>
    </article>
  )
}

export default ValueCard
