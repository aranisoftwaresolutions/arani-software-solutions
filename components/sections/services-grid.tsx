"use client";

import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion";
import { Palette, Code2, Layers, Monitor, ShoppingCart, FileText, ArrowRight, Star, Sparkles, Zap } from "lucide-react";
import { useState, useEffect, useRef, useCallback } from "react";
import Reveal from "@/components/animations/reveal";
import Link from "next/link";

// Your services data with icons mapping
const services = [
    {
        icon: Palette,
        emoji: "🎨",
        title: "UI & UX Design",
        description: "Intuitive UI/UX design that delights users and drives engagement.",
        link: "/services/ui-ux-design",
        features: [
            "User-centered design approach for maximum engagement",
            "Wireframes, prototypes, and interactive mockups",
            "Responsive designs that work on all devices"
        ],
        gradient: "from-pink-500 to-rose-500",
        stats: { label: "Client Satisfaction", value: "99%" },
    },
    {
        icon: Zap,
        emoji: "⚡",
        title: "No-Code App Development",
        description: "Launch mobile and web apps rapidly without traditional coding—ideal for startups and entrepreneurs.",
        link: "/services/no-code-app-web-development",
        features: [
            "Build MVPs in weeks, not months",
            "Cost-effective solutions for startups",
            "Easy updates and maintenance"
        ],
        gradient: "from-amber-500 to-orange-500",
        stats: { label: "Apps Launched", value: "120+" },
    },
    {
        icon: Layers,
        emoji: "🚀",
        title: "Full Stack Development",
        description: "End-to-end development services covering front-end, back-end, and everything in between.",
        link: "/services/full-stack-development",
        features: [
            "Modern tech stack with React, Node.js, Next.js",
            "Scalable architecture for growing businesses",
            "API integration and database optimization"
        ],
        gradient: "from-blue-500 to-cyan-500",
        stats: { label: "Projects Delivered", value: "150+" },
    },
    {
        icon: Monitor,
        emoji: "💻",
        title: "Computer Application Development",
        description: "Tailored desktop software solutions to streamline your business operations and improve productivity.",
        link: "/services/computer-application-development",
        features: [
            "Custom desktop apps for Windows, Mac, Linux",
            "Process automation and workflow optimization",
            "Seamless integration with existing systems"
        ],
        gradient: "from-purple-500 to-indigo-500",
        stats: { label: "Efficiency Boost", value: "45%" },
    },
    {
        icon: ShoppingCart,
        emoji: "🛒",
        title: "E-commerce Strategy Projects",
        description: "Strategic planning and execution for online stores that convert and scale.",
        link: "/services/ecommerce-strategy",
        features: [
            "Platform selection and setup (Shopify, WooCommerce)",
            "Conversion optimization strategies",
            "Payment gateway and inventory management"
        ],
        gradient: "from-emerald-500 to-teal-500",
        stats: { label: "Avg. Revenue Increase", value: "78%" },
    },
    {
        icon: FileText,
        emoji: "📝",
        title: "Content Management Systems",
        description: "Robust CMS solutions for easy content publishing and management.",
        link: "/services/content-management",
        features: [
            "WordPress, Strapi, Contentful implementations",
            "Custom admin dashboards",
            "SEO-optimized content architecture"
        ],
        gradient: "from-violet-500 to-purple-500",
        stats: { label: "CMS Projects", value: "95+" },
    },
];

// Floating Background Orbs
function FloatingOrbs({ isScrolling }: { isScrolling: boolean }) {
    const prefersReducedMotion = useReducedMotion();

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(10)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute rounded-full blur-3xl"
                    style={{
                        width: `${180 + i * 40}px`,
                        height: `${180 + i * 40}px`,
                        left: `${(i * 11) % 100}%`,
                        top: `${(i * 13) % 100}%`,
                        background: `radial-gradient(circle, ${["#ec489920", "#a855f720", "#10b98120", "#3b82f620", "#f59e0b20", "#8b5cf620"][i % 6]
                            }, transparent)`,
                        willChange: isScrolling || prefersReducedMotion ? "auto" : "transform",
                    }}
                    animate={isScrolling || prefersReducedMotion ? {} : {
                        x: [0, 120, 0],
                        y: [0, -80, 0],
                        scale: [1, 1.3, 1],
                        opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                        duration: 18 + i * 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            ))}
        </div>
    );
}

// Ultra-Premium Magnetic Service Card
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

    // Enhanced spring physics for ultra-smooth magnetic effect
    const mouseXSpring = useSpring(x, { stiffness: 250, damping: 25, mass: 0.3 });
    const mouseYSpring = useSpring(y, { stiffness: 250, damping: 25, mass: 0.3 });

    // 3D rotation transforms
    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]);
    const scale = useTransform(mouseXSpring, [-0.5, 0, 0.5], [1.02, 1, 1.02]);

    // Advanced magnetic mouse tracking
    const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current || isScrolling || prefersReducedMotion) return;

        const rect = cardRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const deltaX = e.clientX - centerX;
        const deltaY = e.clientY - centerY;

        // Calculate distance for magnetic effect
        const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);
        const maxDistance = 150; // Magnetic field radius

        if (distance < maxDistance) {
            const strength = 1 - distance / maxDistance;
            const attractionPower = 0.35;

            x.set((deltaX / rect.width) * strength * attractionPower);
            y.set((deltaY / rect.height) * strength * attractionPower);
        } else {
            x.set(0);
            y.set(0);
        }
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
        <Reveal delay={index * 0.1}>
            <Link href={service.link}>
                <motion.div
                    ref={cardRef}
                    onMouseMove={handleMouseMove}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    style={{
                        rotateX: shouldAnimate ? rotateX : 0,
                        rotateY: shouldAnimate ? rotateY : 0,
                        scale: shouldAnimate ? scale : 1,
                        transformStyle: "preserve-3d",
                        willChange: isHovered && shouldAnimate ? "transform" : "auto",
                    }}
                    whileHover={shouldAnimate ? { y: -12 } : {}}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    className="relative bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-2xl rounded-3xl p-8 group cursor-pointer overflow-hidden border border-white/10 hover:border-white/30 h-full shadow-2xl"
                >
                    {/* Animated Gradient Overlay with Mouse Tracking */}
                    <motion.div
                        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                        style={{
                            background: `radial-gradient(circle at ${isHovered ? '50% 50%' : '50% 50%'}, ${service.gradient.includes('pink') ? 'rgba(236,72,153,0.2)' :
                                    service.gradient.includes('amber') ? 'rgba(245,158,11,0.2)' :
                                        service.gradient.includes('blue') ? 'rgba(59,130,246,0.2)' :
                                            service.gradient.includes('purple') ? 'rgba(168,85,247,0.2)' :
                                                service.gradient.includes('emerald') ? 'rgba(16,185,129,0.2)' :
                                                    'rgba(139,92,246,0.2)'
                                } 0%, transparent 80%)`,
                        }}
                        animate={isHovered && shouldAnimate ? {
                            scale: [1, 1.4, 1],
                            opacity: [0.2, 0.4, 0.2],
                        } : {}}
                        transition={{ duration: 3, repeat: Infinity }}
                    />

                    {/* Holographic Scan Line Effect */}
                    {isHovered && shouldAnimate && (
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-transparent"
                            initial={{ y: "-100%" }}
                            animate={{ y: "200%" }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                            style={{ willChange: "transform" }}
                        />
                    )}

                    {/* Magnetic Energy Particles */}
                    {isHovered && shouldAnimate && (
                        <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
                            {[...Array(12)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute w-1.5 h-1.5 rounded-full"
                                    style={{
                                        background: `${service.gradient.includes('pink') ? '#ec4899' :
                                                service.gradient.includes('amber') ? '#f59e0b' :
                                                    service.gradient.includes('blue') ? '#3b82f6' :
                                                        service.gradient.includes('purple') ? '#a855f7' :
                                                            service.gradient.includes('emerald') ? '#10b981' :
                                                                '#8b5cf6'
                                            }`,
                                        boxShadow: `0 0 15px currentColor`,
                                        left: "50%",
                                        top: "50%",
                                    }}
                                    animate={{
                                        x: [0, Math.cos((i * Math.PI) / 6) * 100],
                                        y: [0, Math.sin((i * Math.PI) / 6) * 100],
                                        opacity: [1, 0],
                                        scale: [0, 2, 0],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        delay: i * 0.12,
                                        ease: "easeOut",
                                    }}
                                />
                            ))}
                        </div>
                    )}

                    {/* Content Container with 3D Transform */}
                    <div className="relative z-20" style={{ transform: "translateZ(60px)" }}>
                        {/* Icon & Emoji Header */}
                        <div className="flex items-center justify-between mb-6">
                            <motion.div
                                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-xl relative overflow-hidden`}
                                whileHover={shouldAnimate ? { rotate: 360, scale: 1.15 } : {}}
                                transition={{ duration: 0.7, type: "spring", stiffness: 200 }}
                            >
                                <service.icon className="w-8 h-8 text-white relative z-10" />

                                {/* Dynamic Pulsing Glow */}
                                <motion.div
                                    className="absolute inset-0 rounded-2xl"
                                    style={{
                                        background: `${service.gradient.includes('pink') ? 'rgba(236,72,153,0.5)' :
                                                service.gradient.includes('amber') ? 'rgba(245,158,11,0.5)' :
                                                    service.gradient.includes('blue') ? 'rgba(59,130,246,0.5)' :
                                                        service.gradient.includes('purple') ? 'rgba(168,85,247,0.5)' :
                                                            service.gradient.includes('emerald') ? 'rgba(16,185,129,0.5)' :
                                                                'rgba(139,92,246,0.5)'
                                            }`,
                                        filter: "blur(20px)",
                                    }}
                                    animate={isHovered && shouldAnimate ? {
                                        scale: [1, 1.6, 1],
                                        opacity: [0.5, 0.9, 0.5],
                                    } : {}}
                                    transition={{ duration: 2, repeat: Infinity }}
                                />

                                {/* Orbiting Ring */}
                                {isHovered && shouldAnimate && (
                                    <motion.div
                                        className="absolute inset-0 border-2 border-white/50 rounded-2xl"
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                    />
                                )}
                            </motion.div>

                            <motion.div
                                className="text-5xl"
                                animate={isHovered && shouldAnimate ? {
                                    scale: [1, 1.3, 1],
                                    rotate: [0, 15, -15, 0],
                                } : {}}
                                transition={{ duration: 0.6 }}
                            >
                                {service.emoji}
                            </motion.div>
                        </div>

                        {/* Stats Badge - Floating */}
                        <motion.div
                            className="absolute top-6 right-6 px-4 py-2 bg-black/90 backdrop-blur-xl rounded-full flex items-center gap-2 border border-white/30 shadow-2xl z-30"
                            initial={{ opacity: 0, scale: 0, rotate: -180 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            transition={{ delay: index * 0.1 + 0.4, type: "spring", stiffness: 200 }}
                            whileHover={{ scale: 1.1, rotate: 5 }}
                        >
                            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                            <span className="text-sm font-bold text-white">{service.stats.value}</span>
                        </motion.div>

                        {/* Title with Gradient Hover */}
                        <motion.h3
                            className={`text-2xl font-bold mb-4 transition-all duration-500 ${isHovered
                                    ? `bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`
                                    : 'text-white'
                                }`}
                        >
                            {service.title}
                        </motion.h3>

                        {/* Description */}
                        <p className="text-base text-gray-300 leading-relaxed mb-5">
                            {service.description}
                        </p>

                        {/* Features List with Stagger Animation */}
                        <div className="space-y-3 mb-6">
                            {service.features.map((feature, i) => (
                                <motion.div
                                    key={i}
                                    className="flex items-start gap-3"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 + i * 0.1 }}
                                >
                                    <motion.div
                                        className={`mt-1.5 w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient} flex-shrink-0`}
                                        animate={isHovered && shouldAnimate ? {
                                            scale: [1, 1.5, 1],
                                            opacity: [1, 0.5, 1],
                                        } : {}}
                                        transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                                    />
                                    <p className="text-sm text-gray-400 leading-relaxed">
                                        {feature}
                                    </p>
                                </motion.div>
                            ))}
                        </div>

                        {/* Footer: Stats & CTA */}
                        <div className="flex items-center justify-between pt-5 border-t border-white/20">
                            <div>
                                <p className="text-xs text-gray-500 mb-1 uppercase tracking-wider">{service.stats.label}</p>
                                <motion.p
                                    className={`text-2xl font-bold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}
                                    animate={isHovered && shouldAnimate ? { scale: [1, 1.1, 1] } : {}}
                                    transition={{ duration: 0.5 }}
                                >
                                    {service.stats.value}
                                </motion.p>
                            </div>

                            {/* Premium CTA Button */}
                            <motion.div
                                className="flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 text-white font-semibold text-sm hover:bg-white/20 transition-all relative overflow-hidden group/btn"
                                whileHover={shouldAnimate ? { scale: 1.08, x: 6 } : {}}
                                whileTap={{ scale: 0.92 }}
                            >
                                <motion.div
                                    className="absolute inset-0"
                                    style={{
                                        background: `linear-gradient(135deg, ${service.gradient.includes('pink') ? 'rgba(236,72,153,0.4)' :
                                                service.gradient.includes('amber') ? 'rgba(245,158,11,0.4)' :
                                                    service.gradient.includes('blue') ? 'rgba(59,130,246,0.4)' :
                                                        service.gradient.includes('purple') ? 'rgba(168,85,247,0.4)' :
                                                            service.gradient.includes('emerald') ? 'rgba(16,185,129,0.4)' :
                                                                'rgba(139,92,246,0.4)'
                                            } 0%, transparent 100%)`,
                                    }}
                                    initial={{ x: "-100%" }}
                                    whileHover={{ x: 0 }}
                                    transition={{ duration: 0.4 }}
                                />
                                <span className="relative z-10">View Details</span>
                                <ArrowRight className="w-4 h-4 relative z-10 group-hover/btn:translate-x-1 transition-transform" />
                            </motion.div>
                        </div>
                    </div>

                    {/* Holographic Border Effect */}
                    {shouldAnimate && (
                        <motion.div
                            className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 pointer-events-none"
                            style={{
                                background: `linear-gradient(60deg, transparent, ${service.gradient.includes('pink') ? 'rgba(236,72,153,0.4)' :
                                        service.gradient.includes('amber') ? 'rgba(245,158,11,0.4)' :
                                            service.gradient.includes('blue') ? 'rgba(59,130,246,0.4)' :
                                                service.gradient.includes('purple') ? 'rgba(168,85,247,0.4)' :
                                                    service.gradient.includes('emerald') ? 'rgba(16,185,129,0.4)' :
                                                        'rgba(139,92,246,0.4)'
                                    }, transparent)`,
                                backgroundSize: "300% 300%",
                            }}
                            animate={{
                                backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                            }}
                        />
                    )}
                </motion.div>
            </Link>
        </Reveal>
    );
}

export default function ServicesGrid() {
    const sectionRef = useRef<HTMLElement>(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isScrolling, setIsScrolling] = useState(false);
    const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
    const prefersReducedMotion = useReducedMotion();

    // Optimized scroll detection
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

    // Throttled mouse tracking
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
        <section ref={sectionRef} className="relative py-20 sm:py-28 lg:py-36 px-4 sm:px-6 overflow-hidden bg-black">
            {/* Dark Base Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />

            {/* Floating Orbs Background */}
            <FloatingOrbs isScrolling={isScrolling} />

            {/* Advanced Grid Pattern */}
            <motion.div
                className="absolute inset-0 opacity-5"
                style={{
                    backgroundImage: `
                        radial-gradient(circle at center, rgba(236, 72, 153, 0.4) 1px, transparent 1px),
                        radial-gradient(circle at center, rgba(59, 130, 246, 0.4) 1px, transparent 1px),
                        radial-gradient(circle at center, rgba(168, 85, 247, 0.4) 1px, transparent 1px)
                    `,
                    backgroundSize: "60px 60px, 60px 60px, 60px 60px",
                    backgroundPosition: "0 0, 30px 30px, 15px 45px",
                    willChange: isScrolling || prefersReducedMotion ? "auto" : "background-position",
                }}
                animate={isScrolling || prefersReducedMotion ? {} : {
                    backgroundPosition: [
                        "0px 0px, 30px 30px, 15px 45px",
                        "60px 60px, 90px 90px, 75px 105px"
                    ],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear",
                }}
            />

            {/* Mouse-Tracking Dynamic Glow */}
            {!isScrolling && !prefersReducedMotion && (
                <motion.div
                    className="absolute w-[700px] h-[700px] rounded-full blur-[180px] pointer-events-none opacity-40"
                    style={{
                        left: `${mousePosition.x}%`,
                        top: `${mousePosition.y}%`,
                        transform: "translate(-50%, -50%)",
                        background: "radial-gradient(circle, rgba(168, 85, 247, 0.3), rgba(59, 130, 246, 0.2), transparent)",
                        willChange: "transform",
                    }}
                />
            )}

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Section Header */}
                <Reveal>
                    <div className="text-center mb-16 sm:mb-20 lg:mb-24">
                        <motion.div
                            initial={{ scale: 0, rotate: -180 }}
                            whileInView={{ scale: 1, rotate: 0 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", duration: 0.9, stiffness: 200 }}
                            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-blue-500/10 border border-pink-500/30 rounded-full text-sm font-semibold text-pink-400 mb-8"
                        >
                            <Sparkles className="w-4 h-4" />
                            Our Services
                        </motion.div>

                        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6">
                            Premium <span className="holographic">Solutions</span> for Your Business
                        </h2>

                        <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto px-4 leading-relaxed">
                            From design to deployment, we deliver world-class services that transform your ideas into reality.
                        </p>
                    </div>
                </Reveal>

                {/* Services Grid with Magnetic Cards */}
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

                {/* Premium CTA Section */}
                <Reveal delay={0.6}>
                    <motion.div className="text-center mt-16 sm:mt-20 lg:mt-24">
                        <motion.button
                            className="px-10 py-4 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-2xl font-bold text-lg flex items-center gap-3 mx-auto hover:shadow-2xl hover:shadow-purple-500/50 transition-all relative overflow-hidden group"
                            whileHover={{ scale: 1.08, y: -4 }}
                            whileTap={{ scale: 0.92 }}
                        >
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
                                initial={{ x: "100%" }}
                                whileHover={{ x: "-100%" }}
                                transition={{ duration: 0.7 }}
                            />
                            <span className="relative z-10">Start Your Project Today</span>
                            <ArrowRight className="w-6 h-6 relative z-10 group-hover:translate-x-2 transition-transform" />
                        </motion.button>

                        <motion.p
                            className="text-gray-500 mt-6 text-sm"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                        >
                            Free consultation • 24/7 support • 100% satisfaction guarantee
                        </motion.p>
                    </motion.div>
                </Reveal>
            </div>
        </section>
    );
}
