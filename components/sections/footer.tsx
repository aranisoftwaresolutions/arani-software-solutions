"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone, Linkedin, Twitter, ArrowRight } from "lucide-react";

const footerLinks = {
    Company: [
        { name: "About Us", href: "/about" },
        { name: "Careers", href: "/careers" },
        { name: "Blog", href: "/blog" },
        { name: "Press Kit", href: "/press" },
    ],
    Services: [
        { name: "UI & UX Design", href: "/services/computer-application-development" },
        { name: "App Development", href: "/services/no-code-app-web-development" },
        { name: "Full Stack Dev", href: "/services/full-stack-development" },
        { name: "Desktop Application", href: "/services/computer-application-development" },
        { name: "E-commerce Strategy", href: "/services/ecommerce-strategy" },
        { name: "CMS", href: "/services/content-management" },
    ],
    Legal: [
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
        { name: "Copyright", href: "/copyright" },
    ],
};

const socialLinks = [
    { icon: Linkedin, href: "https://linkedin.com/company/arani-software", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com/arani-software", label: "Twitter" },
];

const contactItems = [
    { icon: Mail, text: "contact@arani.soft.solutions", href: "mailto:contact@arani.soft.solutions" },
    { icon: Phone, text: "+91 7908181575", href: "tel:+917908181575" },
    { icon: MapPin, text: "Nawada Bihar, India", href: "https://maps.google.com" },
];

export default function Footer() {
    return (
        <footer className="bg-slate-900 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-16">


                {/* ── Main grid ── */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-10 mb-12">

                    {/* Brand */}
                    <div className="lg:col-span-2 space-y-5">
                        <Link href="/" className="inline-flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 overflow-hidden flex items-center justify-center">
                                <Image
                                    src="/logo/arani.png"
                                    alt="Arani Software"
                                    width={32}
                                    height={32}
                                    className="object-contain"
                                    unoptimized
                                />
                            </div>
                            <span className="text-base font-bold text-white">
                                Arani Software Solutions
                            </span>
                        </Link>

                        <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
                            Engineering the future with modern software architecture, AI
                            automation, and cloud-native solutions.
                        </p>

                        <div className="flex gap-2">
                            {socialLinks.map((s) => (
                                <a
                                    key={s.label}
                                    href={s.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={s.label}
                                    className="inline-flex items-center justify-center w-9 h-9 rounded-lg border border-slate-700 bg-slate-800 text-slate-400 hover:text-white hover:border-slate-500 transition-colors"
                                >
                                    <s.icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Link columns */}
                    {Object.entries(footerLinks).map(([category, links]) => (
                        <div key={category}>
                            <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-widest mb-4">
                                {category}
                            </h4>
                            <ul className="space-y-2.5">
                                {links.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="text-sm text-slate-400 hover:text-white transition-colors"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* ── Contact row ── */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 rounded-xl border border-slate-800 bg-slate-800/50 p-5 sm:p-6">
                    {contactItems.map((item) => (
                        <a
                            key={item.text}
                            href={item.href}
                            className="flex items-center gap-3 text-sm text-slate-300 hover:text-white transition-colors"
                        >
                            <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-slate-700 flex items-center justify-center">
                                <item.icon className="w-4 h-4 text-sky-400" />
                            </span>
                            {item.text}
                        </a>
                    ))}
                </div>

                {/* ── Bottom bar ── */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-slate-800 pt-6">
                    <p className="text-xs text-slate-500">
                        © {new Date().getFullYear()} Arani Software Solutions. All rights
                        reserved.
                    </p>
                    <p className="text-xs text-slate-500">
                        Engineered with ♥ for excellence
                    </p>
                </div>

            </div>
        </footer>
    );
}