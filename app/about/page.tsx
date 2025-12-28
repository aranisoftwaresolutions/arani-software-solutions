"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/utils";
import Footer from "@/components/sections/footer";
import { Award, Users, Globe, Zap, Target, Rocket } from "lucide-react";
import Sphere3D from "@/components/animations/3d-sphere";

export default function AboutPage() {
    return (
        <>
            <section className="relative min-h-screen pt-32 pb-20 px-6 overflow-hidden">
                <div className="absolute inset-0 brutal-grid opacity-10" />
                <div className="scan-line" />

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="show"
                    className="relative z-10 max-w-7xl mx-auto"
                >
                    <motion.div variants={fadeInUp} className="text-center mb-20">
                        <h1 className="text-6xl md:text-7xl font-bold mb-6">
                            About <span className="holographic">Arani</span>
                        </h1>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                            {"We're"} not just {"developers—we're"} architects of digital transformation,
                            pioneering the future with AI-powered solutions and enterprise-scale innovation.
                        </p>
                    </motion.div>

                    {/* 3D Sphere */}
                    <motion.div variants={fadeInUp} className="mb-20">
                        <Sphere3D />
                    </motion.div>

                    {/* Mission & Vision */}
                    <div className="grid md:grid-cols-2 gap-8 mb-20">
                        <motion.div variants={fadeInUp} className="glass-card p-10">
                            <Target className="w-12 h-12 text-neon-blue mb-6" />
                            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                            <p className="text-gray-400 leading-relaxed">
                                To empower businesses worldwide with cutting-edge technology solutions
                                that drive innovation, efficiency, and sustainable growth through AI,
                                cloud infrastructure, and next-generation software architecture.
                            </p>
                        </motion.div>

                        <motion.div variants={fadeInUp} className="glass-card p-10">
                            <Rocket className="w-12 h-12 text-neon-purple mb-6" />
                            <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
                            <p className="text-gray-400 leading-relaxed">
                                To become the global standard for enterprise software excellence,
                                recognized as the go-to partner for companies seeking transformative
                                digital solutions powered by artificial intelligence and cloud-native architecture.
                            </p>
                        </motion.div>
                    </div>

                    {/* Stats */}
                    <motion.div variants={fadeInUp} className="glass-card p-10 mb-20">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {[
                                { icon: Award, value: "15+", label: "Years Experience" },
                                { icon: Users, value: "200+", label: "Expert Engineers" },
                                { icon: Globe, value: "50+", label: "Countries Served" },
                                { icon: Zap, value: "500+", label: "Projects Delivered" },
                            ].map((stat, index) => (
                                <div key={index} className="text-center">
                                    <stat.icon className="w-10 h-10 text-neon-blue mx-auto mb-4" />
                                    <div className="text-4xl font-bold holographic mb-2">{stat.value}</div>
                                    <div className="text-sm text-gray-400">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Values */}
                    <motion.div variants={fadeInUp} className="mb-20">
                        <h2 className="text-4xl font-bold text-center mb-12">
                            Our <span className="holographic">Core Values</span>
                        </h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            {[
                                {
                                    title: "Innovation First",
                                    description: "We push boundaries and embrace emerging technologies to deliver tomorrow's solutions today.",
                                },
                                {
                                    title: "Excellence Always",
                                    description: "Quality is non-negotiable. Every line of code, every architecture decision reflects our commitment to perfection.",
                                },
                                {
                                    title: "Client Success",
                                    description: "Your success is our success. We partner with you to achieve measurable, transformative results.",
                                },
                            ].map((value, index) => (
                                <div key={index} className="glass-card p-8">
                                    <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                                    <p className="text-gray-400 leading-relaxed">{value.description}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </section>
            <Footer />
        </>
    );
}
