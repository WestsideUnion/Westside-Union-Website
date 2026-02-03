"use client"

import { useState, useEffect, useRef } from "react"
import { Globe, Lightbulb, Rocket, Users } from "lucide-react"

export function AITeamSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

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

  const steps = [
    {
      title: "Discovery & Strategy",
      description: "We align with your vision through deep market research and customer needs analysis, ensuring a solid foundation.",
      icon: Lightbulb
    },
    {
      title: "Design & Development",
      description: "Our cross-functional teams in Toronto and San Francisco bring ideas to life with cutting-edge design and engineering.",
      icon: Globe
    },
    {
      title: "Launch & Scale",
      description: "We deploy robust solutions and provide ongoing support to help your business grow and adapt.",
      icon: Rocket
    },
    {
      title: "Partnership First",
      description: "We view ourselves as an extension of your team, committed to your long-term success.",
      icon: Users
    }
  ]

  return (
    <section id="how-we-work" ref={sectionRef} className="relative z-10">
      <div className="bg-white rounded-b-[3rem] pt-16 sm:pt-24 pb-16 sm:pb-24 px-4 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div
              className={`inline-flex items-center gap-2 bg-slate-50 border border-slate-200 text-slate-700 px-4 py-2 rounded-full text-sm font-medium mb-6 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
            >
              <Globe className="w-4 h-4" />
              Global Expertise
            </div>

            <h2
              className={`text-4xl md:text-5xl font-bold text-slate-900 mb-4 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
            >
              How We{" "}
              <span className="bg-gradient-to-r from-slate-600 to-slate-400 bg-clip-text text-transparent">
                Work
              </span>
            </h2>

            <p
              className={`text-xl text-slate-600 max-w-2xl mx-auto transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
            >
              A collaborative, transparent process designed to deliver exceptional results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-lg transition-all duration-500 hover:-translate-y-1 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                style={{ transitionDelay: `${600 + index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6">
                  <step.icon className="w-6 h-6 text-slate-700" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
