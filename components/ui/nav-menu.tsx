"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function NavMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const pathname = usePathname();

    const navItems = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Services", href: "/services" },
        { name: "Projects", href: "/projects" },
        { name: "Solutions", href: "/solutions" },
    ];

    return (
        <>
            {/* Custom Magnetic Cursor Follower */}
            <MagneticCursor />

            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}
                className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
            >
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        className="glass-effect rounded-2xl px-6 py-4 flex items-center justify-between backdrop-blur-2xl border border-white/20 shadow-2xl shadow-black/10"
                        whileHover={{ borderColor: "rgba(255,255,255,0.3)" }}
                        transition={{ duration: 0.3 }}
                    >
                        {/* Enhanced Logo with 180° Rotation on Hover */}
                        <Link href="/" className="flex items-center space-x-3 group relative z-10">
                            <motion.div
                                whileHover={{
                                    scale: 1.1,
                                    rotate: 180, // ✅ 180 degree rotation on hover
                                }}
                                transition={{
                                    scale: {
                                        type: "spring",
                                        stiffness: 260,
                                        damping: 20,
                                    },
                                    rotate: {
                                        type: "spring",
                                        stiffness: 200,
                                        damping: 15,
                                    }
                                }}
                                className="relative w-11 h-11 rounded-xl overflow-hidden shadow-xl shadow-neon-blue/40"
                                style={{ transformStyle: "preserve-3d" }}
                            >
                                {/* Logo Image */}
                                <Image
                                    src="/logo/arani.png"
                                    alt="Arani Software Logo"
                                    fill
                                    className="object-contain p-1.5"
                                    priority
                                />

                                {/* Gradient Overlay on Hover */}
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-br from-neon-blue/20 via-purple-500/20 to-neon-purple/20 opacity-0"
                                    whileHover={{ opacity: 1 }}
                                    transition={{ duration: 0.3 }}
                                />

                                {/* Animated glow pulse */}
                                <motion.div
                                    className="absolute inset-0 bg-neon-blue/30 rounded-xl blur-md -z-10"
                                    animate={{
                                        scale: [1, 1.2, 1],
                                        opacity: [0.3, 0.6, 0.3]
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                />

                                {/* Border Animation */}
                                <motion.div
                                    className="absolute inset-0 rounded-xl border-2 border-neon-blue/0"
                                    whileHover={{
                                        borderColor: "rgba(0, 229, 255, 0.6)",
                                        boxShadow: "0 0 20px rgba(0, 229, 255, 0.4)"
                                    }}
                                    transition={{ duration: 0.3 }}
                                />
                            </motion.div>

                            <motion.span
                                className="text-xl font-bold holographic group-hover:tracking-wider transition-all duration-500"
                                whileHover={{ scale: 1.05 }}
                            >
                                Arani Software
                            </motion.span>
                        </Link>

                        {/* Desktop Navigation with Advanced Magnetic + Blur Effects */}
                        <ul className="hidden md:flex items-center space-x-2 relative">
                            {navItems.map((item, index) => (
                                <AdvancedMagneticNavLink
                                    key={item.href}
                                    item={item}
                                    index={index}
                                    isActive={pathname === item.href}
                                    hoveredIndex={hoveredIndex}
                                    setHoveredIndex={setHoveredIndex}
                                />
                            ))}
                        </ul>

                        {/* Premium CTA Button with Magnetic Effect */}
                        <EnhancedMagneticButton className="hidden md:block">
                            <Link href="/contact">
                                <motion.button
                                    whileHover={{ scale: 1.08 }}
                                    whileTap={{ scale: 0.92 }}
                                    className="px-7 py-3 bg-gradient-to-r from-neon-blue via-purple-500 to-neon-purple rounded-xl font-semibold hover:shadow-2xl hover:shadow-neon-blue/60 transition-all relative overflow-hidden group"
                                >
                                    <span className="relative z-10 flex items-center gap-2">
                                        Contact
                                        <motion.span
                                            animate={{ x: [0, 4, 0] }}
                                            transition={{
                                                duration: 1.5,
                                                repeat: Infinity,
                                                ease: "easeInOut"
                                            }}
                                        >
                                            →
                                        </motion.span>
                                    </span>

                                    {/* Animated gradient overlay */}
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-r from-neon-purple via-pink-500 to-neon-blue opacity-0 group-hover:opacity-100 transition-opacity"
                                        animate={{
                                            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                                        }}
                                        transition={{ duration: 3, repeat: Infinity }}
                                        style={{ backgroundSize: "200% 200%" }}
                                    />

                                    {/* Shine effect */}
                                    <motion.div
                                        className="absolute inset-0 opacity-0 group-hover:opacity-100"
                                        initial={false}
                                    >
                                        <motion.div
                                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                                            animate={{ x: ["-100%", "200%"] }}
                                            transition={{
                                                duration: 1.5,
                                                repeat: Infinity,
                                                repeatDelay: 0.5,
                                                ease: "easeInOut"
                                            }}
                                        />
                                    </motion.div>
                                </motion.button>
                            </Link>
                        </EnhancedMagneticButton>

                        {/* Enhanced Mobile Menu Button */}
                        <motion.button
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden text-white relative z-10 p-2 rounded-lg hover:bg-white/10 transition-colors"
                            whileTap={{ scale: 0.85 }}
                            whileHover={{ scale: 1.1 }}
                        >
                            <AnimatePresence mode="wait">
                                {isOpen ? (
                                    <motion.div
                                        key="close"
                                        initial={{ rotate: -90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: 90, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <X size={24} />
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="menu"
                                        initial={{ rotate: 90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: -90, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <Menu size={24} />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.button>
                    </motion.div>

                    {/* Premium Mobile Menu */}
                    <AnimatePresence>
                        {isOpen && (
                            <motion.div
                                initial={{ opacity: 0, height: 0, y: -20, scale: 0.95 }}
                                animate={{ opacity: 1, height: "auto", y: 0, scale: 1 }}
                                exit={{ opacity: 0, height: 0, y: -20, scale: 0.95 }}
                                transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                                className="md:hidden mt-2 glass-effect rounded-2xl overflow-hidden backdrop-blur-2xl border border-white/20 shadow-2xl"
                            >
                                <motion.div className="flex flex-col p-4 space-y-2">
                                    {navItems.map((item, index) => (
                                        <motion.div
                                            key={item.name}
                                            initial={{ opacity: 0, x: -30, filter: "blur(4px)" }}
                                            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                                            transition={{
                                                delay: index * 0.1,
                                                type: "spring",
                                                stiffness: 300,
                                                damping: 24
                                            }}
                                        >
                                            <Link
                                                href={item.href}
                                                onClick={() => setIsOpen(false)}
                                                className={`px-5 py-3.5 rounded-xl hover:bg-white/10 transition-all duration-300 block group relative overflow-hidden ${pathname === item.href
                                                        ? "text-white bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 border border-neon-blue/30"
                                                        : "text-gray-300 hover:text-white"
                                                    }`}
                                            >
                                                <span className="relative z-10">{item.name}</span>
                                                <motion.div
                                                    className="absolute inset-0 bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 opacity-0 group-hover:opacity-100"
                                                    transition={{ duration: 0.3 }}
                                                />
                                            </Link>
                                        </motion.div>
                                    ))}

                                    <Link href="/contact" onClick={() => setIsOpen(false)}>
                                        <motion.button
                                            initial={{ opacity: 0, x: -30, filter: "blur(4px)" }}
                                            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                                            transition={{
                                                delay: navItems.length * 0.1,
                                                type: "spring"
                                            }}
                                            whileTap={{ scale: 0.95 }}
                                            className="w-full px-5 py-3.5 bg-gradient-to-r from-neon-blue to-neon-purple rounded-xl font-semibold mt-2 hover:shadow-lg hover:shadow-neon-blue/50 transition-all relative overflow-hidden group"
                                        >
                                            <span className="relative z-10">Contact</span>
                                        </motion.button>
                                    </Link>
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </motion.nav>
        </>
    );
}

// Advanced Magnetic Nav Link with Blur Effect
function AdvancedMagneticNavLink({
    item,
    index,
    isActive,
    hoveredIndex,
    setHoveredIndex,
}: {
    item: { name: string; href: string };
    index: number;
    isActive: boolean;
    hoveredIndex: number | null;
    setHoveredIndex: (index: number | null) => void;
}) {
    const ref = useRef<HTMLLIElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springX = useSpring(x, { stiffness: 200, damping: 20, mass: 0.5 });
    const springY = useSpring(y, { stiffness: 200, damping: 20, mass: 0.5 });

    const textX = useTransform(springX, (latest) => latest * 0.4);
    const textY = useTransform(springY, (latest) => latest * 0.4);

    const scale = useTransform(springX, [-20, 0, 20], [1.05, 1, 1.05]);

    const isBlurred = hoveredIndex !== null && hoveredIndex !== index;

    const handlePointerMove = (event: React.PointerEvent<HTMLLIElement>) => {
        if (!ref.current) return;

        const bounds = ref.current.getBoundingClientRect();
        const centerX = bounds.left + bounds.width / 2;
        const centerY = bounds.top + bounds.height / 2;
        const deltaX = event.clientX - centerX;
        const deltaY = event.clientY - centerY;

        const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);
        const magneticDistance = 100;
        const attractionStrength = 0.4;

        if (distance < magneticDistance) {
            const strength = 1 - distance / magneticDistance;
            x.set(deltaX * strength * attractionStrength);
            y.set(deltaY * strength * attractionStrength);
        }
    };

    const handlePointerLeave = () => {
        x.set(0);
        y.set(0);
    };

    const MotionLink = motion(Link);

    return (
        <motion.li
            ref={ref}
            onPointerMove={handlePointerMove}
            onPointerLeave={handlePointerLeave}
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
            style={{
                x: springX,
                y: springY,
                scale
            }}
            className="relative"
            animate={{
                filter: isBlurred ? "blur(3px)" : "blur(0px)",
                opacity: isBlurred ? 0.4 : 1
            }}
            transition={{ duration: 0.3 }}
        >
            <MotionLink
                href={item.href}
                className="relative block px-6 py-2.5 rounded-xl font-medium text-sm transition-all duration-500 group"
                style={{ x: textX, y: textY }}
            >
                <motion.span
                    className={`relative z-10 transition-colors duration-300 ${isActive ? "text-white" : "text-gray-300"
                        }`}
                    whileHover={{ scale: 1.05 }}
                >
                    {item.name}
                </motion.span>

                {isActive && (
                    <motion.div
                        layoutId="navbar-bubble"
                        className="absolute inset-0 bg-gradient-to-r from-neon-blue/30 to-neon-purple/30 rounded-xl border border-neon-blue/50 shadow-lg shadow-neon-blue/30"
                        transition={{
                            type: "spring",
                            stiffness: 380,
                            damping: 30,
                            mass: 0.8
                        }}
                    />
                )}

                <motion.div
                    className="absolute inset-0 bg-white/0 rounded-xl"
                    whileHover={{
                        backgroundColor: "rgba(255,255,255,0.08)",
                        boxShadow: "0 0 20px rgba(99, 102, 241, 0.3)"
                    }}
                    transition={{ duration: 0.3 }}
                />

                <motion.div
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-neon-blue to-neon-purple rounded-full"
                    initial={{ scaleX: 0, opacity: 0 }}
                    whileHover={{ scaleX: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                />
            </MotionLink>
        </motion.li>
    );
}

// Enhanced Magnetic Button Component
function EnhancedMagneticButton({
    children,
    className = "",
}: {
    children: React.ReactNode;
    className?: string;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
    const springY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

    const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
        if (!ref.current) return;

        const bounds = ref.current.getBoundingClientRect();
        const centerX = bounds.left + bounds.width / 2;
        const centerY = bounds.top + bounds.height / 2;
        const deltaX = event.clientX - centerX;
        const deltaY = event.clientY - centerY;

        const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);
        const magneticDistance = 120;
        const attractionStrength = 0.5;

        if (distance < magneticDistance) {
            const strength = 1 - distance / magneticDistance;
            x.set(deltaX * strength * attractionStrength);
            y.set(deltaY * strength * attractionStrength);
        } else {
            x.set(0);
            y.set(0);
        }
    };

    const handlePointerLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onPointerMove={handlePointerMove}
            onPointerLeave={handlePointerLeave}
            style={{ x: springX, y: springY }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

// Custom Magnetic Cursor Follower
function MagneticCursor() {
    const [isVisible, setIsVisible] = useState(false);
    const cursorX = useMotionValue(0);
    const cursorY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
            setIsVisible(true);
        };

        const handleMouseLeave = () => setIsVisible(false);

        window.addEventListener("mousemove", handleMouseMove);
        document.body.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            document.body.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, [cursorX, cursorY]);

    return (
        <motion.div
            className="fixed top-0 left-0 w-6 h-6 rounded-full bg-gradient-to-br from-neon-blue to-neon-purple pointer-events-none z-[9999] mix-blend-screen"
            style={{
                x: cursorXSpring,
                y: cursorYSpring,
                translateX: "-50%",
                translateY: "-50%",
            }}
            animate={{
                opacity: isVisible ? 0.6 : 0,
                scale: isVisible ? 1 : 0,
            }}
            transition={{ duration: 0.2 }}
        >
            <motion.div
                className="absolute inset-0 rounded-full border-2 border-neon-blue/50"
                animate={{
                    scale: [1, 1.8, 1],
                    opacity: [0.8, 0, 0.8],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
        </motion.div>
    );
}
