"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

export default function AmbientSound() {
    const [isMuted, setIsMuted] = useState(true);
    const [isLoaded, setIsLoaded] = useState(false);
    const audioRef = useRef<HTMLAudioElement>(null);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = 0.3; // 30% volume
            audioRef.current.loop = true;
            setIsLoaded(true);
        }
    }, []);

    const toggleSound = () => {
        if (audioRef.current) {
            if (isMuted) {
                audioRef.current.play().catch(console.error);
            } else {
                audioRef.current.pause();
            }
            setIsMuted(!isMuted);
        }
    };

    return (
        <>
            {/* Hidden Audio Element */}
            <audio
                ref={audioRef}
                src="/assets/truck_engine.mp3"
                preload="auto"
            />

            {/* Sound Toggle Button */}
            <motion.button
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 3, duration: 0.5 }}
                onClick={toggleSound}
                className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all group"
                title={isMuted ? "Enable Sound" : "Mute Sound"}
            >
                {isMuted ? (
                    // Muted Icon
                    <svg
                        className="w-5 h-5 text-white group-hover:text-cyan-400 transition-colors"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                        />
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"
                        />
                    </svg>
                ) : (
                    // Sound On Icon with animation
                    <motion.svg
                        className="w-5 h-5 text-cyan-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                        />
                    </motion.svg>
                )}
            </motion.button>

            {/* Sound Label (shows briefly) */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: [0, 1, 1, 0], x: 0 }}
                transition={{ delay: 3.5, duration: 3, times: [0, 0.1, 0.8, 1] }}
                className="fixed bottom-6 right-20 z-50 px-3 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs pointer-events-none"
            >
                Click to enable sound
            </motion.div>
        </>
    );
}
