import { NAV_ITEMS } from '../data/portfolioContent'
import MagneticButton from './MagneticButton'

function Navbar({ activeSection, onNavigate, scrolled }) {
  return (
    <nav className={`site-nav ${scrolled ? 'site-nav--scrolled' : ''}`}>
      <div className="site-nav__brand-placeholder" aria-hidden="true" />

      <div className="site-nav__links">
        {NAV_ITEMS.map((item) => (
          <button
            key={item.id}
            type="button"
            className={`site-nav__link ${activeSection === item.id ? 'site-nav__link--active' : ''}`}
            data-cursor={item.label}
            onClick={() => onNavigate(item.id)}
          >
            {item.label}
          </button>
        ))}

        <MagneticButton
          href="./Nwala-Noble.pdf"
          cursorLabel="resume"
          className="site-nav__resume"
        >
          Resume
        </MagneticButton>
      </div>
    </nav>
  )
}

export default Navbar
