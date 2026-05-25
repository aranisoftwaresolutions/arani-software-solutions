"use client";

import {
    Palette,
    Users,
    Target,
    Zap,
    CheckCircle,
    Award,
    ArrowRight,
    Star,
    Calendar,
} from "lucide-react";
import Footer from "@/components/sections/footer";
import Link from "next/link";
import { CALENDLY_URL } from "@/lib/calendly";


const solutions = [
    {
        title: "User Research",
        desc: "In-depth interviews, surveys, and analytics to uncover real user needs.",
        icon: Users,
    },
    {
        title: "Wireframing & Prototyping",
        desc: "Low and high-fidelity wireframes to validate structure before development.",
        icon: Target,
    },
    {
        title: "Visual Design",
        desc: "Pixel-perfect mockups with consistent branding and accessible color palettes.",
        icon: Palette,
    },
    {
        title: "Interaction Design",
        desc: "Micro-interactions and flows that guide users clearly through the product.",
        icon: Zap,
    },
    {
        title: "Usability Testing",
        desc: "Real-user feedback sessions to refine journeys and reduce friction.",
        icon: CheckCircle,
    },
    {
        title: "Design Systems",
        desc: "Scalable component libraries and style guides for consistent builds.",
        icon: Award,
    },
];

const process = [
    {
        step: "Discovery & Research",
        desc: "Stakeholder workshops and user interviews to define goals and pain points.",
    },
    {
        step: "Wireframes & Flows",
        desc: "User journeys and layouts that map out navigation and key interactions.",
    },
    {
        step: "Visual Mockups",
        desc: "High-fidelity designs that reflect your brand and speak to your users.",
    },
    {
        step: "Prototype & Test",
        desc: "Interactive prototypes tested with users, iterating based on feedback.",
    },
    {
        step: "Handoff & Support",
        desc: "Developer-ready specs and ongoing design QA for accurate implementation.",
    },
];

const projects = [
    {
        title: "Fintech Dashboard",
        desc: "Clean, data-driven interface for managing investments on the go.",
        impact: "45% faster tasks",
    },
    {
        title: "Health App",
        desc: "User-centric mobile experience for tracking wellness and appointments.",
        impact: "4.8★ rating",
    },
    {
        title: "E-commerce UX Revamp",
        desc: "Streamlined checkout flow that significantly improved conversions.",
        impact: "25% conversion uplift",
    },
];

const faq = [
    {
        q: "How long does the UI/UX process take?",
        a: "Typical engagements range from 4–8 weeks depending on scope, research depth, and number of screens.",
    },
    {
        q: "Do you share design files and specs?",
        a: "Yes. We provide Figma or Sketch files, plus developer handoff with clear specs and annotations.",
    },
    {
        q: "Can you work with our existing brand guidelines?",
        a: "Absolutely. We align with your existing colors, typography, and voice to keep everything consistent.",
    },
];

export default function UIUXDesignPage() {
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
                            <Palette className="w-4 h-4" />
                            UI & UX Design Services
                        </span>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-5">
                            Intuitive design that <span className="text-sky-400">users enjoy</span>
                        </h1>

                        <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto mb-8">
                            Creating clear, usable interfaces through research, wireframing, prototyping,
                            and visual design to deliver experiences that feel natural and convert.
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
                            Our UI/UX solutions
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

                {/* Process */}
                <section className="border-t border-slate-800 bg-slate-900 px-4 sm:px-6 py-16 sm:py-20">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 sm:mb-12">
                            Our design process
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
                            UI/UX FAQ
                        </h2>
                        <div className="space-y-4">
                            {faq.map((item) => (
                                <div
                                    key={item.q}
                                    className="rounded-xl border border-slate-800 bg-slate-950 px-5 py-4 sm:px-6 sm:py-5"
                                >
                                    <h3 className="text-sm sm:text-base font-semibold text-white mb-2">
                                        {item.q}
                                    </h3>
                                    <p className="text-sm text-slate-400 leading-relaxed">
                                        {item.a}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="px-4 sm:px-6 py-16 sm:py-20">
                    <div className="max-w-4xl mx-auto">
                        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8 sm:p-10 text-center">
                            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                                Ready to improve your product’s UX?
                            </h2>
                            <p className="text-sm sm:text-base text-slate-400 mb-8 max-w-xl mx-auto">
                                Share your goals and current product, and we’ll help you design an
                                experience that feels clear, modern, and easy to use.
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