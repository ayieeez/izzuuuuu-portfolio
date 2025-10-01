"use client"

import dynamic from 'next/dynamic'
import { ScrollToTopButton } from '@/components/shared'

// Dynamic import for DotGrid to avoid SSR issues
const DotGrid = dynamic(() => import('@/components/ui/AnimatedDotGrid'), {
  ssr: false,
  loading: () => <div className="fixed inset-0 z-0 bg-purple-50/10" />
})

export default function Home() {
  return (
    <div className="flex flex-col relative">
      {/* Background DotGrid Effect */}
      <div className="fixed inset-0 z-0 opacity-40 dark:opacity-25">
        <DotGrid
          dotSize={3}
          gap={30}
          baseColor="#8b5cf6"
          activeColor="#a855f7"
          proximity={120}
        />
      </div>
      
      {/* Main content - positioned above the background */}
      <div className="relative z-10">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Greeting */}
          <p className="flex items-center justify-center gap-2 text-sm uppercase tracking-wider text-muted-foreground">
            <span className="natural-wave" style={{ transformOrigin: '70% 70%' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-500">
                <path d="M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2"/>
                <path d="M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2"/>
                <path d="M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8"/>
                <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.83L7 15"/>
              </svg>
            </span>
            Hey! It&apos;s me Izzuuuuu,
          </p>
          
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
            Building{" "}
            <span className="text-purple-500">minimal tech</span>
            <br />
            that{" "}
            <span className="text-purple-500">maximizes</span> your
            <br />business growth.
          </h1>
          
          {/* Description */}
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground">
            I create clean, powerful, and scalable digital solutions that cut through the noise. 
            No bloat, no complexity—just functional technology that drives measurable results 
            and accelerates your business success.
          </p>
          
          {/* CTA and Social Links */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            <a href="/about">
              <button className="group relative overflow-hidden rounded-full border border-foreground/20 bg-transparent px-8 py-3 transition-all duration-500 hover:border-purple-500 hover:scale-105">
                <span className="absolute inset-0 bg-purple-500 transform scale-y-0 origin-bottom transition-transform duration-500 ease-out group-hover:scale-y-100 rounded-full"></span>
                <span className="relative z-10 flex items-center justify-center transition-colors duration-500 group-hover:text-white">
                  <span className="relative overflow-hidden h-6 flex items-center">
                    <span className="block transition-transform duration-500 ease-out group-hover:-translate-y-full">
                      Know me better
                    </span>
                    <span className="absolute top-full left-0 w-full block transition-transform duration-500 ease-out group-hover:-translate-y-full">
                      About me
                    </span>
                  </span>
                  <span className="ml-2 transition-transform duration-500 group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </button>
            </a>

            {/* Social Media Links */}
            <div className="flex items-center gap-3">
              <a href="https://www.linkedin.com/in/izzuuuuu/" target="_blank" rel="noopener noreferrer" className="group p-3 rounded-full border border-foreground/20 hover:border-purple-500 hover:bg-purple-500 transition-all duration-300">
                <svg className="w-5 h-5 transition-colors duration-300 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>

              <a href="https://github.com/ayieeez" target="_blank" rel="noopener noreferrer" className="group p-3 rounded-full border border-foreground/20 hover:border-purple-500 hover:bg-purple-500 transition-all duration-300">
                <svg className="w-5 h-5 transition-colors duration-300 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                </svg>
              </a>

              <a href="https://www.instagram.com/izzuuuuu_/" target="_blank" rel="noopener noreferrer" className="group p-3 rounded-full border border-foreground/20 hover:border-purple-500 hover:bg-purple-500 transition-all duration-300">
                <svg className="w-5 h-5 transition-colors duration-300 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              <a href="mailto:muhammadizzuddin4600@gmail.com" className="group p-3 rounded-full border border-foreground/20 hover:border-purple-500 hover:bg-purple-500 transition-all duration-300">
                <svg className="w-5 h-5 transition-colors duration-300 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.9.732-1.636 1.636-1.636h.98L12 10.645l9.382-6.824h.982c.904 0 1.636.732 1.636 1.636z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Banner */}
      <section className="py-12 border-t border-border relative overflow-hidden">
        <div className="flex w-max animate-marquee-slow gap-8">
          {[
            "Frontend Development",
            "Backend Development", 
            "Full-Stack Solutions",
            "React Applications",
            "Next.js Websites",
            "TypeScript Development",
            "API Integration",
            "Database Design",
            "UI/UX Implementation",
            "Performance Optimization",
            "Mobile Responsive",
            "Custom Solutions",
            "Frontend Development",
            "Backend Development", 
            "Full-Stack Solutions",
            "React Applications",
            "Next.js Websites",
            "TypeScript Development"
          ].map((service, index) => (
            <div key={index} className="flex items-center gap-4 whitespace-nowrap">
              <h3 className="text-lg font-medium text-muted-foreground">{service}</h3>
              <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/>
              </svg>
            </div>
          ))}
        </div>
        
        {/* Fade gradients */}
        <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent pointer-events-none"></div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 text-purple-500 mb-4">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/>
              </svg>
              <span className="text-sm font-medium uppercase tracking-wider">Featured Work</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              Crafting next-level digital products.
            </h2>
          </div>
          
          {/* Project Grid */}
          <div className="grid gap-8 md:grid-cols-2 mb-12">
            {/* RoadFix Project */}
            <div className="group rounded-3xl border bg-card p-8 shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="aspect-video rounded-xl mb-6 overflow-hidden bg-muted">
                <img 
                  src="/images/project/1.png" 
                  alt="RoadFix Progressive Web Application"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-semibold">RoadFix</h3>
                <span className="text-sm text-muted-foreground">2025</span>
              </div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-sm font-medium text-purple-500">PWA • Final Year Project</span>
                <span className="w-1 h-1 bg-muted-foreground rounded-full"></span>
                <a href="https://roadfix.me/" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-500 hover:text-blue-600 transition-colors">
                  Live Site ↗
                </a>
              </div>
              <p className="text-muted-foreground mb-6">
                A Progressive Web Application for reporting road issues with Firebase notifications, 
                Google Maps integration, AI-powered features using Hugging Face and Cohere APIs, 
                plus a rule-based chatbot. Deployed on DigitalOcean with custom domain and SSL.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-purple-100 dark:bg-purple-900/30 px-3 py-1 text-xs font-medium text-purple-700 dark:text-purple-300">Laravel</span>
                <span className="rounded-full bg-purple-100 dark:bg-purple-900/30 px-3 py-1 text-xs font-medium text-purple-700 dark:text-purple-300">Livewire</span>
                <span className="rounded-full bg-purple-100 dark:bg-purple-900/30 px-3 py-1 text-xs font-medium text-purple-700 dark:text-purple-300">MySQL</span>
                <span className="rounded-full bg-purple-100 dark:bg-purple-900/30 px-3 py-1 text-xs font-medium text-purple-700 dark:text-purple-300">Google Maps API</span>
                <span className="rounded-full bg-purple-100 dark:bg-purple-900/30 px-3 py-1 text-xs font-medium text-purple-700 dark:text-purple-300">Firebase</span>
                <span className="rounded-full bg-purple-100 dark:bg-purple-900/30 px-3 py-1 text-xs font-medium text-purple-700 dark:text-purple-300">Hugging Face API</span>
                <span className="rounded-full bg-purple-100 dark:bg-purple-900/30 px-3 py-1 text-xs font-medium text-purple-700 dark:text-purple-300">DigitalOcean</span>
              </div>
            </div>

            {/* TravelMate Project */}
            <div className="group rounded-3xl border bg-card p-8 shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="aspect-video rounded-xl mb-6 overflow-hidden bg-muted">
                <img 
                  src="/images/project/2.png" 
                  alt="TravelMate Cross-Platform Mobile Application"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-semibold">TravelMate</h3>
                <span className="text-sm text-muted-foreground">2025</span>
              </div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-sm font-medium text-purple-500">Mobile Application</span>
                <span className="w-1 h-1 bg-muted-foreground rounded-full"></span>
                <span className="text-sm text-muted-foreground">Group Project</span>
              </div>
              <p className="text-muted-foreground mb-6">
                A cross-platform travel application with real-time weather updates, travel news, 
                and location-based services. Features OpenStreetMap integration, OpenWeather API, 
                and NewsAPI via RESTful services, with MongoDB Atlas backend deployed on Render.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-purple-100 dark:bg-purple-900/30 px-3 py-1 text-xs font-medium text-purple-700 dark:text-purple-300">Flutter</span>
                <span className="rounded-full bg-purple-100 dark:bg-purple-900/30 px-3 py-1 text-xs font-medium text-purple-700 dark:text-purple-300">OpenStreetMap</span>
                <span className="rounded-full bg-purple-100 dark:bg-purple-900/30 px-3 py-1 text-xs font-medium text-purple-700 dark:text-purple-300">MongoDB Atlas</span>
                <span className="rounded-full bg-purple-100 dark:bg-purple-900/30 px-3 py-1 text-xs font-medium text-purple-700 dark:text-purple-300">OpenWeather API</span>
                <span className="rounded-full bg-purple-100 dark:bg-purple-900/30 px-3 py-1 text-xs font-medium text-purple-700 dark:text-purple-300">NewsAPI</span>
                <span className="rounded-full bg-purple-100 dark:bg-purple-900/30 px-3 py-1 text-xs font-medium text-purple-700 dark:text-purple-300">RESTful API</span>
                <span className="rounded-full bg-purple-100 dark:bg-purple-900/30 px-3 py-1 text-xs font-medium text-purple-700 dark:text-purple-300">Render</span>
              </div>
            </div>
          </div>

          <div className="text-center">
            <a href="/projects" className="inline-block">
              <button className="px-8 py-3 rounded-full border border-foreground/20 hover:border-purple-500 hover:bg-purple-500 hover:text-white transition-all duration-300">
                View All Projects
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 text-purple-500 mb-4">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/>
              </svg>
              <span className="text-sm font-medium uppercase tracking-wider">Tech Stack</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              Technologies I work with.
            </h2>
          </div>
          
          {/* Skills Scroll Container */}
          <div className="relative overflow-hidden py-8">
            <div className="flex w-max animate-marquee-slow gap-6">
              {[
                { 
                  name: "React", 
                  icon: (
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 9.861A2.139 2.139 0 1 0 12 14.139 2.139 2.139 0 1 0 12 9.861zM6.008 16.255l-.472-.12C2.018 15.246 0 13.737 0 11.996s2.018-3.25 5.536-4.139l.472-.119.133.468a23.53 23.53 0 0 0 1.363 3.578l.101.213-.101.213a23.307 23.307 0 0 0-1.363 3.578l-.133.467zM5.317 8.95c-2.674.751-4.315 1.9-4.315 3.046 0 1.145 1.641 2.294 4.315 3.046a24.95 24.95 0 0 1 1.182-3.046A24.752 24.752 0 0 1 5.317 8.95zM17.992 16.255l-.133-.469a23.357 23.357 0 0 0-1.364-3.577l-.101-.213.101-.213a23.42 23.42 0 0 0 1.364-3.578l.133-.468.473.119c3.517.889 5.535 2.398 5.535 4.14s-2.018 3.25-5.535 4.139l-.473.12zm-.491-4.259c.48 1.039.877 2.06 1.182 3.046 2.675-.752 4.315-1.901 4.315-3.046 0-1.146-1.641-2.294-4.315-3.046a24.788 24.788 0 0 1-1.182 3.046zM5.31 8.945l-.133-.467C4.188 4.992 4.488 2.494 6 1.622c1.483-.856 3.864.155 6.359 2.716l.34.349-.34.349a23.552 23.552 0 0 0-2.422 2.967l-.135.193-.235.02a23.657 23.657 0 0 0-3.785.61l-.472.119zm1.896-6.63c-.268 0-.505.058-.705.173-.994.573-1.17 2.565-.485 5.253a25.122 25.122 0 0 1 3.233-.501 24.847 24.847 0 0 1 2.052-2.544c-1.56-1.519-3.037-2.381-4.095-2.381zM16.795 22.677c-.001 0-.001 0 0 0-1.425 0-3.255-1.073-5.154-3.023l-.34-.349.34-.349a23.53 23.53 0 0 0 2.421-2.968l.135-.193.234-.02a23.63 23.63 0 0 0 3.787-.609l.472-.119.134.468c.987 3.484.688 5.983-.824 6.854a2.38 2.38 0 0 1-1.205.308zm-4.096-3.381c1.56 1.519 3.037 2.381 4.095 2.381h.001c.267 0 .505-.058.704-.173.994-.573 1.171-2.566.485-5.254a25.02 25.02 0 0 1-3.234.501 24.674 24.674 0 0 1-2.051 2.545zM18.69 8.945l-.472-.119a23.479 23.479 0 0 0-3.787-.61l-.234-.02-.135-.193a23.414 23.414 0 0 0-2.421-2.967l-.34-.349.34-.349C14.135 1.778 16.515.767 18 1.622c1.512.872 1.812 3.37.823 6.855l-.133.468zM14.75 7.24c1.142.104 2.227.273 3.234.501.686-2.688.509-4.68-.485-5.253-.988-.571-2.845.304-4.8 2.208A24.849 24.849 0 0 1 14.75 7.24zM7.206 22.677A2.38 2.38 0 0 1 6 22.369c-1.512-.871-1.812-3.369-.823-6.854l.132-.468.472.119c1.155.291 2.429.496 3.785.609l.235.02.134.193a23.596 23.596 0 0 0 2.422 2.968l.34.349-.34.349c-1.898 1.95-3.728 3.023-5.151 3.023zm-1.19-6.427c-.686 2.688-.509 4.681.485 5.254.988.571 2.845-.309 4.8-2.208a24.998 24.998 0 0 1-2.052-2.545 24.976 24.976 0 0 1-3.233-.501zM12 16.878c-.663 0-1.299-.018-1.909-.054l-.232-.014-.115-.162a25.044 25.044 0 0 1-1.395-2.716l-.102-.207.102-.207a25.16 25.16 0 0 1 1.395-2.716l.115-.162.232-.014c1.21-.072 2.608-.072 3.818 0l.232.014.115.162a25.044 25.044 0 0 1 1.395 2.716l.102.207-.102.207a25.16 25.16 0 0 1-1.395 2.716l-.115.162-.232.014c-.61.036-1.246.054-1.909.054zm-1.592-1.325c1.019.042 2.164.042 3.184 0a23.98 23.98 0 0 0 1.182-2.348 23.821 23.821 0 0 0-1.182-2.348 23.916 23.916 0 0 0-3.184 0 23.98 23.98 0 0 0-1.182 2.348 23.821 23.821 0 0 0 1.182 2.348z"/>
                    </svg>
                  )
                },
                { 
                  name: "Next.js", 
                  icon: (
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M11.5725 0c-.1763 0-.3098.0013-.3584.0067-.0516.0053-.2159.021-.3636.0328-3.4088.3073-6.6017 2.1463-8.624 4.9728C1.1004 6.584.3802 8.3666.1082 10.255c-.0962.659-.108.8537-.108 1.7474s.012 1.0884.108 1.7476c.652 4.506 3.8591 8.2919 8.2087 9.6945.7789.2511 1.6.4223 2.5337.5255.3636.04 1.9354.04 2.299 0 1.6117-.1783 2.9772-.577 4.3237-1.2643.2065-.1056.2464-.1337.2183-.1573-.0188-.0139-.8987-1.1938-1.9543-2.62l-1.919-2.592-2.4047-3.5583c-1.3231-1.9564-2.4117-3.556-2.4211-3.556-.0094-.0026-.0187 1.5787-.0235 3.509-.0067 3.3802-.0093 3.5162-.0516 3.596-.061.115-.108.1618-.2064.2134-.075.0374-.1408.0445-.5429.0445h-.4570l-.0750-.0513c-.0375-.0287-.0883-.0746-.1127-.1024-.0306-.0371-.0667-.1108-.0888-.1718-.0132-.0388-.0234-1.3207-.0234-3.3997V3.7317l.0915-.1143c.0501-.0632.1208-.1306.1730-.1542.0882-.0403.1764-.0456.6618-.0456.6815 0 .6953.0069.9081.2916.0459.0637.1356.1934 1.9316 2.8349 1.0389 1.2709 2.0124 2.4657 2.1695 2.6519.1572.1862 2.0722 2.4657 4.2593 5.0665 2.1871 2.6009 4.018 4.7909 4.0682 4.8616l.0908.1287h.4570c.4365 0 .4739-.0051.5185-.0374.0282-.0203.0719-.0650.0968-.0999.0249-.0348.0516-.1066.0615-.1598.0099-.0532.0131-.1269.0131-3.3997 0-2.9604-.0066-3.3359-.0666-3.3991-.0327-.0345-.0831-.0667-.1127-.0719-.0296-.0053-.4570-.0053-.9505-.0053-.6434 0-.9037.0053-.9543.0203-.1127.0345-.2064.1287-.2393.2403-.0132.0445-.0234 1.3207-.0234 3.3997V17.7317l.0915.1143c.0501.0632.1208.1306.1730.1542.0882.0403.1764.0456.6618.0456.6815 0 .6953-.0069.9081-.2916.0459-.0637.1356-.1934 1.9316-2.8349l1.9729-2.4657 2.0124-2.4657v-.6434c0-.4365-.0051-.4739-.0374-.5185-.0203-.0282-.0650-.0719-.0999-.0968-.0348-.0249-.1066-.0516-.1598-.0615-.0532-.0099-.1269-.0131-3.3997-.0131H8.4825v-.6434c0-.4365.0051-.4739.0374-.5185.0203-.0282.0650-.0719.0999-.0968.0348-.0249.1066-.0516.1598-.0615.0532-.0099.1269-.0131 3.3997-.0131h6.1972l-.0988.1287c-.0544.0707-.6434.8267-1.3070 1.6819-1.2709 1.6354-2.1871 2.8122-2.2777 2.9274-.0906.1152-.0961.1152-.2064.0000-.0632-.0665-.1940-.2064-.4570-.4570-1.3563-1.2977-3.2267-1.9729-5.3138-1.9729-1.6285 0-2.9604.5185-3.9933 1.5514-1.3563 1.3563-1.7476 3.5162-.9543 5.2637.5185 1.1287 1.4323 2.0124 2.7632 2.6784 1.3207.6593 2.8781.8267 4.9466.5185 1.3563-.1940 2.6519-.6593 3.7806-1.3563.1940-.1208.4570-.2916.5185-.3584l.1127-.1127v-.3584c0-.2064-.0051-.3584-.0102-.3584-.0051 0-.2064.1287-.4570.2916-.6593.4570-1.6285.8267-2.5337 1.0389-.4570.1060-.9037.1127-1.4323.0203-.8267-.1461-1.4991-.4570-2.0124-.9543-.7789-.7789-.9543-1.8373-.4570-2.7632.3584-.6593.9543-1.1287 1.7476-1.3563.4570-.1287.6593-.1520 1.2709-.1520.6115 0 .8139.0232 1.2709.1520.7883.2277 1.384.6974 1.7476 1.3563.2916.5185.2916 1.2709 0 1.7894-.1940.3584-.4570.6593-.7789.9037-.2293.1740-.2977.1940-.4570.1287-.0906-.0375-.2064-.1520-.2576-.2576-.0512-.1056-.0906-.2064-.0906-.2277 0-.0213.0906-.1287.2064-.2393.2293-.2277.2576-.2916.2576-.5185 0-.2269-.0283-.2916-.2576-.5185-.3584-.3584-.8139-.4570-1.3563-.2916-.3584.1056-.6593.3584-.8139.7168-.1940.4570-.1287.9037.1520 1.3563.3584.5185.9037.8139 1.4991.8139.2277 0 .3584-.0232.5185-.1056.4570-.2277.7168-.6593.7168-1.1287 0-.3584-.0906-.6593-.2916-.9037-.2064-.2577-.5185-.4570-.8139-.5185-.2277-.0512-.7168-.0512-.9543 0-.8139.1520-1.3563.6593-1.5840 1.4323-.1520.5185-.0906 1.1287.1520 1.5840.3584.6593.9037 1.0389 1.5840 1.0389.8139 0 1.4323-.5185 1.4323-1.2709 0-.3584-.1056-.6593-.3584-.9037-.1740-.1740-.3584-.2577-.6093-.2577-.2277 0-.4570.0906-.5185.2064-.0632.1152-.0632.2277 0 .3429.0632.1152.2064.2064.3584.2064.1520 0 .2916-.0906.2916-.2064 0-.1152-.0906-.2064-.2064-.2064-.1152 0-.2064.0906-.2064.2064v.2277c.0906.1152.2916.1740.4570.1287.2277-.0632.3584-.3584.2916-.6093-.0632-.2277-.3584-.3584-.6093-.2916-.2916.0906-.4570.3584-.4570.6593 0 .5185.4570.9543.9543.9543.2916 0 .5185-.1287.6593-.3584.1520-.2577.0906-.5185-.1520-.7168-.1287-.1056-.2916-.1520-.4570-.1287-.1940.0232-.3584.1287-.4570.2916-.0906.1520-.0906.3584 0 .5185.0906.1520.2916.2577.4570.2577.1646 0 .3584-.1056.4570-.2577.0906-.1520.0906-.3584 0-.5185-.0906-.1520-.2916-.2577-.4570-.2577h-.2277c-.1152.0232-.2064.1287-.2064.2577 0 .1287.0906.2577.2064.2577.1152 0 .2064-.1287.2064-.2577 0-.1287-.0906-.2577-.2064-.2577s-.2064.1287-.2064.2577c0 .1287.0906.2577.2064.2577s.2064-.1287.2064-.2577c0-.1287-.0906-.2577-.2064-.2577s-.2064.1287-.2064.2577c0 .1287.0906.2577.2064.2577s.2064-.1287.2064-.2577c0-.1287-.0906-.2577-.2064-.2577s-.2064.1287-.2064.2577"/>
                    </svg>
                  )
                },
                { 
                  name: "TypeScript", 
                  icon: (
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.213.776.213 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"/>
                    </svg>
                  )
                },
                { 
                  name: "Tailwind CSS", 
                  icon: (
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/>
                    </svg>
                  )
                },
                { 
                  name: "Framer Motion", 
                  icon: (
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z"/>
                    </svg>
                  )
                },
                { 
                  name: "Shadcn/UI", 
                  icon: (
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22.219 11.784L11.784 22.219c-.407.407-.407 1.068 0 1.476.407.407 1.068.407 1.476 0L24 12.955c.407-.407.407-1.068 0-1.476L12.955 0c-.407-.407-1.068-.407-1.476 0-.407.407-.407 1.068 0 1.476l10.435 10.435-.695-.127z"/>
                      <path d="M.781 11.784L11.216.781c.407-.407 1.068-.407 1.476 0 .407.407.407 1.068 0 1.476L2.257 12.692c-.407.407-.407 1.068 0 1.476L12.692 24.6c.407.407.407 1.068 0 1.476-.407.407-1.068.407-1.476 0L.781 15.641c-.407-.407-.407-1.068 0-1.476l10.435-10.435.127.695z"/>
                    </svg>
                  )
                },
                { 
                  name: "Laravel", 
                  icon: (
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.642 5.43a.364.364 0 01.014.1v5.149c0 .135-.073.26-.189.326l-4.323 2.49v4.934a.378.378 0 01-.188.326L9.93 23.949a.316.316 0 01-.066.028c-.01.003-.02.007-.03.009-.035.008-.07.008-.106 0-.01-.002-.02-.006-.03-.009a.317.317 0 01-.066-.028L.595 18.755a.378.378 0 01-.189-.326V2.974c0-.033.005-.066.014-.098.003-.012.01-.023.015-.034a.376.376 0 01.116-.155c.008-.007.018-.01.026-.016l4.724-2.726a.378.378 0 01.378 0l4.724 2.726c.008.006.018.009.026.016a.376.376 0 01.116.155c.005.011.012.022.015.034.009.032.014.065.014.098v9.652l3.945-2.274V7.404c0-.033.005-.066.014-.098.003-.012.01-.023.015-.034a.376.376 0 01.116-.155c.008-.007.018-.01.026-.016l4.724-2.726a.378.378 0 01.378 0l4.724 2.726c.008.006.018.009.026.016a.376.376 0 01.116.155c.005.011.012.022.015.034.009.032.014.065.014.098z"/>
                    </svg>
                  )
                },
                { 
                  name: "MySQL", 
                  icon: (
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M16.405 5.501c-.115 0-.193.014-.274.033v.013h.014c.054.104.146.18.214.274.054.107.1.214.154.32l.014-.015c.094-.066.14-.172.14-.333-.04-.047-.046-.094-.08-.14-.04-.067-.126-.1-.18-.153zM5.77 18.695h-.927a50.854 50.854 0 00-.27-4.41h-.008l-1.41 4.41H2.45l-1.4-4.41h-.01a72.892 72.892 0 00-.195 4.41H.055c.055-1.966.192-3.81.41-5.53h1.15l1.335 4.064h.008l1.347-4.064h1.095c.242 1.966.378 3.601.41 5.53zm4.017-4.08c-.378 2.045-.876 3.533-1.492 4.46-.482.716-1.01 1.073-1.583 1.073-.153 0-.34-.046-.566-.138v-.494c.11.017.24.026.386.026.268 0 .483-.075.647-.222.197-.18.295-.382.295-.605 0-.155-.077-.47-.23-.944L6.23 14.615h.91l.727 2.36c.164.536.233.91.205 1.123.4-1.064.678-2.227.835-3.483zm12.325 4.08h-2.63v-5.53h.885v4.85h1.745zm-3.32.135l-1.016-.5c.09-.076.177-.158.255-.25.433-.506.648-1.258.648-2.253 0-1.83-.718-2.746-2.155-2.746-.704 0-1.254.232-1.65.697-.43.508-.646 1.256-.646 2.245 0 .972.19 1.686.574 2.14.35.41.877.615 1.583.615.264 0 .506-.033.725-.098l1.325.615.357-.615zM15.5 17.588c-.225 0-.406-.15-.544-.448-.13-.292-.195-.646-.195-1.061 0-.435.074-.84.223-1.215.143-.355.336-.532.58-.532.238 0 .42.142.544.427.138.312.207.644.207 1.000 0 .435-.074.840-.223 1.215-.143.355-.336.532-.58.532z"/>
                    </svg>
                  )
                },
                { 
                  name: "Flutter", 
                  icon: (
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M14.314 0L2.3 12 6 15.7 21.684.013h-7.37zm.159 11.871L11.91 14.456l-.006.004L8.291 18.075l2.563 2.563L23.684 7.87l-9.211.001z"/>
                    </svg>
                  )
                },
                { 
                  name: "GraphQL", 
                  icon: (
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M14.051 2.751c.311.156.524.464.524.812 0 .511-.415.926-.926.926-.511 0-.926-.415-.926-.926 0-.348.213-.656.524-.812L12 1.323 10.753 2.751c.311.156.524.464.524.812 0 .511-.415.926-.926.926-.511 0-.926-.415-.926-.926 0-.348.213-.656.524-.812L8.702 1.323 7.455 2.751c.311.156.524.464.524.812 0 .511-.415.926-.926.926-.511 0-.926-.415-.926-.926 0-.348.213-.656.524-.812L5.404 1.323 4.157 2.751c.311.156.524.464.524.812 0 .511-.415.926-.926.926-.511 0-.926-.415-.926-.926 0-.348.213-.656.524-.812L2.106 1.323.859 2.751c.311.156.524.464.524.812 0 .511-.415.926-.926.926S-.469 4.074-.469 3.563c0-.348.213-.656.524-.812L1.302 1.323z"/>
                    </svg>
                  )
                },
                { 
                  name: "Postman", 
                  icon: (
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M13.527.099C6.955-.744.942 3.9.099 10.473c-.843 6.572 3.8 12.584 10.373 13.428 6.573.843 12.587-3.801 13.428-10.374C24.744 6.955 20.101.943 13.527.099zm2.471 7.485a.855.855 0 0 0-.593.25l-4.453 4.453-.307-.307-.643-.643c4.389-4.376 5.18-4.418 5.996-3.753zm-4.863 4.861l4.44-4.44a.62.62 0 1 1 .847.903l-4.699 4.125-.588-.588zm.33.694l-1.1.238a.06.06 0 0 1-.067-.032.06.06 0 0 1 .01-.073l.645-.645.512.512zm-2.803-.459l1.172-1.172.879.878-1.979.426a.074.074 0 0 1-.085-.039.072.072 0 0 1 .013-.093zm-3.646 6.058a.076.076 0 0 1-.069-.083.077.077 0 0 1 .022-.046h.002l.946-.946 1.222 1.222-2.123-.147zm2.425-1.256a.228.228 0 0 0-.117.256l.203.865a.125.125 0 0 0 .211.073l.19-.190-.487-.487-.487-.517zm1.651-1.652c-.24-.24-.185-.185-.185-.185l.018.018c.1.098.16.235.168.38l.018.018c.143-.001.284-.06.388-.167.104-.105.167-.249.167-.4 0-.303-.242-.547-.547-.547l-.027.883z"/>
                    </svg>
                  )
                },
                // Duplicate for continuous scroll
                { 
                  name: "React", 
                  icon: (
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 9.861A2.139 2.139 0 1 0 12 14.139 2.139 2.139 0 1 0 12 9.861zM6.008 16.255l-.472-.12C2.018 15.246 0 13.737 0 11.996s2.018-3.25 5.536-4.139l.472-.119.133.468a23.53 23.53 0 0 0 1.363 3.578l.101.213-.101.213a23.307 23.307 0 0 0-1.363 3.578l-.133.467zM5.317 8.95c-2.674.751-4.315 1.9-4.315 3.046 0 1.145 1.641 2.294 4.315 3.046a24.95 24.95 0 0 1 1.182-3.046A24.752 24.752 0 0 1 5.317 8.95zM17.992 16.255l-.133-.469a23.357 23.357 0 0 0-1.364-3.577l-.101-.213.101-.213a23.42 23.42 0 0 0 1.364-3.578l.133-.468.473.119c3.517.889 5.535 2.398 5.535 4.14s-2.018 3.25-5.535 4.139l-.473.12zm-.491-4.259c.48 1.039.877 2.06 1.182 3.046 2.675-.752 4.315-1.901 4.315-3.046 0-1.146-1.641-2.294-4.315-3.046a24.788 24.788 0 0 1-1.182 3.046zM5.31 8.945l-.133-.467C4.188 4.992 4.488 2.494 6 1.622c1.483-.856 3.864.155 6.359 2.716l.34.349-.34.349a23.552 23.552 0 0 0-2.422 2.967l-.135.193-.235.02a23.657 23.657 0 0 0-3.785.61l-.472.119zm1.896-6.63c-.268 0-.505.058-.705.173-.994.573-1.17 2.565-.485 5.253a25.122 25.122 0 0 1 3.233-.501 24.847 24.847 0 0 1 2.052-2.544c-1.56-1.519-3.037-2.381-4.095-2.381zM16.795 22.677c-.001 0-.001 0 0 0-1.425 0-3.255-1.073-5.154-3.023l-.34-.349.34-.349a23.53 23.53 0 0 0 2.421-2.968l.135-.193.234-.02a23.63 23.63 0 0 0 3.787-.609l.472-.119.134.468c.987 3.484.688 5.983-.824 6.854a2.38 2.38 0 0 1-1.205.308zm-4.096-3.381c1.56 1.519 3.037 2.381 4.095 2.381h.001c.267 0 .505-.058.704-.173.994-.573 1.171-2.566.485-5.254a25.02 25.02 0 0 1-3.234.501 24.674 24.674 0 0 1-2.051 2.545zM18.69 8.945l-.472-.119a23.479 23.479 0 0 0-3.787-.61l-.234-.02-.135-.193a23.414 23.414 0 0 0-2.421-2.967l-.34-.349.34-.349C14.135 1.778 16.515.767 18 1.622c1.512.872 1.812 3.37.823 6.855l-.133.468zM14.75 7.24c1.142.104 2.227.273 3.234.501.686-2.688.509-4.68-.485-5.253-.988-.571-2.845.304-4.8 2.208A24.849 24.849 0 0 1 14.75 7.24zM7.206 22.677A2.38 2.38 0 0 1 6 22.369c-1.512-.871-1.812-3.369-.823-6.854l.132-.468.472.119c1.155.291 2.429.496 3.785.609l.235.02.134.193a23.596 23.596 0 0 0 2.422 2.968l.34.349-.34.349c-1.898 1.95-3.728 3.023-5.151 3.023zm-1.19-6.427c-.686 2.688-.509 4.681.485 5.254.988.571 2.845-.309 4.8-2.208a24.998 24.998 0 0 1-2.052-2.545 24.976 24.976 0 0 1-3.233-.501zM12 16.878c-.663 0-1.299-.018-1.909-.054l-.232-.014-.115-.162a25.044 25.044 0 0 1-1.395-2.716l-.102-.207.102-.207a25.16 25.16 0 0 1 1.395-2.716l.115-.162.232-.014c1.21-.072 2.608-.072 3.818 0l.232.014.115.162a25.044 25.044 0 0 1 1.395 2.716l.102.207-.102.207a25.16 25.16 0 0 1-1.395 2.716l-.115.162-.232.014c-.61.036-1.246.054-1.909.054zm-1.592-1.325c1.019.042 2.164.042 3.184 0a23.98 23.98 0 0 0 1.182-2.348 23.821 23.821 0 0 0-1.182-2.348 23.916 23.916 0 0 0-3.184 0 23.98 23.98 0 0 0-1.182 2.348 23.821 23.821 0 0 0 1.182 2.348z"/>
                    </svg>
                  )
                },
                { 
                  name: "Next.js", 
                  icon: (
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M11.5725 0c-.1763 0-.3098.0013-.3584.0067-.0516.0053-.2159.021-.3636.0328-3.4088.3073-6.6017 2.1463-8.624 4.9728C1.1004 6.584.3802 8.3666.1082 10.255c-.0962.659-.108.8537-.108 1.7474s.012 1.0884.108 1.7476c.652 4.506 3.8591 8.2919 8.2087 9.6945.7789.2511 1.6.4223 2.5337.5255.3636.04 1.9354.04 2.299 0 1.6117-.1783 2.9772-.577 4.3237-1.2643.2065-.1056.2464-.1337.2183-.1573-.0188-.0139-.8987-1.1938-1.9543-2.62l-1.919-2.592-2.4047-3.5583c-1.3231-1.9564-2.4117-3.556-2.4211-3.556-.0094-.0026-.0187 1.5787-.0235 3.509-.0067 3.3802-.0093 3.5162-.0516 3.596-.061.115-.108.1618-.2064.2134-.075.0374-.1408.0445-.5429.0445h-.4570l-.0750-.0513c-.0375-.0287-.0883-.0746-.1127-.1024-.0306-.0371-.0667-.1108-.0888-.1718-.0132-.0388-.0234-1.3207-.0234-3.3997V3.7317l.0915-.1143c.0501-.0632.1208-.1306.1730-.1542.0882-.0403.1764-.0456.6618-.0456.6815 0 .6953.0069.9081.2916.0459.0637.1356.1934 1.9316 2.8349 1.0389 1.2709 2.0124 2.4657 2.1695 2.6519.1572.1862 2.0722 2.4657 4.2593 5.0665 2.1871 2.6009 4.018 4.7909 4.0682 4.8616l.0908.1287h.4570c.4365 0 .4739-.0051.5185-.0374.0282-.0203.0719-.0650.0968-.0999.0249-.0348.0516-.1066.0615-.1598.0099-.0532.0131-.1269.0131-3.3997 0-2.9604-.0066-3.3359-.0666-3.3991-.0327-.0345-.0831-.0667-.1127-.0719-.0296-.0053-.4570-.0053-.9505-.0053-.6434 0-.9037.0053-.9543.0203-.1127.0345-.2064.1287-.2393.2403-.0132.0445-.0234 1.3207-.0234 3.3997V17.7317l.0915.1143c.0501.0632.1208.1306.1730.1542.0882.0403.1764.0456.6618.0456.6815 0 .6953-.0069.9081-.2916.0459-.0637.1356-.1934 1.9316-2.8349l1.9729-2.4657 2.0124-2.4657v-.6434c0-.4365-.0051-.4739-.0374-.5185-.0203-.0282-.0650-.0719-.0999-.0968-.0348-.0249-.1066-.0516-.1598-.0615-.0532-.0099-.1269-.0131-3.3997-.0131H8.4825v-.6434c0-.4365.0051-.4739.0374-.5185.0203-.0282.0650-.0719.0999-.0968.0348-.0249.1066-.0516.1598-.0615.0532-.0099.1269-.0131 3.3997-.0131h6.1972l-.0988.1287c-.0544.0707-.6434.8267-1.3070 1.6819-1.2709 1.6354-2.1871 2.8122-2.2777 2.9274-.0906.1152-.0961.1152-.2064.0000-.0632-.0665-.1940-.2064-.4570-.4570-1.3563-1.2977-3.2267-1.9729-5.3138-1.9729-1.6285 0-2.9604.5185-3.9933 1.5514-1.3563 1.3563-1.7476 3.5162-.9543 5.2637.5185 1.1287 1.4323 2.0124 2.7632 2.6784 1.3207.6593 2.8781.8267 4.9466.5185 1.3563-.1940 2.6519-.6593 3.7806-1.3563.1940-.1208.4570-.2916.5185-.3584l.1127-.1127v-.3584c0-.2064-.0051-.3584-.0102-.3584-.0051 0-.2064.1287-.4570.2916-.6593.4570-1.6285.8267-2.5337 1.0389-.4570.1060-.9037.1127-1.4323.0203-.8267-.1461-1.4991-.4570-2.0124-.9543-.7789-.7789-.9543-1.8373-.4570-2.7632.3584-.6593.9543-1.1287 1.7476-1.3563.4570-.1287.6593-.1520 1.2709-.1520.6115 0 .8139.0232 1.2709.1520.7883.2277 1.384.6974 1.7476 1.3563.2916.5185.2916 1.2709 0 1.7894-.1940.3584-.4570.6593-.7789.9037-.2293.1740-.2977.1940-.4570.1287-.0906-.0375-.2064-.1520-.2576-.2576-.0512-.1056-.0906-.2064-.0906-.2277 0-.0213.0906-.1287.2064-.2393.2293-.2277.2576-.2916.2576-.5185 0-.2269-.0283-.2916-.2576-.5185-.3584-.3584-.8139-.4570-1.3563-.2916-.3584.1056-.6593.3584-.8139.7168-.1940.4570-.1287.9037.1520 1.3563.3584.5185.9037.8139 1.4991.8139.2277 0 .3584-.0232.5185-.1056.4570-.2277.7168-.6593.7168-1.1287 0-.3584-.0906-.6593-.2916-.9037-.2064-.2577-.5185-.4570-.8139-.5185-.2277-.0512-.7168-.0512-.9543 0-.8139.1520-1.3563.6593-1.5840 1.4323-.1520.5185-.0906 1.1287.1520 1.5840.3584.6593.9037 1.0389 1.5840 1.0389.8139 0 1.4323-.5185 1.4323-1.2709 0-.3584-.1056-.6593-.3584-.9037-.1740-.1740-.3584-.2577-.6093-.2577-.2277 0-.4570.0906-.5185.2064-.0632.1152-.0632.2277 0 .3429.0632.1152.2064.2064.3584.2064.1520 0 .2916-.0906.2916-.2064 0-.1152-.0906-.2064-.2064-.2064-.1152 0-.2064.0906-.2064.2064v.2277c.0906.1152.2916.1740.4570.1287.2277-.0632.3584-.3584.2916-.6093-.0632-.2277-.3584-.3584-.6093-.2916-.2916.0906-.4570.3584-.4570.6593 0 .5185.4570.9543.9543.9543.2916 0 .5185-.1287.6593-.3584.1520-.2577.0906-.5185-.1520-.7168-.1287-.1056-.2916-.1520-.4570-.1287-.1940.0232-.3584.1287-.4570.2916-.0906.1520-.0906.3584 0 .5185.0906.1520.2916.2577.4570.2577.1646 0 .3584-.1056.4570-.2577.0906-.1520.0906-.3584 0-.5185-.0906-.1520-.2916-.2577-.4570-.2577h-.2277c-.1152.0232-.2064.1287-.2064.2577 0 .1287.0906.2577.2064.2577.1152 0 .2064-.1287.2064-.2577 0-.1287-.0906-.2577-.2064-.2577s-.2064.1287-.2064.2577c0 .1287.0906.2577.2064.2577s.2064-.1287.2064-.2577c0-.1287-.0906-.2577-.2064-.2577s-.2064.1287-.2064.2577c0 .1287.0906.2577.2064.2577s.2064-.1287.2064-.2577c0-.1287-.0906-.2577-.2064-.2577s-.2064.1287-.2064.2577"/>
                    </svg>
                  )
                },
                { 
                  name: "TypeScript", 
                  icon: (
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.213.776.213 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"/>
                    </svg>
                  )
                },
                { 
                  name: "Tailwind CSS", 
                  icon: (
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/>
                    </svg>
                  )
                },
                { 
                  name: "Framer Motion", 
                  icon: (
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z"/>
                    </svg>
                  )
                },
                { 
                  name: "Shadcn/UI", 
                  icon: (
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22.219 11.784L11.784 22.219c-.407.407-.407 1.068 0 1.476.407.407 1.068.407 1.476 0L24 12.955c.407-.407.407-1.068 0-1.476L12.955 0c-.407-.407-1.068-.407-1.476 0-.407.407-.407 1.068 0 1.476l10.435 10.435-.695-.127z"/>
                      <path d="M.781 11.784L11.216.781c.407-.407 1.068-.407 1.476 0 .407.407.407 1.068 0 1.476L2.257 12.692c-.407.407-.407 1.068 0 1.476L12.692 24.6c.407.407.407 1.068 0 1.476-.407.407-1.068.407-1.476 0L.781 15.641c-.407-.407-.407-1.068 0-1.476l10.435-10.435.127.695z"/>
                    </svg>
                  )
                }
              ].map((skill, index) => (
                <div key={index} className="flex items-center gap-3 rounded-full border bg-card px-6 py-3 text-sm font-medium whitespace-nowrap hover:border-purple-500 transition-colors">
                  <span className="text-purple-500">{skill.icon}</span>
                  {skill.name}
                </div>
              ))}
            </div>
            
            {/* Fade gradients */}
            <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent pointer-events-none"></div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-12 lg:grid-cols-2 items-start">
            <div>
              <div className="flex items-center gap-2 text-purple-500 mb-4">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/>
                </svg>
                <span className="text-sm font-medium uppercase tracking-wider">Testimonials</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
                What clients say about my work.
              </h2>
            </div>
            
            {/* Testimonials Grid */}
            <div className="grid gap-6">
              <div className="rounded-3xl border bg-card p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg">
                    S
                  </div>
                  <div>
                    <h4 className="font-semibold">Sarah Johnson</h4>
                    <p className="text-sm text-muted-foreground">CEO, TechStart</p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  "Working with Izzuuuuu was an absolute pleasure. The attention to detail and creative problem-solving exceeded our expectations."
                </p>
              </div>

              <div className="rounded-3xl border bg-card p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center text-white font-bold text-lg">
                    M
                  </div>
                  <div>
                    <h4 className="font-semibold">Mark Rodriguez</h4>
                    <p className="text-sm text-muted-foreground">Product Manager, InnovateCorp</p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  "Exceptional quality and timely delivery. The user experience improvements boosted our engagement by 40%."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-3xl border bg-card p-12 text-center shadow-lg">
            <div className="space-y-6">
              <div className="flex items-center justify-center gap-2 text-purple-500 mb-4">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-100 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800">
                  <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse-purple"></span>
                  <span className="text-sm font-medium text-purple-700 dark:text-purple-300">Available for new projects</span>
                </div>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Let&apos;s work together on your next project.
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Ready to transform your ideas into exceptional digital experiences? Let&apos;s discuss how we can bring your vision to life.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                <a href="mailto:muhammadizzuddin4600@gmail.com">
                  <button className="px-8 py-3 rounded-full bg-purple-500 text-white hover:bg-purple-600 transition-colors duration-300">
                    Get in Touch
                  </button>
                </a>
                <a href="/projects">
                  <button className="px-8 py-3 rounded-full border border-foreground/20 hover:border-purple-500 transition-colors duration-300">
                    View My Work
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Scroll to Top Button */}
      <ScrollToTopButton />

      {/* Footer */}
      <footer className="border-t border-border mt-16">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-sm text-muted-foreground">
              © 2025 Izzuuuuu. All rights reserved.
            </div>
            
            {/* Social Media Links */}
            <div className="flex items-center gap-4">
              {/* GitHub */}
              <a 
                href="https://github.com/ayieeez" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              
              {/* LinkedIn */}
              <a 
                href="https://www.linkedin.com/in/izzuuuuu/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              
              {/* Instagram */}
              <a 
                href="https://instagram.com/izzuuuuu_" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              
              {/* Email */}
              <a 
                href="mailto:muhammadizzuddin4600@gmail.com" 
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Email"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
      
      </div>
    </div>
  )
}