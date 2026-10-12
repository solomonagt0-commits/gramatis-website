import { Metadata } from "next";
import {
  Server,
  Cloud,
  Brain,
  BarChart3,
  Shield,
  Users,
  CheckCircle2,
  ArrowRight,
  Zap,
} from "lucide-react";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Services — Gramatis",
  description:
    "IT infrastructure, cloud solutions, AI automation, and managed services — built for results, not reports.",
};

const services = [
  {
    icon: Server,
    title: "IT Infrastructure",
    tagline: "Built to last. Designed to scale.",
    description:
      "We design and manage the foundations your business runs on — networks, servers, endpoints, and everything in between. No bloat. No overengineering. Just infrastructure that works.",
    features: [
      "Network architecture & optimisation",
      "Server setup & management (on-prem & co-lo)",
      "End-user computing & device management",
      "Business continuity & disaster recovery",
      "IT procurement & vendor management",
    ],
    color: "bg-brand-blue",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    tagline: "Azure. AWS. Whatever fits — not what we prefer.",
    description:
      "Cloud migrations done right — we move you to the right platform for your workload, not the one with the biggest commission. Ongoing cloud management included.",
    features: [
      "Cloud migration strategy & execution",
      "Azure & AWS architecture",
      "Hybrid cloud setups",
      "Cost optimisation & governance",
      "Cloud security & compliance",
    ],
    color: "bg-brand-blue-light",
  },
  {
    icon: Brain,
    title: "AI & Automation",
    tagline: "AI that works. Not AI that's still in a slide deck.",
    description:
      "We identify where AI and automation genuinely reduce cost or increase output in your business — then build and integrate it. Document processing, workflow automation, customer service, data analysis.",
    features: [
      "Process automation (RPA-style workflows)",
      "Document & data extraction AI",
      "AI-powered customer service",
      "Business intelligence & predictive analytics",
      "Custom AI tool development",
    ],
    color: "bg-brand-orange",
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    tagline: "From data noise to actual decisions.",
    description:
      "We build the pipelines, dashboards, and reporting layers that turn your scattered data into something your team can actually act on. Power BI, Tableau, or built-to-spec.",
    features: [
      "Data warehousing & pipelines",
      "Interactive dashboards",
      "KPI frameworks & reporting",
      "CRM & ERP data integration",
      "Ad-hoc analysis & insights",
    ],
    color: "bg-brand-blue",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    tagline: "Compliance ≠ security. We do both.",
    description:
      "Risk assessments, endpoint protection, identity management, and compliance frameworks that go beyond the checkbox. We find the gaps before someone else does.",
    features: [
      "Security risk assessments",
      "Endpoint detection & response",
      "Identity & access management",
      "GDPR, POPIA & ISO 27001 readiness",
      "Security awareness training",
    ],
    color: "bg-brand-blue-light",
  },
  {
    icon: Users,
    title: "Managed IT Services",
    tagline: "Your IT department. Outsourced. Upgraded.",
    description:
      "A complete IT department for a fixed monthly cost. Proactive monitoring, help desk, strategic planning, and vendor coordination — all covered.",
    features: [
      "24/7 proactive monitoring",
      "Help desk & support SLAs",
      "IT strategy & roadmapping",
      "Software licence management",
      "Quarterly business reviews",
    ],
    color: "bg-brand-orange",
  },
];

const process = [
  {
    step: "01",
    title: "Understand",
    desc: "We learn how your business actually works — not just what your org chart says. Two-way conversations, not a vendor questionnaire.",
  },
  {
    step: "02",
    title: "Design",
    desc: "We build a solution around your real needs and budget. Nothing added just because it's billable.",
  },
  {
    step: "03",
    title: "Deliver",
    desc: "We manage the implementation ourselves. No throwing it over the wall to a junior technician.",
  },
  {
    step: "04",
    title: "Support",
    desc: "Post-launch support and optimisation. We stick around because our work is only done when yours is actually working.",
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="py-24 gradient-mesh relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-brand-blue/10 blur-3xl" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <ScrollReveal>
            <span className="inline-block px-4 py-2 rounded-full bg-brand-blue/10 text-brand-blue text-sm font-semibold mb-6">
              Our Services
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-brand-navy mb-6 leading-tight">
              Everything IT.
              <br />
              <span className="text-brand-blue">With AI built in.</span>
            </h1>
            <p className="text-brand-muted text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              We cover the full IT stack — from infrastructure to insight — and
              layer AI on top where it genuinely makes a difference. No
              unnecessary complexity. No padded proposals.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 space-y-20">
          {services.map((service, i) => (
            <ScrollReveal key={service.title}>
              <div
                className={`grid grid-cols-1 lg:grid-cols-5 gap-10 items-start ${
                  i % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                {/* Icon + title */}
                <div
                  className={`lg:col-span-2 ${
                    i % 2 === 1 ? "lg:col-start-4" : ""
                  }`}
                >
                  <div
                    className={`w-14 h-14 rounded-2xl ${service.color} flex items-center justify-center mb-6`}
                  >
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-brand-navy mb-2">
                    {service.title}
                  </h2>
                  <p className="text-brand-blue font-medium mb-4">
                    {service.tagline}
                  </p>
                  <p className="text-brand-muted leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-brand-navy font-semibold text-sm hover:text-brand-blue transition-colors"
                  >
                    Discuss this service
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                {/* Features */}
                <div
                  className={`lg:col-span-3 glass rounded-2xl p-8 ${
                    i % 2 === 1 ? "" : ""
                  }`}
                >
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-brand-muted mb-5">
                    What's included
                  </h3>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-sm text-brand-gray"
                      >
                        <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-brand-navy text-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(70,130,180,0.5) 0%, transparent 60%)",
          }}
        />
        <div className="relative max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-sm font-semibold text-brand-blue uppercase tracking-widest mb-3 block">
                How We Work
              </span>
              <h2 className="text-4xl md:text-5xl font-bold">
                Simple process.
                <br />
                <span className="text-brand-blue-light">Serious results.</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {process.map((step, i) => (
              <ScrollReveal key={step.step} delay={i * 0.1}>
                <div className="relative">
                  <div className="text-6xl font-bold text-white/10 mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                  {i < process.length - 1 && (
                    <div className="hidden md:block absolute top-8 right-0 translate-x-1/2">
                      <Zap className="w-4 h-4 text-brand-blue" />
                    </div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 gradient-mesh">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="text-4xl font-bold text-brand-navy mb-5">
              Not sure where to start?
            </h2>
            <p className="text-brand-muted text-lg mb-8">
              Most engagements begin with a free 30-minute conversation. Tell us
              where you're stuck — we'll tell you honestly what it would take
              to fix.
            </p>
            <Link
              href="/contact"
              className="ripple inline-flex items-center gap-3 px-10 py-5 rounded-full font-bold text-white bg-brand-navy hover:bg-brand-blue transition-colors duration-300 shadow-xl shadow-brand-navy/20"
            >
              Let's Talk
              <ArrowRight className="w-5 h-5" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
