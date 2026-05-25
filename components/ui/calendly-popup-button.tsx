"use client";

import Script from "next/script";
import { Calendar } from "lucide-react";

export default function CalendlyPopupButton({ url }: { url: string }) {
    const openCalendly = () => {
        if ((window as any).Calendly) {
            (window as any).Calendly.initPopupWidget({ url });
        }
    };

    return (
        <>
            <Script
                src="https://assets.calendly.com/assets/external/widget.js"
                strategy="lazyOnload"
            />
            <link
                href="https://assets.calendly.com/assets/external/widget.css"
                rel="stylesheet"
            />
            <button
                type="button"
                onClick={openCalendly}
                className="inline-flex items-center gap-2 rounded-lg bg-sky-500 px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-sky-400 transition-colors"
            >
                <Calendar className="w-4 h-4" />
                Book a Free Consultation
            </button>
        </>
    );
}