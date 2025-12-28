"use client";

import { useRef, ReactNode } from "react";
import { motion } from "framer-motion";

interface MagneticButtonProps {
    children: ReactNode;
    className?: string;
}

export default function MagneticButton({ children, className = "" }: MagneticButtonProps) {
    const buttonRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const button = buttonRef.current;
        if (!button) return;

        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        button.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
    };

    const handleMouseLeave = () => {
        const button = buttonRef.current;
        if (!button) return;
        button.style.transform = "translate(0px, 0px)";
    };

    return (
        <div
            ref={buttonRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={`transition-transform duration-300 ease-out ${className}`}
        >
            {children}
        </div>
    );
}
