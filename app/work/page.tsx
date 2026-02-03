"use client"

import { useState } from "react"
import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import { Footer } from "@/components/footer"
import Aurora from "@/components/Aurora"
import { workContent } from "./content"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

export default function WorkPage() {
    const work = workContent
    const [selectedCategory, setSelectedCategory] = useState("All")

    // Extract unique categories dynamically
    const categories = ["All", ...Array.from(new Set(work.map(item => item.category)))]

    const filteredWork = selectedCategory === "All"
        ? work
        : work.filter(item => item.category === selectedCategory)

    return (
        <div className="min-h-screen bg-black overflow-hidden relative text-white">
            <div className="fixed inset-0 w-full h-full">
                <Aurora colorStops={["#475569", "#64748b", "#475569"]} amplitude={1.0} blend={0.5} speed={0.5} />
            </div>

            <GlassmorphismNav />

            <main className="relative z-10 pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
                <section className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Work</h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
                        A selection of projects where technology met vision.
                    </p>

                    {/* Category Menu */}
                    <div className="flex flex-wrap justify-center gap-3">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${selectedCategory === category
                                    ? "bg-white text-black border-white"
                                    : "bg-white/5 text-gray-400 border-white/10 hover:bg-white/10 hover:text-white"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </section>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 min-h-[50vh]">
                    <AnimatePresence mode="popLayout">
                        {filteredWork.map((project, index) => (
                            <motion.div
                                key={project.title} // Use title as key for animation continuity
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                className="group relative bg-zinc-900/40 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:border-white/30 transition-all duration-300 flex flex-col h-full"
                            >
                                <div className="aspect-[16/9] bg-gradient-to-br from-gray-800 to-black relative flex-shrink-0">
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

                                <div className="p-6 flex flex-col flex-grow">
                                    <h3 className="text-xl font-bold mb-2 group-hover:text-blue-200 transition-colors">{project.title}</h3>
                                    <p className="text-gray-400 text-sm mb-4 flex-grow">{project.description}</p>

                                    <div className="mt-auto flex justify-end">
                                        <span className="text-xs font-medium text-gray-500 uppercase tracking-wider bg-white/5 px-2 py-1 rounded">
                                            {project.category}
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </main>

            <Footer />
        </div>
    )
}
