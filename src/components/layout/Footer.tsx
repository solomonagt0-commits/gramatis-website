import Link from "next/link";
import { Zap, Mail } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-brand-navy text-white overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 opacity-20 bg-gradient-to-t from-brand-blue to-transparent pointer-events-none" />

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
            <p className="text-sm text-white-60 max-w-xs leading-relaxed">
              IT consulting that actually delivers. We help businesses build
              smarter systems, streamline operations, and unlock the power of
              AI — without the buzzword overhead.
            </p>
            <div className="flex gap-3 mt-5">
              {/* LinkedIn */}
              <a
                href="https://linkedin.com/company/gramatis"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-lg bg-white-10 hover:bg-brand-blue transition-colors duration-200 flex items-center justify-center"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              {/* Twitter/X */}
              <a
                href="https://twitter.com/gramatis"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="w-9 h-9 rounded-lg bg-white-10 hover:bg-brand-blue transition-colors duration-200 flex items-center justify-center"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              {/* Email */}
              <a
                href="mailto:hello@gramatis.com"
                aria-label="Email"
                className="w-9 h-9 rounded-lg bg-white-10 hover:bg-brand-blue transition-colors duration-200 flex items-center justify-center"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white-40 mb-4">
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
                    className="text-sm text-white-60 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white-40 mb-4">
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
                  <span className="text-sm text-white-60">{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white-40">
            &copy; {year} Gramatis. All rights reserved.
          </p>
          <p className="text-xs text-white-40">
            Built with precision. Delivered with purpose.
          </p>
        </div>
      </div>
    </footer>
  );
}
