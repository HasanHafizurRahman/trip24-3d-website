"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Letter animation variants
const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.1,
            duration: 0.5,
            ease: [0.6, -0.05, 0.01, 0.99]
        }
    })
};

// Floating animation for decorative elements
const floatAnimation = {
    y: [0, -15, 0],
    transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
    }
};

export default function Hero() {
    const brandName = "TRIP24".split("");

    return (
        <section
            className="relative h-screen w-full flex flex-col items-center justify-center p-8 overflow-hidden z-20"
        >
            {/* Animated Background Lines */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{ x: "-100%", opacity: 0 }}
                        animate={{ x: "200%", opacity: [0, 0.3, 0] }}
                        transition={{
                            duration: 3,
                            delay: i * 0.5,
                            repeat: Infinity,
                            repeatDelay: 2
                        }}
                        className="absolute h-[1px] w-1/2"
                        style={{
                            top: `${20 + i * 15}%`,
                            background: "linear-gradient(90deg, transparent, rgba(6, 182, 212, 0.5), transparent)"
                        }}
                    />
                ))}
            </div>

            {/* Logo */}
            <motion.div
                initial={{ opacity: 0, scale: 0, rotate: -180 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{
                    duration: 1.2,
                    delay: 0.2,
                    type: "spring",
                    stiffness: 100
                }}
                className="mb-6 relative"
            >
                <motion.div animate={floatAnimation}>
                    <Image
                        src="/assets/Trip24-Final-Logo.png"
                        alt="Trips24 Logo"
                        width={140}
                        height={140}
                        className="drop-shadow-[0_0_30px_rgba(6,182,212,0.5)]"
                    />
                </motion.div>
                {/* Glow ring */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 rounded-full border-2 border-cyan-400/30"
                />
            </motion.div>

            {/* Animated Brand Name */}
            <div className="text-center z-10 mb-4">
                <motion.h1
                    className="text-7xl md:text-8xl lg:text-[10rem] font-black tracking-tighter flex"
                    initial="hidden"
                    animate="visible"
                >
                    {brandName.map((letter, i) => (
                        <motion.span
                            key={i}
                            custom={i}
                            variants={letterVariants}
                            className="inline-block bg-gradient-to-b from-white via-blue-100 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(6,182,212,0.3)]"
                            style={{
                                textShadow: "0 0 40px rgba(6, 182, 212, 0.2)"
                            }}
                            whileHover={{
                                scale: 1.1,
                                color: "#06b6d4",
                                transition: { duration: 0.2 }
                            }}
                        >
                            {letter}
                        </motion.span>
                    ))}
                </motion.h1>
            </div>

            {/* Tagline with typewriter effect */}
            <motion.div
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "auto" }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="overflow-hidden"
            >
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="text-xl md:text-2xl text-gray-300 font-light tracking-[0.3em] uppercase text-center"
                >
                    Powering Your Logistics
                </motion.p>
            </motion.div>

            {/* Business Keywords */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8, duration: 0.6 }}
                className="flex flex-wrap justify-center gap-4 mt-6"
            >
                {["Freight", "Trucking", "Logistics", "Delivery"].map((word, i) => (
                    <motion.span
                        key={word}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 2 + i * 0.15 }}
                        whileHover={{ scale: 1.1, backgroundColor: "rgba(6, 182, 212, 0.2)" }}
                        className="px-4 py-2 border border-white/10 rounded-full text-sm text-gray-400 backdrop-blur-sm cursor-default transition-colors"
                    >
                        {word}
                    </motion.span>
                ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 2.5 }}
                className="mt-12 flex flex-col sm:flex-row gap-4"
            >
                <motion.button
                    whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(6, 182, 212, 0.5)" }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative px-10 py-4 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 bg-[length:200%_100%] text-white font-bold rounded-full overflow-hidden transition-all duration-500 hover:bg-right"
                >
                    <span className="relative z-10 flex items-center gap-2">
                        Get Started
                        <motion.span
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1, repeat: Infinity }}
                        >
                            →
                        </motion.span>
                    </span>
                </motion.button>
                <motion.button
                    whileHover={{ scale: 1.05, borderColor: "rgba(6, 182, 212, 0.5)" }}
                    whileTap={{ scale: 0.95 }}
                    className="px-10 py-4 border border-white/20 text-white font-bold rounded-full backdrop-blur-sm hover:bg-white/5 transition-all duration-300"
                >
                    Track Shipment
                </motion.button>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <motion.span
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-gray-500 text-xs uppercase tracking-[0.2em]"
                >
                    Scroll to explore
                </motion.span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2"
                >
                    <motion.div
                        animate={{ opacity: [1, 0.3, 1], y: [0, 8, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-1.5 h-2.5 bg-cyan-400 rounded-full"
                    />
                </motion.div>
            </motion.div>

            {/* Corner Decorations */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.3 }}
                transition={{ delay: 2 }}
                className="absolute top-20 left-8 w-24 h-24 border-l-2 border-t-2 border-cyan-500/30"
            />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.3 }}
                transition={{ delay: 2.2 }}
                className="absolute bottom-20 right-8 w-24 h-24 border-r-2 border-b-2 border-cyan-500/30"
            />
        </section>
    );
}
