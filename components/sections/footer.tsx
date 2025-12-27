"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
    const footerLinks = {
        Company: ["About Us", "Careers", "Blog", "Press Kit"],
        Services: ["Mobile Apps", "Web Development", "AI Solutions", "Cloud Services"],
        Resources: ["Documentation", "API Reference", "Case Studies", "Whitepapers"],
        Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Security"],
    };

    return (
        <footer className="relative py-20 px-6 border-t border-white/5 overflow-hidden">
            <div className="absolute inset-0 brutal-grid opacity-5" />

            <div className="relative z-10 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="lg:col-span-2">
                        <Link href="/" className="flex items-center space-x-2 mb-6">
                            <div className="w-10 h-10 bg-gradient-to-br from-neon-blue to-neon-purple rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-xl">A</span>
                            </div>
                            <span className="text-xl font-bold holographic">
                                Arani Software
                            </span>
                        </Link>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            Engineering the future with next-generation software architecture,
                            AI automation, and cloud-native solutions.
                        </p>
                        <div className="flex space-x-4">
                            {[Github, Linkedin, Twitter].map((Icon, index) => (
                                <motion.a
                                    key={index}
                                    href="#"
                                    whileHover={{ y: -5, scale: 1.1 }}
                                    className="w-10 h-10 glass-effect rounded-lg flex items-center justify-center hover:bg-white/10 transition-colors"
                                >
                                    <Icon className="w-5 h-5 text-gray-400" />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Links Columns */}
                    {Object.entries(footerLinks).map(([category, links]) => (
                        <div key={category}>
                            <h3 className="font-bold text-white mb-4">{category}</h3>
                            <ul className="space-y-3">
                                {links.map((link) => (
                                    <li key={link}>
                                        <Link
                                            href="#"
                                            className="text-gray-400 hover:text-neon-blue transition-colors inline-block hover:translate-x-1 transition-transform"
                                        >
                                            {link}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Contact Info */}
                <div className="glass-card p-8 mb-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { icon: Mail, text: "contact@arani.software" },
                            { icon: Phone, text: "+1 (555) 123-4567" },
                            { icon: MapPin, text: "Silicon Valley, CA" },
                        ].map((item, index) => (
                            <div key={index} className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 rounded-lg flex items-center justify-center">
                                    <item.icon className="w-5 h-5 text-neon-blue" />
                                </div>
                                <span className="text-gray-300">{item.text}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5">
                    <p className="text-gray-500 text-sm">
                        © 2025 Arani Software Solutions. All rights reserved.
                    </p>
                    <p className="text-gray-500 text-sm mt-4 md:mt-0">
                        Engineered with <span className="text-neon-pink">♥</span> for excellence
                    </p>
                </div>
            </div>
        </footer>
    );
}
