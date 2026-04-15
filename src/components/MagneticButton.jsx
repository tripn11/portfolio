import { useRef } from 'react'

function MagneticButton({
  children,
  href,
  onClick,
  className = '',
  cursorLabel,
  style,
  type = 'button',
}) {
  const ref = useRef(null)

  const handleMove = (event) => {
    if (!ref.current) {
      return
    }

    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const deltaX = (event.clientX - centerX) * 0.3
    const deltaY = (event.clientY - centerY) * 0.3

    ref.current.style.transform = `translate(${deltaX}px, ${deltaY}px)`
  }

  const handleLeave = () => {
    if (ref.current) {
      ref.current.style.transform = 'translate(0, 0)'
    }
  }

  const sharedProps = {
    ref,
    onMouseMove: handleMove,
    onMouseLeave: handleLeave,
    className: `magnetic-button ${className}`.trim(),
    'data-cursor': cursorLabel || '',
    style,
  }

  if (href) {
    return (
      <a
        {...sharedProps}
        href={href}
        target="_blank"
        rel="noreferrer"
        onClick={onClick}
      >
        {children}
      </a>
    )
  }

  return (
    <button {...sharedProps} type={type} onClick={onClick}>
      {children}
    </button>
  )
}

export default MagneticButton
