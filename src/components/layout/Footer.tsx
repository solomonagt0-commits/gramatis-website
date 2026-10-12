import Link from "next/link";
import { Zap, Linkedin, Twitter, Mail } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-brand-navy text-white overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 opacity-20 bg-gradient-to-t from-brand-blue/30 to-transparent pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-brand-blue flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" strokeWidth={2.5} />
              </div>
              <span className="text-xl font-bold tracking-tight">
                Grama<span className="text-brand-blue-light">tis</span>
              </span>
            </Link>
            <p className="text-sm text-white/60 max-w-xs leading-relaxed">
              IT consulting that actually delivers. We help businesses build
              smarter systems, streamline operations, and unlock the power of
              AI — without the buzzword overhead.
            </p>
            <div className="flex gap-3 mt-5">
              {[
                { icon: Linkedin, label: "LinkedIn" },
                { icon: Twitter, label: "Twitter" },
                { icon: Mail, label: "Email" },
              ].map(({ icon: Icon, label }) => (
                <button
                  key={label}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/10 hover:bg-brand-blue transition-colors duration-200 flex items-center justify-center"
                >
                  <Icon className="w-4 h-4" />
                </button>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {[
                { href: "/", label: "Home" },
                { href: "/services", label: "Services" },
                { href: "/about", label: "About" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">
              Services
            </h4>
            <ul className="space-y-2.5">
              {[
                "IT Infrastructure",
                "Cloud Solutions",
                "AI & Automation",
                "Data Analytics",
                "Managed Services",
                "Security",
              ].map((s) => (
                <li key={s}>
                  <span className="text-sm text-white/60">{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/40">
            &copy; {year} Gramatis. All rights reserved.
          </p>
          <p className="text-xs text-white/40">
            Built with precision. Delivered with purpose.
          </p>
        </div>
      </div>
    </footer>
  );
}
