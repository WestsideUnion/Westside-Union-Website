import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Products | Westside Union",
    description: "Practical, ready-to-deploy products and managed business solutions built around real operational challenges.",
}

export default function ProductsLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}
