"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import {
    Shield,
    Lock,
    Eye,
    Database,
    Cookie,
    UserCheck,
    Bell,
    Globe,
    ArrowLeft,
    ChevronRight,
    Mail,
} from "lucide-react";
import Footer from "@/components/sections/footer";

type SectionConfig = {
    id: string;
    icon:
    | typeof Shield
    | typeof Lock
    | typeof Eye
    | typeof Database
    | typeof Cookie
    | typeof UserCheck
    | typeof Bell
    | typeof Globe;
    title: string;
    content: string;
};

const sections: SectionConfig[] = [
    {
        id: "introduction",
        icon: Shield,
        title: "Introduction",
        content:
            "Arani Software Solutions is committed to protecting your privacy. This policy explains how we collect, use, store, and share information when you use our websites, products, and services.",
    },
    {
        id: "information-collect",
        icon: Database,
        title: "Information we collect",
        content:
            "We collect information you provide directly (such as name, email, company details, and payment data) and information collected automatically (such as IP address, device info, browser type, pages visited, and usage patterns). If enabled, we may also process approximate location data.",
    },
    {
        id: "how-we-use",
        icon: Eye,
        title: "How we use your information",
        content:
            "We use your information to deliver and improve our services, process payments, provide support, communicate with you, analyze usage, secure our systems, comply with legal obligations, and develop new features.",
    },
    {
        id: "sharing-info",
        icon: UserCheck,
        title: "Sharing of information",
        content:
            "We do not sell your personal data. We share it with trusted providers (for example hosting, analytics, and payment processors) who help us operate our services, and when required by law or to protect our rights.",
    },
    {
        id: "cookies",
        icon: Cookie,
        title: "Cookies and tracking technologies",
        content:
            "We use cookies and similar technologies to remember preferences, keep sessions active, and understand how our services are used. You can control cookies in your browser, but some features may not work correctly if they are disabled.",
    },
    {
        id: "data-security",
        icon: Lock,
        title: "Data security",
        content:
            "We use technical and organizational measures such as encryption in transit, access controls, and regular reviews to help protect personal data. No system is completely secure, so we cannot guarantee absolute security.",
    },
    {
        id: "your-rights",
        icon: UserCheck,
        title: "Your rights",
        content:
            "Depending on your location, you may have rights such as access, correction, deletion, restriction, objection, data portability, and withdrawal of consent. You can contact us to exercise these rights where they apply.",
    },
    {
        id: "data-retention",
        icon: Database,
        title: "Data retention",
        content:
            "We keep personal data only as long as needed for the purposes described in this policy, or as required by law. When no longer needed, data is deleted or anonymized where appropriate.",
    },
    {
        id: "international-transfers",
        icon: Globe,
        title: "International data transfers",
        content:
            "Your information may be processed in countries other than where you live. When we transfer data internationally, we use appropriate safeguards permitted under applicable data protection laws.",
    },
    {
        id: "children-privacy",
        icon: Shield,
        title: "Children’s privacy",
        content:
            "Our services are not intended for children under 18 (or the applicable age of majority). We do not knowingly collect data from children. If you believe we have, please contact us so it can be removed.",
    },
    {
        id: "changes-policy",
        icon: Bell,
        title: "Changes to this policy",
        content:
            "We may update this policy from time to time. We will note the effective date and, for significant changes, provide additional notice. Continued use of our services after changes take effect means you accept the updated policy.",
    },
    {
        id: "gdpr-compliance",
        icon: Shield,
        title: "GDPR and data protection compliance",
        content:
            "For users in the EEA, UK, and Switzerland, we process personal data under legal bases such as consent, contractual necessity, legal obligation, and legitimate interests. You can contact our data protection contact for questions or concerns.",
    },
];

const tableOfContents = sections.map((section) => ({
    id: section.id,
    label: section.title,
}));

export default function PrivacyPolicy() {
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
                            Privacy policy
                        </h1>
                        <p className="text-sm text-slate-400 max-w-2xl mx-auto">
                            How Arani Software Solutions collects, uses, and protects your
                            information when you use our services.
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
                                    <Shield className="w-4 h-4 text-sky-400" />
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

                                <div className="mt-5 rounded-lg border border-sky-500/40 bg-sky-500/5 p-4 text-xs">
                                    <div className="flex items-start gap-2">
                                        <Mail className="w-4 h-4 text-sky-400 mt-0.5" />
                                        <div>
                                            <p className="font-semibold text-white mb-1">
                                                Privacy questions
                                            </p>
                                            <p className="text-slate-300 mb-1">
                                                For privacy or data protection inquiries:
                                            </p>
                                            <a
                                                href="mailto:privacy@aranisoftware.com"
                                                className="text-sky-300 hover:text-sky-200 transition-colors"
                                            >
                                                privacy@aranisoftware.com
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

                            {/* Extra contact / GDPR */}
                            <article className="rounded-xl border border-slate-800 bg-slate-900 p-5 sm:p-6">
                                <div className="flex items-start gap-3 mb-3">
                                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-800 border border-slate-700 flex-shrink-0">
                                        <Mail className="w-4 h-4 text-sky-400" />
                                    </div>
                                    <div>
                                        <h2 className="text-base sm:text-lg font-semibold text-white mb-1">
                                            Contact details
                                        </h2>
                                    </div>
                                </div>
                                <p className="text-sm text-slate-300 mb-3">
                                    If you have questions about this policy or how your data is
                                    handled, you can reach us at:
                                </p>
                                <div className="grid sm:grid-cols-2 gap-3 text-sm">
                                    <div>
                                        <p className="font-semibold text-white mb-1">
                                            General privacy
                                        </p>
                                        <a
                                            href="mailto:privacy@aranisoftware.com"
                                            className="text-sky-400 hover:text-sky-300 transition-colors"
                                        >
                                            privacy@aranisoftware.com
                                        </a>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-white mb-1">
                                            Data protection contact
                                        </p>
                                        <a
                                            href="mailto:dpo@aranisoftware.com"
                                            className="text-sky-400 hover:text-sky-300 transition-colors"
                                        >
                                            dpo@aranisoftware.com
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