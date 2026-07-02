"use client";

import React from "react";
import type { LabEvent } from "@/lib/types";
import { Badge } from "@/components/ui/Badge";
import {
  Calendar,
  BookOpen,
  GraduationCap,
  Code2,
  Building2,
  MessageSquare,
  Trophy,
  Presentation,
} from "lucide-react";

const typeIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  Workshop: BookOpen,
  FDP: GraduationCap,
  Hackathon: Code2,
  "Campus Visit": Building2,
  Seminar: MessageSquare,
  Training: Presentation,
  Competition: Trophy,
};

const typeColors: Record<string, string> = {
  Workshop: "#4ECDC4",
  FDP: "#A78BFA",
  Hackathon: "#FF6B6B",
  "Campus Visit": "#0EA5E9",
  Seminar: "#6366F1",
  Training: "#10B981",
  Competition: "#F59E0B",
};

interface EventTimelineItemProps {
  event: LabEvent;
  isLast: boolean;
}

export function EventTimelineItem({ event, isLast }: EventTimelineItemProps) {
  const Icon = typeIcons[event.type] || Calendar;
  const color = typeColors[event.type] || "#A78BFA";

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString("en-IN", {
      month: "short",
      year: "numeric",
    });
  };

  return (
    <div className="event-timeline-item flex gap-4 md:gap-6">
      {/* Timeline dot and line */}
      <div className="flex flex-col items-center">
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center shadow-md flex-shrink-0"
          style={{ backgroundColor: color }}
        >
          <Icon className="w-5 h-5 text-white" />
        </div>
        {!isLast && (
          <div className="w-0.5 flex-1 bg-surface-200 mt-3" />
        )}
      </div>

      {/* Content */}
      <div className="pb-10 flex-1">
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <Badge color={color}>{event.type}</Badge>
          <span className="text-xs text-[var(--color-text-muted)]">
            {formatDate(event.date)}
            {event.endDate && ` — ${formatDate(event.endDate)}`}
          </span>
        </div>

        <h3 className="heading-sm text-[var(--color-text-primary)]">
          {event.title}
        </h3>

        <p className="body-md text-[var(--color-text-secondary)] mt-2">
          {event.description}
        </p>

        {/* Highlights */}
        {event.highlights && event.highlights.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {event.highlights.map((highlight) => (
              <span
                key={highlight}
                className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-surface-50 text-[var(--color-text-secondary)] border border-surface-200"
              >
                {highlight}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
