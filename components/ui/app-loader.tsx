"use client";

import Image from "next/image";

export default function AppLoader({ isLoading }: { isLoading: boolean }) {
    if (!isLoading) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950">
            <div className="flex flex-col items-center gap-4">
                {/* Logo + rotating ring */}
                <div className="relative">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-sky-500/40 bg-sky-500/10 overflow-hidden">
                        <Image
                            src="/logo/arani.png"
                            alt="Arani Software Solutions logo"
                            width={40}
                            height={40}
                            className="object-contain"
                            priority
                        />
                    </div>
                    <div className="pointer-events-none absolute inset-0 -m-2 flex items-center justify-center">
                        <div className="h-16 w-16 rounded-full border border-sky-500/10 border-t-sky-400/70 animate-loader-spin" />
                    </div>
                </div>

                {/* Brand name */}
                <p className="text-sm font-medium text-slate-200">
                    Arani Software Solutions
                </p>

                {/* Progress bar */}
                <div className="mt-1 h-1 w-40 overflow-hidden rounded-full bg-slate-800">
                    <div className="h-full w-1/2 bg-sky-500 animate-loader-slide" />
                </div>

                {/* Animated dots */}
                <div className="mt-2 flex items-center gap-1">
                    <span className="mr-2 text-xs text-slate-400">
                        Preparing your experience
                    </span>
                    <span className="flex items-center gap-1">
                        <span className="h-1.5 w-1.5 rounded-full bg-sky-400 animate-loader-dot" />
                        <span className="h-1.5 w-1.5 rounded-full bg-sky-400 animate-loader-dot [animation-delay:0.15s]" />
                        <span className="h-1.5 w-1.5 rounded-full bg-sky-400 animate-loader-dot [animation-delay:0.3s]" />
                    </span>
                </div>
            </div>
        </div>
    );
}