"use client";

import React, { useEffect, useRef } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { gsap } from "@/lib/gsap";
import { Target, Lightbulb, GraduationCap, Handshake, Calendar } from "lucide-react";

const milestones = [
  {
    date: "January 2022",
    title: "Intel MoU Signed",
    description:
      "Memorandum of Understanding signed between Intel India and Karunya Institute, establishing the AIIoT Lab.",
    icon: Handshake,
  },
  {
    date: "2022–2023",
    title: "Lab Setup & Equipment Procurement",
    description:
      "State-of-the-art equipment including drones, edge compute kits, 3D printers, and server infrastructure installed.",
    icon: Target,
  },
  {
    date: "2023",
    title: "First Batch of 240+ Students Trained",
    description:
      "Intel Unnati Industrial Training program launches, training 240+ students in AI, IoT, and edge computing.",
    icon: GraduationCap,
  },
  {
    date: "2023–2024",
    title: "Competitions & Campus Visits",
    description:
      "Students win ₹2,40,000+ in Intel Unnati Grand Challenge. 41 students visit Intel Bengaluru campus.",
    icon: Lightbulb,
  },
  {
    date: "2024–Present",
    title: "Ongoing Research & Innovation",
    description:
      "Active research in Edge AI, Robotics, Computer Vision, and 6G/ISAC. 50+ workshops and events conducted.",
    icon: Calendar,
  },
];

const values = [
  {
    title: "Hands-On Learning",
    description:
      "Every student gets direct access to industry-grade hardware — not just textbooks and simulations.",
    color: "#FF6B6B",
  },
  {
    title: "Industry Partnership",
    description:
      "Direct collaboration with Intel ensures our curriculum stays aligned with cutting-edge technology.",
    color: "#4ECDC4",
  },
  {
    title: "Research Excellence",
    description:
      "From Edge AI to Robotics, our lab supports frontier research with real-world applications.",
    color: "#A78BFA",
  },
  {
    title: "Student Success",
    description:
      "Our students compete nationally, publish research, and gain invaluable industry exposure.",
    color: "#FFE66D",
  },
];

export function AboutClient() {
  const milestonesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!milestonesRef.current) return;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const items = milestonesRef.current.querySelectorAll(".milestone-item");
    items.forEach((item) => {
      gsap.fromTo(
        item,
        { opacity: 0, x: -40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  return (
    <div className="pt-28 pb-20 md:pt-36 md:pb-32">
      <div className="section-container">
        {/* Hero section */}
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-28">
          <h1 className="heading-xl">
            About the{" "}
            <br/>
            <span className="gradient-text">Intel Unnati AIIoT Lab</span>
          </h1>
          <p className="body-lg text-[var(--color-text-secondary)] mt-6">
            The Intel Unnati AIIoT Lab was established under a Memorandum of
            Understanding between Intel India and Karunya Institute of
            Technology &amp; Sciences (KITS), Coimbatore, signed on{" "}
            <strong>25 January 2022</strong>. The lab serves as a
            state-of-the-art facility for research and training in AI, IoT,
            Edge Computing, and Robotics.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 md:mb-28">
          <div className="card p-8 md:p-10">
            <div className="w-14 h-14 rounded-2xl bg-coral-50 flex items-center justify-center mb-5">
              <Target className="w-7 h-7 text-coral-500" />
            </div>
            <h2 className="heading-sm text-[var(--color-text-primary)] mb-3">
              Our Mission
            </h2>
            <p className="body-md text-[var(--color-text-secondary)]">
              To empower students and researchers with hands-on access to
              industry-grade AI and IoT hardware, fostering innovation through
              Intel&apos;s cutting-edge technology ecosystem and preparing the next
              generation of technology leaders.
            </p>
          </div>
          <div className="card p-8 md:p-10">
            <div className="w-14 h-14 rounded-2xl bg-teal-50 flex items-center justify-center mb-5">
              <Lightbulb className="w-7 h-7 text-teal-500" />
            </div>
            <h2 className="heading-sm text-[var(--color-text-primary)] mb-3">
              Our Vision
            </h2>
            <p className="body-md text-[var(--color-text-secondary)]">
              To become a leading center of excellence for AIIoT research and
              education in South India, bridging the gap between academia and
              industry through transformative technology partnerships.
            </p>
          </div>
        </div>

        {/* Values */}
        <SectionHeading title="What We Stand For" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 md:mb-28">
          {values.map((value) => (
            <div key={value.title} className="card p-6 text-center group">
              <div
                className="w-3 h-3 rounded-full mx-auto mb-4 transition-transform duration-300 group-hover:scale-150"
                style={{ backgroundColor: value.color }}
              />
              <h3 className="font-heading font-semibold text-base text-[var(--color-text-primary)] mb-2">
                {value.title}
              </h3>
              <p className="text-sm text-[var(--color-text-muted)]">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <SectionHeading
          title="Our Journey"
          subtitle="Key milestones in the lab's history"
        />
        <div ref={milestonesRef} className="max-w-3xl mx-auto">
          {milestones.map((milestone, i) => {
            const Icon = milestone.icon;
            return (
              <div
                key={milestone.title}
                className="milestone-item flex gap-6 mb-12 last:mb-0"
              >
                {/* Timeline dot and line */}
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-coral-500 to-teal-400 flex items-center justify-center shadow-md flex-shrink-0">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  {i < milestones.length - 1 && (
                    <div className="w-0.5 flex-1 bg-gradient-to-b from-coral-200 to-teal-200 mt-3" />
                  )}
                </div>

                {/* Content */}
                <div className="pb-8">
                  <span className="text-xs font-semibold text-coral-500 uppercase tracking-wider">
                    {milestone.date}
                  </span>
                  <h3 className="heading-sm text-[var(--color-text-primary)] mt-1">
                    {milestone.title}
                  </h3>
                  <p className="body-md text-[var(--color-text-secondary)] mt-2">
                    {milestone.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
