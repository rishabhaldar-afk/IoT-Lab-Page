import React from "react";
import type { Metadata } from "next";
import { EventsClient } from "./EventsClient";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Browse workshops, FDPs, hackathons, and Intel Unnati events at the AIIoT Lab.",
};

export default function EventsPage() {
  return <EventsClient />;
}
