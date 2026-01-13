"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Github, Linkedin, Twitter, ArrowRight } from "lucide-react";

export default function Footer() {
    const footerLinks = {
        Company: [
            { name: "About Us", href: "/about" },
            { name: "Careers", href: "/careers" },
            { name: "Blog", href: "/blog" },
            { name: "Press Kit", href: "/press" }
        ],
        Services: [
            { name: "UI & UX Design", href: "/services/computer-application-development" },
            { name: "App Development", href: "/services/no-code-app-web-development" },
            { name: "Full Stack Dev", href: "/services/full-stack-development" },
            { name: "Desktop Application", href: "/services/computer-application-development" },
            { name: "E-commerce Strategy", href: "/services/ecommerce-strategy" },
            { name: "CMS", href: "/services/content-management" }
        ],
        // Solutions: [
        //     { name: "Enterprise", href: "/solutions#enterprise" },
        //     { name: "Startups", href: "/solutions#startups" },
        //     { name: "E-commerce", href: "/solutions#ecommerce" },
        //     { name: "Healthcare", href: "/solutions#healthcare" }
        // ],
        Legal: [
            { name: "Privacy Policy", href: "/privacy" },
            { name: "Terms of Service", href: "/terms" },
            { name: "Copyright", href: "/copyright" },
        ],
    };

    const socialLinks = [
        { icon: Linkedin, href: "https://linkedin.com/company/arani-software", label: "LinkedIn" },
        { icon: Twitter, href: "https://twitter.com/arani-software", label: "Twitter" },
    ];

    return (
        <footer className="relative py-20 px-6 border-t border-white/5 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 brutal-grid opacity-5" />
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-blue/50 to-transparent" />

            {/* Animated Gradient Orbs */}
            <motion.div
                className="absolute top-20 left-20 w-96 h-96 bg-neon-blue/10 rounded-full blur-3xl"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.1, 0.2, 0.1],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
            <motion.div
                className="absolute bottom-20 right-20 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl"
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.1, 0.2, 0.1],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Newsletter Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="glass-card p-8 md:p-12 mb-16 relative overflow-hidden group"
                >
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    />
                    <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div>
                            <h3 className="text-2xl md:text-3xl font-bold holographic mb-3">
                                Stay Updated
                            </h3>
                            <p className="text-gray-400">
                                Get the latest insights on software development, AI, and cloud technology.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-3">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-6 py-3 bg-black/50 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-neon-blue/50 transition-colors"
                            />
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-3 bg-gradient-to-r from-neon-blue to-neon-purple rounded-xl font-semibold flex items-center justify-center space-x-2 hover:shadow-lg hover:shadow-neon-blue/50 transition-all"
                            >
                                <span>Subscribe</span>
                                <ArrowRight className="w-4 h-4" />
                            </motion.button>
                        </div>
                    </div>
                </motion.div>

                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
                    {/* Brand Column */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-2"
                    >
                        <Link href="/" className="flex items-center space-x-3 mb-6 group">
                            <motion.div
                                whileHover={{ rotate: 180, scale: 1.1 }}
                                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                                className="relative w-12 h-12 bg-gradient-to-br from-neon-blue to-neon-purple rounded-xl flex items-center justify-center shadow-lg shadow-neon-blue/30"
                            >
                                <Image
                                    src="/logo/arani.png"
                                    alt="Arani Software"
                                    width={40}
                                    height={40}
                                    className="object-contain p-1"
                                    unoptimized
                                />
                                {/* Glow Effect */}
                                <motion.div
                                    className="absolute inset-0 bg-neon-blue/30 rounded-xl blur-md -z-10"
                                    animate={{
                                        scale: [1, 1.2, 1],
                                        opacity: [0.5, 0.8, 0.5],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                />
                            </motion.div>
                            <span className="text-xl font-bold holographic group-hover:tracking-wider transition-all duration-300">
                                Arani Software Solutions
                            </span>
                        </Link>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            Engineering the future with next-generation software architecture,
                            AI automation, and cloud-native solutions.
                        </p>
                        <div className="flex space-x-3">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ y: -5, scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="w-11 h-11 glass-effect rounded-xl flex items-center justify-center hover:bg-gradient-to-br hover:from-neon-blue/20 hover:to-neon-purple/20 transition-all group relative overflow-hidden"
                                    aria-label={social.label}
                                >
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 opacity-0 group-hover:opacity-100"
                                        initial={false}
                                    />
                                    <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors relative z-10" />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Links Columns */}
                    {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: categoryIndex * 0.1 }}
                        >
                            <h3 className="font-bold text-white mb-4 flex items-center gap-2">
                                {category}
                                <motion.div
                                    className="h-px flex-1 bg-gradient-to-r from-neon-blue/50 to-transparent"
                                    initial={{ scaleX: 0 }}
                                    whileInView={{ scaleX: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: categoryIndex * 0.1 + 0.2 }}
                                />
                            </h3>
                            <ul className="space-y-3">
                                {links.map((link, linkIndex) => (
                                    <motion.li
                                        key={link.name}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: categoryIndex * 0.1 + linkIndex * 0.05 }}
                                    >
                                        <Link
                                            href={link.href}
                                            className="text-gray-400 hover:text-neon-blue transition-all inline-flex items-center group"
                                        >
                                            <motion.span
                                                className="group-hover:translate-x-1 transition-transform"
                                            >
                                                {link.name}
                                            </motion.span>
                                            <ArrowRight className="w-0 opacity-0 group-hover:w-4 group-hover:opacity-100 group-hover:ml-2 transition-all" />
                                        </Link>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                {/* Contact Info */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="glass-card p-8 mb-12 relative overflow-hidden group"
                >
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-neon-blue/5 to-neon-purple/5 opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                    <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { icon: Mail, text: "aranisoftwaresolutions@gmail.com", href: "mailto:aranisoftwaresolutions@gmail.com" },
                            { icon: Phone, text: "+1 (555) 123-4567", href: "tel:+15551234567" },
                            { icon: MapPin, text: "Bihar, India", href: "https://maps.google.com" },
                        ].map((item, index) => (
                            <motion.a
                                key={index}
                                href={item.href}
                                whileHover={{ scale: 1.02 }}
                                className="flex items-center space-x-3 p-4 rounded-xl hover:bg-white/5 transition-colors group/item"
                            >
                                <motion.div
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.6 }}
                                    className="w-12 h-12 bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 rounded-xl flex items-center justify-center group-hover/item:shadow-lg group-hover/item:shadow-neon-blue/30 transition-shadow"
                                >
                                    <item.icon className="w-5 h-5 text-neon-blue" />
                                </motion.div>
                                <span className="text-gray-300 group-hover/item:text-white transition-colors">
                                    {item.text}
                                </span>
                            </motion.a>
                        ))}
                    </div>
                </motion.div>

                {/* Bottom Bar */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5 gap-4"
                >
                    <p className="text-gray-500 text-sm text-center md:text-left">
                        © {new Date().getFullYear()} Arani Software Solutions. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        <p className="text-gray-500 text-sm">
                            Engineered with <motion.span
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 1, repeat: Infinity }}
                                className="text-neon-pink inline-block"
                            >♥</motion.span> for excellence
                        </p>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
}
