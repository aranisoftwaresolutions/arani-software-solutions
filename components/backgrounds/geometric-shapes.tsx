"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function GeometricShapes() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth - 0.5) * 20,
                y: (e.clientY / window.innerHeight - 0.5) * 20,
            });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    const shapes = [
        { size: 300, left: "10%", top: "15%", rotation: 0, duration: 20, color: "from-neon-blue/10 to-transparent" },
        { size: 200, left: "75%", top: "60%", rotation: 45, duration: 15, color: "from-neon-purple/10 to-transparent" },
        { size: 250, left: "60%", top: "20%", rotation: 90, duration: 25, color: "from-neon-cyan/10 to-transparent" },
        { size: 180, left: "20%", top: "70%", rotation: 135, duration: 18, color: "from-neon-pink/10 to-transparent" },
        { size: 220, left: "85%", top: "25%", rotation: 180, duration: 22, color: "from-neon-green/10 to-transparent" },
    ];

    return (
        <div className="absolute inset-0 pointer-events-none" style={{ perspective: "1000px" }}>
            {shapes.map((shape, index) => (
                <motion.div
                    key={index}
                    className={`absolute bg-gradient-to-br ${shape.color} backdrop-blur-sm`}
                    style={{
                        width: shape.size,
                        height: shape.size,
                        left: shape.left,
                        top: shape.top,
                        transformStyle: "preserve-3d",
                    }}
                    animate={{
                        rotateZ: [shape.rotation, shape.rotation + 360],
                        rotateX: [0, 360],
                        rotateY: [0, 360],
                        x: mousePosition.x * (index % 2 === 0 ? 1 : -1),
                        y: mousePosition.y * (index % 2 === 0 ? 1 : -1),
                    }}
                    transition={{
                        rotateZ: { duration: shape.duration, repeat: Infinity, ease: "linear" },
                        rotateX: { duration: shape.duration * 1.5, repeat: Infinity, ease: "linear" },
                        rotateY: { duration: shape.duration * 2, repeat: Infinity, ease: "linear" },
                        x: { duration: 0.5, ease: "easeOut" },
                        y: { duration: 0.5, ease: "easeOut" },
                    }}
                >
                    <div className="w-full h-full border-2 border-white/10 rounded-3xl" style={{ transform: "translateZ(50px)" }} />
                    <div className="absolute inset-0 border-2 border-white/5 rounded-3xl" style={{ transform: "translateZ(-50px)" }} />
                </motion.div>
            ))}
        </div>
    );
}
