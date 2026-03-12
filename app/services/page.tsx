import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import { Footer } from "@/components/footer"
import Aurora from "@/components/Aurora"
import { servicesContent } from "./content"
import { ServiceCard } from "@/components/ServiceCard"

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
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Comprehensive solutions tailored to your business needs, from concept to execution.
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
