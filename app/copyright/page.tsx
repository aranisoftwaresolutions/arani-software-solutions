"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Copyright, FileText, AlertCircle, Shield, Scale, Mail, ArrowLeft, ChevronRight, CheckCircle } from "lucide-react";
import { useState, useEffect } from "react";
import Footer from "@/components/sections/footer";

export default function CopyrightPolicy() {
    const [activeSection, setActiveSection] = useState<string>("");

    const sections = [
        {
            id: "ownership",
            icon: Copyright,
            title: "Ownership of Content",
            content: "All content, including but not limited to text, images, graphics, logos, code, designs, software, documentation, user interfaces, visual interfaces, photographs, trademarks, service marks, and any other materials on Arani Software Solutions' website and platforms, is the exclusive intellectual property of Arani Software Solutions or its licensors. This content is protected by United States and international copyright laws, trademark laws, patent laws, and other intellectual property rights and unfair competition laws. The selection, compilation, arrangement, and presentation of all content on our platforms is also the exclusive property of Arani Software Solutions and is protected by copyright and other intellectual property laws."
        },
        {
            id: "use-of-materials",
            icon: Shield,
            title: "Use of Materials",
            content: "You may not copy, reproduce, distribute, transmit, broadcast, display, sell, license, create derivative works from, or otherwise exploit any content from our platform for any purpose without obtaining prior written consent from Arani Software Solutions, except where explicitly permitted for personal, non-commercial use. Personal, non-commercial use is limited to: viewing content on a single device, temporary storage in RAM, printing single copies for personal reference, and sharing links to our content (not the content itself). Any commercial use, republication, redistribution, or modification requires express written permission. Systematic retrieval of content to create collections, compilations, databases, or directories is strictly prohibited. Use of our content in violation of these terms may result in immediate termination of your access and legal action."
        },
        {
            id: "user-content",
            icon: FileText,
            title: "User-Generated Content",
            content: "When you submit, post, or display content on our platform (including but not limited to text, photos, videos, comments, feedback, suggestions, or ideas), you grant Arani Software Solutions a worldwide, non-exclusive, royalty-free, sublicensable, and transferable license to use, reproduce, distribute, prepare derivative works of, display, and perform that content in connection with our services and business operations. This includes the right to use your content for promotional and marketing purposes. You represent and warrant that you own or have the necessary rights to all content you submit and that such content does not violate any third-party rights or applicable laws. You retain all ownership rights in your content, but you acknowledge that we may retain copies for legal and operational purposes even after you delete your content."
        },
        {
            id: "reporting-infringement",
            icon: AlertCircle,
            title: "Reporting Copyright Infringement",
            content: "If you believe your copyrighted work has been used on our platform without authorization in a way that constitutes copyright infringement, please contact us immediately at support@aranisoftware.com with the following information: (1) Your name, address, telephone number, and email address; (2) A description of the copyrighted work you claim has been infringed, including the URL where the authorized version exists; (3) A description of where the allegedly infringing material is located on our platform, including specific URLs; (4) A statement that you have a good faith belief that the use of the material is not authorized by the copyright owner, its agent, or the law; (5) A statement, made under penalty of perjury, that the information in your notice is accurate and that you are the copyright owner or authorized to act on the copyright owner's behalf; (6) Your electronic or physical signature. We take all infringement claims seriously and will investigate promptly."
        },
        {
            id: "dmca-compliance",
            icon: Scale,
            title: "DMCA Compliance",
            content: "Arani Software Solutions complies with the Digital Millennium Copyright Act (DMCA) and other applicable copyright laws. We have implemented procedures for receiving written notification of claimed copyright infringement and for processing such claims in accordance with the DMCA. Our designated Copyright Agent for notice of claims of copyright infringement can be reached at: dmca@aranisoftware.com. Upon receipt of valid notice, we will expeditiously remove or disable access to the allegedly infringing material. We also provide counter-notification procedures for users who believe their content was wrongly removed. Please note that under Section 512(f) of the DMCA, any person who knowingly materially misrepresents that material was removed or disabled by mistake or misidentification may be subject to liability."
        },
        {
            id: "response-removal",
            icon: CheckCircle,
            title: "Response & Removal Process",
            content: "Upon receiving a valid copyright infringement notice that complies with the DMCA requirements, we will: (1) Promptly investigate the claim and review the allegedly infringing material; (2) Remove or disable access to the material if we determine it is infringing or if we cannot make a determination; (3) Notify the user who posted the material of the removal or disabling of access; (4) Provide the user with the opportunity to submit a counter-notification if they believe the material was removed in error; (5) Take reasonable steps to notify the original complainant of the counter-notification; (6) Restore the material within 10-14 business days if no lawsuit is filed. Repeat infringers' accounts and access rights may be terminated in accordance with our policy. We reserve the right to seek damages from any party who submits fraudulent infringement claims."
        },
        {
            id: "counter-notification",
            icon: FileText,
            title: "Counter-Notification Procedure",
            content: "If you believe your content was removed or disabled by mistake or misidentification, you may submit a counter-notification to dmca@aranisoftware.com with the following information: (1) Your name, address, telephone number, and email address; (2) Identification of the material that was removed and its location before removal; (3) A statement under penalty of perjury that you have a good faith belief that the material was removed or disabled as a result of mistake or misidentification; (4) A statement that you consent to the jurisdiction of the Federal District Court for the judicial district in which your address is located (or if outside the United States, for any judicial district in which we may be found), and that you will accept service of process from the person who provided the original infringement notification or their agent; (5) Your physical or electronic signature. Please note that filing a false counter-notification may result in legal liability."
        },
        {
            id: "trademark-protection",
            icon: Shield,
            title: "Trademark Protection",
            content: "Our trademarks, service marks, logos, and trade names (collectively 'Marks') are protected intellectual property. You may not use our Marks without our prior written permission, except as necessary to identify our products or services in a factual and non-misleading manner. Any use of our Marks must comply with our trademark usage guidelines, which are available upon request. Unauthorized use of our Marks may constitute trademark infringement and unfair competition in violation of federal and state laws. We actively monitor and enforce our trademark rights and will take legal action against infringers. If you become aware of any unauthorized use of our Marks, please notify us at legal@aranisoftware.com."
        },
        {
            id: "software-licensing",
            icon: Copyright,
            title: "Software & Code Licensing",
            content: "All software, source code, object code, and compiled code provided by Arani Software Solutions are protected by copyright and other intellectual property laws. Unless otherwise specified in a separate license agreement, all software is provided under a limited, non-exclusive, non-transferable, revocable license for your internal business purposes only. You may not: reverse engineer, decompile, or disassemble the software; remove or modify any proprietary notices or labels; rent, lease, loan, or sublicense the software; use the software to build competing products or services. Open-source components included in our software are subject to their respective licenses, which may grant you additional rights. Custom software developed under client agreements is subject to the ownership and licensing terms specified in those agreements."
        },
        {
            id: "fair-use",
            icon: Scale,
            title: "Fair Use & Educational Purposes",
            content: "We recognize that copyright law provides for 'fair use' of copyrighted material under certain circumstances, including for purposes of criticism, commentary, news reporting, teaching, scholarship, and research. We respect fair use rights and will consider fair use defenses when evaluating infringement claims. However, fair use is determined on a case-by-case basis considering factors such as the purpose and character of the use, the nature of the copyrighted work, the amount used in relation to the whole, and the effect on the market value of the original work. If you intend to use our content for educational, research, or other purposes you believe constitute fair use, we encourage you to contact us in advance at legal@aranisoftware.com to discuss your intended use and potentially obtain express permission."
        },
        {
            id: "international-copyright",
            icon: Shield,
            title: "International Copyright",
            content: "Our content is protected by copyright laws in the United States and internationally through various copyright treaties and conventions, including the Berne Convention, the WIPO Copyright Treaty, and other international agreements. We claim copyright protection in all jurisdictions where our content is accessible. If you are located outside the United States, you are still bound by these copyright terms and the copyright laws of your jurisdiction. Unauthorized use of our content may subject you to legal action in your country of residence, the United States, or other applicable jurisdictions. We work with international law enforcement and legal authorities to protect our intellectual property rights globally."
        },
        {
            id: "policy-updates",
            icon: AlertCircle,
            title: "Policy Updates",
            content: "We may update this Copyright Policy from time to time to reflect changes in our practices, legal requirements, or copyright law. Material changes will be posted on this page with an updated 'Effective Date' at the top of the policy. We may also notify registered users via email or through our platform. Your continued use of our services after any modifications to this policy constitutes acceptance of the updated terms. We encourage you to review this policy periodically to stay informed about how we protect our intellectual property and your rights. If you have questions about any changes to this policy, please contact us at legal@aranisoftware.com."
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
                <div className="fixed top-20 left-20 w-[500px] h-[500px] bg-neon-pink/10 rounded-full blur-3xl pointer-events-none will-change-transform"
                    style={{
                        animation: "float1 8s ease-in-out infinite",
                    }}
                />
                <div className="fixed bottom-20 right-20 w-[500px] h-[500px] bg-neon-purple/10 rounded-full blur-3xl pointer-events-none will-change-transform"
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
                            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-neon-pink to-neon-purple rounded-2xl mb-6 shadow-lg shadow-neon-pink/30 relative"
                        >
                            <Image
                                src="/logo/arani.png"
                                alt="Arani Software"
                                width={60}
                                height={60}
                                className="object-contain p-2"
                                unoptimized
                            />
                            <div className="absolute inset-0 bg-neon-pink/30 rounded-2xl blur-xl -z-10" />
                        </motion.div>
                        <h1 className="text-4xl md:text-6xl font-bold holographic mb-4">
                            Copyright Policy
                        </h1>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            Protecting intellectual property rights and respecting the creative work of others.
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
                                        <Copyright className="w-5 h-5 text-neon-pink" />
                                        Contents
                                    </h2>
                                    <nav className="space-y-1">
                                        {tableOfContents.map((item) => (
                                            <button
                                                key={item.id}
                                                onClick={() => scrollToSection(item.id)}
                                                className={`w-full text-left px-4 py-2.5 rounded-lg transition-all group flex items-center justify-between ${activeSection === item.id
                                                    ? "bg-gradient-to-r from-neon-pink/20 to-neon-purple/20 text-white border border-neon-pink/30"
                                                    : "text-gray-400 hover:text-white hover:bg-white/5"
                                                    }`}
                                            >
                                                <span className="text-sm">{item.label}</span>
                                                <ChevronRight className={`w-4 h-4 transition-transform flex-shrink-0 ${activeSection === item.id ? "translate-x-1" : ""
                                                    }`} />
                                            </button>
                                        ))}
                                    </nav>

                                    {/* Report Infringement */}
                                    <div className="mt-6 p-4 bg-gradient-to-br from-amber-500/10 to-orange-500/10 rounded-xl border border-amber-500/20">
                                        <div className="flex items-start gap-2">
                                            <AlertCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                                            <div>
                                                <h3 className="text-sm font-bold text-white mb-1">Report Infringement</h3>
                                                <p className="text-xs text-gray-400 mb-2">
                                                    If your work has been used without authorization
                                                </p>
                                                <Link
                                                    href="mailto:dmca@aranisoftware.com"
                                                    className="text-xs text-amber-500 hover:text-amber-400 transition-colors"
                                                >
                                                    dmca@aranisoftware.com
                                                </Link>
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
                                    className="glass-card p-6 md:p-8 hover:border-neon-pink/30 transition-colors group"
                                >
                                    <div className="flex items-start gap-4 mb-4">
                                        <motion.div
                                            whileHover={{ rotate: 360, scale: 1.1 }}
                                            transition={{ duration: 0.5 }}
                                            className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-neon-pink/20 to-neon-purple/20 rounded-xl flex items-center justify-center group-hover:shadow-lg group-hover:shadow-neon-pink/30 transition-shadow"
                                        >
                                            <section.icon className="w-6 h-6 text-neon-pink" />
                                        </motion.div>
                                        <div className="flex-1">
                                            <h2 className="text-xl md:text-2xl font-bold text-white mb-2">
                                                {section.title}
                                            </h2>
                                            <div className="h-1 w-16 bg-gradient-to-r from-neon-pink to-neon-purple rounded-full" />
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
                                className="glass-card p-6 md:p-8 bg-gradient-to-br from-neon-pink/5 to-neon-purple/5 border-neon-pink/20"
                            >
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="w-12 h-12 bg-gradient-to-br from-neon-pink/20 to-neon-purple/20 rounded-xl flex items-center justify-center">
                                        <Mail className="w-6 h-6 text-neon-pink" />
                                    </div>
                                    <div>
                                        <h2 className="text-xl md:text-2xl font-bold text-white mb-2">Copyright Questions?</h2>
                                        <p className="text-gray-400 mb-4">
                                            Contact our legal team for copyright and DMCA-related inquiries.
                                        </p>
                                    </div>
                                </div>
                                <div className="pl-0 md:pl-16">
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        <div>
                                            <h3 className="text-sm font-semibold text-white mb-2">General Copyright</h3>
                                            <Link
                                                href="mailto:legal@aranisoftware.com"
                                                className="text-neon-pink hover:text-neon-purple transition-colors text-sm"
                                            >
                                                legal@aranisoftware.com
                                            </Link>
                                        </div>
                                        <div>
                                            <h3 className="text-sm font-semibold text-white mb-2">DMCA Notices</h3>
                                            <Link
                                                href="mailto:dmca@aranisoftware.com"
                                                className="text-neon-pink hover:text-neon-purple transition-colors text-sm"
                                            >
                                                dmca@aranisoftware.com
                                            </Link>
                                        </div>
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
