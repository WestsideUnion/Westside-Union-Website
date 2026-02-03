import Image from "next/image"
import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import { Footer } from "@/components/footer"
import Aurora from "@/components/Aurora"
import { researchContent } from "../content"
import { Calendar, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

export function generateStaticParams() {
    return researchContent.map((post) => ({
        slug: post.slug,
    }))
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
    const post = researchContent.find((p) => p.slug === params.slug)

    if (!post) {
        notFound()
    }

    return (
        <div className="min-h-screen bg-black overflow-hidden relative text-white">
            <div className="fixed inset-0 w-full h-full">
                <Aurora colorStops={["#475569", "#64748b", "#475569"]} amplitude={0.5} blend={0.6} speed={0.2} />
            </div>

            <GlassmorphismNav />

            <main className="relative z-10 pt-32 pb-20 px-6 md:px-12 max-w-3xl mx-auto">
                <Link href="/research" className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back to Research
                </Link>

                <article>
                    <header className="mb-12">
                        <div className="flex items-center text-sm text-blue-400 font-medium bg-blue-900/20 border border-blue-500/20 px-3 py-1 rounded-full w-fit mb-6">
                            <Calendar className="w-4 h-4 mr-2" />
                            {post.date}
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
                            {post.title}
                        </h1>

                        {/* Cover Image */}
                        {post.image && (
                            <div className="w-full relative aspect-[21/9] rounded-2xl overflow-hidden mb-8 border border-white/10 shadow-2xl">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        )}

                        <p className="text-xl text-gray-300 leading-relaxed border-l-4 border-blue-500 pl-6 italic">
                            {post.excerpt}
                        </p>
                    </header>

                    <div className="prose prose-invert prose-lg max-w-none">
                        <p>
                            {/* Placeholder content since we only have titles/excerpts */}
                            In today's rapidly evolving technological landscape, businesses are constantly seeking ways to stay ahead of the curve.
                            {post.title.includes("AI") ? " Artificial Intelligence (AI) has emerged as a transformative force, reshaping industries and redefining what's possible." : " Strategic innovation is no longer optional; it is a necessity for survival and growth."}
                        </p>
                        <p>
                            At Westside Union, we believe that true transformation happens at the intersection of vision and execution.
                            Our approach combines deep industry insights with cutting-edge technology to deliver solutions that drive tangible results.
                        </p>
                        <h3>Key Takeaways</h3>
                        <ul>
                            <li>Understanding the core challenges is the first step towards resolution.</li>
                            <li>Leveraging the right tools can amplify human potential.</li>
                            <li>Sustainable growth requires a balance of innovation and operational excellence.</li>
                        </ul>
                        <p>
                            As we look to the future, it is clear that those who embrace change will lead the way.
                            We are committed to partnering with our clients to navigate this journey and unlock new opportunities.
                        </p>
                        <div className="bg-zinc-900/50 p-6 rounded-xl border border-white/10 mt-8 not-prose">
                            <p className="font-semibold text-white mb-2">Want to learn more about this topic?</p>
                            <p className="text-gray-400 text-sm mb-4">Contact our research team for the full whitepaper or to discuss how this applies to your business.</p>
                            <Link href="/contact" className="text-blue-400 hover:text-blue-300 font-medium">
                                Get in touch &rarr;
                            </Link>
                        </div>
                    </div>
                </article>
            </main>

            <Footer />
        </div>
    )
}
