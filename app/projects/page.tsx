"use client";

import {
    motion,
    useScroll,
    useTransform,
    useMotionValue,
    useSpring,
    useMotionTemplate
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
    ArrowRight,
    ExternalLink,
    Sparkles,
    Filter,
    Search,
    Grid3x3,
    List,
    Calendar,
    Users,
    Clock,
    Star,
    Zap
} from "lucide-react";
import { useState, useMemo, useRef, useCallback } from "react";
import { allProjects } from "@/lib/projectsData";
import Footer from "@/components/sections/footer";

// Enhanced Magnetic Wrapper with 3D tilt
function MagneticElement({
    children,
    className = "",
    strength = 0.3,
    enableTilt = false,
}: {
    children: React.ReactNode;
    className?: string;
    strength?: number;
    enableTilt?: boolean;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useMotionValue(0);
    const rotateY = useMotionValue(0);

    const springX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
    const springY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });
    const springRotateX = useSpring(rotateX, { stiffness: 150, damping: 15, mass: 0.1 });
    const springRotateY = useSpring(rotateY, { stiffness: 150, damping: 15, mass: 0.1 });

    const handleMouseMove = useCallback(
        (e: React.MouseEvent<HTMLDivElement>) => {
            if (!ref.current) return;
            const rect = ref.current.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            const deltaX = e.clientX - centerX;
            const deltaY = e.clientY - centerY;
            const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);

            if (distance < 200) {
                const attractionStrength = 1 - distance / 200;
                x.set(deltaX * attractionStrength * strength);
                y.set(deltaY * attractionStrength * strength);

                if (enableTilt) {
                    const tiltX = (deltaY / rect.height) * -15;
                    const tiltY = (deltaX / rect.width) * 15;
                    rotateX.set(tiltX);
                    rotateY.set(tiltY);
                }
            }
        },
        [x, y, rotateX, rotateY, strength, enableTilt]
    );

    const handleMouseLeave = useCallback(() => {
        x.set(0);
        y.set(0);
        rotateX.set(0);
        rotateY.set(0);
    }, [x, y, rotateX, rotateY]);

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                x: springX,
                y: springY,
                rotateX: enableTilt ? springRotateX : 0,
                rotateY: enableTilt ? springRotateY : 0,
                transformStyle: "preserve-3d",
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

// Spotlight Effect Component
function SpotlightCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
    const ref = useRef<HTMLDivElement>(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
    }, [mouseX, mouseY]);

    const spotlightStyle = useMotionTemplate`radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(0, 229, 255, 0.15), transparent 40%)`;

    return (
        <div ref={ref} onMouseMove={handleMouseMove} className={`relative ${className}`}>
            <motion.div
                className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: spotlightStyle }}
            />
            {children}
        </div>
    );
}

export default function ProjectsPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    const categories = [
        "All",
        ...Array.from(new Set(allProjects.map((p) => p.category))),
    ];

    const filteredProjects = useMemo(() => {
        return allProjects.filter((project) => {
            const q = searchQuery.toLowerCase();
            const matchesSearch =
                project.title.toLowerCase().includes(q) ||
                project.description.toLowerCase().includes(q);
            const matchesCategory =
                selectedCategory === "All" || project.category === selectedCategory;
            return matchesSearch && matchesCategory;
        });
    }, [searchQuery, selectedCategory]);

    return (
        <div className="min-h-screen bg-black text-white overflow-x-hidden">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-4 sm:px-6 overflow-hidden">
                <motion.div
                    className="absolute inset-0 bg-gradient-to-b from-neon-blue/10 via-black to-black"
                    style={{ opacity }}
                />

                {/* Enhanced Animated Background Orbs */}
                <motion.div className="absolute inset-0 pointer-events-none" style={{ y }}>
                    {[...Array(8)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute rounded-full blur-3xl"
                            style={{
                                width: `${180 + i * 50}px`,
                                height: `${180 + i * 50}px`,
                                left: `${(i * 12) % 100}%`,
                                top: `${(i * 15) % 100}%`,
                                background:
                                    i % 3 === 0
                                        ? "radial-gradient(circle, rgba(0, 229, 255, 0.3), transparent)"
                                        : i % 3 === 1
                                            ? "radial-gradient(circle, rgba(168, 85, 247, 0.25), transparent)"
                                            : "radial-gradient(circle, rgba(236, 72, 153, 0.2), transparent)",
                            }}
                            animate={{
                                x: [0, 100, -50, 0],
                                y: [0, -80, 50, 0],
                                scale: [1, 1.3, 0.9, 1],
                                opacity: [0.3, 0.5, 0.3],
                            }}
                            transition={{
                                duration: 15 + i * 3,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        />
                    ))}
                </motion.div>

                <div className="relative z-10 max-w-7xl mx-auto w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center"
                    >
                        <MagneticElement strength={0.2}>
                            <motion.div
                                initial={{ scale: 0, rotate: -180 }}
                                animate={{ scale: 1, rotate: 0 }}
                                transition={{ type: "spring", duration: 1, bounce: 0.5 }}
                                className="inline-flex items-center space-x-2 px-5 py-2.5 bg-neon-purple/10 border border-neon-purple/30 rounded-full mb-6 relative overflow-hidden group"
                            >
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-neon-purple/20 via-neon-blue/20 to-transparent"
                                    animate={{ x: ["-100%", "200%"] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                />
                                <Sparkles className="w-5 h-5 text-neon-purple relative z-10" />
                                <span className="text-sm text-neon-purple font-medium relative z-10">
                                    Complete Portfolio
                                </span>
                            </motion.div>
                        </MagneticElement>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 px-4">
                            Our <span className="holographic">Project Gallery</span>
                        </h1>

                        <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto mb-8 px-4">
                            Explore our complete collection of innovative solutions and success stories.
                        </p>

                        {/* Enhanced Stats with Magnetic Effect */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto mt-12">
                            {[
                                { label: "Projects Completed", value: `${allProjects.length}+`, icon: Zap, color: "from-cyan-500 to-blue-500" },
                                { label: "Happy Clients", value: "50+", icon: Users, color: "from-purple-500 to-pink-500" },
                                { label: "Countries Served", value: "15+", icon: Star, color: "from-orange-500 to-red-500" },
                                { label: "Success Rate", value: "98%", icon: Sparkles, color: "from-green-500 to-emerald-500" },
                            ].map((stat, index) => (
                                <MagneticElement key={index} enableTilt>
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        whileHover={{ scale: 1.05 }}
                                        className="bg-white/5 backdrop-blur-xl rounded-2xl p-4 sm:p-6 border border-white/10 relative overflow-hidden group cursor-pointer"
                                        style={{ transformStyle: "preserve-3d" }}
                                    >
                                        <motion.div
                                            className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-20`}
                                            transition={{ duration: 0.3 }}
                                        />
                                        <stat.icon className="w-6 h-6 text-neon-blue mb-2 relative z-10" />
                                        <div className="text-2xl sm:text-3xl text-white font-bold bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent mb-2 relative z-10">
                                            {stat.value}
                                        </div>
                                        <div className="text-xs sm:text-sm text-gray-400 relative z-10">{stat.label}</div>
                                    </motion.div>
                                </MagneticElement>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Enhanced Filters Section */}
            <section className="relative py-12 px-4 sm:px-6 border-t border-white/10 overflow-hidden">
                <div className="max-w-7xl mx-auto w-full">
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between">
                            {/* Enhanced Search Bar */}
                            <MagneticElement className="relative w-full sm:flex-1 lg:max-w-md" strength={0.2}>
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none z-10" />
                                <motion.input
                                    whileFocus={{ scale: 1.02 }}
                                    type="text"
                                    placeholder="Search projects..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-neon-blue/50 focus:shadow-[0_0_20px_rgba(0,229,255,0.3)] transition-all text-white placeholder:text-gray-500"
                                />
                            </MagneticElement>

                            {/* Enhanced View Mode Toggle */}
                            <MagneticElement className="flex items-center gap-2 bg-white/5 rounded-xl p-1.5 w-full sm:w-auto justify-center border border-white/10">
                                <motion.button
                                    onClick={() => setViewMode("grid")}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`p-2.5 rounded-lg transition-all relative ${viewMode === "grid"
                                        ? "bg-neon-blue text-white"
                                        : "text-gray-400 hover:text-white"
                                        }`}
                                    aria-label="Grid view"
                                >
                                    {viewMode === "grid" && (
                                        <motion.div
                                            layoutId="viewMode"
                                            className="absolute inset-0 bg-neon-blue rounded-lg shadow-[0_0_20px_rgba(0,229,255,0.6)]"
                                            transition={{ type: "spring", duration: 0.6 }}
                                        />
                                    )}
                                    <Grid3x3 className="w-5 h-5 relative z-10" />
                                </motion.button>
                                <motion.button
                                    onClick={() => setViewMode("list")}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`p-2.5 rounded-lg transition-all relative ${viewMode === "list"
                                        ? "bg-neon-blue text-white"
                                        : "text-gray-400 hover:text-white"
                                        }`}
                                    aria-label="List view"
                                >
                                    {viewMode === "list" && (
                                        <motion.div
                                            layoutId="viewMode"
                                            className="absolute inset-0 bg-neon-blue rounded-lg shadow-[0_0_20px_rgba(0,229,255,0.6)]"
                                            transition={{ type: "spring", duration: 0.6 }}
                                        />
                                    )}
                                    <List className="w-5 h-5 relative z-10" />
                                </motion.button>
                            </MagneticElement>
                        </div>

                        {/* Enhanced Category Filter */}
                        <div className="w-full">
                            <div className="flex items-center gap-3 w-full">
                                <Filter className="w-5 h-5 text-gray-400 flex-shrink-0" />
                                <div className="flex gap-3 overflow-x-auto hide-scrollbar flex-1 -mx-4 px-4 sm:mx-0 sm:px-0">
                                    {categories.map((category) => (
                                        <MagneticElement key={category} strength={0.15}>
                                            <motion.button
                                                onClick={() => setSelectedCategory(category)}
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all whitespace-nowrap flex-shrink-0 relative overflow-hidden ${selectedCategory === category
                                                    ? "text-white"
                                                    : "bg-white/5 text-gray-400 hover:bg-white/10"
                                                    }`}
                                            >
                                                {selectedCategory === category && (
                                                    <motion.div
                                                        layoutId="categoryBg"
                                                        className="absolute inset-0 bg-gradient-to-r from-neon-blue to-neon-purple shadow-[0_0_20px_rgba(0,229,255,0.4)]"
                                                        transition={{ type: "spring", duration: 0.6 }}
                                                    />
                                                )}
                                                <span className="relative z-10">{category}</span>
                                            </motion.button>
                                        </MagneticElement>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="text-gray-400 text-sm">
                            Showing{" "}
                            <span className="text-neon-blue font-semibold">
                                {filteredProjects.length}
                            </span>{" "}
                            of{" "}
                            <span className="text-neon-purple font-semibold">
                                {allProjects.length}
                            </span>{" "}
                            projects
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
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="text-center py-20"
                        >
                            <motion.div
                                className="text-6xl mb-4"
                                animate={{ rotate: [0, 10, -10, 0] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                🔍
                            </motion.div>
                            <h3 className="text-2xl font-bold mb-2">No projects found</h3>
                            <p className="text-gray-400">
                                Try adjusting your search or filter criteria.
                            </p>
                        </motion.div>
                    )}
                </div>
            </section>

            {/* Enhanced CTA Section */}
            <section className="relative py-20 px-4 sm:px-6 overflow-hidden">
                <div className="max-w-4xl mx-auto text-center w-full">
                    <MagneticElement enableTilt>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 sm:p-12 border border-white/10 relative overflow-hidden group"
                            style={{ transformStyle: "preserve-3d" }}
                        >
                            <motion.div
                                className="absolute inset-0"
                                style={{
                                    background:
                                        "radial-gradient(circle at 50% 0%, rgba(0,229,255,0.2), transparent 60%)",
                                }}
                                animate={{
                                    scale: [1, 1.2, 1],
                                    opacity: [0, 0.5, 0],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            />

                            <h2 className="text-3xl sm:text-4xl font-bold mb-4 relative z-10">
                                Ready to Start Your <span className="holographic">Project?</span>
                            </h2>
                            <p className="text-lg sm:text-xl text-gray-400 mb-8 relative z-10">
                                Let&apos;s build something amazing together.
                            </p>
                            <MagneticElement strength={0.4}>
                                <Link href="/contact">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full font-bold text-base sm:text-lg relative overflow-hidden group/btn shadow-[0_0_30px_rgba(0,229,255,0.3)]"
                                    >
                                        <motion.div
                                            className="absolute inset-0 bg-gradient-to-r from-neon-purple to-neon-blue"
                                            initial={{ x: "-100%" }}
                                            whileHover={{ x: 0 }}
                                            transition={{ duration: 0.3 }}
                                        />
                                        <span className="relative z-10">Get In Touch</span>
                                    </motion.button>
                                </Link>
                            </MagneticElement>
                        </motion.div>
                    </MagneticElement>
                </div>
            </section>

            <Footer />
        </div>
    );
}

// Enhanced Project Card with Spotlight & 3D Tilt
function ProjectCard({ project, index }: { project: any; index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.08 }}
            className="w-full"
        >
            <Link href={`/projects/${project.id}`}>
                <MagneticElement enableTilt strength={0.25}>
                    <SpotlightCard className="h-full">
                        <motion.div
                            whileHover={{ y: -8, scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            className="group bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden h-full cursor-pointer relative"
                            style={{ transformStyle: "preserve-3d" }}
                        >
                            <div className="relative h-64 overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover object-top group-hover:scale-115 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-neon-blue/20 via-neon-purple/20 to-transparent opacity-0 group-hover:opacity-100"
                                    transition={{ duration: 0.5 }}
                                />

                                <motion.div
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    className="absolute top-4 right-4 px-3 py-1.5 "
                                >
                                    <span
                                        className={`text-xs font-bold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}
                                    >
                                        {project.category}
                                    </span>
                                </motion.div>
                            </div>

                            <div className="p-6" style={{ transform: "translateZ(20px)" }}>
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
                                    {project.liveUrl && (
                                        <div className="flex items-center text-neon-blue text-xs font-semibold">
                                            Live
                                            <ExternalLink className="w-3 h-3 ml-1" />
                                        </div>
                                    )}
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

                                <motion.div
                                    className="flex items-center text-neon-blue text-sm font-semibold"
                                    whileHover={{ x: 5 }}
                                >
                                    View Details
                                    <ArrowRight className="w-4 h-4 ml-2" />
                                </motion.div>
                            </div>
                        </motion.div>
                    </SpotlightCard>
                </MagneticElement>
            </Link>
        </motion.div>
    );
}

// Enhanced List Item
function ProjectListItem({ project, index }: { project: any; index: number }) {
    const handleLiveDemoClick = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        if (project.liveUrl) {
            window.open(project.liveUrl, "_blank", "noopener,noreferrer");
        }
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
                <MagneticElement enableTilt strength={0.2}>
                    <SpotlightCard>
                        <motion.div
                            whileHover={{ x: 8, scale: 1.01 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="group bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden cursor-pointer"
                            style={{ transformStyle: "preserve-3d" }}
                        >
                            <div className="flex flex-col md:flex-row gap-6 p-6">
                                <div className="relative w-full md:w-80 h-48 flex-shrink-0 rounded-xl overflow-hidden">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover object-top group-hover:scale-110 transition-transform duration-700"
                                    />
                                </div>

                                <div className="flex-1 min-w-0">
                                    <div className="flex items-start justify-between mb-3">
                                        <div className="flex-1 min-w-0">
                                            <h3 className="text-2xl font-bold mb-2 group-hover:text-neon-blue transition-colors">
                                                {project.title}
                                            </h3>
                                            <span
                                                className={`inline-block px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent border border-white/20`}
                                            >
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
                                        <motion.div
                                            className="flex items-center text-neon-blue text-sm font-semibold"
                                            whileHover={{ x: 5 }}
                                        >
                                            View Details
                                            <ArrowRight className="w-4 h-4 ml-2" />
                                        </motion.div>

                                        {project.liveUrl && (
                                            <button
                                                onClick={handleLiveDemoClick}
                                                className="flex items-center text-gray-400 hover:text-neon-cyan text-sm font-semibold transition-colors"
                                            >
                                                Live Demo
                                                <ExternalLink className="w-4 h-4 ml-2" />
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </SpotlightCard>
                </MagneticElement>
            </Link>
        </motion.div>
    );
}
