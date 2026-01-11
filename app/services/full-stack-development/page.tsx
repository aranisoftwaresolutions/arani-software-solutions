"use client";

import { motion } from "framer-motion";
import { Layers, Database, Code2, Server, Zap, Shield, ArrowRight, Star, CheckCircle } from "lucide-react";
import Footer from "@/components/sections/footer";
import Link from "next/link";
import MagneticButton from "@/components/services/MagneticButton";
import FloatingOrbs from "@/components/services/FloatingOrbs";

export default function FullStackDevelopmentPage() {
    const solutions = [
        { title: "Custom Web Applications", desc: "Scalable, maintainable web solutions tailored to your needs using MERN and modern best practices", icon: Code2 },
        { title: "Responsive UI/UX Design", desc: "Intuitive, responsive designs ensuring seamless experiences across desktop, tablet, and mobile", icon: Layers },
        { title: "API & Microservices", desc: "Robust APIs and modular microservices architecture for scalability and maintainability", icon: Server },
        { title: "Performance Optimization", desc: "Advanced Redis caching, optimized queries, and code improvements to maximize speed", icon: Zap },
        { title: "Database Architecture", desc: "MongoDB and PostgreSQL design with indexing, sharding, and replication strategies", icon: Database },
        { title: "Security & Authentication", desc: "JWT, OAuth2, role-based access control, and industry-standard security practices", icon: Shield },
    ];

    const process = [
        { step: "Requirement Analysis", desc: "We collaborate to define scope, requirements, and success metrics with detailed documentation" },
        { step: "Design & Prototyping", desc: "Interactive wireframes and technical architecture to visualize your vision before development" },
        { step: "Development & Testing", desc: "Agile development with continuous integration, rigorous testing, and code reviews for quality" },
        { step: "Deployment & Maintenance", desc: "Deploy on scalable cloud infrastructure with ongoing support, monitoring, and updates" },
    ];

    const technologies = [
        { name: "React", category: "Frontend", color: "from-cyan-500 to-blue-500" },
        { name: "Node.js", category: "Backend", color: "from-green-500 to-emerald-500" },
        { name: "Express", category: "Framework", color: "from-gray-500 to-slate-500" },
        { name: "MongoDB", category: "Database", color: "from-green-600 to-green-500" },
        { name: "TypeScript", category: "Language", color: "from-blue-600 to-blue-500" },
        { name: "Redis", category: "Cache", color: "from-red-500 to-rose-500" },
        { name: "Tailwind CSS", category: "Styling", color: "from-cyan-400 to-teal-400" },
        { name: "Next.js", category: "Framework", color: "from-black to-gray-700" },
        { name: "GraphQL", category: "API", color: "from-pink-500 to-purple-500" },
    ];

    const projects = [
        { title: "E-commerce Platform", desc: "Full-featured MERN e-commerce solution with real-time inventory and payment processing", impact: "500k+ users" },
        { title: "Real-Time Dashboard", desc: "Analytics dashboard with Redis caching and TypeScript for high-performance data visualization", impact: "Sub-second load" },
        { title: "Social Network", desc: "Responsive social platform built with React, Node.js, MongoDB, and WebSocket integration", impact: "50k daily active" },
    ];

    const caseStudies = [
        {
            title: "Enterprise SaaS Platform",
            challenge: "Legacy system migration with zero downtime",
            solution: "Microservices architecture with gradual migration strategy",
            result: "99.9% uptime, 40% performance improvement"
        },
        {
            title: "Real-Time Collaboration Tool",
            challenge: "Handling 10k+ concurrent users with live updates",
            solution: "WebSocket implementation with Redis pub/sub and horizontal scaling",
            result: "Sub-100ms latency, infinite scalability"
        },
    ];

    const faq = [
        { q: "What industries do you serve?", a: "We work across e-commerce, fintech, healthcare, education, SaaS, social platforms, and more—delivering custom solutions for diverse business needs." },
        { q: "Do you offer ongoing maintenance?", a: "Yes—continuous support, performance monitoring, security updates, and feature enhancements to keep your application secure and optimized." },
        { q: "How long does a project take?", a: "Typically 3-6 months depending on scope and complexity. We use agile methodology with 2-week sprints for iterative delivery." },
        { q: "Can you work with our existing tech stack?", a: "Absolutely. We integrate seamlessly with existing systems, APIs, and databases, ensuring smooth collaboration with your current infrastructure." },
    ];

    return (
        <>
            <section className="relative min-h-screen pt-32 pb-20 px-6 overflow-hidden bg-black">
                <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/20 to-black" />
                <div className="brutal-grid opacity-10 absolute inset-0" />

                <FloatingOrbs colors={["rgba(59, 130, 246, 0.15)", "rgba(6, 182, 212, 0.12)", "rgba(16, 185, 129, 0.1)"]} />

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
                            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-500/15 to-cyan-500/15 border border-blue-500/40 rounded-full text-sm font-bold text-blue-300 mb-8"
                        >
                            <Layers className="w-5 h-5" />
                            Full Stack Development
                        </motion.div>

                        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6">
                            <span className="holographic">End-to-End</span> Development
                        </h1>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-10">
                            Cutting-edge MERN solutions with TypeScript, Redis, Tailwind CSS, and SCSS—delivering scalable, high-performance web applications from front-end to back-end.
                        </p>

                        <div className="flex flex-wrap gap-4 justify-center">
                            <MagneticButton>
                                <Link href="/contact">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl font-bold text-lg flex items-center gap-2 hover:shadow-2xl hover:shadow-blue-500/50 transition-all"
                                    >
                                        Get a Quote <ArrowRight className="w-5 h-5" />
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
                            Full Stack <span className="holographic">Solutions</span>
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
                                        className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100"
                                        transition={{ duration: 0.5 }}
                                    />
                                    <motion.div
                                        className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-6 relative z-10"
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
                            Our <span className="holographic">Technology Stack</span>
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                            {technologies.map((tech, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ delay: index * 0.08 }}
                                    whileHover={{ scale: 1.1, y: -8 }}
                                    className="glass-card p-6 text-center cursor-pointer group"
                                >
                                    <motion.div
                                        className={`w-12 h-12 mx-auto mb-3 rounded-lg bg-gradient-to-br ${tech.color} flex items-center justify-center`}
                                        whileHover={{ rotate: 360 }}
                                        transition={{ duration: 0.6 }}
                                    >
                                        <span className="text-white font-bold text-xl">{tech.name[0]}</span>
                                    </motion.div>
                                    <h3 className="text-lg font-bold mb-1">{tech.name}</h3>
                                    <p className="text-xs text-gray-400">{tech.category}</p>
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
                                        className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center font-bold text-xl flex-shrink-0 relative z-10"
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

                    {/* Case Studies */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="mb-32"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
                            <span className="holographic">Case Studies</span>
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {caseStudies.map((study, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ delay: index * 0.15 }}
                                    whileHover={{ scale: 1.03, y: -5 }}
                                    className="glass-card p-8 relative overflow-hidden group cursor-pointer"
                                >
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100"
                                        transition={{ duration: 0.5 }}
                                    />
                                    <div className="relative z-10">
                                        <h3 className="text-2xl font-bold mb-4">{study.title}</h3>
                                        <div className="space-y-3 mb-4">
                                            <div>
                                                <p className="text-sm font-semibold text-blue-400 mb-1">Challenge</p>
                                                <p className="text-gray-400 text-sm">{study.challenge}</p>
                                            </div>
                                            <div>
                                                <p className="text-sm font-semibold text-cyan-400 mb-1">Solution</p>
                                                <p className="text-gray-400 text-sm">{study.solution}</p>
                                            </div>
                                            <div>
                                                <p className="text-sm font-semibold text-green-400 mb-1">Result</p>
                                                <p className="text-gray-300 text-sm font-medium">{study.result}</p>
                                            </div>
                                        </div>
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
                            <span className="holographic">Featured Projects</span>
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
                                            <span className="text-sm font-semibold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
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
                                Ready to <span className="holographic">Transform</span> Your Digital Presence?
                            </h2>
                            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                                Contact us today to kickstart your full stack development project and drive your business forward.
                            </p>
                            <MagneticButton>
                                <Link href="/contact">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="px-10 py-5 bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 rounded-2xl font-bold text-lg flex items-center gap-3 mx-auto hover:shadow-2xl hover:shadow-blue-500/60 transition-all"
                                    >
                                        Get in Touch <ArrowRight className="w-6 h-6" />
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
