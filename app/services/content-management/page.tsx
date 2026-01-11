"use client";

import { motion } from "framer-motion";
import { FileText, Layout, Globe, Zap, Shield, Users, ArrowRight, Star, CheckCircle } from "lucide-react";
import Footer from "@/components/sections/footer";
import Link from "next/link";
import MagneticButton from "@/components/services/MagneticButton";
import FloatingOrbs from "@/components/services/FloatingOrbs";

export default function ContentManagementPage() {
    const solutions = [
        { title: "Custom CMS Development", desc: "Tailored content management systems built to match your unique workflow and requirements", icon: Layout },
        { title: "Headless CMS", desc: "API-first architecture for delivering content across multiple platforms and channels", icon: Globe },
        { title: "Content Strategy", desc: "Strategic content planning, taxonomy design, and editorial workflow optimization", icon: FileText },
        { title: "Multi-Language Support", desc: "Seamless multilingual content management with localization and translation workflows", icon: Users },
        { title: "Performance Optimization", desc: "Fast-loading, SEO-optimized content delivery with caching and CDN integration", icon: Zap },
        { title: "Security & Compliance", desc: "Enterprise-grade security with role-based access, audit logs, and compliance features", icon: Shield },
    ];

    const process = [
        { step: "Discovery & Planning", desc: "Assess your content needs, business goals, and existing infrastructure to design the perfect solution" },
        { step: "Design & Development", desc: "Build intuitive admin interfaces with robust backend architecture for seamless content management" },
        { step: "Integration & Training", desc: "Integrate with existing tools and provide comprehensive training for your content team" },
        { step: "Launch & Support", desc: "Deploy with continuous support, updates, and optimization to keep your CMS running smoothly" },
    ];

    const platforms = [
        { name: "WordPress", desc: "Most popular CMS", features: ["50k+ plugins", "SEO-friendly", "Easy to use"], color: "from-blue-600 to-blue-400" },
        { name: "Strapi", desc: "Headless CMS", features: ["API-first", "Open source", "Customizable"], color: "from-indigo-600 to-purple-500" },
        { name: "Contentful", desc: "Cloud CMS", features: ["Multi-channel", "GraphQL", "Scalable"], color: "from-yellow-500 to-orange-500" },
        { name: "Sanity", desc: "Real-time CMS", features: ["Structured content", "Real-time collab", "Portable text"], color: "from-red-500 to-pink-500" },
    ];

    const features = [
        { title: "Visual Editor", desc: "WYSIWYG editing with drag-and-drop interface for non-technical users" },
        { title: "Version Control", desc: "Track changes, rollback content, and manage publishing workflows" },
        { title: "Media Management", desc: "Organize, optimize, and deliver images, videos, and documents efficiently" },
        { title: "SEO Tools", desc: "Built-in SEO optimization with meta tags, sitemaps, and schema markup" },
        { title: "API Integration", desc: "Connect with third-party services, analytics, and marketing tools" },
        { title: "Mobile Admin", desc: "Manage content on-the-go with responsive admin interfaces" },
    ];

    const projects = [
        { title: "Corporate Website", desc: "Custom WordPress CMS with multi-site management for global enterprise", impact: "15 sites managed" },
        { title: "News Portal", desc: "High-performance headless CMS handling 1M+ monthly visitors with real-time updates", impact: "1M+ visitors/mo" },
        { title: "E-learning Platform", desc: "Custom CMS for course management, student tracking, and certification", impact: "10k+ students" },
    ];

    const caseStudies = [
        {
            title: "Media Company Migration",
            challenge: "Legacy CMS with slow publishing, limited SEO, poor mobile experience",
            solution: "Migrated to headless Strapi with Next.js frontend and CDN delivery",
            result: "3x faster publishing, 50% page speed improvement, 40% SEO boost"
        },
        {
            title: "Enterprise Content Hub",
            challenge: "Managing content across 20+ websites with inconsistent branding",
            solution: "Built multi-site WordPress network with centralized design system",
            result: "80% time savings, unified brand, streamlined workflow"
        },
    ];

    const faq = [
        { q: "Which CMS is best for my business?", a: "It depends on your needs: WordPress for ease and flexibility, headless CMS (Strapi, Contentful) for multi-channel delivery, custom CMS for unique workflows." },
        { q: "Can you migrate from our existing CMS?", a: "Yes, we specialize in seamless migrations with zero downtime, preserving SEO rankings, URLs, and content structure while upgrading your platform." },
        { q: "Do you provide training for our team?", a: "Absolutely. We offer comprehensive training sessions, documentation, video tutorials, and ongoing support to ensure your team masters the CMS." },
        { q: "How do you ensure content security?", a: "Role-based access control, SSL encryption, regular security audits, automated backups, and compliance with GDPR, HIPAA, and industry standards." },
    ];

    return (
        <>
            <section className="relative min-h-screen pt-32 pb-20 px-6 overflow-hidden bg-black">
                <div className="absolute inset-0 bg-gradient-to-b from-black via-indigo-950/20 to-black" />
                <div className="brutal-grid opacity-10 absolute inset-0" />

                <FloatingOrbs colors={["rgba(99, 102, 241, 0.15)", "rgba(139, 92, 246, 0.12)", "rgba(167, 139, 250, 0.1)"]} />

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
                            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-indigo-500/15 to-purple-500/15 border border-indigo-500/40 rounded-full text-sm font-bold text-indigo-300 mb-8"
                        >
                            <FileText className="w-5 h-5" />
                            Content Management Systems
                        </motion.div>

                        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6">
                            <span className="holographic">Powerful CMS</span> Solutions
                        </h1>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-10">
                            Robust content management systems for easy publishing and management—from WordPress to headless CMS, tailored to your workflow.
                        </p>

                        <div className="flex flex-wrap gap-4 justify-center">
                            <MagneticButton>
                                <Link href="/contact">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl font-bold text-lg flex items-center gap-2 hover:shadow-2xl hover:shadow-indigo-500/50 transition-all"
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
                            CMS <span className="holographic">Solutions</span>
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
                                        className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-transparent opacity-0 group-hover:opacity-100"
                                        transition={{ duration: 0.5 }}
                                    />
                                    <motion.div
                                        className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center mb-6 relative z-10"
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
                                    <CheckCircle className="w-6 h-6 text-indigo-400 flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                                        <p className="text-gray-400 text-sm">{feature.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* CMS Platforms */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="mb-32"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
                            <span className="holographic">Platforms We Master</span>
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {platforms.map((platform, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ scale: 1.05, y: -8 }}
                                    className="glass-card p-6 cursor-pointer group"
                                >
                                    <motion.div
                                        className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br ${platform.color} flex items-center justify-center`}
                                        whileHover={{ rotate: 360 }}
                                        transition={{ duration: 0.6 }}
                                    >
                                        <span className="text-white font-bold text-2xl">{platform.name[0]}</span>
                                    </motion.div>
                                    <h3 className="text-xl font-bold mb-2 text-center">{platform.name}</h3>
                                    <p className="text-sm text-gray-400 text-center mb-3">{platform.desc}</p>
                                    <div className="space-y-1">
                                        {platform.features.map((feature, i) => (
                                            <div key={i} className="flex items-center gap-2 text-xs text-gray-500">
                                                <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${platform.color}`} />
                                                {feature}
                                            </div>
                                        ))}
                                    </div>
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
                            Our <span className="holographic">Implementation Process</span>
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
                                        className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center font-bold text-xl flex-shrink-0 relative z-10"
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
                                        className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100"
                                        transition={{ duration: 0.5 }}
                                    />
                                    <div className="relative z-10">
                                        <h3 className="text-2xl font-bold mb-4">{study.title}</h3>
                                        <div className="space-y-3 mb-4">
                                            <div>
                                                <p className="text-sm font-semibold text-indigo-400 mb-1">Challenge</p>
                                                <p className="text-gray-400 text-sm">{study.challenge}</p>
                                            </div>
                                            <div>
                                                <p className="text-sm font-semibold text-purple-400 mb-1">Solution</p>
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
                                            <span className="text-sm font-semibold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
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
                                Ready to <span className="holographic">Streamline</span> Content?
                            </h2>
                            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                                Let's build a CMS that empowers your team to create, manage, and publish content effortlessly.
                            </p>
                            <MagneticButton>
                                <Link href="/contact">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="px-10 py-5 bg-gradient-to-r from-indigo-500 via-purple-500 to-violet-500 rounded-2xl font-bold text-lg flex items-center gap-3 mx-auto hover:shadow-2xl hover:shadow-indigo-500/60 transition-all"
                                    >
                                        Discuss Your Project <ArrowRight className="w-6 h-6" />
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
