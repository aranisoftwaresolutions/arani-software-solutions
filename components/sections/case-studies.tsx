"use client";

import { ArrowRight, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface CaseStudy {
    id: string;
    title: string;
    client?: string;
    category: string;
    results: string;
    description: string;
    tech: string[];
    gradient: string;
    image: string;
    liveUrl: string;
    detailsUrl?: string;
}

const caseStudies: CaseStudy[] = [
    {
        id: "ngo-web-app",
        title: "NGO Web App",
        category: "Community Development",
        results: "Dheodha Vikas Samiti",
        description:
            "Community development organization website built to showcase village development initiatives and social welfare programs.",
        tech: ["React.js", "Next.js", "Vercel", "Tailwind", "AWS"],
        gradient: "from-neon-green to-neon-cyan",
        image:
            "https://res.cloudinary.com/dusalynec/image/upload/v1763976347/Screenshot_2025-11-24_144533_lgo4ge.png",
        liveUrl: "https://www.dheodhavikassamiti.org/",
    },
    {
        id: "agrospace-solution",
        title: "AgroSpace Solution",
        category: "AgTech + AI",
        results: "AI-Powered Analytics",
        description:
            "AI-powered ag-analytics dashboard empowering farmers with data-driven insights for smarter agricultural decisions.",
        tech: ["React.js", "Express.js", "Node.js", "MongoDB", "AWS"],
        gradient: "from-neon-green to-neon-cyan",
        image: "/projects/project1.png",
        liveUrl: "https://my.agrospace.io/",
    },
    {
        id: "empowering-marine",
        title: "Empowering Marine",
        category: "Maritime Tech",
        results: "Operations Portal",
        description:
            "Maritime operations portal streamlining vessel management, crew coordination, and maritime logistics operations.",
        tech: ["React.js", "Express.js", "Node.js", "MongoDB"],
        gradient: "from-neon-blue to-neon-cyan",
        image: "/projects/project2.png",
        liveUrl: "https://oceanq.eu/",
    },
];

export default function CaseStudies() {
    return (
        <section className="bg-slate-950 py-20 sm:py-28 px-4 sm:px-6">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-12 sm:mb-16 text-center">
                    <span className="inline-block rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-xs font-medium tracking-wide text-slate-300 uppercase mb-4">
                        Our Projects
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                        Featured <span className="text-sky-400">Projects</span>
                    </h2>
                    <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
                        Innovative solutions delivered with modern web technologies and
                        practical, real-world impact.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
                    {caseStudies.map((study) => (
                        <article
                            key={study.id}
                            className="flex flex-col rounded-xl border border-slate-800 bg-slate-900 overflow-hidden"
                        >
                            {/* Image */}
                            <div className="relative h-56 sm:h-64">
                                <Image
                                    src={study.image}
                                    alt={study.title}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-5 sm:p-6 flex flex-col flex-1">
                                <p className="text-xs font-medium text-slate-400 uppercase tracking-wide mb-2">
                                    {study.category}
                                </p>

                                <h3 className="text-lg sm:text-xl font-semibold text-white mb-1">
                                    {study.title}
                                </h3>

                                <p className="text-xs text-slate-500 mb-3">
                                    Result:{" "}
                                    <span className="font-medium text-slate-200">
                                        {study.results}
                                    </span>
                                </p>

                                <p className="text-sm text-slate-400 leading-relaxed mb-4">
                                    {study.description}
                                </p>

                                {/* Tech stack */}
                                <div className="mb-4">
                                    <p className="text-xs text-slate-500 mb-2 font-medium">
                                        Tech stack
                                    </p>
                                    <div className="flex flex-wrap gap-1.5">
                                        {study.tech.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-2.5 py-1 rounded-md bg-slate-800 text-xs text-slate-200"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Actions */}
                                <div className="mt-auto flex items-center gap-3 pt-4 border-t border-slate-800">
                                    <a
                                        href={study.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center gap-2 rounded-md bg-sky-500 px-4 py-2 text-xs font-semibold text-slate-950 hover:bg-sky-400 transition-colors"
                                    >
                                        Live Demo
                                        <ExternalLink className="w-3.5 h-3.5" />
                                    </a>

                                    <Link
                                        href={`/projects/${study.id}`}
                                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-white transition-colors"
                                    >
                                        View details
                                        <ArrowRight className="w-3.5 h-3.5" />
                                    </Link>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* View all */}
                <div className="mt-14 sm:mt-16 text-center">
                    <Link href="/projects">
                        <button className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-100 hover:bg-slate-800 transition-colors">
                            View all projects
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
}