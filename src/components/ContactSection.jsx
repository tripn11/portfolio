import useIntersect from '../hooks/useIntersect'
import ContactForm from './ContactForm'
import ContactLinks from './ContactLinks'
import SectionIntro from './SectionIntro'

function ContactSection() {
  const [introRef, visible] = useIntersect({ threshold: 0.1 })

  return (
    <section id="contact-me" className="portfolio-section contact-section">
      <div ref={introRef} className="contact-section__intro">
        <SectionIntro
          label="Get In Touch"
          title={
            <>
              Let&apos;s Build
              <br />
              <span className="contact-section__accent">Something</span> Together
            </>
          }
          description="Got a project in mind? I'm open to freelance, collaboration, or full-time opportunities."
          visible={visible}
        />
      </div>

      <div className="contact-section__grid">
        <ContactForm />
        <ContactLinks />
      </div>
    </section>
  )
}

export default ContactSection
