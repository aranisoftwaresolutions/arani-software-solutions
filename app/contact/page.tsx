"use client";

import { Mail, Phone, MapPin, Send } from "lucide-react";
import Footer from "@/components/sections/footer";

export default function ContactPage() {
    const contacts = [
        {
            icon: Mail,
            title: "Email",
            content: "contact@arani.software",
            link: "mailto:contact@arani.software",
        },
        {
            icon: Phone,
            title: "Phone",
            content: "+1 (555) 123-4567",
            link: "tel:+15551234567",
        },
        {
            icon: MapPin,
            title: "Office",
            content: "Silicon Valley, California, USA",
            link: "#",
        },
    ];

    return (
        <>
            <main className="bg-slate-950 text-white min-h-screen">
                <section className="pt-28 sm:pt-36 pb-16 px-4 sm:px-6">
                    <div className="max-w-5xl mx-auto">
                        {/* Hero */}
                        <header className="text-center mb-12 sm:mb-14">
                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4">
                                Let&apos;s build{" "}
                                <span className="text-sky-400">something together</span>
                            </h1>
                            <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto">
                                Transform your idea into a working product. Share a bit about
                                your project and how to reach you.
                            </p>
                        </header>

                        <div className="grid md:grid-cols-2 gap-10">
                            {/* Contact form */}
                            <section className="rounded-xl border border-slate-800 bg-slate-900 p-6 sm:p-7">
                                <h2 className="text-xl sm:text-2xl font-semibold mb-5">
                                    Send a message
                                </h2>
                                <form className="space-y-5">
                                    <div>
                                        <label className="block text-xs font-medium text-slate-300 mb-2">
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-sky-400"
                                            placeholder="Your name"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-medium text-slate-300 mb-2">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-sky-400"
                                            placeholder="you@example.com"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-medium text-slate-300 mb-2">
                                            Message
                                        </label>
                                        <textarea
                                            rows={5}
                                            className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-sky-400 resize-none"
                                            placeholder="Tell us about your project..."
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-sky-500 px-4 py-3 text-sm sm:text-base font-semibold text-slate-950 hover:bg-sky-400 transition-colors"
                                    >
                                        <span>Send message</span>
                                        <Send className="w-4 h-4" />
                                    </button>
                                </form>
                            </section>

                            {/* Contact info + hours */}
                            <section className="space-y-5">
                                {contacts.map((item) => {
                                    const Icon = item.icon;
                                    return (
                                        <div
                                            key={item.title}
                                            className="rounded-xl border border-slate-800 bg-slate-900 p-5 flex gap-4"
                                        >
                                            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-slate-800 border border-slate-700 flex-shrink-0">
                                                <Icon className="w-5 h-5 text-sky-400" />
                                            </div>
                                            <div>
                                                <h3 className="text-sm font-semibold text-white mb-1">
                                                    {item.title}
                                                </h3>
                                                <a
                                                    href={item.link}
                                                    className="text-sm text-slate-400 hover:text-sky-400 transition-colors"
                                                >
                                                    {item.content}
                                                </a>
                                            </div>
                                        </div>
                                    );
                                })}

                                <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">
                                    <h3 className="text-base font-semibold text-white mb-3">
                                        Business hours
                                    </h3>
                                    <dl className="space-y-2 text-sm text-slate-400">
                                        <div className="flex justify-between">
                                            <dt>Monday – Friday</dt>
                                            <dd className="text-slate-100">9:00 AM – 6:00 PM</dd>
                                        </div>
                                        <div className="flex justify-between">
                                            <dt>Saturday</dt>
                                            <dd className="text-slate-100">10:00 AM – 4:00 PM</dd>
                                        </div>
                                        <div className="flex justify-between">
                                            <dt>Sunday</dt>
                                            <dd className="text-slate-100">Closed</dd>
                                        </div>
                                    </dl>
                                </div>
                            </section>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}