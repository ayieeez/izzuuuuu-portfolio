"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { Home, User, Briefcase, Mail } from "lucide-react"
import { navigationItems, type NavigationItem } from "@/config/navigation"

// Icon mapping for navigation items
const getIconForRoute = (href: string) => {
  switch (href) {
    case "/":
      return <Home className="h-5 w-5" />
    case "/about":
      return <User className="h-5 w-5" />
    case "/projects":
      return <Briefcase className="h-5 w-5" />
    case "/contact":
      return <Mail className="h-5 w-5" />
    default:
      return <Home className="h-5 w-5" />
  }
}

const containerVariants = {
  hidden: { y: 100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut" as const,
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut" as const,
    },
  },
}

export function BottomNavigation() {
  const pathname = usePathname()

  const isActiveLink = (href: string) => {
    if (href === "/") return pathname === href
    return pathname.startsWith(href)
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="fixed bottom-0 left-0 right-0 z-50 sm:hidden"
    >
      {/* Main Navigation Container */}
      <div className="mobile-nav-bottom bg-background/95 backdrop-blur-xl supports-[backdrop-filter]:bg-background/80 border-t border-border rounded-t-3xl shadow-2xl">
        {/* Navigation Items */}
        <motion.nav 
          className="px-6 py-4"
          variants={containerVariants}
        >
          <div className="grid grid-cols-4 gap-2">
            {navigationItems.map((item: NavigationItem, index) => (
              <motion.div
                key={item.name}
                variants={itemVariants}
                custom={index}
              >
                <Link
                  href={item.href}
                  className={`group relative flex flex-col items-center justify-center p-3 rounded-2xl mobile-nav-transition ${
                    isActiveLink(item.href)
                      ? "mobile-nav-item-active"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                  }`}
                >
                  {/* Icon */}
                  <motion.div
                    className={`mb-1 transition-transform duration-200 ${
                      isActiveLink(item.href) ? "scale-110" : "group-hover:scale-105"
                    }`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {getIconForRoute(item.href)}
                  </motion.div>
                  
                  {/* Label */}
                  <span className="text-xs font-medium">
                    {item.name}
                  </span>
                  
                  {/* Active Indicator Dot */}
                  {isActiveLink(item.href) && (
                    <motion.div
                      layoutId="activeBottomTab"
                      className="absolute -top-1 w-1.5 h-1.5 bg-purple-500 rounded-full"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
          </div>
          
          {/* Safe Area for iPhone Home Indicator */}
          <div className="h-safe-area-inset-bottom" />
        </motion.nav>
      </div>
    </motion.div>
  )
}