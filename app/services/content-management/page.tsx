"use client";

import {
    FileText,
    Layout,
    Globe,
    Zap,
    Shield,
    Users,
    ArrowRight,
    Star,
    CheckCircle,
} from "lucide-react";
import Footer from "@/components/sections/footer";
import Link from "next/link";

const solutions = [
    {
        title: "Custom CMS development",
        desc: "Content management systems tailored to your workflows and editorial processes.",
        icon: Layout,
    },
    {
        title: "Headless CMS",
        desc: "API‑first content delivery across websites, apps, and other channels.",
        icon: Globe,
    },
    {
        title: "Content strategy",
        desc: "Planning, taxonomy, and workflows so content is structured and reusable.",
        icon: FileText,
    },
    {
        title: "Multi‑language support",
        desc: "Localization, translation workflows, and region‑specific content.",
        icon: Users,
    },
    {
        title: "Performance & SEO",
        desc: "Fast delivery, caching, and SEO‑friendly output from your CMS.",
        icon: Zap,
    },
    {
        title: "Security & compliance",
        desc: "Role‑based access, audit logs, backups, and compliance controls.",
        icon: Shield,
    },
];

const process = [
    {
        step: "Discovery & planning",
        desc: "Understand content types, teams, and platforms to design the right CMS.",
    },
    {
        step: "Design & development",
        desc: "Build clear admin interfaces and a solid backend for content operations.",
    },
    {
        step: "Integration & training",
        desc: "Connect analytics, marketing tools, and train your editors.",
    },
    {
        step: "Launch & support",
        desc: "Go live with support, monitoring, and ongoing improvements.",
    },
];

const platforms = [
    {
        name: "WordPress",
        desc: "Widely used CMS.",
        features: ["Plugin ecosystem", "SEO‑friendly", "Familiar UI"],
    },
    {
        name: "Strapi",
        desc: "Open‑source headless CMS.",
        features: ["API‑first", "Custom content types", "Self‑hosted or cloud"],
    },
    {
        name: "Contentful",
        desc: "Cloud headless CMS.",
        features: ["Multi‑channel", "GraphQL support", "Scales globally"],
    },
    {
        name: "Sanity",
        desc: "Schema‑driven, real‑time CMS.",
        features: ["Structured content", "Real‑time editing", "Portable text"],
    },
];

const features = [
    {
        title: "Visual editor",
        desc: "Editor‑friendly interfaces with rich text and structured content.",
    },
    {
        title: "Version history",
        desc: "Change tracking, rollbacks, and approvals.",
    },
    {
        title: "Media management",
        desc: "Organized handling of images, video, and documents.",
    },
    {
        title: "SEO helpers",
        desc: "Meta fields, sitemaps, and structured data fields.",
    },
    {
        title: "API integrations",
        desc: "Connect content to analytics, marketing, and other tools.",
    },
    {
        title: "Mobile‑ready admin",
        desc: "Responsive admin so content can be updated on the go.",
    },
];

const projects = [
    {
        title: "Corporate website network",
        desc: "Multi‑site CMS for a global organization with shared components.",
        impact: "15 sites managed from one system",
    },
    {
        title: "News portal",
        desc: "Headless CMS powering a high‑traffic news site with frequent updates.",
        impact: "1M+ visitors per month",
    },
    {
        title: "E‑learning platform",
        desc: "Course, lesson, and user content managed inside a custom CMS.",
        impact: "10k+ students supported",
    },
];

const caseStudies = [
    {
        title: "Media company migration",
        challenge:
            "Legacy CMS slowed publishing, had weak SEO, and poor mobile support.",
        solution: "Migration to a headless setup with modern frontend and CDN.",
        result:
            "Faster publishing, better performance, and stronger search visibility.",
    },
    {
        title: "Enterprise content hub",
        challenge: "Content spread across many sites with inconsistent branding.",
        solution: "Centralized CMS with multi‑site support and shared design.",
        result: "Time saved, unified branding, and simpler operations.",
    },
];

const faq = [
    {
        q: "Which CMS should we use?",
        a: "WordPress is often best for traditional sites, while Strapi, Contentful, or Sanity are strong options for headless and multi‑channel needs.",
    },
    {
        q: "Can you migrate our existing CMS?",
        a: "Yes. Content, URLs, and SEO can be preserved while moving to a better platform.",
    },
    {
        q: "Do you train our team?",
        a: "Training, documentation, and follow‑up support are part of CMS projects.",
    },
    {
        q: "How is content kept secure?",
        a: "Access control, SSL, backups, and regular updates keep content safer.",
    },
];

export default function ContentManagementPage() {
    return (
        <>
            <main className="bg-slate-950 text-white min-h-screen">
                {/* Hero */}
                <section className="pt-28 sm:pt-36 pb-14 sm:pb-16 px-4 sm:px-6">
                    <div className="max-w-5xl mx-auto text-center">
                        <span className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900 px-4 py-1.5 text-xs font-medium tracking-wide text-slate-300 uppercase mb-6">
                            <FileText className="w-4 h-4" />
                            Content management systems
                        </span>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-5">
                            CMS solutions{" "}
                            <span className="text-indigo-400">built around your content</span>
                        </h1>

                        <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto mb-8">
                            From WordPress to modern headless CMS, get a content platform that
                            supports your editors and scales with your business.
                        </p>

                        <div className="flex flex-wrap justify-center gap-4">
                            <Link href="/contact">
                                <button className="inline-flex items-center gap-2 rounded-lg bg-indigo-400 px-6 py-3 text-sm sm:text-base font-semibold text-slate-950 hover:bg-indigo-300 transition-colors">
                                    Discuss your CMS project
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
                            CMS services
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
                                            <Icon className="w-6 h-6 text-indigo-400" />
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
                            Built for editors and teams
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {features.map((feature) => (
                                <article
                                    key={feature.title}
                                    className="rounded-xl border border-slate-800 bg-slate-950 p-5 flex gap-3"
                                >
                                    <div className="mt-1">
                                        <CheckCircle className="w-5 h-5 text-indigo-300" />
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

                {/* Platforms */}
                <section className="px-4 sm:px-6 py-16 sm:py-20">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 sm:mb-12">
                            Platforms we use
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {platforms.map((platform) => (
                                <article
                                    key={platform.name}
                                    className="rounded-xl border border-slate-800 bg-slate-900 p-6"
                                >
                                    <h3 className="text-lg font-semibold text-indigo-300 mb-1.5">
                                        {platform.name}
                                    </h3>
                                    <p className="text-sm text-slate-400 mb-3">{platform.desc}</p>
                                    <ul className="space-y-1">
                                        {platform.features.map((f) => (
                                            <li
                                                key={f}
                                                className="text-xs text-slate-400 flex items-center gap-2"
                                            >
                                                <span className="inline-block h-1.5 w-1.5 rounded-full bg-indigo-400" />
                                                {f}
                                            </li>
                                        ))}
                                    </ul>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Process */}
                <section className="border-t border-slate-800 bg-slate-900 px-4 sm:px-6 py-16 sm:py-20">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 sm:mb-12">
                            How CMS projects run
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
                <section className="px-4 sm:px-6 py-16 sm:py-20">
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
                                            <p className="font-semibold text-indigo-300 mb-1">
                                                Challenge
                                            </p>
                                            <p className="text-slate-400">{study.challenge}</p>
                                        </div>
                                        <div>
                                            <p className="font-semibold text-purple-300 mb-1">
                                                Solution
                                            </p>
                                            <p className="text-slate-400">{study.solution}</p>
                                        </div>
                                        <div>
                                            <p className="font-semibold text-emerald-300 mb-1">
                                                Result
                                            </p>
                                            <p className="text-slate-200 font-medium">
                                                {study.result}
                                            </p>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Projects */}
                <section className="border-t border-slate-800 bg-slate-900 px-4 sm:px-6 py-16 sm:py-20">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 sm:mb-12">
                            Recent CMS projects
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
                            CMS FAQ
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
                                Ready to streamline content management?
                            </h2>
                            <p className="text-sm sm:text-base text-slate-400 mb-8 max-w-xl mx-auto">
                                Share your current CMS and pain points, and we’ll explore how to
                                make publishing easier for your team.
                            </p>
                            <Link href="/contact">
                                <button className="inline-flex items-center gap-2 rounded-lg bg-indigo-400 px-6 py-3 text-sm sm:text-base font-semibold text-slate-950 hover:bg-indigo-300 transition-colors">
                                    Start a CMS conversation
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