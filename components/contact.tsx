"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Send, Linkedin, Github } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Create mailto link with form data
    const subject = encodeURIComponent(formData.subject || "Contact from Portfolio")
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)
    window.open(`mailto:aliakberraja@gmail.com?subject=${subject}&body=${body}`)
  }

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-foreground mb-4">Get In Touch</h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Let's discuss your next project or collaboration opportunity
            </p>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <AnimatedSection animation="slide-right" delay={200}>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold font-heading text-foreground mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 group">
                    <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:bg-accent/20 group-hover:scale-110">
                      <Mail className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Email</p>
                      <a
                        href="mailto:aliakberraja@gmail.com"
                        className="text-muted-foreground hover:text-accent transition-colors duration-300"
                      >
                        aliakberraja@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 group">
                    <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:bg-accent/20 group-hover:scale-110">
                      <MapPin className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Location</p>
                      <p className="text-muted-foreground">Islamabad, Pakistan</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 group">
                    <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:bg-accent/20 group-hover:scale-110">
                      <Linkedin className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">LinkedIn</p>
                      <a
                        href="https://www.linkedin.com/in/ali-akbar-raja/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-accent transition-colors duration-300"
                      >
                        linkedin.com/in/ali-akbar-raja
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Contact Buttons */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold font-heading text-foreground">Quick Connect</h4>
                <div className="flex flex-wrap gap-4">
                  <Button
                    onClick={() => window.open("mailto:aliakberraja@gmail.com", "_blank")}
                    className="gradient-primary text-white hover:shadow-lg hover:shadow-accent/25 transition-all duration-300 transform hover:scale-105"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Send Email
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => window.open("https://www.linkedin.com/in/ali-akbar-raja/", "_blank")}
                    className="border-accent text-accent hover:bg-accent hover:text-white transition-all duration-300 transform hover:scale-105"
                  >
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => window.open("https://github.com/AliAkberRaja", "_blank")}
                    className="border-accent text-accent hover:bg-accent hover:text-white transition-all duration-300 transform hover:scale-105"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </Button>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Contact Form */}
          <AnimatedSection animation="slide-left" delay={400}>
            <Card className="shadow-xl transition-all duration-300 hover:shadow-2xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold font-heading text-foreground mb-6">Send a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="transition-all duration-300 focus:ring-2 focus:ring-accent focus:scale-105"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="transition-all duration-300 focus:ring-2 focus:ring-accent focus:scale-105"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="transition-all duration-300 focus:ring-2 focus:ring-accent focus:scale-105"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="transition-all duration-300 focus:ring-2 focus:ring-accent resize-none focus:scale-105"
                      placeholder="Tell me about your project or just say hello!"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full gradient-primary text-white hover:shadow-lg hover:shadow-accent/25 transition-all duration-300 transform hover:scale-105"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
