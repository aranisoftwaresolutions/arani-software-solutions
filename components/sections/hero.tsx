"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Zap } from "lucide-react";
import { staggerContainer } from "@/lib/utils";
import Parallax from "@/components/animations/parallax";
import Reveal from "@/components/animations/reveal";
import MagneticButton from "@/components/ui/magnetic-button";
import AnimatedMeshBackground from "@/components/backgrounds/animated-mesh-background";
import NeuralWaveBackground from "@/components/backgrounds/neural-wave-background";
import GeometricShapes from "@/components/backgrounds/geometric-shapes";
import LiquidMorphBackground from "@/components/backgrounds/liquid-morph-background";
import MagneticCursorEffect from "@/components/backgrounds/magnetic-cursor-effect";


export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Advanced AI-Inspired Multi-Layer Backgrounds */}
            <AnimatedMeshBackground />
            <NeuralWaveBackground />
            <LiquidMorphBackground />
            <GeometricShapes />
            <MagneticCursorEffect />

            {/* Animated Background Grid */}
            <div className="absolute inset-0 brutal-grid opacity-10" />
            <div className="scan-line" />

            {/* Enhanced Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/90" />
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neon-blue/25 via-transparent to-transparent" />
            <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-neon-purple/25 via-transparent to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_black_100%)]" />

            <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="show"
                className="relative z-10 max-w-7xl mx-auto px-6 text-center"
            >
                {/* Magnetic Badge */}
                <Reveal delay={0}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        whileHover={{ scale: 1.05 }}
                        className="inline-flex items-center space-x-2 glass-effect px-6 py-3 rounded-full mb-8 backdrop-blur-xl border border-neon-blue/40 hover:border-neon-blue/80 transition-all cursor-pointer group"
                    >
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        >
                            <Sparkles className="w-4 h-4 text-neon-blue" />
                        </motion.div>
                        <span className="text-sm font-medium  from-neon-blue to-neon-cyan bg-clip-text text-transparent group-hover:from-neon-cyan group-hover:to-neon-blue transition-all">
                            Next-Gen Software Architecture
                        </span>
                    </motion.div>
                </Reveal>

                {/* Main Heading with Magnetic Effect */}
                <Reveal delay={0.2}>
                    <motion.h1
                        className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 leading-tight cursor-default"
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        Building The
                        <br />
                        <motion.span
                            className="holographic inline-block animate-gradient relative"
                            whileHover={{
                                scale: 1.05,
                                textShadow: "0 0 30px rgba(0,229,255,0.5)"
                            }}
                        >
                            Future of Tech
                            <motion.div
                                className="absolute -inset-2 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 blur-xl -z-10"
                                animate={{
                                    scale: [1, 1.2, 1],
                                    opacity: [0.3, 0.6, 0.3],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            />
                        </motion.span>
                    </motion.h1>
                </Reveal>

                {/* Subheading */}
                <Reveal delay={0.4}>
                    <motion.p
                        className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed"
                        whileHover={{ scale: 1.02, color: "#9ca3af" }}
                    >
                        Enterprise-grade mobile, web, and AI solutions powered by cutting-edge
                        architecture, cloud infrastructure, and intelligent automation.
                    </motion.p>
                </Reveal>

                {/* Enhanced CTA Buttons */}
                <Reveal delay={0.6}>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <MagneticButton>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="group px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-purple rounded-xl font-semibold text-lg flex items-center space-x-2 hover:shadow-2xl hover:shadow-neon-blue/50 transition-all relative overflow-hidden"
                            >
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-neon-purple to-neon-pink"
                                    initial={{ x: "100%" }}
                                    whileHover={{ x: 0 }}
                                    transition={{ duration: 0.3 }}
                                />
                                <span className="relative z-10">Explore Solutions</span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                            </motion.button>
                        </MagneticButton>

                        <MagneticButton>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 glass-effect rounded-xl font-semibold text-lg hover:bg-white/10 transition-all border border-white/10 backdrop-blur-xl relative overflow-hidden group"
                            >
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-neon-blue/10 to-neon-purple/10"
                                    initial={{ scale: 0, opacity: 0 }}
                                    whileHover={{ scale: 1, opacity: 1 }}
                                    transition={{ duration: 0.3 }}
                                />
                                <span className="relative z-10">View Case Studies</span>
                            </motion.button>
                        </MagneticButton>
                    </div>
                </Reveal>

                {/* Enhanced Magnetic Stats */}
                <Reveal delay={0.8}>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 max-w-4xl mx-auto">
                        {[
                            { label: "Projects Delivered", value: "500+", icon: Zap, color: "neon-blue" },
                            { label: "Enterprise Clients", value: "120+", icon: Sparkles, color: "neon-purple" },
                            { label: "Countries Served", value: "25+", icon: Zap, color: "neon-cyan" },
                            { label: "Success Rate", value: "99.8%", icon: Sparkles, color: "neon-green" },
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                whileHover={{
                                    y: -15,
                                    scale: 1.08,
                                    rotateY: 5,
                                }}
                                transition={{ type: "spring", stiffness: 300 }}
                                className="glass-card p-6 text-center cursor-pointer backdrop-blur-xl border border-white/10 relative overflow-hidden group"
                                style={{ transformStyle: "preserve-3d" }}
                            >
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-br from-neon-blue/10 to-neon-purple/10"
                                    initial={{ scale: 0, rotate: 0 }}
                                    whileHover={{ scale: 1.5, rotate: 180 }}
                                    transition={{ duration: 0.5 }}
                                />
                                <motion.div
                                    className="absolute inset-0 opacity-0 group-hover:opacity-100"
                                    animate={{
                                        background: [
                                            "radial-gradient(circle at 20% 50%, rgba(0,229,255,0.1) 0%, transparent 50%)",
                                            "radial-gradient(circle at 80% 50%, rgba(168,85,247,0.1) 0%, transparent 50%)",
                                            "radial-gradient(circle at 20% 50%, rgba(0,229,255,0.1) 0%, transparent 50%)",
                                        ],
                                    }}
                                    transition={{ duration: 3, repeat: Infinity }}
                                />
                                <motion.div
                                    whileHover={{ rotate: 360, scale: 1.2 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <stat.icon className={`w-6 h-6 text-${stat.color} mx-auto mb-3 relative z-10`} />
                                </motion.div>
                                <motion.div
                                    className="text-3xl font-bold holographic mb-2 relative z-10"
                                    whileHover={{ scale: 1.1 }}
                                >
                                    {stat.value}
                                </motion.div>
                                <div className="text-sm text-gray-400 relative z-10">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </Reveal>
            </motion.div>

            {/* Enhanced Magnetic Parallax Floating Orbs */}
            <Parallax speed={0.3}>
                <motion.div
                    className="absolute top-20 left-10 w-72 h-72 bg-neon-blue/20 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                        x: [0, 50, 0],
                        y: [0, -30, 0],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            </Parallax>
            <Parallax speed={0.5} direction="down">
                <motion.div
                    className="absolute bottom-20 right-10 w-96 h-96 bg-neon-purple/20 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.2, 0.6, 0.2],
                        x: [0, -50, 0],
                        y: [0, 30, 0],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            </Parallax>
            <Parallax speed={0.4}>
                <motion.div
                    className="absolute top-1/2 left-1/4 w-64 h-64 bg-neon-cyan/15 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.4, 1],
                        opacity: [0.2, 0.4, 0.2],
                        rotate: [0, 180, 360],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />
            </Parallax>
        </section>
    );
}
