"use client";

import React from "react";
import { people } from "@/content/people";
import { PersonCard } from "@/components/people/PersonCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function PeopleClient() {
  const leadership = people.filter(
    (p) => p.role === "Lab Coordinator" || p.role === "HoD"
  );
  const faculty = people.filter((p) => p.role === "Faculty");
  const students = people.filter((p) => p.role === "Student Achiever");

  return (
    <div className="pt-28 pb-20 md:pt-36 md:pb-32">
      <div className="section-container">
        <SectionHeading
          title="Our People"
          subtitle="The faculty, coordinators, and student achievers driving innovation at the AIIoT Lab."
        />

        {/* Leadership */}
        {leadership.length > 0 && (
          <div className="mb-16 md:mb-20">
            <h2 className="heading-sm text-[var(--color-text-primary)] text-center mb-8">
              Lab Leadership
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {leadership.map((person) => (
                <PersonCard key={person.slug} person={person} />
              ))}
            </div>
          </div>
        )}

        {/* Faculty */}
        {faculty.length > 0 && (
          <div className="mb-16 md:mb-20">
            <h2 className="heading-sm text-[var(--color-text-primary)] text-center mb-8">
              Faculty
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {faculty.map((person) => (
                <PersonCard key={person.slug} person={person} />
              ))}
            </div>
          </div>
        )}

        {/* Student Achievers */}
        {students.length > 0 && (
          <div>
            <div className="text-center mb-8">
              <h2 className="heading-sm text-[var(--color-text-primary)]">
                🏆 Hall of Fame
              </h2>
              <p className="text-sm text-[var(--color-text-muted)] mt-2">
                Student achievers who have excelled in Intel Unnati programs and competitions
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {students.map((person) => (
                <PersonCard key={person.slug} person={person} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
