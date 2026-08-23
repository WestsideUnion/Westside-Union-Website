"use client"

import { useEffect, useRef } from "react"
import { TestimonialsColumn } from "@/components/ui/testimonials-column"

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll(".fade-in-element")
            elements.forEach((element, index) => {
              setTimeout(() => {
                element.classList.add("animate-fade-in-up")
              }, index * 300)
            })
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const testimonials = [
    {
      text: "Manual patient intake was overburdening our clinical team. Westside Union implemented an automated intake and scheduling workflow that reduced administrative overhead by 40%, allowing our staff to focus directly on patient care.",
      name: "Dr. Elena Rostova",
      role: "Chief Medical Officer",
    },
    {
      text: "Balancing strict compliance with immediate customer support was a major hurdle. Westside Union designed a secure, compliant interaction system that provides instant, verified guidance to our clients without compromising security.",
      name: "Marcus Sterling",
      role: "VP of Digital Banking",
    },
    {
      text: "We struggled to scale customer conversations without losing our distinct brand voice. Westside Union tailored an omnichannel solution that understands our aesthetic, assisting customers with inquiries while preserving our brand standards.",
      name: "Isabella Vane",
      role: "Creative Director",
    },
    {
      text: "Rapid growth created a support bottleneck that slowed response times. Westside Union connected our tools and automated common workflows, resolving 70% of routine inquiries instantly and cleanly escalating technical issues.",
      name: "Liam O'Connor",
      role: "Head of Customer Success",
    },
    {
      text: "Delayed responses to inquiries after hours were costing us qualified buyers. Westside Union deployed a 24/7 response and briefing system that books viewings immediately, helping us close five additional deals this quarter.",
      name: "Sarah Jenkins",
      role: "Luxury Real Estate Broker",
    },
    {
      text: "Coordinating stock availability across 50 locations created friction for shoppers. Westside Union integrated real-time inventory lookups into our customer channels, directing shoppers straight to available stock.",
      name: "Kenji Sato",
      role: "Director of Retail Ops",
    },
    {
      text: "Language barriers and fragmented communications were slowing logistics coordination. Westside Union implemented a multilingual communication hub that keeps drivers and vendors aligned in real time.",
      name: "Amara Okeke",
      role: "Logistics Coordinator",
    },
    {
      text: "Unqualified inquiries were consuming valuable attorney hours. Westside Union designed a structured intake workflow that screens potential cases accurately, ensuring our team focuses on qualified matters.",
      name: "Robert Thorne",
      role: "Managing Partner",
    },
  ]

  return (
    <section id="testimonials" ref={sectionRef} className="relative pt-16 pb-16 px-4 sm:px-6 lg:px-8">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-24">
          <div className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out inline-flex items-center gap-2 text-white/60 text-sm font-medium tracking-wider uppercase mb-6">
            <div className="w-8 h-px bg-white/30"></div>
            Proven Track Record
            <div className="w-8 h-px bg-white/30"></div>
          </div>
          <h2 className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight text-balance">
            Trusted by <span className="bg-gradient-to-r from-blue-400 to-slate-200 bg-clip-text text-transparent">Industry Leaders</span>
          </h2>
          <div className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out text-lg sm:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed space-y-3 font-light">
            <p>
              Complex business challenges require more than impressive technology. They require a partner who understands the problem, creates a practical solution, and remains focused on the outcome.
            </p>
            <p className="text-base text-white/60">
              See how organizations have used Westside Union solutions to reduce repetitive work, improve customer experiences, and create new opportunities for growth.
            </p>
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out relative flex justify-center items-center min-h-[600px] md:min-h-[800px] overflow-hidden">
          <div
            className="flex gap-8 max-w-6xl"
            style={{
              maskImage: "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
            }}
          >
            <TestimonialsColumn testimonials={testimonials.slice(0, 3)} duration={15} className="flex-1" />
            <TestimonialsColumn
              testimonials={testimonials.slice(2, 5)}
              duration={12}
              className="flex-1 hidden md:block"
            />
            <TestimonialsColumn
              testimonials={testimonials.slice(1, 4)}
              duration={18}
              className="flex-1 hidden lg:block"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
