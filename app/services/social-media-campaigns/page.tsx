"use client";

import {
    Share2,
    TrendingUp,
    Users,
    Target,
    BarChart3,
    Megaphone,
    ArrowRight,
    Star,
    CheckCircle,
} from "lucide-react";
import Footer from "@/components/sections/footer";
import Link from "next/link";

const solutions = [
    {
        title: "Multi-platform strategy",
        desc: "Integrated campaigns across Facebook, Instagram, LinkedIn, Twitter, TikTok, and more.",
        icon: Share2,
    },
    {
        title: "Content creation",
        desc: "Visuals, videos, and copy tailored to each platform’s best practices.",
        icon: Megaphone,
    },
    {
        title: "Audience targeting",
        desc: "Targeting based on demographics, interests, behavior, and lookalikes.",
        icon: Target,
    },
    {
        title: "Influencer partnerships",
        desc: "Work with relevant creators to amplify your brand message.",
        icon: Users,
    },
    {
        title: "Analytics & reporting",
        desc: "Dashboards tracking engagement, reach, conversions, and ROI.",
        icon: BarChart3,
    },
    {
        title: "Ad campaign management",
        desc: "Ads and retargeting campaigns tuned for conversions, not just clicks.",
        icon: TrendingUp,
    },
];

const process = [
    {
        step: "Research & audience analysis",
        desc: "Market trends, competitor activity, audience behavior, and platform insights.",
    },
    {
        step: "Strategy & content planning",
        desc: "Campaign goals, content calendar, and platform-specific plan.",
    },
    {
        step: "Execution & monitoring",
        desc: "Launch campaigns, monitor performance, and adjust based on live data.",
    },
    {
        step: "Review & optimization",
        desc: "Review KPIs, learn from results, and refine the next cycle.",
    },
];

const platforms = [
    { name: "Facebook", icon: "📘", users: "3B+", strength: "Broad reach & targeting" },
    { name: "Instagram", icon: "📸", users: "2B+", strength: "Visual storytelling" },
    { name: "LinkedIn", icon: "💼", users: "900M+", strength: "B2B & professionals" },
    { name: "Twitter", icon: "🐦", users: "500M+", strength: "Real-time engagement" },
    { name: "TikTok", icon: "🎵", users: "1.5B+", strength: "Short-form video" },
    { name: "YouTube", icon: "▶️", users: "2.5B+", strength: "Long-form video & ads" },
];

const services = [
    {
        title: "Social media audit",
        desc: "Analysis of your existing presence, gaps, and competitor benchmark.",
    },
    {
        title: "Content production",
        desc: "Photography, video, graphics, and copy tailored to each channel.",
    },
    {
        title: "Community management",
        desc: "Inbox, comments, and conversations handled professionally.",
    },
    {
        title: "Paid advertising",
        desc: "ROI-focused campaigns with clear KPIs and budget control.",
    },
    {
        title: "Influencer outreach",
        desc: "Identify, negotiate, and manage creator partnerships.",
    },
    {
        title: "Crisis management",
        desc: "Monitor sentiment and respond to issues quickly and clearly.",
    },
];

const caseStudies = [
    {
        title: "Fashion brand launch",
        challenge: "New brand entering a crowded market with no social presence.",
        solution: "Multi-platform launch with influencers and user-generated content.",
        result: "50k followers in 3 months, 200% ROAS, multiple viral posts.",
    },
    {
        title: "B2B SaaS lead generation",
        challenge: "Low LinkedIn engagement, high lead cost, weak brand awareness.",
        solution: "Thought-leadership content, LinkedIn ads, and webinar campaigns.",
        result: "400% engagement increase, 60% CPL reduction, 150 qualified leads.",
    },
];

const projects = [
    {
        title: "Product launch campaign",
        desc: "TikTok and Reels campaign generating millions of views and UGC.",
        impact: "5M+ views",
    },
    {
        title: "Brand awareness drive",
        desc: "Multi-channel push increasing recognition in a specific segment.",
        impact: "80% awareness uplift",
    },
    {
        title: "Holiday season promo",
        desc: "Seasonal campaigns driving a large lift in sales during key dates.",
        impact: "300% sales uplift",
    },
];

const metrics = [
    { metric: "Engagement rate", target: "3–6%", icon: "💬" },
    { metric: "Follower growth", target: "10–20%/month", icon: "📈" },
    { metric: "Reach", target: "50k+/post", icon: "👁️" },
    { metric: "CTR", target: "2–4%", icon: "🎯" },
    { metric: "ROAS", target: "4:1+", icon: "💰" },
    { metric: "Share rate", target: "1–2%", icon: "🔄" },
];

const faq = [
    {
        q: "Which platforms should my business focus on?",
        a: "It depends on your audience: B2B often performs best on LinkedIn, visual and consumer brands on Instagram and TikTok, and broad reach on Facebook. The mix is chosen based on your goals and audience.",
    },
    {
        q: "How long before we see results?",
        a: "Paid campaigns can show results in 2–4 weeks. Organic growth typically takes 3–6 months to build momentum. Reporting is shared monthly with key metrics.",
    },
    {
        q: "Do you create all the content?",
        a: "Yes. We can handle full content production or collaborate with your in-house team if you already have assets.",
    },
    {
        q: "What is a typical campaign budget?",
        a: "Budgets vary by goals and platforms. A common range is $2k–$10k per month for ads and management, adjusted to fit your targets.",
    },
];

export default function SocialMediaCampaignsPage() {
    return (
        <>
            <main className="bg-slate-950 text-white min-h-screen">
                {/* Hero */}
                <section className="pt-28 sm:pt-36 pb-14 sm:pb-16 px-4 sm:px-6">
                    <div className="max-w-5xl mx-auto text-center">
                        <span className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900 px-4 py-1.5 text-xs font-medium tracking-wide text-slate-300 uppercase mb-6">
                            <Share2 className="w-4 h-4" />
                            Social media campaigns
                        </span>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-5">
                            Amplify your brand{" "}
                            <span className="text-sky-400">across channels</span>
                        </h1>

                        <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto mb-8">
                            Creative, data-driven campaigns across major platforms to grow
                            awareness, engagement, and revenue.
                        </p>

                        <div className="flex flex-wrap justify-center gap-4">
                            <Link href="/contact">
                                <button className="inline-flex items-center gap-2 rounded-lg bg-sky-500 px-6 py-3 text-sm sm:text-base font-semibold text-slate-950 hover:bg-sky-400 transition-colors">
                                    Launch a campaign
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
                            Campaign solutions
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

                {/* Platforms */}
                <section className="border-t border-slate-800 bg-slate-900 px-4 sm:px-6 py-16 sm:py-20">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 sm:mb-12">
                            Platforms we work with
                        </h2>

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                            {platforms.map((platform) => (
                                <div
                                    key={platform.name}
                                    className="rounded-xl border border-slate-800 bg-slate-950 p-4 text-center"
                                >
                                    <div className="text-3xl mb-2">{platform.icon}</div>
                                    <h3 className="text-sm font-semibold text-white mb-1">
                                        {platform.name}
                                    </h3>
                                    <p className="text-xs text-sky-400 font-semibold mb-1">
                                        {platform.users}
                                    </p>
                                    <p className="text-xs text-slate-400">{platform.strength}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Metrics */}
                <section className="px-4 sm:px-6 py-16 sm:py-20">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 sm:mb-12">
                            Key campaign metrics
                        </h2>

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                            {metrics.map((item) => (
                                <div
                                    key={item.metric}
                                    className="rounded-xl border border-slate-800 bg-slate-900 p-5 text-center"
                                >
                                    <div className="text-3xl mb-2">{item.icon}</div>
                                    <div className="text-lg font-semibold text-white mb-1">
                                        {item.target}
                                    </div>
                                    <p className="text-xs text-slate-400">{item.metric}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Services */}
                <section className="border-t border-slate-800 bg-slate-900 px-4 sm:px-6 py-16 sm:py-20">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 sm:mb-12">
                            What we offer
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {services.map((service) => (
                                <article
                                    key={service.title}
                                    className="rounded-xl border border-slate-800 bg-slate-950 p-6 flex items-start gap-3"
                                >
                                    <CheckCircle className="w-5 h-5 text-sky-400 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <h3 className="text-sm sm:text-base font-semibold text-white mb-1.5">
                                            {service.title}
                                        </h3>
                                        <p className="text-sm text-slate-400 leading-relaxed">
                                            {service.desc}
                                        </p>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Process */}
                <section className="px-4 sm:px-6 py-16 sm:py-20">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 sm:mb-12">
                            How campaigns run
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
                            Success stories
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

                {/* Featured campaigns */}
                <section className="px-4 sm:px-6 py-16 sm:py-20">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 sm:mb-12">
                            Featured campaigns
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
                            Frequently asked questions
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
                                Ready to start your next campaign?
                            </h2>
                            <p className="text-sm sm:text-base text-slate-400 mb-8 max-w-xl mx-auto">
                                Share your goals, budget, and timeline, and we’ll plan a campaign
                                that fits your brand and targets the right audience.
                            </p>
                            <Link href="/contact">
                                <button className="inline-flex items-center gap-2 rounded-lg bg-sky-500 px-6 py-3 text-sm sm:text-base font-semibold text-slate-950 hover:bg-sky-400 transition-colors">
                                    Start your campaign
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