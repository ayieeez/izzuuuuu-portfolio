"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)
  const [isAnimating, setIsAnimating] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const handleThemeChange = (event: React.MouseEvent<HTMLButtonElement>) => {
    setIsAnimating(true)
    
    // Get button position for origin point
    const rect = event.currentTarget.getBoundingClientRect()
    const x = rect.left + rect.width / 2
    const y = rect.top + rect.height / 2
    
    console.log('Button position:', { x, y }) // Debug log
    
    // Create the circular wipe overlay
    const wipeElement = document.createElement('div')
    const nextThemeColor = theme === 'light' ? '#000000' : '#ffffff'
    
    // Set styles directly
    wipeElement.style.position = 'fixed'
    wipeElement.style.top = `${y}px`
    wipeElement.style.left = `${x}px`
    wipeElement.style.width = '20px'
    wipeElement.style.height = '20px'
    wipeElement.style.backgroundColor = nextThemeColor
    wipeElement.style.borderRadius = '50%'
    wipeElement.style.zIndex = '999999'
    wipeElement.style.pointerEvents = 'none'
    wipeElement.style.transform = 'translate(-50%, -50%)'
    wipeElement.style.transition = 'all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
    wipeElement.style.willChange = 'transform'
    
    // Add to body
    document.body.appendChild(wipeElement)
    console.log('Element added to body') // Debug log
    
    // Start the expansion
    requestAnimationFrame(() => {
      const screenDiagonal = Math.sqrt(window.innerWidth ** 2 + window.innerHeight ** 2)
      const finalSize = screenDiagonal * 2
      
      wipeElement.style.width = `${finalSize}px`
      wipeElement.style.height = `${finalSize}px`
      console.log('Animation started, final size:', finalSize) // Debug log
    })
    
    // Change theme
    setTimeout(() => {
      setTheme(theme === "light" ? "dark" : "light")
      console.log('Theme changed') // Debug log
    }, 600)
    
    // Clean up
    setTimeout(() => {
      if (document.body.contains(wipeElement)) {
        document.body.removeChild(wipeElement)
        console.log('Element removed') // Debug log
      }
      setIsAnimating(false)
    }, 1200)
  }

  if (!mounted) {
    return (
      <button
        className="inline-flex cursor-pointer items-center justify-center whitespace-nowrap text-sm font-semibold h-11 w-11 border-bg-700 bg-backdrop text-text-primary relative rounded-full border shadow backdrop-blur-md transition-all active:scale-90 sm:h-10 sm:w-10 sm:border-none sm:bg-transparent sm:shadow-none sm:backdrop-blur-none disabled:opacity-50"
        disabled
      >
        <span className="sr-only">Loading theme toggle</span>
      </button>
    )
  }

  const isDark = theme === "dark"

  return (
    <button
      onClick={handleThemeChange}
      disabled={isAnimating}
      className={`inline-flex cursor-pointer items-center justify-center whitespace-nowrap text-sm font-semibold focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-11 w-11 border-bg-700 bg-backdrop text-foreground relative rounded-full border shadow backdrop-blur-md transition-all active:scale-90 sm:h-10 sm:w-10 sm:border-none sm:bg-transparent sm:shadow-none sm:backdrop-blur-none ${isAnimating ? 'scale-95 opacity-75' : 'scale-100 opacity-100'}`}
      aria-label="Toggle theme"
      style={{
        transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)'
      }}
    >
      <div 
        className="absolute inset-0 flex items-center justify-center transition-all duration-500 ease-out"
        style={{
          opacity: isDark ? 0 : 1,
          transform: isDark ? 'scale(0.3) rotate(-90deg)' : 'scale(1) rotate(0deg)',
          filter: isDark ? 'blur(4px)' : 'blur(0px)'
        }}
      >
        <Sun className="h-[18px] w-[18px]" />
      </div>
      <div 
        className="absolute inset-0 flex items-center justify-center transition-all duration-500 ease-out"
        style={{
          opacity: isDark ? 1 : 0,
          transform: isDark ? 'scale(1) rotate(0deg)' : 'scale(0.3) rotate(90deg)',
          filter: isDark ? 'blur(0px)' : 'blur(4px)'
        }}
      >
        <Moon className="h-[18px] w-[18px]" />
      </div>
      <span className="sr-only">Toggle theme</span>
    </button>
  )
}