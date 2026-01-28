"use client"

import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import { Footer } from "@/components/footer"
import Aurora from "@/components/Aurora"
import { siteContent } from "@/lib/site-content"
import { motion } from "framer-motion"
import { Mail, MapPin, Send, Loader2 } from "lucide-react"
import { useState, type FormEvent } from "react"

export default function ContactPage() {
    const { contact, brand } = siteContent
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSent, setIsSent] = useState(false)

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Simulate network request
        await new Promise(resolve => setTimeout(resolve, 1500))

        setIsSubmitting(false)
        setIsSent(true)

        // In a real app, we might use the mailto fallback here if no API
        const formData = new FormData(e.currentTarget)
        const subject = encodeURIComponent(contact.submitParams.subject)
        const body = encodeURIComponent(`
Name: ${formData.get("name")}
Email: ${formData.get("email")}
Company: ${formData.get("company")}
Message: ${formData.get("message")}
    `)

        window.location.href = `mailto:${brand.contactEmail}?subject=${subject}&body=${body}`
    }

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

                    {/* Form Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl">
                            {isSent ? (
                                <div className="text-center py-12">
                                    <div className="w-16 h-16 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <Send className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4">Message Ready!</h3>
                                    <p className="text-gray-400">
                                        We've prepared an email in your default mail client. Please hit send to complete your inquiry.
                                    </p>
                                    <button
                                        onClick={() => setIsSent(false)}
                                        className="mt-8 text-sm text-gray-500 hover:text-white underline"
                                    >
                                        Send another message
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">{contact.fields.name}</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                                            placeholder="Your name"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">{contact.fields.email}</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                                            placeholder="john@company.com"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="company" className="block text-sm font-medium text-gray-400 mb-2">{contact.fields.company}</label>
                                        <input
                                            type="text"
                                            id="company"
                                            name="company"
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                                            placeholder="Company Ltd."
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">{contact.fields.message}</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            required
                                            rows={4}
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                                            placeholder="Tell us about your project..."
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-white text-black font-bold py-4 rounded-xl hover:bg-gray-100 transition-all transform active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <Loader2 className="w-5 h-5 animate-spin" /> Sending...
                                            </>
                                        ) : (
                                            "Send Message"
                                        )}
                                    </button>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </div>
            </main>

            <Footer />
        </div>
    )
}
