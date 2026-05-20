"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";

const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Solutions", href: "/solutions" },
];

export default function NavMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-3">
            <div className="max-w-7xl mx-auto">

                {/* ── Main bar ── */}
                <div className="flex items-center justify-between rounded-2xl border border-slate-700/60 bg-slate-950/80 backdrop-blur-xl px-5 py-3 shadow-lg shadow-black/20">

                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="relative w-10 h-10 rounded-xl overflow-hidden bg-slate-800 border border-slate-700 flex-shrink-0 group-hover:border-sky-500/50 transition-colors duration-200">
                            <Image
                                src="/logo/arani.png"
                                alt="Arani Software Logo"
                                fill
                                className="object-contain p-1.5"
                                priority
                            />
                        </div>
                        <span className="text-base font-bold text-white group-hover:text-sky-400 transition-colors duration-200">
                            Arani Software
                        </span>
                    </Link>

                    {/* Desktop nav links */}
                    <ul className="hidden md:flex items-center gap-1">
                        {navItems.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-150 ${isActive
                                                ? "text-white bg-slate-800 border border-slate-700"
                                                : "text-slate-400 hover:text-white hover:bg-slate-800/60"
                                            }`}
                                    >
                                        {isActive && (
                                            <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-sky-400" />
                                        )}
                                        {item.name}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>

                    {/* Desktop CTA */}
                    <div className="hidden md:block">
                        <Link href="/contact">
                            <button className="inline-flex items-center gap-1.5 rounded-lg bg-sky-500 px-5 py-2.5 text-sm font-semibold text-slate-950 hover:bg-sky-400 active:bg-sky-600 transition-colors duration-150">
                                Contact
                                <span className="text-base leading-none">→</span>
                            </button>
                        </Link>
                    </div>

                    {/* Mobile hamburger */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors duration-150"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>

                {/* ── Mobile dropdown ── */}
                {isOpen && (
                    <div className="md:hidden mt-2 rounded-2xl border border-slate-700/60 bg-slate-950/90 backdrop-blur-xl shadow-lg overflow-hidden">
                        <div className="flex flex-col p-3 gap-1">
                            {navItems.map((item) => {
                                const isActive = pathname === item.href;
                                return (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        onClick={() => setIsOpen(false)}
                                        className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-150 ${isActive
                                                ? "text-white bg-slate-800 border border-slate-700"
                                                : "text-slate-400 hover:text-white hover:bg-slate-800/60"
                                            }`}
                                    >
                                        {item.name}
                                    </Link>
                                );
                            })}

                            <Link
                                href="/contact"
                                onClick={() => setIsOpen(false)}
                                className="mt-1 w-full rounded-lg bg-sky-500 px-4 py-3 text-sm font-semibold text-slate-950 hover:bg-sky-400 transition-colors duration-150 text-center"
                            >
                                Contact →
                            </Link>
                        </div>
                    </div>
                )}

            </div>
        </nav>
    );
}