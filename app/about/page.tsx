import Footer from "@/components/sections/footer";
import {
    Award,
    Users,
    Globe,
    Zap,
    Target,
    Rocket,
    Code,
    Smartphone,
    Database,
    TrendingUp,
    Palette,
    Settings,
} from "lucide-react";

const journeyMilestones = [
    {
        icon: Code,
        title: "The Beginning",
        description:
            "Started as a scrappy startup, crafting pixel-perfect websites for local clients with passion and precision.",
        tech: ["HTML", "CSS", "JavaScript"],
        accent: "text-sky-400",
        border: "border-sky-500/30",
    },
    {
        icon: Smartphone,
        title: "Mobile Revolution",
        description:
            "Expanded into native mobile development for iOS and Android, building seamless, high-performance apps users love.",
        tech: ["iOS", "Android", "React Native"],
        accent: "text-violet-400",
        border: "border-violet-500/30",
    },
    {

        icon: Database,
        title: "Full-Stack Mastery",
        description:
            "Embraced the MERN stack, delivering dynamic, data-driven applications with rock-solid architecture.",
        tech: ["MongoDB", "Express", "React", "Node.js"],
        accent: "text-emerald-400",
        border: "border-emerald-500/30",
    },
    {

        icon: TrendingUp,
        title: "Digital Marketing",
        description:
            "Added SEO and SMO services to our toolkit, ensuring every site and app gets found and shared by the right audience.",
        tech: ["SEO", "SMO", "Analytics"],
        accent: "text-amber-400",
        border: "border-amber-500/30",
    },
    {

        icon: Palette,
        title: "Design Excellence",
        description:
            "Doubled down on UI/UX flows and launched custom CMS platforms that let non-technical teams manage content effortlessly.",
        tech: ["Figma", "CMS", "Design Systems"],
        accent: "text-rose-400",
        border: "border-rose-500/30",
    },
    {

        icon: Settings,
        title: "Present Day",
        description:
            "A lean but mighty team of full-stack engineers, designers, and strategists combining agility with deep technical expertise.",
        tech: ["AI", "Cloud", "Enterprise"],
        accent: "text-indigo-400",
        border: "border-indigo-500/30",
    },
];

const stats = [
    { icon: Award, value: "", label: "Years Experience" },
    { icon: Users, value: "", label: "Expert Engineers" },
    { icon: Globe, value: "", label: "Countries Served" },
    { icon: Zap, value: "", label: "Projects Delivered" },
];

const values = [
    {
        title: "Innovation First",
        description:
            "We push boundaries and embrace emerging technologies to deliver tomorrow's solutions today.",
    },
    {
        title: "Excellence Always",
        description:
            "Quality is non-negotiable. Every line of code, every architecture decision reflects our commitment to perfection.",
    },
    {
        title: "Client Success",
        description:
            "Your success is our success. We partner with you to achieve measurable, transformative results.",
    },
];

export default function AboutPage() {
    return (
        <>
            <main className="bg-slate-950 text-white">

                {/* ── Hero ── */}
                <section className="max-w-5xl mx-auto px-4 sm:px-6 pt-28 sm:pt-36 pb-16 sm:pb-20">
                    <span className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-xs font-medium tracking-wide text-slate-300 uppercase mb-6">
                        <Rocket className="w-3.5 h-3.5 text-sky-400" />
                        Our Story
                    </span>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-5">
                        About <span className="text-sky-400">Arani</span>
                    </h1>
                    <p className="text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed">
                        From pixel-perfect websites to enterprise-scale solutions — discover
                        how we evolved into a powerhouse of innovation, design, and
                        engineering excellence.
                    </p>
                </section>

                {/* ── Stats ── */}
                <section className="border-y border-slate-800 bg-slate-900">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-12">
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
                            {stats.map((stat) => (
                                <div key={stat.label} className="flex flex-col items-center text-center gap-2">
                                    <stat.icon className="w-5 h-5 text-sky-400" />
                                    <span className="text-2xl sm:text-3xl font-bold text-white">
                                        {stat.value}
                                    </span>
                                    <span className="text-xs text-slate-400">{stat.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── Journey Timeline ── */}
                <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
                    <div className="mb-10 sm:mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
                            Our <span className="text-sky-400">Journey</span>
                        </h2>
                        <p className="text-sm sm:text-base text-slate-400 max-w-xl leading-relaxed">
                            From a scrappy startup to a lean, mighty team — here how we
                            transformed challenges into opportunities.
                        </p>
                    </div>

                    <div className="relative">
                        {/* Vertical line */}
                        <div className="absolute left-5 top-0 bottom-0 w-px bg-slate-800 hidden sm:block" />

                       
                    </div>
                </section>

                {/* ── Mission & Vision ── */}
                <section className="bg-slate-900 border-y border-slate-800">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                            <div className="rounded-xl border border-slate-700 bg-slate-950 p-6 sm:p-8">
                                <Target className="w-7 h-7 text-sky-400 mb-4" />
                                <h2 className="text-xl font-bold text-white mb-3">Our Mission</h2>
                                <p className="text-sm text-slate-400 leading-relaxed">
                                    To empower businesses worldwide with cutting-edge technology
                                    solutions that drive innovation, efficiency, and sustainable
                                    growth through AI, cloud infrastructure, and next-generation
                                    software architecture.
                                </p>
                            </div>

                            <div className="rounded-xl border border-slate-700 bg-slate-950 p-6 sm:p-8">
                                <Rocket className="w-7 h-7 text-sky-400 mb-4" />
                                <h2 className="text-xl font-bold text-white mb-3">Our Vision</h2>
                                <p className="text-sm text-slate-400 leading-relaxed">
                                    To become the global standard for enterprise software
                                    excellence, recognized as the go-to partner for companies
                                    seeking transformative digital solutions powered by artificial
                                    intelligence and cloud-native architecture.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── Core Values ── */}
                <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
                    <div className="mb-10 sm:mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
                            Our <span className="text-sky-400">Core Values</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
                        {values.map((value) => (
                            <div
                                key={value.title}
                                className="rounded-xl border border-slate-800 bg-slate-900 p-6"
                            >
                                <h3 className="text-base font-semibold text-white mb-2">
                                    {value.title}
                                </h3>
                                <p className="text-sm text-slate-400 leading-relaxed">
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

            </main>
            <Footer />
        </>
    );
}