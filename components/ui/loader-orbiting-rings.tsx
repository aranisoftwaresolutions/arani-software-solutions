"use client";

import { motion } from "framer-motion";

interface OrbitingRingsProps {
    progress: number;
}

export default function OrbitingRings({ progress }: OrbitingRingsProps) {
    const rings = [
        { size: 200, duration: 3, delay: 0, color: "from-neon-blue to-neon-cyan" },
        { size: 280, duration: 4, delay: 0.5, color: "from-neon-purple to-neon-pink" },
        { size: 360, duration: 5, delay: 1, color: "from-neon-cyan to-neon-green" },
    ];

    return (
        <>
            {rings.map((ring, index) => (
                <motion.div
                    key={index}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    style={{
                        width: ring.size,
                        height: ring.size,
                    }}
                    animate={{
                        rotateX: [0, 360],
                        rotateY: [0, -360],
                        rotateZ: [0, 360],
                    }}
                    transition={{
                        duration: ring.duration,
                        repeat: Infinity,
                        ease: "linear",
                        delay: ring.delay,
                    }}
                >
                    <div
                        className={`w-full h-full rounded-full border-2 border-transparent bg-gradient-to-r ${ring.color} opacity-50`}
                        style={{
                            borderImage: `linear-gradient(45deg, transparent, rgba(0, 229, 255, ${
                                progress / 100
                            }), transparent) 1`,
                            boxShadow: `0 0 30px rgba(0, 229, 255, ${progress / 200})`,
                        }}
                    />

                    {/* Orbiting Particles */}
                    {[...Array(3)].map((_, i) => {
                        const angle = (i * 120 * Math.PI) / 180;
                        return (
                            <motion.div
                                key={i}
                                className="absolute w-3 h-3 bg-neon-blue rounded-full"
                                style={{
                                    top: "50%",
                                    left: "50%",
                                    boxShadow: "0 0 15px rgba(0, 229, 255, 1)",
                                }}
                                animate={{
                                    x: [
                                        Math.cos(angle) * (ring.size / 2),
                                        Math.cos(angle + Math.PI) * (ring.size / 2),
                                    ],
                                    y: [
                                        Math.sin(angle) * (ring.size / 2),
                                        Math.sin(angle + Math.PI) * (ring.size / 2),
                                    ],
                                }}
                                transition={{
                                    duration: ring.duration,
                                    repeat: Infinity,
                                    ease: "linear",
                                    delay: i * 0.3,
                                }}
                            />
                        );
                    })}
                </motion.div>
            ))}
        </>
    );
}
