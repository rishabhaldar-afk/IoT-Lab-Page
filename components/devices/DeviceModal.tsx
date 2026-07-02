"use client";

import React, { useEffect, useCallback } from "react";
import dynamic from "next/dynamic";
import { useDeviceStore } from "@/lib/store";
import { DeviceSpecsPanel } from "./DeviceSpecsPanel";
import { X } from "lucide-react";

// Dynamically import 3D viewer to avoid loading Three.js globally
const DeviceViewer3D = dynamic(
  () => import("./DeviceViewer3D").then((mod) => ({ default: mod.DeviceViewer3D })),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full flex items-center justify-center bg-surface-50">
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

export function DeviceModal() {
  const { activeDevice, isModalOpen, closeModal } = useDeviceStore();

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    },
    [closeModal]
  );

  useEffect(() => {
    if (isModalOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isModalOpen, handleKeyDown]);

  if (!isModalOpen || !activeDevice) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center" id="device-modal">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm animate-fade-in"
        onClick={closeModal}
      />

      {/* Modal content */}
      <div className="relative w-[95vw] max-w-6xl h-[85vh] max-h-[800px] bg-white rounded-3xl shadow-2xl overflow-hidden animate-slide-up flex flex-col lg:flex-row">
        {/* Close button (mobile top-right) */}
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-xl bg-white/80 backdrop-blur-sm hover:bg-white flex items-center justify-center shadow-soft transition-colors lg:hidden"
          aria-label="Close modal"
          id="modal-close-mobile"
        >
          <X className="w-5 h-5 text-[var(--color-text-primary)]" />
        </button>

        {/* 3D Viewer area */}
        <div className="flex-1 min-h-[40vh] lg:min-h-0 bg-gradient-to-br from-surface-50 to-surface-100 relative">
          <DeviceViewer3D device={activeDevice} />

          {/* Device name overlay on 3D canvas */}
          <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-xl shadow-soft">
            <h3 className="font-heading font-semibold text-sm text-[var(--color-text-primary)]">
              {activeDevice.name}
            </h3>
            <p className="text-xs text-[var(--color-text-muted)]">
              Drag to rotate • Scroll to zoom
            </p>
          </div>
        </div>

        {/* Specs Panel */}
        <div className="w-full lg:w-[380px] lg:min-w-[380px] border-t lg:border-t-0 lg:border-l border-surface-200">
          <DeviceSpecsPanel device={activeDevice} onClose={closeModal} />
        </div>
      </div>
    </div>
  );
}
