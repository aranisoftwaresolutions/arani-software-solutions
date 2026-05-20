"use client";

import Image from "next/image";
import Footer from "@/components/sections/footer";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
    ArrowLeft,
    ExternalLink,
    Github,
    CheckCircle2,
    Users,
    Clock,
    Calendar,
    Award,
    ChevronLeft,
    ChevronRight,
    Target,
    Zap,
    TrendingUp,
} from "lucide-react";
import { allProjects } from "@/lib/projectsData";
import { use, useState } from "react";

export default function ProjectDetailsPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = use(params);

    const project = allProjects.find((p) => p.id === id);
    const [activeImage, setActiveImage] = useState(0);

    if (!project) {
        notFound();
    }

    const relatedProjects = allProjects
        .filter((p) => p.id !== project.id && p.category === project.category)
        .slice(0, 3);

    const nextImage = () => {
        setActiveImage((prev) => (prev + 1) % project.images.length);
    };

    const prevImage = () => {
        setActiveImage((prev) => (prev - 1 + project.images.length) % project.images.length);
    };

    return (
        <>
            <div className="min-h-screen bg-slate-950 text-white">
                <section className="border-b border-slate-800 bg-slate-950">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-28 sm:pt-32 pb-14">
                        <Link
                            href="/projects"
                            className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-sky-400 transition-colors"
                        >
                            <ArrowLeft className="h-4 w-4" />
                            <span>Back to Projects</span>
                        </Link>

                        <div className="mt-8 grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
                            <div>
                                <div className="inline-flex items-center rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-xs font-medium uppercase tracking-[0.12em] text-sky-400">
                                    {project.category}
                                </div>

                                <h1 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                                    {project.title}
                                </h1>

                                <p className="mt-5 text-base sm:text-lg leading-8 text-slate-300 max-w-2xl">
                                    {project.longDescription}
                                </p>

                                <div className="mt-8 flex flex-wrap gap-3">
                                    {project.liveUrl && (
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 rounded-lg bg-sky-500 px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-sky-400 transition-colors"
                                        >
                                            <span>View Live Project</span>
                                            <ExternalLink className="h-4 w-4" />
                                        </a>
                                    )}

                                    {project.githubUrl && (
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900 px-5 py-3 text-sm font-semibold text-slate-100 hover:border-slate-500 hover:bg-slate-800 transition-colors"
                                        >
                                            <Github className="h-4 w-4" />
                                            <span>View Code</span>
                                        </a>
                                    )}
                                </div>


                            </div>

                            <div>
                                <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900">
                                    <div className="relative h-[280px] sm:h-[360px] lg:h-[460px]">
                                        <Image
                                            src={project.images[activeImage]}
                                            alt={project.title}
                                            fill
                                            priority
                                            className="object-cover object-top"
                                        />

                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/10 to-transparent" />

                                        {project.images.length > 1 && (
                                            <>
                                                <button
                                                    type="button"
                                                    onClick={prevImage}
                                                    className="absolute left-3 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-950/80 text-slate-100 hover:bg-slate-900 transition-colors"
                                                    aria-label="Previous image"
                                                >
                                                    <ChevronLeft className="h-5 w-5" />
                                                </button>

                                                <button
                                                    type="button"
                                                    onClick={nextImage}
                                                    className="absolute right-3 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-950/80 text-slate-100 hover:bg-slate-900 transition-colors"
                                                    aria-label="Next image"
                                                >
                                                    <ChevronRight className="h-5 w-5" />
                                                </button>
                                            </>
                                        )}

                                        <div className="absolute bottom-3 right-3 rounded-full border border-slate-700 bg-slate-950/80 px-3 py-1 text-xs font-medium text-slate-200">
                                            {activeImage + 1} / {project.images.length}
                                        </div>
                                    </div>
                                </div>

                                {project.images.length > 1 && (
                                    <div className="mt-4 flex gap-3 overflow-x-auto pb-1">
                                        {project.images.map((img, index) => (
                                            <button
                                                key={index}
                                                type="button"
                                                onClick={() => setActiveImage(index)}
                                                className={`relative h-16 w-16 sm:h-20 sm:w-20 flex-shrink-0 overflow-hidden rounded-xl border ${activeImage === index
                                                    ? "border-sky-400"
                                                    : "border-slate-700 hover:border-slate-500"
                                                    } transition-colors`}
                                                aria-label={`View image ${index + 1}`}
                                            >
                                                <Image
                                                    src={img}
                                                    alt={`${project.title} image ${index + 1}`}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </section>

                <section className="px-4 sm:px-6 py-14 sm:py-16">
                    <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-6">
                        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
                            <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-800 text-sky-400">
                                <Target className="h-5 w-5" />
                            </div>
                            <h2 className="mt-4 text-xl font-semibold text-white">The Challenge</h2>
                            <p className="mt-3 text-sm leading-7 text-slate-300">{project.challenge}</p>
                        </div>

                        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
                            <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-800 text-sky-400">
                                <Zap className="h-5 w-5" />
                            </div>
                            <h2 className="mt-4 text-xl font-semibold text-white">Our Solution</h2>
                            <p className="mt-3 text-sm leading-7 text-slate-300">{project.solution}</p>
                        </div>

                        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
                            <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-800 text-sky-400">
                                <TrendingUp className="h-5 w-5" />
                            </div>
                            <h2 className="mt-4 text-xl font-semibold text-white">The Impact</h2>
                            <p className="mt-3 text-sm leading-7 text-slate-300">
                                {project.impact.join(" • ")}
                            </p>
                        </div>
                    </div>
                </section>

                <section className="border-t border-slate-800 px-4 sm:px-6 py-14 sm:py-16">
                    <div className="max-w-6xl mx-auto">
                        <div className="max-w-2xl">
                            <h2 className="text-2xl sm:text-3xl font-bold text-white">Key Results</h2>
                            <p className="mt-3 text-sm sm:text-base text-slate-400">
                                Measurable outcomes delivered through this project.
                            </p>
                        </div>

                        <div className="mt-8 grid md:grid-cols-2 gap-4">
                            {project.impact.map((result, index) => (
                                <div
                                    key={index}
                                    className="flex items-start gap-3 rounded-2xl border border-slate-800 bg-slate-900 p-5"
                                >
                                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-400" />
                                    <p className="text-sm sm:text-base leading-7 text-slate-200">{result}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="border-t border-slate-800 px-4 sm:px-6 py-14 sm:py-16">
                    <div className="max-w-6xl mx-auto">
                        <div className="max-w-2xl">
                            <h2 className="text-2xl sm:text-3xl font-bold text-white">
                                Technologies Used
                            </h2>
                            <p className="mt-3 text-sm sm:text-base text-slate-400">
                                Core tools and frameworks used in this build.
                            </p>
                        </div>

                        <div className="mt-8 flex flex-wrap gap-3">
                            {project.tech.map((tech, index) => (
                                <span
                                    key={index}
                                    className="inline-flex items-center rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm font-medium text-slate-200"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </section>

                {relatedProjects.length > 0 && (
                    <section className="border-t border-slate-800 px-4 sm:px-6 py-14 sm:py-16">
                        <div className="max-w-6xl mx-auto">
                            <div className="max-w-2xl">
                                <h2 className="text-2xl sm:text-3xl font-bold text-white">
                                    Related Projects
                                </h2>
                                <p className="mt-3 text-sm sm:text-base text-slate-400">
                                    More work in {project.category}
                                </p>
                            </div>

                            <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {relatedProjects.map((relatedProject) => (
                                    <Link
                                        key={relatedProject.id}
                                        href={`/projects/${relatedProject.id}`}
                                        className="group overflow-hidden rounded-3xl border border-slate-800 bg-slate-900"
                                    >
                                        <div className="relative h-48">
                                            <Image
                                                src={relatedProject.image}
                                                alt={relatedProject.title}
                                                fill
                                                className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />
                                        </div>

                                        <div className="p-5">
                                            <p className="text-xs uppercase tracking-wide text-sky-400">
                                                {relatedProject.category}
                                            </p>
                                            <h3 className="mt-2 text-lg font-semibold text-white group-hover:text-sky-400 transition-colors">
                                                {relatedProject.title}
                                            </h3>
                                            <p className="mt-2 text-sm leading-6 text-slate-400 line-clamp-2">
                                                {relatedProject.description}
                                            </p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                <section className="border-t border-slate-800 px-4 sm:px-6 py-16 sm:py-20">
                    <div className="max-w-4xl mx-auto">
                        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 sm:p-10 text-center">
                            <div className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-950 px-3 py-1 text-xs font-medium uppercase tracking-wide text-sky-400">
                                <Award className="h-4 w-4" />
                                <span>Ready to Start?</span>
                            </div>

                            <h2 className="mt-5 text-2xl sm:text-3xl font-bold text-white">
                                Like What You See?
                            </h2>

                            <p className="mt-4 text-sm sm:text-base leading-7 text-slate-300 max-w-2xl mx-auto">
                                Let&apos;s create something thoughtful, fast, and effective for your
                                business.
                            </p>

                            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center justify-center rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-slate-950 hover:bg-sky-400 transition-colors"
                                >
                                    Start Your Project
                                </Link>

                                <Link
                                    href="/projects"
                                    className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-950 px-6 py-3 text-sm font-semibold text-slate-100 hover:bg-slate-800 transition-colors"
                                >
                                    View More Projects
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <Footer />
        </>
    );
}