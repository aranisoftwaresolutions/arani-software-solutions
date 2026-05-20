"use client";

const testimonials = [
    {
        name: "Sarah Chen",
        role: "CTO, TechFlow Inc",
        company: "Fortune 500 Company",
        image: "https://i.pravatar.cc/150?img=1",
        rating: 5,
        text: "Arani transformed our infrastructure with their cloud-native architecture. The AI automation reduced our operational costs by 60%.",
    },
    {
        name: "Michael Rodriguez",
        role: "Head of Engineering",
        company: "FinanceAI Solutions",
        image: "https://i.pravatar.cc/150?img=3",
        rating: 5,
        text: "The mobile app they built handles 2M+ daily users flawlessly. Their DevOps expertise is unmatched in the industry.",
    },
    {
        name: "Emily Watson",
        role: "Product Director",
        company: "HealthTech Global",
        image: "https://i.pravatar.cc/150?img=5",
        rating: 5,
        text: "Working with Arani felt like having a world-class engineering team. Their AI solutions are truly next-generation.",
    },
];

export default function Testimonials() {
    return (
        <section className="bg-slate-950 py-20 sm:py-24 px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="mb-12 text-center">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                        Trusted by industry leaders
                    </h2>
                    <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto leading-relaxed">
                        A few words from teams who partnered with Arani to modernize their
                        products and infrastructure.
                    </p>
                </div>

                {/* Testimonials grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                    {testimonials.map((t) => (
                        <article
                            key={t.name}
                            className="flex flex-col rounded-xl border border-slate-800 bg-slate-900 p-6 sm:p-7"
                        >
                            {/* Person row */}
                            <div className="flex items-center gap-4 mb-5">
                                <div className="h-14 w-14 rounded-full overflow-hidden bg-slate-800">
                                    <img
                                        src={t.image}
                                        alt={t.name}
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-white">{t.name}</p>
                                    {/* <p className="text-xs text-slate-400">{t.role}</p> */}
                                    {/* <p className="text-xs text-sky-400">{t.company}</p> */}
                                </div>
                            </div>

                            {/* Quote */}
                            <p className="text-sm text-slate-300 leading-relaxed">
                                “{t.text}”
                            </p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}