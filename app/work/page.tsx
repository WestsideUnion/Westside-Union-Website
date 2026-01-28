"use client"

import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import { Footer } from "@/components/footer"
import Aurora from "@/components/Aurora"
import { siteContent } from "@/lib/site-content"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

export default function WorkPage() {
    const { work } = siteContent

    return (
        <div className="min-h-screen bg-black overflow-hidden relative text-white">
            <div className="fixed inset-0 w-full h-full">
                <Aurora colorStops={["#2e1065", "#000000", "#4c1d95"]} amplitude={0.8} blend={0.6} speed={0.4} />
            </div>

            <GlassmorphismNav />

            <main className="relative z-10 pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
                <section className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Work</h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        A selection of projects where technology met vision.
                    </p>
                </section>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {work.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="group relative bg-zinc-900/40 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:border-white/30 transition-all duration-300"
                        >
                            <div className="aspect-[16/9] bg-gradient-to-br from-gray-800 to-black relative">
                                {/* Placeholder for project image */}
                                <div className="absolute inset-0 flex items-center justify-center text-white/10 text-6xl font-black select-none">
                                    WS
                                </div>
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <span className="bg-white text-black px-4 py-2 rounded-full font-medium text-sm flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                                        View Details <ArrowUpRight className="w-4 h-4" />
                                    </span>
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="text-blue-400 text-xs font-bold uppercase tracking-wider mb-2">{project.category}</div>
                                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-200 transition-colors">{project.title}</h3>
                                <p className="text-gray-400 text-sm">{project.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </main>

            <Footer />
        </div>
    )
}
