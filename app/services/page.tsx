"use client"

import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import { Footer } from "@/components/footer"
import Aurora from "@/components/Aurora"
import { servicesContent } from "./content"
import { motion } from "framer-motion"
import { Palette, Cpu, Play, TrendingUp, Megaphone } from "lucide-react"

export default function ServicesPage() {
    const services = servicesContent

    const getIcon = (category: string) => {
        switch (category) {
            case "Design": return <Palette className="w-8 h-8 text-pink-400" />
            case "Development": return <Cpu className="w-8 h-8 text-blue-400" />
            case "Marketing": return <Megaphone className="w-8 h-8 text-purple-400" />
            case "Consulting": return <TrendingUp className="w-8 h-8 text-green-400" />
            default: return <Cpu className="w-8 h-8 text-white" />
        }
    }

    return (
        <div className="min-h-screen bg-black overflow-hidden relative text-white">
            <div className="fixed inset-0 w-full h-full">
                <Aurora colorStops={["#1e293b", "#0f172a", "#000000"]} amplitude={1.0} blend={0.5} speed={0.4} />
            </div>

            <GlassmorphismNav />

            <main className="relative z-10 pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
                <section className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Services</h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Comprehensive solutions tailored to your business needs, from concept to execution.
                    </p>
                </section>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.category}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-300 group"
                        >
                            <div className="mb-6 bg-white/10 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                {getIcon(service.category)}
                            </div>

                            <h2 className="text-2xl font-bold mb-4">{service.category}</h2>
                            <p className="text-gray-400 mb-6 min-h-[3rem]">{service.description}</p>

                            <ul className="space-y-3">
                                {service.items.map((item, i) => (
                                    <li key={i} className="flex items-start text-sm text-gray-300">
                                        <span className="mr-2 text-primary">•</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                <section className="mt-20 text-center">
                    <div className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 border border-white/10 rounded-3xl p-12 backdrop-blur-xl">
                        <h2 className="text-3xl font-bold mb-4">Ready to elevate your business?</h2>
                        <p className="text-gray-300 mb-8">We tailor our engagement models to fit your specific stages of growth.</p>
                        <div className="flex flex-wrap justify-center gap-4">
                            {["Brand + Website Overlay", "Product MVP Build", "AI Integration", "DOOH Campaign"].map((tag) => (
                                <span key={tag} className="px-4 py-2 bg-white/10 rounded-full text-sm font-medium border border-white/5">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}
