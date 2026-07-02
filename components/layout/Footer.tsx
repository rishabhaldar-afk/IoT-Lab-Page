import React from "react";
import Link from "next/link";
import { Cpu, MapPin, Mail, ExternalLink } from "lucide-react";

const quickLinks = [
  { href: "/about", label: "About the Lab" },
  { href: "/devices", label: "Devices" },
  { href: "/people", label: "People" },
  { href: "/research", label: "Research" },
  { href: "/events", label: "Events" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="relative bg-[#1A1A2E] text-white overflow-hidden">
      {/* Decorative top border */}
      <div className="h-1 w-full bg-gradient-to-r from-coral-500 via-teal-400 to-lavender-400" />

      {/* Blob decorations */}
      <div className="absolute top-20 -left-40 w-80 h-80 bg-coral-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 -right-40 w-80 h-80 bg-teal-400/5 rounded-full blur-3xl" />

      <div className="section-container relative py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-coral-500 to-teal-400 flex items-center justify-center">
                <Cpu className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-sm leading-tight">
                  Intel Unnati
                </span>
                <span className="font-heading text-xs leading-tight text-white/60">
                  AIIoT Lab
                </span>
              </div>
            </Link>
            <p className="text-sm text-white/60 leading-relaxed">
              Where AI meets IoT — Karunya&apos;s Intel-powered innovation lab.
              Established under Intel&apos;s MoU with KITS, Coimbatore.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-sm uppercase tracking-wider text-white/40 mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-teal-400 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-semibold text-sm uppercase tracking-wider text-white/40 mb-5">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-coral-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-white/70 leading-relaxed">
                  Division of CSE,
                  <br />
                  Karunya Institute of Technology & Sciences,
                  <br />
                  Coimbatore, Tamil Nadu, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-teal-400 flex-shrink-0" />
                <a
                  href="mailto:aiiotlab@karunya.edu"
                  className="text-sm text-white/70 hover:text-teal-400 transition-colors"
                >
                  aiiotlab@karunya.edu
                </a>
              </li>
            </ul>
          </div>

          {/* Intel Unnati */}
          <div>
            <h3 className="font-heading font-semibold text-sm uppercase tracking-wider text-white/40 mb-5">
              Intel Unnati
            </h3>
            <p className="text-sm text-white/60 leading-relaxed mb-4">
              Part of Intel&apos;s Unnati program empowering Indian universities with
              cutting-edge technology for AI, IoT, and edge computing education.
            </p>
            <a
              href="https://www.intel.in/content/www/in/en/education/intel-unnati.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-teal-400 hover:text-teal-300 transition-colors"
            >
              Learn more about Intel Unnati
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Intel Unnati AIIoT Lab, KITS Coimbatore.
            All rights reserved.
          </p>
          <p className="text-xs text-white/40">
            Division of Computer Science and Engineering
          </p>
        </div>
      </div>
    </footer>
  );
}
