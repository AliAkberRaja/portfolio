"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail, FileText } from "lucide-react"
import { useEffect, useState } from "react"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setIsVisible(true)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-hero opacity-50"></div>

      {/* Interactive background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse transition-transform duration-1000 ease-out"
          style={{
            top: `${20 + mousePosition.y * 0.01}%`,
            right: `${20 + mousePosition.x * 0.01}%`,
          }}
        ></div>
        <div
          className="absolute w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000 transition-transform duration-1000 ease-out"
          style={{
            bottom: `${20 - mousePosition.y * 0.01}%`,
            left: `${20 - mousePosition.x * 0.01}%`,
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Main content */}
          
          
          
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
             <div className="flex justify-center mb-6">
  <img
  src={`${process.env.PUBLIC_URL}/images/about.png`}
  alt="Ali Akbar"
  className="rounded-full border-4 border-accent shadow-lg w-16 h-16 sm:w-24 sm:h-24 lg:w-40 lg:h-40"
/>

</div>

          
            <h1 className="text-2xl sm:text-6xl lg:text-4xl font-black font-heading text-foreground mb-6">
              Hi, I'm{" "}
              <span className="text-accent bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent animate-pulse">
                Ali Akbar
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Software Engineer & AI Enthusiast
            </p>
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
              Crafting innovative solutions with code, exploring the frontiers of artificial intelligence, and bringing
              creative ideas to life through technology.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button
                size="lg"
                onClick={() => scrollToSection("#contact")}
                className="gradient-primary text-white hover:shadow-lg hover:shadow-accent/25 transition-all duration-300 transform hover:scale-105 focus:scale-105 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
                aria-label="Contact Ali Akbar"
              >
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1P2o__BvNB9DjWS9xMysnolITxfVgssVo/view?usp=sharing",
                    "_blank",
                  )
                }
                className="border-accent text-accent hover:bg-accent hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
                aria-label="View Ali Akbar's resume"
              >
                <FileText className="mr-2 h-5 w-5" />
                View Resume
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6 mb-16">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => window.open("https://www.linkedin.com/in/ali-akbar-raja/", "_blank")}
                className="hover:text-accent hover:bg-accent/10 transition-all duration-300 transform hover:scale-110 focus:scale-110 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
                aria-label="Visit Ali Akbar's LinkedIn profile"
              >
                <Linkedin className="h-6 w-6" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => window.open("https://github.com/AliAkberRaja", "_blank")}
                className="hover:text-accent hover:bg-accent/10 transition-all duration-300 transform hover:scale-110 focus:scale-110 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
                aria-label="Visit Ali Akbar's GitHub profile"
              >
                <Github className="h-6 w-6" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => window.open("mailto:aliakberraja@gmail.com", "_blank")}
                className="hover:text-accent hover:bg-accent/10 transition-all duration-300 transform hover:scale-110 focus:scale-110 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
                aria-label="Send email to Ali Akbar"
              >
                <Mail className="h-6 w-6" />
              </Button>
            </div>
          </div>

          {/* Scroll indicator */}
          <div
            className={`transition-all duration-1000 delay-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <Button
              variant="ghost"
              onClick={() => scrollToSection("#about")}
              className="animate-bounce hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
              aria-label="Scroll to about section"
            >
              <ArrowDown className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
