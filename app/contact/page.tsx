"use client"

import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import { Footer } from "@/components/footer"
import Aurora from "@/components/Aurora"
import { siteContent } from "@/lib/site-content"
import { contactContent } from "./content"
import { motion } from "framer-motion"
import { Mail, MapPin } from "lucide-react"
import Script from "next/script"

export default function ContactPage() {
    const { brand } = siteContent
    const contact = contactContent

    return (
        <div className="min-h-screen bg-black overflow-hidden relative text-white">
            <div className="fixed inset-0 w-full h-full">
                <Aurora colorStops={["#000000", "#374151", "#000000"]} amplitude={0.8} blend={0.6} speed={0.4} />
            </div>

            <GlassmorphismNav />

            <main className="relative z-10 pt-32 pb-20 px-6 md:px-12 max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Info Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">{contact.title}</h1>
                        <p className="text-xl text-gray-400 mb-12">
                            {contact.subtitle}
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                                    <Mail className="w-6 h-6 text-blue-400" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold mb-1">Email Us</h3>
                                    <p className="text-gray-400">{brand.contactEmail}</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                                    <MapPin className="w-6 h-6 text-blue-400" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold mb-1">Locations</h3>
                                    <p className="text-gray-400">{brand.locations.join(" | ")}</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 p-6 bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-2xl border border-white/10">
                            <h4 className="font-semibold mb-2">Quick Online Consultancy</h4>
                            <p className="text-sm text-gray-400">
                                Need immediate assistance? Our AI-driven support team is available 24/7 to help verify your requirements before booking a call.
                            </p>
                        </div>
                    </motion.div>

                    {/* Form Section - Typeform Embed */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl min-h-[500px] flex flex-col justify-center">
                            <div data-tf-live="01JMBFD3JRSJ9E6P54MD17BZ2V"></div>
                            <Script src="//embed.typeform.com/next/embed.js" />
                        </div>
                    </motion.div>
                </div>
            </main>

            <Footer />
        </div>
    )
}
