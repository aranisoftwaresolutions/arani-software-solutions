"use client";

import { useEffect, useRef } from "react";

export default function NeuralWaveBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        let time = 0;
        let mouseX = canvas.width / 2;
        let mouseY = canvas.height / 2;

        // Neural wave points
        const waves: Array<{
            points: Array<{ x: number; y: number; vx: number; vy: number }>;
            color: string;
            alpha: number;
        }> = [];

        // Create multiple wave layers
        for (let i = 0; i < 3; i++) {
            const points = [];
            const numPoints = 40;
            for (let j = 0; j < numPoints; j++) {
                points.push({
                    x: (canvas.width / numPoints) * j,
                    y: canvas.height / 2,
                    vx: 0,
                    vy: 0,
                });
            }
            waves.push({
                points,
                color: ["0, 229, 255", "168, 85, 247", "16, 185, 129"][i],
                alpha: 0.3 - i * 0.08,
            });
        }

        const animate = () => {
            time += 0.01;
            ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            waves.forEach((wave, waveIndex) => {
                ctx.beginPath();
                ctx.strokeStyle = `rgba(${wave.color}, ${wave.alpha})`;
                ctx.lineWidth = 2;

                wave.points.forEach((point, index) => {
                    // Calculate wave motion
                    const waveOffset = Math.sin(time + index * 0.2 + waveIndex) * 80;
                    const targetY = canvas.height / 2 + waveOffset;

                    // Magnetic effect towards mouse
                    const dx = mouseX - point.x;
                    const dy = mouseY - point.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 200) {
                        const force = (200 - distance) / 200;
                        point.vx += dx * 0.0001 * force;
                        point.vy += dy * 0.0001 * force;
                    }

                    // Apply physics
                    point.vy += (targetY - point.y) * 0.01;
                    point.y += point.vy;
                    point.x += point.vx;

                    // Damping
                    point.vx *= 0.95;
                    point.vy *= 0.95;

                    // Keep points in bounds
                    if (point.x < 0) point.x = 0;
                    if (point.x > canvas.width) point.x = canvas.width;

                    if (index === 0) {
                        ctx.moveTo(point.x, point.y);
                    } else {
                        // Smooth bezier curve
                        const prevPoint = wave.points[index - 1];
                        const midX = (prevPoint.x + point.x) / 2;
                        const midY = (prevPoint.y + point.y) / 2;
                        ctx.quadraticCurveTo(prevPoint.x, prevPoint.y, midX, midY);
                    }

                    // Draw neural connections
                    if (index % 5 === 0) {
                        ctx.save();
                        ctx.beginPath();
                        ctx.arc(point.x, point.y, 3, 0, Math.PI * 2);
                        ctx.fillStyle = `rgba(${wave.color}, ${wave.alpha + 0.3})`;
                        ctx.fill();
                        ctx.restore();
                    }
                });

                ctx.stroke();

                // Draw connecting lines between waves
                if (waveIndex < waves.length - 1) {
                    const nextWave = waves[waveIndex + 1];
                    wave.points.forEach((point, index) => {
                        if (index % 8 === 0) {
                            const nextPoint = nextWave.points[index];
                            ctx.beginPath();
                            ctx.moveTo(point.x, point.y);
                            ctx.lineTo(nextPoint.x, nextPoint.y);
                            ctx.strokeStyle = `rgba(${wave.color}, 0.1)`;
                            ctx.lineWidth = 1;
                            ctx.stroke();
                        }
                    });
                }
            });

            requestAnimationFrame(animate);
        };

        animate();

        const handleMouseMove = (e: MouseEvent) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        };

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
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
