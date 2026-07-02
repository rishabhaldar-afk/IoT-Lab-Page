"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Respect prefers-reduced-motion
export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

// Shared animation: staggered reveal for elements entering viewport
export function createScrollReveal(
  elements: string | Element | Element[],
  container?: string | Element,
  options?: {
    y?: number;
    duration?: number;
    stagger?: number;
    delay?: number;
  }
) {
  if (prefersReducedMotion()) {
    gsap.set(elements, { opacity: 1, y: 0 });
    return;
  }

  const { y = 60, duration = 0.8, stagger = 0.15, delay = 0 } = options || {};

  gsap.fromTo(
    elements,
    { opacity: 0, y },
    {
      opacity: 1,
      y: 0,
      duration,
      stagger,
      delay,
      ease: "power3.out",
      scrollTrigger: {
        trigger: container || (typeof elements === "string" ? elements : undefined),
        start: "top 85%",
        toggleActions: "play none none none",
      },
    }
  );
}

// Shared animation: count-up numbers
export function createCountUp(
  element: Element,
  target: number,
  options?: {
    duration?: number;
    prefix?: string;
    suffix?: string;
  }
) {
  const { duration = 2, prefix = "", suffix = "" } = options || {};

  if (prefersReducedMotion()) {
    element.textContent = `${prefix}${target.toLocaleString()}${suffix}`;
    return;
  }

  const obj = { value: 0 };
  gsap.to(obj, {
    value: target,
    duration,
    ease: "power2.out",
    scrollTrigger: {
      trigger: element,
      start: "top 85%",
      toggleActions: "play none none none",
    },
    onUpdate: () => {
      element.textContent = `${prefix}${Math.round(obj.value).toLocaleString()}${suffix}`;
    },
  });
}

// Shared animation: pinned scroll section
export function createPinnedSection(
  trigger: string | Element,
  options?: {
    start?: string;
    end?: string;
    pin?: boolean;
    scrub?: boolean | number;
  }
) {
  if (prefersReducedMotion()) return null;

  const { start = "top top", end = "+=100%", pin = true, scrub = true } = options || {};

  return ScrollTrigger.create({
    trigger,
    start,
    end,
    pin,
    scrub,
  });
}

export { gsap, ScrollTrigger };
