export interface GalleryImage {
  src: string;        // path relative to /public
  alt: string;
  caption?: string;
}

export const galleryImages: GalleryImage[] = [
  {
    src: "/images/gallery/workshop-genai-2026.jpg",
    alt: "Generative AI Fundamentals workshop",
    caption: "Generative AI Fundamentals Workshop, Feb 2026",
  },
  // add one entry per photo you drop in public/images/gallery/
];