"use client"

import { motion } from "framer-motion"
import Link from "next/link"

interface ResearchItem {
    slug: string
    title: string
    date: string
    excerpt: string
    image?: string
}

interface ResearchListProps {
    research: ResearchItem[]
}

export function ResearchList({ research }: ResearchListProps) {
    return (
        <div className="space-y-12">
            {research.map((post, index) => (
                <motion.article
                    key={post.slug}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-zinc-900/30 backdrop-blur-xl border border-white/10 rounded-none md:rounded-none overflow-hidden hover:border-white/20 transition-all group max-w-5xl mx-auto hover:bg-white/5"
                >
                    <Link href={`/research/${post.slug}`} className="flex flex-col md:flex-row h-full">
                        {/* Left Content Section */}
                        <div className="flex-1 p-8 md:p-12 flex flex-col justify-center z-10 relative">
                            <div className="mb-6">
                                <h2 className="text-3xl md:text-3xl font-bold mb-2 text-white tracking-wide uppercase">
                                    {post.title}
                                </h2>
                                <div className="text-blue-400 font-medium text-sm tracking-wider uppercase mb-6 flex items-center">
                                    {post.date}
                                </div>
                            </div>

                            <p className="text-gray-400 text-lg mb-8 leading-relaxed italic border-l-2 border-white/10 pl-4">
                                "{post.excerpt}"
                            </p>

                            <div className="mt-auto">
                                <div className="inline-flex items-center px-6 py-3 bg-white text-black font-bold text-sm tracking-widest uppercase hover:bg-gray-200 transition-colors">
                                    Read More
                                </div>
                            </div>
                        </div>

                        {/* Right Image Section */}
                        <div className="w-full md:w-1/2 relative h-64 md:h-auto overflow-hidden">
                            {post.image ? (
                                <>
                                    <div className="absolute inset-0 bg-zinc-900/20 z-10 group-hover:bg-transparent transition-colors duration-500" />
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 md:absolute md:inset-0 grayscale group-hover:grayscale-0"
                                    />
                                </>
                            ) : (
                                <div className="w-full h-full bg-zinc-800 flex items-center justify-center">
                                    <span className="text-white/20 text-4xl font-bold">WS</span>
                                </div>
                            )}
                        </div>
                    </Link>
                </motion.article>
            ))}
        </div>
    )
}
