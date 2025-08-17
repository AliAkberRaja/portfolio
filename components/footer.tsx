"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Instagram } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Name/Logo */}
          <h3 className="text-2xl font-bold font-heading mb-6">Ali Akbar</h3>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-8">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => window.open("https://www.linkedin.com/in/ali-akbar-raja/", "_blank")}
              className="hover:text-accent hover:bg-accent/10 transition-all duration-300 transform hover:scale-110"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => window.open("https://github.com/AliAkberRaja", "_blank")}
              className="hover:text-accent hover:bg-accent/10 transition-all duration-300 transform hover:scale-110"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => window.open("https://www.instagram.com/raja_ali_akbar/", "_blank")}
              className="hover:text-accent hover:bg-accent/10 transition-all duration-300 transform hover:scale-110"
            >
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => window.open("mailto:aliakberraja@gmail.com", "_blank")}
              className="hover:text-accent hover:bg-accent/10 transition-all duration-300 transform hover:scale-110"
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Button>
          </div>

          {/* Copyright */}
          <div className="border-t border-border pt-6">
            <p className="text-sm text-muted-foreground">© {currentYear} Ali Akbar. All rights reserved.</p>
            <p className="text-xs text-muted-foreground mt-2">Built with React, Next.js, and Tailwind CSS</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
