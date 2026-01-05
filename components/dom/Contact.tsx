"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Contact() {
    return (
        <section className="min-h-[70vh] w-full flex flex-col items-center justify-center py-24 px-8 relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="max-w-4xl text-center relative z-10"
            >
                <h2 className="text-4xl md:text-6xl font-bold mb-6">
                    <span className="text-white">Ready to </span>
                    <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Move?</span>
                </h2>
                <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
                    Get in touch with our logistics experts today and experience the future of freight.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                    <button className="px-10 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold rounded-full text-lg hover:shadow-xl hover:shadow-cyan-500/30 transition-all hover:scale-105">
                        Contact Us
                    </button>
                    <button className="px-10 py-4 border border-white/20 text-white font-bold rounded-full text-lg hover:bg-white/10 transition-all">
                        Call: 1-800-TRIPS24
                    </button>
                </div>
            </motion.div>
        </section>
    );
}
