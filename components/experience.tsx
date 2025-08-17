"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building, Calendar, MapPin } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"

export function Experience() {
  const experiences = [
    {
      title: "Software Developer",
      company: "Allure Digital",
      location: "Present",
      duration: "2023 - Present",
      type: "Full-time",
      description:
        "Currently employed as an Associate Software Developer, with a primary focus on developing full-stack applications using the Appian framework. Within this role, I excel in crafting low-code systems by utilizing a variety of Appian objects, including record types, AI Skills, process models, integrations, interfaces, and RPA. My skill set also encompasses proficient management of cloud databases, MySQL, web APIs, and connected systems, guaranteeing smooth integrations across the applications I develop.",
      skills: ["Appian", "MySQL", "Cloud Databases", "Web APIs", "RPA", "AI Skills"],
      color: "border-l-blue-500",
    },
    {
      title: "Full Stack Developer",
      company: "DevX IT",
      location: "Remote",
      duration: "2022 - 2023",
      type: "Contract",
      description:
        "Held the role of Mobile Application Developer, specializing in the development of Flutter Framework hybrid applications. In this capacity, I managed both front-end and back-end development, utilizing Firebase as the database infrastructure. Additionally, I utilized Figma for designing interfaces, ensuring the creation of robust, user-friendly, and scalable Android applications.",
      skills: ["Flutter", "Firebase", "Figma", "UI/UX Design", "Mobile Development"],
      color: "border-l-green-500",
    },
  ]

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-foreground mb-4">Work Experience</h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              My professional journey in software development
            </p>
          </div>
        </AnimatedSection>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <AnimatedSection key={index} animation="slide-left" delay={index * 200}>
              <Card
                className={`group hover:shadow-xl transition-all duration-500 border-l-4 ${exp.color} overflow-hidden transform hover:-translate-y-1`}
              >
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <Building className="w-5 h-5 text-accent mr-2 transition-transform duration-300 group-hover:scale-110" />
                        <h3 className="text-2xl font-bold font-heading text-foreground">{exp.title}</h3>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-4">
                        <span className="text-lg font-semibold text-accent">{exp.company}</span>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          <span>{exp.duration}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          <span>{exp.location}</span>
                        </div>
                        <Badge
                          variant="outline"
                          className="transition-colors duration-300 group-hover:bg-accent group-hover:text-white"
                        >
                          {exp.type}
                        </Badge>
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-6">{exp.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="hover:bg-accent hover:text-white transition-all duration-300 transform hover:scale-105"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
