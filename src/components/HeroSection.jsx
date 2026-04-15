import GlitchText from './GlitchText'
import MagneticButton from './MagneticButton'

function HeroSection({ heroRef, visible, typedText, onProjectsClick, onContactClick }) {
  return (
    <section id="home" className="hero-section portfolio-section">
      <div className="hero-section__orb hero-section__orb--primary" aria-hidden="true" />
      <div className="hero-section__orb hero-section__orb--secondary" aria-hidden="true" />

      <div ref={heroRef} className="hero-section__content">
        <h1 className="hero-section__title reveal reveal--delay-1" data-visible={visible}>
          Hi, I&apos;m <GlitchText text="Noble" className="hero-section__name" />
        </h1>

        <div className="hero-section__subtitle reveal reveal--delay-2" data-visible={visible}>
          {typedText}
          <span className="hero-section__caret" aria-hidden="true">
            |
          </span>
        </div>

        <p className="hero-section__copy reveal reveal--delay-3" data-visible={visible}>
          Also a Mechanical Engineer. I build fast, beautiful web applications with
          an obsession for details that most people never notice - but everyone
          <em> feels</em>.
        </p>

        <div className="hero-section__actions reveal reveal--delay-4" data-visible={visible}>
          <MagneticButton
            className="button button--primary"
            cursorLabel="explore"
            onClick={onProjectsClick}
          >
            See My Work <span aria-hidden="true">&rarr;</span>
          </MagneticButton>
          <MagneticButton
            className="button button--secondary"
            cursorLabel="talk"
            onClick={onContactClick}
          >
            Let&apos;s Talk
          </MagneticButton>
        </div>
      </div>

      <div className="hero-section__scroll" aria-hidden="true">
        <div className="hero-section__scroll-line" />
        <span className="hero-section__scroll-label">Scroll</span>
      </div>
    </section>
  )
}

export default HeroSection
