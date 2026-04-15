function SectionIntro({ label, title, description, centered = false, visible = true }) {
  return (
    <div className={`section-intro ${centered ? 'section-intro--centered' : ''}`}>
      <div className="section-intro__eyebrow">
        <span className="section-intro__line" />
        <span className="section-intro__label">{label}</span>
      </div>
      <h2 className="section-intro__title" data-visible={visible}>
        {title}
      </h2>
      {description ? <p className="section-intro__copy">{description}</p> : null}
    </div>
  )
}

export default SectionIntro
