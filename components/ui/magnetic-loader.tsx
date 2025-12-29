"use client";

import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useEffect, useState, useRef, useMemo } from "react";

interface MagneticLoaderProps {
    isLoading: boolean;
    onComplete?: () => void;
}

export default function MagneticLoader({ isLoading, onComplete }: MagneticLoaderProps) {
    const [progress, setProgress] = useState(0);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const prefersReducedMotion = useReducedMotion();
    const rafRef = useRef<number | undefined>(undefined);

    const progressRef = useRef(0);

    // Optimized progress update with RAF
    useEffect(() => {
        if (!isLoading) return;

        const startTime = Date.now();
        const duration = 3000; // 3 seconds

        const updateProgress = () => {
            const elapsed = Date.now() - startTime;
            const newProgress = Math.min((elapsed / duration) * 100, 100);

            progressRef.current = newProgress;
            setProgress(Math.floor(newProgress));

            if (newProgress < 100) {
                rafRef.current = requestAnimationFrame(updateProgress);
            } else {
                setTimeout(() => onComplete?.(), 500);
            }
        };

        rafRef.current = requestAnimationFrame(updateProgress);

        return () => {
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, [isLoading, onComplete]);

    // Throttled mouse tracking with RAF
    useEffect(() => {
        if (prefersReducedMotion) return;

        let rafId: number;
        let lastX = 0;
        let lastY = 0;

        const handleMouseMove = (e: MouseEvent) => {
            lastX = (e.clientX / window.innerWidth - 0.5) * 30;
            lastY = (e.clientY / window.innerHeight - 0.5) * 30;

            if (!rafId) {
                rafId = requestAnimationFrame(() => {
                    setMousePosition({ x: lastX, y: lastY });
                    rafId = 0;
                });
            }
        };

        window.addEventListener("mousemove", handleMouseMove, { passive: true });
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            if (rafId) cancelAnimationFrame(rafId);
        };
    }, [prefersReducedMotion]);

    // Memoized ring configurations
    const rings = useMemo(() => [
        { size: 200, duration: 4, color: "#00e5ff", delay: 0 },
        { size: 260, duration: 5, color: "#a855f7", delay: 0.5 },
        { size: 320, duration: 6, color: "#00ffff", delay: 1 },
    ], []);

    const shouldAnimate = !prefersReducedMotion;

    return (
        <AnimatePresence mode="wait">
            {isLoading && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-black overflow-hidden"
                    style={{ willChange: "opacity" }}
                >
                    {/* Optimized Background Grid */}
                    <div
                        className="absolute inset-0 opacity-10"
                        style={{
                            backgroundImage: 'linear-gradient(rgba(0,229,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,255,0.1) 1px, transparent 1px)',
                            backgroundSize: '50px 50px',
                        }}
                    />

                    {/* Scan Line - Simplified */}
                    {shouldAnimate && (
                        <motion.div
                            className="absolute inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
                            animate={{ y: ["0vh", "100vh"] }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                            style={{
                                filter: "blur(1px)",
                                willChange: "transform",
                            }}
                        />
                    )}

                    {/* Floating Orbs - Optimized */}
                    {shouldAnimate && (
                        <>
                            <motion.div
                                className="absolute w-96 h-96 rounded-full pointer-events-none"
                                style={{
                                    background: "radial-gradient(circle, rgba(0,229,255,0.15) 0%, transparent 70%)",
                                    filter: "blur(80px)",
                                    x: mousePosition.x,
                                    y: mousePosition.y,
                                    willChange: "transform",
                                }}
                            />
                            <motion.div
                                className="absolute w-[450px] h-[450px] rounded-full pointer-events-none"
                                style={{
                                    background: "radial-gradient(circle, rgba(168,85,247,0.15) 0%, transparent 70%)",
                                    filter: "blur(80px)",
                                    x: -mousePosition.x * 0.5,
                                    y: -mousePosition.y * 0.5,
                                    willChange: "transform",
                                }}
                            />
                        </>
                    )}

                    {/* Main Loader - Optimized */}
                    <motion.div
                        className="relative"
                        style={{
                            transformStyle: "preserve-3d",
                            perspective: "1000px",
                            x: mousePosition.x * 0.3,
                            y: mousePosition.y * 0.3,
                            willChange: "transform",
                        }}
                    >
                        {/* Simplified Rotating Rings */}
                        {rings.map((ring, index) => (
                            <motion.div
                                key={index}
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                                style={{
                                    width: ring.size,
                                    height: ring.size,
                                    willChange: "transform",
                                }}
                                animate={shouldAnimate ? {
                                    rotate: 360,
                                } : {}}
                                transition={{
                                    duration: ring.duration,
                                    repeat: Infinity,
                                    ease: "linear",
                                    delay: ring.delay,
                                }}
                            >
                                {/* Optimized Ring */}
                                <div
                                    className="w-full h-full rounded-full border-2"
                                    style={{
                                        borderColor: `${ring.color}${Math.floor((progress / 100) * 255).toString(16).padStart(2, '0')}`,
                                        boxShadow: `0 0 20px ${ring.color}40`,
                                        willChange: "border-color, box-shadow",
                                    }}
                                />

                                {/* Simplified Particles - Only 2 per ring */}
                                {shouldAnimate && [0, 180].map((angle, i) => {
                                    const radian = (angle * Math.PI) / 180;
                                    return (
                                        <motion.div
                                            key={i}
                                            className="absolute w-2 h-2 rounded-full"
                                            style={{
                                                background: ring.color,
                                                boxShadow: `0 0 10px ${ring.color}`,
                                                top: "50%",
                                                left: "50%",
                                                willChange: "transform",
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

                        {/* Central Core - Simplified */}
                        <motion.div
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32"
                            animate={shouldAnimate ? { rotate: 360 } : {}}
                            transition={{
                                duration: 8,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                            style={{ willChange: "transform" }}
                        >
                            {/* Hexagon SVG - Simplified */}
                            <svg viewBox="0 0 100 100" className="w-full h-full">
                                <defs>
                                    <linearGradient id="hexGradient">
                                        <stop offset="0%" stopColor="#00e5ff" />
                                        <stop offset="50%" stopColor="#a855f7" />
                                        <stop offset="100%" stopColor="#10b981" />
                                    </linearGradient>
                                </defs>

                                <path
                                    d="M50 5 L90 27.5 L90 72.5 L50 95 L10 72.5 L10 27.5 Z"
                                    fill="none"
                                    stroke="url(#hexGradient)"
                                    strokeWidth="2"
                                    strokeDasharray="400"
                                    strokeDashoffset={400 - (progress / 100) * 400}
                                    style={{
                                        filter: "drop-shadow(0 0 10px rgba(0,229,255,0.6))",
                                        transition: "stroke-dashoffset 0.1s linear",
                                    }}
                                />

                                <path
                                    d="M50 15 L80 32.5 L80 67.5 L50 85 L20 67.5 L20 32.5 Z"
                                    fill="rgba(0, 229, 255, 0.1)"
                                    stroke="url(#hexGradient)"
                                    strokeWidth="1"
                                />
                            </svg>

                            {/* Center Core */}
                            <motion.div
                                className="absolute inset-0 flex items-center justify-center"
                                animate={shouldAnimate ? { scale: [1, 1.2, 1] } : {}}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            >
                                <div
                                    className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500"
                                    style={{
                                        boxShadow: "0 0 40px rgba(0, 229, 255, 0.8), 0 0 80px rgba(168, 85, 247, 0.4)",
                                    }}
                                />
                            </motion.div>
                        </motion.div>

                        {/* Progress Percentage - Optimized */}
                        <motion.div
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                            style={{ willChange: "auto" }}
                        >
                            <div className="relative">
                                <span className="text-5xl font-bold holographic block">
                                    {progress}%
                                </span>
                            </div>
                        </motion.div>

                        {/* Simplified Magnetic Field Lines - Reduced count */}
                        {shouldAnimate && [...Array(12)].map((_, i) => {
                            const angle = i * 30;
                            return (
                                <motion.div
                                    key={i}
                                    className="absolute top-1/2 left-1/2 origin-top pointer-events-none"
                                    style={{
                                        width: 1,
                                        height: 80,
                                        background: `linear-gradient(to bottom, rgba(0, 229, 255, ${(progress / 100) * 0.6}), transparent)`,
                                        transform: `rotate(${angle}deg) translateY(-160px)`,
                                        willChange: "opacity",
                                    }}
                                    animate={{
                                        opacity: [0, 0.8, 0],
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
                    </motion.div>

                    {/* Status Text - Optimized */}
                    <motion.div
                        className="absolute top-2/3 left-1/2 -translate-x-1/2 text-center mt-20"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        {/* Loading Dots */}
                        <div className="flex items-center justify-center gap-2 mb-6">
                            {[0, 1, 2, 3].map((i) => (
                                <motion.div
                                    key={i}
                                    className="w-2 h-2 bg-cyan-400 rounded-full"
                                    animate={shouldAnimate ? {
                                        scale: [1, 1.5, 1],
                                        opacity: [0.4, 1, 0.4],
                                    } : {}}
                                    transition={{
                                        duration: 1.2,
                                        repeat: Infinity,
                                        delay: i * 0.15,
                                    }}
                                    style={{
                                        boxShadow: "0 0 10px rgba(0, 229, 255, 0.8)",
                                        willChange: "transform, opacity",
                                    }}
                                />
                            ))}
                        </div>

                        {/* Subtitle */}
                        <p className="text-xs text-gray-400 uppercase tracking-wider">
                            Arani Software Solutions • Powered by AI
                        </p>
                    </motion.div>

                    {/* Progress Bar - Optimized */}
                    <motion.div
                        className="absolute bottom-16 left-1/2 -translate-x-1/2 w-full max-w-xl px-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        <div className="relative h-2 bg-white/5 rounded-full overflow-hidden backdrop-blur-md border border-white/10">
                            <motion.div
                                className="absolute inset-y-0 left-0 rounded-full"
                                style={{
                                    width: `${progress}%`,
                                    background: "linear-gradient(90deg, #00e5ff 0%, #a855f7 50%, #10b981 100%)",
                                    boxShadow: "0 0 20px rgba(0, 229, 255, 0.6)",
                                    willChange: "width",
                                    transition: "width 0.1s linear",
                                }}
                            />

                            {/* Scanning Beam */}
                            {shouldAnimate && (
                                <motion.div
                                    className="absolute inset-y-0 w-20 bg-gradient-to-r from-transparent via-white/60 to-transparent pointer-events-none"
                                    animate={{ x: ["-100%", "600%"] }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "linear",
                                    }}
                                    style={{ willChange: "transform" }}
                                />
                            )}
                        </div>

                        <div className="flex justify-between mt-2 text-xs text-gray-500">
                            <span>0%</span>
                            <span className="text-cyan-400 font-bold">{progress}%</span>
                            <span>100%</span>
                        </div>
                    </motion.div>

                    {/* Corner HUD - Simplified */}
                    {["top-left", "top-right", "bottom-left", "bottom-right"].map((corner) => {
                        const positions: Record<string, React.CSSProperties> = {
                            "top-left": { top: 40, left: 40 },
                            "top-right": { top: 40, right: 40 },
                            "bottom-left": { bottom: 40, left: 40 },
                            "bottom-right": { bottom: 40, right: 40 },
                        };

                        return (
                            <motion.div
                                key={corner}
                                className="absolute w-16 h-16 pointer-events-none"
                                style={positions[corner]}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                            >
                                <svg viewBox="0 0 50 50" className="w-full h-full">
                                    <path
                                        d="M 0 15 L 0 0 L 15 0"
                                        fill="none"
                                        stroke="url(#hexGradient)"
                                        strokeWidth="2"
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
