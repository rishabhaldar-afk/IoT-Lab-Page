# Intel Unnati AIIoT Lab Website

The official website for the **Intel Unnati AIIoT Lab**, Division of Computer Science and Engineering, Karunya Institute of Technology & Sciences (KITS), Coimbatore.

Built with Next.js 14+, TypeScript, Tailwind CSS v3, GSAP animations, and React Three Fiber for interactive 3D device viewers.

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+ (tested on v24)
- **npm** (or pnpm)

### Install & Run

```bash
# Clone/navigate to the project
cd aiiot-lab-website

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

---

## 📱 Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Apple-style hero, scroll storytelling, stats, featured devices |
| About | `/about` | Lab history, Intel MoU, mission, milestones timeline |
| Devices | `/devices` | Filterable device grid → 3D viewer modal |
| Device Detail | `/devices/[slug]` | Deep-link to single device with inline 3D |
| People | `/people` | Faculty, coordinators, student hall of fame |
| Research | `/research` | Six research areas, publications (empty-state ready) |
| Events | `/events` | Animated timeline of workshops, FDPs, hackathons |
| Gallery | `/gallery` | Photo gallery (empty-state until photos are added) |
| Contact | `/contact` | Location, map, Formspree contact form |

---

## 🔧 How to Add a New Device (3 Steps)

Adding a new device requires **no code changes** — just content and assets:

### Step 1: Add the photo
Drop a `.jpg` or `.png` image in:
```
public/images/devices/[your-device-slug].jpg
```

### Step 2: Add the 3D model (optional)
Drop a `.glb` or `.gltf` file in:
```
public/models/[your-device-slug].glb
```

### Step 3: Add the data entry
Open `content/devices.ts` and add a new object to the array:

```ts
{
  slug: "your-device-slug",
  name: "Your Device Name",
  category: "Robotics",  // one of: Robotics, Edge Compute, Networking, Sensing, Fabrication, Server
  shortDescription: "A brief description of the device.",
  image: "/images/devices/your-device-slug.jpg",
  model3d: "/models/your-device-slug.glb",
  specs: [
    { label: "Weight", value: "500g" },
    // ... more specs
  ],
  applications: ["Application 1", "Application 2"],
  quantity: 1,
  color: "#FF6B6B",  // hex accent color for the card
  hasRealModel: true,   // set to true if you added a .glb
  hasRealPhoto: true,   // set to true if you added a photo
}
```

That's it! The device will appear automatically in the grid, modal, and deep-link page.

---

## 🔮 Swapping Placeholder 3D Models for Real Scans

1. Obtain a `.glb` file of the device (from a 3D scanner, Blender export, or Sketchfab CC0)
2. Name it with the device's `slug` → e.g., `autonomous-quadcopter-drone.glb`
3. Drop it in `public/models/`
4. In `content/devices.ts`, set `hasRealModel: true` for that device
5. The placeholder geometry will be replaced automatically; the "3D scan coming soon" badge will disappear

---

## 🎨 Tech Stack

- **Framework:** Next.js 14+ (App Router, TypeScript)
- **Styling:** Tailwind CSS v3 + CSS custom properties
- **Animation:** GSAP + ScrollTrigger
- **3D:** React Three Fiber + @react-three/drei
- **State:** Zustand
- **Icons:** Lucide React
- **Fonts:** Quicksand (headings) + Inter (body) — Google Fonts

---

## 📁 Project Structure

```
aiiot-lab-website/
├── app/                    # Next.js App Router pages
├── components/             # Reusable UI and feature components
│   ├── layout/             # Navbar, Footer
│   ├── home/               # Hero, ScrollStory, StatsCounter
│   ├── devices/            # DeviceCard, DeviceViewer3D, DeviceModal, DeviceSpecsPanel
│   ├── people/             # PersonCard
│   ├── events/             # EventTimelineItem
│   └── ui/                 # Button, Badge, SectionHeading
├── content/                # ← ADD NEW CONTENT HERE (no code changes needed)
│   ├── devices.ts
│   ├── people.ts
│   ├── events.ts
│   └── researchAreas.ts
├── lib/                    # Utilities, types, state
│   ├── types.ts            # TypeScript interfaces
│   ├── gsap.ts             # GSAP registration + helpers
│   └── store.ts            # Zustand store
├── public/
│   ├── models/             # .glb 3D models
│   └── images/             # Device photos, gallery photos
├── styles/globals.css      # Theme tokens + Tailwind directives
└── tailwind.config.ts      # Tailwind theme configuration
```

---

## 📋 Formspree Setup

The contact form uses [Formspree](https://formspree.io/). To activate it:

1. Create a free Formspree account
2. Create a new form
3. Copy your form ID (e.g., `xwkgjqpl`)
4. Replace `YOUR_FORM_ID` in `app/contact/ContactClient.tsx` with your form ID

---

## 📄 License

This project is for Karunya Institute of Technology & Sciences.
