import { AboutClient } from "./AboutClient"
import { aboutContent } from "./content"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "About Westside Union | AI-Driven SaaS Venture Studio",
    description: "Learn about Westside Union's 16-year evolution from a design studio to a premier AI-driven SaaS venture studio specializing in bespoke digital architecture for enterprises.",
    openGraph: {
        title: "About Westside Union | AI-Driven SaaS Venture Studio",
        description: "Exploring 16 years of innovation in design, hardware, and AI-driven SaaS ecosystems.",
        type: "website",
    }
}

export default function AboutPage() {
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
            "knowsAbout": ["AI-driven SaaS", "UI/UX Design", "Venture Studio", "Spatial Computing", "Blockchain"]
        }
    }

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <AboutClient content={aboutContent} />
        </>
    )
}
