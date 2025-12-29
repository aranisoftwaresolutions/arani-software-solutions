"use client";

import { useEffect, useRef } from "react";

export default function LiquidMorphBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        interface Blob {
            x: number;
            y: number;
            radius: number;
            vx: number;
            vy: number;
            color: { r: number; g: number; b: number };
        }

        const blobs: Blob[] = [];
        const numBlobs = 5;

        // Create liquid blobs
        const colors = [
            { r: 0, g: 229, b: 255 },
            { r: 168, g: 85, b: 247 },
            { r: 16, g: 185, b: 129 },
            { r: 236, g: 72, b: 153 },
            { r: 0, g: 255, b: 255 },
        ];

        for (let i = 0; i < numBlobs; i++) {
            blobs.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                radius: Math.random() * 150 + 100,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                color: colors[i],
            });
        }

        let time = 0;

        const animate = () => {
            time += 0.005;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Update and draw blobs
            blobs.forEach((blob, index) => {
                // Move blobs
                blob.x += blob.vx;
                blob.y += blob.vy;

                // Organic pulsing
                const pulseRadius = blob.radius + Math.sin(time * 2 + index) * 30;

                // Bounce off edges
                if (blob.x < -pulseRadius || blob.x > canvas.width + pulseRadius) blob.vx *= -1;
                if (blob.y < -pulseRadius || blob.y > canvas.height + pulseRadius) blob.vy *= -1;

                // Draw blob with radial gradient
                const gradient = ctx.createRadialGradient(
                    blob.x,
                    blob.y,
                    0,
                    blob.x,
                    blob.y,
                    pulseRadius
                );

                gradient.addColorStop(0, `rgba(${blob.color.r}, ${blob.color.g}, ${blob.color.b}, 0.4)`);
                gradient.addColorStop(0.5, `rgba(${blob.color.r}, ${blob.color.g}, ${blob.color.b}, 0.2)`);
                gradient.addColorStop(1, `rgba(${blob.color.r}, ${blob.color.g}, ${blob.color.b}, 0)`);

                ctx.fillStyle = gradient;
                ctx.beginPath();
                ctx.arc(blob.x, blob.y, pulseRadius, 0, Math.PI * 2);
                ctx.fill();

                // Draw metaball connections
                blobs.slice(index + 1).forEach((otherBlob) => {
                    const dx = blob.x - otherBlob.x;
                    const dy = blob.y - otherBlob.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 400) {
                        ctx.beginPath();
                        ctx.moveTo(blob.x, blob.y);
                        ctx.lineTo(otherBlob.x, otherBlob.y);
                        const opacity = (1 - distance / 400) * 0.1;
                        ctx.strokeStyle = `rgba(${blob.color.r}, ${blob.color.g}, ${blob.color.b}, ${opacity})`;
                        ctx.lineWidth = 3;
                        ctx.stroke();
                    }
                });
            });

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
            style={{ filter: "blur(40px)", opacity: 0.6 }}
        />
    );
}
