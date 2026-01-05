"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const trucks = [
    {
        id: "pickup",
        name: "Urban Pickup",
        image: "/assets/fleet/pickup.png",
        specs: ["1 Ton Capacity", "City Access", "Express Delivery"],
        price: "Starting $50"
    },
    {
        id: "covered_van",
        name: "Secure Van",
        image: "/assets/fleet/covered_van.png",
        specs: ["2 Ton Capacity", "Weather Proof", "Secure Lock"],
        price: "Starting $120"
    },
    {
        id: "open_truck",
        name: "Open Bed Truck",
        image: "/assets/fleet/open_truck.png",
        specs: ["5 Ton Capacity", "Bulk Items", "Heavy Machinery"],
        price: "Starting $250"
    },
    {
        id: "trailer",
        name: "Heavy Trailer",
        image: "/assets/fleet/trailer.png",
        specs: ["20 Ton Capacity", "Long Haul", "Container Ready"],
        price: "Starting $500"
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
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

export default function TruckFleet() {
    return (
        <section id="fleet" className="min-h-screen w-full flex flex-col items-center justify-center py-24 px-4 sm:px-8 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/10 to-black pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16 relative z-10"
            >
                <h2 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tight">
                    Our <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">Fleet</span>
                </h2>
                <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light">
                    Versatile solutions for every cargo requirement. Modern, reliable, and ready to roll.
                </p>
            </motion.div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl w-full relative z-10"
            >
                {trucks.map((truck) => (
                    <motion.div
                        key={truck.id}
                        variants={cardVariants}
                        whileHover={{ y: -10 }}
                        className="group relative bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden backdrop-blur-sm transition-all duration-300 hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] flex flex-col"
                    >
                        {/* Image Container */}
                        <div className="relative h-48 w-full overflow-hidden p-4 bg-gradient-to-b from-white/5 to-transparent">
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.4 }}
                                className="w-full h-full relative"
                            >
                                <Image
                                    src={truck.image}
                                    alt={truck.name}
                                    fill
                                    className="object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                />
                            </motion.div>
                        </div>

                        {/* Content */}
                        <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                                {truck.name}
                            </h3>
                            <div className="h-px w-full bg-gradient-to-r from-white/20 to-transparent my-3" />

                            <ul className="space-y-2 mb-6 flex-grow">
                                {truck.specs.map((spec, i) => (
                                    <li key={i} className="text-xs text-gray-400 flex items-center gap-2">
                                        <span className="w-1 h-1 rounded-full bg-cyan-500" />
                                        {spec}
                                    </li>
                                ))}
                            </ul>

                            <div className="flex items-center justify-between mt-auto">
                                <span className="text-cyan-400 font-bold text-lg">{truck.price}</span>
                                <button className="px-4 py-2 bg-white/10 hover:bg-cyan-500 hover:text-black text-white text-xs font-bold rounded-lg transition-all duration-300">
                                    Book Now
                                </button>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
