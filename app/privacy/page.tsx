"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Shield, Lock, Eye, Database, Cookie, UserCheck, Bell, Globe, ArrowLeft, ChevronRight, Mail } from "lucide-react";
import { useState, useEffect } from "react";
import Footer from "@/components/sections/footer";

export default function PrivacyPolicy() {
    const [activeSection, setActiveSection] = useState<string>("");

    const sections = [
        {
            id: "introduction",
            icon: Shield,
            title: "Introduction",
            content: "Arani Software Solutions is committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains in detail how we collect, use, store, and share your personal information when you use our websites, services, applications, and products. We believe in transparency and want you to understand your rights and our obligations regarding your data. This policy applies to all users of our services, whether you're a visitor to our website, a registered user, or a paying customer."
        },
        {
            id: "information-collect",
            icon: Database,
            title: "Information We Collect",
            content: "We collect personal information you provide directly to us, including but not limited to: your name, email address, phone number, payment information, company details, and any other information you choose to provide when registering, using our services, or contacting us. We also automatically collect certain information via cookies, analytics tools, and usage data, including your IP address, browser type, device information, operating system, referring URLs, pages viewed, time spent on pages, access times, and interaction patterns. Additionally, we may collect location data if you enable location services on your device."
        },
        {
            id: "how-we-use",
            icon: Eye,
            title: "How We Use Your Information",
            content: "We use your information for multiple purposes to deliver and improve our services: to provide, maintain, and enhance our platform and features; to process transactions and send you related information including confirmations and invoices; to communicate with you about products, services, offers, and events; to provide customer support and respond to your inquiries; to monitor and analyze trends, usage, and activities to improve user experience; to detect, prevent, and address technical issues and security threats; to personalize your experience and deliver targeted content; to comply with legal obligations and enforce our terms; and to develop new products and services based on user needs and feedback."
        },
        {
            id: "sharing-info",
            icon: UserCheck,
            title: "Sharing of Information",
            content: "We do not sell your personal data to third parties. We share information only in the following circumstances: with trusted third-party service providers who perform services on our behalf, including payment processors (Stripe, PayPal), analytics providers (Google Analytics), cloud hosting services (AWS, Google Cloud), email service providers, and customer support tools. These providers have access to your information only to perform specific tasks and are obligated to protect your data. We may also share information when required by law, in response to legal processes, to protect our rights and property, to investigate fraud or security issues, or in connection with business transfers such as mergers or acquisitions."
        },
        {
            id: "cookies",
            icon: Cookie,
            title: "Cookies & Tracking Technologies",
            content: "We use cookies and similar tracking technologies to enhance your experience, analyze usage patterns, and deliver personalized content. Cookies are small data files stored on your device that help us remember your preferences, keep you logged in, and understand how you interact with our services. We use both session cookies (which expire when you close your browser) and persistent cookies (which remain until deleted or expired). We also use web beacons, pixel tags, and similar technologies for analytics and marketing purposes. You can control cookies through your browser settings, but disabling them may affect your ability to use certain features of our services. We also use third-party analytics tools that may set their own cookies."
        },
        {
            id: "data-security",
            icon: Lock,
            title: "Data Security",
            content: "We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. Our security practices include: encryption of data in transit using SSL/TLS protocols; encryption of sensitive data at rest; regular security audits and vulnerability assessments; access controls limiting employee and contractor access to personal information; secure authentication mechanisms including multi-factor authentication options; regular backups and disaster recovery procedures; employee training on data protection and security best practices; and compliance with relevant security standards and certifications. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security."
        },
        {
            id: "your-rights",
            icon: UserCheck,
            title: "Your Rights",
            content: "You have several rights regarding your personal data, which may vary based on your location: Right to Access - request a copy of your personal information we hold; Right to Correction - update or correct inaccurate information; Right to Deletion - request deletion of your personal data, subject to legal obligations; Right to Data Portability - receive your data in a structured, machine-readable format; Right to Object - object to certain processing activities; Right to Restrict Processing - request limitation of how we use your data; Right to Withdraw Consent - withdraw consent for data processing where we rely on consent; Right to Opt-Out - unsubscribe from marketing communications. To exercise these rights, contact us at privacy@aranisoftware.com. We will respond within 30 days."
        },
        {
            id: "data-retention",
            icon: Database,
            title: "Data Retention",
            content: "We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required or permitted by law. When determining retention periods, we consider the amount, nature, and sensitivity of the data, the potential risk of unauthorized use or disclosure, the purposes for processing, legal requirements, and whether we can achieve those purposes through other means. When we no longer need your information, we will securely delete or anonymize it. Account information is typically retained for the duration of your account plus an additional period for legal and business purposes."
        },
        {
            id: "international-transfers",
            icon: Globe,
            title: "International Data Transfers",
            content: "Your information may be transferred to, stored, and processed in countries other than your country of residence, including the United States, where data protection laws may differ. We ensure appropriate safeguards are in place to protect your personal data in accordance with this Privacy Policy, including Standard Contractual Clauses approved by the European Commission, Privacy Shield frameworks where applicable, and other legally valid transfer mechanisms. By using our services, you consent to the transfer of your information to countries outside your country of residence."
        },
        {
            id: "children-privacy",
            icon: Shield,
            title: "Children's Privacy",
            content: "Our services are not intended for individuals under the age of 18, or the age of majority in your jurisdiction. We do not knowingly collect personal information from children. If we become aware that we have collected personal information from a child without parental consent, we will take steps to delete that information immediately. If you believe we have collected information from a child, please contact us at privacy@aranisoftware.com so we can take appropriate action."
        },
        {
            id: "changes-policy",
            icon: Bell,
            title: "Changes to This Policy",
            content: "We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. Material changes will be communicated via email to your registered email address or through a prominent notice on our website at least 30 days before taking effect. We will also update the 'Effective Date' at the top of this policy. Your continued use of our services after the changes take effect constitutes acceptance of the updated policy. We encourage you to review this policy periodically to stay informed about how we protect your information."
        },
        {
            id: "gdpr-compliance",
            icon: Shield,
            title: "GDPR & Data Protection Compliance",
            content: "For users in the European Economic Area (EEA), United Kingdom, and Switzerland, we comply with the General Data Protection Regulation (GDPR) and other applicable data protection laws. We process personal data based on legal grounds including: consent, contractual necessity, legitimate interests, and legal obligations. You have enhanced rights under GDPR, including the right to lodge a complaint with a supervisory authority. We have appointed a Data Protection Officer who can be contacted at dpo@aranisoftware.com for any data protection concerns or questions about how we handle your personal information."
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
                {/* Background Effects - Optimized */}
                <div className="fixed inset-0 brutal-grid opacity-5 pointer-events-none" />
                <div className="fixed top-20 right-20 w-[500px] h-[500px] bg-neon-blue/10 rounded-full blur-3xl pointer-events-none will-change-transform"
                    style={{
                        animation: "float1 8s ease-in-out infinite",
                    }}
                />
                <div className="fixed bottom-20 left-20 w-[500px] h-[500px] bg-neon-cyan/10 rounded-full blur-3xl pointer-events-none will-change-transform"
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
                            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-neon-blue to-neon-cyan rounded-2xl mb-6 shadow-lg shadow-neon-blue/30 relative"
                        >
                            <Image
                                src="/logo/arani.png"
                                alt="Arani Software"
                                width={60}
                                height={60}
                                className="object-contain p-2"
                                unoptimized
                            />
                            <div className="absolute inset-0 bg-neon-blue/30 rounded-2xl blur-xl -z-10" />
                        </motion.div>
                        <h1 className="text-4xl md:text-6xl font-bold holographic mb-4">
                            Privacy Policy
                        </h1>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
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
                                        <Shield className="w-5 h-5 text-neon-blue" />
                                        Contents
                                    </h2>
                                    <nav className="space-y-1">
                                        {tableOfContents.map((item) => (
                                            <button
                                                key={item.id}
                                                onClick={() => scrollToSection(item.id)}
                                                className={`w-full text-left px-4 py-2.5 rounded-lg transition-all group flex items-center justify-between ${activeSection === item.id
                                                    ? "bg-gradient-to-r from-neon-blue/20 to-neon-cyan/20 text-white border border-neon-blue/30"
                                                    : "text-gray-400 hover:text-white hover:bg-white/5"
                                                    }`}
                                            >
                                                <span className="text-sm">{item.label}</span>
                                                <ChevronRight className={`w-4 h-4 transition-transform flex-shrink-0 ${activeSection === item.id ? "translate-x-1" : ""
                                                    }`} />
                                            </button>
                                        ))}
                                    </nav>

                                    {/* Contact Info */}
                                    <div className="mt-6 p-4 bg-gradient-to-br from-neon-blue/10 to-neon-cyan/10 rounded-xl border border-neon-blue/20">
                                        <h3 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
                                            <Mail className="w-4 h-4" />
                                            Questions?
                                        </h3>
                                        <p className="text-xs text-gray-400 mb-2">
                                            Contact our privacy team
                                        </p>
                                        <Link
                                            href="mailto:privacy@aranisoftware.com"
                                            className="text-xs text-neon-blue hover:text-neon-cyan transition-colors"
                                        >
                                            privacy@aranisoftware.com
                                        </Link>
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
                                    className="glass-card p-6 md:p-8 hover:border-neon-blue/30 transition-colors group"
                                >
                                    <div className="flex items-start gap-4 mb-4">
                                        <motion.div
                                            whileHover={{ rotate: 360, scale: 1.1 }}
                                            transition={{ duration: 0.5 }}
                                            className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-neon-blue/20 to-neon-cyan/20 rounded-xl flex items-center justify-center group-hover:shadow-lg group-hover:shadow-neon-blue/30 transition-shadow"
                                        >
                                            <section.icon className="w-6 h-6 text-neon-blue" />
                                        </motion.div>
                                        <div className="flex-1">
                                            <h2 className="text-xl md:text-2xl font-bold text-white mb-2">
                                                {section.title}
                                            </h2>
                                            <div className="h-1 w-16 bg-gradient-to-r from-neon-blue to-neon-cyan rounded-full" />
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
                                className="glass-card p-6 md:p-8 bg-gradient-to-br from-neon-blue/5 to-neon-cyan/5 border-neon-blue/20"
                            >
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="w-12 h-12 bg-gradient-to-br from-neon-blue/20 to-neon-cyan/20 rounded-xl flex items-center justify-center">
                                        <Mail className="w-6 h-6 text-neon-blue" />
                                    </div>
                                    <div>
                                        <h2 className="text-xl md:text-2xl font-bold text-white mb-2">Questions or Concerns?</h2>
                                        <p className="text-gray-400 mb-4">
                                            Contact our team for any privacy-related inquiries.
                                        </p>
                                    </div>
                                </div>
                                <div className="pl-0 md:pl-16">
                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <Link
                                            href="mailto:privacy@aranisoftware.com"
                                            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-neon-blue to-neon-cyan rounded-xl font-semibold hover:shadow-lg hover:shadow-neon-blue/50 transition-all"
                                        >
                                            <Mail className="w-5 h-5" />
                                            Contact Privacy Team
                                        </Link>
                                        <span className="flex items-center text-gray-400">
                                            privacy@aranisoftware.com
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
