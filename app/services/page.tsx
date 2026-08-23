import type { Metadata } from "next"
import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import { Footer } from "@/components/footer"
import Aurora from "@/components/Aurora"
import { servicesContent } from "./content"
import { ServiceCard } from "@/components/ServiceCard"

export const metadata: Metadata = {
    title: "Services & Solutions | Westside Union",
    description: "Tailored business solutions, software engineering, physical AI development, and manufacturing-backed prototyping services.",
}

export default function ServicesPage() {
    const services = servicesContent

    return (
        <div className="min-h-screen bg-black overflow-hidden relative text-white">
            <div className="fixed inset-0 w-full h-full">
                <Aurora colorStops={["#1e293b", "#0f172a", "#000000"]} amplitude={1.0} blend={0.5} speed={0.4} />
            </div>

            <GlassmorphismNav />

            <main className="relative z-10 pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
                <section className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Services</h1>
                    <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
                        We help organizations solve operational problems, design tailored business solutions, and transform promising concepts into market-ready products.
                    </p>
                </section>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={service.category}
                            category={service.category}
                            description={service.description}
                            items={service.items}
                            index={index}
                        />
                    ))}
                </div>

                <section className="mt-20 text-center">
                    <div className="bg-gradient-to-br from-blue-900/30 to-slate-900/60 border border-white/10 rounded-3xl p-8 sm:p-12 backdrop-blur-xl max-w-4xl mx-auto">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-white">
                            Your challenge may require more than an off-the-shelf product.
                        </h2>
                        <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
                            Every business operates differently. When an existing product is not enough, Westside Union can design a solution around your workflows, customers, systems, and long-term goals.
                        </p>
                        <p className="text-gray-400 mb-8 text-sm max-w-xl mx-auto">
                            Custom engagements may combine business strategy, digital platforms, advanced AI, physical AI, system integration, product development, and manufacturing expertise.
                        </p>
                        <a
                            href="/contact"
                            className="inline-flex items-center gap-2 bg-white text-black font-semibold px-8 py-4 rounded-full hover:bg-gray-100 transition-all hover:scale-105"
                        >
                            Discuss Your Challenge
                        </a>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}
