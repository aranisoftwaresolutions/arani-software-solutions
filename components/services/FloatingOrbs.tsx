"use client";

import { motion } from "framer-motion";

export default function FloatingOrbs({ colors }: { colors: string[] }) {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(6)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute rounded-full blur-3xl"
                    style={{
                        width: `${250 + i * 40}px`,
                        height: `${250 + i * 40}px`,
                        left: `${(i * 13) % 100}%`,
                        top: `${(i * 19) % 100}%`,
                        background: `radial-gradient(circle, ${colors[i % colors.length]}, transparent)`,
                        willChange: "transform",
                    }}
                    animate={{
                        x: [0, 80, 0],
                        y: [0, -80, 0],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 20 + i * 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            ))}
        </div>
    );
}
