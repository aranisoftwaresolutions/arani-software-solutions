"use client";

import { motion } from "framer-motion";
import { ShoppingCart, TrendingUp, CreditCard, Users, BarChart3, Smartphone, ArrowRight, Star, CheckCircle } from "lucide-react";
import Footer from "@/components/sections/footer";
import Link from "next/link";
import MagneticButton from "@/components/services/MagneticButton";
import FloatingOrbs from "@/components/services/FloatingOrbs";

export default function EcommerceStrategyPage() {
    const solutions = [
        { title: "Market Analysis", desc: "In-depth research on competitors, target audience, and market trends to position your brand", icon: BarChart3 },
        { title: "Conversion Optimization", desc: "Data-driven strategies to reduce cart abandonment and boost conversion rates", icon: TrendingUp },
        { title: "Mobile Commerce", desc: "Responsive design and mobile-first approach for seamless shopping experiences", icon: Smartphone },
        { title: "Payment Integration", desc: "Secure, multi-currency payment gateways with fraud protection and compliance", icon: CreditCard },
        { title: "Customer Retention", desc: "Loyalty programs, email marketing, and personalized recommendations to retain customers", icon: Users },
        { title: "Platform Selection", desc: "Choose the right e-commerce platform (Shopify, WooCommerce, Magento) for your needs", icon: ShoppingCart },
    ];

    const process = [
        { step: "Discovery & Research", desc: "Analyze market, competitors, and customer segments to understand opportunities and challenges" },
        { step: "Strategy Development", desc: "Create an integrated e-commerce strategy aligned with your brand identity and business goals" },
        { step: "Implementation", desc: "Seamless implementation with the latest technology, tools, and best practices for online stores" },
        { step: "Optimization & Growth", desc: "Continuous analysis, A/B testing, and optimization to maximize performance and ROI" },
    ];

    const platforms = [
        { name: "Shopify", desc: "All-in-one platform", color: "from-green-500 to-emerald-500" },
        { name: "WooCommerce", desc: "WordPress solution", color: "from-purple-500 to-pink-500" },
        { name: "Magento", desc: "Enterprise-grade", color: "from-orange-500 to-red-500" },
        { name: "BigCommerce", desc: "Scalable solution", color: "from-blue-500 to-cyan-500" },
        { name: "Stripe", desc: "Payment processing", color: "from-indigo-500 to-purple-500" },
        { name: "PayPal", desc: "Global payments", color: "from-blue-600 to-blue-400" },
    ];

    const caseStudies = [
        {
            title: "Fashion Retailer Transformation",
            challenge: "Outdated platform with 15% cart abandonment, slow checkout",
            solution: "Migrated to Shopify Plus with streamlined UX, one-click checkout",
            result: "40% conversion increase, 60% faster checkout, 2x mobile sales"
        },
        {
            title: "B2B Manufacturing Portal",
            challenge: "Complex bulk ordering, custom pricing, limited automation",
            solution: "Custom WooCommerce with API integrations, automated workflows",
            result: "70% order processing efficiency, 50% support reduction"
        },
    ];

    const projects = [
        { title: "Multi-Vendor Marketplace", desc: "Built scalable marketplace connecting 200+ sellers with intelligent product matching", impact: "200+ vendors" },
        { title: "Subscription Box Service", desc: "Recurring billing, personalized curation, and automated fulfillment workflows", impact: "5k subscribers" },
        { title: "International Expansion", desc: "Multi-currency, multi-language store with localized payment methods", impact: "12 countries" },
    ];

    const keyMetrics = [
        { metric: "Conversion Rate", target: "3-5%", desc: "Industry benchmark" },
        { metric: "Cart Abandonment", target: "<70%", desc: "Optimized checkout" },
        { metric: "Page Load Time", target: "<3s", desc: "Speed optimization" },
        { metric: "Mobile Traffic", target: "60%+", desc: "Mobile-first design" },
        { metric: "Customer LTV", target: "3x AOV", desc: "Retention strategy" },
        { metric: "Return Rate", target: "<5%", desc: "Product quality" },
    ];

    const faq = [
        { q: "Which e-commerce platform is best for my business?", a: "It depends on your needs: Shopify for quick setup and ease, WooCommerce for WordPress integration, Magento for enterprise-scale customization." },
        { q: "How long does it take to launch an online store?", a: "Typically 4-8 weeks for a full-featured store, including design, development, product setup, and payment integration." },
        { q: "Do you provide post-launch support?", a: "Yes—ongoing maintenance, performance monitoring, security updates, marketing strategy, and continuous optimization to maximize ROI." },
        { q: "Can you help with digital marketing?", a: "Absolutely. We offer SEO, PPC campaigns, social media marketing, email automation, and conversion rate optimization services." },
    ];

    return (
        <>
            <section className="relative min-h-screen pt-32 pb-20 px-6 overflow-hidden bg-black">
                <div className="absolute inset-0 bg-gradient-to-b from-black via-rose-950/20 to-black" />
                <div className="brutal-grid opacity-10 absolute inset-0" />

                <FloatingOrbs colors={["rgba(244, 63, 94, 0.15)", "rgba(236, 72, 153, 0.12)", "rgba(219, 39, 119, 0.1)"]} />

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
                            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-rose-500/15 to-pink-500/15 border border-rose-500/40 rounded-full text-sm font-bold text-rose-300 mb-8"
                        >
                            <ShoppingCart className="w-5 h-5" />
                            E-commerce Strategy
                        </motion.div>

                        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6">
                            <span className="holographic">Scale Your Store</span> With Strategy
                        </h1>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-10">
                            Strategic planning and execution for online stores that convert and scale—from platform selection to conversion optimization and growth marketing.
                        </p>

                        <div className="flex flex-wrap gap-4 justify-center">
                            <MagneticButton>
                                <Link href="/contact">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="px-8 py-4 bg-gradient-to-r from-rose-500 to-pink-500 rounded-xl font-bold text-lg flex items-center gap-2 hover:shadow-2xl hover:shadow-rose-500/50 transition-all"
                                    >
                                        Grow Your Store <ArrowRight className="w-5 h-5" />
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
                            E-commerce <span className="holographic">Solutions</span>
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
                                        className="absolute inset-0 bg-gradient-to-br from-rose-500/20 to-transparent opacity-0 group-hover:opacity-100"
                                        transition={{ duration: 0.5 }}
                                    />
                                    <motion.div
                                        className="w-14 h-14 rounded-xl bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center mb-6 relative z-10"
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

                    {/* Key Metrics */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="mb-32"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
                            <span className="holographic">Performance Metrics</span>
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                            {keyMetrics.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ scale: 1.1, y: -5 }}
                                    className="glass-card p-6 text-center cursor-pointer"
                                >
                                    <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent">
                                        {item.target}
                                    </h3>
                                    <p className="text-sm font-semibold mb-1">{item.metric}</p>
                                    <p className="text-xs text-gray-400">{item.desc}</p>
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
                            <span className="holographic">Platforms We Work With</span>
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
                                    className="glass-card p-6 text-center cursor-pointer group"
                                >
                                    <motion.div
                                        className={`w-12 h-12 mx-auto mb-3 rounded-lg bg-gradient-to-br ${platform.color} flex items-center justify-center`}
                                        whileHover={{ rotate: 360 }}
                                        transition={{ duration: 0.6 }}
                                    >
                                        <span className="text-white font-bold text-xl">{platform.name[0]}</span>
                                    </motion.div>
                                    <h3 className="text-lg font-bold mb-1">{platform.name}</h3>
                                    <p className="text-xs text-gray-400">{platform.desc}</p>
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
                            Our <span className="holographic">Strategy Process</span>
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
                                        className="w-12 h-12 rounded-full bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center font-bold text-xl flex-shrink-0 relative z-10"
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
                                        className="absolute inset-0 bg-gradient-to-br from-rose-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100"
                                        transition={{ duration: 0.5 }}
                                    />
                                    <div className="relative z-10">
                                        <h3 className="text-2xl font-bold mb-4">{study.title}</h3>
                                        <div className="space-y-3 mb-4">
                                            <div>
                                                <p className="text-sm font-semibold text-rose-400 mb-1">Challenge</p>
                                                <p className="text-gray-400 text-sm">{study.challenge}</p>
                                            </div>
                                            <div>
                                                <p className="text-sm font-semibold text-pink-400 mb-1">Solution</p>
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
                            <span className="holographic">Recent Projects</span>
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
                                            <span className="text-sm font-semibold bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent">
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
                                Ready to <span className="holographic">Grow Your Sales</span>?
                            </h2>
                            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                                Let's build a winning e-commerce strategy that converts visitors into loyal customers.
                            </p>
                            <MagneticButton>
                                <Link href="/contact">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="px-10 py-5 bg-gradient-to-r from-rose-500 via-pink-500 to-fuchsia-500 rounded-2xl font-bold text-lg flex items-center gap-3 mx-auto hover:shadow-2xl hover:shadow-rose-500/60 transition-all"
                                    >
                                        Get Strategy Consultation <ArrowRight className="w-6 h-6" />
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
