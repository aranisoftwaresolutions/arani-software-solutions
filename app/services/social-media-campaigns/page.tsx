"use client";

import { motion } from "framer-motion";
import { Share2, TrendingUp, Users, Target, BarChart3, Megaphone, ArrowRight, Star, CheckCircle } from "lucide-react";
import Footer from "@/components/sections/footer";
import Link from "next/link";
import MagneticButton from "@/components/services/MagneticButton";
import FloatingOrbs from "@/components/services/FloatingOrbs";

export default function SocialMediaCampaignsPage() {
    const solutions = [
        { title: "Multi-Platform Strategy", desc: "Integrated campaigns across Facebook, Instagram, LinkedIn, Twitter, and TikTok for maximum reach", icon: Share2 },
        { title: "Content Creation", desc: "High-quality visuals, videos, copy, and stories tailored to each platform's best practices", icon: Megaphone },
        { title: "Audience Targeting", desc: "Data-driven targeting based on demographics, interests, behaviors, and lookalike audiences", icon: Target },
        { title: "Influencer Partnerships", desc: "Collaborate with micro and macro influencers to amplify your brand message authentically", icon: Users },
        { title: "Analytics & Reporting", desc: "Real-time dashboards tracking engagement, reach, conversions, and ROI across all channels", icon: BarChart3 },
        { title: "Ad Campaign Management", desc: "PPC, sponsored posts, story ads, and retargeting campaigns optimized for conversions", icon: TrendingUp },
    ];

    const process = [
        { step: "Research & Audience Analysis", desc: "Deep dive into market trends, competitor strategies, audience behaviors, and platform insights" },
        { step: "Strategy & Content Planning", desc: "Develop creative content calendar and platform-specific strategies aligned with brand goals" },
        { step: "Execution & Monitoring", desc: "Launch campaigns with real-time monitoring, A/B testing, and adjustments for optimal delivery" },
        { step: "Review & Optimization", desc: "Analyze performance metrics, gather insights, and continuously refine campaigns for superior results" },
    ];

    const platforms = [
        { name: "Facebook", icon: "📘", users: "3B+", strength: "Broad reach & targeting" },
        { name: "Instagram", icon: "📸", users: "2B+", strength: "Visual storytelling" },
        { name: "LinkedIn", icon: "💼", users: "900M+", strength: "B2B & professionals" },
        { name: "Twitter", icon: "🐦", users: "500M+", strength: "Real-time engagement" },
        { name: "TikTok", icon: "🎵", users: "1.5B+", strength: "Viral short videos" },
        { name: "YouTube", icon: "▶️", users: "2.5B+", strength: "Video content & ads" },
    ];

    const services = [
        { title: "Social Media Audit", desc: "Comprehensive analysis of current social presence and competitor benchmarking" },
        { title: "Content Production", desc: "Professional photography, videography, graphics, and copywriting services" },
        { title: "Community Management", desc: "Engage with followers, respond to comments, and build brand loyalty" },
        { title: "Paid Advertising", desc: "ROI-focused ad campaigns with precise targeting and budget optimization" },
        { title: "Influencer Outreach", desc: "Identify, negotiate, and manage influencer partnerships for brand amplification" },
        { title: "Crisis Management", desc: "Monitor sentiment and respond to negative feedback professionally and promptly" },
    ];

    const caseStudies = [
        {
            title: "Fashion Brand Launch",
            challenge: "New brand entering saturated market with zero social presence",
            solution: "Multi-platform campaign with influencer partnerships and UGC strategy",
            result: "50k followers in 3 months, 200% ROAS on ad spend, viral UGC"
        },
        {
            title: "B2B SaaS Lead Generation",
            challenge: "Low LinkedIn engagement, high CPL, limited brand awareness",
            solution: "Thought leadership content, LinkedIn ads, webinar promotion strategy",
            result: "400% engagement increase, 60% CPL reduction, 150 qualified leads"
        },
    ];

    const projects = [
        { title: "Product Launch Campaign", desc: "Viral TikTok campaign generating 5M+ views and 25k user-generated videos", impact: "5M+ views" },
        { title: "Brand Awareness Drive", desc: "Multi-channel campaign increasing brand recognition by 80% in target demographic", impact: "80% awareness ↑" },
        { title: "Holiday Season Promo", desc: "Instagram & Facebook ads driving 300% sales increase during Black Friday", impact: "300% sales ↑" },
    ];

    const metrics = [
        { metric: "Engagement Rate", target: "3-6%", icon: "💬" },
        { metric: "Follower Growth", target: "10-20%/mo", icon: "📈" },
        { metric: "Reach", target: "50k+/post", icon: "👁️" },
        { metric: "CTR", target: "2-4%", icon: "🎯" },
        { metric: "ROAS", target: "4:1+", icon: "💰" },
        { metric: "Share Rate", target: "1-2%", icon: "🔄" },
    ];

    const faq = [
        { q: "Which social platforms should my business focus on?", a: "Depends on your audience: B2B thrives on LinkedIn, visual brands on Instagram/TikTok, broad consumer reach on Facebook. We analyze your audience to recommend the best mix." },
        { q: "How long before we see results?", a: "Organic growth takes 3-6 months for momentum. Paid campaigns show results within 2-4 weeks. We provide monthly reports tracking all KPIs and progress." },
        { q: "Do you create all the content?", a: "Yes—our creative team produces professional photos, videos, graphics, and copy. We can also work with your existing content or collaborate with your in-house team." },
        { q: "What's the typical campaign budget?", a: "Budgets vary by goals and platforms. Typical range: $2k-$10k/month for ads + management. We optimize spend to maximize ROI and scale what works." },
    ];

    return (
        <>
            <section className="relative min-h-screen pt-32 pb-20 px-6 overflow-hidden bg-black">
                <div className="absolute inset-0 bg-gradient-to-b from-black via-cyan-950/20 to-black" />
                <div className="brutal-grid opacity-10 absolute inset-0" />

                <FloatingOrbs colors={["rgba(6, 182, 212, 0.15)", "rgba(59, 130, 246, 0.12)", "rgba(99, 102, 241, 0.1)"]} />

                <div className="relative z-10 max-w-7xl mx-auto">
                    {/* Hero */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-20"
                    >
                        <motion.div
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ type: "spring", duration: 0.8 }}
                            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-cyan-500/15 to-blue-500/15 border border-cyan-500/40 rounded-full text-sm font-bold text-cyan-300 mb-8"
                        >
                            <Share2 className="w-5 h-5" />
                            Social Media Campaigns
                        </motion.div>

                        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6">
                            <span className="holographic">Amplify Your Brand</span> Everywhere
                        </h1>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-10">
                            Creative, data-driven campaigns across all major platforms to boost brand awareness, engagement, and ROI—from strategy to execution.
                        </p>

                        <div className="flex flex-wrap gap-4 justify-center">
                            <MagneticButton>
                                <Link href="/contact">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl font-bold text-lg flex items-center gap-2 hover:shadow-2xl hover:shadow-cyan-500/50 transition-all"
                                    >
                                        Launch Campaign <ArrowRight className="w-5 h-5" />
                                    </motion.button>
                                </Link>
                            </MagneticButton>
                        </div>
                    </motion.div>

                    {/* Solutions Grid */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="mb-32"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
                            Our <span className="holographic">Campaign Solutions</span>
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {solutions.map((solution, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ scale: 1.03, y: -5 }}
                                    className="glass-card p-8 relative overflow-hidden group cursor-pointer"
                                >
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100"
                                        transition={{ duration: 0.5 }}
                                    />
                                    <motion.div
                                        className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center mb-6 relative z-10"
                                        whileHover={{ rotate: 360 }}
                                        transition={{ duration: 0.6 }}
                                    >
                                        <solution.icon className="w-7 h-7 text-white" />
                                    </motion.div>
                                    <h3 className="text-xl font-bold mb-3 relative z-10">{solution.title}</h3>
                                    <p className="text-gray-400 relative z-10">{solution.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Platforms */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="mb-32"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
                            <span className="holographic">Platforms We Master</span>
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                            {platforms.map((platform, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ scale: 1.1, y: -5 }}
                                    className="glass-card p-6 text-center cursor-pointer"
                                >
                                    <div className="text-4xl mb-3">{platform.icon}</div>
                                    <h3 className="text-lg font-bold mb-1">{platform.name}</h3>
                                    <p className="text-xs text-cyan-400 font-semibold mb-1">{platform.users}</p>
                                    <p className="text-xs text-gray-400">{platform.strength}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Key Metrics */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="mb-32"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
                            <span className="holographic">Campaign Metrics</span>
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                            {metrics.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ scale: 1.1, y: -5 }}
                                    className="glass-card p-6 text-center cursor-pointer"
                                >
                                    <div className="text-3xl mb-2">{item.icon}</div>
                                    <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                                        {item.target}
                                    </h3>
                                    <p className="text-sm font-semibold text-gray-300">{item.metric}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Services */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="mb-32"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
                            <span className="holographic">What We Offer</span>
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {services.map((service, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ scale: 1.05, x: 5 }}
                                    className="glass-card p-6 flex items-start gap-4 cursor-pointer"
                                >
                                    <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                                        <p className="text-gray-400 text-sm">{service.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Process Timeline */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="mb-32"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
                            Our <span className="holographic">Campaign Process</span>
                        </h2>
                        <div className="space-y-6 max-w-4xl mx-auto">
                            {process.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ scale: 1.02, x: 10 }}
                                    className="glass-card p-8 flex items-start gap-6 relative overflow-hidden group cursor-pointer"
                                >
                                    <motion.div
                                        className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center font-bold text-xl flex-shrink-0 relative z-10"
                                        whileHover={{ scale: 1.2, rotate: 360 }}
                                        transition={{ duration: 0.6 }}
                                    >
                                        {index + 1}
                                    </motion.div>
                                    <div className="relative z-10">
                                        <h3 className="text-xl font-bold mb-2">{item.step}</h3>
                                        <p className="text-gray-400">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Case Studies */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="mb-32"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
                            <span className="holographic">Success Stories</span>
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {caseStudies.map((study, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ delay: index * 0.15 }}
                                    whileHover={{ scale: 1.03, y: -5 }}
                                    className="glass-card p-8 relative overflow-hidden group cursor-pointer"
                                >
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100"
                                        transition={{ duration: 0.5 }}
                                    />
                                    <div className="relative z-10">
                                        <h3 className="text-2xl font-bold mb-4">{study.title}</h3>
                                        <div className="space-y-3 mb-4">
                                            <div>
                                                <p className="text-sm font-semibold text-cyan-400 mb-1">Challenge</p>
                                                <p className="text-gray-400 text-sm">{study.challenge}</p>
                                            </div>
                                            <div>
                                                <p className="text-sm font-semibold text-blue-400 mb-1">Solution</p>
                                                <p className="text-gray-400 text-sm">{study.solution}</p>
                                            </div>
                                            <div>
                                                <p className="text-sm font-semibold text-green-400 mb-1">Result</p>
                                                <p className="text-gray-300 text-sm font-medium">{study.result}</p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Featured Projects */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="mb-32"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
                            <span className="holographic">Featured Campaigns</span>
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {projects.map((project, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ delay: index * 0.15 }}
                                    whileHover={{ scale: 1.05, y: -10 }}
                                    className="glass-card p-8 relative overflow-hidden group cursor-pointer"
                                >
                                    <div className="relative z-10">
                                        <div className="flex items-center gap-2 mb-4">
                                            <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                                            <span className="text-sm font-semibold bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                                                {project.impact}
                                            </span>
                                        </div>
                                        <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                                        <p className="text-gray-400">{project.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* FAQ */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="mb-20"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
                            <span className="holographic">Frequently Asked Questions</span>
                        </h2>
                        <div className="space-y-4 max-w-3xl mx-auto">
                            {faq.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ scale: 1.02 }}
                                    className="glass-card p-6 cursor-pointer"
                                >
                                    <h3 className="font-semibold text-lg mb-2">{item.q}</h3>
                                    <p className="text-gray-400">{item.a}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <div className="glass-card p-12 rounded-3xl">
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">
                                Ready to <span className="holographic">Go Viral</span>?
                            </h2>
                            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                                Let's create campaigns that capture attention, spark conversations, and drive measurable results.
                            </p>
                            <MagneticButton>
                                <Link href="/contact">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="px-10 py-5 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 rounded-2xl font-bold text-lg flex items-center gap-3 mx-auto hover:shadow-2xl hover:shadow-cyan-500/60 transition-all"
                                    >
                                        Start Your Campaign <ArrowRight className="w-6 h-6" />
                                    </motion.button>
                                </Link>
                            </MagneticButton>
                        </div>
                    </motion.div>
                </div>
            </section>
            <Footer />
        </>
    );
}
