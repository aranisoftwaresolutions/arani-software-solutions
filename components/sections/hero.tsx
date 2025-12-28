"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Zap } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/utils";
import Parallax from "@/components/animations/parallax";
import Reveal from "@/components/animations/reveal";
import MagneticButton from "@/components/ui/magnetic-button";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Animated Background Grid */}
            <div className="absolute inset-0 brutal-grid opacity-20" />
            <div className="scan-line" />

            <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="show"
                className="relative z-10 max-w-7xl mx-auto px-6 text-center"
            >
                {/* Badge */}
                <Reveal delay={0}>
                    <div className="inline-flex items-center space-x-2 glass-effect px-4 py-2 rounded-full mb-8">
                        <Sparkles className="w-4 h-4 text-neon-blue" />
                        <span className="text-sm text-gray-300">Next-Gen Software Architecture</span>
                    </div>
                </Reveal>

                {/* Main Heading */}
                <Reveal delay={0.2}>
                    <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
                        Building The
                        <br />
                        <span className="holographic">Future of Tech</span>
                    </h1>
                </Reveal>

                {/* Subheading */}
                <Reveal delay={0.4}>
                    <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
                        Enterprise-grade mobile, web, and AI solutions powered by cutting-edge
                        architecture, cloud infrastructure, and intelligent automation.
                    </p>
                </Reveal>

                {/* CTA Buttons */}
                <Reveal delay={0.6}>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <MagneticButton>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="group px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-purple rounded-xl font-semibold text-lg flex items-center space-x-2 hover:shadow-2xl hover:shadow-neon-blue/50 transition-all"
                            >
                                <span>Explore Solutions</span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </motion.button>
                        </MagneticButton>

                        <MagneticButton>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 glass-effect rounded-xl font-semibold text-lg hover:bg-white/10 transition-colors"
                            >
                                View Case Studies
                            </motion.button>
                        </MagneticButton>
                    </div>
                </Reveal>

                {/* Stats */}
                <Reveal delay={0.8}>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 max-w-4xl mx-auto">
                        {[
                            { label: "Projects Delivered", value: "500+", icon: Zap },
                            { label: "Enterprise Clients", value: "120+", icon: Sparkles },
                            { label: "Countries Served", value: "25+", icon: Zap },
                            { label: "Success Rate", value: "99.8%", icon: Sparkles },
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ y: -10, scale: 1.05 }}
                                className="glass-card p-6 text-center cursor-pointer"
                            >
                                <stat.icon className="w-6 h-6 text-neon-blue mx-auto mb-3" />
                                <div className="text-3xl font-bold holographic mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-sm text-gray-400">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </Reveal>
            </motion.div>

            {/* Parallax Floating Orbs */}
            <Parallax speed={0.3}>
                <div className="absolute top-20 left-10 w-72 h-72 bg-neon-blue/20 rounded-full blur-3xl" />
            </Parallax>
            <Parallax speed={0.5} direction="down">
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-neon-purple/20 rounded-full blur-3xl" />
            </Parallax>
        </section>
    );
}
