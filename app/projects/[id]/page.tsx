"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, Github, CheckCircle2, Users, Clock, Calendar, Sparkles, Zap, Target, TrendingUp } from "lucide-react";
import { allProjects } from "@/lib/projectsData";
import { useState } from "react";

export default function ProjectDetailsPage({ params }: { params: { id: string } }) {
    const project = allProjects.find(p => p.id === params.id);
    const [activeImage, setActiveImage] = useState(0);

    if (!project) {
        notFound();
    }

    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

    const relatedProjects = allProjects
        .filter(p => p.id !== project.id && p.category === project.category)
        .slice(0, 3);

    return (
        <div className="min-h-screen bg-black text-white">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-4 sm:px-6 overflow-hidden">
                <motion.div
                    className="absolute inset-0"
                    style={{ y, opacity }}
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-neon-blue/20 via-black to-black" />
                    <div className="absolute top-20 left-10 w-96 h-96 bg-neon-blue/30 rounded-full blur-[120px]" />
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-neon-purple/30 rounded-full blur-[120px]" />
                </motion.div>

                <div className="relative z-10 max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Link href="/projects">
                            <motion.div
                                whileHover={{ x: -5 }}
                                className="inline-flex items-center space-x-2 text-gray-400 hover:text-neon-blue transition-colors mb-8 cursor-pointer"
                            >
                                <ArrowLeft className="w-5 h-5" />
                                <span>Back to Projects</span>
                            </motion.div>
                        </Link>

                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ type: "spring", duration: 0.8 }}
                                    className="inline-flex items-center space-x-2 px-4 py-2 bg-neon-purple/10 border border-neon-purple/30 rounded-full mb-6"
                                >
                                    <Sparkles className="w-4 h-4 text-neon-purple" />
                                    <span className="text-sm text-neon-purple font-medium">{project.category}</span>
                                </motion.div>

                                <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                                    {project.title}
                                </h1>

                                <p className="text-xl text-gray-400 mb-8">
                                    {project.longDescription}
                                </p>

                                <div className="flex flex-wrap gap-4 mb-8">
                                    <motion.a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0, 229, 255, 0.5)" }}
                                        whileTap={{ scale: 0.95 }}
                                        className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-neon-blue to-neon-cyan rounded-xl font-semibold"
                                    >
                                        <span>View Live Project</span>
                                        <ExternalLink className="w-5 h-5" />
                                    </motion.a>

                                    {project.githubUrl && (
                                        <motion.a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="inline-flex items-center space-x-2 px-6 py-3 bg-white/5 border border-white/10 rounded-xl font-semibold hover:bg-white/10 transition-colors"
                                        >
                                            <Github className="w-5 h-5" />
                                            <span>View Code</span>
                                        </motion.a>
                                    )}
                                </div>

                                <div className="grid grid-cols-3 gap-4">
                                    {[
                                        { icon: Clock, label: "Duration", value: project.duration },
                                        { icon: Users, label: "Team Size", value: project.teamSize },
                                        { icon: Calendar, label: "Role", value: project.role },
                                    ].map((item, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                            className="bg-white/5 backdrop-blur-xl rounded-xl p-4 border border-white/10"
                                        >
                                            <item.icon className="w-6 h-6 text-neon-blue mb-2" />
                                            <div className="text-xs text-gray-500 mb-1">{item.label}</div>
                                            <div className="font-semibold">{item.value}</div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            <div className="relative">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                    className="relative h-[500px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
                                >
                                    <Image
                                        src={project.images[activeImage]}
                                        alt={project.title}
                                        fill
                                        className="object-cover object-top"
                                        priority
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                                </motion.div>

                                {/* Image Thumbnails */}
                                {project.images.length > 1 && (
                                    <div className="flex gap-3 mt-4">
                                        {project.images.map((img, index) => (
                                            <motion.button
                                                key={index}
                                                onClick={() => setActiveImage(index)}
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${activeImage === index ? "border-neon-blue" : "border-white/20"
                                                    }`}
                                            >
                                                <Image
                                                    src={img}
                                                    alt={`${project.title} ${index + 1}`}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </motion.button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Challenge, Solution, Impact */}
            <section className="relative py-20 px-4 sm:px-6 border-t border-white/10">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-3 gap-8">
                        {[
                            { icon: Target, title: "The Challenge", content: project.challenge, color: "from-red-500 to-orange-500" },
                            { icon: Zap, title: "Our Solution", content: project.solution, color: "from-neon-blue to-neon-cyan" },
                            { icon: TrendingUp, title: "The Impact", content: project.impact.join(" • "), color: "from-green-500 to-emerald-500" },
                        ].map((section, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm rounded-2xl p-8 border border-white/10"
                            >
                                <div className={`inline-flex p-3 bg-gradient-to-r ${section.color} rounded-xl mb-4`}>
                                    <section.icon className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4">{section.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{section.content}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Key Results */}
            <section className="relative py-20 px-4 sm:px-6">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl font-bold mb-4">
                            Key <span className="holographic">Results</span>
                        </h2>
                        <p className="text-xl text-gray-400">Measurable outcomes that matter</p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {project.impact.map((result, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex items-start space-x-4 bg-white/5 backdrop-blur-xl rounded-xl p-6 border border-white/10"
                            >
                                <CheckCircle2 className="w-6 h-6 text-neon-green flex-shrink-0 mt-1" />
                                <p className="text-lg">{result}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technologies Used */}
            <section className="relative py-20 px-4 sm:px-6 border-t border-white/10">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl font-bold mb-4">
                            Technologies <span className="holographic">Used</span>
                        </h2>
                        <p className="text-xl text-gray-400">Cutting-edge tools and frameworks</p>
                    </motion.div>

                    <div className="flex flex-wrap justify-center gap-4">
                        {project.tech.map((tech, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                whileHover={{
                                    scale: 1.1,
                                    y: -5,
                                    boxShadow: "0 0 30px rgba(0, 229, 255, 0.5)",
                                }}
                                className="px-6 py-3 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 font-semibold cursor-pointer"
                            >
                                {tech}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Related Projects */}
            {relatedProjects.length > 0 && (
                <section className="relative py-20 px-4 sm:px-6 border-t border-white/10">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-12"
                        >
                            <h2 className="text-4xl font-bold mb-4">
                                Related <span className="holographic">Projects</span>
                            </h2>
                            <p className="text-xl text-gray-400">More work in {project.category}</p>
                        </motion.div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {relatedProjects.map((relatedProject, index) => (
                                <Link key={relatedProject.id} href={`/projects/${relatedProject.id}`}>
                                    <motion.div
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        whileHover={{ y: -10 }}
                                        className="group bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden cursor-pointer"
                                    >
                                        <div className="relative h-48 overflow-hidden">
                                            <Image
                                                src={relatedProject.image}
                                                alt={relatedProject.title}
                                                fill
                                                className="object-cover object-top group-hover:scale-110 transition-transform duration-500"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                                        </div>
                                        <div className="p-6">
                                            <h3 className="text-xl font-bold mb-2 group-hover:text-neon-blue transition-colors">
                                                {relatedProject.title}
                                            </h3>
                                            <p className="text-gray-400 text-sm line-clamp-2">
                                                {relatedProject.description}
                                            </p>
                                        </div>
                                    </motion.div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* CTA Section */}
            <section className="relative py-20 px-4 sm:px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-12 border border-white/10"
                    >
                        <h2 className="text-4xl font-bold mb-4">
                            Like What You See?
                        </h2>
                        <p className="text-xl text-gray-400 mb-8">
                            Let's create something extraordinary for your business
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <Link href="/contact">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full font-bold text-lg"
                                >
                                    Start Your Project
                                </motion.button>
                            </Link>
                            <Link href="/projects">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-8 py-4 bg-white/5 border border-white/10 rounded-full font-bold text-lg hover:bg-white/10 transition-colors"
                                >
                                    View More Projects
                                </motion.button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
