import { useEffect, useState } from 'react'

function GlitchText({ text, className = '' }) {
  const [glitching, setGlitching] = useState(false)

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setGlitching(true)
      window.setTimeout(() => setGlitching(false), 200)
    }, 4000 + Math.random() * 3000)

    return () => window.clearInterval(intervalId)
  }, [])

  return (
    <span className={`glitch-text ${glitching ? 'is-glitching' : ''} ${className}`.trim()}>
      <span className="glitch-text__base">{text}</span>
      <span className="glitch-text__layer glitch-text__layer--top" aria-hidden="true">
        {text}
      </span>
      <span className="glitch-text__layer glitch-text__layer--bottom" aria-hidden="true">
        {text}
      </span>
    </span>
  )
}

export default GlitchText
