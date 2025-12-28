import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Variants } from "framer-motion";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
};

export const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 60 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring" as const,
            duration: 1.2,
            bounce: 0.3,
        },
    },
};

export const scaleIn: Variants = {
    hidden: { scale: 0, opacity: 0 },
    show: {
        scale: 1,
        opacity: 1,
        transition: {
            type: "spring" as const,
            duration: 0.8,
            bounce: 0.4,
        },
    },
};

export const slideIn = (direction: "left" | "right" | "up" | "down"): Variants => ({
    hidden: {
        x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
        y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
        opacity: 0,
    },
    show: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
            type: "spring" as const,
            duration: 1.2,
            bounce: 0.3,
        },
    },
});
