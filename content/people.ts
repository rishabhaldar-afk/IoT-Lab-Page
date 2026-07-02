import type { Person } from "@/lib/types";

export const people: Person[] = [
  {
    slug: "lab-coordinator",
    name: "Lab Coordinator",
    role: "Lab Coordinator",
    title: "Assistant Professor",
    department: "Division of Computer Science and Engineering",
    achievements: [
      "Established the Intel Unnati AIIoT Lab",
      "Coordinated Intel Unnati Industrial Training program",
    ],
    bio: "Oversees the day-to-day operations of the Intel Unnati AIIoT Lab and coordinates all Intel partnership activities.",
    hasRealPhoto: false,
  },
  {
    slug: "hod-cse",
    name: "Head of Department",
    role: "HoD",
    title: "Professor & Head",
    department: "Division of Computer Science and Engineering",
    achievements: [
      "Signed MoU with Intel (25 Jan 2022)",
      "Spearheaded AI/IoT curriculum integration",
    ],
    bio: "Leads the Division of Computer Science and Engineering and championed the Intel partnership for hands-on AI/IoT education.",
    hasRealPhoto: false,
  },
  {
    slug: "faculty-member-1",
    name: "Faculty Member",
    role: "Faculty",
    title: "Associate Professor",
    department: "Division of Computer Science and Engineering",
    achievements: [
      "Intel Unnati Faculty Development Program participant",
      "Research in Edge AI and IoT",
    ],
    bio: "Contributes to the lab's research output and mentors student teams for Intel Unnati challenges.",
    hasRealPhoto: false,
  },
  {
    slug: "student-achiever-1",
    name: "Student Achiever",
    role: "Student Achiever",
    department: "Computer Science and Engineering",
    achievements: [
      "Intel Unnati Grand Challenge Winner",
      "Visited Intel Bengaluru Campus",
      "Developed AI-powered IoT solution",
    ],
    bio: "Top performer in the Intel Unnati Industrial Training program and Grand Challenge competition.",
    hasRealPhoto: false,
  },
  {
    slug: "student-achiever-2",
    name: "Student Achiever",
    role: "Student Achiever",
    department: "Computer Science and Engineering",
    achievements: [
      "Intel Unnati Catalyst Program participant",
      "Hackathon winner",
      "Published research on edge computing",
    ],
    bio: "Active contributor to the lab's robotics and edge AI research projects.",
    hasRealPhoto: false,
  },
];
