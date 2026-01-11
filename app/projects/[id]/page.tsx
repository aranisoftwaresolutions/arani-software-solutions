"use client";

import {
    motion,
    useScroll,
    useTransform,
    useMotionValue,
    useSpring
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
    ArrowLeft,
    ExternalLink,
    Github,
    CheckCircle2,
    Users,
    Clock,
    Calendar,
    Sparkles,
    Zap,
    Target,
    TrendingUp,
    Award,
    ChevronLeft,
    ChevronRight
} from "lucide-react";
import { allProjects } from "@/lib/projectsData";
import { useState, useRef, useCallback, use } from "react";

// Magnetic Component for Interactive Elements
function MagneticElement({
    children,
    className = ""
}: {
    children: React.ReactNode;
    className?: string;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
    const springY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

    const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const deltaX = e.clientX - centerX;
        const deltaY = e.clientY - centerY;
        const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);

        if (distance < 150) {
            const strength = 1 - distance / 150;
            x.set(deltaX * strength * 0.3);
            y.set(deltaY * strength * 0.3);
        }
    }, [x, y]);

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => { x.set(0); y.set(0); }}
            style={{ x: springX, y: springY }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

export default function ProjectDetailsPage({
    params
}: {
    params: Promise<{ id: string }>
}) {
    // ✅ Unwrap the Promise using React.use()
    const { id } = use(params);

    const project = allProjects.find(p => p.id === id);
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

    const nextImage = () => {
        setActiveImage((prev) => (prev + 1) % project.images.length);
    };

    const prevImage = () => {
        setActiveImage((prev) => (prev - 1 + project.images.length) % project.images.length);
    };

    return (
        <div className="min-h-screen bg-black text-white">
            {/* Hero Section with Enhanced Magnetic Effects */}
            <section className="relative pt-32 pb-20 px-4 sm:px-6 overflow-hidden">
                <motion.div
                    className="absolute inset-0"
                    style={{ y, opacity }}
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-neon-blue/20 via-black to-black" />
                    {/* Animated Floating Orbs */}
                    {[...Array(6)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute rounded-full blur-3xl"
                            style={{
                                width: `${200 + i * 50}px`,
                                height: `${200 + i * 50}px`,
                                left: `${(i * 15) % 100}%`,
                                top: `${(i * 20) % 100}%`,
                                background: i % 2 === 0
                                    ? 'radial-gradient(circle, rgba(0, 229, 255, 0.2), transparent)'
                                    : 'radial-gradient(circle, rgba(138, 43, 226, 0.2), transparent)',
                            }}
                            animate={{
                                x: [0, 100, 0],
                                y: [0, -100, 0],
                                scale: [1, 1.2, 1],
                            }}
                            transition={{
                                duration: 20 + i * 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        />
                    ))}
                </motion.div>

                <div className="relative z-10 max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        {/* Back Button with Magnetic Effect */}
                        <MagneticElement>
                            <Link href="/projects">
                                <motion.div
                                    whileHover={{ x: -5, scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="inline-flex items-center space-x-2 text-gray-400 hover:text-neon-blue transition-colors mb-8 cursor-pointer px-4 py-2 bg-white/5 rounded-xl border border-white/10"
                                >
                                    <ArrowLeft className="w-5 h-5" />
                                    <span>Back to Projects</span>
                                </motion.div>
                            </Link>
                        </MagneticElement>

                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            {/* Left Column - Project Info */}
                            <div>
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ type: "spring", duration: 0.8 }}
                                    className="inline-flex items-center space-x-2 px-4 py-2 bg-neon-purple/10 border border-neon-purple/30 rounded-full mb-6 relative overflow-hidden group"
                                >
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-r from-neon-purple/20 to-transparent"
                                        initial={{ x: "-100%" }}
                                        whileHover={{ x: "100%" }}
                                        transition={{ duration: 0.6 }}
                                    />
                                    <Sparkles className="w-4 h-4 text-neon-purple relative z-10" />
                                    <span className="text-sm text-neon-purple font-medium relative z-10">{project.category}</span>
                                </motion.div>

                                <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                                    {project.title.split(' ').map((word, i) => (
                                        <motion.span
                                            key={i}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: i * 0.1 }}
                                            className="inline-block mr-3"
                                        >
                                            {word}
                                        </motion.span>
                                    ))}
                                </h1>

                                <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                                    {project.longDescription}
                                </p>

                                {/* CTA Buttons with Magnetic Effect */}
                                <div className="flex flex-wrap gap-4 mb-8">
                                    <MagneticElement>
                                        <motion.a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-neon-blue to-neon-cyan rounded-xl font-semibold relative overflow-hidden group"
                                        >
                                            <motion.div
                                                className="absolute inset-0 bg-gradient-to-r from-neon-cyan to-neon-blue"
                                                initial={{ x: "-100%" }}
                                                whileHover={{ x: 0 }}
                                                transition={{ duration: 0.3 }}
                                            />
                                            <span className="relative z-10">View Live Project</span>
                                            <ExternalLink className="w-5 h-5 relative z-10" />
                                        </motion.a>
                                    </MagneticElement>

                                    {project.githubUrl && (
                                        <MagneticElement>
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
                                        </MagneticElement>
                                    )}
                                </div>

                                {/* Stats Cards with Hover Effects */}
                                <div className="grid grid-cols-3 gap-4">
                                    {[
                                        { icon: Clock, label: "Duration", value: project.duration, color: "from-blue-500 to-cyan-500" },
                                        { icon: Users, label: "Team Size", value: project.teamSize, color: "from-purple-500 to-pink-500" },
                                        { icon: Calendar, label: "Role", value: project.role, color: "from-orange-500 to-red-500" },
                                    ].map((item, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                            whileHover={{ scale: 1.05, y: -5 }}
                                            className="bg-white/5 backdrop-blur-xl rounded-xl p-4 border border-white/10 cursor-pointer group relative overflow-hidden"
                                        >
                                            <motion.div
                                                className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10`}
                                                transition={{ duration: 0.3 }}
                                            />
                                            <item.icon className="w-6 h-6 text-neon-blue mb-2 relative z-10 group-hover:scale-110 transition-transform" />
                                            <div className="text-xs text-gray-500 mb-1 relative z-10">{item.label}</div>
                                            <div className="font-semibold relative z-10">{item.value}</div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Right Column - Enhanced Image Gallery */}
                            <div className="relative">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                    className="relative h-[500px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl group"
                                >
                                    <Image
                                        src={project.images[activeImage]}
                                        alt={project.title}
                                        fill
                                        className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                                        priority
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                                    {/* Navigation Arrows */}
                                    {project.images.length > 1 && (
                                        <>
                                            <MagneticElement className="absolute left-4 top-1/2 -translate-y-1/2 z-20">
                                                <motion.button
                                                    onClick={prevImage}
                                                    whileHover={{ scale: 1.1 }}
                                                    whileTap={{ scale: 0.9 }}
                                                    className="p-3 bg-black/60 backdrop-blur-xl rounded-full border border-white/20 hover:bg-black/80 transition-all"
                                                >
                                                    <ChevronLeft className="w-6 h-6" />
                                                </motion.button>
                                            </MagneticElement>

                                            <MagneticElement className="absolute right-4 top-1/2 -translate-y-1/2 z-20">
                                                <motion.button
                                                    onClick={nextImage}
                                                    whileHover={{ scale: 1.1 }}
                                                    whileTap={{ scale: 0.9 }}
                                                    className="p-3 bg-black/60 backdrop-blur-xl rounded-full border border-white/20 hover:bg-black/80 transition-all"
                                                >
                                                    <ChevronRight className="w-6 h-6" />
                                                </motion.button>
                                            </MagneticElement>
                                        </>
                                    )}

                                    {/* Image Counter */}
                                    <div className="absolute bottom-4 right-4 px-4 py-2 bg-black/60 backdrop-blur-xl rounded-full border border-white/20 text-sm font-semibold z-20">
                                        {activeImage + 1} / {project.images.length}
                                    </div>
                                </motion.div>

                                {/* Enhanced Thumbnails */}
                                {project.images.length > 1 && (
                                    <div className="flex gap-3 mt-4 overflow-x-auto pb-2 hide-scrollbar">
                                        {project.images.map((img, index) => (
                                            <motion.button
                                                key={index}
                                                onClick={() => setActiveImage(index)}
                                                whileHover={{ scale: 1.05, y: -3 }}
                                                whileTap={{ scale: 0.95 }}
                                                className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 transition-all flex-shrink-0 ${activeImage === index
                                                        ? "border-neon-blue shadow-lg shadow-neon-blue/50"
                                                        : "border-white/20 hover:border-white/40"
                                                    }`}
                                            >
                                                <Image
                                                    src={img}
                                                    alt={`${project.title} ${index + 1}`}
                                                    fill
                                                    className="object-cover"
                                                />
                                                {activeImage === index && (
                                                    <motion.div
                                                        layoutId="activeThumb"
                                                        className="absolute inset-0 bg-neon-blue/20"
                                                        transition={{ type: "spring", duration: 0.5 }}
                                                    />
                                                )}
                                            </motion.button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Challenge, Solution, Impact - Enhanced Cards */}
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
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ scale: 1.03, y: -5 }}
                                className="bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm rounded-2xl p-8 border border-white/10 cursor-pointer group relative overflow-hidden"
                            >
                                <motion.div
                                    className={`absolute inset-0 bg-gradient-to-br ${section.color} opacity-0 group-hover:opacity-10`}
                                    transition={{ duration: 0.5 }}
                                />

                                <motion.div
                                    className={`inline-flex p-3 bg-gradient-to-r ${section.color} rounded-xl mb-4 relative z-10`}
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <section.icon className="w-6 h-6 text-white" />
                                </motion.div>
                                <h3 className="text-2xl font-bold mb-4 relative z-10">{section.title}</h3>
                                <p className="text-gray-400 leading-relaxed relative z-10">{section.content}</p>

                                {/* Animated Corner Accent */}
                                <motion.div
                                    className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-30"
                                    style={{
                                        background: `linear-gradient(to bottom right, ${section.color.includes('red') ? '#ef4444' :
                                                section.color.includes('blue') ? '#00e5ff' :
                                                    '#10b981'
                                            }, transparent)`
                                    }}
                                    transition={{ duration: 0.5 }}
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Key Results with Enhanced Animation */}
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
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ scale: 1.02, x: 5 }}
                                className="flex items-start space-x-4 bg-white/5 backdrop-blur-xl rounded-xl p-6 border border-white/10 group cursor-pointer relative overflow-hidden"
                            >
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-transparent opacity-0 group-hover:opacity-100"
                                    transition={{ duration: 0.3 }}
                                />
                                <CheckCircle2 className="w-6 h-6 text-neon-green flex-shrink-0 mt-1 relative z-10 group-hover:scale-110 transition-transform" />
                                <p className="text-lg relative z-10">{result}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technologies with 3D Hover Effect */}
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
                            <MagneticElement key={index}>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ delay: index * 0.05 }}
                                    whileHover={{
                                        scale: 1.15,
                                        y: -8,
                                        rotateX: 10,
                                        rotateY: 10,
                                    }}
                                    className="px-6 py-3 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 font-semibold cursor-pointer relative overflow-hidden group"
                                    style={{ transformStyle: "preserve-3d" }}
                                >
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 opacity-0 group-hover:opacity-100"
                                        transition={{ duration: 0.3 }}
                                    />
                                    <span className="relative z-10">{tech}</span>
                                </motion.div>
                            </MagneticElement>
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
                                        viewport={{ once: true, margin: "-50px" }}
                                        transition={{ delay: index * 0.1 }}
                                        whileHover={{ y: -10, scale: 1.02 }}
                                        className="group bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden cursor-pointer relative"
                                    >
                                        <div className="relative h-48 overflow-hidden">
                                            <Image
                                                src={relatedProject.image}
                                                alt={relatedProject.title}
                                                fill
                                                className="object-cover object-top group-hover:scale-110 transition-transform duration-500"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                                            {/* Hover Overlay */}
                                            <motion.div
                                                className="absolute inset-0 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 opacity-0 group-hover:opacity-100"
                                                transition={{ duration: 0.3 }}
                                            />
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

            {/* Enhanced CTA Section */}
            <section className="relative py-20 px-4 sm:px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-12 border border-white/10 relative overflow-hidden group"
                    >
                        {/* Animated Background Gradient */}
                        <motion.div
                            className="absolute inset-0 opacity-0 group-hover:opacity-100"
                            style={{
                                background: 'radial-gradient(circle at 50% 50%, rgba(0, 229, 255, 0.1), rgba(138, 43, 226, 0.1), transparent)',
                            }}
                            animate={{
                                scale: [1, 1.2, 1],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                            }}
                        />

                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", duration: 0.8 }}
                            className="inline-flex items-center space-x-2 px-4 py-2 bg-neon-purple/10 border border-neon-purple/30 rounded-full mb-6"
                        >
                            <Award className="w-5 h-5 text-neon-purple" />
                            <span className="text-sm text-neon-purple font-medium">Ready to Start?</span>
                        </motion.div>

                        <h2 className="text-4xl font-bold mb-4 relative z-10">
                            Like What You See?
                        </h2>
                        <p className="text-xl text-gray-400 mb-8 relative z-10">
                            Let's create something extraordinary for your business
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center relative z-10">
                            <MagneticElement>
                                <Link href="/contact">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full font-bold text-lg relative overflow-hidden group"
                                    >
                                        <motion.div
                                            className="absolute inset-0 bg-gradient-to-r from-neon-purple to-neon-blue"
                                            initial={{ x: "-100%" }}
                                            whileHover={{ x: 0 }}
                                            transition={{ duration: 0.3 }}
                                        />
                                        <span className="relative z-10">Start Your Project</span>
                                    </motion.button>
                                </Link>
                            </MagneticElement>
                            <MagneticElement>
                                <Link href="/projects">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="px-8 py-4 bg-white/5 border border-white/10 rounded-full font-bold text-lg hover:bg-white/10 transition-colors"
                                    >
                                        View More Projects
                                    </motion.button>
                                </Link>
                            </MagneticElement>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
