"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Server,
  Brain,
  Cloud,
  Shield,
  BarChart3,
  Users,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

const stats = [
  { target: 150, suffix: "+", label: "Projects Delivered" },
  { target: 98, suffix: "%", label: "Client Retention" },
  { target: 12, suffix: "+", label: "Years Experience" },
  { target: 40, suffix: "+", label: "Enterprise Clients" },
];

const services = [
  {
    icon: Server,
    title: "IT Infrastructure",
    desc: "Network design, server management, and infrastructure that scales with your business — not against it.",
    color: "bg-brand-blue",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    desc: "Azure, AWS, and hybrid cloud architectures built for performance, security, and cost efficiency.",
    color: "bg-brand-blue-light",
  },
  {
    icon: Brain,
    title: "AI & Automation",
    desc: "We integrate AI into your existing workflows — not as a novelty, but as a genuine productivity multiplier.",
    color: "bg-brand-orange",
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    desc: "Turn raw data into decisions. dashboards, reporting pipelines, and insights your team will actually use.",
    color: "bg-brand-blue",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    desc: "Risk assessments, endpoint protection, compliance management — because 'good enough' security isn't.",
    color: "bg-brand-blue-light",
  },
  {
    icon: Users,
    title: "Managed Services",
    desc: "Your IT department, outsourced. Proactive monitoring, help desk, and strategic guidance.",
    color: "bg-brand-orange",
  },
];

const whyGramatis = [
  "We speak both IT and business — no translation required",
  "AI is an add-on capability, not our entire pitch",
  "We measure success by your outcomes, not our billable hours",
  "Transparent pricing. No surprises. No padding.",
  "We work in your timezone and understand your market",
];

export default function HomePage() {
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
    const onMove = (e: MouseEvent) =>
      setCursorPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  const heroWords = ["Smarter", "IT.", "Built", "for", "Business."];

  return (
    <div className="relative overflow-hidden">
      {/* Cursor glow */}
      <div
        className="pointer-events-none fixed w-96 h-96 rounded-full z-0 transition-all duration-300 ease-out"
        style={{
          left: cursorPos.x - 192,
          top: cursorPos.y - 192,
          background:
            "radial-gradient(circle, rgba(70,130,180,0.08) 0%, transparent 70%)",
        }}
      />

      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center gradient-mesh overflow-hidden pt-20">
        {/* Background gradient blobs */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-blue-tint blur-3xl animate-float" />
        <div
          className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-sky-tint blur-3xl animate-float"
          style={{ animationDelay: "-3s" }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={loaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-tint text-brand-blue text-sm font-medium mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-pulse" />
            IT Consulting · Cloud · AI
          </motion.div>

          {/* Hero headline — word by word */}
          <h1 className="text-5xl md:text-7xl font-bold text-brand-navy leading-tight mb-6 tracking-tight">
            {heroWords.map((word, i) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 40 }}
                animate={loaded ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.2 + i * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="inline-block mr-4"
              >
                {word}
              </motion.span>
            ))}
          </h1>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={loaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-lg md:text-xl text-brand-muted max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            We help businesses build the IT foundations that actually support
            growth — then layer in AI where it genuinely moves the needle.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={loaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/contact"
              className="ripple group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-white bg-brand-navy hover:bg-brand-blue transition-all duration-300 hover:shadow-xl hover:shadow-brand-blue/30 text-base"
            >
              Start a Conversation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/services"
              className="ripple inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-brand-navy bg-brand-light/50 hover:bg-brand-light transition-colors duration-300 text-base"
            >
              See What We Do
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={loaded ? { opacity: 1 } : {}}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-brand-muted tracking-widest uppercase">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-5 h-8 rounded-full border-2 border-brand-muted/30 flex justify-center pt-1.5"
          >
            <div className="w-1 h-2 rounded-full bg-brand-blue" />
          </motion.div>
        </motion.div>
      </section>

      {/* ─── STATS ────────────────────────────────────────────── */}
      <section className="py-20 bg-brand-navy text-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {stats.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 0.1}>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                    <AnimatedCounter
                      target={stat.target}
                      suffix={stat.suffix}
                    />
                  </div>
                  <p className="text-sm text-white-50 font-medium uppercase tracking-wide">
                    {stat.label}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICES ──────────────────────────────────────────── */}
      <section className="py-24 gradient-mesh">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-sm font-semibold text-brand-blue uppercase tracking-widest mb-3 block">
                What We Do
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-5">
                Full-spectrum IT.
                <br />
                <span className="text-brand-blue">With an AI edge.</span>
              </h2>
              <p className="text-brand-muted text-lg max-w-xl mx-auto">
                From infrastructure to insight — we cover everything your
                business needs to run smarter, faster, and more reliably.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <ScrollReveal key={service.title} delay={i * 0.1}>
                <div className="glass rounded-2xl p-7 group hover:shadow-xl hover:shadow-brand-blue/15 transition-all duration-400 hover:-translate-y-1 cursor-pointer h-full">
                  <div
                    className={`w-12 h-12 rounded-xl ${service.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <service.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-brand-navy mb-3">
                    {service.title}
                  </h3>
                  <p className="text-brand-muted text-sm leading-relaxed">
                    {service.desc}
                  </p>
                  <div className="mt-5 flex items-center gap-1 text-brand-blue text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span>Learn more</span>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.5}>
            <div className="text-center mt-12">
              <Link
                href="/services"
                className="ripple inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white bg-brand-navy hover:bg-brand-blue transition-colors duration-300"
              >
                Explore All Services
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── WHY GRAMATIS ─────────────────────────────────────── */}
      <section className="py-24 bg-brand-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full"
            style={{
              background:
                "radial-gradient(ellipse, rgba(70,130,180,0.4) 0%, transparent 70%)",
            }}
          />
        </div>

        <div className="relative max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div>
                <span className="text-sm font-semibold text-brand-blue uppercase tracking-widest mb-4 block">
                  Why Gramatis
                </span>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  Not another IT
                  <br />
                  <span className="text-brand-blue-light">buzzword company.</span>
                </h2>
                <p className="text-white-60 text-lg mb-8 leading-relaxed">
                  We started Gramatis because too many IT firms sell complexity
                  for its own sake. We sell outcomes. If the simplest solution
                  is the right one — that's what we build.
                </p>
                <Link
                  href="/about"
                  className="ripple inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-brand-navy bg-white hover:bg-brand-light transition-colors duration-300"
                >
                  Our Story
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </ScrollReveal>

            <div className="space-y-4">
              {whyGramatis.map((item, i) => (
                <ScrollReveal key={item} delay={i * 0.1}>
                  <div className="flex items-start gap-4 p-5 rounded-xl bg-white-5 hover:bg-white-10 transition-colors duration-200">
                    <CheckCircle2 className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                    <span className="text-white-80 text-sm leading-relaxed">
                      {item}
                    </span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA BANNER ────────────────────────────────────────── */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy-light to-brand-blue" />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 50%, rgba(255,255,255,0.15) 0%, transparent 50%), radial-gradient(circle at 70% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)",
          }}
        />

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to build something that actually works?
            </h2>
            <p className="text-white-70 text-lg mb-10 max-w-2xl mx-auto">
              Let's talk about what your business actually needs — no pitch,
              no pressure. Just an honest conversation about where IT can do
              more.
            </p>
            <Link
              href="/contact"
              className="ripple inline-flex items-center gap-3 px-10 py-5 rounded-full font-bold text-brand-navy bg-white hover:bg-brand-light transition-colors duration-300 text-base shadow-2xl shadow-black/20"
            >
              Book a Free Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
