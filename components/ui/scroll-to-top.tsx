"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);
    const { scrollToTop } = useSmoothScroll();

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 500) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={scrollToTop}
                    className="fixed bottom-24 left-6 z-50 w-14 h-14 bg-gradient-to-br from-neon-blue to-neon-purple rounded-full flex items-center justify-center shadow-2xl hover:shadow-neon-blue/50 transition-all"
                    aria-label="Scroll to top"
                >
                    <ArrowUp className="w-6 h-6 text-white" />
                </motion.button>
            )}
        </AnimatePresence>
    );
}
