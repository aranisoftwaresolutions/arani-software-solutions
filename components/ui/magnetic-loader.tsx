"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

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
                x: (e.clientX / window.innerWidth - 0.5) * 60,
                y: (e.clientY / window.innerHeight - 0.5) * 60,
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
                    exit={{ opacity: 0, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-black overflow-hidden"
                >
                    {/* Animated Grid Background */}
                    <div className="absolute inset-0 brutal-grid opacity-20" />

                    {/* Scan Line Effect */}
                    <motion.div
                        className="absolute inset-0 h-1 bg-gradient-to-r from-transparent via-neon-blue to-transparent"
                        animate={{
                            y: ["0vh", "100vh"],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        style={{ filter: "blur(2px)" }}
                    />

                    {/* Floating Gradient Orbs with Mouse Tracking */}
                    <motion.div
                        className="absolute w-[500px] h-[500px] bg-neon-blue/20 rounded-full blur-[120px]"
                        style={{
                            x: mousePosition.x,
                            y: mousePosition.y,
                        }}
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                    <motion.div
                        className="absolute w-[600px] h-[600px] bg-neon-purple/20 rounded-full blur-[120px]"
                        style={{
                            x: -mousePosition.x,
                            y: -mousePosition.y,
                        }}
                        animate={{
                            scale: [1.2, 1, 1.2],
                            opacity: [0.4, 0.7, 0.4],
                        }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />

                    {/* Main Loader Container with 3D Effect */}
                    <motion.div
                        className="relative"
                        style={{
                            transformStyle: "preserve-3d",
                            perspective: "1000px",
                            x: mousePosition.x * 0.5,
                            y: mousePosition.y * 0.5,
                        }}
                    >
                        {/* 3D Rotating Rings System */}
                        {[
                            { size: 300, duration: 4, color: "neon-blue", delay: 0 },
                            { size: 380, duration: 5, color: "neon-purple", delay: 0.5 },
                            { size: 460, duration: 6, color: "neon-cyan", delay: 1 },
                        ].map((ring, index) => (
                            <motion.div
                                key={index}
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                                style={{
                                    width: ring.size,
                                    height: ring.size,
                                    transformStyle: "preserve-3d",
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
                                {/* Ring with Gradient Border */}
                                <div
                                    className={`w-full h-full rounded-full border-[3px]`}
                                    style={{
                                        borderImage: `linear-gradient(45deg, rgba(0,229,255,${progress / 100
                                            }), rgba(168,85,247,${progress / 100}), transparent) 1`,
                                        boxShadow: `0 0 40px rgba(0, 229, 255, ${progress / 200}), inset 0 0 40px rgba(168, 85, 247, ${progress / 200
                                            })`,
                                    }}
                                />

                                {/* Orbiting Particles on Rings */}
                                {[0, 120, 240].map((angle, i) => {
                                    const radian = (angle * Math.PI) / 180;
                                    return (
                                        <motion.div
                                            key={i}
                                            className={`absolute w-4 h-4 bg-${ring.color} rounded-full`}
                                            style={{
                                                top: "50%",
                                                left: "50%",
                                                boxShadow: `0 0 20px currentColor`,
                                            }}
                                            animate={{
                                                x: [
                                                    Math.cos(radian) * (ring.size / 2),
                                                    Math.cos(radian + Math.PI) * (ring.size / 2),
                                                ],
                                                y: [
                                                    Math.sin(radian) * (ring.size / 2),
                                                    Math.sin(radian + Math.PI) * (ring.size / 2),
                                                ],
                                                scale: [1, 1.5, 1],
                                            }}
                                            transition={{
                                                duration: ring.duration,
                                                repeat: Infinity,
                                                ease: "linear",
                                            }}
                                        />
                                    );
                                })}
                            </motion.div>
                        ))}

                        {/* Central Hexagon Core */}
                        <motion.div
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40"
                            animate={{
                                rotateZ: 360,
                            }}
                            transition={{
                                duration: 8,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                        >
                            {/* Hexagon SVG with Animated Path */}
                            <svg viewBox="0 0 100 100" className="w-full h-full">
                                <defs>
                                    <linearGradient id="hexGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#00e5ff" />
                                        <stop offset="50%" stopColor="#a855f7" />
                                        <stop offset="100%" stopColor="#10b981" />
                                    </linearGradient>
                                    <filter id="glow">
                                        <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                                        <feMerge>
                                            <feMergeNode in="coloredBlur" />
                                            <feMergeNode in="SourceGraphic" />
                                        </feMerge>
                                    </filter>
                                </defs>

                                {/* Hexagon Shape */}
                                <motion.path
                                    d="M50 5 L90 27.5 L90 72.5 L50 95 L10 72.5 L10 27.5 Z"
                                    fill="none"
                                    stroke="url(#hexGradient)"
                                    strokeWidth="3"
                                    filter="url(#glow)"
                                    initial={{ pathLength: 0, opacity: 0 }}
                                    animate={{
                                        pathLength: progress / 100,
                                        opacity: 1,
                                    }}
                                    transition={{ duration: 0.5 }}
                                />

                                {/* Inner Hexagon */}
                                <motion.path
                                    d="M50 15 L80 32.5 L80 67.5 L50 85 L20 67.5 L20 32.5 Z"
                                    fill="rgba(0, 229, 255, 0.1)"
                                    stroke="url(#hexGradient)"
                                    strokeWidth="2"
                                    animate={{
                                        scale: [1, 1.1, 1],
                                        opacity: [0.5, 1, 0.5],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                />
                            </svg>

                            {/* Center Pulsing Core */}
                            <motion.div
                                className="absolute inset-0 flex items-center justify-center"
                                animate={{
                                    scale: [1, 1.3, 1],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            >
                                <div
                                    className="w-20 h-20 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple"
                                    style={{
                                        boxShadow: "0 0 60px rgba(0, 229, 255, 1), 0 0 100px rgba(168, 85, 247, 0.5)",
                                    }}
                                />
                            </motion.div>
                        </motion.div>

                        {/* Progress Percentage with Glitch Effect */}
                        <motion.div
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                            key={progress}
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.2 }}
                        >
                            <div className="relative">
                                {/* Main Text */}
                                <span className="text-6xl font-bold holographic block">{progress}%</span>

                                {/* Glitch Layers */}
                                <span
                                    className="absolute inset-0 text-6xl font-bold text-neon-blue opacity-50"
                                    style={{ transform: "translate(-2px, 0)" }}
                                >
                                    {progress}%
                                </span>
                                <span
                                    className="absolute inset-0 text-6xl font-bold text-neon-purple opacity-50"
                                    style={{ transform: "translate(2px, 0)" }}
                                >
                                    {progress}%
                                </span>
                            </div>
                        </motion.div>

                        {/* Magnetic Field Lines */}
                        {[...Array(24)].map((_, i) => {
                            const angle = (i * 15);
                            return (
                                <motion.div
                                    key={i}
                                    className="absolute top-1/2 left-1/2 origin-top"
                                    style={{
                                        width: 2,
                                        height: 100,
                                        background: `linear-gradient(to bottom, rgba(0, 229, 255, ${(progress / 100) * 0.8
                                            }), transparent)`,
                                        transform: `rotate(${angle}deg) translateY(-200px)`,
                                    }}
                                    animate={{
                                        scaleY: [0, 1, 0],
                                        opacity: [0, 1, 0],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        delay: i * 0.05,
                                        ease: "easeInOut",
                                    }}
                                />
                            );
                        })}
                    </motion.div>

                    {/* Dynamic Status Text */}
                    <motion.div
                        className="absolute top-2/3 left-1/2 -translate-x-1/2 text-center"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <motion.h2
                            className="text-5xl font-bold mb-4"
                            key={Math.floor(progress / 33)}
                        >
                            <span className="holographic">
                                {progress < 33
                                    ? ""
                                    : progress < 66
                                        ? ""
                                        : ""}
                            </span>
                        </motion.h2>

                        {/* Animated Loading Dots */}
                        <div className="flex items-center justify-center space-x-3 mb-6">
                            {[0, 1, 2, 3].map((i) => (
                                <motion.div
                                    key={i}
                                    className="w-3 h-3 bg-neon-blue rounded-full"
                                    animate={{
                                        scale: [1, 1.8, 1],
                                        opacity: [0.3, 1, 0.3],
                                    }}
                                    transition={{
                                        duration: 1.5,
                                        repeat: Infinity,
                                        delay: i * 0.15,
                                    }}
                                    style={{
                                        boxShadow: "0 0 15px rgba(0, 229, 255, 1)",
                                    }}
                                />
                            ))}
                        </div>

                        {/* Subtitle */}
                        <motion.p
                            className="text-sm text-gray-400 uppercase tracking-wider"
                            animate={{
                                opacity: [0.5, 1, 0.5],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                            }}
                        >
                            Arani Software Solutions • Powered by AI
                        </motion.p>
                    </motion.div>

                    {/* Enhanced Progress Bar at Bottom */}
                    <motion.div
                        className="absolute bottom-16 left-1/2 -translate-x-1/2 w-[600px]"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                    >
                        {/* Bar Container */}
                        <div className="relative h-3 bg-white/5 rounded-full overflow-hidden backdrop-blur-xl border border-white/10">
                            {/* Progress Fill */}
                            <motion.div
                                className="absolute inset-y-0 left-0 rounded-full"
                                style={{
                                    background: "linear-gradient(90deg, #00e5ff 0%, #a855f7 50%, #10b981 100%)",
                                    boxShadow: "0 0 30px rgba(0, 229, 255, 0.8)",
                                }}
                                initial={{ width: "0%" }}
                                animate={{ width: `${progress}%` }}
                                transition={{ duration: 0.3 }}
                            />

                            {/* Scanning Beam */}
                            <motion.div
                                className="absolute inset-y-0 w-32 bg-gradient-to-r from-transparent via-white/80 to-transparent"
                                animate={{
                                    x: ["-100%", "700%"],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                            />
                        </div>

                        {/* Progress Percentage Labels */}
                        <div className="flex justify-between mt-2 text-xs text-gray-500">
                            <span>0%</span>
                            <span className="text-neon-blue font-bold">{progress}%</span>
                            <span>100%</span>
                        </div>
                    </motion.div>

                    {/* Corner HUD Elements */}
                    {["top-left", "top-right", "bottom-left", "bottom-right"].map((corner, idx) => {
                        const positions = {
                            "top-left": { top: "40px", left: "40px" },
                            "top-right": { top: "40px", right: "40px" },
                            "bottom-left": { bottom: "40px", left: "40px" },
                            "bottom-right": { bottom: "40px", right: "40px" },
                        };

                        return (
                            <motion.div
                                key={corner}
                                className="absolute w-24 h-24"
                                style={positions[corner as keyof typeof positions]}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.2 + idx * 0.1 }}
                            >
                                <svg viewBox="0 0 50 50" className="w-full h-full">
                                    <motion.path
                                        d="M 0 15 L 0 0 L 15 0"
                                        fill="none"
                                        stroke="url(#hexGradient)"
                                        strokeWidth="2"
                                        initial={{ pathLength: 0 }}
                                        animate={{ pathLength: 1 }}
                                        transition={{ duration: 1, delay: 0.5 }}
                                    />
                                </svg>
                            </motion.div>
                        );
                    })}
                </motion.div>
            )}
        </AnimatePresence>
    );
}
