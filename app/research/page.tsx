"use client"

import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import { Footer } from "@/components/footer"
import Aurora from "@/components/Aurora"
import { siteContent } from "@/lib/site-content"
import { motion } from "framer-motion"
import Link from "next/link"
import { Calendar, ArrowRight } from "lucide-react"

export default function ResearchPage() {
    const { research } = siteContent

    return (
        <div className="min-h-screen bg-black overflow-hidden relative text-white">
            <div className="fixed inset-0 w-full h-full">
                <Aurora colorStops={["#111827", "#1f2937", "#000000"]} amplitude={1.0} blend={0.6} speed={0.4} />
            </div>

            <GlassmorphismNav />

            <main className="relative z-10 pt-32 pb-20 px-6 md:px-12 max-w-5xl mx-auto">
                <section className="text-center mb-20">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">Research & Insights</h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Exploring the future of technology, AI, and business transformation.
                    </p>
                </section>

                <div className="space-y-8">
                    {research.map((post, index) => (
                        <motion.article
                            key={post.slug}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group bg-zinc-900/50 backdrop-blur-md border border-white/5 rounded-2xl p-8 hover:bg-zinc-800/50 hover:border-white/20 transition-all cursor-pointer"
                        >
                            <Link href={`/research/${post.slug}`}>
                                <div className="flex flex-col md:flex-row md:items-center gap-6 mb-4">
                                    <div className="flex items-center text-sm text-blue-400 font-medium bg-blue-500/10 px-3 py-1 rounded-full w-fit">
                                        <Calendar className="w-4 h-4 mr-2" />
                                        {post.date}
                                    </div>
                                </div>

                                <h2 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-blue-300 transition-colors">
                                    {post.title}
                                </h2>

                                <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                                    {post.excerpt}
                                </p>

                                <div className="flex items-center text-white font-medium group-hover:translate-x-2 transition-transform">
                                    Read Article <ArrowRight className="w-4 h-4 ml-2" />
                                </div>
                            </Link>
                        </motion.article>
                    ))}
                </div>
            </main>

            <Footer />
        </div>
    )
}
