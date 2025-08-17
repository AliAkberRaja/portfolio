"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { User, Heart, Lightbulb } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-foreground mb-4">About Me</h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Get to know the person behind the code</p>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
         <AnimatedSection animation="slide-right" delay={200}>
  <div className="flex justify-center lg:justify-end">
    <div className="relative group">
      {/* Image Container */}
      <div className="w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-2xl transition-transform duration-300 group-hover:scale-105 bg-white dark:bg-neutral-800">
        <img
          src="/images/main.png"
          alt="Ali Akbar"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Floating Icon */}
      <div className="absolute -bottom-4 -right-4 w-10 h-10 sm:w-12 sm:h-12 bg-accent rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
        <User className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
      </div>
    </div>
  </div>
</AnimatedSection>


          {/* About Content */}
          <AnimatedSection animation="slide-left" delay={400}>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold font-heading text-foreground mb-4 flex items-center">
                  <Heart className="w-6 h-6 text-accent mr-3" />
                  Hey Folks!
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  I am a Software engineer, ML Enthusiast and a Design guru with a side gig in botany, painting, and
                  photography. Coding by day, capturing beauty by night. Let's just say my life's a mix of algorithms
                  and aesthetics!
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold font-heading text-foreground mb-4 flex items-center">
                  <Lightbulb className="w-6 h-6 text-accent mr-3" />
                  Research Interests
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  My research interests lie in the fields of Artificial Intelligence and image processing. I am
                  particularly focused on developing innovative techniques involving deep learning and convolutional
                  neural networks (CNNs) for applications in real-time image analysis.
                </p>
              </div>

              {/* Key Projects */}
              <div className="space-y-4">
                <h4 className="text-xl font-semibold font-heading text-foreground">Featured Projects:</h4>

                <AnimatedSection animation="fade-up" delay={600}>
                  <Card className="border-l-4 border-l-accent hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h5 className="font-semibold text-foreground">DermaVision</h5>
                        <Badge variant="secondary">AI/ML</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">
                        Developed an AI-driven application utilizing Convolutional Neural Networks (CNNs) for the
                        real-time analysis and detection of major skin diseases, providing accessible and accurate
                        diagnostic support.
                      </p>
                      <a
                        href="https://github.com/AliAkberRaja/dermavision-flutter"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:underline text-sm font-medium transition-colors"
                      >
                        View Project →
                      </a>
                    </CardContent>
                  </Card>
                </AnimatedSection>

                <AnimatedSection animation="fade-up" delay={800}>
                  <Card className="border-l-4 border-l-accent hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h5 className="font-semibold text-foreground">Trash Segregation</h5>
                        <Badge variant="secondary">Sustainability</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">
                        Implemented CNN-based models to enhance the accuracy of automated waste segregation systems,
                        optimizing the identification and sorting of recyclable materials for improved environmental
                        sustainability.
                      </p>
                      <a
                        href="https://github.com/AliAkberRaja/TrashSegregation"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:underline text-sm font-medium transition-colors"
                      >
                        View Project →
                      </a>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
