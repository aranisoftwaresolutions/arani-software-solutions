"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import NavMenu from "@/components/ui/nav-menu";
import SmoothScrollProvider from "@/components/smooth-scroll-provider";
import MagneticLoader from "@/components/ui/magnetic-loader";
import { ReactNode } from "react";

const AIChatbot = dynamic(() => import("@/components/ai/chatbot"), {
    ssr: false,
});

export default function ClientLayout({ children }: { children: ReactNode }) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        console.log("🔍 ClientLayout mounted, isLoading:", isLoading);
        
        // TEMPORARILY COMMENT OUT sessionStorage to test loader
        // const hasVisited = sessionStorage.getItem("hasVisited");
        // console.log("🔍 hasVisited:", hasVisited);
        
        // if (hasVisited) {
        //     console.log("✅ Already visited, skipping loader");
        //     setIsLoading(false);
        //     return;
        // }

        console.log("⏳ Starting loader timer...");
        const timer = setTimeout(() => {
            console.log("✅ Loader complete!");
            setIsLoading(false);
            sessionStorage.setItem("hasVisited", "true");
        }, 3000);

        return () => {
            console.log("🧹 Cleanup timer");
            clearTimeout(timer);
        };
    }, []);

    useEffect(() => {
        console.log("🔄 isLoading changed to:", isLoading);
        if (isLoading) {
            document.body.style.overflow = "hidden";
            console.log("🚫 Body scroll disabled");
        } else {
            document.body.style.overflow = "unset";
            console.log("✅ Body scroll enabled");
        }

        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isLoading]);

    console.log("🎨 Rendering ClientLayout, isLoading:", isLoading);

    return (
        <>
            {/* Magnetic Loader */}
            {/* <MagneticLoader 
                isLoading={isLoading} 
                onComplete={() => {
                    console.log("🚀 Arani Software Solutions loaded!");
                }} 
            /> */}
            
            {/* Existing Layout with Smooth Scroll */}
            <SmoothScrollProvider>
                <NavMenu />
                <main className={`relative z-10 transition-opacity duration-500 ${
                        isLoading ? "opacity-0" : "opacity-100"
                    }`}
                >
                   {children}
                </main>
                <AIChatbot />
            </SmoothScrollProvider>
        </>
    );
}
