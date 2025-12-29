"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function MagneticCursorEffect() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
            setIsVisible(true);
        };

        const handleMouseLeave = () => setIsVisible(false);

        window.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);

    if (!isVisible) return null;

    return (
        <>
            {/* Main cursor glow */}
            <motion.div
                className="fixed w-96 h-96 pointer-events-none z-50"
                animate={{
                    x: mousePosition.x - 192,
                    y: mousePosition.y - 192,
                }}
                transition={{
                    type: "spring",
                    damping: 30,
                    stiffness: 200,
                    mass: 0.5,
                }}
            >
                <div className="w-full h-full bg-gradient-radial from-neon-blue/20 via-neon-purple/10 to-transparent rounded-full blur-3xl" />
            </motion.div>

            {/* Secondary ripple effect */}
            <motion.div
                className="fixed w-64 h-64 pointer-events-none z-50"
                animate={{
                    x: mousePosition.x - 128,
                    y: mousePosition.y - 128,
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.3, 0.5],
                }}
                transition={{
                    x: { type: "spring", damping: 20, stiffness: 150 },
                    y: { type: "spring", damping: 20, stiffness: 150 },
                    scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                    opacity: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                }}
            >
                <div className="w-full h-full bg-gradient-radial from-neon-cyan/30 to-transparent rounded-full blur-2xl" />
            </motion.div>

            {/* Trail effect */}
            {[...Array(3)].map((_, i) => (
                <motion.div
                    key={i}
                    className="fixed w-12 h-12 pointer-events-none z-40"
                    animate={{
                        x: mousePosition.x - 24,
                        y: mousePosition.y - 24,
                    }}
                    transition={{
                        type: "spring",
                        damping: 30 - i * 5,
                        stiffness: 200 - i * 30,
                        mass: 0.5 + i * 0.1,
                    }}
                >
                    <div
                        className="w-full h-full rounded-full blur-sm"
                        style={{
                            background: `radial-gradient(circle, rgba(0,229,255,${0.2 - i * 0.05}), transparent)`,
                        }}
                    />
                </motion.div>
            ))}
        </>
    );
}
