"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  MapPin,
  Phone,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@gramatis.com",
    href: "mailto:hello@gramatis.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+27 (0) 21 123 4567",
    href: "tel:+27211234567",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Cape Town, South Africa",
    href: null,
  },
  {
    icon: Clock,
    label: "Response Time",
    value: "Within 24 hours",
    href: null,
  },
];

type FormStatus = "idle" | "loading" | "success" | "error";

export default function ContactPage() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = "Enter a valid email address";
    if (!form.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("loading");

    // Simulate submission (replace with actual form endpoint)
    await new Promise((r) => setTimeout(r, 1500));
    setStatus("success");
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  return (
    <div className="pt-24 min-h-screen">
      {/* Hero */}
      <section className="py-20 gradient-mesh relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[400px] rounded-full bg-brand-blue-10 blur-3xl" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <ScrollReveal>
            <span className="inline-block px-4 py-2 rounded-full bg-brand-blue-10 text-brand-blue text-sm font-semibold mb-6">
              Contact Us
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-brand-navy mb-5 leading-tight">
              Let's talk about
              <br />
              <span className="text-brand-blue">what you actually need.</span>
            </h1>
            <p className="text-brand-muted text-lg md:text-xl max-w-xl mx-auto">
              No hard sell. No pitch deck. Just an honest conversation about
              what's working, what's not, and what it would take to fix.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact grid */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Info */}
            <div className="lg:col-span-2">
              <ScrollReveal direction="left">
                <div>
                  <h2 className="text-2xl font-bold text-brand-navy mb-8">
                    Get in touch
                  </h2>
                  <div className="space-y-6 mb-10">
                    {contactInfo.map(({ icon: Icon, label, value, href }) => (
                      <div key={label} className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-brand-blue-10 flex items-center justify-center shrink-0">
                          <Icon className="w-5 h-5 text-brand-blue" />
                        </div>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-widest text-brand-muted mb-0.5">
                            {label}
                          </p>
                          {href ? (
                            <a
                              href={href}
                              className="text-sm font-medium text-brand-navy hover:text-brand-blue transition-colors"
                            >
                              {value}
                            </a>
                          ) : (
                            <p className="text-sm font-medium text-brand-navy">
                              {value}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Decorative */}
                  <div className="rounded-2xl bg-brand-navy p-8 text-white relative overflow-hidden">
                    <div
                      className="absolute inset-0 opacity-10"
                      style={{
                        background:
                          "radial-gradient(ellipse at 90% 10%, rgba(70,130,180,0.6) 0%, transparent 60%)",
                      }}
                    />
                    <div className="relative">
                      <p className="text-white-80 text-sm leading-relaxed mb-4">
                        We work with businesses across South Africa. Remote
                        engagements welcome.
                      </p>
                      <Link
                        href="/services"
                        className="inline-flex items-center gap-2 text-brand-blue-light text-sm font-semibold hover:text-white transition-colors"
                      >
                        See our services
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <ScrollReveal direction="right" delay={0.1}>
                <div className="glass rounded-3xl p-8 md:p-10">
                  <AnimatePresence mode="wait">
                    {status === "success" ? (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center py-12"
                      >
                        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-5">
                          <CheckCircle2 className="w-8 h-8 text-green-600" />
                        </div>
                        <h3 className="text-2xl font-bold text-brand-navy mb-3">
                          Message sent.
                        </h3>
                        <p className="text-brand-muted mb-6">
                          We'll be in touch within 24 hours. Keep an eye on your
                          inbox.
                        </p>
                        <button
                          onClick={() => {
                            setStatus("idle");
                            setForm({
                              name: "",
                              company: "",
                              email: "",
                              phone: "",
                              service: "",
                              message: "",
                            });
                          }}
                          className="text-sm font-semibold text-brand-blue hover:text-brand-navy transition-colors"
                        >
                          Send another message
                        </button>
                      </motion.div>
                    ) : (
                      <motion.form
                        key="form"
                        onSubmit={handleSubmit}
                        className="space-y-5"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      >
                        <h3 className="text-xl font-bold text-brand-navy mb-2">
                          Send us a message
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                          <div>
                            <label
                              htmlFor="name"
                              className="block text-sm font-medium text-brand-gray mb-1.5"
                            >
                              Full name *
                            </label>
                            <input
                              id="name"
                              name="name"
                              type="text"
                              value={form.name}
                              onChange={handleChange}
                              placeholder="Your name"
                              className={`w-full px-4 py-3 rounded-xl border text-sm text-brand-navy placeholder:text-brand-muted/60 bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue/30 transition-all ${
                                errors.name
                                  ? "border-red-400"
                                  : "border-brand-light"
                              }`}
                            />
                            {errors.name && (
                              <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                                <AlertCircle className="w-3 h-3" />
                                {errors.name}
                              </p>
                            )}
                          </div>

                          <div>
                            <label
                              htmlFor="company"
                              className="block text-sm font-medium text-brand-gray mb-1.5"
                            >
                              Company
                            </label>
                            <input
                              id="company"
                              name="company"
                              type="text"
                              value={form.company}
                              onChange={handleChange}
                              placeholder="Your company name"
                              className="w-full px-4 py-3 rounded-xl border border-brand-light text-sm text-brand-navy placeholder:text-brand-muted/60 bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue/30 transition-all"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                          <div>
                            <label
                              htmlFor="email"
                              className="block text-sm font-medium text-brand-gray mb-1.5"
                            >
                              Email address *
                            </label>
                            <input
                              id="email"
                              name="email"
                              type="email"
                              value={form.email}
                              onChange={handleChange}
                              placeholder="you@company.com"
                              className={`w-full px-4 py-3 rounded-xl border text-sm text-brand-navy placeholder:text-brand-muted/60 bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue/30 transition-all ${
                                errors.email
                                  ? "border-red-400"
                                  : "border-brand-light"
                              }`}
                            />
                            {errors.email && (
                              <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                                <AlertCircle className="w-3 h-3" />
                                {errors.email}
                              </p>
                            )}
                          </div>

                          <div>
                            <label
                              htmlFor="phone"
                              className="block text-sm font-medium text-brand-gray mb-1.5"
                            >
                              Phone number
                            </label>
                            <input
                              id="phone"
                              name="phone"
                              type="tel"
                              value={form.phone}
                              onChange={handleChange}
                              placeholder="+27..."
                              className="w-full px-4 py-3 rounded-xl border border-brand-light text-sm text-brand-navy placeholder:text-brand-muted/60 bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue/30 transition-all"
                            />
                          </div>
                        </div>

                        <div>
                          <label
                            htmlFor="service"
                            className="block text-sm font-medium text-brand-gray mb-1.5"
                          >
                            What can we help with?
                          </label>
                          <select
                            id="service"
                            name="service"
                            value={form.service}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border border-brand-light text-sm text-brand-navy bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue/30 transition-all appearance-none cursor-pointer"
                          >
                            <option value="">Select a service...</option>
                            <option value="it-infrastructure">
                              IT Infrastructure
                            </option>
                            <option value="cloud">Cloud Solutions</option>
                            <option value="ai-automation">
                              AI & Automation
                            </option>
                            <option value="data-analytics">
                              Data Analytics
                            </option>
                            <option value="cybersecurity">Cybersecurity</option>
                            <option value="managed-services">
                              Managed Services
                            </option>
                            <option value="other">Other / Not sure</option>
                          </select>
                        </div>

                        <div>
                          <label
                            htmlFor="message"
                            className="block text-sm font-medium text-brand-gray mb-1.5"
                          >
                            Tell us about your situation *
                          </label>
                          <textarea
                            id="message"
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            rows={5}
                            placeholder="What's the challenge? What are you trying to achieve? What have you already tried?"
                            className={`w-full px-4 py-3 rounded-xl border text-sm text-brand-navy placeholder:text-brand-muted/60 bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue/30 transition-all resize-none ${
                              errors.message
                                ? "border-red-400"
                                : "border-brand-light"
                            }`}
                          />
                          {errors.message && (
                            <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                              <AlertCircle className="w-3 h-3" />
                              {errors.message}
                            </p>
                          )}
                        </div>

                        <button
                          type="submit"
                          disabled={status === "loading"}
                          className="ripple w-full flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-semibold text-white bg-brand-navy hover:bg-brand-blue disabled:opacity-60 disabled:cursor-not-allowed transition-colors duration-300 shadow-lg hover:shadow-xl hover:shadow-brand-blue/20"
                        >
                          {status === "loading" ? (
                            <>
                              <svg
                                className="animate-spin w-5 h-5"
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <circle
                                  className="opacity-25"
                                  cx="12"
                                  cy="12"
                                  r="10"
                                  stroke="currentColor"
                                  strokeWidth="4"
                                />
                                <path
                                  className="opacity-75"
                                  fill="currentColor"
                                  d="M4 12a8 8 0 018-8V0C5.37 0 0 5.37 0 12h4z"
                                />
                              </svg>
                              Sending...
                            </>
                          ) : (
                            <>
                              <Send className="w-5 h-5" />
                              Send Message
                            </>
                          )}
                        </button>

                        <p className="text-xs text-brand-muted text-center">
                          We respect your privacy. No spam. No selling your
                          data.
                        </p>
                      </motion.form>
                    )}
                  </AnimatePresence>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
