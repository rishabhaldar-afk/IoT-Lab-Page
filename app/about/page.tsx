import React from "react";
import type { Metadata } from "next";
import { AboutClient } from "./AboutClient";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about the Intel Unnati AIIoT Lab — established under Intel's MoU with Karunya Institute of Technology & Sciences, Coimbatore.",
};

export default function AboutPage() {
  return <AboutClient />;
}
