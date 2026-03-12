"use client"

import { motion } from "framer-motion"
import { Palette, Cpu, Megaphone, TrendingUp } from "lucide-react"

interface ServiceCardProps {
    category: string
    description: string
    items: string[]
    index: number
}

export function ServiceCard({ category, description, items, index }: ServiceCardProps) {
    const getIcon = (category: string) => {
        switch (category) {
            case "Design": return <Palette className="w-8 h-8 text-pink-400" />
            case "Development": return <Cpu className="w-8 h-8 text-blue-400" />
            case "Marketing": return <Megaphone className="w-8 h-8 text-purple-400" />
            case "Consulting": return <TrendingUp className="w-8 h-8 text-green-400" />
            default: return <Cpu className="w-8 h-8 text-white" />
        }
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-300 group"
        >
            <div className="mb-6 bg-white/10 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                {getIcon(category)}
            </div>

            <h2 className="text-2xl font-bold mb-4">{category}</h2>
            <p className="text-gray-400 mb-6 min-h-[3rem]">{description}</p>

            <ul className="space-y-3">
                {items.map((item, i) => (
                    <li key={i} className="flex items-start text-sm text-gray-300">
                        <span className="mr-2 text-primary">•</span>
                        {item}
                    </li>
                ))}
            </ul>
        </motion.div>
    )
}
