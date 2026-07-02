"use client";

import React, { useEffect, useRef } from "react";
import { events } from "@/content/events";
import { EventTimelineItem } from "@/components/events/EventTimelineItem";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { gsap } from "@/lib/gsap";

export function EventsClient() {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!timelineRef.current) return;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const items = timelineRef.current.querySelectorAll(".event-timeline-item");
    items.forEach((item) => {
      gsap.fromTo(
        item,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
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

  // Sort events by date (newest first)
  const sortedEvents = [...events].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="pt-28 pb-20 md:pt-36 md:pb-32">
      <div className="section-container">
        <SectionHeading
          title="Events & Activities"
          subtitle="Workshops, FDPs, hackathons, and more — our journey of learning and innovation."
        />

        <div ref={timelineRef} className="max-w-3xl mx-auto">
          {sortedEvents.map((event, i) => (
            <EventTimelineItem
              key={event.slug}
              event={event}
              isLast={i === sortedEvents.length - 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
