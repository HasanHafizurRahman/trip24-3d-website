"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Brand colors
const BRAND_PRIMARY = "#1B44E4";
const BRAND_SECONDARY = "#F9BB32";

const faqs = [
    {
        question: "How do I track my shipment?",
        answer: "You can track your shipment in real-time through our mobile app or by logging into your account on our website. Simply enter your tracking number to see the current location, estimated delivery time, and complete shipment history."
    },
    {
        question: "What areas do you cover?",
        answer: "Trip24 operates nationwide with a network spanning 50+ cities. We offer both urban and rural delivery services, including remote areas with specialized logistics solutions."
    },
    {
        question: "What types of cargo can you transport?",
        answer: "We handle everything from small packages to heavy machinery. Our fleet includes pickups for light cargo, covered vans for weather-sensitive items, open trucks for bulk materials, and heavy trailers for industrial equipment."
    },
    {
        question: "How are your prices calculated?",
        answer: "Pricing is based on distance, cargo weight, vehicle type, and urgency. We offer transparent, competitive rates with no hidden fees. Use our online calculator or contact us for a custom quote."
    },
    {
        question: "Do you offer insurance for shipments?",
        answer: "Yes, all shipments are covered by our standard insurance policy. For high-value or fragile items, we offer premium insurance options with higher coverage limits."
    },
    {
        question: "What is your delivery time guarantee?",
        answer: "We offer Express (same-day), Standard (1-3 days), and Economy (3-7 days) delivery options. Our on-time delivery rate is 99.9%, and we provide refunds for guaranteed shipments that experience delays."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="min-h-screen w-full flex flex-col items-center justify-center py-24 px-4 sm:px-8 relative overflow-hidden">
            {/* Background */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: `linear-gradient(180deg, transparent, ${BRAND_PRIMARY}08, transparent)` }}
            />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16 relative z-10"
            >
                <h2 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tight">
                    Frequently Asked{" "}
                    <span
                        className="bg-clip-text text-transparent"
                        style={{ backgroundImage: `linear-gradient(90deg, ${BRAND_PRIMARY}, ${BRAND_SECONDARY})` }}
                    >
                        Questions
                    </span>
                </h2>
                <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light">
                    Everything you need to know about our services
                </p>
            </motion.div>

            <div className="max-w-3xl w-full relative z-10 space-y-4">
                {faqs.map((faq, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="rounded-xl border transition-all duration-300 overflow-hidden"
                        style={{
                            borderColor: openIndex === index ? `${BRAND_SECONDARY}80` : 'rgba(255,255,255,0.1)',
                            backgroundColor: openIndex === index ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.02)'
                        }}
                    >
                        <button
                            onClick={() => toggleFAQ(index)}
                            className="w-full flex items-center justify-between p-5 text-left"
                        >
                            <span className="text-white font-medium text-lg pr-4">
                                {faq.question}
                            </span>
                            <motion.span
                                animate={{ rotate: openIndex === index ? 45 : 0 }}
                                transition={{ duration: 0.2 }}
                                className="text-2xl flex-shrink-0"
                                style={{ color: BRAND_SECONDARY }}
                            >
                                +
                            </motion.span>
                        </button>
                        <AnimatePresence>
                            {openIndex === index && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" as const }}
                                    className="overflow-hidden"
                                >
                                    <div className="px-5 pb-5 text-gray-400 leading-relaxed border-t border-white/10 pt-4">
                                        {faq.answer}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

