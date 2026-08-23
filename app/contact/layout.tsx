import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Discuss Your Challenge | Westside Union",
    description: "Connect with Westside Union to discuss your business challenge, operational bottleneck, or concept-to-product development needs.",
}

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}
