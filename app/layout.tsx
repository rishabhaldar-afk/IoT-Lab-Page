import type { Metadata } from "next";
import "@/styles/globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "Intel Unnati AIIoT Lab | Karunya Institute of Technology & Sciences",
    template: "%s | Intel Unnati AIIoT Lab",
  },
  description:
    "Where AI meets IoT — Karunya's Intel-powered innovation lab. Explore our cutting-edge devices, research in AI/ML, Edge Computing, IoT, and Robotics at KITS Coimbatore.",
  keywords: [
    "Intel Unnati",
    "AIIoT Lab",
    "Karunya",
    "KITS",
    "Coimbatore",
    "AI",
    "IoT",
    "Edge Computing",
    "Robotics",
    "Computer Vision",
  ],
  icons: {
    icon: "/karunya-logo-tab.png?v=2",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col" suppressHydrationWarning>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
