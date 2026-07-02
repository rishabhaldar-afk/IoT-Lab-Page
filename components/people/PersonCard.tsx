"use client";

import React from "react";
import Image from "next/image";
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
    <div className="card p-10 text-center group border-2 border-black bg-gradient-to-br from-yellow-100 via-pink-100 to-cyan-100" id={`person-${person.slug}`}>
      {person.hasRealPhoto ? (
        <div className="w-32 h-32 mx-auto mb-5 rounded-[2rem] overflow-hidden relative transition-transform duration-300 group-hover:scale-110 shadow-md">
          <Image
            src={`/images/people/${person.slug}.jpg`}
            alt={person.name}
            fill
            className="object-cover"
            sizes="128px"
          />
        </div>
      ) : (
        <div
          className="w-32 h-32 mx-auto rounded-[2rem] flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
          style={{
            background: `linear-gradient(135deg, ${color}20, ${color}40)`,
          }}
        >
          <User className="w-14 h-14" style={{ color }} />
        </div>
      )}

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
