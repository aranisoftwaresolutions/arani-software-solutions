"use client";

import {
    Code,
    Smartphone,
    Zap,
    Layers,
    Globe,
    Rocket,
    ArrowRight,
    Star,
    CheckCircle,
    Calendar,
} from "lucide-react";
import Footer from "@/components/sections/footer";
import Link from "next/link";
import { CALENDLY_URL } from "@/lib/calendly";


const solutions = [
    {
        title: "Visual development",
        desc: "Drag-and-drop interfaces to create apps and sites without traditional code.",
        icon: Layers,
    },
    {
        title: "Custom logic",
        desc: "Workflows and automations built visually, tailored to your processes.",
        icon: Code,
    },
    {
        title: "Cross‑platform",
        desc: "Web, iOS, and Android from the same no‑code foundations.",
        icon: Smartphone,
    },
    {
        title: "Rapid prototyping",
        desc: "Turn ideas into working prototypes quickly for feedback and testing.",
        icon: Zap,
    },
    {
        title: "Scalability",
        desc: "Solutions that can grow with your business and user base.",
        icon: Globe,
    },
    {
        title: "Integrations",
        desc: "Connect with your existing tools, APIs, and data sources.",
        icon: Rocket,
    },
];

const process = [
    {
        step: "Consultation & analysis",
        desc: "Understand goals, requirements, and constraints to choose the right no‑code approach.",
    },
    {
        step: "Design & prototyping",
        desc: "Wireframes and interactive prototypes that match your workflows before build.",
    },
    {
        step: "Development & testing",
        desc: "Implement features in no‑code platforms and test for reliability and UX.",
    },
    {
        step: "Deployment & support",
        desc: "Launch, monitor, and refine with ongoing support and improvements.",
    },
];

const projects = [
    {
        title: "Mobile app for startups",
        desc: "Cross‑platform app launched quickly for a new startup.",
        impact: "4 weeks to launch",
    },
    {
        title: "Business dashboard",
        desc: "Custom dashboard for real‑time analytics and reporting with no‑code tools.",
        impact: "60% cost savings",
    },
    {
        title: "E‑commerce store",
        desc: "Online store with payments, inventory, and basic automation.",
        impact: "50+ products live",
    },
];

const technologies = [
    { name: "Bubble", desc: "Visual programming for complex apps." },
    { name: "Webflow", desc: "Design‑first websites and CMS." },
    { name: "FlutterFlow", desc: "Mobile app builder for iOS and Android." },
    { name: "Adalo", desc: "App development without code." },
    { name: "Zapier", desc: "Automation and integrations between services." },
    { name: "Airtable", desc: "Database and workflow management." },
];

const faq = [
    {
        q: "Can no‑code apps scale for serious use?",
        a: "Modern no‑code platforms support custom databases, APIs, and security. For many products, they are suitable for real production use.",
    },
    {
        q: "What is a typical development timeline?",
        a: "Most no‑code projects launch in 2–6 weeks depending on features, much faster than traditional coding.",
    },
    {
        q: "Can we migrate to custom code later?",
        a: "Yes. You can later rebuild key parts with code or export from some platforms when your needs grow.",
    },
];

export default function NoCodeDevelopmentPage() {
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
                            <Code className="w-4 h-4" />
                            No‑code development
                        </span>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-5">
                            Launch apps{" "}
                            <span className="text-amber-400">without writing code</span>
                        </h1>

                        <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto mb-8">
                            Build and ship web and mobile applications quickly using modern
                            no‑code platforms—ideal for startups, internal tools, and fast
                            experiments.
                        </p>

                        <div className="flex flex-wrap justify-center gap-4">
                            <button
                                type="button"
                                onClick={openCalendly}
                                className="inline-flex items-center gap-2 rounded-lg bg-amber-400 px-6 py-3 text-sm sm:text-base font-semibold text-slate-950 hover:bg-amber-300 transition-colors"
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
                            No‑code solutions
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
                                            <Icon className="w-6 h-6 text-amber-400" />
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

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                            {technologies.map((tech) => (
                                <div
                                    key={tech.name}
                                    className="rounded-xl border border-slate-800 bg-slate-950 p-4 text-center"
                                >
                                    <h3 className="text-sm font-semibold text-amber-300 mb-1">
                                        {tech.name}
                                    </h3>
                                    <p className="text-xs text-slate-400">{tech.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Process */}
                <section className="px-4 sm:px-6 py-16 sm:py-20">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 sm:mb-12">
                            How projects run
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
                <section className="border-t border-slate-800 bg-slate-900 px-4 sm:px-6 py-16 sm:py-20">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 sm:mb-12">
                            Recent no‑code projects
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
                <section className="px-4 sm:px-6 py-16 sm:py-20">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 sm:mb-12">
                            No‑code FAQ
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
                <section className="border-t border-slate-800 bg-slate-900 px-4 sm:px-6 py-16 sm:py-20">
                    <div className="max-w-4xl mx-auto">
                        <div className="rounded-2xl border border-slate-800 bg-slate-950 p-8 sm:p-10 text-center">
                            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                                Ready to build your next app with no‑code?
                            </h2>
                            <p className="text-sm sm:text-base text-slate-400 mb-8 max-w-xl mx-auto">
                                Share what you want to launch, and we’ll help you choose the right
                                platform and move from idea to working product quickly.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                                <button
                                    type="button"
                                    onClick={openCalendly}
                                    className="inline-flex items-center gap-2 rounded-lg bg-amber-400 px-6 py-3 text-sm sm:text-base font-semibold text-slate-950 hover:bg-amber-300 transition-colors"
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