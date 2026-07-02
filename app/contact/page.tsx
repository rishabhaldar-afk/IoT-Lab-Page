import React from "react";
import type { Metadata } from "next";
import { ContactClient } from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with the Intel Unnati AIIoT Lab at Karunya Institute, Coimbatore.",
};

export default function ContactPage() {
  return <ContactClient />;
}
