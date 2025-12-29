"use client";

import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion";
import { Workflow, Zap, Globe, Brain, Users, ArrowRight, Star, Sparkles } from "lucide-react";
import { useState, useEffect, useRef, useCallback } from "react";
import Reveal from "@/components/animations/reveal";

const services = [
    {
        icon: Workflow,
        emoji: "✅",
        title: "Smooth Project Delivery",
        description: "Keep your project on track, start to finish",
        features: [
            "Remove obstacles before they become problems",
            "Clear updates so you always know what's next"
        ],
        gradient: "from-emerald-500 to-teal-500",
        stats: { label: "On-Time Delivery", value: "99%" },
    },
    {
        icon: Zap,
        emoji: "🔄",
        title: "Workflow Automation",
        description: "Automate repetitive tasks and save hours each week",
        features: [
            "Design systems tailored to your workflow",
            "Enable your team to focus on what matters"
        ],
        gradient: "from-amber-500 to-orange-500",
        stats: { label: "Time Saved", value: "40h+" },
    },
    {
        icon: Globe,
        emoji: "🌐",
        title: "No-Code Development",
        description: "Launch websites, dashboards, and tools fast",
        features: [
            "Build MVPs without big budgets or delays",
            "Scale or update easily as needs grow"
        ],
        gradient: "from-blue-500 to-cyan-500",
        stats: { label: "MVPs Launched", value: "120+" },
    },
    {
        icon: Brain,
        emoji: "🤖",
        title: "AI & Smart Tools",
        description: "Integrate AI for better decisions and faster support",
        features: [
            "Custom chatbots, automation, and data solutions",
            "Stay ahead with the latest tech—no jargon"
        ],
        gradient: "from-purple-500 to-pink-500",
        stats: { label: "AI Solutions", value: "85+" },
    },
    {
        icon: Users,
        emoji: "🤝",
        title: "A True Partner",
        description: "I care about your goals, not just the project",
        features: [
            "Easy communication—ask me anything anytime",
            "Solutions tailored to your business, not one-size-fits-all"
        ],
        gradient: "from-rose-500 to-pink-500",
        stats: { label: "Client Satisfaction", value: "98%" },
    },
];

// Floating Background Orbs - From TechStack
function FloatingOrbs({ isScrolling }: { isScrolling: boolean }) {
    const prefersReducedMotion = useReducedMotion();

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(8)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute rounded-full blur-3xl"
                    style={{
                        width: `${200 + i * 50}px`,
                        height: `${200 + i * 50}px`,
                        left: `${(i * 13) % 100}%`,
                        top: `${(i * 17) % 100}%`,
                        background: `radial-gradient(circle, ${["#00e5ff20", "#a855f720", "#10b98120", "#ec489920"][i % 4]}, transparent)`,
                        willChange: isScrolling || prefersReducedMotion ? "auto" : "transform",
                    }}
                    animate={isScrolling || prefersReducedMotion ? {} : {
                        x: [0, 100, 0],
                        y: [0, -100, 0],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 15 + i * 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            ))}
        </div>
    );
}

// Ultra-Smooth Magnetic Card
function MagneticServiceCard({ service, index, isScrolling }: {
    service: typeof services[0];
    index: number;
    isScrolling: boolean;
}) {
    const cardRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);
    const prefersReducedMotion = useReducedMotion();

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
    const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

    const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current || isScrolling || prefersReducedMotion) return;
        const rect = cardRef.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    }, [isScrolling, prefersReducedMotion, x, y]);

    const handleMouseEnter = useCallback(() => {
        if (!isScrolling) setIsHovered(true);
    }, [isScrolling]);

    const handleMouseLeave = useCallback(() => {
        x.set(0);
        y.set(0);
        setIsHovered(false);
    }, [x, y]);

    const shouldAnimate = !isScrolling && !prefersReducedMotion;

    return (
        <Reveal delay={index * 0.08}>
            <motion.div
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{
                    rotateX: shouldAnimate ? rotateX : 0,
                    rotateY: shouldAnimate ? rotateY : 0,
                    transformStyle: "preserve-3d",
                    willChange: isHovered && shouldAnimate ? "transform" : "auto",
                }}
                whileHover={shouldAnimate ? { scale: 1.02, y: -8 } : {}}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                className="relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl rounded-3xl p-6 sm:p-8 group cursor-pointer overflow-hidden border border-white/10 hover:border-white/30 h-full shadow-2xl"
            >
                {/* Animated Gradient Overlay */}
                <motion.div
                    className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                        background: `radial-gradient(circle at 50% 50%, ${service.gradient.includes('emerald') ? 'rgba(16,185,129,0.15)' :
                                service.gradient.includes('amber') ? 'rgba(245,158,11,0.15)' :
                                    service.gradient.includes('blue') ? 'rgba(59,130,246,0.15)' :
                                        service.gradient.includes('purple') ? 'rgba(168,85,247,0.15)' :
                                            'rgba(244,63,94,0.15)'
                            } 0%, transparent 70%)`,
                    }}
                    animate={isHovered && shouldAnimate ? {
                        scale: [1, 1.2, 1],
                        opacity: [0.1, 0.3, 0.1],
                    } : {}}
                    transition={{ duration: 3, repeat: Infinity }}
                />

                {/* AI Scan Line Effect */}
                {isHovered && shouldAnimate && (
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                        initial={{ x: "-100%" }}
                        animate={{ x: "200%" }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        style={{ willChange: "transform" }}
                    />
                )}

                {/* Energy Particles - From TechStack */}
                {isHovered && shouldAnimate && (
                    <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
                        {[...Array(8)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute w-1 h-1 rounded-full"
                                style={{
                                    background: `${service.gradient.includes('emerald') ? '#10b981' :
                                            service.gradient.includes('amber') ? '#f59e0b' :
                                                service.gradient.includes('blue') ? '#3b82f6' :
                                                    service.gradient.includes('purple') ? '#a855f7' :
                                                        '#f43f5e'
                                        }`,
                                    boxShadow: `0 0 10px currentColor`,
                                    left: "50%",
                                    top: "50%",
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
                                    ease: "easeOut",
                                }}
                            />
                        ))}
                    </div>
                )}

                {/* Content Container */}
                <div className="relative z-20" style={{ transform: "translateZ(50px)" }}>
                    {/* Icon & Emoji */}
                    <div className="flex items-center justify-between mb-4">
                        <motion.div
                            className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg relative`}
                            whileHover={shouldAnimate ? { rotate: 360, scale: 1.1 } : {}}
                            transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
                        >
                            <service.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white relative z-10" />

                            {/* Pulsing Glow */}
                            <motion.div
                                className="absolute inset-0 rounded-2xl"
                                style={{
                                    background: `${service.gradient.includes('emerald') ? 'rgba(16,185,129,0.4)' :
                                            service.gradient.includes('amber') ? 'rgba(245,158,11,0.4)' :
                                                service.gradient.includes('blue') ? 'rgba(59,130,246,0.4)' :
                                                    service.gradient.includes('purple') ? 'rgba(168,85,247,0.4)' :
                                                        'rgba(244,63,94,0.4)'
                                        }`,
                                    filter: "blur(15px)",
                                }}
                                animate={isHovered && shouldAnimate ? {
                                    scale: [1, 1.5, 1],
                                    opacity: [0.4, 0.7, 0.4],
                                } : {}}
                                transition={{ duration: 2, repeat: Infinity }}
                            />

                            {/* Orbiting Ring - From TechStack */}
                            {isHovered && shouldAnimate && (
                                <motion.div
                                    className="absolute inset-0 border-2 border-white/40 rounded-2xl"
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                />
                            )}
                        </motion.div>

                        <motion.div
                            className="text-4xl"
                            animate={isHovered && shouldAnimate ? {
                                scale: [1, 1.2, 1],
                                rotate: [0, 10, -10, 0],
                            } : {}}
                            transition={{ duration: 0.5 }}
                        >
                            {service.emoji}
                        </motion.div>
                    </div>

                    {/* Stats Badge */}
                    <motion.div
                        className="absolute top-4 right-4 px-3 py-1.5 bg-black/80 backdrop-blur-md rounded-full flex items-center gap-1.5 border border-white/30 shadow-lg z-30"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
                    >
                        <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                        <span className="text-xs font-bold text-white">{service.stats.value}</span>
                    </motion.div>

                    {/* Title */}
                    <motion.h3
                        className={`text-xl sm:text-2xl font-bold mb-3 transition-all duration-300 ${isHovered
                                ? `bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`
                                : 'text-white'
                            }`}
                    >
                        {service.title}
                    </motion.h3>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-4">
                        {service.description}
                    </p>

                    {/* Features List */}
                    <div className="space-y-2 mb-6">
                        {service.features.map((feature, i) => (
                            <motion.div
                                key={i}
                                className="flex items-start gap-2"
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 + i * 0.1 }}
                            >
                                <div className={`mt-1 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient} flex-shrink-0`} />
                                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                                    {feature}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Stats Display */}
                    <div className="flex items-center justify-between pt-4 border-t border-white/20">
                        <div>
                            <p className="text-xs text-gray-400 mb-1">{service.stats.label}</p>
                            <p className={`text-lg sm:text-xl font-bold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                                {service.stats.value}
                            </p>
                        </div>

                        {/* CTA Button */}
                        <motion.button
                            className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 text-white font-semibold text-sm hover:bg-white/20 transition-all relative overflow-hidden group/btn"
                            whileHover={shouldAnimate ? { scale: 1.05, x: 5 } : {}}
                            whileTap={{ scale: 0.95 }}
                        >
                            <motion.div
                                className="absolute inset-0"
                                style={{
                                    background: `linear-gradient(135deg, ${service.gradient.includes('emerald') ? 'rgba(16,185,129,0.3)' :
                                            service.gradient.includes('amber') ? 'rgba(245,158,11,0.3)' :
                                                service.gradient.includes('blue') ? 'rgba(59,130,246,0.3)' :
                                                    service.gradient.includes('purple') ? 'rgba(168,85,247,0.3)' :
                                                        'rgba(244,63,94,0.3)'
                                        } 0%, transparent 100%)`,
                                }}
                                initial={{ x: "-100%" }}
                                whileHover={{ x: 0 }}
                                transition={{ duration: 0.3 }}
                            />
                            <span className="relative z-10 text-xs sm:text-sm">Learn More</span>
                            <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 relative z-10 group-hover/btn:translate-x-1 transition-transform" />
                        </motion.button>
                    </div>
                </div>

                {/* Holographic Edge Effect - From TechStack */}
                {shouldAnimate && (
                    <motion.div
                        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 pointer-events-none"
                        style={{
                            background: `linear-gradient(45deg, transparent, ${service.gradient.includes('emerald') ? 'rgba(16,185,129,0.3)' :
                                    service.gradient.includes('amber') ? 'rgba(245,158,11,0.3)' :
                                        service.gradient.includes('blue') ? 'rgba(59,130,246,0.3)' :
                                            service.gradient.includes('purple') ? 'rgba(168,85,247,0.3)' :
                                                'rgba(244,63,94,0.3)'
                                }, transparent)`,
                            backgroundSize: "200% 200%",
                        }}
                        animate={{
                            backgroundPosition: ["0% 0%", "100% 100%"],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                        }}
                    />
                )}
            </motion.div>
        </Reveal>
    );
}

export default function ServicesGrid() {
    const sectionRef = useRef<HTMLElement>(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isScrolling, setIsScrolling] = useState(false);
    const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
    const prefersReducedMotion = useReducedMotion();

    // Optimized scroll detection - From TechStack
    useEffect(() => {
        let rafId: number;

        const handleScroll = () => {
            if (rafId) cancelAnimationFrame(rafId);

            rafId = requestAnimationFrame(() => {
                setIsScrolling(true);

                if (scrollTimeoutRef.current) {
                    clearTimeout(scrollTimeoutRef.current);
                }

                scrollTimeoutRef.current = setTimeout(() => {
                    setIsScrolling(false);
                }, 150);
            });
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
            if (rafId) cancelAnimationFrame(rafId);
            if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
        };
    }, []);

    // Throttled mouse tracking - From TechStack
    useEffect(() => {
        if (isScrolling || prefersReducedMotion) return;

        let rafId: number;
        const handleMouseMove = (e: MouseEvent) => {
            if (rafId) cancelAnimationFrame(rafId);

            rafId = requestAnimationFrame(() => {
                setMousePosition({
                    x: (e.clientX / window.innerWidth) * 100,
                    y: (e.clientY / window.innerHeight) * 100,
                });
            });
        };

        window.addEventListener("mousemove", handleMouseMove, { passive: true });
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            if (rafId) cancelAnimationFrame(rafId);
        };
    }, [isScrolling, prefersReducedMotion]);

    return (
        <section ref={sectionRef} className="relative py-16 sm:py-24 lg:py-32 px-4 sm:px-6 overflow-hidden bg-black">
            {/* Dark Base - From TechStack */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />

            {/* Floating Orbs - From TechStack */}
            <FloatingOrbs isScrolling={isScrolling} />

            {/* AI Grid Pattern - From TechStack */}
            <motion.div
                className="absolute inset-0 opacity-5"
                style={{
                    backgroundImage: `
                        radial-gradient(circle at center, rgba(0, 229, 255, 0.3) 1px, transparent 1px),
                        radial-gradient(circle at center, rgba(168, 85, 247, 0.3) 1px, transparent 1px)
                    `,
                    backgroundSize: "50px 50px, 50px 50px",
                    backgroundPosition: "0 0, 25px 25px",
                    willChange: isScrolling || prefersReducedMotion ? "auto" : "background-position",
                }}
                animate={isScrolling || prefersReducedMotion ? {} : {
                    backgroundPosition: ["0px 0px, 25px 25px", "50px 50px, 75px 75px"],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                }}
            />

            {/* Mouse-Tracking Glow - From TechStack */}
            {!isScrolling && !prefersReducedMotion && (
                <motion.div
                    className="absolute w-[600px] h-[600px] rounded-full blur-[150px] pointer-events-none"
                    style={{
                        left: `${mousePosition.x}%`,
                        top: `${mousePosition.y}%`,
                        transform: "translate(-50%, -50%)",
                        background: "radial-gradient(circle, rgba(0, 229, 255, 0.15), transparent)",
                        willChange: "transform",
                    }}
                />
            )}

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Section Header */}
                <Reveal>
                    <div className="text-center mb-12 sm:mb-16 lg:mb-20">
                        <motion.div
                            initial={{ scale: 0, rotate: -180 }}
                            whileInView={{ scale: 1, rotate: 0 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", duration: 0.8, stiffness: 200 }}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-emerald-500/10 border border-blue-500/30 rounded-full text-sm font-semibold text-blue-400 mb-6"
                        >
                            <Sparkles className="w-4 h-4" />
                            What We Offer
                        </motion.div>

                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
                            Solutions That <span className="holographic">Actually Work</span>
                        </h2>

                        <p className="text-base sm:text-xl text-gray-400 max-w-2xl mx-auto px-4">
                            No complicated tech talk. Just real tools and support to help your business grow.
                        </p>
                    </div>
                </Reveal>

                {/* Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {services.map((service, index) => (
                        <MagneticServiceCard
                            key={index}
                            service={service}
                            index={index}
                            isScrolling={isScrolling}
                        />
                    ))}
                </div>

                {/* CTA Section */}
                <Reveal delay={0.5}>
                    <motion.div className="text-center mt-12 sm:mt-16 lg:mt-20">
                        <motion.button
                            className="px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 rounded-xl font-semibold text-base flex items-center gap-2 mx-auto hover:shadow-2xl hover:shadow-blue-500/50 transition-all relative overflow-hidden group"
                            whileHover={{ scale: 1.05, y: -3 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500"
                                initial={{ x: "100%" }}
                                whileHover={{ x: "-100%" }}
                                transition={{ duration: 0.6 }}
                            />
                            <span className="relative z-10">Let's Work Together</span>
                            <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                        </motion.button>
                    </motion.div>
                </Reveal>
            </div>
        </section>
    );
}
