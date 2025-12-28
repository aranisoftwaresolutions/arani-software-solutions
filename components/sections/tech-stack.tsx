"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/utils";

const techStack = {
    "Frontend": ["React", "Next.js", "Javascript", "TypeScript", "Tailwind CSS", "Framer Motion", "Redux-Toolkit"],
    "Backend": ["Node.js", "Express", "GraphQL", "REST APIs", "WebSockets"],
    "Mobile": ["React Native", "Kotlin", "Expo"],
    // "AI/ML": ["TensorFlow", "PyTorch", "OpenAI", "LangChain", "Hugging Face"],
    "Cloud": ["AWS"],
    "Database": ["MongoDB", "PostgreSQL", "Redis", "Firebase",],
};

export default function TechStack() {
    return (
        <section className="relative py-32 px-6 overflow-hidden">
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="max-w-7xl mx-auto"
            >
                {/* Section Header */}
                <motion.div variants={fadeInUp} className="text-center mb-20">
                    <h2 className="text-5xl md:text-6xl font-bold mb-6">
                        Technology <span className="holographic">Arsenal</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Leveraging the most advanced tools and frameworks to build uncompromising solutions.
                    </p>
                </motion.div>

                {/* Tech Stack Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {Object.entries(techStack).map(([category, technologies], catIndex) => (
                        <motion.div
                            key={category}
                            variants={fadeInUp}
                            className="glass-card p-8 relative group"
                        >
                            {/* Category Title */}
                            <div className="flex items-center space-x-3 mb-6">
                                <div className="w-2 h-2 rounded-full bg-neon-blue animate-pulse" />
                                <h3 className="text-2xl font-bold neon-text">{category}</h3>
                            </div>

                            {/* Technologies */}
                            <div className="space-y-3">
                                {technologies.map((tech, techIndex) => (
                                    <motion.div
                                        key={tech}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: techIndex * 0.1 }}
                                        whileHover={{ x: 10, scale: 1.05 }}
                                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/5 transition-all cursor-pointer group/item"
                                    >
                                        <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple" />
                                        <span className="text-gray-300 group-hover/item:text-white transition-colors">
                                            {tech}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Decorative Corner */}
                            <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-neon-blue/30 rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
