"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

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
                        alt="Trips24"
                        width={120}
                        height={120}
                        className="rounded"
                    />
                </Link>

                {/* Nav Links */}
                <div className="hidden md:flex gap-8 font-medium">
                    {["Fleet", "Services", "About", "Track"].map((item) => (
                        <Link
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-gray-300 hover:text-cyan-400 transition-colors relative group"
                        >
                            {item}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300" />
                        </Link>
                    ))}
                </div>

                {/* CTA */}
                <button className="px-5 py-2.5 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold rounded-full text-sm hover:shadow-lg hover:shadow-cyan-500/30 transition-all">
                    Get Quote
                </button>
            </div>
        </motion.nav>
    );
}
