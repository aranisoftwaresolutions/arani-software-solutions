import Link from "next/link";
import Footer from "@/components/sections/footer";
import {
  Palette,
  Code,
  Layers,
  Monitor,
  ShoppingCart,
  FileText,
  Share2,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "UI & UX Design",
    slug: "ui-ux-design",
    description:
      "Intuitive UI/UX design that delights users and drives engagement through research-driven, user-centered experiences.",
    features: [
      "User research and personas",
      "Wireframing and prototyping",
      "Visual design and branding",
      "Interaction design",
      "Usability testing",
      "Design systems",
    ],
    stats: { label: "Projects Done", value: "150+" },
    technologies: ["Figma", "Sketch", "Adobe XD", "InVision", "Miro"],
  },
  {
    icon: Layers,
    title: "No-Code App Development",
    slug: "no-code-app-web-development",
    description:
      "Launch mobile and web apps rapidly without traditional coding, ideal for startups and entrepreneurs.",
    features: [
      "Visual development tools",
      "Custom logic workflows",
      "Cross-platform deployment",
      "Rapid prototyping",
      "Easy scaling",
      "API integration",
    ],
    stats: { label: "Apps Launched", value: "80+" },
    technologies: ["Bubble", "Webflow", "FlutterFlow", "Adalo", "Glide"],
  },
  {
    icon: Code,
    title: "Full Stack Development",
    slug: "full-stack-development",
    description:
      "End-to-end development services covering front-end, back-end, and everything in between.",
    features: [
      "MERN stack expertise",
      "TypeScript development",
      "Redis caching",
      "RESTful and GraphQL APIs",
      "Responsive UI design",
      "Performance optimization",
    ],
    stats: { label: "Full Stack Apps", value: "120+" },
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "Express",
      "TypeScript",
      "Redis",
    ],
  },
  {
    icon: Monitor,
    title: "Desktop Application Development",
    slug: "computer-application-development",
    description:
      "Tailored desktop software solutions to streamline your business operations and improve productivity.",
    features: [
      "Java-powered solutions",
      "Custom business logic",
      "Cross-platform compatibility",
      "ERP and CRM systems",
      "Inventory management",
      "Report and analytics tools",
    ],
    stats: { label: "Desktop Apps", value: "65+" },
    technologies: ["Java", "JavaFX", "Swing", "Spring Boot", "PostgreSQL"],
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Strategy",
    slug: "ecommerce-strategy",
    description:
      "Strategic planning and execution for online stores that convert and scale.",
    features: [
      "Market analysis",
      "Conversion optimization",
      "Mobile UX enhancement",
      "Technology integration",
      "Payment systems",
      "Performance analytics",
    ],
    stats: { label: "Stores Built", value: "95+" },
    technologies: [
      "Shopify",
      "WooCommerce",
      "Magento",
      "BigCommerce",
      "Stripe",
    ],
  },
  {
    icon: FileText,
    title: "Content Management Systems",
    slug: "content-management",
    description:
      "Robust CMS solutions for easy content publishing and management.",
    features: [
      "Custom CMS development",
      "Headless CMS integration",
      "Content strategy",
      "Workflow automation",
      "Multilingual support",
      "Performance optimization",
    ],
    stats: { label: "CMS Deployed", value: "110+" },
    technologies: ["WordPress", "Strapi", "Contentful", "Sanity", "Ghost"],
  },
  {
    icon: Share2,
    title: "Social Media Campaigns",
    slug: "social-media-campaigns",
    description:
      "Creative, data-driven campaigns across platforms to boost brand awareness and ROI.",
    features: [
      "Multi-platform strategy",
      "Content creation",
      "Audience targeting",
      "Influencer partnerships",
      "Analytics reporting",
      "Ad campaign management",
    ],
    stats: { label: "Campaigns Run", value: "200+" },
    technologies: [
      "Meta Ads",
      "LinkedIn Ads",
      "Twitter Ads",
      "Buffer",
      "Hootsuite",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <main className="bg-slate-950 text-white min-h-screen">
        {/* Hero */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-28 sm:pt-36 pb-14 sm:pb-16">
          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-xs font-medium tracking-wide text-slate-300 uppercase mb-5">
              Our Services
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-5">
              Services that <span className="text-sky-400">help you build</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl">
              Comprehensive technology solutions designed for performance,
              usability, and growth — from UI/UX design to full-stack
              development and digital strategy.
            </p>
          </div>
        </section>

        {/* Services grid */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-16 sm:pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.slug}
                  className="rounded-xl border border-slate-800 bg-slate-900 p-6 flex flex-col"
                >
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div className="w-12 h-12 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-sky-400" />
                    </div>

                    <div className="text-right">
                      <p className="text-[11px] uppercase tracking-widest text-slate-500 mb-1">
                        {service.stats.label}
                      </p>
                      <p className="text-lg font-semibold text-white">
                        {service.stats.value}
                      </p>
                    </div>
                  </div>

                  <h2 className="text-xl font-bold text-white mb-3">
                    {service.title}
                  </h2>

                  <p className="text-sm text-slate-400 leading-relaxed mb-5">
                    {service.description}
                  </p>

                  <div className="space-y-2 mb-5">
                    {service.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-start gap-2 text-sm text-slate-300"
                      >
                        <CheckCircle className="w-4 h-4 text-sky-400 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md bg-slate-800 px-2.5 py-1 text-xs text-slate-300 border border-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto pt-5 border-t border-slate-800">
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-medium text-sky-400 hover:text-sky-300 transition-colors"
                    >
                      Learn more
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-slate-800 bg-slate-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 py-14 sm:py-16 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Start your next project with Arani
            </h2>
            <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto mb-8 leading-relaxed">
              Work with a team focused on clean execution, scalable technology,
              and business results.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-sky-500 px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-sky-400 transition-colors"
            >
              Start your project
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}