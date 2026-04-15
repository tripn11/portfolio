import { useEffect, useRef, useState } from 'react'
import useIntersect from './hooks/useIntersect'
import useMagneticCursor from './hooks/useMagneticCursor'
import useParticles from './hooks/useParticles'
import useTypewriter from './hooks/useTypewriter'
import ContactSection from './components/ContactSection'
import CustomCursor from './components/CustomCursor'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import ParticleCanvas from './components/ParticleCanvas'
import ProjectsSection from './components/ProjectsSection'
import SkillsSection from './components/SkillsSection'

const SECTION_IDS = ['home', 'skills', 'projects', 'contact-me']

function App() {
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

export default App
