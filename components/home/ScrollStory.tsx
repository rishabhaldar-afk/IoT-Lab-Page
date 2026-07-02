"use client";

import React, { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { Cpu, Users, Trophy, Calendar } from "lucide-react";

const panels = [
  {
    id: "mou",
    title: "Intel × Karunya Partnership",
    description:
      "In January 2022, Intel India signed an MoU with Karunya Institute of Technology & Sciences to establish the AIIoT Lab — a state-of-the-art facility for hands-on education in AI, IoT, Edge Computing, and Robotics.",
    gradient: "from-coral-500 to-coral-600",
    icon: "🤝",
  },
  {
    id: "devices",
    title: "Cutting-Edge Hardware",
    description:
      "From autonomous drones and robotic arms to edge AI compute kits and 3D printers — our lab houses real-world hardware used by industry professionals. Interact with them in 3D on our Devices page.",
    gradient: "from-teal-400 to-teal-500",
    icon: "🔬",
  },
  {
    id: "achievements",
    title: "Student Excellence",
    description:
      "240+ students trained, ₹2,40,000+ won in competitions, and 41 students visited the Intel Bengaluru campus. Our students consistently push the boundaries of innovation.",
    gradient: "from-lavender-400 to-lavender-500",
    icon: "🏆",
  },
  {
    id: "explore",
    title: "Start Exploring",
    description:
      "Dive into our equipment catalog, meet our team, explore our research areas, and discover upcoming events. The future of AI and IoT starts here.",
    gradient: "from-sunny-400 to-sunny-500",
    icon: "🚀",
  },
];

export function ScrollStory() {
  const containerRef = useRef<HTMLDivElement>(null);
  const panelsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      panelsRef.current.forEach((panel, i) => {
        if (!panel) return;

        gsap.fromTo(
          panel.querySelector(".scroll-panel-content"),
          { opacity: 0, y: 80, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: panel,
              start: "top 70%",
              end: "top 30%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative py-20 md:py-32" id="scroll-story">
      <div className="section-container">
        <div className="space-y-24 md:space-y-40">
          {panels.map((panel, i) => (
            <div
              key={panel.id}
              ref={(el) => {
                if (el) panelsRef.current[i] = el;
              }}
              className="flex items-center justify-center min-h-[60vh]"
            >
              <div className="scroll-panel-content max-w-3xl mx-auto text-center">
                {/* Icon */}
                <div className="text-6xl md:text-7xl mb-8">{panel.icon}</div>

                {/* Title */}
                <h2 className="heading-lg mb-6">
                  <span
                    className={`bg-clip-text text-transparent bg-gradient-to-r ${panel.gradient}`}
                  >
                    {panel.title}
                  </span>
                </h2>

                {/* Description */}
                <p className="body-lg text-[var(--color-text-secondary)] leading-relaxed">
                  {panel.description}
                </p>

                {/* Decorative line */}
                <div
                  className={`mt-8 h-1 w-16 mx-auto rounded-full bg-gradient-to-r ${panel.gradient}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
