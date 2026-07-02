import React from "react";
import { notFound } from "next/navigation";
import { devices } from "@/content/devices";
import type { Metadata } from "next";
import { DeviceDetailClient } from "./DeviceDetailClient";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return devices.map((device) => ({
    slug: device.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const device = devices.find((d) => d.slug === slug);
  if (!device) return {};

  return {
    title: device.name,
    description: device.shortDescription,
  };
}

export default async function DeviceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const device = devices.find((d) => d.slug === slug);

  if (!device) {
    notFound();
  }

  return <DeviceDetailClient device={device} />;
}
