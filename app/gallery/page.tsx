import React from "react";
import fs from "fs";
import path from "path";
import type { Metadata } from "next";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ImageIcon, Camera } from "lucide-react";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Photo gallery from the Intel Unnati AIIoT Lab at KITS Coimbatore.",
};

const GALLERY_DIR = path.join(process.cwd(), "public", "images", "gallery");
const ALLOWED_EXT = [".jpg", ".jpeg", ".png", ".webp", ".avif"];

function getGalleryImages() {
  if (!fs.existsSync(GALLERY_DIR)) return [];

  return fs
    .readdirSync(GALLERY_DIR)
    .filter((file) => ALLOWED_EXT.includes(path.extname(file).toLowerCase()))
    .sort() // alphabetical; swap for a date-based sort if you prefix filenames with dates
    .map((file) => ({
      src: `/images/gallery/${file}`,
      alt: path
        .parse(file)
        .name.replace(/[-_]/g, " ")
        .replace(/\b\w/g, (c) => c.toUpperCase()), // "genai-workshop-01" -> "Genai Workshop 01"
    }));
}

export default function GalleryPage() {
  const galleryImages = getGalleryImages();

  return (
    <div className="pt-28 pb-20 md:pt-36 md:pb-32">
      <div className="section-container">
        <SectionHeading
          title="Gallery"
          subtitle="Moments captured from our lab activities, workshops, and events."
        />

        {galleryImages.length === 0 ? (
          <div className="text-center py-20">
            <div className="w-24 h-24 mx-auto mb-6 rounded-3xl bg-gradient-to-br from-coral-50 to-teal-50 flex items-center justify-center">
              <Camera className="w-12 h-12 text-[var(--color-text-muted)]" />
            </div>
            <h3 className="heading-sm text-[var(--color-text-primary)] mb-3">
              Photos coming soon
            </h3>
            <p className="body-md text-[var(--color-text-muted)] max-w-md mx-auto mb-6">
              Check back after our next event! Photos from workshops, hackathons,
              and lab activities will appear here.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-50 border border-surface-200 text-xs text-[var(--color-text-muted)]">
              <ImageIcon className="w-3.5 h-3.5" />
              Drop photos in <code className="font-mono text-coral-500">public/images/gallery/</code> to add them
            </div>
          </div>
        ) : (
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4 mt-12">
            {galleryImages.map((img) => (
              <div
                key={img.src}
                className="break-inside-avoid rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}