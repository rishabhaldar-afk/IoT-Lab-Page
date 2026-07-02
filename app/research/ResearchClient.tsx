"use client";

import React from "react";
import { researchAreas } from "@/content/researchAreas";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  Brain,
  Eye,
  Cpu,
  Wifi,
  Bot,
  Radio,
  FileText,
  BookOpen,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string; style?: React.CSSProperties }>> = {
  Brain,
  Eye,
  Cpu,
  Wifi,
  Bot,
  Radio,
};

export function ResearchClient() {
  return (
    <div className="pt-28 pb-20 md:pt-36 md:pb-32">
      <div className="section-container">
        <SectionHeading
          title="Research Areas"
          subtitle="Our lab supports frontier research across six key thrust areas in AI, IoT, and next-gen technologies."
        />

        {/* Research area cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20 md:mb-28">
          {researchAreas.map((area) => {
            const Icon = iconMap[area.icon] || Brain;
            return (
              <div
                key={area.slug}
                className="card p-7 group"
                id={`research-${area.slug}`}
              >
                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${area.color}15` }}
                >
                  <Icon
                    className="w-7 h-7"
                    style={{ color: area.color }}
                  />
                </div>

                <h3 className="heading-sm text-[var(--color-text-primary)]">
                  {area.title}
                </h3>

                <p className="text-sm text-[var(--color-text-secondary)] mt-3 mb-5">
                  {area.description}
                </p>

                {/* Topics */}
                <div className="flex flex-wrap gap-1.5">
                  {area.topics.map((topic) => (
                    <span
                      key={topic}
                      className="px-2.5 py-1 rounded-lg text-xs bg-surface-50 text-[var(--color-text-muted)] border border-surface-200"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Publications section - empty-state friendly */}
        <SectionHeading
          title="Publications & Patents"
          subtitle="Research output from the AIIoT Lab — more entries coming soon."
        />

        <div className="max-w-2xl mx-auto">
          {/* Check if any research area has publications */}
          {researchAreas.every(
            (area) => !area.publications || area.publications.length === 0
          ) ? (
            <div className="text-center py-16">
              <div className="w-20 h-20 mx-auto mb-6 rounded-3xl bg-surface-50 flex items-center justify-center">
                <FileText className="w-10 h-10 text-[var(--color-text-muted)]" />
              </div>
              <h3 className="heading-sm text-[var(--color-text-primary)] mb-2">
                Publications coming soon
              </h3>
              <p className="text-sm text-[var(--color-text-muted)] max-w-md mx-auto">
                Our research publications and patents will be listed here as they
                are published. Check back soon!
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {researchAreas
                .flatMap((area) => area.publications || [])
                .map((pub) => (
                  <div key={pub.title} className="card p-5">
                    <div className="flex items-start gap-3">
                      <BookOpen className="w-4 h-4 text-coral-400 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-sm text-[var(--color-text-primary)]">
                          {pub.title}
                        </h4>
                        <p className="text-xs text-[var(--color-text-muted)] mt-1">
                          {pub.authors.join(", ")} • {pub.venue} • {pub.year}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
