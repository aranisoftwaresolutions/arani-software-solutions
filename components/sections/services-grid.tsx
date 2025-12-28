"use client";

import { motion } from "framer-motion";
import { Smartphone, Globe, Brain, Code, Cloud, Shield } from "lucide-react";
import Reveal from "@/components/animations/reveal";
import MagneticButton from "@/components/ui/magnetic-button";

const services = [
    {
        icon: Smartphone,
        title: "Native Mobile Development",
        description: "iOS & Android apps with native performance, seamless UX, and cross-platform excellence.",
        gradient: "from-neon-blue to-neon-cyan",
    },
    {
        icon: Globe,
        title: "Web Application Development",
        description: "Responsive, scalable web apps using modern frameworks and progressive enhancement.",
        gradient: "from-neon-purple to-neon-pink",
    },
    {
        icon: Brain,
        title: "AI Automation & Intelligence",
        description: "Machine learning pipelines, NLP systems, and intelligent automation solutions.",
        gradient: "from-neon-green to-neon-cyan",
    },
    {
        icon: Code,
        title: "MERN + TypeScript Stack",
        description: "Full-stack development with MongoDB, Express, React, Node.js, and TypeScript.",
        gradient: "from-neon-pink to-neon-purple",
    },
    {
        icon: Cloud,
        title: "Cloud Architecture (AWS)",
        description: "Multi-cloud & hybrid infrastructure with AWS, auto-scaling, and disaster recovery.",
        gradient: "from-neon-cyan to-neon-blue",
    },
    {
        icon: Shield,
        title: "DevOps & Security",
        description: "CI/CD pipelines, containerization, Kubernetes, and enterprise-grade security.",
        gradient: "from-neon-purple to-neon-blue",
    },
];

export default function ServicesGrid() {
    return (
        <section className="relative py-32 px-6 overflow-hidden">
            <div className="absolute inset-0 brutal-grid opacity-10" />

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Section Header */}
                <Reveal>
                    <div className="text-center mb-16">
                        <h2 className="text-5xl md:text-6xl font-bold mb-6">
                            Core <span className="holographic">Capabilities</span>
                        </h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            Enterprise-scale solutions engineered with precision, performance, and future-proof architecture.
                        </p>
                    </div>
                </Reveal>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <Reveal key={index} delay={index * 0.1}>
                            <MagneticButton>
                                <motion.div
                                    whileHover={{ y: -10, scale: 1.02 }}
                                    className="glass-card p-8 group cursor-pointer relative overflow-hidden h-full"
                                >
                                    {/* Animated Gradient Border */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`} />

                                    {/* Icon */}
                                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                        <service.icon className="w-7 h-7 text-white" />
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-2xl font-bold mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-neon-blue group-hover:to-neon-purple transition-all">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-400 leading-relaxed">
                                        {service.description}
                                    </p>

                                    {/* Hover Arrow */}
                                    <motion.div
                                        initial={{ opacity: 0, x: -10 }}
                                        whileHover={{ opacity: 1, x: 0 }}
                                        className="mt-6 flex items-center text-neon-blue font-medium"
                                    >
                                        <span>Learn more</span>
                                        <motion.span
                                            animate={{ x: [0, 5, 0] }}
                                            transition={{ repeat: Infinity, duration: 1.5 }}
                                            className="ml-2"
                                        >
                                            →
                                        </motion.span>
                                    </motion.div>
                                </motion.div>
                            </MagneticButton>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
