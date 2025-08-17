import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { Experience } from "@/components/experience"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import { Suspense } from "react"
import { LoadingSpinner } from "@/components/loading-spinner"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Suspense fallback={<LoadingSpinner />}>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
        <ScrollToTop />
      </Suspense>
    </main>
  )
}
