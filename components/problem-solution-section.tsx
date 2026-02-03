"use client"

import { useEffect, useRef, useState } from "react"
import { homeContent } from "@/app/content"
import { Target, TrendingUp, Users } from "lucide-react"

export function ProblemSolutionSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const { pillars, stats } = homeContent

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
      },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Target": return <Target className="h-8 w-8 text-blue-400" />
      case "TrendingUp": return <TrendingUp className="h-8 w-8 text-green-400" />
      case "Users": return <Users className="h-8 w-8 text-purple-400" />
      default: return <Target className="h-8 w-8 text-white" />
    }
  }

  return (
    <section ref={sectionRef} className="py-16 sm:py-24 px-4 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div
          className={`text-center mb-12 sm:mb-20 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-red-400 rounded-full mr-2 animate-pulse"></span>
            The Challenge
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-balance mb-4 sm:mb-6">
            Complexity & Inefficiency
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-3xl mx-auto font-light leading-relaxed">
            Most businesses bleed time and money through fragmented tools, unclear strategy, and manual workflows.
          </p>
        </div>

        {/* Pillars Cards */}
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-20 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
        >
          {pillars.map((pillar, index) => (
            <div key={index} className="group h-full">
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 sm:p-8 h-full hover:bg-white/10 transition-all duration-500 hover:border-white/30 flex flex-col items-center text-center">
                <div className="mb-6 p-4 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors">
                  {getIcon(pillar.icon)}
                </div>
                <h3 className="text-xl font-bold mb-4">{pillar.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">{pillar.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Row */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16 transition-all duration-1000 delay-600 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          {stats.map((stat, i) => (
            <div key={i} className="text-center bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 sm:p-6 hover:bg-white/10 transition-all duration-300">
              <div className="text-2xl sm:text-3xl font-bold text-white mb-2">{stat.value}</div>
              <p className="text-white/70 text-xs sm:text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

