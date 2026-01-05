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
            ease: [0.6, -0.05, 0.01, 0.99] as const
        }
    })
};

// Floating animation for decorative elements
const floatAnimation = {
    y: [0, -15, 0],
    transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut" as const
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



            {/* App Download Buttons */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 2.8 }}
                className="mt-8 flex flex-col items-center gap-3"
            >
                <p className="text-gray-400 text-sm uppercase tracking-wider">Download the App</p>
                <div className="flex flex-col sm:flex-row gap-4">
                    {/* App Store Button */}
                    <motion.a
                        href="#"
                        whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255, 255, 255, 0.2)" }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-3 px-6 py-3 bg-black border border-white/20 rounded-xl hover:border-white/40 transition-all"
                    >
                        {/* Apple Logo SVG */}
                        <svg className="w-8 h-8" viewBox="0 0 384 512" fill="url(#appleGradient)">
                            <defs>
                                <linearGradient id="appleGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                    <stop offset="0%" stopColor="#f8f8f8" />
                                    <stop offset="100%" stopColor="#a8a8a8" />
                                </linearGradient>
                            </defs>
                            <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                        </svg>
                        <div className="flex flex-col items-start">
                            <span className="text-gray-400 text-xs">Download on the</span>
                            <span className="text-white font-semibold text-lg leading-tight">App Store</span>
                        </div>
                    </motion.a>

                    {/* Google Play Button */}
                    <motion.a
                        href="#"
                        whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255, 255, 255, 0.2)" }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-3 px-6 py-3 bg-black border border-white/20 rounded-xl hover:border-white/40 transition-all"
                    >
                        {/* Google Play Logo SVG */}
                        <svg className="w-8 h-8" viewBox="0 0 512 512">
                            <path fill="#4285F4" d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0z" />
                            <path fill="#34A853" d="M461.7 256.8l-80.9 80.9L104.6 499l256.7-180.4 100.4-61.8z" />
                            <path fill="#FBBC04" d="M104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
                            <path fill="#EA4335" d="M25.3 35.3v441.3L304.6 256 47 0c-12.7 6.8-21.7 19.2-21.7 35.3z" />
                        </svg>
                        <div className="flex flex-col items-start">
                            <span className="text-gray-400 text-xs">GET IT ON</span>
                            <span className="text-white font-semibold text-lg leading-tight">Google Play</span>
                        </div>
                    </motion.a>
                </div>
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
