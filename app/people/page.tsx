import React from "react";
import type { Metadata } from "next";
import { PeopleClient } from "./PeopleClient";

export const metadata: Metadata = {
  title: "People",
  description:
    "Meet the faculty, lab coordinators, and student achievers behind the Intel Unnati AIIoT Lab.",
};

export default function PeoplePage() {
  return <PeopleClient />;
}
