"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "@/lib/gsap";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  const headingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!headingRef.current) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) return;

    const elements = headingRef.current.children;

    gsap.fromTo(
      elements,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <div
      ref={headingRef}
      className={`mb-12 md:mb-16 ${
        align === "center" ? "text-center" : "text-left"
      } ${className}`}
    >
      <h2 className="heading-lg text-[var(--color-text-primary)]">{title}</h2>
      {subtitle && (
        <p className="body-lg text-[var(--color-text-secondary)] mt-4 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div
        className={`mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-coral-500 to-teal-400 ${
          align === "center" ? "mx-auto" : ""
        }`}
      />
    </div>
  );
}
