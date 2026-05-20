"use client";

import { useState, useEffect, ReactNode } from "react";
import dynamic from "next/dynamic";
import NavMenu from "@/components/ui/nav-menu";
import SmoothScrollProvider from "@/components/smooth-scroll-provider";
import AppLoader from "@/components/ui/app-loader";

const AIChatbot = dynamic(() => import("@/components/ai/chatbot"), {
    ssr: false,
});

export default function ClientLayout({ children }: { children: ReactNode }) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Only run in browser
        const hasVisited =
            typeof window !== "undefined"
                ? sessionStorage.getItem("hasVisited")
                : null;

        if (hasVisited) {
            setIsLoading(false);
            return;
        }

        const timer = setTimeout(() => {
            setIsLoading(false);
            sessionStorage.setItem("hasVisited", "true");
        }, 3000); // 3s first-visit loader

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (isLoading) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isLoading]);

    return (
        <>
            <AppLoader isLoading={isLoading} />

            <SmoothScrollProvider>
                <NavMenu />
                <main
                    className={`relative z-10 transition-opacity duration-500 ${isLoading ? "opacity-0" : "opacity-100"
                        }`}
                >
                    {children}
                </main>
                <AIChatbot />
            </SmoothScrollProvider>
        </>
    );
}