"use client";

import Image from "next/image";
import Link from "next/link";
import {
    ArrowRight,
    ExternalLink,
    Filter,
    Search,
    Grid3x3,
    List,
    Calendar,
    Users,
    Zap,
    Star,
} from "lucide-react";
import { useMemo, useState } from "react";
import { allProjects } from "@/lib/projectsData";
import Footer from "@/components/sections/footer";
import CalendlyPopupButton from "@/components/ui/calendly-popup-button";
import { CALENDLY_URL } from "@/lib/calendly";



export default function ProjectsPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

    const categories = [
        "All",
        ...Array.from(new Set(allProjects.map((project) => project.category))),
    ];

    const filteredProjects = useMemo(() => {
        const query = searchQuery.toLowerCase().trim();

        return allProjects.filter((project) => {
            const matchesSearch =
                project.title.toLowerCase().includes(query) ||
                project.description.toLowerCase().includes(query);

            const matchesCategory =
                selectedCategory === "All" || project.category === selectedCategory;

            return matchesSearch && matchesCategory;
        });
    }, [searchQuery, selectedCategory]);

    const stats = [
        { label: "Projects Completed", value: `${allProjects.length}+`, icon: Zap },
        { label: "Happy Clients", value: "50+", icon: Users },
        { label: "Countries Served", value: "15+", icon: Star },
        { label: "Success Rate", value: "98%", icon: Calendar },
    ];

    return (
        <>
            <main className="min-h-screen bg-slate-950 text-white">
                {/* Hero */}
                <section className="pt-28 sm:pt-36 pb-14 sm:pb-16 px-4 sm:px-6">
                    <div className="max-w-7xl mx-auto">
                        <div className="max-w-3xl">
                            <span className="inline-flex items-center rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-xs font-medium tracking-wide text-slate-300 uppercase mb-5">
                                Complete Portfolio
                            </span>

                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-5">
                                Our <span className="text-sky-400">Project Gallery</span>
                            </h1>

                            <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl">
                                Explore our complete collection of delivered work, product builds,
                                and success stories across industries and platforms.
                            </p>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-12">
                            {stats.map((stat) => (
                                <div
                                    key={stat.label}
                                    className="rounded-xl border border-slate-800 bg-slate-900 p-4 sm:p-5"
                                >
                                    <stat.icon className="w-5 h-5 text-sky-400 mb-3" />
                                    <div className="text-2xl sm:text-3xl font-bold text-white mb-1">
                                        {/* {stat.value} */}
                                    </div>
                                    <div className="text-xs sm:text-sm text-slate-400">
                                        {/* {stat.label} */}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Filters */}
                <section className="border-t border-slate-800 border-b border-slate-800 bg-slate-900 px-4 sm:px-6 py-8 sm:py-10">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex flex-col gap-5">
                            <div className="flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between">
                                {/* Search */}
                                <div className="relative w-full lg:max-w-md">
                                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                                    <input
                                        type="text"
                                        placeholder="Search projects..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="w-full pl-11 pr-4 py-3 rounded-lg border border-slate-700 bg-slate-950 text-white placeholder:text-slate-500 focus:outline-none focus:border-sky-500 transition-colors"
                                    />
                                </div>

                                {/* View mode */}
                                <div className="flex items-center gap-2 self-start lg:self-auto rounded-lg border border-slate-700 bg-slate-950 p-1">
                                    <button
                                        onClick={() => setViewMode("grid")}
                                        className={`inline-flex items-center justify-center rounded-md px-3 py-2 transition-colors ${viewMode === "grid"
                                            ? "bg-slate-800 text-white"
                                            : "text-slate-400 hover:text-white hover:bg-slate-800/60"
                                            }`}
                                        aria-label="Grid view"
                                    >
                                        <Grid3x3 className="w-4 h-4" />
                                    </button>
                                    <button
                                        onClick={() => setViewMode("list")}
                                        className={`inline-flex items-center justify-center rounded-md px-3 py-2 transition-colors ${viewMode === "list"
                                            ? "bg-slate-800 text-white"
                                            : "text-slate-400 hover:text-white hover:bg-slate-800/60"
                                            }`}
                                        aria-label="List view"
                                    >
                                        <List className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>

                            {/* Categories */}
                            <div className="flex items-center gap-3">
                                <Filter className="w-4 h-4 text-slate-500 flex-shrink-0" />
                                <div className="flex gap-2 overflow-x-auto hide-scrollbar">
                                    {categories.map((category) => (
                                        <button
                                            key={category}
                                            onClick={() => setSelectedCategory(category)}
                                            className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${selectedCategory === category
                                                ? "bg-sky-500 text-slate-950"
                                                : "bg-slate-950 border border-slate-700 text-slate-400 hover:text-white hover:border-slate-600"
                                                }`}
                                        >
                                            {category}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <p className="text-sm text-slate-400">
                                Showing{" "}
                                <span className="text-white font-semibold">
                                    {filteredProjects.length}
                                </span>{" "}
                                of{" "}
                                <span className="text-white font-semibold">
                                    {allProjects.length}
                                </span>{" "}
                                projects
                            </p>
                        </div>
                    </div>
                </section>

                {/* Projects */}
                <section className="px-4 sm:px-6 py-12 sm:py-14">
                    <div className="max-w-7xl mx-auto">
                        {filteredProjects.length === 0 ? (
                            <div className="rounded-xl border border-slate-800 bg-slate-900 py-16 px-6 text-center">
                                <div className="text-4xl mb-4">🔍</div>
                                <h3 className="text-2xl font-bold text-white mb-2">
                                    No projects found
                                </h3>
                                <p className="text-slate-400">
                                    Try adjusting your search or selected category.
                                </p>
                            </div>
                        ) : viewMode === "grid" ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                                {filteredProjects.map((project) => (
                                    <ProjectCard key={project.id} project={project} />
                                ))}
                            </div>
                        ) : (
                            <div className="space-y-6">
                                {filteredProjects.map((project) => (
                                    <ProjectListItem key={project.id} project={project} />
                                ))}
                            </div>
                        )}
                    </div>
                </section>

                {/* CTA */}
                <section className="border-t border-slate-800 bg-slate-900 px-4 sm:px-6 py-16 sm:py-20">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="rounded-2xl border border-slate-800 bg-slate-950 p-8 sm:p-10">
                            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                                Ready to start your{" "}
                                <span className="text-sky-400">project?</span>
                            </h2>
                            <p className="text-base sm:text-lg text-slate-400 mb-8">
                                Pick a time that works for you, and we&apos;ll walk through your
                                requirements and next steps for your build.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                                {/* Primary: Calendly popup instead of "Get in touch" */}
                                <CalendlyPopupButton url={CALENDLY_URL} />

                                {/* Secondary: keep contact page link */}
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800 transition-colors"
                                >
                                    Or send a brief
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}

function ProjectCard({ project }: { project: any }) {
    return (
        <article className="rounded-xl border border-slate-800 bg-slate-900 overflow-hidden">
            <Link href={`/projects/${project.id}`} className="block">
                <div className="relative h-60 overflow-hidden bg-slate-800">
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
                    <div className="absolute top-4 left-4">
                        <span className="rounded-full bg-slate-950/80 border border-slate-700 px-3 py-1 text-xs font-medium text-slate-200">
                            {project.category}
                        </span>
                    </div>
                </div>

                <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed mb-4 line-clamp-3">
                        {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-5">
                        {project.tech.slice(0, 3).map((tech: string) => (
                            <span
                                key={tech}
                                className="rounded-md border border-slate-700 bg-slate-800 px-2.5 py-1 text-xs text-slate-300"
                            >
                                {tech}
                            </span>
                        ))}
                        {project.tech.length > 3 && (
                            <span className="rounded-md border border-slate-700 bg-slate-800 px-2.5 py-1 text-xs text-slate-400">
                                +{project.tech.length - 3}
                            </span>
                        )}
                    </div>

                    <div className="inline-flex items-center gap-2 text-sm font-medium text-sky-400 hover:text-sky-300 transition-colors">
                        View details
                        <ArrowRight className="w-4 h-4" />
                    </div>
                </div>
            </Link>
        </article>
    );
}

function ProjectListItem({ project }: { project: any }) {
    return (
        <article className="rounded-xl border border-slate-800 bg-slate-900 overflow-hidden">
            <div className="flex flex-col md:flex-row gap-0">
                <Link
                    href={`/projects/${project.id}`}
                    className="relative w-full md:w-80 h-56 md:h-auto flex-shrink-0 bg-slate-800"
                >
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover object-top"
                    />
                </Link>

                <div className="flex-1 p-6">
                    <div className="flex items-start justify-between gap-4 mb-3 flex-wrap">
                        <div>
                            <Link href={`/projects/${project.id}`}>
                                <h3 className="text-2xl font-bold text-white mb-2 hover:text-sky-400 transition-colors">
                                    {project.title}
                                </h3>
                            </Link>

                            <span className="inline-flex rounded-full border border-slate-700 bg-slate-800 px-3 py-1 text-xs font-medium text-slate-300">
                                {project.category}
                            </span>
                        </div>
                    </div>

                    <p className="text-sm text-slate-400 leading-relaxed mb-4">
                        {project.description}
                    </p>


                    <div className="flex flex-wrap gap-2 mb-5">
                        {project.tech.slice(0, 5).map((tech: string) => (
                            <span
                                key={tech}
                                className="rounded-md border border-slate-700 bg-slate-800 px-3 py-1 text-xs text-slate-300"
                            >
                                {tech}
                            </span>
                        ))}
                        {project.tech.length > 5 && (
                            <span className="rounded-md border border-slate-700 bg-slate-800 px-3 py-1 text-xs text-slate-400">
                                +{project.tech.length - 5} more
                            </span>
                        )}
                    </div>

                    <div className="flex items-center flex-wrap gap-5">
                        <Link
                            href={`/projects/${project.id}`}
                            className="inline-flex items-center gap-2 text-sm font-medium text-sky-400 hover:text-sky-300 transition-colors"
                        >
                            View details
                            <ArrowRight className="w-4 h-4" />
                        </Link>

                        {project.liveUrl && (
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-white transition-colors"
                            >
                                Live demo
                                <ExternalLink className="w-4 h-4" />
                            </a>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </article>
    );
}