"use client";

import { CALENDLY_URL } from "@/lib/calendly";
import {
    Palette,
    Code2,
    Layers,
    Monitor,
    ShoppingCart,
    FileText,
    ArrowRight,
    Calendar,
} from "lucide-react";
import Link from "next/link";


const services = [
    {
        icon: Palette,
        title: "UI & UX Design",
        description:
            "Intuitive UI/UX design that delights users and drives engagement.",
        link: "/services/ui-ux-design",
        features: [
            "User-centered design approach for maximum engagement",
            "Wireframes, prototypes, and interactive mockups",
            "Responsive designs that work on all devices",
        ],
        accent: "text-pink-400",
        border: "hover:border-pink-500/40",
    },
    {
        icon: Layers,
        title: "No-Code App Development",
        description:
            "Launch mobile and web apps rapidly without traditional coding—ideal for startups and entrepreneurs.",
        link: "/services/no-code-app-web-development",
        features: [
            "Build MVPs in weeks, not months",
            "Cost-effective solutions for startups",
            "Easy updates and maintenance",
        ],
        accent: "text-amber-400",
        border: "hover:border-amber-500/40",
    },
    {
        icon: Code2,
        title: "Full Stack Development",
        description:
            "End-to-end development services covering front-end, back-end, and everything in between.",
        link: "/services/full-stack-development",
        features: [
            "Modern tech stack with React, Node.js, Next.js",
            "Scalable architecture for growing businesses",
            "API integration and database optimization",
        ],
        accent: "text-sky-400",
        border: "hover:border-sky-500/40",
    },
    {
        icon: Monitor,
        title: "Computer Application Development",
        description:
            "Tailored desktop software solutions to streamline your business operations and improve productivity.",
        link: "/services/computer-application-development",
        features: [
            "Custom desktop apps for Windows, Mac, Linux",
            "Process automation and workflow optimization",
            "Seamless integration with existing systems",
        ],
        accent: "text-violet-400",
        border: "hover:border-violet-500/40",
    },
    {
        icon: ShoppingCart,
        title: "E-commerce Strategy Projects",
        description:
            "Strategic planning and execution for online stores that convert and scale.",
        link: "/services/ecommerce-strategy",
        features: [
            "Platform selection and setup (Shopify, WooCommerce)",
            "Conversion optimization strategies",
            "Payment gateway and inventory management",
        ],
        accent: "text-emerald-400",
        border: "hover:border-emerald-500/40",
    },
    {
        icon: FileText,
        title: "Content Management Systems",
        description:
            "Robust CMS solutions for easy content publishing and management.",
        link: "/services/content-management",
        features: [
            "WordPress, Strapi, Contentful implementations",
            "Custom admin dashboards",
            "SEO-optimized content architecture",
        ],
        accent: "text-purple-400",
        border: "hover:border-purple-500/40",
    },
];

export default function ServicesGrid() {
    const openCalendly = () => {
        if ((window as any).Calendly) {
            (window as any).Calendly.initPopupWidget({ url: CALENDLY_URL });
        }
    };

    return (
        <section className="bg-slate-950 py-20 sm:py-2 px-4 sm:px-6">
            <div className="max-w-7xl mx-auto">

                {/* Section Header */}
                <div className="mb-12 sm:mb-16">
                    <span className="inline-block rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-xs font-medium tracking-wide text-slate-300 uppercase mb-4">
                        Our Services
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                        Premium Solutions for{" "}
                        <span className="text-sky-400">Your Business</span>
                    </h2>
                    <p className="text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed">
                        From design to deployment, we deliver world-class services that
                        transform your ideas into reality.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                    {services.map((service) => (
                        <Link
                            key={service.title}
                            href={service.link}
                            className={`group flex flex-col rounded-xl border border-slate-800 bg-slate-900 p-6 transition-colors duration-150 ${service.border}`}
                        >
                            {/* Icon */}
                            <div className="mb-5">
                                <service.icon
                                    className={`w-7 h-7 ${service.accent}`}
                                    strokeWidth={1.75}
                                />
                            </div>

                            {/* Title & Description */}
                            <h3 className="text-base font-semibold text-white mb-2">
                                {service.title}
                            </h3>
                            <p className="text-sm text-slate-400 leading-relaxed mb-5">
                                {service.description}
                            </p>

                            {/* Features */}
                            <ul className="space-y-2 mb-6 flex-1">
                                {service.features.map((feature) => (
                                    <li
                                        key={feature}
                                        className="flex items-start gap-2 text-sm text-slate-400"
                                    >
                                        <span
                                            className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-current ${service.accent}`}
                                        />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            {/* Footer: CTA */}
                            <div className="flex items-end justify-between border-t border-slate-800 pt-4 mt-auto">
                                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 group-hover:text-white transition-colors">
                                    View Details
                                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* CTA — Calendly popup */}
                <div className="mt-14 sm:mt-16 text-center">
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                        {/* Primary — opens Calendly */}
                        <button
                            type="button"
                            onClick={openCalendly}
                            className="inline-flex items-center gap-2 rounded-md bg-sky-500 px-6 py-3 text-sm font-semibold text-slate-950 hover:bg-sky-400 transition-colors duration-150"
                        >
                            <Calendar className="w-4 h-4" />
                            Book a Free Consultation
                        </button>

                    </div>

                    <p className="mt-4 text-xs text-slate-500">
                        Free consultation · 24/7 support · 100% satisfaction guarantee
                    </p>
                </div>

            </div>
        </section>
    );
}