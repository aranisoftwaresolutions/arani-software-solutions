"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import Footer from "@/components/sections/footer";
import CalendlyEmbed from "@/components/ui/calendly-embed";
import { CALENDLY_URL } from "@/lib/calendly";
import emailjs from "@emailjs/browser";


export default function ContactPage() {
    const contacts = [
        {
            icon: Mail,
            title: "Email",
            content: "contact@arani.soft.solutions",
            link: "mailto:contact@arani.soft.solutions",
        },
        {
            icon: Phone,
            title: "Phone",
            content: "+91 7908181575",
            link: "tel:+917908181575",
        },
        {
            icon: MapPin,
            title: "Office",
            content: "Nawada Bihar, India",
            link: "#",
        },
    ];

    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState<null | "success" | "error">(null);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
        if (status) setStatus(null);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
        const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
        const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

        if (!serviceId || !templateId || !publicKey) {
            console.error("EmailJS env vars are missing");
            setStatus("error");
            return;
        }

        setIsSubmitting(true);
        try {
            await emailjs.send(
                serviceId,
                templateId,
                {
                    from_name: form.name,
                    reply_to: form.email,
                    message: form.message,
                },
                { publicKey }
            );
            setStatus("success");
            setForm({ name: "", email: "", message: "" });
        } catch (err) {
            console.error("EmailJS error:", err);
            setStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    };

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

                        {/* Form + contact info */}
                        <div className="grid md:grid-cols-2 gap-10">
                            {/* Contact form */}
                            <section className="rounded-xl border border-slate-800 bg-slate-900 p-6 sm:p-7">
                                <h2 className="text-xl sm:text-2xl font-semibold mb-5">
                                    Send a message
                                </h2>
                                <form className="space-y-5" onSubmit={handleSubmit}>
                                    <div>
                                        <label className="block text-xs font-medium text-slate-300 mb-2">
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={form.name}
                                            onChange={handleChange}
                                            required
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
                                            name="email"
                                            value={form.email}
                                            onChange={handleChange}
                                            required
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
                                            name="message"
                                            value={form.message}
                                            onChange={handleChange}
                                            required
                                            className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-sky-400 resize-none"
                                            placeholder="Tell us about your project..."
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-sky-500 px-4 py-3 text-sm sm:text-base font-semibold text-slate-950 hover:bg-sky-400 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                                    >
                                        <span>{isSubmitting ? "Sending..." : "Send message"}</span>
                                        <Send className="w-4 h-4" />
                                    </button>

                                    {status === "success" && (
                                        <p className="text-xs text-emerald-400">
                                            Message sent successfully. You&apos;ll hear back soon.
                                        </p>
                                    )}
                                    {status === "error" && (
                                        <p className="text-xs text-red-400">
                                            Could not send the message. Please try again later or use
                                            the email/phone details.
                                        </p>
                                    )}
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

                        {/* Calendly section */}
                        <section className="mt-12 sm:mt-16">
                            <div className="mb-6 text-center">
                                <h2 className="text-2xl sm:text-3xl font-bold text-white">
                                    Prefer to talk?
                                </h2>
                                <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-xl mx-auto">
                                   Book a Free Consultation 30‑minute call directly in our calendar. Choose a time
                                    that works for you, and we&apos;ll send a Google Meet invite.
                                </p>
                            </div>
                            <div className="text-center">
                                <CalendlyEmbed url={CALENDLY_URL} />
                            </div>
                        </section>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}