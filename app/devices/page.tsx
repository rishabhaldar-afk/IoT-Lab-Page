"use client";

import React, { useState, useEffect, useRef } from "react";
import { devices } from "@/content/devices";
import { DeviceCard } from "@/components/devices/DeviceCard";
import { DeviceModal } from "@/components/devices/DeviceModal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Search, X } from "lucide-react";
import type { DeviceCategory } from "@/lib/types";
import { gsap } from "@/lib/gsap";

const categories: ("All" | DeviceCategory)[] = [
  "All",
  "Robotics",
  "Edge Compute",
  "Networking",
  "Sensing",
  "Fabrication",
  "Server",
];

const categoryColors: Record<string, string> = {
  All: "#FF6B6B",
  Robotics: "#FF6B6B",
  "Edge Compute": "#A78BFA",
  Networking: "#0EA5E9",
  Sensing: "#10B981",
  Fabrication: "#4ECDC4",
  Server: "#6366F1",
};

export default function DevicesPage() {
  const [activeCategory, setActiveCategory] = useState<"All" | DeviceCategory>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const gridRef = useRef<HTMLDivElement>(null);

  const filteredDevices = devices.filter((device) => {
    const matchesCategory =
      activeCategory === "All" || device.category === activeCategory;
    const matchesSearch =
      searchQuery === "" ||
      device.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      device.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      device.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Animate grid items on filter change
  useEffect(() => {
    if (!gridRef.current) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) return;

    const cards = gridRef.current.children;
    gsap.fromTo(
      cards,
      { opacity: 0, y: 30, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.5,
        stagger: 0.08,
        ease: "power3.out",
      }
    );
  }, [activeCategory, searchQuery]);

  return (
    <>
      <div className="pt-28 pb-20 md:pt-36 md:pb-32">
        <div className="section-container">
          <SectionHeading
            title="Lab Devices"
            subtitle="Explore our collection of industry-grade hardware — click any device to interact with its 3D model."
          />

          {/* Search bar */}
          <div className="max-w-md mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--color-text-muted)]" />
              <input
                type="text"
                placeholder="Search devices..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-10 py-3 rounded-full bg-white border border-surface-200 text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:ring-2 focus:ring-coral-400 focus:border-transparent shadow-soft transition-shadow"
                id="device-search"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-surface-100 hover:bg-surface-200 flex items-center justify-center transition-colors"
                  aria-label="Clear search"
                >
                  <X className="w-3 h-3 text-[var(--color-text-muted)]" />
                </button>
              )}
            </div>
          </div>

          {/* Category filter tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              const color = categoryColors[cat];
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "text-white shadow-md"
                      : "bg-white text-[var(--color-text-secondary)] hover:bg-surface-100 border border-surface-200"
                  }`}
                  style={
                    isActive
                      ? { backgroundColor: color }
                      : {}
                  }
                  id={`filter-${cat.toLowerCase().replace(" ", "-")}`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Device grid */}
          <div
            ref={gridRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filteredDevices.map((device) => (
              <DeviceCard key={device.slug} device={device} />
            ))}
          </div>

          {/* Empty state */}
          {filteredDevices.length === 0 && (
            <div className="text-center py-20">
              <div className="text-5xl mb-4">🔍</div>
              <h3 className="heading-sm text-[var(--color-text-primary)] mb-2">
                No devices found
              </h3>
              <p className="text-sm text-[var(--color-text-muted)]">
                Try adjusting your search or filter criteria.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Device 3D Modal */}
      <DeviceModal />
    </>
  );
}
