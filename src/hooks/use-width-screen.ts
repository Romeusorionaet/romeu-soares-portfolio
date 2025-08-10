import { useEffect, useState } from 'react'

export function useWidthScreen() {
  const [widthScreen, setWidthScreen] = useState<number | null>(null)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => setWidthScreen(window.innerWidth)

      setWidthScreen(window.innerWidth)

      window.addEventListener('resize', handleResize)

      return () => window.removeEventListener('resize', handleResize)
    }
  }, [])

  return { widthScreen }
}
