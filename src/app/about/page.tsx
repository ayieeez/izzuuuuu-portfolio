import { Metadata } from "next"
import DotGridBackground from "@/components/ui/DotGridBackground"

export const metadata: Metadata = {
  title: "About - Izzuuuuu",
  description: "Learn more about Izzuuuuu and their journey in creating digital experiences.",
}

export default function About() {
  return (
    <div className="flex flex-col relative">
      {/* Background DotGrid Effect */}
      <DotGridBackground />
      
      {/* Main content - positioned above the background */}
      <div className="relative z-10">
        <div className="container py-10">
          <div className="mx-auto max-w-4xl space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">About Me</h1>
              <p className="text-xl text-muted-foreground">
                Passionate about creating digital experiences that make a difference.
              </p>
            </div>

            <div className="space-y-6">
              <p className="text-lg leading-7">
                Hello! I&apos;m Izzuuuuu, a passionate digital creator focused on crafting purpose-driven
                experiences that inspire and engage users. With a keen eye for design and a deep
                understanding of user experience, I work with brands globally to create pixel-perfect,
                accessible, and engaging digital solutions.
              </p>

              <p className="text-lg leading-7">
                My journey in the digital world has been driven by curiosity and a desire to solve
                complex problems through intuitive design and clean code. I believe that great digital
                experiences are born from the intersection of beautiful design, thoughtful interaction,
                and solid technical implementation.
              </p>

              <p className="text-lg leading-7">
                When I&apos;m not crafting digital experiences, you can find me exploring new
                technologies, contributing to open-source projects, or sharing knowledge with the
                developer community.
              </p>
            </div>

            <div className="border-t pt-8">
              <h2 className="text-2xl font-bold mb-4">Skills & Technologies</h2>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                {[
                  "React",
                  "Next.js",
                  "TypeScript",
                  "Tailwind CSS",
                  "Framer Motion",
                  "Node.js",
                  "Python",
                  "UI/UX Design",
                  "Figma",
                  "Git",
                  "Docker",
                  "AWS"
                ].map((skill) => (
                  <div
                    key={skill}
                    className="rounded-lg border bg-card p-3 text-center text-sm font-medium"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}