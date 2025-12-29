"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Brain, Cpu, Network, Zap, Eye, MessageSquare, ArrowRight, Sparkles } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/utils";
import { useState, useEffect } from "react";

const aiFeatures = [
    {
        icon: Brain,
        title: "Neural Intelligence",
        description: "Advanced neural networks that learn and adapt to your business needs",
        stats: "99.8% Accuracy",
        gradient: "from-neon-blue to-neon-cyan",
        color: "neon-blue",
    },
    {
        icon: Cpu,
        title: "Edge Computing",
        description: "Process data at lightning speed with distributed AI at the edge",
        stats: "<10ms Latency",
        gradient: "from-neon-purple to-neon-pink",
        color: "neon-purple",
    },
    {
        icon: Network,
        title: "Federated Learning",
        description: "Train AI models across decentralized data while preserving privacy",
        stats: "100% Private",
        gradient: "from-neon-green to-neon-cyan",
        color: "neon-green",
    },
    {
        icon: Zap,
        title: "Real-time Processing",
        description: "Analyze millions of data points in real-time with AI acceleration",
        stats: "10M ops/sec",
        gradient: "from-neon-cyan to-neon-blue",
        color: "neon-cyan",
    },
    {
        icon: Eye,
        title: "Computer Vision",
        description: "Advanced image recognition and video analysis powered by deep learning",
        stats: "98% Detection",
        gradient: "from-neon-pink to-neon-purple",
        color: "neon-pink",
    },
    {
        icon: MessageSquare,
        title: "NLP & Conversational AI",
        description: "Build intelligent chatbots with natural language understanding",
        stats: "50+ Languages",
        gradient: "from-neon-purple to-neon-blue",
        color: "neon-purple",
    },
];

// Neural Network Background Component
function NeuralNetworkBackground() {
    const nodes = [
        { x: 15, y: 20 }, { x: 35, y: 15 }, { x: 55, y: 25 },
        { x: 75, y: 18 }, { x: 20, y: 50 }, { x: 40, y: 60 },
        { x: 60, y: 55 }, { x: 80, y: 65 }, { x: 25, y: 80 },
        { x: 50, y: 85 }, { x: 75, y: 82 },
    ];

    const connections = [
        [0, 1], [1, 2], [2, 3], [0, 4], [4, 5], [5, 6],
        [6, 7], [1, 5], [2, 6], [4, 8], [5, 9], [6, 10],
    ];

    return (
        <svg className="absolute inset-0 w-full h-full opacity-20">
            {/* Animated Connections */}
            {connections.map(([start, end], index) => (
                <motion.line
                    key={index}
                    x1={`${nodes[start].x}%`}
                    y1={`${nodes[start].y}%`}
                    x2={`${nodes[end].x}%`}
                    y2={`${nodes[end].y}%`}
                    stroke="url(#neuralGradient)"
                    strokeWidth="2"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{
                        pathLength: [0, 1, 0],
                        opacity: [0, 0.6, 0],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: index * 0.2,
                        ease: "easeInOut",
                    }}
                />
            ))}

            {/* Animated Nodes */}
            {nodes.map((node, index) => (
                <motion.circle
                    key={index}
                    cx={`${node.x}%`}
                    cy={`${node.y}%`}
                    r="6"
                    fill="url(#nodeGradient)"
                    initial={{ scale: 0 }}
                    animate={{
                        scale: [0.8, 1.2, 0.8],
                        opacity: [0.4, 1, 0.4],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.15,
                    }}
                    style={{
                        filter: "drop-shadow(0 0 8px rgba(0, 229, 255, 0.6))",
                    }}
                />
            ))}

            <defs>
                <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00e5ff" />
                    <stop offset="50%" stopColor="#a855f7" />
                    <stop offset="100%" stopColor="#10b981" />
                </linearGradient>
                <radialGradient id="nodeGradient">
                    <stop offset="0%" stopColor="#00e5ff" />
                    <stop offset="100%" stopColor="#a855f7" />
                </radialGradient>
            </defs>
        </svg>
    );
}

// Floating Particles Component
function FloatingParticles() {
    const particles = Array.from({ length: 30 }, (_, i) => ({
        id: i,
        x: (i * 13.7) % 100,
        y: (i * 19.3) % 100,
        size: (i % 3) + 1,
        duration: 8 + (i % 5),
    }));

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {particles.map((particle) => (
                <motion.div
                    key={particle.id}
                    className="absolute bg-neon-blue rounded-full"
                    style={{
                        left: `${particle.x}%`,
                        top: `${particle.y}%`,
                        width: particle.size,
                        height: particle.size,
                        boxShadow: "0 0 10px rgba(0, 229, 255, 0.6)",
                    }}
                    animate={{
                        y: [0, -40, 0],
                        opacity: [0.2, 0.6, 0.2],
                        scale: [1, 1.5, 1],
                    }}
                    transition={{
                        duration: particle.duration,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            ))}
        </div>
    );
}

// Enhanced Magnetic Card
function MagneticAICard({ feature, index }: { feature: typeof aiFeatures[0]; index: number }) {
    const [isHovered, setIsHovered] = useState(false);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
    const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
        setIsHovered(false);
    };

    return (
        <motion.div
            variants={fadeInUp}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            whileHover={{ scale: 1.05, z: 50 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="glass-card p-6 sm:p-8 group relative overflow-hidden cursor-pointer"
        >
            {/* Animated Gradient Background */}
            <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-20`}
                animate={isHovered ? {
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360],
                } : {}}
                transition={{ duration: 4, repeat: Infinity }}
            />

            {/* Energy Ripples */}
            {isHovered && (
                <motion.div
                    className="absolute inset-0"
                    initial={{ scale: 0, opacity: 1 }}
                    animate={{ scale: 2, opacity: 0 }}
                    transition={{ duration: 1, repeat: Infinity }}
                >
                    <div className={`w-full h-full border-2 border-${feature.color} rounded-3xl`} />
                </motion.div>
            )}

            {/* Circuit Lines Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-neon-blue to-transparent" />
                <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-neon-purple to-transparent" />
                <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-cyan to-transparent" />
                <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-pink to-transparent" />
            </div>

            {/* Content with 3D Transform */}
            <div style={{ transform: "translateZ(50px)" }} className="relative z-10">
                {/* Icon Container */}
                <motion.div
                    className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 sm:mb-6 relative`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                    style={{
                        boxShadow: isHovered ? `0 0 40px rgba(0, 229, 255, 0.6)` : "none",
                    }}
                >
                    <feature.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />

                    {/* Orbiting Particles */}
                    {isHovered && [...Array(3)].map((_, i) => {
                        const angle = (i * 120 * Math.PI) / 180;
                        return (
                            <motion.div
                                key={i}
                                className={`absolute w-2 h-2 bg-${feature.color} rounded-full`}
                                animate={{
                                    x: [
                                        Math.cos(angle) * 35,
                                        Math.cos(angle + Math.PI) * 35,
                                    ],
                                    y: [
                                        Math.sin(angle) * 35,
                                        Math.sin(angle + Math.PI) * 35,
                                    ],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                                style={{
                                    boxShadow: "0 0 10px currentColor",
                                }}
                            />
                        );
                    })}
                </motion.div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-neon-blue group-hover:to-neon-purple transition-all">
                    {feature.title}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-gray-400 mb-4 leading-relaxed">
                    {feature.description}
                </p>

                {/* Stats Bar */}
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <span className="text-xs sm:text-sm text-gray-500">Performance</span>
                    <motion.span
                        className={`text-sm sm:text-base font-bold bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`}
                        animate={isHovered ? { scale: [1, 1.1, 1] } : {}}
                        transition={{ duration: 0.5 }}
                    >
                        {feature.stats}
                    </motion.span>
                </div>

                {/* Progress Indicator */}
                <motion.div
                    className="mt-4 h-1 bg-white/10 rounded-full overflow-hidden"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                >
                    <motion.div
                        className={`h-full bg-gradient-to-r ${feature.gradient}`}
                        initial={{ width: "0%" }}
                        whileHover={{ width: "100%" }}
                        transition={{ duration: 0.8 }}
                    />
                </motion.div>
            </div>

            {/* Glowing Corner */}
            <motion.div
                className={`absolute -bottom-16 -right-16 w-40 h-40 bg-gradient-to-br ${feature.gradient} rounded-full blur-3xl opacity-0 group-hover:opacity-40`}
                animate={isHovered ? {
                    scale: [1, 1.3, 1],
                } : {}}
                transition={{ duration: 2, repeat: Infinity }}
            />
        </motion.div>
    );
}

export default function AIShowcase() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth) * 100,
                y: (e.clientY / window.innerHeight) * 100,
            });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <section className="relative py-16 sm:py-24 lg:py-32 px-4 sm:px-6 overflow-hidden">
            {/* Dynamic Background Layers */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />

            {/* Neural Network Background */}
            <NeuralNetworkBackground />

            {/* Floating Particles */}
            <FloatingParticles />

            {/* Animated Grid */}
            <motion.div
                className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(0, 229, 255, 0.1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(0, 229, 255, 0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: "50px 50px",
                }}
                animate={{
                    backgroundPosition: ["0px 0px", "50px 50px"],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                }}
            />

            {/* Gradient Orbs with Mouse Tracking */}
            <motion.div
                className="absolute w-[600px] h-[600px] bg-neon-blue/15 rounded-full blur-[150px]"
                style={{
                    left: `${mousePosition.x}%`,
                    top: `${mousePosition.y}%`,
                    transform: "translate(-50%, -50%)",
                }}
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
            <motion.div
                className="absolute w-[700px] h-[700px] bg-neon-purple/15 rounded-full blur-[150px]"
                style={{
                    left: `${100 - mousePosition.x}%`,
                    top: `${100 - mousePosition.y}%`,
                    transform: "translate(-50%, -50%)",
                }}
                animate={{
                    scale: [1.2, 1, 1.2],
                    opacity: [0.4, 0.6, 0.4],
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="relative z-10 max-w-7xl mx-auto"
            >
                {/* Section Header */}
                <motion.div variants={fadeInUp} className="text-center mb-12 sm:mb-16 lg:mb-20">
                    <motion.div
                        className="inline-flex items-center space-x-2 glass-effect px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-4 sm:mb-6"
                        whileHover={{ scale: 1.05 }}
                    >
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        >
                            <Brain className="w-4 h-4 sm:w-5 sm:h-5 text-neon-purple" />
                        </motion.div>
                        <span className="text-xs sm:text-sm font-medium">AI-Powered Innovation</span>
                        <Sparkles className="w-4 h-4 text-neon-blue" />
                    </motion.div>

                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
                        Intelligence That <span className="holographic">Transforms</span>
                    </h2>

                    <p className="text-base sm:text-xl text-gray-400 max-w-3xl mx-auto px-4">
                        Harness the power of artificial intelligence to automate, optimize, and revolutionize your operations.
                    </p>
                </motion.div>

                {/* AI Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                    {aiFeatures.map((feature, index) => (
                        <MagneticAICard key={index} feature={feature} index={index} />
                    ))}
                </div>

                {/* AI Metrics Dashboard */}
                <motion.div
                    variants={fadeInUp}
                    className="mt-12 sm:mt-16 lg:mt-20 glass-card p-6 sm:p-10 relative overflow-hidden"
                >
                    {/* Animated Background */}
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-neon-blue/5 via-neon-purple/5 to-neon-green/5"
                        animate={{
                            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                        }}
                        transition={{
                            duration: 10,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        style={{
                            backgroundSize: "200% 200%",
                        }}
                    />

                    <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                        {[
                            { value: "2.5B+", label: "Parameters Trained", icon: Brain },
                            { value: "500ms", label: "Avg Response Time", icon: Zap },
                            { value: "99.9%", label: "Uptime SLA", icon: Network },
                            { value: "24/7", label: "AI Monitoring", icon: Eye },
                        ].map((metric, index) => (
                            <motion.div
                                key={index}
                                className="text-center"
                                whileHover={{ scale: 1.05, y: -5 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <motion.div
                                    className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 mb-3"
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <metric.icon className="w-6 h-6 text-neon-blue" />
                                </motion.div>

                                <motion.div
                                    className="text-3xl sm:text-4xl font-bold holographic mb-2"
                                    animate={{
                                        textShadow: [
                                            "0 0 20px rgba(0, 229, 255, 0.5)",
                                            "0 0 40px rgba(168, 85, 247, 0.5)",
                                            "0 0 20px rgba(0, 229, 255, 0.5)",
                                        ],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        delay: index * 0.2,
                                    }}
                                >
                                    {metric.value}
                                </motion.div>

                                <div className="text-xs sm:text-sm text-gray-400">{metric.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* CTA Button */}
                <motion.div
                    variants={fadeInUp}
                    className="text-center mt-12 sm:mt-16"
                >
                    <motion.button
                        className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-neon-blue to-neon-purple rounded-xl font-semibold text-sm sm:text-base flex items-center space-x-2 mx-auto"
                        whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(0, 229, 255, 0.6)" }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <span>Explore AI Solutions</span>
                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                    </motion.button>
                </motion.div>
            </motion.div>
        </section>
    );
}
