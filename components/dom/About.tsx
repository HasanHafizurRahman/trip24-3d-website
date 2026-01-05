"use client";

import { motion } from "framer-motion";

export default function About() {
    const stats = [
        { value: "500+", label: "Trucks" },
        { value: "24/7", label: "Support" },
        { value: "99.9%", label: "On-Time" },
        { value: "50+", label: "Cities" },
    ];

    return (
        <section className="min-h-screen w-full flex flex-col items-center justify-center py-24 px-8 relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/20 to-transparent" />

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    {/* Left Column - Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-6xl font-bold mb-8">
                            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                                Redefining
                            </span>
                            <br />
                            <span className="text-white">Logistics</span>
                        </h2>
                        <p className="text-xl text-gray-300 leading-relaxed mb-8">
                            At Trip24, we don't just move cargo. We engineer movement.
                            With a fleet of state-of-the-art trucks and a network that spans the nation,
                            we deliver not just goods, but certainty.
                        </p>
                        <p className="text-lg text-gray-400 leading-relaxed">
                            Experience the future of freight with real-time tracking,
                            AI-optimized routing, and 24/7 dedicated support.
                        </p>
                    </motion.div>

                    {/* Right Column - Stats */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-2 gap-6"
                    >
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                                viewport={{ once: true }}
                                className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center hover:border-cyan-500/30 transition-colors"
                            >
                                <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-gray-400 uppercase tracking-wider text-sm">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
