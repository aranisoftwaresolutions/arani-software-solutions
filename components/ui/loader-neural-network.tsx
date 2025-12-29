"use client";

import { motion } from "framer-motion";

interface NeuralNetworkProps {
    progress: number;
}

export default function NeuralNetwork({ progress }: NeuralNetworkProps) {
    const nodes = [
        { x: 20, y: 30 },
        { x: 40, y: 20 },
        { x: 60, y: 40 },
        { x: 80, y: 25 },
        { x: 30, y: 60 },
        { x: 50, y: 70 },
        { x: 70, y: 65 },
    ];

    const connections = [
        [0, 1],
        [1, 2],
        [2, 3],
        [0, 4],
        [4, 5],
        [5, 6],
        [2, 5],
        [1, 6],
    ];

    return (
        <svg className="absolute inset-0 w-full h-full opacity-30">
            {/* Connections */}
            {connections.map(([start, end], index) => (
                <motion.line
                    key={index}
                    x1={`${nodes[start].x}%`}
                    y1={`${nodes[start].y}%`}
                    x2={`${nodes[end].x}%`}
                    y2={`${nodes[end].y}%`}
                    stroke="url(#neuralGradient)"
                    strokeWidth="2"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{
                        pathLength: progress / 100,
                        opacity: [0.3, 0.8, 0.3],
                    }}
                    transition={{
                        pathLength: { duration: 2, delay: index * 0.1 },
                        opacity: {
                            duration: 2,
                            repeat: Infinity,
                            delay: index * 0.2,
                        },
                    }}
                />
            ))}

            {/* Nodes */}
            {nodes.map((node, index) => (
                <motion.circle
                    key={index}
                    cx={`${node.x}%`}
                    cy={`${node.y}%`}
                    r="4"
                    fill="#00e5ff"
                    initial={{ scale: 0 }}
                    animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.6, 1, 0.6],
                    }}
                    transition={{
                        scale: {
                            duration: 2,
                            repeat: Infinity,
                            delay: index * 0.2,
                        },
                        opacity: {
                            duration: 2,
                            repeat: Infinity,
                            delay: index * 0.2,
                        },
                    }}
                    style={{
                        filter: "drop-shadow(0 0 8px rgba(0, 229, 255, 0.8))",
                    }}
                />
            ))}

            <defs>
                <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00e5ff" />
                    <stop offset="50%" stopColor="#a855f7" />
                    <stop offset="100%" stopColor="#10b981" />
                </linearGradient>
            </defs>
        </svg>
    );
}
