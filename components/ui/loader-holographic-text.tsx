"use client";

import { motion } from "framer-motion";

interface HolographicTextProps {
    progress: number;
}

export default function HolographicText({ progress }: HolographicTextProps) {
    const text = progress < 33 ? "Initializing" : progress < 66 ? "Loading Assets" : "Almost Ready";

    return (
        <motion.div
            className="absolute top-3/4 left-1/2 -translate-x-1/2 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
        >
            <motion.h2
                className="text-4xl font-bold holographic mb-4"
                key={text}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                {text}
            </motion.h2>

            {/* Animated Dots */}
            <div className="flex items-center justify-center space-x-2">
                {[0, 1, 2].map((i) => (
                    <motion.div
                        key={i}
                        className="w-2 h-2 bg-neon-blue rounded-full"
                        animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.3, 1, 0.3],
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            delay: i * 0.2,
                        }}
                        style={{
                            boxShadow: "0 0 10px rgba(0, 229, 255, 0.8)",
                        }}
                    />
                ))}
            </div>

            {/* Subtitle */}
            <motion.p
                className="text-sm text-gray-400 mt-4"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                Powered by AI Technology
            </motion.p>
        </motion.div>
    );
}
