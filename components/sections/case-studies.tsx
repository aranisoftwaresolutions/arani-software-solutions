"use client";

import { motion, useMotionValue, useSpring, useTransform, useScroll } from "framer-motion";
import Image from "next/image";
import { ArrowRight, ExternalLink, Sparkles, Zap, Eye, Brain, Cpu } from "lucide-react";
import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";

interface CaseStudy {
    id: string;
    title: string;
    client?: string;
    category: string;
    results: string;
    description: string;
    tech: string[];
    gradient: string;
    image: string;
    liveUrl: string;
    detailsUrl?: string;
}

const caseStudies: CaseStudy[] = [
    {
        id: "ngo-web-app",
        title: "NGO Web App",
        category: "Community Development",
        results: "Dheodha Vikas Samiti",
        description: "Community development organization website built to showcase village development initiatives and social welfare programs.",
        tech: ["React.js", "Next.js", "Vercel", "Tailwind", "AWS"],
        gradient: "from-neon-green to-neon-cyan",
        image: "https://res.cloudinary.com/dusalynec/image/upload/v1763976347/Screenshot_2025-11-24_144533_lgo4ge.png",
        liveUrl: "https://www.dheodhavikassamiti.org/",
    },
    {
        id: "agrospace-solution",
        title: "AgroSpace Solution",
        category: "AgTech + AI",
        results: "AI-Powered Analytics",
        description: "AI-powered ag-analytics dashboard empowering farmers with data-driven insights for smarter agricultural decisions.",
        tech: ["React.js", "Express.js", "Node.js", "MongoDB", "AWS"],
        gradient: "from-neon-green to-neon-cyan",
        image: "/projects/project1.png",
        liveUrl: "https://my.agrospace.io/",
    },
    {
        id: "empowering-marine",
        title: "Empowering Marine",
        category: "Maritime Tech",
        results: "Operations Portal",
        description: "Maritime operations portal streamlining vessel management, crew coordination, and maritime logistics operations.",
        tech: ["React.js", "Express.js", "Node.js", "MongoDB"],
        gradient: "from-neon-blue to-neon-cyan",
        image: "/projects/project2.png",
        liveUrl: "https://oceanq.eu/",
    },
];

// AI Particles
function AIParticles({ color, isHovered }: { color: string; isHovered: boolean }) {
    if (!isHovered) return null;

    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(4)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1 h-1 rounded-full"
                    style={{
                        background: color,
                        left: "50%",
                        top: "50%",
                        boxShadow: `0 0 8px ${color}`,
                    }}
                    animate={{
                        x: [0, Math.cos((i * Math.PI) / 2) * 60],
                        y: [0, Math.sin((i * Math.PI) / 2) * 60],
                        opacity: [1, 0],
                        scale: [1, 0],
                    }}
                    transition={{
                        duration: 1.2,
                        repeat: Infinity,
                        delay: i * 0.2,
                        ease: "easeOut",
                    }}
                />
            ))}
        </div>
    );
}

// Magnetic Project Card
function MagneticProjectCard({
    study,
    index,
    isScrolling
}: {
    study: CaseStudy;
    index: number;
    isScrolling: boolean;
}) {
    const [isHovered, setIsHovered] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
    const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ["start end", "end start"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 1]);
    const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.95, 1, 1, 1]);

    const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current || isScrolling) return;
        const rect = cardRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const distanceX = (e.clientX - centerX) / rect.width;
        const distanceY = (e.clientY - centerY) / rect.height;
        x.set(distanceX * 0.5);
        y.set(distanceY * 0.5);
    }, [isScrolling, x, y]);

    const handleMouseEnter = useCallback(() => {
        if (isScrolling) return;
        setIsHovered(true);
    }, [isScrolling]);

    const handleMouseLeave = useCallback(() => {
        x.set(0);
        y.set(0);
        setIsHovered(false);
    }, [x, y]);

    const shouldAnimate = !isScrolling;

    return (
        <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX: shouldAnimate && isHovered ? rotateX : 0,
                rotateY: shouldAnimate && isHovered ? rotateY : 0,
                transformStyle: "preserve-3d",
                opacity,
                scale,
                willChange: isHovered && !isScrolling ? "transform" : "auto",
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px", amount: 0.3 }}
            transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: [0.25, 0.46, 0.45, 0.94]
            }}
            className="group cursor-pointer h-full"
        >
            <div className="relative h-full bg-gradient-to-br from-white/[0.03] to-transparent backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden shadow-xl transition-shadow duration-300 hover:shadow-2xl">
                {shouldAnimate && <AIParticles color={study.gradient.includes('green') ? '#10b981' : '#00e5ff'} isHovered={isHovered} />}

                {isHovered && shouldAnimate && (
                    <motion.div
                        className="absolute inset-0 rounded-2xl opacity-30 pointer-events-none"
                        style={{
                            background: `linear-gradient(45deg, transparent, rgba(0, 229, 255, 0.4), transparent)`,
                            backgroundSize: "200% 200%",
                        }}
                        animate={{
                            backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                    />
                )}

                {isHovered && shouldAnimate && (
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none"
                        initial={{ x: "-100%" }}
                        animate={{ x: "200%" }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    />
                )}

                <div className="relative h-56 sm:h-64 md:h-72 lg:h-80 overflow-hidden rounded-t-2xl">
                    <motion.div
                        className="relative w-full h-full"
                        whileHover={shouldAnimate ? { scale: 1.05 } : {}}
                        transition={{ duration: 0.5 }}
                    >
                        <Image
                            src={study.image}
                            alt={study.title}
                            fill
                            className="object-cover object-top"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            priority={index < 3}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    </motion.div>

                    <motion.div
                        className="absolute top-3 right-3 px-3 py-1.5 backdrop-blur-2xl bg-black/60 border border-white/20 rounded-xl"
                        whileHover={shouldAnimate ? { y: -2, scale: 1.05 } : {}}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="flex items-center space-x-1.5">
                            <Zap className="w-3 h-3 text-neon-green" />
                            <span className={`text-xs font-bold bg-gradient-to-r ${study.gradient} bg-clip-text text-transparent`}>
                                {study.results}
                            </span>
                        </div>
                    </motion.div>

                    <motion.div
                        className="absolute bottom-3 left-3 flex items-center space-x-1.5 px-2.5 py-1.5 backdrop-blur-2xl bg-black/60 rounded-lg"
                        animate={{
                            boxShadow: [
                                "0 0 15px rgba(0, 229, 255, 0.3)",
                                "0 0 30px rgba(0, 229, 255, 0.6)",
                                "0 0 15px rgba(0, 229, 255, 0.3)",
                            ],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        <motion.div
                            className="w-1.5 h-1.5 bg-neon-green rounded-full"
                            animate={{ scale: [1, 1.3, 1] }}
                            transition={{ duration: 1, repeat: Infinity }}
                        />
                        <Eye className="w-3 h-3 text-neon-blue" />
                        <span className="text-xs text-white font-medium">Live</span>
                    </motion.div>

                    {isHovered && shouldAnimate && (
                        <>
                            {[
                                { position: "top-2 left-2", rotate: 0 },
                                { position: "top-2 right-2", rotate: 90 },
                            ].map((corner, i) => (
                                <motion.div
                                    key={i}
                                    className={`absolute ${corner.position} w-6 h-6 pointer-events-none`}
                                    style={{ transform: `rotate(${corner.rotate}deg)` }}
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: i * 0.05 }}
                                >
                                    <svg viewBox="0 0 20 20" className="w-full h-full">
                                        <motion.path
                                            d="M 0 5 L 0 0 L 5 0"
                                            fill="none"
                                            stroke="rgba(0, 229, 255, 0.8)"
                                            strokeWidth="2"
                                            initial={{ pathLength: 0 }}
                                            animate={{ pathLength: 1 }}
                                            transition={{ duration: 0.5 }}
                                        />
                                    </svg>
                                </motion.div>
                            ))}
                        </>
                    )}
                </div>

                <div className="p-4 sm:p-5 md:p-6">
                    <motion.div
                        whileHover={shouldAnimate ? { scale: 1.05, x: 3 } : {}}
                        className="inline-flex items-center space-x-1.5 px-2.5 py-1 bg-white/5 rounded-full text-xs border border-white/10 mb-3"
                    >
                        <Brain className="w-3 h-3 text-neon-blue" />
                        <span className="text-neon-blue font-medium">{study.category}</span>
                    </motion.div>

                    <motion.h3
                        className="text-xl sm:text-2xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 line-clamp-2"
                        whileHover={shouldAnimate ? {
                            x: 3,
                            backgroundImage: "linear-gradient(to right, #00e5ff, #a855f7)",
                        } : {}}
                        transition={{ duration: 0.3 }}
                    >
                        {study.title}
                    </motion.h3>

                    <p className="text-sm text-gray-400 mb-4 leading-relaxed line-clamp-3">
                        {study.description}
                    </p>

                    <div className="mb-4">
                        <div className="text-xs text-gray-500 mb-2 font-medium flex items-center space-x-1.5">
                            <Cpu className="w-3 h-3" />
                            <span>Tech Stack</span>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                            {study.tech.slice(0, 4).map((tech, i) => (
                                <motion.span
                                    key={i}
                                    whileHover={shouldAnimate ? {
                                        scale: 1.08,
                                        y: -2,
                                        backgroundColor: "rgba(0, 229, 255, 0.15)",
                                        borderColor: "rgba(0, 229, 255, 0.5)",
                                        color: "#00e5ff",
                                        boxShadow: "0 0 15px rgba(0, 229, 255, 0.3)",
                                    } : {}}
                                    className="px-2.5 py-1 bg-white/5 rounded-lg text-xs text-gray-300 border border-white/10 transition-all cursor-pointer"
                                >
                                    {tech}
                                </motion.span>
                            ))}
                            {study.tech.length > 4 && (
                                <span className="px-2.5 py-1 bg-white/5 rounded-lg text-xs text-gray-400 border border-white/10">
                                    +{study.tech.length - 4}
                                </span>
                            )}
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        <motion.a
                            href={study.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={shouldAnimate ? {
                                scale: 1.05,
                                boxShadow: "0 0 25px rgba(0, 229, 255, 0.5)",
                                x: 3,
                            } : {}}
                            whileTap={{ scale: 0.95 }}
                            className="flex-1 flex items-center justify-center space-x-2 px-4 py-2.5 bg-gradient-to-r from-neon-blue to-neon-cyan rounded-xl font-semibold text-sm transition-all"
                        >
                            <span>Live Demo</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                        </motion.a>

                        <Link href={`/projects/${study.id}`}>
                            <motion.div
                                whileHover={shouldAnimate ? {
                                    x: 3,
                                    borderColor: "rgba(255, 255, 255, 0.3)",
                                    backgroundColor: "rgba(255, 255, 255, 0.08)",
                                } : {}}
                                className="px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-gray-300 hover:text-white text-sm font-semibold transition-all"
                            >
                                <ArrowRight className="w-4 h-4" />
                            </motion.div>
                        </Link>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default function CaseStudies() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isScrolling, setIsScrolling] = useState(false);
    const scrollTimeoutRef = useRef<NodeJS.Timeout>();

    useEffect(() => {
        let rafId: number;
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            if (rafId) return;

            rafId = requestAnimationFrame(() => {
                const currentScrollY = window.scrollY;
                if (Math.abs(currentScrollY - lastScrollY) > 5) {
                    setIsScrolling(true);
                    lastScrollY = currentScrollY;
                }

                if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);

                scrollTimeoutRef.current = setTimeout(() => {
                    setIsScrolling(false);
                }, 100);

                rafId = 0 as any;
            });
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
            if (rafId) cancelAnimationFrame(rafId);
            if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
        };
    }, []);

    useEffect(() => {
        if (isScrolling) return;

        let rafId: number;
        let lastX = 0;
        let lastY = 0;

        const handleMouseMove = (e: MouseEvent) => {
            const newX = (e.clientX / window.innerWidth) * 100;
            const newY = (e.clientY / window.innerHeight) * 100;

            if (Math.abs(newX - lastX) < 1 && Math.abs(newY - lastY) < 1) return;
            if (rafId) return;

            rafId = requestAnimationFrame(() => {
                setMousePosition({ x: newX, y: newY });
                lastX = newX;
                lastY = newY;
                rafId = 0 as any;
            });
        };

        window.addEventListener("mousemove", handleMouseMove, { passive: true });
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            if (rafId) cancelAnimationFrame(rafId);
        };
    }, [isScrolling]);

    return (
        <section className="relative py-16 sm:py-24 lg:py-32 px-4 sm:px-6 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />

            <div
                className="absolute inset-0 opacity-5"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(0, 229, 255, 0.1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(0, 229, 255, 0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: "60px 60px",
                }}
            />

            {!isScrolling && (
                <>
                    <motion.div
                        className="absolute w-[500px] h-[500px] bg-neon-blue/10 rounded-full blur-[120px] pointer-events-none"
                        style={{
                            left: `${mousePosition.x}%`,
                            top: `${mousePosition.y}%`,
                            transform: "translate(-50%, -50%)",
                        }}
                        transition={{ duration: 0.3 }}
                    />
                    <motion.div
                        className="absolute w-[600px] h-[600px] bg-neon-purple/10 rounded-full blur-[120px] pointer-events-none"
                        style={{
                            left: `${100 - mousePosition.x}%`,
                            top: `${100 - mousePosition.y}%`,
                            transform: "translate(-50%, -50%)",
                        }}
                        transition={{ duration: 0.3 }}
                    />
                </>
            )}

            <div className="relative z-10 max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px", amount: 0.5 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="text-center mb-12 sm:mb-16 lg:mb-20"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", duration: 0.6, bounce: 0.3 }}
                        className="inline-flex items-center space-x-2 px-4 py-2 bg-neon-purple/10 border border-neon-purple/30 rounded-full mb-4"
                    >
                        <Sparkles className="w-4 h-4 text-neon-purple" />
                        <span className="text-sm text-neon-purple font-medium">AI-Powered Portfolio</span>
                    </motion.div>

                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
                        Featured <span className="holographic">Projects</span>
                    </h2>

                    <p className="text-base sm:text-xl text-gray-400 max-w-2xl mx-auto px-4">
                        Innovative solutions delivered with cutting-edge technology and AI
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
                    {caseStudies.map((study, index) => (
                        <MagneticProjectCard
                            key={index}
                            study={study}
                            index={index}
                            isScrolling={isScrolling}
                        />
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-center mt-12 sm:mt-16"
                >
                    <Link href="/projects">
                        <motion.div
                            whileHover={{
                                scale: 1.05,
                                boxShadow: "0 0 40px rgba(0, 229, 255, 0.5)"
                            }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center space-x-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full font-bold text-sm sm:text-lg transition-all cursor-pointer"
                        >
                            <span>View All Projects</span>
                            <motion.div
                                animate={{ x: [0, 5, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            >
                                <ArrowRight className="w-5 h-5" />
                            </motion.div>
                        </motion.div>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
