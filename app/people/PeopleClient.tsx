"use client";

import React from "react";
import { people } from "@/content/people";
import { PersonCard } from "@/components/people/PersonCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function PeopleClient() {
  const coordinators = people.filter((p) => p.role === "Lab Coordinator");
  const hod = people.filter((p) => p.role === "HoD");

  return (
    <div className="pt-28 pb-20 md:pt-36 md:pb-32">
      <div className="section-container">
        <SectionHeading
          title="Our People"
        />

        {/* Leadership */}
        <div className="mb-16 md:mb-20">
          <h2 className="heading-sm text-[var(--color-text-primary)] text-center mb-8">
            Lab Leadership
          </h2>

          {/* Coordinators Row */}
          {coordinators.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-5xl mx-auto mb-10">
              {coordinators.map((person) => (
                <PersonCard key={person.slug} person={person} />
              ))}
            </div>
          )}

          {/* HoD Row */}
          {hod.length > 0 && (
            <div className="max-w-lg mx-auto mt-10">
              {hod.map((person) => (
                <PersonCard key={person.slug} person={person} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
