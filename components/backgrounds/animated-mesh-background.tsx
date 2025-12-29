"use client";

import { useEffect, useRef } from "react";

export default function AnimatedMeshBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // Gradient configuration
        const gradientColors = [
            { r: 0, g: 229, b: 255 },      // neon-blue
            { r: 168, g: 85, b: 247 },     // neon-purple
            { r: 16, g: 185, b: 129 },     // neon-green
            { r: 236, g: 72, b: 153 },     // neon-pink
        ];

        let time = 0;

        const animate = () => {
            time += 0.002;

            // Create animated gradient
            const gradient = ctx.createLinearGradient(
                0,
                0,
                canvas.width,
                canvas.height
            );

            // Calculate animated color positions
            const color1 = gradientColors[0];
            const color2 = gradientColors[1];
            const color3 = gradientColors[2];
            const color4 = gradientColors[3];

            const offset1 = Math.sin(time) * 0.2 + 0.2;
            const offset2 = Math.sin(time + Math.PI / 2) * 0.2 + 0.5;
            const offset3 = Math.sin(time + Math.PI) * 0.2 + 0.8;

            gradient.addColorStop(0, `rgba(${color1.r}, ${color1.g}, ${color1.b}, 0.1)`);
            gradient.addColorStop(offset1, `rgba(${color2.r}, ${color2.g}, ${color2.b}, 0.15)`);
            gradient.addColorStop(offset2, `rgba(${color3.r}, ${color3.g}, ${color3.b}, 0.15)`);
            gradient.addColorStop(offset3, `rgba(${color4.r}, ${color4.g}, ${color4.b}, 0.1)`);
            gradient.addColorStop(1, `rgba(${color1.r}, ${color1.g}, ${color1.b}, 0.05)`);

            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            requestAnimationFrame(animate);
        };

        animate();

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ mixBlendMode: "screen" }}
        />
    );
}
