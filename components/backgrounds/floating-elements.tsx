"use client";

import { motion } from "framer-motion";

export default function FloatingElements() {
    const elements = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        size: Math.random() * 100 + 50,
        x: Math.random() * 100,
        y: Math.random() * 100,
        duration: Math.random() * 20 + 10,
        delay: Math.random() * 5,
    }));

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {elements.map((element) => (
                <motion.div
                    key={element.id}
                    className="absolute rounded-full blur-2xl"
                    style={{
                        width: element.size,
                        height: element.size,
                        left: `${element.x}%`,
                        top: `${element.y}%`,
                        background: `radial-gradient(circle, ${element.id % 3 === 0
                                ? "rgba(0, 229, 255, 0.1)"
                                : element.id % 3 === 1
                                    ? "rgba(168, 85, 247, 0.1)"
                                    : "rgba(16, 185, 129, 0.1)"
                            }, transparent)`,
                    }}
                    animate={{
                        y: [0, -30, 0],
                        x: [0, 20, 0],
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                        duration: element.duration,
                        delay: element.delay,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            ))}
        </div>
    );
}
