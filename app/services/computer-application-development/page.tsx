"use client";

import { motion } from "framer-motion";
import { Monitor, Package, BarChart3, Cpu, Lock, Settings, ArrowRight, Star, CheckCircle } from "lucide-react";
import Footer from "@/components/sections/footer";
import Link from "next/link";
import MagneticButton from "@/components/services/MagneticButton";
import FloatingOrbs from "@/components/services/FloatingOrbs";

export default function DesktopApplicationPage() {
    const solutions = [
        { title: "Custom ERP Solutions", desc: "End-to-end enterprise resource planning tailored to your workflows and business processes", icon: Settings },
        { title: "Inventory Management", desc: "Real-time tracking and management of stock, assets, and supply chain operations", icon: Package },
        { title: "Report & Analytics", desc: "Insightful analytics and reporting tools for data-driven decision making", icon: BarChart3 },
        { title: "Automation Tools", desc: "Automate repetitive tasks to increase efficiency and reduce human errors", icon: Cpu },
        { title: "CRM Software", desc: "Manage customer relationships, sales pipelines, and client communications effectively", icon: Monitor },
        { title: "Security & Compliance", desc: "Robust security features with data encryption and compliance standards", icon: Lock },
    ];

    const process = [
        { step: "Consultation & Analysis", desc: "We start by understanding your goals and requirements to craft a tailored desktop strategy" },
        { step: "Design & Prototyping", desc: "Interactive prototypes and wireframes to visualize the final desktop application" },
        { step: "Development & Testing", desc: "Agile development with rigorous unit testing, integration testing, and quality assurance" },
        { step: "Deployment & Support", desc: "Post-launch maintenance, updates, and technical support to keep your software optimized" },
    ];

    const technologies = [
        { name: "Java", desc: "Core language", icon: "☕" },
        { name: "JavaFX", desc: "Rich UI framework", icon: "🎨" },
        { name: "Swing", desc: "GUI toolkit", icon: "🖼️" },
        { name: "Spring Boot", desc: "Backend framework", icon: "🍃" },
        { name: "MySQL", desc: "Database", icon: "🗄️" },
        { name: "PostgreSQL", desc: "Advanced DB", icon: "🐘" },
    ];

    const features = [
        { title: "Cross-Platform", desc: "Write once, run anywhere - Windows, macOS, and Linux support" },
        { title: "Performance", desc: "High-speed execution with optimized memory management" },
        { title: "Offline Capability", desc: "Full functionality without internet connection required" },
        { title: "Data Security", desc: "Local data storage with encryption and secure access controls" },
        { title: "Integration", desc: "Connect seamlessly with existing systems, APIs, and databases" },
        { title: "Scalability", desc: "Easily expand functionality as your business grows" },
    ];

    const projects = [
        { title: "Retail POS System", desc: "Complete point-of-sale system with inventory, billing, and customer management", impact: "200+ stores" },
        { title: "Manufacturing ERP", desc: "Integrated ERP solution for production planning, quality control, and supply chain", impact: "50% efficiency ↑" },
        { title: "Hospital Management", desc: "Patient records, appointment scheduling, billing, and pharmacy management system", impact: "10k+ patients" },
    ];

    const faq = [
        { q: "Why choose Java for desktop applications?", a: "Java offers cross-platform compatibility, robust security, excellent performance, and a mature ecosystem with extensive libraries and tools." },
        { q: "Can desktop apps integrate with web services?", a: "Absolutely. We integrate with REST APIs, SOAP services, cloud databases, and third-party platforms for seamless connectivity." },
        { q: "What about software updates?", a: "We implement auto-update mechanisms and version control, allowing seamless updates without disrupting user operations." },
        { q: "Do you provide training for staff?", a: "Yes, we offer comprehensive training sessions, user manuals, and video tutorials to ensure your team can use the software effectively." },
    ];

    return (
        <>
            <section className="relative min-h-screen pt-32 pb-20 px-6 overflow-hidden bg-black">
                <div className="absolute inset-0 bg-gradient-to-b from-black via-emerald-950/20 to-black" />
                <div className="brutal-grid opacity-10 absolute inset-0" />

                <FloatingOrbs colors={["rgba(16, 185, 129, 0.15)", "rgba(20, 184, 166, 0.12)", "rgba(52, 211, 153, 0.1)"]} />

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
                            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-emerald-500/15 to-teal-500/15 border border-emerald-500/40 rounded-full text-sm font-bold text-emerald-300 mb-8"
                        >
                            <Monitor className="w-5 h-5" />
                            Desktop Application Development
                        </motion.div>

                        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6">
                            <span className="holographic">Powerful Desktop</span> Solutions
                        </h1>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-10">
                            Tailored desktop software solutions to streamline your business operations and improve productivity using Java, JavaFX, and modern frameworks.
                        </p>

                        <div className="flex flex-wrap gap-4 justify-center">
                            <MagneticButton>
                                <Link href="/contact">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl font-bold text-lg flex items-center gap-2 hover:shadow-2xl hover:shadow-emerald-500/50 transition-all"
                                    >
                                        Get Started <ArrowRight className="w-5 h-5" />
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
                            Our Desktop <span className="holographic">Solutions</span>
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
                                        className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-transparent opacity-0 group-hover:opacity-100"
                                        transition={{ duration: 0.5 }}
                                    />
                                    <motion.div
                                        className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center mb-6 relative z-10"
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

                    {/* Key Features */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="mb-32"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
                            <span className="holographic">Key Features</span>
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ scale: 1.05, x: 5 }}
                                    className="glass-card p-6 flex items-start gap-4 cursor-pointer"
                                >
                                    <CheckCircle className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                                        <p className="text-gray-400 text-sm">{feature.desc}</p>
                                    </div>
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
                            <span className="holographic">Technology Stack</span>
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
                                    <div className="text-4xl mb-3">{tech.icon}</div>
                                    <h3 className="text-lg font-bold mb-1 bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
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
                                        className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center font-bold text-xl flex-shrink-0 relative z-10"
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
                                            <span className="text-sm font-semibold bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
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
                                Let's Transform Your <span className="holographic">Operations</span>
                            </h2>
                            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                                Contact us today to discuss your desktop software project and learn how Java-powered solutions can elevate your business.
                            </p>
                            <MagneticButton>
                                <Link href="/contact">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="px-10 py-5 bg-gradient-to-r from-emerald-500 via-teal-500 to-green-500 rounded-2xl font-bold text-lg flex items-center gap-3 mx-auto hover:shadow-2xl hover:shadow-emerald-500/60 transition-all"
                                    >
                                        Contact Us <ArrowRight className="w-6 h-6" />
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
