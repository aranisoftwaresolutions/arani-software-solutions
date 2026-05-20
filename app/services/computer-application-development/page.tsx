"use client";

import {
    Monitor,
    Package,
    BarChart3,
    Cpu,
    Lock,
    Settings,
    ArrowRight,
    Star,
    CheckCircle,
} from "lucide-react";
import Footer from "@/components/sections/footer";
import Link from "next/link";

const solutions = [
    {
        title: "Custom ERP solutions",
        desc: "End‑to‑end ERP built around your processes and departments.",
        icon: Settings,
    },
    {
        title: "Inventory management",
        desc: "Real‑time tracking of stock, assets, and movements across locations.",
        icon: Package,
    },
    {
        title: "Reports & analytics",
        desc: "Dashboards and exports for data‑driven decisions.",
        icon: BarChart3,
    },
    {
        title: "Automation tools",
        desc: "Automate repetitive daily work to save time and reduce errors.",
        icon: Cpu,
    },
    {
        title: "CRM software",
        desc: "Manage leads, customers, pipelines, and follow‑ups from one place.",
        icon: Monitor,
    },
    {
        title: "Security & compliance",
        desc: "Encryption, access control, and policies that match your requirements.",
        icon: Lock,
    },
];

const process = [
    {
        step: "Consultation & analysis",
        desc: "Clarify goals, current tools, and constraints before deciding what to build.",
    },
    {
        step: "Design & prototyping",
        desc: "Screen flows and prototypes to validate how the desktop app will be used.",
    },
    {
        step: "Development & testing",
        desc: "Implementation with tests to keep performance and stability high.",
    },
    {
        step: "Deployment & support",
        desc: "Rollout, updates, and support so the system keeps running smoothly.",
    },
];

const technologies = [
    { name: "Java", desc: "Core language", icon: "☕" },
    { name: "JavaFX", desc: "Modern UI toolkit", icon: "🎨" },
    { name: "Swing", desc: "Desktop GUI framework", icon: "🖼️" },
    { name: "Spring Boot", desc: "Backend & APIs", icon: "🍃" },
    { name: "MySQL", desc: "Relational database", icon: "🗄️" },
    { name: "PostgreSQL", desc: "Advanced SQL database", icon: "🐘" },
];

const features = [
    {
        title: "Cross‑platform support",
        desc: "Runs on Windows, macOS, and Linux where needed.",
    },
    {
        title: "High performance",
        desc: "Optimized performance and memory usage for heavy workloads.",
    },
    {
        title: "Offline capability",
        desc: "Key features available without an internet connection.",
    },
    {
        title: "Data security",
        desc: "Secure local storage and controlled access to sensitive data.",
    },
    {
        title: "Integrations",
        desc: "Connect with APIs, services, and existing internal systems.",
    },
    {
        title: "Scalability",
        desc: "Architecture that can grow with new modules and teams.",
    },
];

const projects = [
    {
        title: "Retail POS system",
        desc: "Point‑of‑sale with billing, inventory, and customer profiles.",
        impact: "200+ stores running daily",
    },
    {
        title: "Manufacturing ERP",
        desc: "ERP for planning, production, quality, and supply chain.",
        impact: "50% efficiency improvement",
    },
    {
        title: "Hospital management",
        desc: "Desktop tools for patient records, scheduling, and billing.",
        impact: "10k+ patients managed",
    },
];

const faq = [
    {
        q: "Why use Java for desktop apps?",
        a: "Java is mature, cross‑platform, secure, and has strong libraries for both UI and backend work.",
    },
    {
        q: "Can desktop apps connect to web services?",
        a: "Yes. Apps can talk to REST APIs, cloud databases, and other services over secure connections.",
    },
    {
        q: "How are updates handled?",
        a: "Automatic update flows and versioning can be built in so users stay up‑to‑date easily.",
    },
    {
        q: "Do you train staff to use the software?",
        a: "Training sessions, documentation, and simple guides can be included in the project.",
    },
];

export default function DesktopApplicationPage() {
    return (
        <>
            <main className="bg-slate-950 text-white min-h-screen">
                {/* Hero */}
                <section className="pt-28 sm:pt-36 pb-14 sm:pb-16 px-4 sm:px-6">
                    <div className="max-w-5xl mx-auto text-center">
                        <span className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900 px-4 py-1.5 text-xs font-medium tracking-wide text-slate-300 uppercase mb-6">
                            <Monitor className="w-4 h-4" />
                            Desktop application development
                        </span>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-5">
                            Desktop software{" "}
                            <span className="text-emerald-400">built for operations</span>
                        </h1>

                        <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto mb-8">
                            Java‑based desktop applications that streamline operations, support
                            teams, and connect cleanly to your existing systems.
                        </p>

                        <div className="flex flex-wrap justify-center gap-4">
                            <Link href="/contact">
                                <button className="inline-flex items-center gap-2 rounded-lg bg-emerald-400 px-6 py-3 text-sm sm:text-base font-semibold text-slate-950 hover:bg-emerald-300 transition-colors">
                                    Discuss your desktop app
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Solutions */}
                <section className="px-4 sm:px-6 pb-16 sm:pb-20">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 sm:mb-12">
                            Desktop solutions
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {solutions.map((solution) => {
                                const Icon = solution.icon;
                                return (
                                    <article
                                        key={solution.title}
                                        className="rounded-xl border border-slate-800 bg-slate-900 p-6"
                                    >
                                        <div className="w-11 h-11 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center mb-4">
                                            <Icon className="w-6 h-6 text-emerald-400" />
                                        </div>
                                        <h3 className="text-lg font-semibold text-white mb-2">
                                            {solution.title}
                                        </h3>
                                        <p className="text-sm text-slate-400 leading-relaxed">
                                            {solution.desc}
                                        </p>
                                    </article>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Key features */}
                <section className="border-t border-slate-800 bg-slate-900 px-4 sm:px-6 py-16 sm:py-20">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 sm:mb-12">
                            What desktop apps can provide
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {features.map((feature) => (
                                <article
                                    key={feature.title}
                                    className="rounded-xl border border-slate-800 bg-slate-950 p-5 flex gap-3"
                                >
                                    <div className="mt-1">
                                        <CheckCircle className="w-5 h-5 text-emerald-300" />
                                    </div>
                                    <div>
                                        <h3 className="text-sm sm:text-base font-semibold text-white mb-1.5">
                                            {feature.title}
                                        </h3>
                                        <p className="text-sm text-slate-400 leading-relaxed">
                                            {feature.desc}
                                        </p>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Technology stack */}
                <section className="px-4 sm:px-6 py-16 sm:py-20">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 sm:mb-12">
                            Technology stack
                        </h2>

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                            {technologies.map((tech) => (
                                <div
                                    key={tech.name}
                                    className="rounded-xl border border-slate-800 bg-slate-900 p-5 text-center"
                                >
                                    <div className="text-3xl mb-2">{tech.icon}</div>
                                    <h3 className="text-sm font-semibold text-emerald-300 mb-1">
                                        {tech.name}
                                    </h3>
                                    <p className="text-xs text-slate-400">{tech.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Process */}
                <section className="border-t border-slate-800 bg-slate-900 px-4 sm:px-6 py-16 sm:py-20">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 sm:mb-12">
                            How desktop projects run
                        </h2>

                        <div className="space-y-5">
                            {process.map((item, index) => (
                                <div
                                    key={item.step}
                                    className="rounded-xl border border-slate-800 bg-slate-950 px-5 py-4 sm:px-6 sm:py-5 flex gap-4"
                                >
                                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 text-xs font-semibold text-slate-200">
                                        {index + 1}
                                    </div>
                                    <div>
                                        <h3 className="text-sm sm:text-base font-semibold text-white mb-1.5">
                                            {item.step}
                                        </h3>
                                        <p className="text-sm text-slate-400 leading-relaxed">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Projects */}
                <section className="px-4 sm:px-6 py-16 sm:py-20">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 sm:mb-12">
                            Recent desktop projects
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {projects.map((project) => (
                                <article
                                    key={project.title}
                                    className="rounded-xl border border-slate-800 bg-slate-950 p-6"
                                >
                                    <div className="flex items-center gap-2 mb-3">
                                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                                        <span className="text-xs font-semibold text-slate-200">
                                            {project.impact}
                                        </span>
                                    </div>
                                    <h3 className="text-lg font-semibold text-white mb-2">
                                        {project.title}
                                    </h3>
                                    <p className="text-sm text-slate-400 leading-relaxed">
                                        {project.desc}
                                    </p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className="border-t border-slate-800 bg-slate-900 px-4 sm:px-6 py-16 sm:py-20">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 sm:mb-12">
                            Desktop development FAQ
                        </h2>

                        <div className="space-y-4">
                            {faq.map((item) => (
                                <article
                                    key={item.q}
                                    className="rounded-xl border border-slate-800 bg-slate-950 px-5 py-4 sm:px-6 sm:py-5"
                                >
                                    <h3 className="text-sm sm:text-base font-semibold text-white mb-2">
                                        {item.q}
                                    </h3>
                                    <p className="text-sm text-slate-400 leading-relaxed">
                                        {item.a}
                                    </p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="px-4 sm:px-6 py-16 sm:py-20">
                    <div className="max-w-4xl mx-auto">
                        <div className="rounded-2xl border border-slate-800 bg-slate-950 p-8 sm:p-10 text-center">
                            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                                Ready to modernize your desktop tools?
                            </h2>
                            <p className="text-sm sm:text-base text-slate-400 mb-8 max-w-xl mx-auto">
                                Share how your team works today, and we’ll explore how a focused
                                desktop application could support them better.
                            </p>
                            <Link href="/contact">
                                <button className="inline-flex items-center gap-2 rounded-lg bg-emerald-400 px-6 py-3 text-sm sm:text-base font-semibold text-slate-950 hover:bg-emerald-300 transition-colors">
                                    Start a desktop project
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}