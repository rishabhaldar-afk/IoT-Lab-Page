export type DeviceCategory =
  | "Robotics"
  | "Edge Compute"
  | "Networking"
  | "Sensing"
  | "Fabrication"
  | "Server";

export interface Device {
  slug: string;
  name: string;
  category: DeviceCategory;
  shortDescription: string;
  image: string;
  model3d: string;
  specs: { label: string; value: string }[];
  applications: string[];
  quantity?: number;
  color: string;
  hasRealModel: boolean;
  hasRealPhoto: boolean;
}

export interface Person {
  slug: string;
  name: string;
  role: "Lab Coordinator" | "HoD" | "Faculty" | "Student Achiever";
  title?: string;
  department?: string;
  image?: string;
  achievements?: string[];
  bio?: string;
  hasRealPhoto: boolean;
}

export interface LabEvent {
  slug: string;
  title: string;
  date: string;
  endDate?: string;
  type: "Workshop" | "FDP" | "Hackathon" | "Campus Visit" | "Seminar" | "Training" | "Competition";
  description: string;
  highlights?: string[];
  image?: string;
  hasRealPhoto: boolean;
}

export interface ResearchArea {
  slug: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  topics: string[];
  publications?: Publication[];
}

export interface Publication {
  title: string;
  authors: string[];
  venue: string;
  year: number;
  doi?: string;
  type: "Journal" | "Conference" | "Patent";
}
