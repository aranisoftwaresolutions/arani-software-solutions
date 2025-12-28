"use client";

import { useLenis } from "lenis/react";

export function useSmoothScroll() {
    const lenis = useLenis();

    const scrollTo = (target: string | number | HTMLElement, options?: any) => {
        if (!lenis) return;

        lenis.scrollTo(target, {
            offset: 0,
            duration: 1.5,
            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            ...options,
        });
    };

    const scrollToTop = () => {
        scrollTo(0, { duration: 2 });
    };

    const scrollToSection = (id: string) => {
        scrollTo(`#${id}`, { offset: -100 });
    };

    const stopScroll = () => {
        lenis?.stop();
    };

    const startScroll = () => {
        lenis?.start();
    };

    return {
        scrollTo,
        scrollToTop,
        scrollToSection,
        stopScroll,
        startScroll,
        lenis,
    };
}
