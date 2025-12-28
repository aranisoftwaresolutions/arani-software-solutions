"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/utils";

const testimonials = [
    {
        name: "Sarah Chen",
        role: "CTO, TechFlow Inc",
        company: "Fortune 500 Company",
        image: "https://i.pravatar.cc/150?img=1",
        rating: 5,
        text: "Arani transformed our infrastructure with their cloud-native architecture. The AI automation reduced our operational costs by 60%.",
    },
    {
        name: "Michael Rodriguez",
        role: "Head of Engineering",
        company: "FinanceAI Solutions",
        image: "https://i.pravatar.cc/150?img=3",
        rating: 5,
        text: "The mobile app they built handles 2M+ daily users flawlessly. Their DevOps expertise is unmatched in the industry.",
    },
    {
        name: "Emily Watson",
        role: "Product Director",
        company: "HealthTech Global",
        image: "https://i.pravatar.cc/150?img=5",
        rating: 5,
        text: "Working with Arani felt like having a world-class engineering team. Their AI solutions are truly next-generation.",
    },
];

export default function Testimonials() {
    return (
        <section className="relative py-32 px-6 overflow-hidden">
            <div className="absolute inset-0 brutal-grid opacity-5" />

            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="relative z-10 max-w-7xl mx-auto"
            >
                <motion.div variants={fadeInUp} className="text-center mb-16">
                    <h2 className="text-5xl md:text-6xl font-bold mb-6">
                        Trusted by <span className="holographic">Industry Leaders</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        See what our clients say about transforming their business with Arani.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            variants={fadeInUp}
                            whileHover={{ y: -10 }}
                            className="glass-card p-8 relative"
                        >
                            <Quote className="absolute top-6 right-6 w-12 h-12 text-neon-blue/20" />

                            <div className="flex items-center space-x-4 mb-6">
                                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-neon-blue to-neon-purple p-0.5">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-full h-full rounded-full"
                                    />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white">{testimonial.name}</h4>
                                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                                    <p className="text-xs text-neon-blue">{testimonial.company}</p>
                                </div>
                            </div>

                            <div className="flex space-x-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>

                            <p className="text-gray-300 leading-relaxed">{testimonial.text}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
