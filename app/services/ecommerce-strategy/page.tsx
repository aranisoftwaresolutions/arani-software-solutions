"use client";

import {
    ShoppingCart,
    TrendingUp,
    CreditCard,
    Users,
    BarChart3,
    Smartphone,
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
        title: "Market analysis",
        desc: "Research competitors, audience, and trends to position your store clearly.",
        icon: BarChart3,
    },
    {
        title: "Conversion optimization",
        desc: "Reduce friction in the funnel to lower abandonment and increase conversions.",
        icon: TrendingUp,
    },
    {
        title: "Mobile commerce",
        desc: "Mobile‑first UX so buying is easy on phones and tablets.",
        icon: Smartphone,
    },
    {
        title: "Payment integration",
        desc: "Secure, multi‑currency payment gateways with fraud checks and compliance.",
        icon: CreditCard,
    },
    {
        title: "Customer retention",
        desc: "Loyalty, email, and personalized recommendations to keep customers returning.",
        icon: Users,
    },
    {
        title: "Platform selection",
        desc: "Help choosing between Shopify, WooCommerce, Magento, and others.",
        icon: ShoppingCart,
    },
];

const process = [
    {
        step: "Discovery & research",
        desc: "Analyze market, competitors, and customer segments to spot opportunities and risks.",
    },
    {
        step: "Strategy development",
        desc: "Create an e‑commerce strategy aligned with your brand and targets.",
    },
    {
        step: "Implementation",
        desc: "Set up the store, flows, and tools with current best practices.",
    },
    {
        step: "Optimization & growth",
        desc: "Ongoing measurement, testing, and adjustments to keep improving results.",
    },
];

const platforms = [
    { name: "Shopify", desc: "All‑in‑one platform" },
    { name: "WooCommerce", desc: "WordPress‑based stores" },
    { name: "Magento", desc: "Enterprise‑grade solution" },
    { name: "BigCommerce", desc: "Hosted, scalable stores" },
    { name: "Stripe", desc: "Payment processing" },
    { name: "PayPal", desc: "Global payment method" },
];

const caseStudies = [
    {
        title: "Fashion retailer transformation",
        challenge: "Outdated platform with high abandonment and slow checkout.",
        solution: "Migration to Shopify Plus with simplified UX and faster checkout.",
        result: "40% conversion lift, 60% faster checkout, and 2x mobile sales.",
    },
    {
        title: "B2B manufacturing portal",
        challenge: "Complex bulk orders, custom pricing, and manual processes.",
        solution: "Custom WooCommerce build with integrations and automation.",
        result: "70% efficiency gain and 50% fewer support tickets.",
    },
];

const projects = [
    {
        title: "Multi‑vendor marketplace",
        desc: "Marketplace connecting hundreds of sellers with smart product matching.",
        impact: "200+ vendors",
    },
    {
        title: "Subscription box service",
        desc: "Recurring billing and automated fulfillment for curated boxes.",
        impact: "5k subscribers",
    },
    {
        title: "International expansion",
        desc: "Multi‑currency, multi‑language store for multiple regions.",
        impact: "12 countries",
    },
];

const keyMetrics = [
    { metric: "Conversion rate", target: "3–5%", desc: "Healthy store benchmark." },
    { metric: "Cart abandonment", target: "<70%", desc: "Improved checkout flow." },
    { metric: "Page load time", target: "<3s", desc: "Performance and speed." },
    { metric: "Mobile traffic", target: "60%+", desc: "Mobile‑first audience." },
    { metric: "Customer LTV", target: "3× AOV", desc: "Retention and upsell." },
    { metric: "Return rate", target: "<5%", desc: "Product and expectations aligned." },
];

const faq = [
    {
        q: "Which e‑commerce platform is right for us?",
        a: "Shopify is usually best for quick setup, WooCommerce works well if you are on WordPress, and Magento fits large, heavily customized stores.",
    },
    {
        q: "How long does it take to launch a store?",
        a: "A full‑featured store typically takes 4–8 weeks including design, setup, and payment integration.",
    },
    {
        q: "Do you provide support after launch?",
        a: "Yes. Maintenance, monitoring, updates, and optimization are available as ongoing work.",
    },
    {
        q: "Can you help with digital marketing?",
        a: "Yes. SEO, paid ads, email, and conversion optimization can be planned alongside the store.",
    },
];

export default function EcommerceStrategyPage() {
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
                            <ShoppingCart className="w-4 h-4" />
                            E‑commerce strategy
                        </span>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-5">
                            Scale your store{" "}
                            <span className="text-rose-400">with a clear strategy</span>
                        </h1>

                        <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto mb-8">
                            Strategy, setup, and optimization for online stores that convert
                            better and grow steadily across web and mobile.
                        </p>

                        <div className="flex flex-wrap justify-center gap-4">
                            <button
                                type="button"
                                onClick={openCalendly}
                                className="inline-flex items-center gap-2 rounded-lg bg-rose-400 px-6 py-3 text-sm sm:text-base font-semibold text-slate-950 hover:bg-rose-300 transition-colors"
                            >
                                <Calendar className="w-4 h-4" />
                                Talk about your store
                            </button>
                        </div>
                    </div>
                </section>

                {/* Solutions */}
                <section className="px-4 sm:px-6 pb-16 sm:pb-20">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 sm:mb-12">
                            E‑commerce solutions
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
                                            <Icon className="w-6 h-6 text-rose-400" />
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

                {/* Key metrics */}
                <section className="border-t border-slate-800 bg-slate-900 px-4 sm:px-6 py-16 sm:py-20">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 sm:mb-12">
                            Performance metrics
                        </h2>

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                            {keyMetrics.map((item) => (
                                <div
                                    key={item.metric}
                                    className="rounded-xl border border-slate-800 bg-slate-950 p-5 text-center"
                                >
                                    <div className="text-lg font-semibold text-rose-300 mb-1">
                                        {item.target}
                                    </div>
                                    <p className="text-xs font-semibold text-white mb-1">
                                        {item.metric}
                                    </p>
                                    <p className="text-xs text-slate-400">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Platforms */}
                <section className="px-4 sm:px-6 py-16 sm:py-20">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 sm:mb-12">
                            Platforms we work with
                        </h2>

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                            {platforms.map((platform) => (
                                <div
                                    key={platform.name}
                                    className="rounded-xl border border-slate-800 bg-slate-900 p-4 text-center"
                                >
                                    <h3 className="text-sm font-semibold text-rose-300 mb-1">
                                        {platform.name}
                                    </h3>
                                    <p className="text-xs text-slate-400">{platform.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Process */}
                <section className="border-t border-slate-800 bg-slate-900 px-4 sm:px-6 py-16 sm:py-20">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 sm:mb-12">
                            How strategy is delivered
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
                            Success stories
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {caseStudies.map((study) => (
                                <article
                                    key={study.title}
                                    className="rounded-xl border border-slate-800 bg-slate-900 p-6"
                                >
                                    <h3 className="text-lg font-semibold text-white mb-3">
                                        {study.title}
                                    </h3>
                                    <div className="space-y-3 text-sm">
                                        <div>
                                            <p className="font-semibold text-rose-400 mb-1">Challenge</p>
                                            <p className="text-slate-400">{study.challenge}</p>
                                        </div>
                                        <div>
                                            <p className="font-semibold text-pink-400 mb-1">Solution</p>
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

                {/* Projects */}
                <section className="border-t border-slate-800 bg-slate-900 px-4 sm:px-6 py-16 sm:py-20">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 sm:mb-12">
                            Recent projects
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
                            E‑commerce FAQ
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
                                Ready to grow your online store?
                            </h2>
                            <p className="text-sm sm:text-base text-slate-400 mb-8 max-w-xl mx-auto">
                                Share your current setup and goals, and we’ll help you plan a
                                practical strategy to increase conversions and revenue.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                                <button
                                    type="button"
                                    onClick={openCalendly}
                                    className="inline-flex items-center gap-2 rounded-lg bg-rose-400 px-6 py-3 text-sm sm:text-base font-semibold text-slate-950 hover:bg-rose-300 transition-colors"
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