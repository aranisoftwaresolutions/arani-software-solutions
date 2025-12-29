"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import OrbitingRings from "./loader-orbiting-rings";
import ParticleField from "./loader-particle-field";
import NeuralNetwork from "./loader-neural-network";
import HolographicText from "./loader-holographic-text";

interface MagneticLoaderProps {
    isLoading: boolean;
    onComplete?: () => void;
}

export default function MagneticLoader({ isLoading, onComplete }: MagneticLoaderProps) {
    const [progress, setProgress] = useState(0);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        if (!isLoading) return;

        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(() => onComplete?.(), 500);
                    return 100;
                }
                return prev + 1;
            });
        }, 30);

        return () => clearInterval(interval);
    }, [isLoading, onComplete]);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth - 0.5) * 40,
                y: (e.clientY / window.innerHeight - 0.5) * 40,
            });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <AnimatePresence mode="wait">
            {isLoading && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5 }}
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
                    style={{ perspective: "1000px" }}
                >
                    {/* Animated Background Effects */}
                    <div className="absolute inset-0">
                        <ParticleField mousePosition={mousePosition} />
                        <NeuralNetwork progress={progress} />

                        {/* Gradient Orbs */}
                        <motion.div
                            className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-blue/20 rounded-full blur-3xl"
                            animate={{
                                scale: [1, 1.3, 1],
                                x: [0, 100, 0],
                                y: [0, -50, 0],
                            }}
                            transition={{
                                duration: 8,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        />
                        <motion.div
                            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-purple/20 rounded-full blur-3xl"
                            animate={{
                                scale: [1, 1.4, 1],
                                x: [0, -100, 0],
                                y: [0, 50, 0],
                            }}
                            transition={{
                                duration: 10,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        />
                    </div>

                    {/* Main Loader Content */}
                    <motion.div
                        className="relative z-10"
                        style={{
                            x: mousePosition.x,
                            y: mousePosition.y,
                            transformStyle: "preserve-3d",
                        }}
                    >
                        {/* Orbiting Rings */}
                        <OrbitingRings progress={progress} />

                        {/* Center Core */}
                        <motion.div
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                            animate={{
                                rotateZ: 360,
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                        >
                            <div className="relative w-32 h-32">
                                {/* Inner Core Glow */}
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full"
                                    animate={{
                                        scale: [1, 1.2, 1],
                                        opacity: [0.6, 1, 0.6],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                    style={{
                                        boxShadow: "0 0 60px rgba(0, 229, 255, 0.8)",
                                    }}
                                />

                                {/* Rotating Hexagon */}
                                <motion.div
                                    className="absolute inset-0"
                                    animate={{
                                        rotateZ: -360,
                                    }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: "linear",
                                    }}
                                >
                                    <svg viewBox="0 0 100 100" className="w-full h-full">
                                        <motion.path
                                            d="M50 5 L90 27.5 L90 72.5 L50 95 L10 72.5 L10 27.5 Z"
                                            fill="none"
                                            stroke="url(#gradient)"
                                            strokeWidth="2"
                                            initial={{ pathLength: 0 }}
                                            animate={{ pathLength: progress / 100 }}
                                            transition={{ duration: 0.5 }}
                                        />
                                        <defs>
                                            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                                <stop offset="0%" stopColor="#00e5ff" />
                                                <stop offset="50%" stopColor="#a855f7" />
                                                <stop offset="100%" stopColor="#10b981" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </motion.div>

                                {/* Progress Text */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <motion.span
                                        className="text-3xl font-bold holographic"
                                        key={progress}
                                        initial={{ scale: 1.2, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {progress}%
                                    </motion.span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Holographic Text */}
                        <HolographicText progress={progress} />

                        {/* Magnetic Field Lines */}
                        {[...Array(12)].map((_, i) => {
                            const angle = (i * 30 * Math.PI) / 180;
                            return (
                                <motion.div
                                    key={i}
                                    className="absolute top-1/2 left-1/2"
                                    style={{
                                        width: 2,
                                        height: 80,
                                        background: `linear-gradient(to bottom, rgba(0, 229, 255, ${(progress / 100) * 0.6
                                            }), transparent)`,
                                        transformOrigin: "top center",
                                        transform: `rotate(${i * 30}deg) translateY(-120px)`,
                                    }}
                                    animate={{
                                        scaleY: [0, 1, 0],
                                        opacity: [0, 1, 0],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        delay: i * 0.1,
                                        ease: "easeInOut",
                                    }}
                                />
                            );
                        })}

                        {/* Corner Brackets */}
                        {["top-left", "top-right", "bottom-left", "bottom-right"].map((corner) => {
                            const positions = {
                                "top-left": { top: "-200px", left: "-200px", rotate: 0 },
                                "top-right": { top: "-200px", right: "-200px", rotate: 90 },
                                "bottom-left": { bottom: "-200px", left: "-200px", rotate: -90 },
                                "bottom-right": { bottom: "-200px", right: "-200px", rotate: 180 },
                            };

                            return (
                                <motion.div
                                    key={corner}
                                    className="absolute w-20 h-20"
                                    style={positions[corner as keyof typeof positions]}
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.2, duration: 0.5 }}
                                >
                                    <svg viewBox="0 0 50 50" className="w-full h-full">
                                        <motion.path
                                            d="M 0 15 L 0 0 L 15 0"
                                            fill="none"
                                            stroke="url(#cornerGradient)"
                                            strokeWidth="2"
                                            initial={{ pathLength: 0 }}
                                            animate={{ pathLength: 1 }}
                                            transition={{ duration: 1, delay: 0.5 }}
                                        />
                                        <defs>
                                            <linearGradient id="cornerGradient">
                                                <stop offset="0%" stopColor="#00e5ff" />
                                                <stop offset="100%" stopColor="#a855f7" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </motion.div>
                            );
                        })}
                    </motion.div>

                    {/* Loading Bar at Bottom */}
                    <motion.div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-96">
                        <div className="relative h-2 bg-white/10 rounded-full overflow-hidden backdrop-blur-xl">
                            <motion.div
                                className="absolute inset-y-0 left-0 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-cyan rounded-full"
                                initial={{ width: "0%" }}
                                animate={{ width: `${progress}%` }}
                                transition={{ duration: 0.5 }}
                                style={{
                                    boxShadow: "0 0 20px rgba(0, 229, 255, 0.8)",
                                }}
                            />

                            {/* Scanning Effect */}
                            <motion.div
                                className="absolute inset-y-0 w-20 bg-gradient-to-r from-transparent via-white to-transparent"
                                animate={{
                                    x: ["-100%", "500%"],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                                style={{ opacity: 0.3 }}
                            />
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
