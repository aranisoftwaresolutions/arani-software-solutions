"use client";

import dynamic from "next/dynamic";
import NavMenu from "@/components/ui/nav-menu";
import FloatingParticles from "@/components/ui/floating-particles";
import NeuralBackground from "@/components/ai/neural-background";
import SmoothScrollProvider from "@/components/smooth-scroll-provider";
import { ReactNode } from "react";

const AIChatbot = dynamic(() => import("@/components/ai/chatbot"), {
    ssr: false,
});

export default function ClientLayout({ children }: { children: ReactNode }) {
    return (
        <SmoothScrollProvider>
            {/* <NeuralBackground /> */}
            {/* <FloatingParticles /> */}
            <NavMenu />
            <main className="relative z-10">{children}</main>
            <AIChatbot />
        </SmoothScrollProvider>
    );
}
