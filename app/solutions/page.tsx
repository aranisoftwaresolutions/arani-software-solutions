"use client";

import Footer from "@/components/sections/footer";
import {
  Building2,
  ShoppingCart,
  Heart,
  GraduationCap,
  Truck,
  Banknote,
} from "lucide-react";

const solutions = [
  {
    icon: Building2,
    title: "Enterprise Solutions",
    description: "Scalable systems for large organizations and complex operations.",
    features: [
      "ERP integration",
      "Legacy modernization",
      "Data migration",
      "Process automation",
    ],
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Platforms",
    description: "Robust, high-conversion shopping experiences for web and mobile.",
    features: [
      "Personalization engine",
      "Inventory management",
      "Payment gateway",
      "Analytics dashboard",
    ],
  },
  {
    icon: Heart,
    title: "Healthcare Systems",
    description: "Secure, compliant platforms for modern healthcare delivery.",
    features: [
      "EMR/EHR systems",
      "Telemedicine",
      "AI diagnostics",
      "Patient portals",
    ],
  },
  {
    icon: Banknote,
    title: "FinTech Applications",
    description: "Reliable financial technology solutions with strong security.",
    features: [
      "Payment processing",
      "Risk management",
      "Fraud detection",
      "Reporting tools",
    ],
  },
  {
    icon: GraduationCap,
    title: "EdTech Platforms",
    description: "Learning platforms that support students, teachers, and teams.",
    features: [
      "Virtual classrooms",
      "Progress tracking",
      "Assessments",
      "Content management",
    ],
  },
  {
    icon: Truck,
    title: "Logistics & Supply Chain",
    description: "Tools to optimize logistics, inventory, and delivery networks.",
    features: [
      "Route optimization",
      "Real-time tracking",
      "Warehouse management",
      "Predictive analytics",
    ],
  },
];

export default function SolutionsPage() {
  return (
    <>
      <main className="min-h-screen bg-slate-950 text-white">
        {/* Hero */}
        <section className="pt-28 sm:pt-36 pb-14 sm:pb-16 px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <span className="inline-flex items-center rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-xs font-medium tracking-wide text-slate-300 uppercase mb-5">
              Industry Solutions
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-5">
              Solutions for{" "}
              <span className="text-sky-400">modern businesses</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl">
              Tailored solutions for key industries, delivered with solid
              engineering, clear architecture, and a focus on reliability.
            </p>
          </div>
        </section>

        {/* Solutions grid */}
        <section className="px-4 sm:px-6 pb-16 sm:pb-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {solutions.map((solution) => {
                const Icon = solution.icon;
                return (
                  <article
                    key={solution.title}
                    className="rounded-xl border border-slate-800 bg-slate-900 p-6 flex flex-col"
                  >
                    <div className="w-12 h-12 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-sky-400" />
                    </div>

                    <h2 className="text-xl font-bold text-white mb-2">
                      {solution.title}
                    </h2>

                    <p className="text-sm text-slate-400 leading-relaxed mb-4">
                      {solution.description}
                    </p>

                    <ul className="space-y-2 mb-5">
                      {solution.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2 text-sm text-slate-300"
                        >
                          <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-sky-400" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <button
                      type="button"
                      className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-sky-400 hover:text-sky-300 transition-colors"
                    >
                      <span>Learn more</span>
                      <span>→</span>
                    </button>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}