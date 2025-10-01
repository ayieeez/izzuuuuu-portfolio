"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import Image from "next/image"
import { navigationItems, type NavigationItem } from "@/config/navigation"
import { ThemeToggle } from "@/components/shared"
import { useScroll } from "@/hooks/useScroll"

export function Header() {
  const pathname = usePathname()
  const { theme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)
  const { scrollProgress, isScrolled } = useScroll()

  // Ensure component is mounted before using theme
  React.useEffect(() => {
    setMounted(true)
  }, [])

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Only handle smooth scrolling for hash links on the same page
    if (href.includes("#") && pathname === "/") {
      e.preventDefault()
      const targetId = href.split("#")[1]
      const targetElement = document.getElementById(targetId)
      
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
        
        // Update URL without page reload
        if (typeof window !== "undefined") {
          window.history.pushState({}, "", href)
        }
      }
    }
    // For regular routes, let Next.js handle the navigation normally
  }

  const isActiveLink = (href: string) => {
    if (!mounted) return false; // Don't show active state during SSR
    
    if (href === "/") return pathname === href
    
    // For regular routes, check if pathname starts with href
    return pathname.startsWith(href)
  }

  return (
    <>
      {/* Header Container - exactly like the reference */}
      <header className="container pointer-events-none sticky left-0 right-0 top-0 z-50 w-full px-0 py-4">
        <motion.nav 
          className="max-screen pointer-events-auto flex w-full items-center justify-between gap-6 rounded-full px-4 py-1 transition-colors sm:px-6 sm:pr-4"
          animate={{
            // Only add smooth width sliding like brightness control
            maxWidth: 1280 - (scrollProgress * 480), // 1280px -> 800px
            backgroundColor: scrollProgress > 0 ? `hsl(var(--background) / ${scrollProgress * 0.8})` : 'transparent',
            backdropFilter: `blur(${scrollProgress * 20}px)`,
            boxShadow: scrollProgress > 0 
              ? `0 ${scrollProgress * 6}px ${scrollProgress * 18}px rgba(0, 0, 0, ${scrollProgress * 0.08}),
                 0 ${scrollProgress * 3}px ${scrollProgress * 9}px rgba(0, 0, 0, ${scrollProgress * 0.05})` 
              : "none",
          }}
          transition={{
            type: "tween",
            ease: [0.25, 0.1, 0.25, 1],
            duration: 0.1,
          }}
          style={{
            width: '100%',
            marginLeft: 'auto',
            marginRight: 'auto',
            outline: 'transparent solid 1px',
            opacity: 1,
            transform: 'none'
          }}
        >
          {/* Logo - Theme-based image logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Link 
              href="/" 
              className="flex items-center"
            >
              {mounted ? (
                <Image
                  src={resolvedTheme === 'dark' ? '/images/logo_dark.png' : '/images/logo_light.png'}
                  alt="IZ Logo"
                  width={40}
                  height={40}
                  className="h-10 w-auto"
                  priority
                />
              ) : (
                // Fallback for SSR
                <div className="h-10 w-10 bg-transparent" />
              )}
            </Link>
          </motion.div>

          {/* Desktop Navigation - exact structure from reference */}
          <ul className="text-text-secondary hidden gap-6 text-sm sm:flex">
            {navigationItems.map((item: NavigationItem) => (
              <li key={item.name} className="group relative">
                <Link
                  href={item.href}
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                  className={`relative ${isActiveLink(item.href) ? "active-link" : ""}`}
                >
                  {/* Active link pulse indicator */}
                  {isActiveLink(item.href) && (
                    <span className="absolute -left-3 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-purple-500 rounded-full animate-pulse-purple"></span>
                  )}
                  <span className="relative inline-flex overflow-hidden">
                    <div className="translate-y-0 skew-y-0 transform-gpu transition-transform duration-500 group-hover:-translate-y-[110%] group-hover:skew-y-12">
                      {item.name}
                    </div>
                    <div className="text-text-primary absolute translate-y-[110%] skew-y-12 transform-gpu transition-transform duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
                      {item.name}
                    </div>
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Right Side - Theme Toggle Only */}
          <div className="flex items-center justify-center">
            {/* Theme Toggle - Always visible */}
            <ThemeToggle />
          </div>
        </motion.nav>
      </header>
    </>
  )
}