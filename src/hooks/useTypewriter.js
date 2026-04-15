import { useEffect, useState } from 'react'

function useTypewriter(text, speed = 80) {
  const [display, setDisplay] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    setDisplay('')
    setDone(false)

    let index = 0
    const intervalId = window.setInterval(() => {
      index += 1
      setDisplay(text.slice(0, index))

      if (index >= text.length) {
        window.clearInterval(intervalId)
        setDone(true)
      }
    }, speed)

    return () => window.clearInterval(intervalId)
  }, [speed, text])

  return { display, done }
}

export default useTypewriter
