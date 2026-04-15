import { useEffect, useRef } from 'react'

function useMagneticCursor() {
  const pos = useRef({ x: -200, y: -200 })
  const dot = useRef({ x: -200, y: -200 })
  const raf = useRef(null)
  const cursorRef = useRef(null)
  const dotRef = useRef(null)
  const isHovering = useRef(false)
  const hoverText = useRef('')

  useEffect(() => {
    const onMove = (event) => {
      pos.current = { x: event.clientX, y: event.clientY }
    }

    const onEnter = (event) => {
      const element = event.target.closest('[data-cursor]')

      if (element) {
        isHovering.current = true
        hoverText.current = element.dataset.cursor || ''
      }
    }

    const onLeave = (event) => {
      const element = event.target.closest('[data-cursor]')

      if (element) {
        isHovering.current = false
        hoverText.current = ''
      }
    }

    const animate = () => {
      dot.current.x += (pos.current.x - dot.current.x) * 0.12
      dot.current.y += (pos.current.y - dot.current.y) * 0.12

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px)`
        cursorRef.current.style.width = isHovering.current ? '80px' : '12px'
        cursorRef.current.style.height = isHovering.current ? '80px' : '12px'
        cursorRef.current.style.opacity = isHovering.current ? '0.15' : '0.9'

        const label = cursorRef.current.querySelector('.cursor-label')

        if (label) {
          label.textContent = hoverText.current
          label.style.opacity = isHovering.current ? '1' : '0'
        }
      }

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${dot.current.x}px, ${dot.current.y}px)`
        dotRef.current.style.width = isHovering.current ? '6px' : '4px'
        dotRef.current.style.height = isHovering.current ? '6px' : '4px'
      }

      raf.current = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', onMove)
    document.addEventListener('mouseover', onEnter)
    document.addEventListener('mouseout', onLeave)
    raf.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onEnter)
      document.removeEventListener('mouseout', onLeave)

      if (raf.current) {
        cancelAnimationFrame(raf.current)
      }
    }
  }, [])

  return { cursorRef, dotRef }
}

export default useMagneticCursor
