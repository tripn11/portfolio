import { useState } from 'react'
import useIntersect from '../hooks/useIntersect'
import MagneticButton from './MagneticButton'

function ContactForm() {
  const [ref, visible] = useIntersect({ threshold: 0.1 })
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (field) => (event) => {
    setForm((currentForm) => ({ ...currentForm, [field]: event.target.value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (form.name && form.email && form.message) {
      setSent(true)
    }
  }

  if (sent) {
    return (
      <div ref={ref} className="contact-form contact-form--success" data-visible={visible}>
        <div className="contact-form__check" aria-hidden="true">
          &#10003;
        </div>
        <p className="contact-form__success-title">Message sent.</p>
        <p className="contact-form__success-copy">I&apos;ll get back to you soon.</p>
      </div>
    )
  }

  return (
    <form ref={ref} className="contact-form" data-visible={visible} onSubmit={handleSubmit}>
      <div className="contact-form__field">
        <label className="contact-form__label" htmlFor="contact-name">
          Name
        </label>
        <input
          id="contact-name"
          className="contact-form__input"
          value={form.name}
          onChange={handleChange('name')}
          placeholder="Your name"
        />
      </div>

      <div className="contact-form__field">
        <label className="contact-form__label" htmlFor="contact-email">
          Email
        </label>
        <input
          id="contact-email"
          className="contact-form__input"
          value={form.email}
          onChange={handleChange('email')}
          placeholder="your@email.com"
          type="email"
        />
      </div>

      <div className="contact-form__field">
        <label className="contact-form__label" htmlFor="contact-message">
          Message
        </label>
        <textarea
          id="contact-message"
          className="contact-form__input contact-form__input--textarea"
          value={form.message}
          onChange={handleChange('message')}
          placeholder="What's on your mind?"
          rows={6}
        />
      </div>

      <MagneticButton className="button button--primary button--submit" cursorLabel="send" type="submit">
        Send Message <span aria-hidden="true">&rarr;</span>
      </MagneticButton>
    </form>
  )
}

export default ContactForm
