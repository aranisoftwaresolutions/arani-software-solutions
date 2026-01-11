"use client";

import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion";
import { 
    Palette, Code, Layers, Monitor, ShoppingCart, FileText, Smartphone,
    Database, TrendingUp, Share2, ArrowRight, Star, Sparkles, ExternalLink,
    Zap, Globe, CheckCircle, Award
} from "lucide-react";
import { useState, useEffect, useRef, useCallback } from "react";
import { fadeInUp, staggerContainer } from "@/lib/utils";
import Footer from "@/components/sections/footer";
import Link from "next/link";

// All 7 services with complete content
const services = [
    {
        icon: Palette,
        emoji: "🎨",
        title: "UI & UX Design",
        slug: "ui-ux-design",
        description: "Intuitive UI/UX design that delights users and drives engagement through research-driven, user-centered experiences.",
        gradient: "from-purple-500 via-pink-500 to-rose-500",
        features: [
            "User research & personas",
            "Wireframing & prototyping",
            "Visual design & branding",
            "Interaction design",
            "Usability testing",
            "Design systems"
        ],
        stats: { label: "Projects Done", value: "150+" },
        process: [
            { title: "Discovery & Research", desc: "Stakeholder workshops and user interviews to define goals" },
            { title: "Wireframes & Flows", desc: "User journeys and screen layouts for smooth navigation" },
            { title: "Visual Mockups", desc: "High-fidelity designs reflecting your brand" },
            { title: "Prototype & Test", desc: "Interactive prototypes tested with real users" }
        ],
        technologies: ["Figma", "Sketch", "Adobe XD", "InVision", "Miro"],
        caseStudy: {
            title: "Fintech Dashboard",
            desc: "Clean, data-driven interface for managing investments on the go"
        }
    },
    {
        icon: Code,
        emoji: "⚡",
        title: "No-Code App Development",
        slug: "no-code-app-web-development",
        description: "Launch mobile and web apps rapidly without traditional coding—ideal for startups and entrepreneurs.",
        gradient: "from-amber-500 via-orange-500 to-red-500",
        features: [
            "Visual development tools",
            "Custom logic workflows",
            "Cross-platform deployment",
            "Rapid prototyping",
            "Easy scaling",
            "API integration"
        ],
        stats: { label: "Apps Launched", value: "80+" },
        process: [
            { title: "Consultation & Analysis", desc: "Understanding your business goals and technical requirements" },
            { title: "Design & Prototyping", desc: "Interactive prototypes to visualize the final product" },
            { title: "Development & Testing", desc: "Agile development with rigorous quality assurance" },
            { title: "Deployment & Support", desc: "Post-launch maintenance and optimization" }
        ],
        technologies: ["Bubble", "Webflow", "FlutterFlow", "Adalo", "Glide"],
        caseStudy: {
            title: "Mobile App Development",
            desc: "Robust, scalable mobile apps for Android and iOS platforms"
        }
    },
    {
        icon: Layers,
        emoji: "🚀",
        title: "Full Stack Development",
        slug: "full-stack-development",
        description: "End-to-end development services covering front-end, back-end, and everything in between.",
        gradient: "from-blue-500 via-cyan-500 to-teal-500",
        features: [
            "MERN stack expertise",
            "TypeScript development",
            "Redis caching",
            "RESTful & GraphQL APIs",
            "Responsive UI design",
            "Performance optimization"
        ],
        stats: { label: "Full Stack Apps", value: "120+" },
        process: [
            { title: "Requirement Analysis", desc: "Define scope, requirements, and success metrics" },
            { title: "Design & Prototyping", desc: "Interactive wireframes to visualize your vision" },
            { title: "Development & Testing", desc: "Agile development with rigorous testing" },
            { title: "Deployment & Maintenance", desc: "Scalable infrastructure with ongoing support" }
        ],
        technologies: ["React", "Node.js", "MongoDB", "Express", "TypeScript", "Redis"],
        caseStudy: {
            title: "E-commerce Platform",
            desc: "Full-featured MERN e-commerce solution with seamless UX"
        }
    },
    {
        icon: Monitor,
        emoji: "💻",
        title: "Desktop Application Development",
        slug: "computer-application-development",
        description: "Tailored desktop software solutions to streamline your business operations and improve productivity.",
        gradient: "from-emerald-500 via-green-500 to-teal-500",
        features: [
            "Java-powered solutions",
            "Custom business logic",
            "Cross-platform compatibility",
            "ERP & CRM systems",
            "Inventory management",
            "Report & analytics tools"
        ],
        stats: { label: "Desktop Apps", value: "65+" },
        process: [
            { title: "Consultation & Analysis", desc: "Understanding your goals and crafting tailored strategy" },
            { title: "Design & Prototyping", desc: "Interactive prototypes and wireframes" },
            { title: "Development & Testing", desc: "Agile development with quality assurance" },
            { title: "Deployment & Support", desc: "Post-launch maintenance to keep software optimized" }
        ],
        technologies: ["Java", "JavaFX", "Swing", "Spring Boot", "PostgreSQL"],
        caseStudy: {
            title: "Custom ERP Solutions",
            desc: "End-to-end enterprise resource planning tailored to workflows"
        }
    },
    {
        icon: ShoppingCart,
        emoji: "🛒",
        title: "E-commerce Strategy Projects",
        slug: "ecommerce-strategy",
        description: "Strategic planning and execution for online stores that convert and scale.",
        gradient: "from-rose-500 via-pink-500 to-fuchsia-500",
        features: [
            "Market analysis",
            "Conversion optimization",
            "Mobile UX enhancement",
            "Technology integration",
            "Payment systems",
            "Performance analytics"
        ],
        stats: { label: "Stores Built", value: "95+" },
        process: [
            { title: "Discovery & Research", desc: "Analyze market, competitors, and customer segments" },
            { title: "Strategy Development", desc: "Integrated strategy aligned with brand identity" },
            { title: "Implementation & Integration", desc: "Seamless implementation with latest technology" },
            { title: "Monitoring & Optimization", desc: "Continuous analysis to maximize performance" }
        ],
        technologies: ["Shopify", "WooCommerce", "Magento", "BigCommerce", "Stripe"],
        caseStudy: {
            title: "Conversion Boost",
            desc: "Targeted strategy increased online conversions by 40%"
        }
    },
    {
        icon: FileText,
        emoji: "📝",
        title: "Content Management Systems",
        slug: "content-management",
        description: "Robust CMS solutions for easy content publishing and management.",
        gradient: "from-indigo-500 via-purple-500 to-violet-500",
        features: [
            "Custom CMS development",
            "Headless CMS integration",
            "Content strategy",
            "Workflow automation",
            "Multilingual support",
            "Performance optimization"
        ],
        stats: { label: "CMS Deployed", value: "110+" },
        process: [
            { title: "Discovery & Planning", desc: "Assess content needs and business goals" },
            { title: "Design & Development", desc: "Intuitive interface with robust architecture" },
            { title: "Integration & Training", desc: "Integrate with existing tools and train team" },
            { title: "Launch & Ongoing Support", desc: "Continuous support and optimization" }
        ],
        technologies: ["WordPress", "Strapi", "Contentful", "Sanity", "Ghost"],
        caseStudy: {
            title: "Corporate Website Revamp",
            desc: "Custom CMS enhanced content delivery and brand consistency"
        }
    },
    {
        icon: Share2,
        emoji: "📱",
        title: "Social Media Campaigns",
        slug: "social-media-campaigns",
        description: "Creative, data-driven campaigns across platforms to boost brand awareness and ROI.",
        gradient: "from-cyan-500 via-blue-500 to-indigo-500",
        features: [
            "Multi-platform strategy",
            "Content creation",
            "Audience targeting",
            "Influencer partnerships",
            "Analytics & reporting",
            "Ad campaign management"
        ],
        stats: { label: "Campaigns Run", value: "200+" },
        process: [
            { title: "Research & Audience Analysis", desc: "Market trends, behaviors, and competitor analysis" },
            { title: "Strategy & Content Planning", desc: "Creative content and platform-specific strategies" },
            { title: "Execution & Monitoring", desc: "Real-time monitoring for optimal delivery" },
            { title: "Review & Optimization", desc: "Continuous refinement for superior performance" }
        ],
        technologies: ["Meta Ads", "LinkedIn Ads", "Twitter Ads", "Buffer", "Hootsuite"],
        caseStudy: {
            title: "Brand Engagement Uplift",
            desc: "Campaign increased audience engagement by 55% in 3 months"
        }
    },
];

// Floating Background Orbs
function FloatingOrbs({ isScrolling }: { isScrolling: boolean }) {
    const prefersReducedMotion = useReducedMotion();

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(12)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute rounded-full blur-3xl"
                    style={{
                        width: `${200 + i * 40}px`,
                        height: `${200 + i * 40}px`,
                        left: `${(i * 9) % 100}%`,
                        top: `${(i * 13) % 100}%`,
                        background: `radial-gradient(circle, ${
                            ["#a855f715", "#f59e0b15", "#3b82f615", "#10b98115", "#ec489915", "#6366f115", "#06b6d415"][i % 7]
                        }, transparent)`,
                        willChange: isScrolling || prefersReducedMotion ? "auto" : "transform",
                    }}
                    animate={isScrolling || prefersReducedMotion ? {} : {
                        x: [0, 80, 0],
                        y: [0, -80, 0],
                        scale: [1, 1.2, 1],
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

// Ultra-Magnetic Service Card with All Content
function UltraMagneticServiceCard({ 
    service, 
    index, 
    isScrolling 
}: {
    service: typeof services[0];
    index: number;
    isScrolling: boolean;
}) {
    const cardRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);
    const [showDetails, setShowDetails] = useState(false);
    const prefersReducedMotion = useReducedMotion();

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springConfig = { stiffness: 260, damping: 24, mass: 0.3 };
    const mouseXSpring = useSpring(x, springConfig);
    const mouseYSpring = useSpring(y, springConfig);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);
    const scale = useTransform(mouseXSpring, [-0.5, 0, 0.5], [1.02, 1, 1.02]);

    const iconX = useTransform(mouseXSpring, [-0.5, 0.5], [-25, 25]);
    const iconY = useTransform(mouseYSpring, [-0.5, 0.5], [-25, 25]);
    const textX = useTransform(mouseXSpring, [-0.5, 0.5], [-12, 12]);
    const textY = useTransform(mouseYSpring, [-0.5, 0.5], [-12, 12]);

    const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current || isScrolling || prefersReducedMotion) return;

        const rect = cardRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const deltaX = e.clientX - centerX;
        const deltaY = e.clientY - centerY;
        
        const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);
        const maxDistance = 180;
        
        if (distance < maxDistance) {
            const strength = 1 - distance / maxDistance;
            x.set((deltaX / rect.width) * strength * 0.6);
            y.set((deltaY / rect.height) * strength * 0.6);
        }
    }, [isScrolling, prefersReducedMotion, x, y]);

    const handleMouseLeave = useCallback(() => {
        x.set(0);
        y.set(0);
        setIsHovered(false);
    }, [x, y]);

    const shouldAnimate = !isScrolling && !prefersReducedMotion;

    return (
        <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => !isScrolling && setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            style={{
                rotateX: shouldAnimate ? rotateX : 0,
                rotateY: shouldAnimate ? rotateY : 0,
                scale: shouldAnimate ? scale : 1,
                transformStyle: "preserve-3d",
            }}
            className="relative group"
        >
            <div className="glass-card p-8 relative overflow-hidden border-2 border-white/10 hover:border-white/30 transition-all duration-500 h-full flex flex-col">
                {/* Animated Gradient Background */}
                <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    style={{
                        background: `radial-gradient(circle at 50% 50%, ${
                            service.gradient.includes('purple') ? 'rgba(168,85,247,0.25)' :
                            service.gradient.includes('amber') ? 'rgba(245,158,11,0.25)' :
                            service.gradient.includes('blue') ? 'rgba(59,130,246,0.25)' :
                            service.gradient.includes('emerald') ? 'rgba(16,185,129,0.25)' :
                            service.gradient.includes('rose') ? 'rgba(244,63,94,0.25)' :
                            service.gradient.includes('indigo') ? 'rgba(99,102,241,0.25)' :
                            'rgba(6,182,212,0.25)'
                        } 0%, transparent 70%)`,
                    }}
                />

                {/* Magnetic Field Rings */}
                {isHovered && shouldAnimate && (
                    <div className="absolute inset-0 pointer-events-none">
                        {[...Array(3)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute inset-0 rounded-2xl border-2 opacity-20"
                                style={{
                                    borderColor: service.gradient.includes('purple') ? '#a855f7' :
                                        service.gradient.includes('amber') ? '#f59e0b' :
                                        service.gradient.includes('blue') ? '#3b82f6' :
                                        service.gradient.includes('emerald') ? '#10b981' :
                                        service.gradient.includes('rose') ? '#f43f5e' :
                                        service.gradient.includes('indigo') ? '#6366f1' :
                                        '#06b6d4',
                                }}
                                animate={{
                                    scale: [1, 1.08 + i * 0.06, 1],
                                    opacity: [0.2, 0, 0.2],
                                }}
                                transition={{
                                    duration: 2.5,
                                    repeat: Infinity,
                                    delay: i * 0.5,
                                }}
                            />
                        ))}
                    </div>
                )}

                {/* Dual Scan Lines */}
                {isHovered && shouldAnimate && (
                    <>
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                            initial={{ x: "-100%" }}
                            animate={{ x: "200%" }}
                            transition={{ duration: 1.8, repeat: Infinity }}
                        />
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent"
                            initial={{ y: "-100%" }}
                            animate={{ y: "200%" }}
                            transition={{ duration: 2.2, repeat: Infinity }}
                        />
                    </>
                )}

                {/* Advanced Particle System */}
                {isHovered && shouldAnimate && (
                    <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
                        {[...Array(16)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute w-1 h-1 rounded-full"
                                style={{
                                    background: service.gradient.includes('purple') ? '#a855f7' :
                                        service.gradient.includes('amber') ? '#f59e0b' :
                                        service.gradient.includes('blue') ? '#3b82f6' :
                                        service.gradient.includes('emerald') ? '#10b981' :
                                        service.gradient.includes('rose') ? '#f43f5e' :
                                        service.gradient.includes('indigo') ? '#6366f1' :
                                        '#06b6d4',
                                    boxShadow: `0 0 20px currentColor`,
                                    left: "50%",
                                    top: "50%",
                                }}
                                animate={{
                                    x: [0, Math.cos((i * Math.PI) / 8) * 120],
                                    y: [0, Math.sin((i * Math.PI) / 8) * 120],
                                    opacity: [1, 0],
                                    scale: [0, 2.5, 0],
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

                {/* Content Container */}
                <div className="relative z-20 flex flex-col h-full">
                    {/* Header Section */}
                    <div className="flex items-start justify-between mb-6">
                        <motion.div
                            style={{
                                x: shouldAnimate ? iconX : 0,
                                y: shouldAnimate ? iconY : 0,
                                transform: "translateZ(60px)",
                            }}
                            className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-2xl relative`}
                            whileHover={shouldAnimate ? { 
                                rotate: 360, 
                                scale: 1.2,
                            } : {}}
                            transition={{ duration: 0.8, type: "spring", stiffness: 180 }}
                        >
                            <service.icon className="w-8 h-8 text-white relative z-10" />

                            {/* Enhanced Glow */}
                            <motion.div
                                className="absolute inset-0 rounded-2xl blur-2xl opacity-60"
                                style={{
                                    background: `linear-gradient(to bottom right, ${
                                        service.gradient.includes('purple') ? '#a855f7' :
                                        service.gradient.includes('amber') ? '#f59e0b' :
                                        service.gradient.includes('blue') ? '#3b82f6' :
                                        service.gradient.includes('emerald') ? '#10b981' :
                                        service.gradient.includes('rose') ? '#f43f5e' :
                                        service.gradient.includes('indigo') ? '#6366f1' :
                                        '#06b6d4'
                                    }, transparent)`
                                }}
                                animate={isHovered && shouldAnimate ? {
                                    scale: [1, 2, 1],
                                    opacity: [0.6, 1, 0.6],
                                } : {}}
                                transition={{ duration: 2.5, repeat: Infinity }}
                            />

                            {/* Counter-rotating Rings */}
                            {isHovered && shouldAnimate && (
                                <>
                                    <motion.div
                                        className="absolute inset-0 border-2 border-white/60 rounded-2xl"
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                    />
                                    <motion.div
                                        className="absolute inset-0 border-2 border-white/40 rounded-2xl"
                                        animate={{ rotate: -360 }}
                                        transition={{ duration: 4.5, repeat: Infinity, ease: "linear" }}
                                    />
                                </>
                            )}
                        </motion.div>

                        <motion.div
                            className="text-5xl"
                            style={{
                                x: shouldAnimate ? iconX : 0,
                                y: shouldAnimate ? iconY : 0,
                                transform: "translateZ(50px)",
                            }}
                            animate={isHovered && shouldAnimate ? {
                                scale: [1, 1.4, 1],
                                rotate: [0, 20, -20, 0],
                            } : {}}
                            transition={{ duration: 0.7 }}
                        >
                            {service.emoji}
                        </motion.div>
                    </div>

                    {/* Stats Badge */}
                    <motion.div
                        className="absolute top-6 right-6 px-4 py-2 bg-black/90 backdrop-blur-xl rounded-full flex items-center gap-2 border border-white/50 shadow-2xl z-30"
                        style={{ transform: "translateZ(70px)" }}
                        initial={{ opacity: 0, scale: 0, rotate: -90 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ 
                            delay: index * 0.1 + 0.5, 
                            type: "spring",
                            stiffness: 220 
                        }}
                        whileHover={shouldAnimate ? { 
                            scale: 1.15, 
                            rotate: 8 
                        } : {}}
                    >
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        <span className="text-sm font-bold text-white">{service.stats.value}</span>
                    </motion.div>

                    {/* Title */}
                    <motion.h3
                        style={{
                            x: shouldAnimate ? textX : 0,
                            y: shouldAnimate ? textY : 0,
                            transform: "translateZ(40px)",
                        }}
                        className={`text-2xl font-bold mb-3 transition-all duration-500 ${
                            isHovered
                                ? `bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`
                                : 'text-white'
                        }`}
                    >
                        {service.title}
                    </motion.h3>

                    {/* Description */}
                    <motion.p 
                        style={{
                            x: shouldAnimate ? textX : 0,
                            y: shouldAnimate ? textY : 0,
                            transform: "translateZ(30px)",
                        }}
                        className="text-base text-gray-300 leading-relaxed mb-5"
                    >
                        {service.description}
                    </motion.p>

                    {/* Features Grid */}
                    <div className="grid grid-cols-2 gap-3 mb-5 flex-grow">
                        {service.features.slice(0, 6).map((feature, i) => (
                            <motion.div
                                key={i}
                                className="flex items-center gap-2"
                                style={{ transform: "translateZ(25px)" }}
                                initial={{ opacity: 0, x: -15 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 + i * 0.08 }}
                            >
                                <motion.div 
                                    className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient} flex-shrink-0`}
                                    animate={isHovered && shouldAnimate ? {
                                        scale: [1, 1.8, 1],
                                        boxShadow: [
                                            '0 0 0px rgba(255,255,255,0)',
                                            '0 0 15px rgba(255,255,255,0.9)',
                                            '0 0 0px rgba(255,255,255,0)',
                                        ],
                                    } : {}}
                                    transition={{ 
                                        duration: 1.8, 
                                        repeat: Infinity,
                                        delay: i * 0.15 
                                    }}
                                />
                                <span className="text-xs text-gray-400">{feature}</span>
                            </motion.div>
                        ))}
                    </div>

                    {/* Technologies */}
                    <motion.div
                        className="flex flex-wrap gap-2 mb-5"
                        style={{ transform: "translateZ(20px)" }}
                    >
                        {service.technologies.slice(0, 4).map((tech, i) => (
                            <motion.span
                                key={i}
                                className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${service.gradient} bg-opacity-20 border border-white/20 backdrop-blur-sm`}
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1 + i * 0.1 }}
                                whileHover={{ scale: 1.15, y: -3 }}
                            >
                                {tech}
                            </motion.span>
                        ))}
                    </motion.div>

                    {/* Footer Actions */}
                    <div className="flex items-center justify-between pt-5 border-t border-white/20 mt-auto">
                        <motion.div style={{ transform: "translateZ(35px)" }}>
                            <p className="text-xs text-gray-400 mb-1">{service.stats.label}</p>
                            <p className={`text-xl font-bold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                                {service.stats.value}
                            </p>
                        </motion.div>

                        <Link href={`/services/${service.slug}`}>
                            <motion.div
                                className="flex items-center gap-2 px-5 py-3 bg-white/10 backdrop-blur-md rounded-xl border border-white/30 text-white font-semibold text-sm hover:bg-white/20 transition-all relative overflow-hidden group/btn cursor-pointer"
                                style={{ transform: "translateZ(50px)" }}
                                whileHover={shouldAnimate ? { 
                                    scale: 1.08, 
                                    x: 6 
                                } : {}}
                                whileTap={{ scale: 0.92 }}
                            >
                                <motion.div
                                    className="absolute inset-0 opacity-0 group-hover/btn:opacity-100"
                                    style={{
                                        background: `linear-gradient(135deg, ${
                                            service.gradient.includes('purple') ? 'rgba(168,85,247,0.5)' :
                                            service.gradient.includes('amber') ? 'rgba(245,158,11,0.5)' :
                                            service.gradient.includes('blue') ? 'rgba(59,130,246,0.5)' :
                                            service.gradient.includes('emerald') ? 'rgba(16,185,129,0.5)' :
                                            service.gradient.includes('rose') ? 'rgba(244,63,94,0.5)' :
                                            service.gradient.includes('indigo') ? 'rgba(99,102,241,0.5)' :
                                            'rgba(6,182,212,0.5)'
                                        } 0%, transparent 100%)`,
                                    }}
                                    initial={{ x: "-100%" }}
                                    whileHover={{ x: 0 }}
                                    transition={{ duration: 0.3 }}
                                />
                                <span className="relative z-10 text-xs">Learn More</span>
                                <ExternalLink className="w-4 h-4 relative z-10 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                            </motion.div>
                        </Link>
                    </div>
                </div>

                {/* Holographic Edge Shimmer */}
                {shouldAnimate && (
                    <motion.div
                        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 pointer-events-none"
                        style={{
                            background: `linear-gradient(45deg, transparent, ${
                                service.gradient.includes('purple') ? 'rgba(168,85,247,0.35)' :
                                service.gradient.includes('amber') ? 'rgba(245,158,11,0.35)' :
                                service.gradient.includes('blue') ? 'rgba(59,130,246,0.35)' :
                                service.gradient.includes('emerald') ? 'rgba(16,185,129,0.35)' :
                                service.gradient.includes('rose') ? 'rgba(244,63,94,0.35)' :
                                service.gradient.includes('indigo') ? 'rgba(99,102,241,0.35)' :
                                'rgba(6,182,212,0.35)'
                            }, transparent)`,
                            backgroundSize: "200% 200%",
                        }}
                        animate={{
                            backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                        }}
                    />
                )}
            </div>
        </motion.div>
    );
}

export default function ServicesPage() {
    const [isScrolling, setIsScrolling] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
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
        <>
            <section className="relative min-h-screen pt-32 pb-20 px-6 overflow-hidden bg-black">
                {/* Dark Gradient Base */}
                <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />
                <div className="brutal-grid opacity-10 absolute inset-0" />
                <div className="scan-line" />

                {/* Floating Orbs */}
                <FloatingOrbs isScrolling={isScrolling} />

                {/* Enhanced Grid Pattern */}
                <motion.div
                    className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: `
                            linear-gradient(rgba(168, 85, 247, 0.3) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px),
                            radial-gradient(circle, rgba(6, 182, 212, 0.4) 1px, transparent 1px)
                        `,
                        backgroundSize: "60px 60px, 60px 60px, 60px 60px",
                        backgroundPosition: "0 0, 0 0, 30px 30px",
                        willChange: isScrolling || prefersReducedMotion ? "auto" : "background-position",
                    }}
                    animate={isScrolling || prefersReducedMotion ? {} : {
                        backgroundPosition: ["0px 0px, 0px 0px, 30px 30px", "60px 60px, 60px 60px, 90px 90px"],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />

                {/* Mouse Tracking Glows */}
                {!isScrolling && !prefersReducedMotion && (
                    <>
                        <motion.div
                            className="absolute w-[800px] h-[800px] rounded-full blur-[200px] pointer-events-none"
                            style={{
                                left: `${mousePosition.x}%`,
                                top: `${mousePosition.y}%`,
                                transform: "translate(-50%, -50%)",
                                background: "radial-gradient(circle, rgba(168, 85, 247, 0.2), transparent)",
                                willChange: "transform",
                            }}
                        />
                        <motion.div
                            className="absolute w-[600px] h-[600px] rounded-full blur-[180px] pointer-events-none"
                            style={{
                                left: `${mousePosition.x}%`,
                                top: `${mousePosition.y}%`,
                                transform: "translate(-50%, -50%)",
                                background: "radial-gradient(circle, rgba(59, 130, 246, 0.18), transparent)",
                                willChange: "transform",
                            }}
                        />
                    </>
                )}

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="show"
                    className="relative z-10 max-w-7xl mx-auto"
                >
                    {/* Header */}
                    <motion.div variants={fadeInUp} className="text-center mb-20">
                        <motion.div
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ type: "spring", duration: 0.9, stiffness: 180 }}
                            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-purple-500/15 via-blue-500/15 to-cyan-500/15 border border-purple-500/40 rounded-full text-sm font-bold text-purple-300 mb-8 shadow-lg shadow-purple-500/20"
                        >
                            <Sparkles className="w-5 h-5" />
                            Our Services
                        </motion.div>

                        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6">
                            Services That <span className="holographic">Transform</span>
                        </h1>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                            Comprehensive technology solutions designed for enterprise scale, performance, and innovation—from UI/UX design to full-stack development.
                        </p>
                    </motion.div>

                    {/* Services Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                        {services.map((service, index) => (
                            <UltraMagneticServiceCard
                                key={index}
                                service={service}
                                index={index}
                                isScrolling={isScrolling}
                            />
                        ))}
                    </div>

                    {/* CTA Section */}
                    <motion.div 
                        className="text-center"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <motion.button
                            className="px-10 py-5 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 rounded-2xl font-bold text-lg flex items-center gap-3 mx-auto hover:shadow-2xl hover:shadow-purple-500/60 transition-all relative overflow-hidden group"
                            whileHover={{ scale: 1.08, y: -5 }}
                            whileTap={{ scale: 0.92 }}
                        >
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500"
                                initial={{ x: "100%" }}
                                whileHover={{ x: "-100%" }}
                                transition={{ duration: 0.7 }}
                            />
                            <span className="relative z-10">Start Your Project Today</span>
                            <ArrowRight className="w-6 h-6 relative z-10 group-hover:translate-x-2 transition-transform" />
                        </motion.button>

                        <motion.p
                            className="mt-6 text-gray-400 text-sm"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                        >
                            Join 500+ satisfied clients who transformed their digital presence with Arani Software Solution
                        </motion.p>
                    </motion.div>
                </motion.div>
            </section>
            <Footer />
        </>
    );
}
