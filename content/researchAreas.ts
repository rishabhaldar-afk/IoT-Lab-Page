import type { ResearchArea } from "@/lib/types";

export const researchAreas: ResearchArea[] = [
  {
    slug: "artificial-intelligence-ml",
    title: "AI & Machine Learning",
    description:
      "Research in deep learning, neural architecture search, federated learning, and intelligent systems for real-world applications.",
    icon: "Brain",
    color: "#FF6B6B",
    topics: [
      "Deep Learning & Neural Networks",
      "Federated Learning",
      "Natural Language Processing",
      "Reinforcement Learning",
      "AutoML & Neural Architecture Search",
    ],
  },
  {
    slug: "computer-vision",
    title: "Computer Vision",
    description:
      "Advancing visual perception with object detection, image segmentation, video analytics, and 3D reconstruction for edge deployment.",
    icon: "Eye",
    color: "#4ECDC4",
    topics: [
      "Object Detection & Tracking",
      "Semantic Segmentation",
      "3D Reconstruction",
      "Video Analytics",
      "Medical Image Analysis",
    ],
  },
  {
    slug: "edge-ai",
    title: "Edge AI & Inference",
    description:
      "Optimizing AI models for edge deployment using Intel OpenVINO, model compression, and hardware-aware optimization.",
    icon: "Cpu",
    color: "#A78BFA",
    topics: [
      "Intel OpenVINO Toolkit",
      "Model Quantization & Pruning",
      "On-device Inference",
      "Hardware-aware NAS",
      "TinyML",
    ],
  },
  {
    slug: "internet-of-things",
    title: "Internet of Things",
    description:
      "Building connected sensor networks, smart infrastructure systems, and IoT platforms using LoRaWAN, MQTT, and edge computing.",
    icon: "Wifi",
    color: "#10B981",
    topics: [
      "Sensor Networks & LoRaWAN",
      "Smart Agriculture",
      "Smart Campus Systems",
      "MQTT & IoT Protocols",
      "Digital Twins",
    ],
  },
  {
    slug: "robotics",
    title: "Robotics & Autonomous Systems",
    description:
      "Research in robotic manipulation, SLAM navigation, autonomous drones, and Sim2Real transfer for intelligent robotic agents.",
    icon: "Bot",
    color: "#EC4899",
    topics: [
      "Robotic Manipulation",
      "SLAM & Navigation",
      "Autonomous UAVs",
      "Sim2Real Transfer",
      "Human-Robot Interaction",
    ],
  },
  {
    slug: "6g-isac",
    title: "6G & ISAC",
    description:
      "Exploring next-generation communication with Integrated Sensing and Communication (ISAC), mmWave, and beyond-5G technologies.",
    icon: "Radio",
    color: "#F59E0B",
    topics: [
      "Integrated Sensing & Communication",
      "mmWave Systems",
      "Beyond-5G Research",
      "Spectrum Sharing",
      "Wireless AI",
    ],
  },
];
