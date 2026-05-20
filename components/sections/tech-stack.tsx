"use client";

import { Zap, Brain } from "lucide-react";

const allTechnologies = [
    // ── Frontend ──
    { name: "React", category: "Frontend", color: "#61DAFB" },
    { name: "Next.js", category: "Frontend", color: "#6366F1" },
    { name: "JavaScript", category: "Frontend", color: "#F7DF1E" },
    { name: "TypeScript", category: "Frontend", color: "#3178C6" },
    { name: "SCSS / SASS", category: "Frontend", color: "#C76494" },
    { name: "Tailwind CSS", category: "Frontend", color: "#06B6D4" },
    { name: "Redux Toolkit", category: "Frontend", color: "#764ABC" },

    // ── Mobile ──
    { name: "React Native", category: "Mobile", color: "#61DAFB" },
    { name: "Kotlin", category: "Mobile", color: "#7F52FF" },
    { name: "Expo", category: "Mobile", color: "#A78BFA" },

    // ── Backend ──
    { name: "Node.js", category: "Backend", color: "#339933" },
    { name: "Express", category: "Backend", color: "#94A3B8" },
    { name: "REST APIs", category: "Backend", color: "#0EA5E9" },
    { name: "GraphQL", category: "Backend", color: "#E10098" },
    { name: "Python", category: "Backend", color: "#3776AB" },
    { name: "PHP", category: "Backend", color: "#777BB4" },
    { name: "OOP (Java / JS / Kotlin)", category: "Backend", color: "#F97316" },

    // ── Databases ──
    { name: "MongoDB", category: "Database", color: "#47A248" },
    { name: "MySQL", category: "Database", color: "#00758F" },
    { name: "Firebase (Firestore / Auth)", category: "Database", color: "#FFCA28" },
    { name: "Redis", category: "Database", color: "#DC382D" },

    // ── Cloud & DevOps ──
    { name: "AWS (EC2 / S3 / RDS)", category: "Cloud & DevOps", color: "#FF9900" },
    { name: "Vercel", category: "Cloud & DevOps", color: "#94A3B8" },
    { name: "Render", category: "Cloud & DevOps", color: "#94A3B8" },
    { name: "VPS (Linux servers)", category: "Cloud & DevOps", color: "#64748B" },
    { name: "Postman", category: "Cloud & DevOps", color: "#FF6C37" },
    { name: "Git & GitHub", category: "Cloud & DevOps", color: "#F97316" },
    { name: "Docker (basic)", category: "Cloud & DevOps", color: "#0DB7ED" },

    // ── Tools & Ecosystem ──
    { name: "MERN Stack", category: "Tools & Ecosystem", color: "#22C55E" },
    { name: "REST Client / API Testing", category: "Tools & Ecosystem", color: "#0EA5E9" },
    { name: "Cloud Messaging / Queues (Redis MQ)", category: "Tools & Ecosystem", color: "#EF4444" },
];

const categories = [
    "Frontend",
    "Mobile",
    "Backend",
    "Database",
    "Cloud & DevOps",
    "Tools & Ecosystem",
];

export default function TechStack() {
    return (
        <section className="bg-slate-900 py-20 sm:py-28 px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="mb-12 sm:mb-16">
                    <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800 px-3 py-1 text-xs font-medium tracking-wide text-slate-300 uppercase">
                        <Brain className="h-3.5 w-3.5 text-sky-400" />
                        Our Technologies
                    </span>
                    <h2 className="mb-3 text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                        Technology <span className="text-sky-400">Stack</span>
                    </h2>
                    <p className="max-w-xl text-sm sm:text-base leading-relaxed text-slate-400">
                        A modern, battle‑tested set of tools across frontend, backend,
                        mobile, cloud, databases, and developer tooling.
                    </p>
                </div>

                {/* Stats row */}
                <div className="mb-10 flex flex-wrap gap-6 sm:mb-12">
                    <div className="flex items-center gap-2">
                        <Zap className="h-4 w-4 text-sky-400" />
                        <span className="text-xl font-bold text-white">
                            {allTechnologies.length}
                        </span>
                        <span className="text-sm text-slate-400">technologies</span>
                    </div>
                    <div className="hidden h-px self-stretch bg-slate-700 sm:block w-px" />
                    <div className="flex items-center gap-2">
                        <Brain className="h-4 w-4 text-sky-400" />
                        <span className="text-xl font-bold text-white">
                            {categories.length}
                        </span>
                        <span className="text-sm text-slate-400">categories</span>
                    </div>
                </div>

                {/* Categories */}
                <div className="space-y-10">
                    {categories.map((category) => {
                        const techs = allTechnologies.filter(
                            (t) => t.category === category
                        );
                        return (
                            <div key={category}>
                                {/* Category label */}
                                <div className="mb-4 flex items-center gap-3">
                                    <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                                        {category}
                                    </h3>
                                    <div className="h-px flex-1 bg-slate-800" />
                                </div>

                                {/* Tech chips */}
                                <div className="flex flex-wrap gap-2">
                                    {techs.map((tech) => (
                                        <div
                                            key={tech.name}
                                            className="group inline-flex cursor-default items-center gap-2 rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-xs font-medium text-slate-100 transition-colors duration-150 hover:border-slate-500 hover:bg-slate-700 sm:text-sm"
                                        >
                                            <span
                                                className="h-2 w-2 flex-shrink-0 rounded-full"
                                                style={{ backgroundColor: tech.color }}
                                            />
                                            {tech.name}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}