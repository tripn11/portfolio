import { useEffect, useRef, useState } from 'react'

function useIntersect(options = {}) {
  const { threshold = 0.1, root = null, rootMargin = '0px' } = options
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold, root, rootMargin },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [root, rootMargin, threshold])

  return [ref, visible]
}

export default useIntersect
