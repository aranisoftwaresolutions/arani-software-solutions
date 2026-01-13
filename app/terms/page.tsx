"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FileText, Scale, AlertTriangle, CheckCircle, XCircle, Shield, Users, Lock, ArrowLeft, ChevronRight, Mail } from "lucide-react";
import { useState, useEffect } from "react";
import Footer from "@/components/sections/footer";

export default function TermsOfService() {
    const [activeSection, setActiveSection] = useState<string>("");

    const sections = [
        {
            id: "overview",
            icon: FileText,
            title: "Overview",
            content: "Welcome to Arani Software Solutions. By accessing our IT solutions and SaaS products, you agree to these Terms of Use governing your usage of our websites, applications, software, and services. These terms establish the legal framework for your relationship with Arani Software Solutions and outline the rights and responsibilities of both parties."
        },
        {
            id: "eligibility",
            icon: Users,
            title: "Eligibility",
            content: "You must be 18 years or the age of majority in your jurisdiction. By using our services, you represent and warrant that you meet these requirements and have the legal capacity to enter into binding agreements. Organizations using our services must be represented by authorized individuals with the power to bind the organization to these terms."
        },
        {
            id: "user-responsibilities",
            icon: Shield,
            title: "User Responsibilities",
            content: "You are responsible for all activity under your account and agree not to misuse our services, upload malicious content, or engage in illegal activities. This includes maintaining the confidentiality of your login credentials, promptly notifying us of any unauthorized use, ensuring compliance with all applicable laws and regulations, respecting the intellectual property rights of others, and refraining from any activity that could harm our infrastructure or other users."
        },
        {
            id: "intellectual-property",
            icon: Lock,
            title: "Intellectual Property",
            content: "All content and trademarks on our platform are owned by Arani Software Solutions or its licensors. You may not copy, modify, distribute, or exploit any part without our written consent. This protection extends to all software code, design elements, documentation, logos, service marks, trade names, and proprietary methodologies. Any unauthorized use may result in immediate termination of your access and potential legal action."
        },
        {
            id: "service-usage",
            icon: CheckCircle,
            title: "Acceptable Use Policy",
            content: "Our services are designed for legitimate business and personal purposes. You agree not to use our platform to transmit spam, malware, or harmful code; attempt to gain unauthorized access to our systems or other users' accounts; engage in activities that could disrupt or interfere with service availability; collect or harvest data without permission; impersonate others or provide false information; violate any applicable laws, regulations, or third-party rights."
        },
        {
            id: "payment-terms",
            icon: Scale,
            title: "Payment & Billing",
            content: "All fees are charged in advance on a subscription basis or as specified in your service agreement. Payment is due immediately upon invoice receipt. Late payments may incur interest charges at the rate of 1.5% per month or the maximum permitted by law. We reserve the right to suspend or terminate services for accounts with overdue balances exceeding 15 days. Refunds are provided according to our refund policy, typically within 30 days of the original purchase for eligible services."
        },
        {
            id: "data-usage",
            icon: Shield,
            title: "Data Collection & Usage",
            content: "We collect and process data as described in our Privacy Policy. By using our services, you consent to such collection and processing. We implement industry-standard security measures to protect your data but cannot guarantee absolute security. You retain ownership of your data and content, while granting us a limited license to use, store, and process it for service delivery purposes."
        },
        {
            id: "termination",
            icon: XCircle,
            title: "Termination",
            content: "We may suspend or terminate your access at any time, with or without notice, for conduct that violates these terms or harms our business or users. You may terminate your account at any time by contacting our support team. Upon termination, you must cease all use of our services, and we may delete your data according to our data retention policies. Any fees paid are non-refundable except as required by law or our refund policy."
        },
        {
            id: "disclaimers",
            icon: AlertTriangle,
            title: "Disclaimers & Liability",
            content: "Our services are provided 'as is' without warranties of any kind, express or implied. To the fullest extent permitted by law, we are not liable for any indirect, incidental, consequential, or punitive damages arising from your use of our services. Our total liability shall not exceed the amount you paid us in the 12 months preceding the claim. Some jurisdictions do not allow limitations on implied warranties or liability, so these limitations may not apply to you."
        },
        {
            id: "indemnification",
            icon: Shield,
            title: "Indemnification",
            content: "You agree to indemnify, defend, and hold harmless Arani Software Solutions, its affiliates, officers, directors, employees, and agents from any claims, liabilities, damages, losses, costs, or expenses (including reasonable attorneys' fees) arising from your use of our services, violation of these terms, or infringement of any third-party rights."
        },
        {
            id: "modifications",
            icon: FileText,
            title: "Modifications to Terms",
            content: "We reserve the right to modify these terms at any time. Material changes will be communicated via email or prominent notice on our website at least 30 days before taking effect. Your continued use of our services after such modifications constitutes acceptance of the updated terms. If you disagree with any changes, you must discontinue use of our services."
        },
        {
            id: "governing-law",
            icon: Scale,
            title: "Governing Law & Dispute Resolution",
            content: "These terms are governed by the laws of California, United States, without regard to conflict of law principles. Any disputes arising from these terms or your use of our services shall be resolved through binding arbitration under the rules of the American Arbitration Association. You waive any right to participate in class actions or class arbitrations. The arbitration shall take place in California, and judgment on the award may be entered in any court having jurisdiction."
        }
    ];

    const tableOfContents = sections.map(section => ({
        id: section.id,
        label: section.title
    }));

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 200;

            for (let i = sections.length - 1; i >= 0; i--) {
                const element = document.getElementById(sections[i].id);
                if (element && element.offsetTop <= scrollPosition) {
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
        const element = document.getElementById(id);
        if (element) {
            const offset = 100;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };

    return (
        <>
            <div className="min-h-screen bg-black text-white pt-32 pb-20">
                {/* Background Effects - Fixed positioning for zero layout shift */}
                <div className="fixed inset-0 brutal-grid opacity-5 pointer-events-none" />
                <div className="fixed top-20 left-20 w-[500px] h-[500px] bg-neon-purple/10 rounded-full blur-3xl pointer-events-none will-change-transform"
                    style={{
                        animation: "float1 8s ease-in-out infinite",
                    }}
                />
                <div className="fixed bottom-20 right-20 w-[500px] h-[500px] bg-neon-blue/10 rounded-full blur-3xl pointer-events-none will-change-transform"
                    style={{
                        animation: "float2 10s ease-in-out infinite",
                    }}
                />

                <style jsx>{`
                @keyframes float1 {
                    0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.1; }
                    50% { transform: translate(20px, -20px) scale(1.2); opacity: 0.2; }
                }
                @keyframes float2 {
                    0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.1; }
                    50% { transform: translate(-20px, 20px) scale(1.3); opacity: 0.2; }
                }
            `}</style>

                <div className="max-w-7xl mx-auto px-6">
                    {/* Back Button */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mb-8"
                    >
                        <Link
                            href="/"
                            className="inline-flex items-center space-x-2 text-gray-400 hover:text-neon-blue transition-colors group"
                        >
                            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                            <span>Back to Home</span>
                        </Link>
                    </motion.div>

                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="text-center mb-16"
                    >
                        <motion.div
                            whileHover={{ rotate: 180, scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 200, damping: 15 }}
                            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-neon-purple to-neon-pink rounded-2xl mb-6 shadow-lg shadow-neon-purple/30 relative"
                        >
                            <Image
                                src="/logo/arani.png"
                                alt="Arani Software"
                                width={60}
                                height={60}
                                className="object-contain p-2"
                                unoptimized
                            />
                            <div className="absolute inset-0 bg-neon-purple/30 rounded-2xl blur-xl -z-10" />
                        </motion.div>
                        <h1 className="text-4xl md:text-6xl font-bold holographic mb-4">
                            Terms of Service
                        </h1>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            Please read these terms carefully before using our services. By using Arani Software Solutions, you agree to these terms.
                        </p>
                        <p className="text-gray-500 text-sm mt-4">
                            Effective Date: January 12, 2026
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        {/* Table of Contents - Sticky Sidebar */}
                        <motion.aside
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: 0.1 }}
                            className="lg:col-span-3"
                        >
                            <div className="lg:sticky lg:top-32">
                                <div className="glass-card p-6">
                                    <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                        <FileText className="w-5 h-5 text-neon-purple" />
                                        Contents
                                    </h2>
                                    <nav className="space-y-1">
                                        {tableOfContents.map((item) => (
                                            <button
                                                key={item.id}
                                                onClick={() => scrollToSection(item.id)}
                                                className={`w-full text-left px-4 py-2.5 rounded-lg transition-all group flex items-center justify-between ${activeSection === item.id
                                                    ? "bg-gradient-to-r from-neon-purple/20 to-neon-pink/20 text-white border border-neon-purple/30"
                                                    : "text-gray-400 hover:text-white hover:bg-white/5"
                                                    }`}
                                            >
                                                <span className="text-sm">{item.label}</span>
                                                <ChevronRight className={`w-4 h-4 transition-transform flex-shrink-0 ${activeSection === item.id ? "translate-x-1" : ""
                                                    }`} />
                                            </button>
                                        ))}
                                    </nav>

                                    {/* Important Notice */}
                                    <div className="mt-6 p-4 bg-gradient-to-br from-amber-500/10 to-orange-500/10 rounded-xl border border-amber-500/20">
                                        <div className="flex items-start gap-2">
                                            <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                                            <div>
                                                <h3 className="text-sm font-bold text-white mb-1">Important</h3>
                                                <p className="text-xs text-gray-400">
                                                    Please read these terms carefully. They contain important information about your legal rights.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.aside>

                        {/* Main Content */}
                        <div className="lg:col-span-9 space-y-6">
                            {sections.map((section, index) => (
                                <motion.section
                                    key={section.id}
                                    id={section.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.3, delay: index * 0.05 }}
                                    className="glass-card p-6 md:p-8 hover:border-neon-purple/30 transition-colors group"
                                >
                                    <div className="flex items-start gap-4 mb-4">
                                        <motion.div
                                            whileHover={{ rotate: 360, scale: 1.1 }}
                                            transition={{ duration: 0.5 }}
                                            className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-neon-purple/20 to-neon-pink/20 rounded-xl flex items-center justify-center group-hover:shadow-lg group-hover:shadow-neon-purple/30 transition-shadow"
                                        >
                                            <section.icon className="w-6 h-6 text-neon-purple" />
                                        </motion.div>
                                        <div className="flex-1">
                                            <h2 className="text-xl md:text-2xl font-bold text-white mb-2">
                                                {section.title}
                                            </h2>
                                            <div className="h-1 w-16 bg-gradient-to-r from-neon-purple to-neon-pink rounded-full" />
                                        </div>
                                    </div>

                                    <div className="pl-0 md:pl-16">
                                        <p className="text-gray-400 leading-relaxed">
                                            {section.content}
                                        </p>
                                    </div>
                                </motion.section>
                            ))}

                            {/* Contact Section */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4 }}
                                className="glass-card p-6 md:p-8 bg-gradient-to-br from-neon-purple/5 to-neon-pink/5 border-neon-purple/20"
                            >
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="w-12 h-12 bg-gradient-to-br from-neon-purple/20 to-neon-pink/20 rounded-xl flex items-center justify-center">
                                        <Mail className="w-6 h-6 text-neon-purple" />
                                    </div>
                                    <div>
                                        <h2 className="text-xl md:text-2xl font-bold text-white mb-2">Need Assistance?</h2>
                                        <p className="text-gray-400 mb-4">
                                            Reach out for any questions regarding our Terms of Use.
                                        </p>
                                    </div>
                                </div>
                                <div className="pl-0 md:pl-16">
                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <Link
                                            href="mailto:support@aranisoftware.com"
                                            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-neon-purple to-neon-pink rounded-xl font-semibold hover:shadow-lg hover:shadow-neon-purple/50 transition-all"
                                        >
                                            <Mail className="w-5 h-5" />
                                            Contact Support
                                        </Link>
                                        <span className="flex items-center text-gray-400">
                                            support@aranisoftware.com
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
