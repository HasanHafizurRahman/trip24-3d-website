"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Brand colors
const BRAND_PRIMARY = "#1B44E4";
const BRAND_SECONDARY = "#F9BB32";

const testimonials = [
    {
        name: "Sarah Johnson",
        role: "E-commerce Manager",
        company: "ShopMax Inc.",
        avatar: "/assets/avatar.png",
        quote: "Trip24 has completely transformed our delivery operations. The real-time tracking gives our customers peace of mind, and on-time delivery rate is exceptional.",
        rating: 5
    },
    {
        name: "Michael Chen",
        role: "Operations Director",
        company: "BuildRight Construction",
        avatar: "/assets/avatar.png",
        quote: "Moving heavy machinery across the country used to be a nightmare. Trip24's heavy trailer service handles our equipment with care and precision every time.",
        rating: 5
    },
    {
        name: "Emily Rodriguez",
        role: "Boutique Owner",
        company: "Luxe Ceramics",
        avatar: "/assets/avatar.png",
        quote: "For fragile artisan ceramics, I trust no one but Trip24. Their specialized handling has reduced our breakage to nearly zero. Worth every penny!",
        rating: 5
    },
    {
        name: "David Kim",
        role: "Logistics Coordinator",
        company: "FreshFarm Foods",
        avatar: "/assets/avatar.png",
        quote: "Time-sensitive produce deliveries require reliability. Trip24's express service ensures our goods reach markets fresh, every single time.",
        rating: 4
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15
        }
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" as const }
    }
};

function StarRating({ rating }: { rating: number }) {
    return (
        <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
                <svg
                    key={i}
                    className="w-4 h-4"
                    style={{ color: i < rating ? BRAND_SECONDARY : '#4b5563' }}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            ))}
        </div>
    );
}

export default function Testimonials() {
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
                    What Our Clients{" "}
                    <span
                        className="bg-clip-text text-transparent"
                        style={{ backgroundImage: `linear-gradient(90deg, ${BRAND_PRIMARY}, ${BRAND_SECONDARY})` }}
                    >
                        Say
                    </span>
                </h2>
                <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light">
                    Trusted by businesses of all sizes across the nation
                </p>
            </motion.div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl w-full relative z-10"
            >
                {testimonials.map((testimonial, index) => (
                    <motion.div
                        key={index}
                        variants={cardVariants}
                        whileHover={{ y: -5 }}
                        className="group relative p-6 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm transition-all duration-300"
                        onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = `${BRAND_SECONDARY}50`;
                            e.currentTarget.style.boxShadow = `0 10px 40px ${BRAND_PRIMARY}15`;
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                            e.currentTarget.style.boxShadow = 'none';
                        }}
                    >
                        {/* Quote Icon */}
                        <svg
                            className="absolute top-4 right-4 w-10 h-10"
                            style={{ color: `${BRAND_PRIMARY}30` }}
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>

                        {/* Content */}
                        <div className="flex items-start gap-4 mb-4">
                            <div
                                className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0 border-2"
                                style={{ borderColor: `${BRAND_SECONDARY}50` }}
                            >
                                <Image
                                    src={testimonial.avatar}
                                    alt={testimonial.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div>
                                <h4 className="text-white font-bold">{testimonial.name}</h4>
                                <p className="text-gray-400 text-sm">{testimonial.role}</p>
                                <p
                                    className="text-xs"
                                    style={{ color: BRAND_PRIMARY }}
                                >{testimonial.company}</p>
                            </div>
                        </div>

                        <StarRating rating={testimonial.rating} />

                        <p className="text-gray-300 mt-4 leading-relaxed italic">
                            &ldquo;{testimonial.quote}&rdquo;
                        </p>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}

