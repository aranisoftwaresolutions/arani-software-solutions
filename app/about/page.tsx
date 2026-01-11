"use client";

import { motion, useMotionValue, useSpring, useTransform, useScroll } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/utils";
import Footer from "@/components/sections/footer";
import { Award, Users, Globe, Zap, Target, Rocket, Code, Smartphone, Database, TrendingUp, Palette, Settings } from "lucide-react";
import Sphere3D from "@/components/animations/3d-sphere";
import { useRef, useState, useCallback } from "react";

// Journey timeline data
const journeyMilestones = [
    {
        year: "2020",
        icon: Code,
        title: "The Beginning",
        description: "Started as a scrappy startup, crafting pixel-perfect websites for local clients with passion and precision.",
        gradient: "from-blue-500 to-cyan-500",
        tech: ["HTML", "CSS", "JavaScript"]
    },
    {
        year: "2021",
        icon: Smartphone,
        title: "Mobile Revolution",
        description: "Expanded into native mobile development for iOS and Android, building seamless, high-performance apps users love.",
        gradient: "from-purple-500 to-pink-500",
        tech: ["iOS", "Android", "React Native"]
    },
    {
        year: "2022",
        icon: Database,
        title: "Full-Stack Mastery",
        description: "Embraced the MERN stack (MongoDB, Express, React, Node.js), delivering dynamic, data-driven applications with rock-solid architecture.",
        gradient: "from-emerald-500 to-teal-500",
        tech: ["MongoDB", "Express", "React", "Node.js"]
    },
    {
        year: "2023",
        icon: TrendingUp,
        title: "Digital Marketing",
        description: "Added SEO and SMO services to our toolkit, ensuring every site and app gets found and shared by the right audience.",
        gradient: "from-amber-500 to-orange-500",
        tech: ["SEO", "SMO", "Analytics"]
    },
    {
        year: "2024",
        icon: Palette,
        title: "Design Excellence",
        description: "Doubled down on UI/UX flows and launched custom CMS platforms that let non-technical teams manage content effortlessly.",
        gradient: "from-rose-500 to-pink-500",
        tech: ["Figma", "CMS", "Design Systems"]
    },
    {
        year: "2026",
        icon: Settings,
        title: "Present Day",
        description: "A lean but mighty team of full-stack engineers, designers, and strategists combining agility with deep technical expertise.",
        gradient: "from-indigo-500 to-purple-500",
        tech: ["AI", "Cloud", "Enterprise"]
    },
];

// Magnetic Timeline Card Component
function MagneticTimelineCard({
    milestone,
    index
}: {
    milestone: typeof journeyMilestones[0];
    index: number;
}) {
    const cardRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springX = useSpring(x, { stiffness: 250, damping: 25 });
    const springY = useSpring(y, { stiffness: 250, damping: 25 });

    const rotateX = useTransform(springY, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(springX, [-0.5, 0.5], ["-10deg", "10deg"]);
    const scale = useTransform(springX, [-0.5, 0, 0.5], [1.02, 1, 1.02]);

    const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;

        const rect = cardRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const deltaX = e.clientX - centerX;
        const deltaY = e.clientY - centerY;

        const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);
        const maxDistance = 150;

        if (distance < maxDistance) {
            const strength = 1 - distance / maxDistance;
            x.set((deltaX / rect.width) * strength * 0.5);
            y.set((deltaY / rect.height) * strength * 0.5);
        }
    }, [x, y]);

    const handleMouseLeave = useCallback(() => {
        x.set(0);
        y.set(0);
        setIsHovered(false);
    }, [x, y]);

    return (
        <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            style={{
                rotateX,
                rotateY,
                scale,
                transformStyle: "preserve-3d",
            }}
            className="relative group"
        >
            <div className="glass-card p-8 relative overflow-hidden border-2 border-white/10 hover:border-white/30 transition-all duration-500">
                {/* Animated Background Glow */}
                <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                        background: `radial-gradient(circle at 50% 50%, ${milestone.gradient.includes('blue') ? 'rgba(59,130,246,0.2)' :
                            milestone.gradient.includes('purple') ? 'rgba(168,85,247,0.2)' :
                                milestone.gradient.includes('emerald') ? 'rgba(16,185,129,0.2)' :
                                    milestone.gradient.includes('amber') ? 'rgba(245,158,11,0.2)' :
                                        milestone.gradient.includes('rose') ? 'rgba(244,63,94,0.2)' :
                                            'rgba(99,102,241,0.2)'
                            } 0%, transparent 70%)`,
                    }}
                />

                {/* Scan Line */}
                {isHovered && (
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                        initial={{ x: "-100%" }}
                        animate={{ x: "200%" }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    />
                )}

                {/* Particle Burst */}
                {isHovered && (
                    <div className="absolute inset-0 pointer-events-none overflow-hidden">
                        {[...Array(8)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute w-1 h-1 rounded-full"
                                style={{
                                    background: milestone.gradient.includes('blue') ? '#3b82f6' :
                                        milestone.gradient.includes('purple') ? '#a855f7' :
                                            milestone.gradient.includes('emerald') ? '#10b981' :
                                                milestone.gradient.includes('amber') ? '#f59e0b' :
                                                    milestone.gradient.includes('rose') ? '#f43f5e' :
                                                        '#6366f1',
                                    left: "50%",
                                    top: "50%",
                                    boxShadow: "0 0 10px currentColor",
                                }}
                                animate={{
                                    x: [0, Math.cos((i * Math.PI) / 4) * 80],
                                    y: [0, Math.sin((i * Math.PI) / 4) * 80],
                                    opacity: [1, 0],
                                    scale: [0, 1.5, 0],
                                }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    delay: i * 0.15,
                                }}
                            />
                        ))}
                    </div>
                )}

                {/* Content */}
                <div className="relative z-10">
                    {/* Year Badge */}
                    <motion.div
                        className={`absolute -top-4 -right-4 w-16 h-16 rounded-full bg-gradient-to-br ${milestone.gradient} flex items-center justify-center font-bold text-white shadow-2xl`}
                        style={{ transform: "translateZ(40px)" }}
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.6 }}
                    >
                        {milestone.year}
                    </motion.div>

                    {/* Icon */}
                    <motion.div
                        className={`w-14 h-14 rounded-xl bg-gradient-to-br ${milestone.gradient} flex items-center justify-center mb-6 shadow-lg`}
                        style={{ transform: "translateZ(30px)" }}
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.7 }}
                    >
                        <milestone.icon className="w-7 h-7 text-white" />

                        {/* Glow effect */}
                        <motion.div
                            className="absolute inset-0 rounded-xl blur-xl opacity-50"
                            style={{
                                background: `linear-gradient(to bottom right, ${milestone.gradient.includes('blue') ? '#3b82f6' :
                                    milestone.gradient.includes('purple') ? '#a855f7' :
                                        milestone.gradient.includes('emerald') ? '#10b981' :
                                            milestone.gradient.includes('amber') ? '#f59e0b' :
                                                milestone.gradient.includes('rose') ? '#f43f5e' :
                                                    '#6366f1'
                                    }, transparent)`
                            }}
                            animate={isHovered ? {
                                scale: [1, 1.5, 1],
                                opacity: [0.5, 0.8, 0.5],
                            } : {}}
                            transition={{ duration: 2, repeat: Infinity }}
                        />
                    </motion.div>

                    {/* Title */}
                    <motion.h3
                        className={`text-2xl font-bold mb-3 transition-all duration-300 ${isHovered
                            ? `bg-gradient-to-r ${milestone.gradient} bg-clip-text text-transparent`
                            : 'text-white'
                            }`}
                        style={{ transform: "translateZ(20px)" }}
                    >
                        {milestone.title}
                    </motion.h3>

                    {/* Description */}
                    <motion.p
                        className="text-gray-400 leading-relaxed mb-4"
                        style={{ transform: "translateZ(15px)" }}
                    >
                        {milestone.description}
                    </motion.p>

                    {/* Tech Tags */}
                    <motion.div
                        className="flex flex-wrap gap-2"
                        style={{ transform: "translateZ(10px)" }}
                    >
                        {milestone.tech.map((tech, i) => (
                            <motion.span
                                key={i}
                                className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${milestone.gradient} bg-opacity-20 border border-white/20`}
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.2 + i * 0.1 }}
                                whileHover={{ scale: 1.1, y: -2 }}
                            >
                                {tech}
                            </motion.span>
                        ))}
                    </motion.div>
                </div>

                {/* Holographic Edge */}
                <motion.div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 pointer-events-none"
                    style={{
                        background: `linear-gradient(45deg, transparent, ${milestone.gradient.includes('blue') ? 'rgba(59,130,246,0.3)' :
                            milestone.gradient.includes('purple') ? 'rgba(168,85,247,0.3)' :
                                milestone.gradient.includes('emerald') ? 'rgba(16,185,129,0.3)' :
                                    milestone.gradient.includes('amber') ? 'rgba(245,158,11,0.3)' :
                                        milestone.gradient.includes('rose') ? 'rgba(244,63,94,0.3)' :
                                            'rgba(99,102,241,0.3)'
                            }, transparent)`,
                        backgroundSize: "200% 200%",
                    }}
                    animate={{
                        backgroundPosition: ["0% 0%", "100% 100%"],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                />
            </div>

            {/* Connecting Line (for even-indexed items) */}
            {index < journeyMilestones.length - 1 && (
                <motion.div
                    className={`hidden lg:block absolute top-1/2 ${index % 2 === 0 ? '-right-12' : '-left-12'
                        } w-12 h-0.5 bg-gradient-to-r ${milestone.gradient}`}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.2 + 0.5 }}
                >
                    <motion.div
                        className="absolute -right-2 -top-1.5 w-4 h-4 rounded-full bg-gradient-to-br from-white to-gray-400"
                        animate={{
                            scale: [1, 1.5, 1],
                            boxShadow: [
                                '0 0 0px rgba(255,255,255,0)',
                                '0 0 20px rgba(255,255,255,0.8)',
                                '0 0 0px rgba(255,255,255,0)',
                            ],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                </motion.div>
            )}
        </motion.div>
    );
}

// Magnetic Value Card
function MagneticValueCard({ value, index }: { value: any; index: number }) {
    const cardRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springX = useSpring(x, { stiffness: 200, damping: 20 });
    const springY = useSpring(y, { stiffness: 200, damping: 20 });

    const rotateX = useTransform(springY, [-0.5, 0.5], ["8deg", "-8deg"]);
    const rotateY = useTransform(springX, [-0.5, 0.5], ["-8deg", "8deg"]);

    const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const deltaX = e.clientX - centerX;
        const deltaY = e.clientY - centerY;
        x.set((deltaX / rect.width) * 0.4);
        y.set((deltaY / rect.height) * 0.4);
    }, [x, y]);

    return (
        <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => {
                x.set(0);
                y.set(0);
                setIsHovered(false);
            }}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
            className="glass-card p-8 relative overflow-hidden group"
        >
            {isHovered && (
                <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-neon-blue/20 to-neon-purple/20"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                />
            )}

            <div className="relative z-10" style={{ transform: "translateZ(30px)" }}>
                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-400 leading-relaxed">{value.description}</p>
            </div>
        </motion.div>
    );
}

export default function AboutPage() {
    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

    return (
        <>
            <section ref={containerRef} className="relative min-h-screen pt-32 pb-20 px-6 overflow-hidden">
                <div className="absolute inset-0 brutal-grid opacity-10" />
                <div className="scan-line" />

                {/* Floating Orbs Background */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {[...Array(6)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute rounded-full blur-3xl"
                            style={{
                                width: `${250 + i * 50}px`,
                                height: `${250 + i * 50}px`,
                                left: `${(i * 17) % 100}%`,
                                top: `${(i * 23) % 100}%`,
                                background: `radial-gradient(circle, ${["#3b82f620", "#a855f720", "#10b98120", "#f59e0b20", "#ec489920"][i % 5]
                                    }, transparent)`,
                            }}
                            animate={{
                                x: [0, 100, 0],
                                y: [0, -100, 0],
                                scale: [1, 1.2, 1],
                            }}
                            transition={{
                                duration: 20 + i * 3,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        />
                    ))}
                </div>

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="show"
                    className="relative z-10 max-w-7xl mx-auto"
                >
                    {/* Hero Section */}
                    <motion.div
                        variants={fadeInUp}
                        style={{ opacity, scale }}
                        className="text-center mb-20"
                    >
                        <motion.div
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ type: "spring", duration: 0.8 }}
                            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-500/15 via-purple-500/15 to-emerald-500/15 border border-blue-500/40 rounded-full text-sm font-bold text-blue-300 mb-8"
                        >
                            <Rocket className="w-5 h-5" />
                            Our Story
                        </motion.div>

                        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6">
                            About <span className="holographic">Arani</span>
                        </h1>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                            From pixel-perfect websites to enterprise-scale solutions—discover how we evolved into a powerhouse of innovation, design, and engineering excellence.
                        </p>
                    </motion.div>

                    {/* 3D Sphere */}
                    <motion.div variants={fadeInUp} className="mb-32">
                        <Sphere3D />
                    </motion.div>

                    {/* Journey Timeline Section */}
                    <motion.div variants={fadeInUp} className="mb-32">
                        <div className="text-center mb-16">
                            <motion.h2
                                className="text-5xl md:text-6xl font-bold mb-6"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                Our <span className="holographic">Journey</span>
                            </motion.h2>
                            <motion.p
                                className="text-xl text-gray-400 max-w-3xl mx-auto"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                            >
                                From a scrappy startup to a lean, mighty team—here's how we transformed challenges into opportunities and passion into excellence.
                            </motion.p>
                        </div>

                        {/* Timeline Grid */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto relative">
                            {/* Center Line (Desktop) */}
                            <motion.div
                                className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-emerald-500 -translate-x-1/2"
                                initial={{ scaleY: 0 }}
                                whileInView={{ scaleY: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 2 }}
                            />

                            {journeyMilestones.map((milestone, index) => (
                                <MagneticTimelineCard
                                    key={index}
                                    milestone={milestone}
                                    index={index}
                                />
                            ))}
                        </div>
                    </motion.div>

                    {/* Mission & Vision */}
                    <div className="grid md:grid-cols-2 gap-8 mb-32">
                        <motion.div
                            variants={fadeInUp}
                            className="glass-card p-10 relative overflow-hidden group"
                            whileHover={{ scale: 1.02 }}
                        >
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100"
                                transition={{ duration: 0.5 }}
                            />
                            <Target className="w-12 h-12 text-neon-blue mb-6 relative z-10" />
                            <h2 className="text-3xl font-bold mb-4 relative z-10">Our Mission</h2>
                            <p className="text-gray-400 leading-relaxed relative z-10">
                                To empower businesses worldwide with cutting-edge technology solutions
                                that drive innovation, efficiency, and sustainable growth through AI,
                                cloud infrastructure, and next-generation software architecture.
                            </p>
                        </motion.div>

                        <motion.div
                            variants={fadeInUp}
                            className="glass-card p-10 relative overflow-hidden group"
                            whileHover={{ scale: 1.02 }}
                        >
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-transparent opacity-0 group-hover:opacity-100"
                                transition={{ duration: 0.5 }}
                            />
                            <Rocket className="w-12 h-12 text-neon-purple mb-6 relative z-10" />
                            <h2 className="text-3xl font-bold mb-4 relative z-10">Our Vision</h2>
                            <p className="text-gray-400 leading-relaxed relative z-10">
                                To become the global standard for enterprise software excellence,
                                recognized as the go-to partner for companies seeking transformative
                                digital solutions powered by artificial intelligence and cloud-native architecture.
                            </p>
                        </motion.div>
                    </div>

                    {/* Stats */}
                    <motion.div variants={fadeInUp} className="glass-card p-10 mb-32 relative overflow-hidden">
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-emerald-500/10"
                            animate={{
                                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                            }}
                            transition={{ duration: 5, repeat: Infinity }}
                            style={{ backgroundSize: "200% 200%" }}
                        />

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
                            {[
                                { icon: Award, value: "6+", label: "Years Experience" },
                                { icon: Users, value: "50+", label: "Expert Engineers" },
                                { icon: Globe, value: "15+", label: "Countries Served" },
                                { icon: Zap, value: "300+", label: "Projects Delivered" },
                            ].map((stat, index) => (
                                <motion.div
                                    key={index}
                                    className="text-center"
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ scale: 1.1, y: -5 }}
                                >
                                    <motion.div
                                        whileHover={{ rotate: 360 }}
                                        transition={{ duration: 0.6 }}
                                    >
                                        <stat.icon className="w-10 h-10 text-neon-blue mx-auto mb-4" />
                                    </motion.div>
                                    <div className="text-4xl font-bold holographic mb-2">{stat.value}</div>
                                    <div className="text-sm text-gray-400">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Values */}
                    <motion.div variants={fadeInUp} className="mb-20">
                        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
                            Our <span className="holographic">Core Values</span>
                        </h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            {[
                                {
                                    title: "Innovation First",
                                    description: "We push boundaries and embrace emerging technologies to deliver tomorrow's solutions today.",
                                },
                                {
                                    title: "Excellence Always",
                                    description: "Quality is non-negotiable. Every line of code, every architecture decision reflects our commitment to perfection.",
                                },
                                {
                                    title: "Client Success",
                                    description: "Your success is our success. We partner with you to achieve measurable, transformative results.",
                                },
                            ].map((value, index) => (
                                <MagneticValueCard key={index} value={value} index={index} />
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </section>
            <Footer />
        </>
    );
}
