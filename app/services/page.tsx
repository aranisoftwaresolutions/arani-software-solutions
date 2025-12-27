"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/utils";
import Footer from "@/components/sections/footer";
import { Code2, Smartphone, Brain, Cloud, Layers, Cpu } from "lucide-react";

const services = [
    {
        icon: Smartphone,
        title: "Native Mobile Development",
        description: "Build high-performance iOS and Android applications",
        features: [
            "Swift & Kotlin native development",
            "React Native cross-platform apps",
            "App Store optimization",
            "Push notifications & real-time sync",
            "Offline-first architecture",
        ],
    },
    {
        icon: Code2,
        title: "Web Application Development",
        description: "Modern, scalable web applications with cutting-edge tech",
        features: [
            "Next.js & React applications",
            "Progressive Web Apps (PWA)",
            "Server-side rendering (SSR)",
            "API development & integration",
            "Performance optimization",
        ],
    },
    {
        icon: Brain,
        title: "AI & Machine Learning",
        description: "Intelligent systems that learn and adapt",
        features: [
            "Custom ML model development",
            "Natural Language Processing",
            "Computer vision solutions",
            "Predictive analytics",
            "AI chatbots & automation",
        ],
    },
    {
        icon: Layers,
        title: "MERN Stack Development",
        description: "Full-stack JavaScript with TypeScript",
        features: [
            "MongoDB database design",
            "Express.js REST & GraphQL APIs",
            "React frontend architecture",
            "Node.js backend systems",
            "TypeScript type safety",
        ],
    },
    {
        icon: Cloud,
        title: "Cloud Architecture",
        description: "Scalable, reliable cloud infrastructure",
        features: [
            "AWS, Azure, GCP deployment",
            "Auto-scaling & load balancing",
            "Multi-region redundancy",
            "Serverless architecture",
            "Cost optimization",
        ],
    },
    {
        icon: Cpu,
        title: "DevOps & CI/CD",
        description: "Automated deployment and infrastructure",
        features: [
            "Docker containerization",
            "Kubernetes orchestration",
            "GitHub Actions / Jenkins",
            "Infrastructure as Code (IaC)",
            "Monitoring & logging",
        ],
    },
];

export default function ServicesPage() {
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
                    {/* Header */}
                    <motion.div variants={fadeInUp} className="text-center mb-20">
                        <h1 className="text-6xl md:text-7xl font-bold mb-6">
                            Our <span className="holographic">Services</span>
                        </h1>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                            Comprehensive technology solutions designed for enterprise scale,
                            performance, and innovation.
                        </p>
                    </motion.div>

                    {/* Services */}
                    <div className="space-y-12">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                                whileHover={{ scale: 1.01 }}
                                className="glass-card p-10 grid md:grid-cols-3 gap-8"
                            >
                                <div className="md:col-span-1">
                                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-neon-blue to-neon-purple flex items-center justify-center mb-6">
                                        <service.icon className="w-8 h-8 text-white" />
                                    </div>
                                    <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                                    <p className="text-gray-400">{service.description}</p>
                                </div>

                                <div className="md:col-span-2">
                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {service.features.map((feature, fIndex) => (
                                            <motion.li
                                                key={fIndex}
                                                initial={{ opacity: 0, x: -20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ delay: fIndex * 0.1 }}
                                                className="flex items-start space-x-3 p-3 rounded-lg hover:bg-white/5 transition-colors"
                                            >
                                                <div className="w-1.5 h-1.5 rounded-full bg-neon-blue mt-2 flex-shrink-0" />
                                                <span className="text-gray-300">{feature}</span>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </section>
            <Footer />
        </>
    );
}
