"use client";

import {
    Layers,
    Database,
    Code2,
    Server,
    Zap,
    Shield,
    ArrowRight,
    Star,
    Calendar,
} from "lucide-react";
import Footer from "@/components/sections/footer";
import Link from "next/link";
import { CALENDLY_URL } from "@/lib/calendly";



const solutions = [
    {
        title: "Custom web applications",
        desc: "Scalable, maintainable web apps tailored to your needs using MERN and modern patterns.",
        icon: Code2,
    },
    {
        title: "Responsive UI/UX",
        desc: "Interfaces that work cleanly across desktop, tablet, and mobile.",
        icon: Layers,
    },
    {
        title: "APIs & microservices",
        desc: "Robust APIs and modular services for scale and maintainability.",
        icon: Server,
    },
    {
        title: "Performance optimization",
        desc: "Redis caching, optimized queries, and profiling to keep apps fast.",
        icon: Zap,
    },
    {
        title: "Database architecture",
        desc: "MongoDB and relational design with indexing and replication where needed.",
        icon: Database,
    },
    {
        title: "Security & auth",
        desc: "JWT, OAuth2, and role-based access with solid security practices.",
        icon: Shield,
    },
];

const process = [
    {
        step: "Requirement analysis",
        desc: "Define scope, constraints, and success metrics with clear documentation.",
    },
    {
        step: "Design & architecture",
        desc: "Wireframes, system design, and technical architecture before coding starts.",
    },
    {
        step: "Development & testing",
        desc: "Agile delivery, automated tests, and reviews to keep quality high.",
    },
    {
        step: "Deployment & maintenance",
        desc: "Deploy on cloud infrastructure with monitoring, security, and updates.",
    },
];

const technologies = [
    { name: "React", category: "Frontend" },
    { name: "Next.js", category: "Frontend framework" },
    { name: "Node.js", category: "Backend runtime" },
    { name: "Express", category: "Backend framework" },
    { name: "TypeScript", category: "Language" },
    { name: "MongoDB", category: "NoSQL database" },
    { name: "PostgreSQL", category: "SQL database" },
    { name: "Redis", category: "Cache" },
    { name: "Tailwind CSS", category: "Styling" },
];

const projects = [
    {
        title: "E‑commerce platform",
        desc: "Full MERN e‑commerce with real‑time inventory and payment integration.",
        impact: "500k+ users",
    },
    {
        title: "Real‑time dashboard",
        desc: "Analytics dashboard using Redis and TypeScript for fast data views.",
        impact: "Sub‑second load",
    },
    {
        title: "Social network",
        desc: "Responsive social platform with WebSocket updates and activity feeds.",
        impact: "50k daily active users",
    },
];

const caseStudies = [
    {
        title: "Enterprise SaaS platform",
        challenge: "Migrating a legacy system with minimal downtime.",
        solution: "Microservices and phased migration strategy.",
        result: "99.9% uptime and 40% performance improvement.",
    },
    {
        title: "Real‑time collaboration tool",
        challenge: "Handling thousands of concurrent users with live updates.",
        solution: "WebSockets, Redis pub/sub, and horizontal scaling.",
        result: "Sub‑100ms latency under load.",
    },
];

const faq = [
    {
        q: "What industries do you work with?",
        a: "E‑commerce, SaaS, fintech, healthcare, education, social platforms, and more.",
    },
    {
        q: "Do you provide ongoing maintenance?",
        a: "Yes. Support, monitoring, security patches, and feature updates are part of long‑term engagements.",
    },
    {
        q: "How long does a full stack project take?",
        a: "Typical timelines are 3–6 months depending on complexity and integrations.",
    },
    {
        q: "Can you work with our existing stack?",
        a: "Yes. Projects often involve integrating with existing APIs, services, and databases.",
    },
];

export default function FullStackDevelopmentPage() {
    const openCalendly = () => {
        if ((window as any).Calendly) {
            (window as any).Calendly.initPopupWidget({ url: CALENDLY_URL });
        }
    };

    return (
        <>
            <main className="bg-slate-950 text-white min-h-screen">
                {/* Hero */}
                <section className="pt-28 sm:pt-36 pb-14 sm:pb-16 px-4 sm:px-6">
                    <div className="max-w-5xl mx-auto text-center">
                        <span className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900 px-4 py-1.5 text-xs font-medium tracking-wide text-slate-300 uppercase mb-6">
                            <Layers className="w-4 h-4" />
                            Full stack development
                        </span>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-5">
                            End‑to‑end{" "}
                            <span className="text-sky-400">web application development</span>
                        </h1>

                        <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto mb-8">
                            Full stack MERN solutions with TypeScript, Redis, and modern tooling,
                            from the frontend UI to the backend infrastructure.
                        </p>

                        <div className="flex flex-wrap justify-center gap-4">
                            <button
                                type="button"
                                onClick={openCalendly}
                                className="inline-flex items-center gap-2 rounded-lg bg-sky-500 px-6 py-3 text-sm sm:text-base font-semibold text-slate-950 hover:bg-sky-400 transition-colors"
                            >
                                <Calendar className="w-4 h-4" />
                                Book a Free Consultation
                            </button>
                        </div>
                    </div>
                </section>

                {/* Solutions */}
                <section className="px-4 sm:px-6 pb-16 sm:pb-20">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 sm:mb-12">
                            Full stack solutions
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
                                            <Icon className="w-6 h-6 text-sky-400" />
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

                {/* Technology stack */}
                <section className="border-t border-slate-800 bg-slate-900 px-4 sm:px-6 py-16 sm:py-20">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 sm:mb-12">
                            Technology stack
                        </h2>

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                            {technologies.map((tech) => (
                                <div
                                    key={tech.name}
                                    className="rounded-xl border border-slate-800 bg-slate-950 p-4 text-center"
                                >
                                    <h3 className="text-sm font-semibold text-sky-300 mb-1">
                                        {tech.name}
                                    </h3>
                                    <p className="text-xs text-slate-400">{tech.category}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Process */}
                <section className="px-4 sm:px-6 py-16 sm:py-20">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 sm:mb-12">
                            How projects are delivered
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

                {/* Case studies */}
                <section className="border-t border-slate-800 bg-slate-900 px-4 sm:px-6 py-16 sm:py-20">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 sm:mb-12">
                            Case studies
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {caseStudies.map((study) => (
                                <article
                                    key={study.title}
                                    className="rounded-xl border border-slate-800 bg-slate-950 p-6"
                                >
                                    <h3 className="text-lg font-semibold text-white mb-3">
                                        {study.title}
                                    </h3>
                                    <div className="space-y-3 text-sm">
                                        <div>
                                            <p className="font-semibold text-sky-400 mb-1">Challenge</p>
                                            <p className="text-slate-400">{study.challenge}</p>
                                        </div>
                                        <div>
                                            <p className="font-semibold text-blue-400 mb-1">Solution</p>
                                            <p className="text-slate-400">{study.solution}</p>
                                        </div>
                                        <div>
                                            <p className="font-semibold text-emerald-400 mb-1">Result</p>
                                            <p className="text-slate-200 font-medium">{study.result}</p>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Featured projects */}
                <section className="px-4 sm:px-6 py-16 sm:py-20">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 sm:mb-12">
                            Featured projects
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {projects.map((project) => (
                                <article
                                    key={project.title}
                                    className="rounded-xl border border-slate-800 bg-slate-900 p-6"
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
                            Full stack FAQ
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
                        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8 sm:p-10 text-center">
                            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                                Ready to start a full stack build?
                            </h2>
                            <p className="text-sm sm:text-base text-slate-400 mb-8 max-w-xl mx-auto">
                                Share your idea, existing system, or roadmap, and we’ll explore how to
                                design and deliver the application end‑to‑end.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                                <button
                                    type="button"
                                    onClick={openCalendly}
                                    className="inline-flex items-center gap-2 rounded-lg bg-sky-500 px-6 py-3 text-sm sm:text-base font-semibold text-slate-950 hover:bg-sky-400 transition-colors"
                                >
                                    <Calendar className="w-4 h-4" />
                                    Book a Free Consultation
                                </button>

                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-6 py-3 text-sm sm:text-base font-semibold text-white hover:bg-slate-800 transition-colors"
                                >
                                    Send a brief
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