"use client";

import { motion } from "framer-motion";

const services = [
    {
        title: "LONG HAUL",
        desc: "Coast to coast reliability with real-time tracking.",
        icon: "🚛"
    },
    {
        title: "LAST MILE",
        desc: "Precision delivery to the doorstep, every time.",
        icon: "📦"
    },
    {
        title: "FRAGILE CARGO",
        desc: "Specialized handling for delicate & high-value items.",
        icon: "💎"
    },
    {
        title: "EXPRESS",
        desc: "When time is the critical factor. Same-day available.",
        icon: "⚡"
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15
        }
    }
} as const;

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
} as const;

export default function Services() {
    return (
        <section className="min-h-screen w-full flex flex-col items-center justify-center py-24 px-8">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
                    Our <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Services</span>
                </h2>
                <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                    Comprehensive logistics solutions tailored to your needs
                </p>
            </motion.div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl w-full"
            >
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        variants={cardVariants}
                        whileHover={{ scale: 1.02, y: -5 }}
                        className="group relative p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-sm overflow-hidden cursor-pointer transition-all duration-300 hover:border-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/10"
                    >
                        {/* Background Glow */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        {/* Icon */}
                        <div className="text-4xl mb-4">{service.icon}</div>

                        {/* Content */}
                        <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-cyan-400 transition-colors">
                            {service.title}
                        </h3>
                        <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                            {service.desc}
                        </p>

                        {/* Arrow */}
                        <div className="mt-6 flex items-center gap-2 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity">
                            <span className="text-sm font-medium">Learn more</span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
