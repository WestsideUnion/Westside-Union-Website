"use client"

import { useState, useEffect } from "react"
import { siteContent } from "@/lib/site-content"
import { ArrowRight, Globe, Shield, Zap } from "lucide-react"

export function HeroSection() {
    const [isVisible, setIsVisible] = useState(false)
    const [index, setIndex] = useState(0)
    const { home } = siteContent

    useEffect(() => {
        setIsVisible(true)
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % home.hero.rotatingWords.length)
        }, 3000)
        return () => clearInterval(interval)
    }, [home.hero.rotatingWords.length])

    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden px-4">
            {/* Background Decorative Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none opacity-50" />

            <div className="container mx-auto relative z-10 text-center">
                {/* Badge */}
                <div
                    className={`inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-white text-sm font-medium mb-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                        }`}
                >
                    <span className="flex h-2 w-2 rounded-full bg-blue-400 animate-pulse" />
                    {home.hero.badge}
                </div>

                {/* Title */}
                <h1
                    className={`text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight mb-8 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        }`}
                >
                    {home.hero.titlePrefix}{" "}
                    <span className="relative inline-block min-w-[280px] text-left">
                        <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                            {home.hero.rotatingWords[index]}
                        </span>
                    </span>
                </h1>

                {/* Subheading */}
                <p
                    className={`text-lg md:text-xl text-white/70 max-w-3xl mx-auto mb-12 leading-relaxed transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        }`}
                >
                    {home.hero.subheading}
                </p>

                {/* CTAs */}
                <div
                    className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 transition-all duration-1000 delay-600 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        }`}
                >
                    <a
                        href="/contact"
                        className="group inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-200 transition-all hover:scale-105"
                    >
                        {home.hero.primaryCta}
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a
                        href="/work"
                        className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all"
                    >
                        {home.hero.secondaryCta}
                    </a>
                </div>

                {/* Trusted By / Trust Bar */}
                <div
                    className={`pb-12 transition-all duration-1000 delay-800 ${isVisible ? "opacity-100" : "opacity-0"
                        }`}
                >
                    <p className="text-white/40 text-sm font-medium mb-8 uppercase tracking-widest italic font-serif">
                        {home.hero.trustedByText}
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                        {/* Dynamic icons for abstract companies */}
                        <div className="flex items-center gap-2 text-white">
                            <Globe className="w-8 h-8" />
                            <span className="text-lg font-bold">Global Solutions</span>
                        </div>
                        <div className="flex items-center gap-2 text-white">
                            <Shield className="w-8 h-8" />
                            <span className="text-lg font-bold">Secure Partners</span>
                        </div>
                        <div className="flex items-center gap-2 text-white">
                            <Zap className="w-8 h-8" />
                            <span className="text-lg font-bold">InnoTech</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
