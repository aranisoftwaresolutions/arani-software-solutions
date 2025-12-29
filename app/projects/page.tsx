"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink, Sparkles, Filter, Search, Grid3x3, List, Calendar, Users, Clock } from "lucide-react";
import { useState, useMemo } from "react";
import { allProjects } from "@/lib/projectsData";
import Footer from "@/components/sections/footer";

export default function ProjectsPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

    const categories = ["All", ...Array.from(new Set(allProjects.map(p => p.category)))];

    const filteredProjects = useMemo(() => {
        return allProjects.filter(project => {
            const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                project.description.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesCategory = selectedCategory === "All" || project.category === selectedCategory;
            return matchesSearch && matchesCategory;
        });
    }, [searchQuery, selectedCategory]);

    return (
        <div className="min-h-screen bg-black text-white overflow-x-hidden">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-4 sm:px-6 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-neon-blue/10 via-black to-black" />

                {/* Animated Background */}
                <motion.div
                    className="absolute inset-0 opacity-30 pointer-events-none"
                    style={{ y }}
                >
                    <div className="absolute top-20 left-10 w-72 h-72 bg-neon-blue/20 rounded-full blur-[100px]" />
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-neon-purple/20 rounded-full blur-[100px]" />
                </motion.div>

                <div className="relative z-10 max-w-7xl mx-auto w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center"
                    >
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", duration: 0.8 }}
                            className="inline-flex items-center space-x-2 px-4 py-2 bg-neon-purple/10 border border-neon-purple/30 rounded-full mb-6"
                        >
                            <Sparkles className="w-5 h-5 text-neon-purple" />
                            <span className="text-sm text-neon-purple font-medium">Complete Portfolio</span>
                        </motion.div>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 px-4">
                            Our <span className="holographic">Project Gallery</span>
                        </h1>

                        <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto mb-8 px-4">
                            Explore our complete collection of innovative solutions and success stories
                        </p>

                        {/* Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto mt-12">
                            {[
                                { label: "Projects Completed", value: `${allProjects.length}+` },
                                { label: "Happy Clients", value: "50+" },
                                { label: "Countries Served", value: "15+" },
                                { label: "Success Rate", value: "98%" },
                            ].map((stat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-white/5 backdrop-blur-xl rounded-2xl p-4 sm:p-6 border border-white/10"
                                >
                                    <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent mb-2">
                                        {stat.value}
                                    </div>
                                    <div className="text-xs sm:text-sm text-gray-400">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Filters Section */}
            <section className="relative py-12 px-4 sm:px-6 border-t border-white/10 overflow-hidden">
                <div className="max-w-7xl mx-auto w-full">
                    <div className="flex flex-col gap-6">
                        {/* Search and View Toggle Row */}
                        <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between">
                            {/* Search Bar */}
                            <div className="relative w-full sm:flex-1 lg:max-w-md">
                                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none z-10" />
                                <input
                                    type="text"
                                    placeholder="Search projects..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-neon-blue/50 transition-all text-white placeholder:text-gray-500"
                                />
                            </div>

                            {/* View Mode Toggle */}
                            <div className="flex items-center gap-2 bg-white/5 rounded-xl p-1 w-full sm:w-auto justify-center">
                                <button
                                    onClick={() => setViewMode("grid")}
                                    className={`p-2 rounded-lg transition-all ${
                                        viewMode === "grid" ? "bg-neon-blue text-white" : "text-gray-400 hover:text-white"
                                    }`}
                                    aria-label="Grid view"
                                >
                                    <Grid3x3 className="w-5 h-5" />
                                </button>
                                <button
                                    onClick={() => setViewMode("list")}
                                    className={`p-2 rounded-lg transition-all ${
                                        viewMode === "list" ? "bg-neon-blue text-white" : "text-gray-400 hover:text-white"
                                    }`}
                                    aria-label="List view"
                                >
                                    <List className="w-5 h-5" />
                                </button>
                            </div>
                        </div>

                        {/* Category Filter Row */}
                        <div className="w-full">
                            <div className="flex items-center gap-3 w-full">
                                <Filter className="w-5 h-5 text-gray-400 flex-shrink-0" />
                                <div 
                                    className="flex gap-3 overflow-x-auto hide-scrollbar flex-1 -mx-4 px-4 sm:mx-0 sm:px-0"
                                >
                                    {categories.map((category) => (
                                        <button
                                            key={category}
                                            onClick={() => setSelectedCategory(category)}
                                            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all whitespace-nowrap flex-shrink-0 ${
                                                selectedCategory === category
                                                    ? "bg-gradient-to-r from-neon-blue to-neon-purple text-white"
                                                    : "bg-white/5 text-gray-400 hover:bg-white/10"
                                            }`}
                                        >
                                            {category}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Results Count */}
                        <div className="text-gray-400 text-sm">
                            Showing <span className="text-neon-blue font-semibold">{filteredProjects.length}</span> of{" "}
                            <span className="text-neon-purple font-semibold">{allProjects.length}</span> projects
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Grid/List */}
            <section className="relative py-12 px-4 sm:px-6 overflow-hidden">
                <div className="max-w-7xl mx-auto w-full">
                    {viewMode === "grid" ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                            {filteredProjects.map((project, index) => (
                                <ProjectCard key={project.id} project={project} index={index} />
                            ))}
                        </div>
                    ) : (
                        <div className="space-y-6">
                            {filteredProjects.map((project, index) => (
                                <ProjectListItem key={project.id} project={project} index={index} />
                            ))}
                        </div>
                    )}

                    {filteredProjects.length === 0 && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center py-20"
                        >
                            <div className="text-6xl mb-4">🔍</div>
                            <h3 className="text-2xl font-bold mb-2">No projects found</h3>
                            <p className="text-gray-400">Try adjusting your search or filter criteria</p>
                        </motion.div>
                    )}
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative py-20 px-4 sm:px-6 overflow-hidden">
                <div className="max-w-4xl mx-auto text-center w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 sm:p-12 border border-white/10"
                    >
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                            Ready to Start Your <span className="holographic">Project?</span>
                        </h2>
                        <p className="text-lg sm:text-xl text-gray-400 mb-8">
                            Let&apos;s build something amazing together
                        </p>
                        <Link href="/contact">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full font-bold text-base sm:text-lg"
                            >
                                Get In Touch
                            </motion.button>
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </div>
    );
}

// Project Card Component
function ProjectCard({ project, index }: { project: any; index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.1 }}
            className="w-full"
        >
            <Link href={`/projects/${project.id}`}>
                <motion.div
                    whileHover={{ y: -5 }}
                    className="group bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden h-full cursor-pointer"
                >
                    <div className="relative h-64 overflow-hidden">
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover object-top group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                        <div className="absolute top-4 right-4 px-3 py-1.5 bg-black/60 backdrop-blur-xl rounded-lg border border-white/20">
                            <span className={`text-xs font-bold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                                {project.category}
                            </span>
                        </div>
                    </div>

                    <div className="p-6">
                        <h3 className="text-2xl font-bold mb-2 group-hover:text-neon-blue transition-colors">
                            {project.title}
                        </h3>
                        <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                            {project.description}
                        </p>

                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center space-x-4 text-xs text-gray-500">
                                <div className="flex items-center space-x-1">
                                    <Clock className="w-4 h-4" />
                                    <span>{project.duration}</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                    <Users className="w-4 h-4" />
                                    <span>{project.teamSize}</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-4">
                            {project.tech.slice(0, 3).map((tech: string, i: number) => (
                                <span
                                    key={i}
                                    className="px-2.5 py-1 bg-white/5 rounded-lg text-xs text-gray-300 border border-white/10"
                                >
                                    {tech}
                                </span>
                            ))}
                            {project.tech.length > 3 && (
                                <span className="px-2.5 py-1 bg-white/5 rounded-lg text-xs text-gray-400 border border-white/10">
                                    +{project.tech.length - 3}
                                </span>
                            )}
                        </div>

                        <div className="flex items-center text-neon-blue text-sm font-semibold group-hover:translate-x-2 transition-transform">
                            View Details
                            <ArrowRight className="w-4 h-4 ml-2" />
                        </div>
                    </div>
                </motion.div>
            </Link>
        </motion.div>
    );
}

// Project List Item Component - FIXED NESTED ANCHOR
function ProjectListItem({ project, index }: { project: any; index: number }) {
    const handleLiveDemoClick = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        window.open(project.liveUrl, '_blank', 'noopener,noreferrer');
    };

    return (
        <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="w-full"
        >
            <Link href={`/projects/${project.id}`}>
                <motion.div
                    whileHover={{ x: 5 }}
                    className="group bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden cursor-pointer"
                >
                    <div className="flex flex-col md:flex-row gap-6 p-6">
                        <div className="relative w-full md:w-80 h-48 flex-shrink-0 rounded-xl overflow-hidden">
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover object-top group-hover:scale-110 transition-transform duration-500"
                            />
                        </div>

                        <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between mb-3">
                                <div className="flex-1 min-w-0">
                                    <h3 className="text-2xl font-bold mb-2 group-hover:text-neon-blue transition-colors">
                                        {project.title}
                                    </h3>
                                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent border border-white/20`}>
                                        {project.category}
                                    </span>
                                </div>
                            </div>

                            <p className="text-gray-400 mb-4 line-clamp-2">
                                {project.description}
                            </p>

                            <div className="flex items-center flex-wrap gap-4 text-sm text-gray-500 mb-4">
                                <div className="flex items-center space-x-2">
                                    <Clock className="w-4 h-4" />
                                    <span>{project.duration}</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Users className="w-4 h-4" />
                                    <span>{project.teamSize}</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Calendar className="w-4 h-4" />
                                    <span>{project.role}</span>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tech.slice(0, 5).map((tech: string, i: number) => (
                                    <span
                                        key={i}
                                        className="px-3 py-1 bg-white/5 rounded-lg text-xs text-gray-300 border border-white/10"
                                    >
                                        {tech}
                                    </span>
                                ))}
                                {project.tech.length > 5 && (
                                    <span className="px-3 py-1 bg-white/5 rounded-lg text-xs text-gray-400 border border-white/10">
                                        +{project.tech.length - 5} more
                                    </span>
                                )}
                            </div>

                            <div className="flex items-center flex-wrap gap-4">
                                <div className="flex items-center text-neon-blue text-sm font-semibold">
                                    View Details
                                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                                </div>
                                <button
                                    onClick={handleLiveDemoClick}
                                    className="flex items-center text-gray-400 hover:text-neon-cyan text-sm font-semibold transition-colors"
                                >
                                    Live Demo
                                    <ExternalLink className="w-4 h-4 ml-2" />
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </Link>
        </motion.div>
    );
}
