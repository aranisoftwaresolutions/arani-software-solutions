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
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32">
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
                className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
            >
                {/* Magnetic Badge - FIXED */}
                <Reveal delay={0}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        whileHover={{ scale: 1.05 }}
                        className="inline-flex items-center space-x-2 glass-effect px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-6 sm:mb-8 backdrop-blur-xl border border-neon-blue/40 hover:border-neon-blue/80 transition-all cursor-pointer group relative"
                    >
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        >
                            <Sparkles className="w-4 h-4 text-neon-blue" />
                        </motion.div>
                        <span className="text-xs sm:text-sm font-medium text-white group-hover:text-neon-cyan transition-colors relative z-10">
                            Next-Gen Software Architecture
                        </span>
                        {/* Optional: Add gradient overlay on hover */}
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-neon-blue/10 to-neon-cyan/10 rounded-full"
                            initial={{ opacity: 0 }}
                            whileHover={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                        />
                    </motion.div>
                </Reveal>


                {/* Main Heading with Magnetic Effect */}
                <Reveal delay={0.2}>
                    <motion.h1
                        className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold mb-4 sm:mb-6 leading-tight cursor-default px-4"
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
                                className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 blur-xl sm:blur-2xl -z-10"
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
                        className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed px-4"
                        whileHover={{ scale: 1.02, color: "#9ca3af" }}
                    >
                        Enterprise-grade mobile, web, and AI solutions powered by cutting-edge
                        architecture, cloud infrastructure, and intelligent automation.
                    </motion.p>
                </Reveal>

                {/* Enhanced CTA Buttons */}
                <Reveal delay={0.6}>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4">
                        <MagneticButton>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-neon-blue to-neon-purple rounded-xl font-semibold text-base sm:text-lg flex items-center justify-center space-x-2 hover:shadow-2xl hover:shadow-neon-blue/50 transition-all relative overflow-hidden"
                            >
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-neon-purple to-neon-pink"
                                    initial={{ x: "100%" }}
                                    whileHover={{ x: 0 }}
                                    transition={{ duration: 0.3 }}
                                />
                                <span className="relative z-10">Explore Solutions</span>
                                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                            </motion.button>
                        </MagneticButton>

                        <MagneticButton>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 glass-effect rounded-xl font-semibold text-base sm:text-lg hover:bg-white/10 transition-all border border-white/10 backdrop-blur-xl relative overflow-hidden group"
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
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mt-12 sm:mt-16 md:mt-20 max-w-4xl mx-auto px-4">
                        {[
                            { label: "Projects Delivered", value: "500+", icon: Zap, color: "neon-blue" },
                            { label: "Enterprise Clients", value: "120+", icon: Sparkles, color: "neon-purple" },
                            { label: "Countries Served", value: "25+", icon: Zap, color: "neon-cyan" },
                            { label: "Success Rate", value: "99.8%", icon: Sparkles, color: "neon-green" },
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                whileHover={{
                                    y: -10,
                                    scale: 1.05,
                                }}
                                transition={{ type: "spring", stiffness: 300 }}
                                className="glass-card p-4 sm:p-6 text-center cursor-pointer backdrop-blur-xl border border-white/10 relative overflow-hidden group"
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
                                    <stat.icon className={`w-5 h-5 sm:w-6 sm:h-6 text-${stat.color} mx-auto mb-2 sm:mb-3 relative z-10`} />
                                </motion.div>
                                <motion.div
                                    className="text-2xl sm:text-3xl font-bold holographic mb-1 sm:mb-2 relative z-10"
                                    whileHover={{ scale: 1.1 }}
                                >
                                    {stat.value}
                                </motion.div>
                                <div className="text-xs sm:text-sm text-gray-400 relative z-10">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </Reveal>
            </motion.div>

            {/* Enhanced Magnetic Parallax Floating Orbs */}
            <Parallax speed={0.3}>
                <motion.div
                    className="absolute top-10 sm:top-20 left-5 sm:left-10 w-48 sm:w-56 md:w-72 h-48 sm:h-56 md:h-72 bg-neon-blue/20 rounded-full blur-2xl sm:blur-3xl pointer-events-none"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                        x: [0, 30, 0],
                        y: [0, -20, 0],
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
                    className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-56 sm:w-72 md:w-96 h-56 sm:h-72 md:h-96 bg-neon-purple/20 rounded-full blur-2xl sm:blur-3xl pointer-events-none"
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.2, 0.6, 0.2],
                        x: [0, -30, 0],
                        y: [0, 20, 0],
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
                    className="absolute top-1/3 sm:top-1/2 left-1/4 w-40 sm:w-48 md:w-64 h-40 sm:h-48 md:h-64 bg-neon-cyan/15 rounded-full blur-2xl sm:blur-3xl pointer-events-none"
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
