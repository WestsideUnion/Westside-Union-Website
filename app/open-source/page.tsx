"use client"

import { useState } from "react"
import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import { Footer } from "@/components/footer"
import Aurora from "@/components/Aurora"
import { openSourceContent } from "./content"
import { motion, AnimatePresence } from "framer-motion"
import { CheckCircle, Github, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function OpenSourcePage() {
    const projects = openSourceContent
    const [selectedCategory, setSelectedCategory] = useState("All")

    const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))]

    const filteredProjects =
        selectedCategory === "All"
            ? projects
            : projects.filter((p) => p.category === selectedCategory)

    return (
        <div className="min-h-screen bg-black overflow-hidden relative text-white">
            <div className="fixed inset-0 w-full h-full">
                <Aurora colorStops={["#1a3a1a", "#2d5a27", "#1a3a1a"]} amplitude={1.0} blend={0.5} speed={0.5} />
            </div>

            <GlassmorphismNav />

            <main className="relative z-10 pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
                <section className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium mb-6">
                        <Github className="w-4 h-4" />
                        Open Source by Westside Union
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">Open Source</h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
                        Free, community-driven projects built by our team. Use them, fork them, contribute to them.
                    </p>

                    {/* Category Filter */}
                    <div className="flex flex-wrap justify-center gap-3">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                                    selectedCategory === category
                                        ? "bg-white text-black border-white"
                                        : "bg-white/5 text-gray-400 border-white/10 hover:bg-white/10 hover:text-white"
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </section>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[50vh]">
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                className="bg-zinc-900/40 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:border-green-500/30 transition-all duration-300 group flex flex-col h-full"
                            >
                                {/* Image Section */}
                                <div className="relative h-48 w-full overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500 flex-shrink-0">
                                    {project.image && (
                                        <>
                                            <Image
                                                src={project.image}
                                                alt={project.name}
                                                fill
                                                className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent opacity-60" />
                                        </>
                                    )}
                                    {/* License badge */}
                                    <div className="absolute top-3 right-3 px-2 py-1 bg-black/60 backdrop-blur-sm rounded-full text-xs text-green-400 border border-green-500/30 font-mono">
                                        {project.license}
                                    </div>
                                </div>

                                <div className="p-6 flex flex-col flex-grow">
                                    <h3 className="text-2xl font-bold mb-2 leading-tight text-white">
                                        {project.name}
                                    </h3>
                                    <span className="text-sm font-semibold tracking-widest text-green-400 uppercase mb-3 block">
                                        {project.tagline}
                                    </span>
                                    <p className="text-gray-400 mb-6 text-sm leading-relaxed flex-grow">
                                        {project.description}
                                    </p>

                                    {project.features && (
                                        <ul className="space-y-2 mb-6">
                                            {project.features.slice(0, 3).map((feature, i) => (
                                                <li key={i} className="flex items-start text-sm text-gray-300">
                                                    <CheckCircle className="w-5 h-5 text-green-400 mr-2 flex-shrink-0" />
                                                    <span className="leading-tight pt-0.5">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    )}

                                    <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
                                        <Link
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 text-sm text-white hover:text-green-400 transition-colors"
                                        >
                                            <Github className="w-4 h-4" />
                                            View on GitHub <ExternalLink className="w-3 h-3" />
                                        </Link>

                                        {project.category && (
                                            <span className="text-xs font-medium text-gray-500 uppercase tracking-wider bg-white/5 px-2 py-1 rounded">
                                                {project.category}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                <div className="mt-12 text-center">
                    <p className="text-gray-500 italic text-lg animate-pulse">More projects coming soon...</p>
                </div>

                <section className="mt-20 text-center">
                    <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 border border-white/10 rounded-3xl p-12 backdrop-blur-xl">
                        <h2 className="text-3xl font-bold mb-4">Want to contribute?</h2>
                        <p className="text-gray-300 mb-8">
                            We welcome pull requests, issues, and ideas from the community.
                        </p>
                        <Link
                            href="https://github.com/WestsideUnion"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-white text-black font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition-colors duration-200"
                        >
                            <Github className="w-5 h-5" />
                            Visit our GitHub
                        </Link>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}
