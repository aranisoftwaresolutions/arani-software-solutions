"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, TrendingUp, ExternalLink } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/utils";

const caseStudies = [
    {
        title: " NGO Web App",
        // client: "Ananta Technology",
        category: "",
        results: "Dheodha Vikas Samiti",
        description: "Dheodha Vikas Samiti is a community development organization website built to showcase village development initiatives, social welfare programs, and community empowerment activities.",
        tech: ["React.js", "Next.js", "Versel", "Tailwind", "AWS"],
        gradient: "from-neon-green to-neon-cyan",
        image: "https://res.cloudinary.com/dusalynec/image/upload/v1763976347/Screenshot_2025-11-24_144533_lgo4ge.png", // Add your image
        liveUrl: "https://www.dheodhavikassamiti.org/",
        // detailsUrl: "https://www.anantatechnology.com/projects/project-details/1",
    },

    {
        title: "AgroSpace Solution",
        // client: "Ananta Technology",
        category: "AgTech + AI",
        results: "AI-Powered Analytics",
        description: "AI-powered ag-analytics dashboard empowering farmers with data-driven insights for smarter agricultural decisions.",
        tech: ["React.js", "Express.js", "Node.js", "MongoDB", "AWS"],
        gradient: "from-neon-green to-neon-cyan",
        image: "/projects/project1.png", // Add your image
        liveUrl: "https://my.agrospace.io/",
        // detailsUrl: "https://www.anantatechnology.com/projects/project-details/1",
    },
    {
        title: "Empowering Marine",
        // client: "Ananta Technology",
        category: "Maritime Tech",
        results: "Operations Portal",
        description: "Maritime operations portal streamlining vessel management, crew coordination, and maritime logistics operations.",
        tech: ["React.js", "Express.js", "Node.js", "MongoDB"],
        gradient: "from-neon-blue to-neon-cyan",
        image: "/projects/project2.png",
        liveUrl: "https://oceanq.eu/",
        // detailsUrl: "https://www.anantatechnology.com/projects/project-details/2",
    },
    {
        title: "E-Commerce Platform",
        // client: "Ananta Technology",
        category: "E-Commerce",
        results: "High-Performance Store",
        description: "High-performance online store with seamless shopping experience, secure payments, and real-time inventory management.",
        tech: ["React.js", "Express.js", "Node.js", "MongoDB"],
        gradient: "from-neon-purple to-neon-pink",
        image: "/projects/project3.png",
        liveUrl: "https://quantumasync.onrender.com/",
        // detailsUrl: "https://www.anantatechnology.com/projects/project-details/3",
    },
    {
        title: "Fem-Cartel E-Commerce",
        // client: "Ananta Technology",
        category: "Luxury Retail",
        results: "Premium Experience",
        description: "Luxury retail experience delivering elegant design, personalized shopping, and premium customer service for high-end fashion.",
        tech: ["React.js", "Express.js", "Node.js", "MongoDB"],
        gradient: "from-neon-pink to-neon-purple",
        image: "/projects/project7.png",
        liveUrl: "https://fem-cartel.vercel.app/",
        // detailsUrl: "https://www.anantatechnology.com/projects/project-details/4",
    },
    {
        title: "CRM Dashboard",
        // client: "Ananta Technology",
        category: "Business Software",
        results: "User-Centric CRM",
        description: "User-centric CRM suite for managing customer relationships, sales pipelines, and business analytics in one unified platform.",
        tech: ["React.js", "Express.js", "Node.js", "MongoDB"],
        gradient: "from-neon-blue to-neon-purple",
        image: "/projects/project8.png",
        liveUrl: "https://cloud.idurarapp.com/",
        // detailsUrl: "https://www.anantatechnology.com/projects/project-details/5",
    },
    {
        title: "Admin Panel",
        // client: "Ananta Technology",
        category: "Admin Console",
        results: "Complete Management",
        description: "E-commerce admin console for managing products, orders, and customers, providing a comprehensive solution for e-commerce businesses.",
        tech: ["React.js", "Express.js", "Node.js", "MongoDB"],
        gradient: "from-neon-cyan to-neon-green",
        image: "/projects/project9.png",
        liveUrl: "https://fem-cartel.vercel.app/admin/dashboard",
        // detailsUrl: "https://www.anantatechnology.com/projects/project-details/6",
    },
];

export default function CaseStudies() {
    return (
        <section className="relative py-32 px-6 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="relative z-10 max-w-7xl mx-auto"
            >
                {/* Section Header */}
                <motion.div variants={fadeInUp} className="text-center mb-16">
                    <h2 className="text-5xl md:text-6xl font-bold mb-6">
                        Our <span className="holographic">Projects</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Innovative solutions delivered across industries. Explore our portfolio of successful projects.
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <div className="space-y-8">
                    {caseStudies.map((study, index) => (
                        <motion.div
                            key={index}
                            variants={fadeInUp}
                            whileHover={{ scale: 1.01 }}
                            className="glass-card overflow-hidden group cursor-pointer"
                        >
                            <div className="grid md:grid-cols-2 gap-0">
                                {/* Project Image */}
                                <div className="relative h-[300px] md:h-[400px] overflow-hidden">
                                    <motion.div
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: 0.4 }}
                                        className="relative w-full h-full"
                                    >
                                        <Image
                                            src={study.image}
                                            alt={study.title}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                            priority={index === 0}
                                        />
                                        {/* Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </motion.div>

                                    {/* Results Badge on Image */}
                                    <div className="absolute top-4 right-4 glass-card p-4 backdrop-blur-xl">
                                        <TrendingUp className="w-6 h-6 text-neon-green mx-auto mb-2" />
                                        <div className={`text-lg font-bold bg-gradient-to-r ${study.gradient} bg-clip-text text-transparent text-center`}>
                                            {study.results}
                                        </div>
                                    </div>
                                </div>

                                {/* Project Details */}
                                <div className="p-8 md:p-10 flex flex-col justify-between">
                                    <div>
                                        {/* Category & Client */}
                                        <div className="flex flex-wrap items-center gap-3 mb-4">
                                            <span className="px-4 py-1 bg-white/5 rounded-full text-sm text-neon-blue border border-neon-blue/30">
                                                {study.category}
                                            </span>
                                            <span className="text-sm text-gray-500">{study.client}</span>
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-3xl md:text-4xl font-bold mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-neon-blue group-hover:to-neon-purple transition-all">
                                            {study.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-gray-400 mb-6 leading-relaxed text-base">
                                            {study.description}
                                        </p>

                                        {/* Tech Stack */}
                                        <div className="mb-6">
                                            <p className="text-sm text-gray-500 mb-3 font-medium">Technologies Used:</p>
                                            <div className="flex flex-wrap gap-2">
                                                {study.tech.map((tech, i) => (
                                                    <motion.span
                                                        key={i}
                                                        whileHover={{ scale: 1.05, y: -2 }}
                                                        className="px-3 py-1.5 bg-white/5 rounded-lg text-sm text-gray-300 border border-white/10 hover:border-neon-blue/50 hover:text-neon-blue transition-all"
                                                    >
                                                        {tech}
                                                    </motion.span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex flex-wrap gap-4 mt-6">
                                        <motion.a
                                            href={study.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-neon-blue to-neon-cyan rounded-lg font-semibold hover:shadow-neon transition-all"
                                        >
                                            <span>Live Demo</span>
                                            <ExternalLink className="w-4 h-4" />
                                        </motion.a>

                                        <motion.a
                                            href={study.detailsUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ x: 5 }}
                                            className="flex items-center space-x-2 px-6 py-3 bg-white/5 border border-white/10 rounded-lg text-gray-300 hover:text-white hover:border-white/30 transition-all"
                                        >
                                            <span>View Details</span>
                                            <ArrowRight className="w-5 h-5" />
                                        </motion.a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* View All Projects Button */}
                <motion.div
                    variants={fadeInUp}
                    className="text-center mt-16"
                >
                    <motion.a
                        href="https://www.arani.com/projects"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full font-bold text-lg hover:shadow-neon transition-all"
                    >
                        <span>Explore All Projects</span>
                        <ArrowRight className="w-5 h-5" />
                    </motion.a>
                </motion.div>
            </motion.div>
        </section>
    );
}
