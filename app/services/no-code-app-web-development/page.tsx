"use client";

import { motion } from "framer-motion";
import { Code, Smartphone, Zap, Layers, Globe, Rocket, ArrowRight, Star, CheckCircle } from "lucide-react";
import Footer from "@/components/sections/footer";
import Link from "next/link";
import MagneticButton from "@/components/services/MagneticButton";
import FloatingOrbs from "@/components/services/FloatingOrbs";

export default function NoCodeDevelopmentPage() {
    const solutions = [
        { title: "Visual Development", desc: "Drag-and-drop interfaces to create apps and sites without code", icon: Layers },
        { title: "Custom Logic", desc: "Implement workflows and automations visually without programming", icon: Code },
        { title: "Cross-Platform", desc: "One solution for web, iOS, and Android using no-code builders", icon: Smartphone },
        { title: "Rapid Prototyping", desc: "Quickly turn your ideas into functional prototypes for testing", icon: Zap },
        { title: "Scalability", desc: "Easily scale your applications as your business grows", icon: Globe },
        { title: "Integration", desc: "Seamlessly connect with existing tools and services", icon: Rocket },
    ];

    const process = [
        { step: "Consultation & Analysis", desc: "We start by understanding your business goals and technical requirements to craft a tailored strategy" },
        { step: "Design & Prototyping", desc: "Our design team creates interactive prototypes and wireframes to visualize the final product" },
        { step: "Development & Testing", desc: "With no-code platforms, we develop your project and perform rigorous testing for quality assurance" },
        { step: "Deployment & Support", desc: "After launch, we offer ongoing maintenance and support, ensuring your platform remains optimized" },
    ];

    const projects = [
        { title: "Mobile App for Startups", desc: "Launched a cross-platform app in 4 weeks for early-stage startup", impact: "4 weeks to launch" },
        { title: "Business Dashboard", desc: "Custom no-code dashboard for real-time analytics and reporting", impact: "60% cost savings" },
        { title: "E-commerce Store", desc: "Full-featured online store with payment integration and inventory", impact: "50+ products live" },
    ];

    const technologies = [
        { name: "Bubble", desc: "Visual programming platform" },
        { name: "Webflow", desc: "Web design & CMS" },
        { name: "FlutterFlow", desc: "Mobile app builder" },
        { name: "Adalo", desc: "App development" },
        { name: "Zapier", desc: "Automation & integration" },
        { name: "Airtable", desc: "Database & workflows" },
    ];

    const faq = [
        { q: "Can no-code apps scale for enterprise use?", a: "Yes! Modern no-code platforms support enterprise-grade features including custom databases, API integrations, and advanced security." },
        { q: "What's the typical development timeline?", a: "Most projects launch in 2-6 weeks, depending on complexity—significantly faster than traditional coding." },
        { q: "Can I migrate to custom code later?", a: "Absolutely. Many no-code platforms offer export options, and we can rebuild with custom code as your needs evolve." },
    ];

    return (
        <>
            <section className="relative min-h-screen pt-32 pb-20 px-6 overflow-hidden bg-black">
                <div className="absolute inset-0 bg-gradient-to-b from-black via-orange-950/20 to-black" />
                <div className="brutal-grid opacity-10 absolute inset-0" />

                <FloatingOrbs colors={["rgba(245, 158, 11, 0.15)", "rgba(251, 146, 60, 0.12)", "rgba(239, 68, 68, 0.1)"]} />

                <div className="relative z-10 max-w-7xl mx-auto">
                    {/* Hero */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-20"
                    >
                        <motion.div
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ type: "spring", duration: 0.8 }}
                            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-amber-500/15 to-orange-500/15 border border-amber-500/40 rounded-full text-sm font-bold text-amber-300 mb-8"
                        >
                            <Code className="w-5 h-5" />
                            No-Code Development
                        </motion.div>

                        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6">
                            Launch Apps <span className="holographic">Without Code</span>
                        </h1>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-10">
                            Build mobile and web apps rapidly without traditional coding—ideal for startups, entrepreneurs, and businesses needing fast time-to-market.
                        </p>

                        <div className="flex flex-wrap gap-4 justify-center">
                            <MagneticButton>
                                <Link href="/contact">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl font-bold text-lg flex items-center gap-2 hover:shadow-2xl hover:shadow-amber-500/50 transition-all"
                                    >
                                        Start Your Project <ArrowRight className="w-5 h-5" />
                                    </motion.button>
                                </Link>
                            </MagneticButton>
                        </div>
                    </motion.div>

                    {/* Solutions Grid */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="mb-32"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
                            No-Code <span className="holographic">Solutions</span>
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {solutions.map((solution, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ scale: 1.03, y: -5 }}
                                    className="glass-card p-8 relative overflow-hidden group cursor-pointer"
                                >
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-transparent opacity-0 group-hover:opacity-100"
                                        transition={{ duration: 0.5 }}
                                    />
                                    <motion.div
                                        className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center mb-6 relative z-10"
                                        whileHover={{ rotate: 360 }}
                                        transition={{ duration: 0.6 }}
                                    >
                                        <solution.icon className="w-7 h-7 text-white" />
                                    </motion.div>
                                    <h3 className="text-xl font-bold mb-3 relative z-10">{solution.title}</h3>
                                    <p className="text-gray-400 relative z-10">{solution.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Technology Stack */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="mb-32"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
                            <span className="holographic">Technology</span> Stack
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                            {technologies.map((tech, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ scale: 1.1, y: -5 }}
                                    className="glass-card p-6 text-center cursor-pointer"
                                >
                                    <h3 className="text-lg font-bold mb-2 bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
                                        {tech.name}
                                    </h3>
                                    <p className="text-xs text-gray-400">{tech.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Process Timeline */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="mb-32"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
                            Our <span className="holographic">Development Process</span>
                        </h2>
                        <div className="space-y-6 max-w-4xl mx-auto">
                            {process.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ scale: 1.02, x: 10 }}
                                    className="glass-card p-8 flex items-start gap-6 relative overflow-hidden group cursor-pointer"
                                >
                                    <motion.div
                                        className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center font-bold text-xl flex-shrink-0 relative z-10"
                                        whileHover={{ scale: 1.2, rotate: 360 }}
                                        transition={{ duration: 0.6 }}
                                    >
                                        {index + 1}
                                    </motion.div>
                                    <div className="relative z-10">
                                        <h3 className="text-xl font-bold mb-2">{item.step}</h3>
                                        <p className="text-gray-400">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Featured Projects */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="mb-32"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
                            <span className="holographic">Success Stories</span>
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {projects.map((project, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ delay: index * 0.15 }}
                                    whileHover={{ scale: 1.05, y: -10 }}
                                    className="glass-card p-8 relative overflow-hidden group cursor-pointer"
                                >
                                    <div className="relative z-10">
                                        <div className="flex items-center gap-2 mb-4">
                                            <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                                            <span className="text-sm font-semibold bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
                                                {project.impact}
                                            </span>
                                        </div>
                                        <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                                        <p className="text-gray-400">{project.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* FAQ */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="mb-20"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
                            <span className="holographic">Frequently Asked Questions</span>
                        </h2>
                        <div className="space-y-4 max-w-3xl mx-auto">
                            {faq.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ scale: 1.02 }}
                                    className="glass-card p-6 cursor-pointer"
                                >
                                    <h3 className="font-semibold text-lg mb-2">{item.q}</h3>
                                    <p className="text-gray-400">{item.a}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <div className="glass-card p-12 rounded-3xl">
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">
                                Let's Build <span className="holographic">Something Amazing</span>
                            </h2>
                            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                                Contact us today to discuss your project, and see how we can turn your vision into reality—fast.
                            </p>
                            <MagneticButton>
                                <Link href="/contact">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="px-10 py-5 bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 rounded-2xl font-bold text-lg flex items-center gap-3 mx-auto hover:shadow-2xl hover:shadow-amber-500/60 transition-all"
                                    >
                                        Get Started Now <ArrowRight className="w-6 h-6" />
                                    </motion.button>
                                </Link>
                            </MagneticButton>
                        </div>
                    </motion.div>
                </div>
            </section>
            <Footer />
        </>
    );
}
