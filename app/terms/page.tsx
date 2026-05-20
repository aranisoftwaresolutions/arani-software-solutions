"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
    FileText,
    Scale,
    AlertTriangle,
    CheckCircle,
    XCircle,
    Shield,
    Users,
    Lock,
    ArrowLeft,
    ChevronRight,
    Mail,
} from "lucide-react";
import Footer from "@/components/sections/footer";

type SectionConfig = {
    id: string;
    icon:
    | typeof FileText
    | typeof Scale
    | typeof AlertTriangle
    | typeof CheckCircle
    | typeof XCircle
    | typeof Shield
    | typeof Users
    | typeof Lock;
    title: string;
    content: string;
};

const sections: SectionConfig[] = [
    {
        id: "overview",
        icon: FileText,
        title: "Overview",
        content:
            "By accessing or using Arani Software Solutions’ websites, applications, and services, you agree to these Terms of Service, which define the relationship between you and Arani Software Solutions.",
    },
    {
        id: "eligibility",
        icon: Users,
        title: "Eligibility",
        content:
            "You must be at least 18 years old, or the age of majority in your jurisdiction, and have legal authority to enter into agreements. If you use our services on behalf of an organization, you confirm that you are authorized to bind that organization.",
    },
    {
        id: "user-responsibilities",
        icon: Shield,
        title: "User responsibilities",
        content:
            "You are responsible for actions taken under your account. You agree to keep your credentials secure, comply with applicable laws, respect intellectual property rights, and avoid activities that could harm our services or other users.",
    },
    {
        id: "intellectual-property",
        icon: Lock,
        title: "Intellectual property",
        content:
            "All content, software, trademarks, and other materials on our services are owned by Arani Software Solutions or its licensors. You may not copy, distribute, modify, or create derivative works without written permission.",
    },
    {
        id: "service-usage",
        icon: CheckCircle,
        title: "Acceptable use policy",
        content:
            "You may not use our services to transmit spam or malware, attempt unauthorized access, interfere with service availability, collect data without consent, impersonate others, or violate laws or third-party rights.",
    },
    {
        id: "payment-terms",
        icon: Scale,
        title: "Payment and billing",
        content:
            "Fees are typically charged in advance under your selected plan or agreement. Late or unpaid invoices may lead to suspension or termination of services, in line with the payment terms that apply to your account.",
    },
    {
        id: "data-usage",
        icon: Shield,
        title: "Data collection and use",
        content:
            "We collect and process data in accordance with our Privacy Policy. You retain ownership of your content while granting us a limited license to use it as needed to operate and improve the services.",
    },
    {
        id: "termination",
        icon: XCircle,
        title: "Termination",
        content:
            "We may suspend or terminate access if you violate these terms or if needed to protect our services or users. You may stop using the services at any time. After termination, access to your account may be disabled in line with our data policies.",
    },
    {
        id: "disclaimers",
        icon: AlertTriangle,
        title: "Disclaimers and limitation of liability",
        content:
            "The services are provided “as is” and “as available,” without warranties that are not expressly stated. To the extent permitted by law, our liability is limited to the amount you paid us during a defined look-back period before a claim.",
    },
    {
        id: "indemnification",
        icon: Shield,
        title: "Indemnification",
        content:
            "You agree to indemnify and hold harmless Arani Software Solutions and its personnel from claims arising out of your use of the services, violation of these terms, or infringement of third-party rights.",
    },
    {
        id: "modifications",
        icon: FileText,
        title: "Changes to these terms",
        content:
            "We may update these terms from time to time. If we make material changes, we will provide notice. Continued use of the services after changes take effect means you accept the updated terms.",
    },
    {
        id: "governing-law",
        icon: Scale,
        title: "Governing law and dispute resolution",
        content:
            "These terms are governed by applicable laws specified for your agreement. Disputes may be resolved through arbitration or other mechanisms described in the version of the terms that applies to you.",
    },
];

const tableOfContents = sections.map((section) => ({
    id: section.id,
    label: section.title,
}));

export default function TermsOfService() {
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
                            Terms of service
                        </h1>
                        <p className="text-sm text-slate-400 max-w-2xl mx-auto">
                            Please read these terms carefully. By using Arani Software
                            Solutions’ services, you agree to the conditions below.
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
                                    <FileText className="w-4 h-4 text-sky-400" />
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
                                        <AlertTriangle className="w-4 h-4 text-amber-400 mt-0.5" />
                                        <div>
                                            <p className="font-semibold text-white mb-1">
                                                Important notice
                                            </p>
                                            <p className="text-slate-300">
                                                These terms affect your legal rights. Consider reviewing
                                                them with a legal advisor if needed.
                                            </p>
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

                            {/* Contact section */}
                            <article className="rounded-xl border border-slate-800 bg-slate-900 p-5 sm:p-6">
                                <div className="flex items-start gap-3 mb-3">
                                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-800 border border-slate-700 flex-shrink-0">
                                        <Mail className="w-4 h-4 text-sky-400" />
                                    </div>
                                    <div>
                                        <h2 className="text-base sm:text-lg font-semibold text-white mb-1">
                                            Questions about these terms
                                        </h2>
                                    </div>
                                </div>
                                <p className="text-sm text-slate-300 mb-3">
                                    If you have questions about this Terms of Service page, you
                                    can contact our support team:
                                </p>
                                <a
                                    href="mailto:support@aranisoftware.com"
                                    className="text-sm text-sky-400 hover:text-sky-300 transition-colors"
                                >
                                    support@aranisoftware.com
                                </a>
                            </article>
                        </section>
                    </div>
                </div>
            </main>

            <Footer />
        </>
    );
}