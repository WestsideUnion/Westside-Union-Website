"use client"

import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import { Footer } from "@/components/footer"
import Aurora from "@/components/Aurora"
import { siteContent } from "@/lib/site-content"
import { motion } from "framer-motion"
import Image from "next/image"

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
                    <h2 className="text-3xl md:text-4xl font-bold mb-20 text-center">Our Journey</h2>
                    <div className="relative max-w-5xl mx-auto">
                        {/* Centered Vertical Line */}
                        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/20 -translate-x-1/2" />

                        <div className="space-y-24">
                            {about.timeline.map((item, index) => (
                                <div key={index} className="relative">
                                    {/* Dot */}
                                    <div className="absolute top-0 left-4 md:left-1/2 -translate-x-1/2 z-20">
                                        <div className="w-4 h-4 rounded-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)] border-4 border-black" />
                                    </div>

                                    {/* Content Card */}
                                    <div className={`pl-12 md:pl-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 md:text-right md:ml-0' : 'md:pl-16 md:ml-auto'}`}>
                                        <motion.div
                                            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.6 }}
                                            className="group bg-zinc-900/40 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:border-white/30 transition-all duration-300"
                                        >
                                            {/* Image Section */}
                                            {item.image && (
                                                <div className="relative h-48 w-full overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
                                                    <Image
                                                        src={item.image}
                                                        alt={item.title}
                                                        fill
                                                        className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent" />
                                                </div>
                                            )}

                                            <div className="p-6">
                                                <span className="text-sm font-black tracking-widest text-blue-500 uppercase mb-2 block">{item.year}</span>
                                                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                                                <p className="text-gray-400 leading-relaxed">{item.description}</p>
                                            </div>
                                        </motion.div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}
