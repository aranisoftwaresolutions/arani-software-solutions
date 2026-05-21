"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import {
    Copyright,
    FileText,
    AlertCircle,
    Shield,
    Scale,
    Mail,
    ArrowLeft,
    ChevronRight,
    CheckCircle,
} from "lucide-react";
import Footer from "@/components/sections/footer";

type SectionConfig = {
    id: string;
    icon:
    | typeof Copyright
    | typeof Shield
    | typeof FileText
    | typeof AlertCircle
    | typeof Scale
    | typeof CheckCircle;
    title: string;
    content: string;
};

const sections: SectionConfig[] = [
    {
        id: "ownership",
        icon: Copyright,
        title: "Ownership of content",
        content:
            "All content on Arani Software Solutions’ website and platforms is protected by copyright and other intellectual property laws. This includes text, images, graphics, logos, code, designs, and other materials, whether owned by Arani Software Solutions or used under license.",
    },
    {
        id: "use-of-materials",
        icon: Shield,
        title: "Use of materials",
        content:
            "Content from our platforms may not be copied, modified, or redistributed for commercial purposes without written permission. Limited personal, non‑commercial use is allowed, such as viewing or printing a single copy for reference.",
    },
    {
        id: "user-content",
        icon: FileText,
        title: "User‑generated content",
        content:
            "By submitting content to our services, you grant Arani Software Solutions a license to use it in connection with operating and improving our services. You are responsible for ensuring that your submissions do not infringe the rights of others.",
    },
    {
        id: "reporting-infringement",
        icon: AlertCircle,
        title: "Reporting copyright infringement",
        content:
            "If you believe your work has been used on our platforms without authorization, you can send a notice with relevant details (including your contact information, a description of the work, and the location of the material) so it can be reviewed.",
    },
    {
        id: "dmca-compliance",
        icon: Scale,
        title: "DMCA compliance",
        content:
            "Arani Software Solutions follows procedures consistent with the Digital Millennium Copyright Act (DMCA) for handling notices and counter‑notices regarding alleged infringement.",
    },
    {
        id: "response-removal",
        icon: CheckCircle,
        title: "Response and removal process",
        content:
            "When a valid notice is received, we may remove or disable access to the material, notify the user who posted it, and offer the opportunity to respond where appropriate under applicable law.",
    },
    {
        id: "counter-notification",
        icon: FileText,
        title: "Counter‑notification procedure",
        content:
            "If you believe material was removed in error, you may submit a counter‑notification with the information required under the DMCA so the matter can be reassessed.",
    },
    {
        id: "trademark-protection",
        icon: Shield,
        title: "Trademark protection",
        content:
            "Our trademarks, service marks, and logos may not be used without permission, except as necessary to fairly identify our products or services.",
    },
    {
        id: "software-licensing",
        icon: Copyright,
        title: "Software and code licensing",
        content:
            "Software and code supplied by Arani Software Solutions are licensed, not sold, under their respective license terms. Reverse engineering or use to build competing services is not permitted unless explicitly allowed in writing.",
    },
    {
        id: "fair-use",
        icon: Scale,
        title: "Fair use and educational purposes",
        content:
            "Some uses of content may qualify as fair use under applicable law. Fair use is context‑dependent and evaluated on multiple factors. You are encouraged to seek permission or legal advice if unsure.",
    },
    {
        id: "international-copyright",
        icon: Shield,
        title: "International copyright",
        content:
            "Our content may be protected in multiple countries under international treaties. Users outside the United States are still required to respect applicable copyright laws.",
    },
    {
        id: "policy-updates",
        icon: AlertCircle,
        title: "Policy updates",
        content:
            "This policy may be updated from time to time. Continued use of our services after changes are posted means you accept the updated terms.",
    },
];

const tableOfContents = sections.map((section) => ({
    id: section.id,
    label: section.title,
}));

export default function CopyrightPolicy() {
    const [activeSection, setActiveSection] = useState<string>("");

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 180;
            for (let i = sections.length - 1; i >= 0; i--) {
                const el = document.getElementById(sections[i].id);
                if (el && el.offsetTop <= scrollPosition) {
                    setActiveSection(sections[i].id);
                    break;
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const el = document.getElementById(id);
        if (!el) return;
        const offset = 100;
        const top = el.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: "smooth" });
    };

    return (
        <>
            <main className="bg-slate-950 text-white min-h-screen pt-28 sm:pt-32 pb-16">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    {/* Back link */}
                    <div className="mb-6">
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-sky-400 transition-colors"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            <span>Back to home</span>
                        </Link>
                    </div>

                    {/* Header */}
                    <header className="mb-10 sm:mb-12 text-center">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-3">
                            Copyright policy
                        </h1>
                        <p className="text-sm text-slate-400">
                            Protecting intellectual property and explaining how content on our
                            services may be used.
                        </p>
                        <p className="text-xs text-slate-500 mt-3">
                            Effective date: January 12, 2026
                        </p>
                    </header>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        {/* Sidebar TOC */}
                        <aside className="lg:col-span-3">
                            <div className="lg:sticky lg:top-28 rounded-xl border border-slate-800 bg-slate-900 p-5">
                                <h2 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                                    <Copyright className="w-4 h-4 text-sky-400" />
                                    Contents
                                </h2>
                                <nav className="space-y-1">
                                    {tableOfContents.map((item) => (
                                        <button
                                            key={item.id}
                                            type="button"
                                            onClick={() => scrollToSection(item.id)}
                                            className={`w-full text-left rounded-lg px-3 py-2 text-xs flex items-center justify-between transition-colors ${activeSection === item.id
                                                ? "bg-slate-800 text-white"
                                                : "text-slate-400 hover:bg-slate-900 hover:text-white"
                                                }`}
                                        >
                                            <span>{item.label}</span>
                                            <ChevronRight
                                                className={`w-3 h-3 ${activeSection === item.id ? "opacity-100" : "opacity-60"
                                                    }`}
                                            />
                                        </button>
                                    ))}
                                </nav>

                                <div className="mt-5 rounded-lg border border-amber-500/40 bg-amber-500/5 p-4 text-xs">
                                    <div className="flex items-start gap-2">
                                        <AlertCircle className="w-4 h-4 text-amber-400 mt-0.5" />
                                        <div>
                                            <p className="font-semibold text-white mb-1">
                                                Report possible infringement
                                            </p>
                                            <p className="text-slate-300 mb-1">
                                                For notices about content on our services:
                                            </p>
                                            <a
                                                href="mailto:contact@arani.soft.solutions"
                                                className="text-amber-300 hover:text-amber-200 transition-colors"
                                            >
                                                contact@arani.soft.solutions
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </aside>

                        {/* Main content */}
                        <section className="lg:col-span-9 space-y-6">
                            {sections.map((section) => {
                                const Icon = section.icon;
                                return (
                                    <article
                                        key={section.id}
                                        id={section.id}
                                        className="rounded-xl border border-slate-800 bg-slate-900 p-5 sm:p-6"
                                    >
                                        <div className="flex items-start gap-3 mb-3">
                                            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-800 border border-slate-700 flex-shrink-0">
                                                <Icon className="w-4 h-4 text-sky-400" />
                                            </div>
                                            <div>
                                                <h2 className="text-base sm:text-lg font-semibold text-white mb-1">
                                                    {section.title}
                                                </h2>
                                                <div className="h-0.5 w-12 bg-sky-500 rounded-full" />
                                            </div>
                                        </div>
                                        <p className="text-sm text-slate-300 leading-relaxed">
                                            {section.content}
                                        </p>
                                    </article>
                                );
                            })}

                            {/* Contact for copyright questions */}
                            <article className="rounded-xl border border-slate-800 bg-slate-900 p-5 sm:p-6">
                                <div className="flex items-start gap-3 mb-3">
                                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-800 border border-slate-700 flex-shrink-0">
                                        <Mail className="w-4 h-4 text-sky-400" />
                                    </div>
                                    <div>
                                        <h2 className="text-base sm:text-lg font-semibold text-white mb-1">
                                            Questions about this policy
                                        </h2>
                                    </div>
                                </div>
                                <p className="text-sm text-slate-300 mb-3">
                                    For questions about this policy or how it applies, you can
                                    contact our team:
                                </p>
                                <div className="grid sm:grid-cols-2 gap-3 text-sm">
                                    <div>
                                        <p className="font-semibold text-white mb-1">
                                            General copyright
                                        </p>
                                        <a
                                            href="mailto:contact@arani.soft.solutions"
                                            className="text-sky-400 hover:text-sky-300 transition-colors"
                                        >
                                            contact@arani.soft.solutions
                                        </a>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-white mb-1">
                                            DMCA notices
                                        </p>
                                        <a
                                            href="mailto:contact@arani.soft.solutions"
                                            className="text-sky-400 hover:text-sky-300 transition-colors"
                                        >
                                            contact@arani.soft.solutions
                                        </a>
                                    </div>
                                </div>
                            </article>
                        </section>
                    </div>
                </div>
            </main>

            <Footer />
        </>
    );
}