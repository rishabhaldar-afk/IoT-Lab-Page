import React from "react";
import type { Metadata } from "next";
import { ResearchClient } from "./ResearchClient";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Explore our research areas: AI/ML, Computer Vision, Edge AI, IoT, Robotics, and 6G/ISAC at the Intel Unnati AIIoT Lab.",
};

export default function ResearchPage() {
  return <ResearchClient />;
}
