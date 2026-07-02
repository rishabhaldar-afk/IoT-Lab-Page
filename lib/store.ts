import { create } from "zustand";
import type { Device } from "./types";

interface DeviceStore {
  activeDevice: Device | null;
  isModalOpen: boolean;
  setActiveDevice: (device: Device) => void;
  closeModal: () => void;
}

export const useDeviceStore = create<DeviceStore>((set) => ({
  activeDevice: null,
  isModalOpen: false,
  setActiveDevice: (device) => set({ activeDevice: device, isModalOpen: true }),
  closeModal: () => set({ activeDevice: null, isModalOpen: false }),
}));
