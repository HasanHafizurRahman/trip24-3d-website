"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Brand colors
const BRAND_PRIMARY = "#1B44E4";
const BRAND_SECONDARY = "#F9BB32";

// Letter animation variants
const letterVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -90 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        rotateX: 0,
        transition: {
            delay: i * 0.08,
            duration: 0.6,
            ease: [0.6, -0.05, 0.01, 0.99] as const
        }
    })
};

// Floating particles data
const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 10 + 10,
    delay: Math.random() * 5
}));

// Stats data
const stats = [
    { value: 500, suffix: "+", label: "Active Trucks" },
    { value: 99.9, suffix: "%", label: "On-Time Delivery" },
    { value: 50, suffix: "+", label: "Cities Covered" },
    { value: 24, suffix: "/7", label: "Support" }
];

// Animated counter component
function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const duration = 2000;
        const steps = 60;
        const increment = value / steps;
        let current = 0;

        const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
                setCount(value);
                clearInterval(timer);
            } else {
                setCount(Math.floor(current * 10) / 10);
            }
        }, duration / steps);

        return () => clearInterval(timer);
    }, [value]);

    return (
        <span>
            {value === 99.9 ? count.toFixed(1) : Math.floor(count)}{suffix}
        </span>
    );
}

export default function Hero() {
    const brandName = "TRIP24".split("");

    return (
        <section className="relative h-screen w-full flex flex-col items-center justify-center p-4 md:p-8 overflow-hidden z-20">
            {/* Animated Gradient Background Overlay */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 via-transparent to-black/50" />
                <div
                    className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-[100px] animate-pulse"
                    style={{ backgroundColor: `${BRAND_PRIMARY}15` }}
                />
                <div
                    className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-[100px] animate-pulse"
                    style={{ backgroundColor: `${BRAND_SECONDARY}10`, animationDelay: "1s" }}
                />
            </div>

            {/* Floating Particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {particles.map((particle) => (
                    <motion.div
                        key={particle.id}
                        className="absolute rounded-full"
                        style={{
                            width: particle.size,
                            height: particle.size,
                            left: `${particle.x}%`,
                            top: `${particle.y}%`,
                            backgroundColor: particle.id % 3 === 0 ? `${BRAND_SECONDARY}40` : `${BRAND_PRIMARY}30`
                        }}
                        animate={{
                            y: [0, -30, 0],
                            opacity: [0.2, 0.6, 0.2],
                            scale: [1, 1.2, 1]
                        }}
                        transition={{
                            duration: particle.duration,
                            delay: particle.delay,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                ))}
            </div>

            {/* Animated Background Lines */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(8)].map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{ x: "-100%", opacity: 0 }}
                        animate={{ x: "200%", opacity: [0, 0.5, 0] }}
                        transition={{
                            duration: 4,
                            delay: i * 0.3,
                            repeat: Infinity,
                            repeatDelay: 1
                        }}
                        className="absolute h-[1px] w-1/3"
                        style={{
                            top: `${10 + i * 12}%`,
                            background: `linear-gradient(90deg, transparent, ${i % 2 === 0 ? `${BRAND_PRIMARY}60` : `${BRAND_SECONDARY}40`}, transparent)`
                        }}
                    />
                ))}
            </div>

            {/* Main Hero Card - Glassmorphism Container */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="relative z-10 flex flex-col items-center"
            >
                {/* Brand Name with 3D Effect */}
                <div className="text-center mb-4">
                    <motion.h1
                        className="text-6xl sm:text-7xl md:text-8xl lg:text-[9rem] font-black tracking-tight flex justify-center"
                        initial="hidden"
                        animate="visible"
                        style={{ perspective: "1000px" }}
                    >
                        {brandName.map((letter, i) => (
                            <motion.span
                                key={i}
                                custom={i}
                                variants={letterVariants}
                                className="inline-block bg-clip-text text-transparent"
                                style={{
                                    backgroundImage: `linear-gradient(180deg, #ffffff, ${BRAND_PRIMARY})`,
                                    textShadow: `0 0 60px ${BRAND_PRIMARY}40, 0 0 120px ${BRAND_PRIMARY}20`,
                                    filter: `drop-shadow(0 4px 20px ${BRAND_PRIMARY}30)`
                                }}
                                whileHover={{
                                    scale: 1.15,
                                    y: -10,
                                    transition: { duration: 0.2 }
                                }}
                            >
                                {letter}
                            </motion.span>
                        ))}
                    </motion.h1>
                </div>

                {/* Tagline */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.8 }}
                    className="mb-8"
                >
                    <p className="text-lg sm:text-xl md:text-2xl text-gray-300 font-light tracking-[0.2em] sm:tracking-[0.3em] uppercase text-center">
                        <span className="bg-gradient-to-r from-gray-400 via-white to-gray-400 bg-clip-text text-transparent">
                            Powering Your Logistics
                        </span>
                    </p>
                </motion.div>

                {/* Animated Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.3, duration: 0.8 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-10"
                >
                    {stats.map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1.5 + i * 0.1 }}
                            whileHover={{ scale: 1.05, y: -5 }}
                            className="text-center px-4 py-3 md:px-6 md:py-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl transition-all"
                            style={{
                                ["--hover-border" as string]: BRAND_SECONDARY
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.borderColor = `${BRAND_SECONDARY}50`}
                            onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'}
                        >
                            <div
                                className="text-2xl md:text-3xl font-black bg-clip-text text-transparent"
                                style={{ backgroundImage: `linear-gradient(90deg, ${BRAND_PRIMARY}, ${BRAND_SECONDARY})` }}
                            >
                                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                            </div>
                            <div className="text-xs md:text-sm text-gray-400 uppercase tracking-wider mt-1">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* App Download Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 2 }}
                    className="flex flex-col items-center gap-3"
                >
                    <p className="text-gray-500 text-xs uppercase tracking-widest">Download the App</p>
                    <div className="flex flex-col sm:flex-row gap-3">
                        {/* App Store Button */}
                        <motion.a
                            href="#"
                            whileHover={{ scale: 1.05, boxShadow: `0 0 30px ${BRAND_PRIMARY}30` }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-3 px-5 py-2.5 bg-black/80 backdrop-blur-md border border-white/20 rounded-xl transition-all"
                            style={{ ["--hover-border" as string]: BRAND_PRIMARY }}
                            onMouseEnter={(e) => e.currentTarget.style.borderColor = `${BRAND_PRIMARY}80`}
                            onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'}
                        >
                            <svg className="w-7 h-7" viewBox="0 0 384 512" fill="url(#appleGradient)">
                                <defs>
                                    <linearGradient id="appleGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                        <stop offset="0%" stopColor="#ffffff" />
                                        <stop offset="100%" stopColor="#a8a8a8" />
                                    </linearGradient>
                                </defs>
                                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                            </svg>
                            <div className="flex flex-col items-start">
                                <span className="text-gray-400 text-[10px]">Download on the</span>
                                <span className="text-white font-semibold text-sm leading-tight">App Store</span>
                            </div>
                        </motion.a>

                        {/* Google Play Button */}
                        <motion.a
                            href="#"
                            whileHover={{ scale: 1.05, boxShadow: `0 0 30px ${BRAND_PRIMARY}30` }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-3 px-5 py-2.5 bg-black/80 backdrop-blur-md border border-white/20 rounded-xl transition-all"
                            onMouseEnter={(e) => e.currentTarget.style.borderColor = `${BRAND_PRIMARY}80`}
                            onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'}
                        >
                            <svg className="w-7 h-7" viewBox="0 0 512 512">
                                <path fill="#4285F4" d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0z" />
                                <path fill="#34A853" d="M461.7 256.8l-80.9 80.9L104.6 499l256.7-180.4 100.4-61.8z" />
                                <path fill="#FBBC04" d="M104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
                                <path fill="#EA4335" d="M25.3 35.3v441.3L304.6 256 47 0c-12.7 6.8-21.7 19.2-21.7 35.3z" />
                            </svg>
                            <div className="flex flex-col items-start">
                                <span className="text-gray-400 text-[10px]">GET IT ON</span>
                                <span className="text-white font-semibold text-sm leading-tight">Google Play</span>
                            </div>
                        </motion.a>
                    </div>
                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5 }}
                className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <motion.span
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-gray-500 text-[10px] uppercase tracking-[0.25em]"
                >
                    Scroll to explore
                </motion.span>
                <motion.div
                    animate={{ y: [0, 6, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="w-5 h-8 border border-white/20 rounded-full flex justify-center pt-1.5"
                >
                    <motion.div
                        animate={{ opacity: [1, 0.2, 1], y: [0, 6, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-1 h-2 rounded-full"
                        style={{ backgroundColor: BRAND_SECONDARY }}
                    />
                </motion.div>
            </motion.div>

            {/* Corner Decorations */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.4, scale: 1 }}
                transition={{ delay: 1.8 }}
                className="absolute top-20 left-6 w-20 h-20 border-l-2 border-t-2"
                style={{ borderColor: `${BRAND_PRIMARY}60` }}
            />
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.4, scale: 1 }}
                transition={{ delay: 2 }}
                className="absolute bottom-20 right-6 w-20 h-20 border-r-2 border-b-2"
                style={{ borderColor: `${BRAND_SECONDARY}60` }}
            />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.2 }}
                transition={{ delay: 2.2 }}
                className="absolute top-20 right-6 w-16 h-16 border-r border-t"
                style={{ borderColor: `${BRAND_PRIMARY}50` }}
            />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.2 }}
                transition={{ delay: 2.4 }}
                className="absolute bottom-20 left-6 w-16 h-16 border-l border-b"
                style={{ borderColor: `${BRAND_SECONDARY}50` }}
            />
        </section>
    );
}

