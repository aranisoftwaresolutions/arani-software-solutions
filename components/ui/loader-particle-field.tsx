"use client";

import { motion } from "framer-motion";

interface ParticleFieldProps {
    mousePosition: { x: number; y: number };
}

export default function ParticleField({ mousePosition }: ParticleFieldProps) {
    const particles = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 1,
        duration: Math.random() * 10 + 5,
    }));

    return (
        <div className="absolute inset-0 overflow-hidden">
            {particles.map((particle) => (
                <motion.div
                    key={particle.id}
                    className="absolute bg-neon-blue rounded-full"
                    style={{
                        left: `${particle.x}%`,
                        top: `${particle.y}%`,
                        width: particle.size,
                        height: particle.size,
                        boxShadow: "0 0 10px rgba(0, 229, 255, 0.8)",
                    }}
                    animate={{
                        y: [0, -30, 0],
                        opacity: [0.2, 0.8, 0.2],
                        scale: [1, 1.5, 1],
                        x: mousePosition.x * (particle.id % 2 === 0 ? 0.1 : -0.1),
                    }}
                    transition={{
                        y: {
                            duration: particle.duration,
                            repeat: Infinity,
                            ease: "easeInOut",
                        },
                        opacity: {
                            duration: particle.duration,
                            repeat: Infinity,
                            ease: "easeInOut",
                        },
                        scale: {
                            duration: particle.duration / 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                        },
                        x: {
                            duration: 0.5,
                            ease: "easeOut",
                        },
                    }}
                />
            ))}
        </div>
    );
}
