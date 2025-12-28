"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/utils";
import Footer from "@/components/sections/footer";
import { Building2, ShoppingCart, Heart, GraduationCap, Truck, Banknote } from "lucide-react";

const solutions = [
  {
    icon: Building2,
    title: "Enterprise Solutions",
    description: "Scalable systems for Fortune 500 companies",
    features: ["ERP Integration", "Legacy Modernization", "Data Migration", "Process Automation"],
    gradient: "from-neon-blue to-neon-cyan",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Platforms",
    description: "AI-powered shopping experiences",
    features: ["Personalization Engine", "Inventory Management", "Payment Gateway", "Analytics Dashboard"],
    gradient: "from-neon-purple to-neon-pink",
  },
  {
    icon: Heart,
    title: "Healthcare Systems",
    description: "HIPAA-compliant medical platforms",
    features: ["EMR/EHR Systems", "Telemedicine", "AI Diagnostics", "Patient Portals"],
    gradient: "from-neon-green to-neon-cyan",
  },
  {
    icon: Banknote,
    title: "FinTech Applications",
    description: "Secure financial technology solutions",
    features: ["Payment Processing", "Blockchain Integration", "Risk Management", "Fraud Detection"],
    gradient: "from-neon-cyan to-neon-blue",
  },
  {
    icon: GraduationCap,
    title: "EdTech Platforms",
    description: "Next-gen learning management systems",
    features: ["Virtual Classrooms", "AI Tutoring", "Progress Tracking", "Content Management"],
    gradient: "from-neon-pink to-neon-purple",
  },
  {
    icon: Truck,
    title: "Logistics & Supply Chain",
    description: "Smart logistics optimization",
    features: ["Route Optimization", "Real-time Tracking", "Warehouse Management", "Predictive Analytics"],
    gradient: "from-neon-purple to-neon-blue",
  },
];

export default function SolutionsPage() {
  return (
    <>
      <section className="relative min-h-screen pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 brutal-grid opacity-10" />
        <div className="scan-line" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="relative z-10 max-w-7xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="text-center mb-20">
            <h1 className="text-6xl md:text-7xl font-bold mb-6">
              Industry <span className="holographic">Solutions</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Tailored solutions for every industry, powered by cutting-edge technology
              and proven enterprise architecture patterns.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10, scale: 1.02 }}
                className="glass-card p-8 group relative overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${solution.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${solution.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <solution.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold mb-3">{solution.title}</h3>
                  <p className="text-gray-400 mb-6">{solution.description}</p>

                  <ul className="space-y-2">
                    {solution.features.map((feature, i) => (
                      <li key={i} className="flex items-center space-x-2 text-sm text-gray-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-neon-blue" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <motion.button
                    whileHover={{ x: 5 }}
                    className="mt-6 text-neon-blue font-medium flex items-center space-x-2"
                  >
                    <span>Learn More</span>
                    <span>→</span>
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
      <Footer />
    </>
  );
}
