"use client";

import React from "react";
import type { Person } from "@/lib/types";
import { Badge } from "@/components/ui/Badge";
import { User, Award } from "lucide-react";

const roleColors: Record<string, string> = {
  "Lab Coordinator": "#FF6B6B",
  HoD: "#6366F1",
  Faculty: "#4ECDC4",
  "Student Achiever": "#FFE66D",
};

interface PersonCardProps {
  person: Person;
}

export function PersonCard({ person }: PersonCardProps) {
  const color = roleColors[person.role] || "#A78BFA";

  return (
    <div className="card p-6 text-center group" id={`person-${person.slug}`}>
      {/* Avatar placeholder */}
      <div
        className="w-24 h-24 mx-auto rounded-full flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
        style={{
          background: `linear-gradient(135deg, ${color}20, ${color}40)`,
        }}
      >
        <User className="w-10 h-10" style={{ color }} />
      </div>

      <Badge color={color}>{person.role}</Badge>

      <h3 className="font-heading font-semibold text-base mt-3 text-[var(--color-text-primary)]">
        {person.name}
      </h3>

      {person.title && (
        <p className="text-sm text-[var(--color-text-muted)] mt-1">
          {person.title}
        </p>
      )}

      {person.department && (
        <p className="text-xs text-[var(--color-text-muted)] mt-0.5">
          {person.department}
        </p>
      )}

      {person.bio && (
        <p className="text-sm text-[var(--color-text-secondary)] mt-3 line-clamp-3">
          {person.bio}
        </p>
      )}

      {/* Achievements */}
      {person.achievements && person.achievements.length > 0 && (
        <div className="mt-4 space-y-1.5">
          {person.achievements.slice(0, 3).map((achievement) => (
            <div
              key={achievement}
              className="flex items-center gap-1.5 text-xs text-[var(--color-text-muted)]"
            >
              <Award className="w-3 h-3 flex-shrink-0" style={{ color }} />
              <span className="truncate">{achievement}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
