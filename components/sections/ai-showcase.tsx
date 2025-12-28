"use client";

import { motion } from "framer-motion";
import { Brain, Cpu, Network, Zap, Eye, MessageSquare } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/utils";

const aiFeatures = [
    {
        icon: Brain,
        title: "Neural Intelligence",
        description: "Advanced neural networks that learn and adapt to your business needs",
        stats: "99.8% Accuracy",
    },
    {
        icon: Cpu,
        title: "Edge Computing",
        description: "Process data at lightning speed with distributed AI at the edge",
        stats: "<10ms Latency",
    },
    {
        icon: Network,
        title: "Federated Learning",
        description: "Train AI models across decentralized data while preserving privacy",
        stats: "100% Private",
    },
    {
        icon: Zap,
        title: "Real-time Processing",
        description: "Analyze millions of data points in real-time with AI acceleration",
        stats: "10M ops/sec",
    },
    {
        icon: Eye,
        title: "Computer Vision",
        description: "Advanced image recognition and video analysis powered by deep learning",
        stats: "98% Detection",
    },
    {
        icon: MessageSquare,
        title: "NLP & Conversational AI",
        description: "Build intelligent chatbots with natural language understanding",
        stats: "50+ Languages",
    },
];

export default function AIShowcase() {
    return (
        <section className="relative py-32 px-6 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900" />

            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="relative z-10 max-w-7xl mx-auto"
            >
                <motion.div variants={fadeInUp} className="text-center mb-20">
                    <div className="inline-flex items-center space-x-2 glass-effect px-6 py-3 rounded-full mb-6">
                        <Brain className="w-5 h-5 text-neon-purple" />
                        <span className="text-sm font-medium">AI-Powered Innovation</span>
                    </div>
                    <h2 className="text-5xl md:text-6xl font-bold mb-6">
                        Intelligence That <span className="holographic">Transforms</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Harness the power of artificial intelligence to automate, optimize, and revolutionize your operations.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {aiFeatures.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={fadeInUp}
                            whileHover={{ y: -10, scale: 1.02 }}
                            className="glass-card p-8 group relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/5 to-neon-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10">
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <feature.icon className="w-8 h-8 text-neon-blue" />
                                </div>

                                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                                <p className="text-gray-400 mb-4 leading-relaxed">{feature.description}</p>

                                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                                    <span className="text-sm text-gray-500">Performance</span>
                                    <span className="text-sm font-bold text-neon-blue">{feature.stats}</span>
                                </div>
                            </div>

                            <div className="absolute -bottom-16 -right-16 w-32 h-32 bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                        </motion.div>
                    ))}
                </div>

                {/* AI Metrics */}
                <motion.div
                    variants={fadeInUp}
                    className="mt-20 glass-card p-10"
                >
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { value: "2.5B+", label: "Parameters Trained" },
                            { value: "500ms", label: "Avg Response Time" },
                            { value: "99.9%", label: "Uptime SLA" },
                            { value: "24/7", label: "AI Monitoring" },
                        ].map((metric, index) => (
                            <div key={index} className="text-center">
                                <div className="text-4xl font-bold holographic mb-2">{metric.value}</div>
                                <div className="text-sm text-gray-400">{metric.label}</div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}
