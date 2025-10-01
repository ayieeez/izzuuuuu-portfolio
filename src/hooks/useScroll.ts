import { useState, useEffect } from 'react'

interface UseScrollReturn {
  scrollY: number
  scrollProgress: number
  isScrolled: boolean
}

export function useScroll(): UseScrollReturn {
  const [scrollY, setScrollY] = useState(0)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    let ticking = false

    const updateScroll = () => {
      const currentScrollY = window.scrollY
      
      // Smooth progress calculation (0 to 1 over 120px)
      const progress = Math.min(Math.max(currentScrollY / 120, 0), 1)
      
      setScrollY(currentScrollY)
      setScrollProgress(progress)
      setIsScrolled(currentScrollY > 10)
      
      ticking = false
    }

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateScroll)
        ticking = true
      }
    }

    // Set initial values
    updateScroll()

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return {
    scrollY,
    scrollProgress,
    isScrolled,
  }
}
