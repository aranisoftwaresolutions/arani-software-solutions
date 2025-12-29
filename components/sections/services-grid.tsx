"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Smartphone, Globe, Brain, Code, Cloud, Shield, ArrowRight, Zap } from "lucide-react";
import { useState } from "react";
import Reveal from "@/components/animations/reveal";

const services = [
    {
        icon: Smartphone,
        title: "Native Mobile Development",
        description: "iOS & Android apps with native performance, seamless UX, and cross-platform excellence.",
        gradient: "from-neon-blue to-neon-cyan",
        tech: ["React Native", "Swift", "Kotlin", "Flutter"],
        stats: { label: "Apps Delivered", value: "150+" },
    },
    {
        icon: Globe,
        title: "Web Application Development",
        description: "Responsive, scalable web apps using modern frameworks and progressive enhancement.",
        gradient: "from-neon-purple to-neon-pink",
        tech: ["Next.js", "React", "Vue", "Angular"],
        stats: { label: "Websites Built", value: "200+" },
    },
    {
        icon: Brain,
        title: "AI Automation & Intelligence",
        description: "Machine learning pipelines, NLP systems, and intelligent automation solutions.",
        gradient: "from-neon-green to-neon-cyan",
        tech: ["TensorFlow", "PyTorch", "OpenAI", "LangChain"],
        stats: { label: "AI Models", value: "50+" },
    },
    {
        icon: Code,
        title: "MERN + TypeScript Stack",
        description: "Full-stack development with MongoDB, Express, React, Node.js, and TypeScript.",
        gradient: "from-neon-pink to-neon-purple",
        tech: ["MongoDB", "Express", "React", "Node.js"],
        stats: { label: "Projects", value: "180+" },
    },
    {
        icon: Cloud,
        title: "Cloud Architecture (AWS)",
        description: "Multi-cloud & hybrid infrastructure with AWS, auto-scaling, and disaster recovery.",
        gradient: "from-neon-cyan to-neon-blue",
        tech: ["AWS", "Azure", "GCP", "Docker"],
        stats: { label: "Deployments", value: "300+" },
    },
    {
        icon: Shield,
        title: "DevOps & Security",
        description: "CI/CD pipelines, containerization, Kubernetes, and enterprise-grade security.",
        gradient: "from-neon-purple to-neon-blue",
        tech: ["Kubernetes", "Jenkins", "GitHub Actions", "Terraform"],
        stats: { label: "Pipelines", value: "120+" },
    },
];

// Enhanced Magnetic Card Component
function MagneticServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
    const [isHovered, setIsHovered] = useState(false);

    // Mouse position tracking for 3D tilt effect
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
    const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7.5deg", "-7.5deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7.5deg", "7.5deg"]);

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
        <Reveal delay={index * 0.1}>
            <motion.div
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={handleMouseLeave}
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                }}
                whileHover={{ scale: 1.03, z: 50 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="glass-card p-6 sm:p-8 group cursor-pointer relative overflow-hidden h-full"
            >
                {/* Animated Gradient Background */}
                <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-3xl`}
                    animate={isHovered ? {
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 0],
                    } : {}}
                    transition={{ duration: 3, repeat: Infinity }}
                />

                {/* Particle Effects on Hover */}
                {isHovered && (
                    <div className="absolute inset-0 pointer-events-none">
                        {[...Array(8)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute w-1 h-1 bg-neon-blue rounded-full"
                                initial={{
                                    x: "50%",
                                    y: "50%",
                                    opacity: 1,
                                }}
                                animate={{
                                    x: `${50 + Math.cos((i * Math.PI) / 4) * 100}%`,
                                    y: `${50 + Math.sin((i * Math.PI) / 4) * 100}%`,
                                    opacity: 0,
                                    scale: [1, 2, 0],
                                }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    delay: i * 0.1,
                                }}
                                style={{
                                    boxShadow: "0 0 10px rgba(0, 229, 255, 0.8)",
                                }}
                            />
                        ))}
                    </div>
                )}

                {/* Glowing Corner Accent */}
                <motion.div
                    className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.gradient} rounded-full blur-3xl opacity-0 group-hover:opacity-30`}
                    animate={isHovered ? {
                        scale: [1, 1.5, 1],
                    } : {}}
                    transition={{ duration: 2, repeat: Infinity }}
                />

                {/* Content Container with 3D Transform */}
                <div style={{ transform: "translateZ(50px)" }} className="relative z-10">
                    {/* Icon with Advanced Animation */}
                    <motion.div
                        className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 sm:mb-6 relative`}
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6, type: "spring" }}
                        style={{
                            boxShadow: isHovered ? "0 0 40px rgba(0, 229, 255, 0.6)" : "none",
                        }}
                    >
                        <service.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />

                        {/* Orbiting Ring */}
                        <motion.div
                            className="absolute inset-0 border-2 border-white/30 rounded-2xl"
                            animate={isHovered ? { rotate: 360 } : {}}
                            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        />
                    </motion.div>

                    {/* Stats Badge */}
                    <motion.div
                        className="absolute top-4 right-4 glass-effect px-3 py-1 rounded-full flex items-center space-x-1"
                        initial={{ opacity: 0, scale: 0 }}
                        whileHover={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Zap className="w-3 h-3 text-neon-blue" />
                        <span className="text-xs font-bold text-neon-blue">{service.stats.value}</span>
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-neon-blue group-hover:to-neon-purple transition-all">
                        {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-gray-400 leading-relaxed mb-4 sm:mb-6">
                        {service.description}
                    </p>

                    {/* Tech Stack Tags */}
                    <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                        {service.tech.map((tech, i) => (
                            <motion.span
                                key={i}
                                className="px-2 sm:px-3 py-1 bg-white/5 rounded-lg text-xs text-gray-400 border border-white/10"
                                whileHover={{
                                    scale: 1.1,
                                    backgroundColor: "rgba(0, 229, 255, 0.1)",
                                    borderColor: "rgba(0, 229, 255, 0.5)",
                                    color: "#00e5ff",
                                }}
                            >
                                {tech}
                            </motion.span>
                        ))}
                    </div>

                    {/* Stats Display */}
                    <div className="flex items-center justify-between pt-4 border-t border-white/10">
                        <div>
                            <p className="text-xs text-gray-500 mb-1">{service.stats.label}</p>
                            <p className={`text-lg sm:text-xl font-bold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                                {service.stats.value}
                            </p>
                        </div>

                        {/* Learn More Button */}
                        <motion.button
                            className="flex items-center space-x-2 text-neon-blue font-medium text-sm"
                            whileHover={{ x: 5 }}
                        >
                            <span>Explore</span>
                            <ArrowRight className="w-4 h-4" />
                        </motion.button>
                    </div>
                </div>

                {/* Animated Border on Hover */}
                <motion.div
                    className="absolute inset-0 rounded-3xl"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    style={{
                        background: `linear-gradient(45deg, transparent, rgba(0, 229, 255, 0.2), transparent)`,
                        backgroundSize: "200% 200%",
                    }}
                    animate={{
                        backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
                    }}
                />
            </motion.div>
        </Reveal>
    );
}

export default function ServicesGrid() {
    return (
        <section className="relative py-16 sm:py-24 lg:py-32 px-4 sm:px-6 overflow-hidden">
            {/* Animated Grid Background */}
            <div className="absolute inset-0 brutal-grid opacity-10" />

            {/* Floating Gradient Orbs */}
            <motion.div
                className="absolute top-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-neon-blue/10 rounded-full blur-3xl"
                animate={{
                    scale: [1, 1.2, 1],
                    x: [0, 50, 0],
                    y: [0, -50, 0],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
            <motion.div
                className="absolute bottom-1/4 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-neon-purple/10 rounded-full blur-3xl"
                animate={{
                    scale: [1.2, 1, 1.2],
                    x: [0, -50, 0],
                    y: [0, 50, 0],
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Section Header */}
                <Reveal>
                    <div className="text-center mb-12 sm:mb-16 lg:mb-20">
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", duration: 0.8 }}
                            className="inline-block mb-4"
                        >
                            <span className="px-4 py-2 bg-neon-blue/10 border border-neon-blue/30 rounded-full text-sm text-neon-blue font-medium">
                                Our Expertise
                            </span>
                        </motion.div>

                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
                            Core <span className="holographic">Capabilities</span>
                        </h2>

                        <p className="text-base sm:text-xl text-gray-400 max-w-2xl mx-auto px-4">
                            Enterprise-scale solutions engineered with precision, performance, and future-proof architecture.
                        </p>
                    </div>
                </Reveal>

                {/* Services Grid - Responsive */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                    {services.map((service, index) => (
                        <MagneticServiceCard key={index} service={service} index={index} />
                    ))}
                </div>

                {/* CTA Section */}
                <Reveal delay={0.6}>
                    <motion.div
                        className="text-center mt-12 sm:mt-16 lg:mt-20"
                        whileHover={{ scale: 1.02 }}
                    >
                        <motion.button
                            className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-neon-blue to-neon-purple rounded-xl font-semibold text-sm sm:text-base flex items-center space-x-2 mx-auto hover:shadow-2xl hover:shadow-neon-blue/50 transition-all"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span>View All Services</span>
                            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                        </motion.button>
                    </motion.div>
                </Reveal>
            </div>
        </section>
    );
}
