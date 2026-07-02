import type { Publication } from "@/lib/types";

export const publications: Publication[] = [
  {
    title: "Your Research Paper Title Here",
    authors: ["R. Haldar", "G. J. W. Kathrine", "I. Titus"],
    year: 2024,
    type: "Journal", // Must be "Journal", "Conference", or "Patent"
    link: "10.1109/JIOT.2024.1234567" // Optional: Link to the paper
  },
  {
    title: "Your Research Patent Title Here",
    authors: ["R. Haldar", "G. J. W. Kathrine", "I. Titus"],
    year: 2024,
    type: "Patent",
    link: ""
  },
  // You can add as many as you want...
];
