"use client"

import { useState } from "react"
import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import { Footer } from "@/components/footer"
import Aurora from "@/components/Aurora"
import { siteContent } from "@/lib/site-content"
import { motion, AnimatePresence } from "framer-motion"
import { CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ProductsPage() {
    const { products } = siteContent
    const [selectedCategory, setSelectedCategory] = useState("All")

    const categories = ["All", "Manufacturing", "Financial", "Services & Retail", "Utilities"]

    const filteredProducts = selectedCategory === "All"
        ? products
        : products.filter(product => product.category === selectedCategory)

    return (
        <div className="min-h-screen bg-black overflow-hidden relative text-white">
            <div className="fixed inset-0 w-full h-full">
                <Aurora colorStops={["#475569", "#64748b", "#475569"]} amplitude={1.0} blend={0.5} speed={0.5} />
            </div>

            <GlassmorphismNav />

            <main className="relative z-10 pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
                <section className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Products</h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
                        Scalable, AI-driven solutions designed to automate and optimize your business operations.
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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[50vh]">
                    <AnimatePresence mode="popLayout">
                        {filteredProducts.map((product, index) => (
                            <motion.div
                                key={product.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                className="bg-zinc-900/40 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:border-white/30 transition-all duration-300 group flex flex-col h-full"
                            >
                                {/* Image Section - Timeline Style */}
                                <div className="relative h-48 w-full overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500 flex-shrink-0">
                                    {product.image && (
                                        <>
                                            <Image
                                                src={product.image}
                                                alt={product.name}
                                                fill
                                                className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent opacity-60" />
                                        </>
                                    )}
                                </div>

                                <div className="p-6 flex flex-col flex-grow">
                                    <h3 className="text-2xl font-bold mb-2 leading-tight text-white">
                                        {product.name}
                                    </h3>
                                    <span className="text-sm font-semibold tracking-widest text-blue-500 uppercase mb-3 block">
                                        {product.tagline}
                                    </span>
                                    <p className="text-gray-400 mb-6 text-sm leading-relaxed flex-grow">
                                        {product.description}
                                    </p>

                                    {product.features && (
                                        <ul className="space-y-2 mb-6">
                                            {product.features.slice(0, 3).map((feature, i) => (
                                                <li key={i} className="flex items-start text-sm text-gray-300">
                                                    <CheckCircle className="w-5 h-5 text-green-400 mr-2 flex-shrink-0" />
                                                    <span className="leading-tight pt-0.5">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    )}

                                    <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
                                        <Link
                                            href="/contact"
                                            className="inline-flex items-center gap-2 text-sm text-white hover:text-blue-400 transition-colors"
                                        >
                                            Request Demo <ArrowRight className="w-4 h-4" />
                                        </Link>

                                        {product.category && (
                                            <span className="text-xs font-medium text-gray-500 uppercase tracking-wider bg-white/5 px-2 py-1 rounded">
                                                {product.category}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
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
