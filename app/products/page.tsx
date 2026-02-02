"use client"

import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import { Footer } from "@/components/footer"
import Aurora from "@/components/Aurora"
import { siteContent } from "@/lib/site-content"
import { motion } from "framer-motion"
import { CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ProductsPage() {
    const { products } = siteContent

    return (
        <div className="min-h-screen bg-black overflow-hidden relative text-white">
            <div className="fixed inset-0 w-full h-full">
                <Aurora colorStops={["#000000", "#1e1b4b", "#000000"]} amplitude={1.2} blend={0.6} speed={0.5} />
            </div>

            <GlassmorphismNav />

            <main className="relative z-10 pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
                <section className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Products</h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Scalable, AI-driven solutions designed to automate and optimize your business operations.
                    </p>
                </section>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-zinc-900/40 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:border-white/30 transition-all duration-300 group flex flex-col h-full"
                        >
                            {/* Image Section - Timeline Style relative h-48 w-full overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500 */}
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
                                <span className="text-sm font-black tracking-widest text-blue-500 uppercase mb-2 block">
                                    {product.name}
                                </span>
                                <h3 className="text-2xl font-bold mb-3 leading-tight">{product.tagline}</h3>
                                <p className="text-gray-400 mb-6 text-sm leading-relaxed flex-grow">
                                    {product.description}
                                </p>

                                {product.features && (
                                    <ul className="space-y-2 mb-6">
                                        {product.features.slice(0, 3).map((feature, i) => (
                                            <li key={i} className="flex items-start text-xs text-gray-300">
                                                <CheckCircle className="w-3.5 h-3.5 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                                                <span className="leading-tight">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}

                                <div className="mt-auto pt-4 border-t border-white/5">
                                    <Link
                                        href="/contact"
                                        className="inline-flex items-center gap-2 text-sm text-white hover:text-blue-400 transition-colors"
                                    >
                                        Request Demo <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>
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
