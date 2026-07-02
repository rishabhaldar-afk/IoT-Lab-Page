"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { Users, Trophy, Building2, Calendar } from "lucide-react";

const stats = [
  {
    value: 240,
    suffix: "+",
    label: "Students Trained",
    description: "via Intel Unnati Industrial Training",
    icon: Users,
    color: "#FF6B6B",
  },
  {
    value: 240000,
    prefix: "₹",
    suffix: "+",
    label: "Won in Competitions",
    description: "Intel Unnati Grand Challenge & more",
    icon: Trophy,
    color: "#FFE66D",
  },
  {
    value: 41,
    label: "Intel Campus Visitors",
    description: "Students visited Intel Bengaluru",
    icon: Building2,
    color: "#4ECDC4",
  },
  {
    value: 50,
    suffix: "+",
    label: "Events Conducted",
    description: "Workshops, FDPs, hackathons",
    icon: Calendar,
    color: "#A78BFA",
  },
];

export function StatsCounter() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const countRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    countRefs.current.forEach((el, i) => {
      if (!el) return;

      const stat = stats[i];
      const prefix = stat.prefix || "";
      const suffix = stat.suffix || "";

      if (prefersReduced) {
        el.textContent = `${prefix}${stat.value.toLocaleString()}${suffix}`;
        return;
      }

      const obj = { value: 0 };
      gsap.to(obj, {
        value: stat.value,
        duration: 2.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none",
        },
        onUpdate: () => {
          el.textContent = `${prefix}${Math.round(
            obj.value
          ).toLocaleString()}${suffix}`;
        },
      });
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-32 overflow-hidden"
      id="stats"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-coral-50/30 to-transparent" />

      <div className="section-container relative">
        <div className="text-center mb-16">
          <h2 className="heading-lg">
            Impact in{" "}
            <span className="gradient-text">Numbers</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="card p-6 md:p-8 text-center group"
              >
                {/* Icon */}
                <div
                  className="w-14 h-14 mx-auto mb-5 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${stat.color}15` }}
                >
                  <Icon
                    className="w-7 h-7"
                    style={{ color: stat.color }}
                  />
                </div>

                {/* Number */}
                <span
                  ref={(el) => {
                    countRefs.current[i] = el;
                  }}
                  className="block text-3xl md:text-4xl font-heading font-bold text-[var(--color-text-primary)]"
                >
                  0
                </span>

                {/* Label */}
                <span className="block mt-2 font-heading font-semibold text-sm text-[var(--color-text-primary)]">
                  {stat.label}
                </span>

                {/* Description */}
                <span className="block mt-1 text-xs text-[var(--color-text-muted)]">
                  {stat.description}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
