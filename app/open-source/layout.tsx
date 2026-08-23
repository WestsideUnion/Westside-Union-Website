import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Open Source | Westside Union",
    description: "Open-source tools, frameworks, and developer utilities built and shared by Westside Union.",
}

export default function OpenSourceLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}
