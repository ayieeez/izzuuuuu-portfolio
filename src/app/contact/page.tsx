import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Linkedin, Mail, MessageCircle } from "lucide-react"
import DotGridBackground from "@/components/ui/DotGridBackground"

export const metadata: Metadata = {
  title: "Contact - Izzuuuuu",
  description: "Get in touch with Izzuuuuu for collaborations, projects, or just to say hello.",
}

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    description: "Send me an email for project inquiries or collaborations",
    contact: "hello@izzuuuuu.dev",
    href: "mailto:hello@izzuuuuu.dev"
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    description: "Connect with me professionally on LinkedIn",
    contact: "/in/izzuuuuu",
    href: "https://linkedin.com/in/izzuuuuu"
  },
  {
    icon: Github,
    title: "GitHub",
    description: "Check out my code and contribute to my projects",
    contact: "@izzuuuuu",
    href: "https://github.com/izzuuuuu"
  },
  {
    icon: MessageCircle,
    title: "Discord",
    description: "Chat with me on Discord for quick questions",
    contact: "izzuuuuu#0000",
    href: "#"
  }
]

export default function Contact() {
  return (
    <div className="flex flex-col relative">
      {/* Background DotGrid Effect */}
      <DotGridBackground />
      
      {/* Main content - positioned above the background */}
      <div className="relative z-10">
        <div className="container py-10">
          <div className="mx-auto max-w-4xl space-y-8">
            <div className="text-center space-y-4">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Get in Touch</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                I&apos;m always interested in hearing about new opportunities, interesting projects,
                or just having a chat about technology and design.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {contactMethods.map((method) => {
                const Icon = method.icon
                return (
                  <Card key={method.title} className="transition-colors hover:border-primary/50">
                    <CardHeader>
                      <div className="flex items-center space-x-2">
                        <Icon className="h-5 w-5" />
                        <CardTitle>{method.title}</CardTitle>
                      </div>
                      <CardDescription>{method.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <code className="text-sm font-mono bg-muted px-2 py-1 rounded">
                          {method.contact}
                        </code>
                        <Button variant="outline" size="sm" asChild>
                          <a href={method.href} target="_blank" rel="noopener noreferrer">
                            Connect
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            <div className="text-center space-y-4 pt-8 border-t">
              <h2 className="text-2xl font-bold">Let&apos;s Work Together</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                I&apos;m currently available for freelance work and interesting projects.
                Feel free to reach out if you have something in mind!
              </p>
              <Button size="lg" asChild>
                <a href="mailto:hello@izzuuuuu.dev">
                  <Mail className="mr-2 h-4 w-4" />
                  Start a Conversation
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}