"use client";

import React from "react";
import type { Device } from "@/lib/types";
import { Badge } from "@/components/ui/Badge";
import { useDeviceStore } from "@/lib/store";
import {
  Bot,
  Cpu,
  Wifi,
  ScanLine,
  Printer,
  Server,
  Box,
} from "lucide-react";

const categoryIcons: Record<string, React.ComponentType<{ className?: string; style?: React.CSSProperties }>> = {
  Robotics: Bot,
  "Edge Compute": Cpu,
  Networking: Wifi,
  Sensing: ScanLine,
  Fabrication: Printer,
  Server: Server,
};

interface DeviceCardProps {
  device: Device;
}

export function DeviceCard({ device }: DeviceCardProps) {
  const setActiveDevice = useDeviceStore((s) => s.setActiveDevice);
  const Icon = categoryIcons[device.category] || Box;

  return (
    <button
      onClick={() => setActiveDevice(device)}
      className="card p-5 text-left w-full group cursor-pointer focus:outline-none focus:ring-2 focus:ring-coral-400 focus:ring-offset-2"
      id={`device-card-${device.slug}`}
      aria-label={`View ${device.name} in 3D`}
    >
      {/* Image / Placeholder tile */}
      <div
        className="w-full aspect-[4/3] rounded-2xl flex items-center justify-center mb-4 relative overflow-hidden transition-all duration-500 group-hover:scale-[1.03] group-hover:shadow-lg"
        style={{
          background: `linear-gradient(135deg, ${device.color}15, ${device.color}35)`,
        }}
      >
        <Icon
          className="w-20 h-20 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
          style={{ color: device.color }}
        />

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl flex items-end justify-center pb-4">
          <span className="text-white text-sm font-medium bg-black/40 px-4 py-1.5 rounded-full backdrop-blur-sm">
            Click for 3D View
          </span>
        </div>
      </div>

      {/* Category badge */}
      <Badge color={device.color}>{device.category}</Badge>

      {/* Name */}
      <h3 className="font-heading font-semibold text-base mt-2.5 text-[var(--color-text-primary)] group-hover:text-coral-600 transition-colors line-clamp-2">
        {device.name}
      </h3>

      {/* Description */}
      <p className="text-sm text-[var(--color-text-muted)] mt-1.5 line-clamp-2">
        {device.shortDescription}
      </p>

      {/* Quantity badge */}
      {device.quantity && device.quantity > 1 && (
        <div className="mt-3 inline-flex items-center gap-1 text-xs text-[var(--color-text-muted)] bg-surface-100 px-2.5 py-1 rounded-full">
          <span className="font-semibold text-[var(--color-text-secondary)]">
            ×{device.quantity}
          </span>
          units
        </div>
      )}
    </button>
  );
}
