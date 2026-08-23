import { aboutContent } from "./content"
import type { Metadata } from "next"
import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import { Footer } from "@/components/footer"
import Aurora from "@/components/Aurora"
import { siteContent } from "@/lib/site-content"
import { AboutTimeline } from "@/components/AboutTimeline"

export const metadata: Metadata = {
    title: "About Westside Union | Business Solutions & Product Development",
    description: "Learn about Westside Union's 16-year evolution into a business-solutions and concept-to-product partner, uniting strategy, design, physical AI, and manufacturing experience.",
    openGraph: {
        title: "About Westside Union | Business Solutions & Product Development",
        description: "16 years of multidisciplinary evolution across strategy, design, engineering, physical AI, and manufacturing.",
        type: "website",
    }
}

export default function AboutPage() {
    const { brand } = siteContent

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "description": aboutContent.summary,
        "mainEntity": {
            "@type": "Organization",
            "name": "Westside Union",
            "founder": [
                {
                    "@type": "Person",
                    "name": "Jacky Ho"
                },
                {
                    "@type": "Person",
                    "name": "Jerry Schuman"
                }
            ],
            "foundingDate": "2009",
            "areaServed": ["Toronto", "San Francisco", "Global"],
            "knowsAbout": ["Business Solutions", "Concept-to-Product Development", "Physical AI", "Design for Manufacturing", "Software Architecture"]
        }
    }

    return (
        <div className="min-h-screen bg-black overflow-hidden relative text-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

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
                        {aboutContent.summary}
                    </div>
                </section>

                {/* Timeline Section */}
                <section className="mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold mb-20 text-center">Our Journey</h2>
                    <AboutTimeline timeline={aboutContent.timeline} />
                </section>
            </main>

            <Footer />
        </div>
    )
}
