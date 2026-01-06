"use client";

import { motion } from "framer-motion";

// Brand colors
const BRAND_PRIMARY = "#1B44E4";
const BRAND_SECONDARY = "#F9BB32";

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
                    <span
                        className="bg-clip-text text-transparent"
                        style={{ backgroundImage: `linear-gradient(90deg, ${BRAND_PRIMARY}, ${BRAND_SECONDARY})` }}
                    >Move?</span>
                </h2>
                <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
                    Get in touch with our logistics experts today and experience the future of freight.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                    <button
                        className="px-10 py-4 text-white font-bold rounded-full text-lg transition-all hover:scale-105"
                        style={{
                            background: `linear-gradient(135deg, ${BRAND_PRIMARY}, ${BRAND_PRIMARY}CC)`,
                            boxShadow: `0 10px 40px ${BRAND_PRIMARY}40`
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.boxShadow = `0 15px 50px ${BRAND_SECONDARY}50`;
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.boxShadow = `0 10px 40px ${BRAND_PRIMARY}40`;
                        }}
                    >
                        Contact Us
                    </button>
                    <button
                        className="px-10 py-4 border text-white font-bold rounded-full text-lg transition-all"
                        style={{ borderColor: 'rgba(255,255,255,0.2)' }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)';
                            e.currentTarget.style.borderColor = `${BRAND_SECONDARY}50`;
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = 'transparent';
                            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
                        }}
                    >
                        Call: 1-800-TRIP24
                    </button>
                </div>
            </motion.div>
        </section>
    );
}

