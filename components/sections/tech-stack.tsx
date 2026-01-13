"use client";

import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion";
import { useState, useEffect, useRef, useCallback } from "react";
import { Sparkles, Zap, Brain } from "lucide-react";

const allTechnologies = [
    // Frontend
    { name: "React", category: "Frontend", color: "#61DAFB", gradient: "from-blue-400 to-cyan-400" },
    { name: "Next.js", category: "Frontend", color: "#000000", gradient: "from-gray-800 to-gray-600" },
    { name: "JavaScript", category: "Frontend", color: "#F7DF1E", gradient: "from-yellow-400 to-yellow-300" },
    { name: "TypeScript", category: "Frontend", color: "#3178C6", gradient: "from-blue-600 to-blue-400" },
    { name: "Tailwind CSS", category: "Frontend", color: "#06B6D4", gradient: "from-cyan-500 to-blue-500" },
    { name: "Framer Motion", category: "Frontend", color: "#FF0055", gradient: "from-pink-500 to-rose-500" },
    { name: "Redux Toolkit", category: "Frontend", color: "#764ABC", gradient: "from-purple-600 to-purple-400" },

    // Backend
    { name: "Node.js", category: "Backend", color: "#339933", gradient: "from-green-600 to-green-400" },
    { name: "Express", category: "Backend", color: "#000000", gradient: "from-gray-700 to-gray-500" },
    { name: "GraphQL", category: "Backend", color: "#E10098", gradient: "from-pink-600 to-pink-400" },
    { name: "REST APIs", category: "Backend", color: "#00D9FF", gradient: "from-cyan-500 to-blue-400" },
    { name: "WebSockets", category: "Backend", color: "#00E5FF", gradient: "from-cyan-400 to-blue-300" },

    // Mobile
    { name: "React Native", category: "Mobile", color: "#61DAFB", gradient: "from-blue-500 to-cyan-500" },
    { name: "Kotlin", category: "Mobile", color: "#7F52FF", gradient: "from-purple-600 to-indigo-500" },
    { name: "Expo", category: "Mobile", color: "#000020", gradient: "from-indigo-900 to-purple-900" },

    // Cloud
    { name: "AWS", category: "Cloud", color: "#FF9900", gradient: "from-orange-500 to-amber-400" },
    { name: "Vercel", category: "Cloud", color: "#000000", gradient: "from-gray-800 to-gray-600" },
    { name: "render", category: "Cloud", color: "#000000", gradient: "from-gray-800 to-gray-600" },

    // Virtual Private Server
    { name: "VPS", category: "VPS", color: "#000000", gradient: "from-gray-800 to-gray-600" },

    // Database
    { name: "MongoDB", category: "Database", color: "#47A248", gradient: "from-green-600 to-emerald-500" },
    { name: "Redis", category: "Database", color: "#DC382D", gradient: "from-red-600 to-red-400" },
    { name: "Firebase", category: "Database", color: "#FFCA28", gradient: "from-yellow-500 to-orange-400" },
    { name: "MySQL", category: "Database", color: "#00758F", gradient: "from-blue-600 to-cyan-500" },
];

// Neural Network Connections - Optimized
function NeuralConnections({ hoveredIndex, isScrolling }: { hoveredIndex: number | null; isScrolling: boolean }) {
    if (hoveredIndex === null || isScrolling) return null;

    const connections = [
        hoveredIndex > 0 ? hoveredIndex - 1 : null,
        hoveredIndex < allTechnologies.length - 1 ? hoveredIndex + 1 : null,
        hoveredIndex > 4 ? hoveredIndex - 5 : null,
        hoveredIndex < allTechnologies.length - 5 ? hoveredIndex + 5 : null,
    ].filter((i) => i !== null);

    return (
        <svg className="absolute inset-0 pointer-events-none" style={{ zIndex: 1 }}>
            {connections.map((targetIndex, i) => {
                const sourceCol = hoveredIndex % 5;
                const sourceRow = Math.floor(hoveredIndex / 5);
                const targetCol = (targetIndex as number) % 5;
                const targetRow = Math.floor((targetIndex as number) / 5);

                return (
                    <motion.line
                        key={i}
                        x1={`${sourceCol * 20 + 10}%`}
                        y1={`${sourceRow * 25 + 12.5}%`}
                        x2={`${targetCol * 20 + 10}%`}
                        y2={`${targetRow * 25 + 12.5}%`}
                        stroke="url(#neuralGradient)"
                        strokeWidth="2"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 0.6 }}
                        exit={{ pathLength: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        style={{ willChange: "auto" }}
                    />
                );
            })}
            <defs>
                <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00e5ff" />
                    <stop offset="100%" stopColor="#a855f7" />
                </linearGradient>
            </defs>
        </svg>
    );
}

// Magnetic Skill Bubble with Full Effects
function MagneticSkillBubble({
    tech,
    index,
    onHover,
    isScrolling
}: {
    tech: typeof allTechnologies[0];
    index: number;
    onHover: (index: number | null) => void;
    isScrolling: boolean;
}) {
    const [isHovered, setIsHovered] = useState(false);
    const bubbleRef = useRef<HTMLDivElement>(null);
    const prefersReducedMotion = useReducedMotion();

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x, { stiffness: 200, damping: 20 });
    const mouseYSpring = useSpring(y, { stiffness: 200, damping: 20 });

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);
    const scale = useTransform(mouseXSpring, [-0.5, 0.5], [1, 1.1]);

    const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        if (!bubbleRef.current || isScrolling || prefersReducedMotion) return;
        const rect = bubbleRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const distanceX = (e.clientX - centerX) / rect.width;
        const distanceY = (e.clientY - centerY) / rect.height;
        x.set(distanceX);
        y.set(distanceY);
    }, [isScrolling, prefersReducedMotion, x, y]);

    const handleMouseEnter = useCallback(() => {
        if (isScrolling) return;
        setIsHovered(true);
        onHover(index);
    }, [isScrolling, index, onHover]);

    const handleMouseLeave = useCallback(() => {
        x.set(0);
        y.set(0);
        setIsHovered(false);
        onHover(null);
    }, [x, y, onHover]);

    const shouldAnimate = !isScrolling && !prefersReducedMotion;

    return (
        <motion.div
            ref={bubbleRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
                duration: 0.5,
                delay: index * 0.03,
                type: "spring",
                stiffness: 200,
            }}
            style={{
                rotateX: shouldAnimate ? rotateX : 0,
                rotateY: shouldAnimate ? rotateY : 0,
                scale: shouldAnimate ? scale : 1,
                transformStyle: "preserve-3d",
                willChange: isHovered ? "transform" : "auto",
            }}
            className="relative group cursor-pointer"
        >
            {/* Main Bubble */}
            <motion.div
                className="relative px-4 sm:px-6 py-3 sm:py-4 rounded-2xl border border-white/10 backdrop-blur-xl overflow-hidden"
                style={{
                    background: isHovered
                        ? `linear-gradient(135deg, ${tech.color}20, ${tech.color}10)`
                        : "rgba(255, 255, 255, 0.03)",
                    willChange: isHovered ? "border-color, box-shadow" : "auto",
                }}
                whileHover={shouldAnimate ? {
                    borderColor: `${tech.color}80`,
                    boxShadow: `0 0 30px ${tech.color}40, 0 0 60px ${tech.color}20`,
                } : {}}
                transition={{ duration: 0.3 }}
            >
                {/* AI Scan Line */}
                {isHovered && shouldAnimate && (
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        initial={{ x: "-100%" }}
                        animate={{ x: "200%" }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        style={{ willChange: "transform" }}
                    />
                )}

                {/* Energy Particles */}
                {isHovered && shouldAnimate && (
                    <div className="absolute inset-0 pointer-events-none">
                        {[...Array(6)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute w-1 h-1 rounded-full"
                                style={{
                                    background: tech.color,
                                    left: "50%",
                                    top: "50%",
                                    boxShadow: `0 0 10px ${tech.color}`,
                                    willChange: "transform, opacity",
                                }}
                                animate={{
                                    x: [0, Math.cos((i * Math.PI) / 3) * 50],
                                    y: [0, Math.sin((i * Math.PI) / 3) * 50],
                                    opacity: [1, 0],
                                    scale: [1, 1.5, 0],
                                }}
                                transition={{
                                    duration: 1,
                                    repeat: Infinity,
                                    delay: i * 0.1,
                                    ease: "easeOut",
                                }}
                            />
                        ))}
                    </div>
                )}

                {/* Tech Name */}
                <motion.div
                    className="relative z-10 flex items-center space-x-2"
                    style={{ transform: "translateZ(20px)" }}
                >
                    {/* AI Icon */}
                    <motion.div
                        animate={isHovered && shouldAnimate ? {
                            rotate: [0, 360],
                            scale: [1, 1.2, 1],
                        } : {}}
                        transition={{
                            duration: 2,
                            repeat: isHovered ? Infinity : 0,
                            ease: "linear",
                        }}
                    >
                        <Brain
                            className="w-3 h-3 sm:w-4 sm:h-4"
                            style={{ color: tech.color }}
                        />
                    </motion.div>

                    {/* Tech Name Text */}
                    <span
                        className="text-sm sm:text-base font-semibold whitespace-nowrap"
                        style={{
                            color: isHovered ? tech.color : "#fff",
                            textShadow: isHovered ? `0 0 20px ${tech.color}80` : "none",
                        }}
                    >
                        {tech.name}
                    </span>

                    {/* AI Sparkle */}
                    {isHovered && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0 }}
                        >
                            <Sparkles
                                className="w-3 h-3 sm:w-4 sm:h-4"
                                style={{ color: tech.color }}
                            />
                        </motion.div>
                    )}
                </motion.div>

                {/* Holographic Edge Effect */}
                {shouldAnimate && (
                    <motion.div
                        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100"
                        style={{
                            background: `linear-gradient(45deg, transparent, ${tech.color}30, transparent)`,
                            backgroundSize: "200% 200%",
                        }}
                        animate={{
                            backgroundPosition: ["0% 0%", "100% 100%"],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                        }}
                    />
                )}
            </motion.div>

            {/* Orbiting Ring */}
            {isHovered && shouldAnimate && (
                <motion.div
                    className="absolute inset-0 rounded-2xl border-2 pointer-events-none"
                    style={{
                        borderColor: `${tech.color}60`,
                        willChange: "transform, opacity",
                    }}
                    initial={{ scale: 1, opacity: 1 }}
                    animate={{ scale: 1.3, opacity: 0 }}
                    transition={{
                        duration: 1,
                        repeat: Infinity,
                    }}
                />
            )}

            {/* Glow Effect */}
            {isHovered && shouldAnimate && (
                <motion.div
                    className="absolute inset-0 rounded-2xl blur-xl pointer-events-none"
                    style={{
                        backgroundColor: `${tech.color}20`,
                        willChange: "transform, opacity",
                    }}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1.5, opacity: 0.6 }}
                    transition={{ duration: 0.3 }}
                />
            )}
        </motion.div>
    );
}

// Floating Background Orbs - Optimized
function FloatingOrbs({ isScrolling }: { isScrolling: boolean }) {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(8)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute rounded-full blur-3xl"
                    style={{
                        width: `${200 + i * 50}px`,
                        height: `${200 + i * 50}px`,
                        left: `${(i * 13) % 100}%`,
                        top: `${(i * 17) % 100}%`,
                        background: `radial-gradient(circle, ${["#00e5ff20", "#a855f720", "#10b98120", "#ec489920"][i % 4]
                            }, transparent)`,
                        willChange: isScrolling ? "auto" : "transform",
                    }}
                    animate={isScrolling ? {} : {
                        x: [0, 100, 0],
                        y: [0, -100, 0],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 15 + i * 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            ))}
        </div>
    );
}

export default function TechStack() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isScrolling, setIsScrolling] = useState(false);
    const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    // Optimized scroll detection
    useEffect(() => {
        let rafId: number;

        const handleScroll = () => {
            if (rafId) cancelAnimationFrame(rafId);

            rafId = requestAnimationFrame(() => {
                setIsScrolling(true);

                if (scrollTimeoutRef.current) {
                    clearTimeout(scrollTimeoutRef.current);
                }

                scrollTimeoutRef.current = setTimeout(() => {
                    setIsScrolling(false);
                }, 150);
            });
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
            if (rafId) cancelAnimationFrame(rafId);
            if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
        };
    }, []);

    // Throttled mouse tracking
    useEffect(() => {
        if (isScrolling) return;

        let rafId: number;
        const handleMouseMove = (e: MouseEvent) => {
            if (rafId) cancelAnimationFrame(rafId);

            rafId = requestAnimationFrame(() => {
                setMousePosition({
                    x: (e.clientX / window.innerWidth) * 100,
                    y: (e.clientY / window.innerHeight) * 100,
                });
            });
        };

        window.addEventListener("mousemove", handleMouseMove, { passive: true });
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            if (rafId) cancelAnimationFrame(rafId);
        };
    }, [isScrolling]);

    const handleHover = useCallback((index: number | null) => {
        if (!isScrolling) {
            setHoveredIndex(index);
        }
    }, [isScrolling]);

    return (
        <section className="relative py-16 sm:py-24 lg:py-32 px-4 sm:px-6 overflow-hidden">
            {/* Dark Base */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />

            {/* Floating Orbs */}
            <FloatingOrbs isScrolling={isScrolling} />

            {/* AI Grid Pattern */}
            <motion.div
                className="absolute inset-0 opacity-5"
                style={{
                    backgroundImage: `
                        radial-gradient(circle at center, rgba(0, 229, 255, 0.3) 1px, transparent 1px),
                        radial-gradient(circle at center, rgba(168, 85, 247, 0.3) 1px, transparent 1px)
                    `,
                    backgroundSize: "50px 50px, 50px 50px",
                    backgroundPosition: "0 0, 25px 25px",
                    willChange: isScrolling ? "auto" : "background-position",
                }}
                animate={isScrolling ? {} : {
                    backgroundPosition: ["0px 0px, 25px 25px", "50px 50px, 75px 75px"],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                }}
            />

            {/* Mouse-Tracking Glow */}
            {!isScrolling && (
                <motion.div
                    className="absolute w-[600px] h-[600px] rounded-full blur-[150px] pointer-events-none"
                    style={{
                        left: `${mousePosition.x}%`,
                        top: `${mousePosition.y}%`,
                        transform: "translate(-50%, -50%)",
                        background: "radial-gradient(circle, rgba(0, 229, 255, 0.15), transparent)",
                        willChange: "transform",
                    }}
                />
            )}

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 sm:mb-16 lg:mb-20"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", duration: 0.8 }}
                        className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 border border-neon-blue/30 rounded-full mb-4"
                    >
                        <Brain className="w-4 h-4 text-neon-blue" />
                        <span className="text-sm text-neon-blue font-medium">Our Technologies</span>
                        <Sparkles className="w-4 h-4 text-neon-purple" />
                    </motion.div>

                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
                        Technology <span className="holographic">Arsenal</span>
                    </h2>

                    <p className="text-base sm:text-xl text-gray-400 max-w-2xl mx-auto px-4">
                        Hover over skills to see AI-powered interactions and neural connections
                    </p>
                </motion.div>

                {/* Skills Grid with Neural Connections */}
                <div className="relative">
                    {/* Neural Connections SVG Layer */}
                    <NeuralConnections hoveredIndex={hoveredIndex} isScrolling={isScrolling} />

                    {/* Skills Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6">
                        {allTechnologies.map((tech, index) => (
                            <MagneticSkillBubble
                                key={tech.name}
                                tech={tech}
                                index={index}
                                onHover={handleHover}
                                isScrolling={isScrolling}
                            />
                        ))}
                    </div>
                </div>

                {/* AI Stats Display */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: 0.5 }}
                    className="mt-12 sm:mt-16 text-center"
                >
                    <div className="inline-flex items-center space-x-6 sm:space-x-8 px-6 sm:px-8 py-4 glass-card rounded-2xl">
                        <div className="flex items-center space-x-2">
                            <Zap className="w-5 h-5 text-neon-blue" />
                            <span className="text-2xl sm:text-3xl font-bold holographic">
                                {allTechnologies.length}
                            </span>
                            <span className="text-sm text-gray-400">Technologies</span>
                        </div>
                        <div className="w-px h-8 bg-white/10" />
                        <div className="flex items-center space-x-2">
                            <Brain className="w-5 h-5 text-neon-purple" />
                            <span className="text-2xl sm:text-3xl font-bold holographic">5</span>
                            <span className="text-sm text-gray-400">Categories</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
