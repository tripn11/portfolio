import { useEffect, useRef, useState } from 'react'
import useIntersect from '../../hooks/useIntersect'
import useMagneticCursor from '../../hooks/useMagneticCursor'
import useParticles from '../../hooks/useParticles'
import useTypewriter from '../../hooks/useTypewriter'
import ContactSection from './ContactSection'
import CustomCursor from './CustomCursor'
import Footer from './Footer'
import HeroSection from './HeroSection'
import Navbar from './Navbar'
import ParticleCanvas from './ParticleCanvas'
import ProjectsSection from './ProjectsSection'
import SkillsSection from './SkillsSection'

const SECTION_IDS = ['home', 'skills', 'projects', 'contact-me']

function PortfolioApp() {
  const canvasRef = useRef(null)
  const { cursorRef, dotRef } = useMagneticCursor()
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const { display: typedText } = useTypewriter('a Full Stack Developer', 70)
  const [heroRef, heroVisible] = useIntersect({ threshold: 0.3 })

  useParticles(canvasRef)

  useEffect(() => {
    const updatePageState = () => {
      setScrolled(window.scrollY > 50)

      const checkpoint = window.scrollY + window.innerHeight * 0.35
      let currentSection = 'home'

      SECTION_IDS.forEach((id) => {
        const element = document.getElementById(id)

        if (element && element.offsetTop <= checkpoint) {
          currentSection = id
        }
      })

      setActiveSection(currentSection)
    }

    updatePageState()
    window.addEventListener('scroll', updatePageState)

    return () => window.removeEventListener('scroll', updatePageState)
  }, [])

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setActiveSection(id)
  }

  return (
    <div className="portfolio-app">
      <CustomCursor cursorRef={cursorRef} dotRef={dotRef} />
      <ParticleCanvas canvasRef={canvasRef} />
      <Navbar
        activeSection={activeSection}
        onNavigate={scrollToSection}
        scrolled={scrolled}
      />
      <HeroSection
        heroRef={heroRef}
        visible={heroVisible}
        typedText={typedText}
        onProjectsClick={() => scrollToSection('projects')}
        onContactClick={() => scrollToSection('contact-me')}
      />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default PortfolioApp
