import type { Metadata } from "next"
import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import { Footer } from "@/components/footer"
import Aurora from "@/components/Aurora"
import { researchContent } from "./content"
import { ResearchList } from "@/components/ResearchList"

export const metadata: Metadata = {
    title: "Research & Insights | Westside Union",
    description: "Practical perspectives on business transformation, product development, physical AI, manufacturing, and the technologies shaping how organizations operate.",
}

export default function ResearchPage() {
    // Sanitize research data for client component (remove non-serializable body)
    const research = researchContent.map(({ body, ...rest }) => rest)

    return (
        <div className="min-h-screen bg-black overflow-hidden relative text-white">
            <div className="fixed inset-0 w-full h-full">
                <Aurora colorStops={["#475569", "#64748b", "#475569"]} amplitude={1.0} blend={0.5} speed={0.5} />
            </div>

            <GlassmorphismNav />

            <main className="relative z-10 pt-32 pb-20 px-6 md:px-12 max-w-5xl mx-auto">
                <section className="text-center mb-20">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">Research & Insights</h1>
                    <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
                        Practical perspectives on business transformation, product development, physical AI, manufacturing, and the technologies shaping how organizations operate.
                    </p>
                </section>

                <ResearchList research={research} />
            </main>

            <Footer />
        </div>
    )
}
