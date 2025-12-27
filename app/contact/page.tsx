"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/utils";
import Footer from "@/components/sections/footer";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
    return (
        <>
            <section className="relative min-h-screen pt-32 pb-20 px-6 overflow-hidden">
                <div className="absolute inset-0 brutal-grid opacity-10" />

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="show"
                    className="relative z-10 max-w-6xl mx-auto"
                >
                    <motion.div variants={fadeInUp} className="text-center mb-16">
                        <h1 className="text-6xl md:text-7xl font-bold mb-6">
                            Let's Build <span className="holographic">Together</span>
                        </h1>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            Transform your vision into reality with our expert team.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <motion.div variants={fadeInUp} className="glass-card p-8">
                            <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
                            <form className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium mb-2">Name</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-neon-blue focus:outline-none transition-colors"
                                        placeholder="Your name"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2">Email</label>
                                    <input
                                        type="email"
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-neon-blue focus:outline-none transition-colors"
                                        placeholder="your@email.com"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2">Message</label>
                                    <textarea
                                        rows={5}
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-neon-blue focus:outline-none transition-colors resize-none"
                                        placeholder="Tell us about your project..."
                                    />
                                </div>
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full px-6 py-4 bg-gradient-to-r from-neon-blue to-neon-purple rounded-lg font-semibold flex items-center justify-center space-x-2"
                                >
                                    <span>Send Message</span>
                                    <Send className="w-5 h-5" />
                                </motion.button>
                            </form>
                        </motion.div>

                        {/* Contact Info */}
                        <motion.div variants={fadeInUp} className="space-y-6">
                            {[
                                {
                                    icon: Mail,
                                    title: "Email",
                                    content: "contact@arani.software",
                                    link: "mailto:contact@arani.software",
                                },
                                {
                                    icon: Phone,
                                    title: "Phone",
                                    content: "+1 (555) 123-4567",
                                    link: "tel:+15551234567",
                                },
                                {
                                    icon: MapPin,
                                    title: "Office",
                                    content: "Silicon Valley, California, USA",
                                    link: "#",
                                },
                            ].map((item, index) => (
                                <div key={index} className="glass-card p-6 flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <item.icon className="w-6 h-6 text-neon-blue" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold mb-1">{item.title}</h3>
                                        <a
                                            href={item.link}
                                            className="text-gray-400 hover:text-neon-blue transition-colors"
                                        >
                                            {item.content}
                                        </a>
                                    </div>
                                </div>
                            ))}

                            <div className="glass-card p-8">
                                <h3 className="text-xl font-bold mb-4">Business Hours</h3>
                                <div className="space-y-3 text-gray-400">
                                    <div className="flex justify-between">
                                        <span>Monday - Friday</span>
                                        <span className="text-white">9:00 AM - 6:00 PM</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Saturday</span>
                                        <span className="text-white">10:00 AM - 4:00 PM</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Sunday</span>
                                        <span className="text-white">Closed</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </section>
            <Footer />
        </>
    );
}
