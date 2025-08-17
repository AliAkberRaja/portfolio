"use client"

import type React from "react"

import { cn } from "@/lib/utils"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  animation?: "fade-up" | "fade-in" | "slide-left" | "slide-right" | "scale-up"
  delay?: number
}

export function AnimatedSection({ children, className, animation = "fade-up", delay = 0 }: AnimatedSectionProps) {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
  })

  const animationClasses = {
    "fade-up": "translate-y-8 opacity-0",
    "fade-in": "opacity-0",
    "slide-left": "translate-x-8 opacity-0",
    "slide-right": "-translate-x-8 opacity-0",
    "scale-up": "scale-95 opacity-0",
  }

  const activeClasses = {
    "fade-up": "translate-y-0 opacity-100",
    "fade-in": "opacity-100",
    "slide-left": "translate-x-0 opacity-100",
    "slide-right": "translate-x-0 opacity-100",
    "scale-up": "scale-100 opacity-100",
  }

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out",
        isIntersecting ? activeClasses[animation] : animationClasses[animation],
        className,
      )}
      style={{
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}
