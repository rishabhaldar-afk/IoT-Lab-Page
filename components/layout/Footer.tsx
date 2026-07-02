import React from "react";
import Link from "next/link";
import { Cpu } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-[#1A1A2E] text-white overflow-hidden">
      {/* Decorative top border */}
      <div className="h-1 w-full bg-gradient-to-r from-coral-500 via-teal-400 to-lavender-400" />

      {/* Blob decorations */}
      <div className="absolute top-20 -left-40 w-80 h-80 bg-coral-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 -right-40 w-80 h-80 bg-teal-400/5 rounded-full blur-3xl" />

      <div className="section-container relative py-12 md:py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
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
