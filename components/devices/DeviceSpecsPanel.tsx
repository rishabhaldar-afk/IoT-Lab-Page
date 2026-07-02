"use client";

import React from "react";
import type { Device } from "@/lib/types";
import { X, Box, Layers, Zap } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

interface DeviceSpecsPanelProps {
  device: Device;
  onClose: () => void;
}

export function DeviceSpecsPanel({ device, onClose }: DeviceSpecsPanelProps) {
  return (
    <div className="h-full overflow-y-auto bg-white p-6 md:p-8">
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div>
          <Badge color={device.color}>{device.category}</Badge>
          <h2 className="heading-md mt-3 text-[var(--color-text-primary)]">
            {device.name}
          </h2>
        </div>
        <button
          onClick={onClose}
          className="w-10 h-10 rounded-xl bg-surface-100 hover:bg-surface-200 flex items-center justify-center transition-colors flex-shrink-0"
          aria-label="Close specs panel"
          id="specs-close"
        >
          <X className="w-5 h-5 text-[var(--color-text-muted)]" />
        </button>
      </div>

      {/* Description */}
      <p className="body-md text-[var(--color-text-secondary)] mb-8">
        {device.shortDescription}
      </p>

      {/* Specs table */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <Layers className="w-4 h-4 text-[var(--color-text-muted)]" />
          <h3 className="font-heading font-semibold text-sm uppercase tracking-wider text-[var(--color-text-muted)]">
            Specifications
          </h3>
        </div>
        <div className="space-y-0 rounded-2xl overflow-hidden border border-surface-200">
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
              <span className="text-sm font-medium text-[var(--color-text-primary)] text-right">
                {spec.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Applications */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <Zap className="w-4 h-4 text-[var(--color-text-muted)]" />
          <h3 className="font-heading font-semibold text-sm uppercase tracking-wider text-[var(--color-text-muted)]">
            Applications
          </h3>
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
        <div className="flex items-center gap-2 px-4 py-3 bg-surface-50 rounded-xl">
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
  );
}
