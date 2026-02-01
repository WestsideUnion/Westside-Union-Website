"use client"

import { motion } from "framer-motion"
import Image from "next/image"

// Client logos configuration with their display names and file paths
const clientLogos = [
    { name: "Kodak", src: "/images/clients/f582e758.svg", width: 120, height: 48 },
    { name: "HP", src: "/images/clients/hp.webp", width: 60, height: 60 },
    { name: "NKG", src: "/images/clients/nkg.webp", width: 100, height: 50 },
    { name: "La Gloria", src: "/images/clients/la-gloria.webp", width: 120, height: 60 },
    { name: "TIES", src: "/images/clients/ties.webp", width: 100, height: 50 },
    { name: "BAN", src: "/images/clients/ban.webp", width: 80, height: 50 },
    { name: "CoPlus", src: "/images/clients/coplusinc.webp", width: 100, height: 50 },
    { name: "Logo1", src: "/images/clients/logo1.webp", width: 100, height: 50 },
    { name: "Logo2", src: "/images/clients/logo-2.webp", width: 100, height: 50 },
]

export function LogoTicker() {
    // Duplicate logos for seamless infinite loop
    const duplicatedLogos = [...clientLogos, ...clientLogos]

    return (
        <div className="relative w-full overflow-hidden py-4">

            <motion.div
                className="flex items-center gap-12 md:gap-16"
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                    duration: 30,
                    ease: "linear",
                    repeat: Infinity,
                }}
                style={{ width: "fit-content" }}
            >
                {duplicatedLogos.map((logo, index) => (
                    <div
                        key={`${logo.name}-${index}`}
                        className="flex-shrink-0 flex items-center justify-center h-12 md:h-16 min-w-[80px] md:min-w-[120px] grayscale brightness-0 invert opacity-30 hover:opacity-100 hover:grayscale-0 hover:brightness-100 hover:invert-0 transition-all duration-500"
                    >
                        <Image
                            src={logo.src}
                            alt={logo.name}
                            width={logo.width}
                            height={logo.height}
                            className="object-contain h-full w-auto max-h-12 md:max-h-14"
                            style={{ filter: "inherit" }}
                        />
                    </div>
                ))}
            </motion.div>
        </div>
    )
}
