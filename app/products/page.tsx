"use client"

import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import { Footer } from "@/components/footer"
import Aurora from "@/components/Aurora"
import { siteContent } from "@/lib/site-content"
import { motion } from "framer-motion"
import { IdCard, Wallet, Tv, CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function ProductsPage() {
    const { products } = siteContent

    const getProductIcon = (id: string) => {
        switch (id) {
            case "rapid-id": return <IdCard className="w-12 h-12 text-blue-400" />
            case "ws-wallet": return <Wallet className="w-12 h-12 text-green-400" />
            case "digital-billboard": return <Tv className="w-12 h-12 text-purple-400" />
            default: return <IdCard className="w-12 h-12 text-white" />
        }
    }

    return (
        <div className="min-h-screen bg-black overflow-hidden relative text-white">
            <div className="fixed inset-0 w-full h-full">
                <Aurora colorStops={["#000000", "#1e1b4b", "#000000"]} amplitude={1.2} blend={0.6} speed={0.5} />
            </div>

            <GlassmorphismNav />

            <main className="relative z-10 pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
                <section className="text-center mb-24">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Products</h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Scalable, AI-driven solutions designed to automate and optimize your business operations.
                    </p>
                </section>

                <div className="space-y-32">
                    {products.map((product, index) => (
                        <motion.section
                            key={product.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6 }}
                            className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}
                        >
                            <div className="flex-1">
                                <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl aspect-[4/3] flex items-center justify-center relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-colors" />
                                    {getProductIcon(product.id)}
                                    <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none" />
                                </div>
                            </div>

                            <div className="flex-1 space-y-6">
                                <div className="inline-block px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-sm font-medium border border-blue-500/30">
                                    {product.name}
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold">{product.tagline}</h2>
                                <p className="text-gray-400 text-lg leading-relaxed">{product.description}</p>

                                {product.features && (
                                    <ul className="space-y-3">
                                        {product.features.map((feature, i) => (
                                            <li key={i} className="flex items-center gap-3 text-gray-300">
                                                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                )}

                                {product.examples && (
                                    <div className="p-4 bg-white/5 rounded-xl border-l-4 border-green-400">
                                        <p className="text-sm text-gray-300 italic">Example Impact: {product.examples}</p>
                                    </div>
                                )}

                                <div className="pt-4">
                                    <Link href="/contact" className="inline-flex items-center gap-2 text-white bg-white/10 hover:bg-white/20 px-6 py-3 rounded-full transition-colors border border-white/10">
                                        Request Demo <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>
                        </motion.section>
                    ))}
                </div>
            </main>

            <Footer />
        </div>
    )
}
