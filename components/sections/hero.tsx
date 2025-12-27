"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Zap } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/utils";

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
                <motion.div variants={fadeInUp} className="inline-flex items-center space-x-2 glass-effect px-4 py-2 rounded-full mb-8">
                    <Sparkles className="w-4 h-4 text-neon-blue" />
                    <span className="text-sm text-gray-300">Next-Gen Software Architecture</span>
                </motion.div>

                {/* Main Heading */}
                <motion.h1
                    variants={fadeInUp}
                    className="text-6xl md:text-8xl font-bold mb-6 leading-tight"
                >
                    Building The
                    <br />
                    <span className="holographic">Future of Tech</span>
                </motion.h1>

                {/* Subheading */}
                <motion.p
                    variants={fadeInUp}
                    className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed"
                >
                    Enterprise-grade mobile, web, and AI solutions powered by cutting-edge
                    architecture, cloud infrastructure, and intelligent automation.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    variants={fadeInUp}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <motion.button
                        whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0, 212, 255, 0.6)" }}
                        whileTap={{ scale: 0.95 }}
                        className="group px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-purple rounded-xl font-semibold text-lg flex items-center space-x-2 hover:shadow-2xl transition-all"
                    >
                        <span>Explore Solutions</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </motion.button>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-4 glass-effect rounded-xl font-semibold text-lg hover:bg-white/10 transition-colors"
                    >
                        View Case Studies
                    </motion.button>
                </motion.div>

                {/* Stats */}
                <motion.div
                    variants={fadeInUp}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 max-w-4xl mx-auto"
                >
                    {[
                        { label: "Projects Delivered", value: "500+", icon: Zap },
                        { label: "Enterprise Clients", value: "120+", icon: Sparkles },
                        { label: "Countries Served", value: "25+", icon: Zap },
                        { label: "Success Rate", value: "99.8%", icon: Sparkles },
                    ].map((stat, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -10 }}
                            className="glass-card p-6 text-center"
                        >
                            <stat.icon className="w-6 h-6 text-neon-blue mx-auto mb-3" />
                            <div className="text-3xl font-bold holographic mb-2">
                                {stat.value}
                            </div>
                            <div className="text-sm text-gray-400">{stat.label}</div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>

            {/* Floating Orbs */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-neon-blue/20 rounded-full blur-3xl animate-pulse-slow" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-neon-purple/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "1s" }} />
        </section>
    );
}
