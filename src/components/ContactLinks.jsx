import {
  FaEnvelope,
  FaGithub,
  FaLinkedinIn,
  FaWhatsapp,
} from 'react-icons/fa6'
import { CONTACT_LINKS } from '../data/portfolioContent'
import MagneticButton from './MagneticButton'

const ICONS = {
  email: FaEnvelope,
  github: FaGithub,
  linkedin: FaLinkedinIn,
  whatsapp: FaWhatsapp,
}

function ContactLinks() {
  return (
    <div className="contact-links">
      {CONTACT_LINKS.map((link) => {
        const Icon = ICONS[link.iconKey]

        return (
          <MagneticButton
            key={link.label}
            href={link.href}
            cursorLabel={link.label.toLowerCase()}
            className="contact-links__item"
          >
            <span className="contact-links__icon" aria-hidden="true">
              <Icon />
            </span>
            <span className="contact-links__body">
              <span className="contact-links__label">{link.label}</span>
              <span className="contact-links__value">{link.value}</span>
            </span>
          </MagneticButton>
        )
      })}
    </div>
  )
}

export default ContactLinks
