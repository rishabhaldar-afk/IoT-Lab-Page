"use client";

import React from "react";
import { Hero } from "@/components/home/Hero";
import { ScrollStory } from "@/components/home/ScrollStory";
import { StatsCounter } from "@/components/home/StatsCounter";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { devices } from "@/content/devices";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import * as LucideIcons from "lucide-react";

// Category icon mapping
const categoryIcons: Record<string, keyof typeof LucideIcons> = {
  Robotics: "Bot",
  "Edge Compute": "Cpu",
  Networking: "Wifi",
  Sensing: "ScanLine",
  Fabrication: "Printer",
  Server: "Server",
};

function getCategoryIcon(category: string) {
  const iconName = categoryIcons[category] || "Box";
  const Icon = LucideIcons[iconName] as React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  return Icon;
}

// Featured devices (first 4)
const featuredDevices = devices.slice(0, 4);

export default function HomePage() {
  return (
    <>
      <Hero />
      <ScrollStory />
      <StatsCounter />

      {/* Featured Devices Section */}
      <section className="py-20 md:py-32" id="featured-devices">
        <div className="section-container">
          <SectionHeading
            title="Featured Devices"
            subtitle="Get hands-on with industry-grade hardware — from autonomous drones to edge AI compute kits."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredDevices.map((device) => {
              const Icon = getCategoryIcon(device.category);
              return (
                <Link
                  href={`/devices/${device.slug}`}
                  key={device.slug}
                  className="card p-6 group cursor-pointer"
                >
                  {/* Placeholder image tile */}
                  <div
                    className="w-full aspect-[4/3] rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-[1.03]"
                    style={{
                      background: `linear-gradient(135deg, ${device.color}20, ${device.color}40)`,
                    }}
                  >
                    <Icon
                      className="w-16 h-16 transition-transform duration-500 group-hover:rotate-12"
                      style={{ color: device.color }}
                    />
                  </div>

                  <Badge color={device.color}>{device.category}</Badge>

                  <h3 className="heading-sm mt-3 text-[var(--color-text-primary)] group-hover:text-coral-600 transition-colors">
                    {device.name}
                  </h3>

                  <p className="text-sm text-[var(--color-text-muted)] mt-2 line-clamp-2">
                    {device.shortDescription}
                  </p>
                </Link>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link href="/devices">
              <Button variant="secondary" size="lg" id="featured-view-all">
                View All Devices
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="py-20 md:py-28 relative overflow-hidden" id="cta-band">
        <div className="absolute inset-0 bg-gradient-to-r from-coral-500 via-lavender-500 to-teal-400" />
        <div className="absolute inset-0 opacity-10">
          <div
            className="w-full h-full"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="section-container relative text-center">
          <h2 className="heading-lg text-white mb-4">
            Ready to explore our research?
          </h2>
          <p className="body-lg text-white/80 max-w-xl mx-auto mb-10">
            Discover our work in AI, Edge Computing, Robotics, and more — or
            get in touch to collaborate.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/research">
              <Button
                variant="primary"
                size="lg"
                className="bg-white !text-coral-600 hover:bg-white/90 !from-white !to-white"
                id="cta-research"
              >
                Explore Research
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                size="lg"
                className="!border-white !text-white hover:!bg-white/10"
                id="cta-contact"
              >
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
