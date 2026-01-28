"use client"

import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import { Footer } from "@/components/footer"
import Aurora from "@/components/Aurora"
import { siteContent } from "@/lib/site-content"
import { motion } from "framer-motion"

export default function AboutPage() {
    const { about, brand } = siteContent

    return (
        <div className="min-h-screen bg-black overflow-hidden relative text-white">
            <div className="fixed inset-0 w-full h-full">
                <Aurora colorStops={["#475569", "#64748b", "#475569"]} amplitude={1.0} blend={0.5} speed={0.5} />
            </div>

            <GlassmorphismNav />

            <main className="relative z-10 pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
                {/* Hero Section */}
                <section className="mb-20 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                        About {brand.name}
                    </h1>
                    <div className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300 leading-relaxed backdrop-blur-sm bg-black/20 p-8 rounded-2xl border border-white/10">
                        {about.summary}
                    </div>
                </section>

                {/* Timeline Section */}
                <section className="mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Journey</h2>
                    <div className="relative border-l border-white/20 ml-4 md:ml-1/2 md:-translate-x-px space-y-12">
                        {about.timeline.map((item, index) => (
                            <div key={index} className="relative pl-8 md:pl-0">
                                {/* Dot */}
                                <div className="absolute top-0 left-0 md:left-1/2 -translate-x-1.5 w-3 h-3 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]" />

                                {/* Content */}
                                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right md:ml-0' : 'md:pl-12 md:ml-auto'}`}>
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="bg-zinc-900/50 backdrop-blur-md border border-white/10 p-6 rounded-xl hover:bg-zinc-800/50 transition-colors"
                                    >
                                        <span className="text-xl font-bold text-blue-400 block mb-2">{item.year}</span>
                                        <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                                        <p className="text-gray-400 text-sm">{item.description}</p>
                                    </motion.div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}
