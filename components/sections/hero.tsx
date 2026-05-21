"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

const stats = [
    { label: "Projects Delivered" },
    { label: "Enterprise Clients" },
    { label: "Countries Served" },
    { label: "Success Rate" },
];

export default function Hero() {
    return (
        <section className="bg-slate-950 text-white">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">

                {/* Badge */}
                <div className="mb-6">
                    <span className="inline-block rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-xs font-medium tracking-wide text-slate-300 uppercase">
                        Next-Gen Software Architecture
                    </span>
                </div>

                {/* Headline + Subheadline + CTAs */}
                <div className="max-w-3xl space-y-6 mb-16">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
                        Building the{" "}
                        <span className="text-sky-400">Future of Tech</span>
                    </h1>

                    <p className="text-base sm:text-lg text-slate-400 max-w-xl leading-relaxed">
                        Enterprise-grade mobile, web, and AI solutions powered by
                        cutting-edge architecture, cloud infrastructure, and intelligent
                        automation.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3 pt-2">
                        <Link href="/services">
                            <button className="inline-flex items-center justify-center gap-2 rounded-md bg-sky-500 px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-sky-400 transition-colors duration-150">
                                Explore Our Services
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        </Link>
                        {/* <button className="inline-flex items-center justify-center rounded-md border border-slate-700 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800 transition-colors duration-150">
                            More
                        </button> */}
                    </div>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 border-t border-slate-800 pt-10">
                    {stats.map((stat) => (
                        <div key={stat.label} className="space-y-1">
                            <div className="text-2xl sm:text-3xl font-bold text-sky-400">
                               
                            </div>
                            <div className="text-xs sm:text-sm text-slate-400">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}