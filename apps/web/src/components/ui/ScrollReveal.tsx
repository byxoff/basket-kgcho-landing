"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export function ScrollReveal({ children, className, delay = 0 }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return

    gsap.fromTo(
      ref.current,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    )
  }, [delay])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
