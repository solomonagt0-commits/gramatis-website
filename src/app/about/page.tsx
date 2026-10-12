import { Metadata } from "next";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "About — Gramatis",
  description:
    "Gramatis is an IT consulting firm that helps businesses build smarter systems, automate the boring stuff, and use AI without the hype.",
};

const values = [
  {
    title: "Honest above everything",
    desc: "If you don't need AI, we'll tell you. If a simpler solution is better, we'll recommend it. We're not here to pad invoices.",
  },
  {
    title: "Outcomes over activity",
    desc: "We measure our success by your results — ticket resolution times, system uptime, revenue influenced, decisions accelerated.",
  },
  {
    title: "We actually pick up the phone",
    desc: "No ticket queues that go nowhere. No 48-hour email delays. When you call Gramatis, you get someone who knows your business.",
  },
  {
    title: "Built to last, not just to invoice",
    desc: "We build solutions that survive beyond our engagement. No deliberate dependency traps. No 'you need us to maintain this.'",
  },
];

const teamValues = [
  "We say what we mean, and mean what we say",
  "We under-promise and over-deliver — not the other way around",
  "We care about your business like it's our own",
  "We're always learning — the tech changes, so do we",
];

export default function AboutPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="py-28 gradient-mesh relative overflow-hidden">
        <div className="absolute top-0 left-1/3 w-[600px] h-[400px] rounded-full bg-brand-blue/10 blur-3xl" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <ScrollReveal>
            <span className="inline-block px-4 py-2 rounded-full bg-brand-blue/10 text-brand-blue text-sm font-semibold mb-6">
              About Gramatis
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-brand-navy mb-6 leading-tight">
              We're not another
              <br />
              <span className="text-brand-blue">tech firm that overcomplicates things.</span>
            </h1>
            <p className="text-brand-muted text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Gramatis was founded on a simple frustration: too many IT companies
              sell complexity for its own sake. We started Gramatis to do
              differently — to be the consultants clients actually want to work
              with, not the ones they dread calling.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Story */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div>
                <span className="text-sm font-semibold text-brand-blue uppercase tracking-widest mb-4 block">
                  Our Story
                </span>
                <h2 className="text-4xl font-bold text-brand-navy mb-6 leading-tight">
                  Started because
                  <br />
                  we were frustrated clients.
                </h2>
                <div className="space-y-4 text-brand-muted leading-relaxed">
                  <p>
                    We spent years working with IT vendors who treated
                    engagements as opportunities to expand scope rather than solve
                    problems. Big proposals, complex roadmaps, and then
                    disappointing deliveries.
                  </p>
                  <p>
                    So we built Gramatis with a different operating principle: the
                    best IT engagement is one where the client barely notices us —
                    because everything is just working.
                  </p>
                  <p>
                    Today, we work with businesses across South Africa and beyond,
                    helping them build IT foundations that support growth without
                    generating constant firefighting. And we layer AI in where it
                    genuinely moves the needle — not because it's trendy, but
                    because sometimes it actually is the right tool.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.2}>
              <div className="glass rounded-3xl p-10 relative overflow-hidden">
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    background:
                      "radial-gradient(ellipse at 80% 20%, rgba(70,130,180,0.4) 0%, transparent 60%)",
                  }}
                />
                <div className="relative">
                  <blockquote className="text-2xl font-semibold text-brand-navy mb-6 leading-snug">
                    "The best IT system is one your team never has to think
                    about. We build those."
                  </blockquote>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-brand-navy flex items-center justify-center">
                      <span className="text-white text-sm font-bold">G</span>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-brand-navy">
                        Gramatis
                      </p>
                      <p className="text-xs text-brand-muted">
                        Founding Principle
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-brand-navy text-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.3) 0%, transparent 40%), radial-gradient(circle at 20% 80%, rgba(255,255,255,0.2) 0%, transparent 40%)",
          }}
        />
        <div className="relative max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-sm font-semibold text-brand-blue uppercase tracking-widest mb-3 block">
                What We Stand For
              </span>
              <h2 className="text-4xl md:text-5xl font-bold">
                Principles we actually
                <br />
                <span className="text-brand-blue-light">operate by.</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, i) => (
              <ScrollReveal key={value.title} delay={i * 0.1}>
                <div className="p-8 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors duration-300 h-full">
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {value.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team values */}
      <section className="py-24 gradient-mesh">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="text-sm font-semibold text-brand-blue uppercase tracking-widest mb-3 block">
                How We Show Up
              </span>
              <h2 className="text-4xl font-bold text-brand-navy">
                The things we bring
                <br />
                to every engagement.
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="bg-brand-navy rounded-3xl p-10 md:p-14">
              <ul className="space-y-5">
                {teamValues.map((item, i) => (
                  <li key={item} className="flex items-start gap-4">
                    <CheckCircle2 className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                    <span className="text-white/80 text-base leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="text-4xl font-bold text-brand-navy mb-5">
              Want to work with us?
            </h2>
            <p className="text-brand-muted text-lg mb-8">
              We're selective about the clients we take on — not because we're
              snobs, but because good work requires genuine partnership. If you're
              looking for a real consultant and not just another vendor, let's
              talk.
            </p>
            <Link
              href="/contact"
              className="ripple inline-flex items-center gap-3 px-10 py-5 rounded-full font-bold text-white bg-brand-navy hover:bg-brand-blue transition-colors duration-300 shadow-xl"
            >
              Start a Conversation
              <ArrowRight className="w-5 h-5" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
