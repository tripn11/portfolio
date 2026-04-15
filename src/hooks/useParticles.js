import { useEffect } from 'react'

function useParticles(canvasRef) {
  useEffect(() => {
    const canvas = canvasRef.current

    if (!canvas) {
      return undefined
    }

    const context = canvas.getContext('2d')

    if (!context) {
      return undefined
    }

    const setCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasSize()

    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      size: Math.random() * 1.5 + 0.5,
      opacity: Math.random() * 0.4 + 0.1,
    }))

    let mouse = { x: -9999, y: -9999 }
    let frameId = 0

    const onMove = (event) => {
      mouse = { x: event.clientX, y: event.clientY }
    }

    const draw = () => {
      context.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        const dx = mouse.x - particle.x
        const dy = mouse.y - particle.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < 120) {
          particle.vx -= dx * 0.0003
          particle.vy -= dy * 0.0003
        }

        particle.vx *= 0.99
        particle.vy *= 0.99
        particle.x += particle.vx
        particle.y += particle.vy

        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0

        context.beginPath()
        context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        context.fillStyle = `rgba(167,139,250,${particle.opacity})`
        context.fill()
      })

      particles.forEach((firstParticle, index) => {
        particles.slice(index + 1).forEach((secondParticle) => {
          const dx = firstParticle.x - secondParticle.x
          const dy = firstParticle.y - secondParticle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            context.beginPath()
            context.moveTo(firstParticle.x, firstParticle.y)
            context.lineTo(secondParticle.x, secondParticle.y)
            context.strokeStyle = `rgba(167,139,250,${0.08 * (1 - distance / 100)})`
            context.lineWidth = 0.5
            context.stroke()
          }
        })
      })

      frameId = requestAnimationFrame(draw)
    }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('resize', setCanvasSize)
    draw()

    return () => {
      cancelAnimationFrame(frameId)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('resize', setCanvasSize)
    }
  }, [canvasRef])
}

export default useParticles
