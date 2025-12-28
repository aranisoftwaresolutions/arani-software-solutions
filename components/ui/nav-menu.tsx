"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";

export default function NavMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const { scrollToSection } = useSmoothScroll();

    const navItems = [
        { name: "Home", href: "/" },
        { name: "Services", href: "/services" },
        { name: "Solutions", href: "/solutions" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
    ];

    const handleSmoothScroll = (e: React.MouseEvent, sectionId: string) => {
        e.preventDefault();
        scrollToSection(sectionId);
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
        >
            <div className="max-w-7xl mx-auto">
                <div className="glass-effect rounded-2xl px-6 py-4 flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2 group">
                        <motion.div
                            whileHover={{ rotate: 180 }}
                            transition={{ duration: 0.6 }}
                            className="w-10 h-10 bg-gradient-to-br from-neon-blue to-neon-purple rounded-lg flex items-center justify-center"
                        >
                            <span className="text-white font-bold text-xl">A</span>
                        </motion.div>
                        <span className="text-xl font-bold holographic">
                            Arani Software
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-1">
                        {navItems.map((item) => (
                            <Link key={item.name} href={item.href}>
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-5 py-2 rounded-lg hover:bg-white/5 transition-colors relative group"
                                >
                                    <span className="text-gray-300 group-hover:text-white transition-colors">
                                        {item.name}
                                    </span>
                                    <motion.div
                                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-neon-blue to-neon-purple opacity-0 group-hover:opacity-100 transition-opacity"
                                        layoutId="navbar-indicator"
                                    />
                                </motion.div>
                            </Link>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="hidden md:block px-6 py-2.5 bg-gradient-to-r from-neon-blue to-neon-purple rounded-lg font-medium hover:shadow-lg hover:shadow-neon-blue/50 transition-all"
                    >
                        Get Started
                    </motion.button>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden text-white"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden mt-2 glass-effect rounded-2xl overflow-hidden"
                    >
                        <div className="flex flex-col p-4 space-y-2">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className="px-4 py-3 rounded-lg hover:bg-white/5 transition-colors text-gray-300 hover:text-white"
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <button className="px-4 py-3 bg-gradient-to-r from-neon-blue to-neon-purple rounded-lg font-medium mt-2">
                                Get Started
                            </button>
                        </div>
                    </motion.div>
                )}
            </div>
        </motion.nav>
    );
}
