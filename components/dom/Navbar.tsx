"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

// Brand colors
const BRAND_PRIMARY = "#1B44E4";
const BRAND_SECONDARY = "#F9BB32";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8 }}
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
                ? "bg-black/80 backdrop-blur-lg border-b border-white/10 py-4"
                : "bg-transparent py-6"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3">
                    <Image
                        src="/assets/Trip24-Final-Logo.png"
                        alt="Trip24"
                        width={150}
                        height={150}
                        className="rounded"
                    />
                </Link>

                {/* Nav Links */}
                <div className="hidden md:flex gap-8 font-medium">
                    {["Fleet", "Services", "About", "Track"].map((item) => (
                        <Link
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-gray-300 transition-colors relative group"
                            style={{ ["--hover-color" as string]: BRAND_PRIMARY }}
                            onMouseEnter={(e) => e.currentTarget.style.color = BRAND_SECONDARY}
                            onMouseLeave={(e) => e.currentTarget.style.color = '#d1d5db'}
                        >
                            {item}
                            <span
                                className="absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300"
                                style={{ backgroundColor: BRAND_SECONDARY }}
                            />
                        </Link>
                    ))}
                </div>

                {/* CTA */}
                <button
                    className="px-5 py-2.5 text-white font-bold rounded-full text-sm transition-all hover:scale-105"
                    style={{
                        background: `linear-gradient(135deg, ${BRAND_PRIMARY}, ${BRAND_PRIMARY}CC)`,
                        boxShadow: `0 4px 20px ${BRAND_PRIMARY}40`
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.boxShadow = `0 6px 30px ${BRAND_SECONDARY}50`;
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.boxShadow = `0 4px 20px ${BRAND_PRIMARY}40`;
                    }}
                >
                    Get Started
                </button>
            </div>
        </motion.nav>
    );
}

