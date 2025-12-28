"use client";

import { useEffect, useRef } from "react";

export default function NeuralBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        interface Node {
            x: number;
            y: number;
            vx: number;
            vy: number;
            radius: number;
        }

        const nodes: Node[] = [];
        const nodeCount = 50;

        for (let i = 0; i < nodeCount; i++) {
            nodes.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.3,
                vy: (Math.random() - 0.5) * 0.3,
                radius: Math.random() * 3 + 2,
            });
        }

        function animate() {
            if (!ctx || !canvas) return;

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            nodes.forEach((node, i) => {
                node.x += node.vx;
                node.y += node.vy;

                if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
                if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

                // Draw node
                const gradient = ctx.createRadialGradient(
                    node.x,
                    node.y,
                    0,
                    node.x,
                    node.y,
                    node.radius
                );
                gradient.addColorStop(0, "rgba(0, 212, 255, 0.8)");
                gradient.addColorStop(1, "rgba(0, 212, 255, 0)");

                ctx.beginPath();
                ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
                ctx.fillStyle = gradient;
                ctx.fill();

                // Draw connections
                nodes.slice(i + 1).forEach((node2) => {
                    const dx = node.x - node2.x;
                    const dy = node.y - node2.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 200) {
                        const opacity = (1 - distance / 200) * 0.5;
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(0, 212, 255, ${opacity})`;
                        ctx.lineWidth = 1;
                        ctx.moveTo(node.x, node.y);
                        ctx.lineTo(node2.x, node2.y);
                        ctx.stroke();

                        // Draw data pulse
                        const pulsePosition = (Date.now() % 2000) / 2000;
                        const pulseX = node.x + (node2.x - node.x) * pulsePosition;
                        const pulseY = node.y + (node2.y - node.y) * pulsePosition;

                        ctx.beginPath();
                        ctx.arc(pulseX, pulseY, 2, 0, Math.PI * 2);
                        ctx.fillStyle = `rgba(184, 69, 255, ${opacity})`;
                        ctx.fill();
                    }
                });
            });

            requestAnimationFrame(animate);
        }

        animate();

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none opacity-30 z-0"
        />
    );
}
