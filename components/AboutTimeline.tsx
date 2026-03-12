"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface TimelineItem {
    year: string;
    title: string;
    description: string;
    image?: string;
}

interface AboutTimelineProps {
    timeline: TimelineItem[];
}

export function AboutTimeline({ timeline }: AboutTimelineProps) {
    return (
        <div className="relative max-w-5xl mx-auto">
            {/* Centered Vertical Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/20 -translate-x-1/2" />

            <div className="space-y-24">
                {timeline.map((item, index) => (
                    <div key={index} className="relative">
                        {/* Dot */}
                        <div className="absolute top-0 left-4 md:left-1/2 -translate-x-1/2 z-20">
                            <div className="w-4 h-4 rounded-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)] border-4 border-black" />
                        </div>

                        {/* Content Card */}
                        <div className={`pl-12 md:pl-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 md:text-right md:ml-0' : 'md:pl-16 md:ml-auto'}`}>
                            <motion.div
                                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="group bg-zinc-900/40 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:border-white/30 transition-all duration-300"
                            >
                                {/* Image Section */}
                                {item.image && (
                                    <div className="relative h-48 w-full overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent" />
                                    </div>
                                )}

                                <div className="p-6">
                                    <span className="text-sm font-black tracking-widest text-blue-500 uppercase mb-2 block">{item.year}</span>
                                    <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                                    <p className="text-gray-400 leading-relaxed">{item.description}</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
