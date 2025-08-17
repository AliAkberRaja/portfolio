"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Smartphone, Palette, Brain } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"

export function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: [ "Php","JavaScript","Python", "Dart", "Java", "C++", "DAX"],
      color: "text-blue-500",
    },
    {
      title: "Low Code/No Code",
      icon: Code,
      skills: ["Appian","Bubble.io", "n8n", "SAIL", "FlutterFlow",],
      color: "text-green-500",
    },
    {
      title: "Mobile Development",
      icon: Smartphone,
      skills: ["Flutter", "Dart", "Android", "iOS", "Firebase","MySQL", "Supabase","Hive"],
      color: "text-purple-500",
    },
    {
      title: "AI & Machine Learning",
      icon: Brain,
      skills: ["TensorFlow", "PyTorch", "OpenCV", "Scikit-learn", "CNNs", "Deep Learning"],
      color: "text-red-500",
    },
    {
      title: "Databases & Cloud",
      icon: Database,
      skills: ["MySQL", "PostgreSQL", "MongoDB", "Firebase", "AWS", "Google Cloud"],
      color: "text-yellow-500",
    },
    {
      title: "Design & Dashboards",
      icon: Palette,
      skills: ["Microsoft PowerBi","Tableau","Figma","Canva", "Git", "Docker", "UI/UX Design"],
      color: "text-pink-500",
    },
  ]

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-foreground mb-4">Skills & Technologies</h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit for building innovative solutions
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <AnimatedSection key={index} animation="scale-up" delay={index * 100}>
                <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div
                        className={`p-3 rounded-lg bg-accent/10 mr-4 transition-transform duration-300 group-hover:scale-110`}
                      >
                        <IconComponent className={`w-6 h-6 ${category.color}`} />
                      </div>
                      <h3 className="text-lg font-semibold font-heading text-foreground">{category.title}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <Badge
                          key={skillIndex}
                          variant="secondary"
                          className="hover:bg-accent hover:text-white transition-all duration-300 cursor-default transform hover:scale-105"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            )
          })}
        </div>
      </div>
    </section>
  )
}
