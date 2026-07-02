"use client";

import React from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import type { Device } from "@/lib/types";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ArrowLeft, Layers, Zap, Box } from "lucide-react";

const DeviceViewer3D = dynamic(
  () => import("@/components/devices/DeviceViewer3D").then((mod) => ({ default: mod.DeviceViewer3D })),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full flex items-center justify-center bg-surface-50 rounded-3xl">
        <div className="flex flex-col items-center gap-3">
          <div className="w-10 h-10 border-3 border-coral-300 border-t-coral-600 rounded-full animate-spin" />
          <span className="text-sm text-[var(--color-text-muted)]">
            Loading 3D viewer...
          </span>
        </div>
      </div>
    ),
  }
);

interface DeviceDetailClientProps {
  device: Device;
}

export function DeviceDetailClient({ device }: DeviceDetailClientProps) {
  return (
    <div className="pt-28 pb-20 md:pt-36 md:pb-32">
      <div className="section-container">
        {/* Back button */}
        <Link href="/devices" className="inline-block mb-8">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="w-4 h-4" />
            Back to Devices
          </Button>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* 3D Viewer */}
          <div className="aspect-square lg:aspect-auto lg:min-h-[500px] bg-gradient-to-br from-surface-50 to-surface-100 rounded-3xl overflow-hidden relative">
            <DeviceViewer3D device={device} />
            <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-xl shadow-soft">
              <p className="text-xs text-[var(--color-text-muted)]">
                Drag to rotate • Scroll to zoom
              </p>
            </div>
          </div>

          {/* Details */}
          <div>
            <Badge color={device.color}>{device.category}</Badge>
            <h1 className="heading-lg mt-4 text-[var(--color-text-primary)]">
              {device.name}
            </h1>
            <p className="body-lg text-[var(--color-text-secondary)] mt-4">
              {device.shortDescription}
            </p>

            {/* Specs */}
            <div className="mt-10">
              <div className="flex items-center gap-2 mb-4">
                <Layers className="w-4 h-4 text-[var(--color-text-muted)]" />
                <h2 className="font-heading font-semibold text-sm uppercase tracking-wider text-[var(--color-text-muted)]">
                  Specifications
                </h2>
              </div>
              <div className="rounded-2xl overflow-hidden border border-surface-200">
                {device.specs.map((spec, i) => (
                  <div
                    key={spec.label}
                    className={`flex items-center justify-between px-4 py-3 ${
                      i % 2 === 0 ? "bg-surface-50" : "bg-white"
                    }`}
                  >
                    <span className="text-sm text-[var(--color-text-muted)]">
                      {spec.label}
                    </span>
                    <span className="text-sm font-medium text-[var(--color-text-primary)]">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Applications */}
            <div className="mt-8">
              <div className="flex items-center gap-2 mb-4">
                <Zap className="w-4 h-4 text-[var(--color-text-muted)]" />
                <h2 className="font-heading font-semibold text-sm uppercase tracking-wider text-[var(--color-text-muted)]">
                  Applications
                </h2>
              </div>
              <ul className="space-y-2.5">
                {device.applications.map((app) => (
                  <li key={app} className="flex items-start gap-2.5">
                    <div
                      className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                      style={{ backgroundColor: device.color }}
                    />
                    <span className="text-sm text-[var(--color-text-secondary)]">
                      {app}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quantity */}
            {device.quantity && device.quantity > 1 && (
              <div className="mt-6 flex items-center gap-2 px-4 py-3 bg-surface-50 rounded-xl">
                <Box className="w-4 h-4 text-[var(--color-text-muted)]" />
                <span className="text-sm text-[var(--color-text-muted)]">
                  Quantity:
                </span>
                <span className="text-sm font-semibold text-[var(--color-text-primary)]">
                  {device.quantity} units
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
