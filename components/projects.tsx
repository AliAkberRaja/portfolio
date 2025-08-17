"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"

export function Projects() {
  const [currentProject, setCurrentProject] = useState(0)

  const projects = [
    {
      title: "DermaVision",
      description:
        "An AI-driven mobile application utilizing Convolutional Neural Networks (CNNs) for real-time analysis and detection of major skin diseases. Provides accessible and accurate diagnostic support through advanced machine learning algorithms.",
      image: "/images/work4.png",
      technologies: ["Flutter", "Python", "TensorFlow", "CNN", "Firebase", "Mobile AI"],
      githubUrl: "https://github.com/AliAkberRaja/dermavision-flutter",
      liveUrl: "#",
      category: "AI/ML",
    },
    {
      title: "Trash Segregation System",
      description:
        "CNN-based automated waste segregation system that enhances the accuracy of recyclable material identification and sorting. Contributes to environmental sustainability through intelligent waste management.",
      image: "/ai-waste-sorting.png",
      technologies: ["Python", "OpenCV", "TensorFlow", "Computer Vision", "CNN", "IoT"],
      githubUrl: "https://github.com/AliAkberRaja/TrashSegregation",
      liveUrl: "#",
      category: "Sustainability",
    },
    {
      title: "Portfolio Website",
      description:
        "Modern, responsive portfolio website built with Next.js and Tailwind CSS. Features smooth animations, dark/light theme toggle, and optimized performance for showcasing professional work.",
      image: "/dark-portfolio-website.png",
      technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Framer Motion"],
      githubUrl: "#",
      liveUrl: "#",
      category: "Web Development",
    },
    {
      title: "E-Commerce Mobile App",
      description:
        "Full-stack e-commerce mobile application with user authentication, product catalog, shopping cart, and payment integration. Built with Flutter and Firebase for seamless user experience.",
      image: "/images/work5.png",
      technologies: ["Flutter", "Firebase", "Stripe API", "Provider", "REST API"],
      githubUrl: "#",
      liveUrl: "#",
      category: "Mobile Development",
    },
    {
      title: "Real-time Chat Application",
      description:
        "Real-time messaging application with group chats, file sharing, and push notifications. Features modern UI design and efficient real-time communication using WebSocket technology.",
      image: "/modern-chat-app.png",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Express", "JWT"],
      githubUrl: "#",
      liveUrl: "#",
      category: "Web Development",
    },
    {
      title: "Smart Home IoT Dashboard",
      description:
        "IoT dashboard for monitoring and controlling smart home devices. Features real-time data visualization, device management, and automated scheduling with responsive design.",
      image: "/smart-home-iot-dashboard.png",
      technologies: ["React", "Python", "MQTT", "Raspberry Pi", "Chart.js", "WebSocket"],
      githubUrl: "#",
      liveUrl: "#",
      category: "IoT",
    },
  ]

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length)
  }

  const goToProject = (index: number) => {
    setCurrentProject(index)
  }

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-foreground mb-4">Featured Projects</h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Showcasing innovative solutions and creative implementations
            </p>
          </div>
        </AnimatedSection>

        {/* Featured Project Slider */}
        <AnimatedSection animation="scale-up" delay={200}>
          <div className="relative mb-16">
            <Card className="overflow-hidden shadow-2xl transition-all duration-500 hover:shadow-3xl">
              <div className="grid lg:grid-cols-2">
                {/* Project Image */}
                <div className="relative h-64 lg:h-96 overflow-hidden group">
                  <img
                    src={projects[currentProject].image || "/placeholder.svg"}
                    alt={projects[currentProject].title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="transition-transform duration-300 hover:scale-105">
                      {projects[currentProject].category}
                    </Badge>
                  </div>
                </div>

                {/* Project Details */}
                <CardContent className="p-8 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold font-heading text-foreground mb-4 transition-colors duration-300 hover:text-accent">
                    {projects[currentProject].title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">{projects[currentProject].description}</p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {projects[currentProject].technologies.map((tech, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="hover:bg-accent hover:text-white transition-all duration-300 transform hover:scale-105"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex gap-4">
                    {projects[currentProject].githubUrl && (
                      <Button
                        variant="outline"
                        onClick={() => window.open(projects[currentProject].githubUrl, "_blank")}
                        className="flex items-center gap-2 transition-all duration-300 hover:scale-105"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </Button>
                    )}
                    {projects[currentProject].liveUrl && (
                      <Button
                        onClick={() => window.open(projects[currentProject].liveUrl, "_blank")}
                        className="flex items-center gap-2 gradient-primary text-white transition-all duration-300 hover:scale-105"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </Button>
                    )}
                  </div>
                </CardContent>
              </div>
            </Card>

            {/* Navigation Arrows */}
            <Button
              variant="outline"
              size="icon"
              onClick={prevProject}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-accent hover:text-white transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextProject}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-accent hover:text-white transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </AnimatedSection>

        {/* Project Indicators */}
        <div className="flex justify-center space-x-2 mb-16">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => goToProject(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 transform hover:scale-125 ${
                index === currentProject ? "bg-accent scale-125" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
            />
          ))}
        </div>

        {/* All Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
              <Card
                className="group hover:shadow-xl transition-all duration-500 transform hover:-translate-y-3 cursor-pointer overflow-hidden h-full"
                onClick={() => setCurrentProject(index)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                    <span className="text-white font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      View Details
                    </span>
                  </div>
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="transition-transform duration-300 group-hover:scale-105">
                      {project.category}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold font-heading text-foreground mb-2 group-hover:text-accent transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">{project.description}</p>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
