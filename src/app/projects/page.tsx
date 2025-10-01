import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, Calendar, Globe, Smartphone } from "lucide-react"
import DotGridBackground from "@/components/ui/DotGridBackground"

export const metadata: Metadata = {
  title: "Projects - Izzuuuuu",
  description: "Explore the innovative projects and digital solutions created by Izzuuuuu.",
}

const projects = [
  {
    title: "RoadFix",
    description: "A Progressive Web Application for reporting road issues with Firebase notifications, Google Maps integration, AI-powered features using Hugging Face and Cohere APIs, plus a rule-based chatbot. Deployed on DigitalOcean with custom domain and SSL.",
    shortDescription: "Progressive Web App for road issue reporting with AI integration",
    technologies: ["Laravel", "Livewire", "MySQL", "Google Maps API", "Firebase", "Hugging Face API", "Cohere API", "DigitalOcean", "Ubuntu", "Nginx", "Certbot"],
    category: "Web Application",
    type: "Final Year Project",
    year: "2025",
    github: "#",
    demo: "https://roadfix.me/",
    image: "/images/project/1.png",
    featured: true,
    icon: Globe
  },
  {
    title: "TravelMate",
    description: "A cross-platform travel application with real-time weather updates, travel news, and location-based services. Features OpenStreetMap integration, OpenWeather API, and NewsAPI via RESTful services, with MongoDB Atlas backend deployed on Render.",
    shortDescription: "Cross-platform travel app with real-time services",
    technologies: ["Flutter", "OpenStreetMap", "MongoDB Atlas", "OpenWeather API", "NewsAPI", "RESTful API", "Render"],
    category: "Mobile Application", 
    type: "Group Project",
    year: "2025",
    github: "https://github.com/Pian0610/TravelMate",
    demo: "#",
    image: "/images/project/2.png",
    featured: true,
    icon: Smartphone
  }
]

export default function Projects() {
  return (
    <div className="min-h-screen relative">
      {/* Background DotGrid Effect */}
      <DotGridBackground />
      
      {/* Main content - positioned above the background */}
      <div className="relative z-10">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 text-purple-500 mb-6">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/>
            </svg>
            <span className="text-sm font-medium uppercase tracking-wider">Portfolio</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Featured <span className="text-purple-500">Projects</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Innovative solutions that bridge technology and real-world impact. 
            From AI-powered applications to cross-platform mobile experiences.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-12 lg:gap-16">
            {projects.map((project, index) => {
              const IconComponent = project.icon
              return (
                <div 
                  key={project.title} 
                  className={`group grid gap-8 lg:gap-12 ${
                    index % 2 === 0 ? 'lg:grid-cols-[1.2fr,1fr]' : 'lg:grid-cols-[1fr,1.2fr]'
                  } items-center`}
                >
                  {/* Project Image */}
                  <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="relative aspect-video rounded-2xl overflow-hidden bg-muted shadow-2xl">
                      <img 
                        src={project.image}
                        alt={`${project.title} - ${project.shortDescription}`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    {/* Project Meta */}
                    <div className="flex items-center gap-4 flex-wrap">
                      <div className="flex items-center gap-2 text-purple-500">
                        <IconComponent className="w-5 h-5" />
                        <span className="text-sm font-medium">{project.category}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{project.year}</span>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {project.type}
                      </Badge>
                    </div>

                    {/* Project Title & Description */}
                    <div className="space-y-4">
                      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                        {project.title}
                      </h2>
                      <p className="text-muted-foreground text-lg leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Technology Stack */}
                    <div className="space-y-3">
                      <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide">
                        Technology Stack
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span 
                            key={tech}
                            className="rounded-full bg-purple-100 dark:bg-purple-900/30 px-3 py-1 text-xs font-medium text-purple-700 dark:text-purple-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4 pt-4">
                      <Button 
                        variant="outline" 
                        size="lg" 
                        className="flex-1 sm:flex-none"
                        asChild
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          View Code
                        </a>
                      </Button>
                      {project.demo !== "#" && (
                        <Button 
                          size="lg" 
                          className="flex-1 sm:flex-none bg-purple-500 hover:bg-purple-600"
                          asChild
                        >
                          <a href={project.demo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Live Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 border-t border-border">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Interested in working together?
            </h2>
            <p className="text-xl text-muted-foreground">
              I'm always open to discussing new projects and opportunities.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <a href="/contact">
                Get In Touch
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="https://github.com/izzuuuuu" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                View All Projects
              </a>
            </Button>
          </div>
        </div>
      </section>
      </div>
    </div>
  )
}