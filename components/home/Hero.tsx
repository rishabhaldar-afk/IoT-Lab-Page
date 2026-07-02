"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "@/lib/gsap";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const blobsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) {
      gsap.set([titleRef.current, subtitleRef.current, ctaRef.current], {
        opacity: 1,
        y: 0,
      });
      return;
    }

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Staggered text reveal
    tl.fromTo(
      titleRef.current,
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 1 },
      0.3
    )
      .fromTo(
        subtitleRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8 },
        0.6
      )
      .fromTo(
        ctaRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8 },
        0.9
      );

    // Animate blobs
    if (blobsRef.current) {
      const blobs = blobsRef.current.children;
      gsap.to(blobs[0], {
        x: 30,
        y: -50,
        scale: 1.1,
        duration: 7,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      gsap.to(blobs[1], {
        x: -20,
        y: 20,
        scale: 0.9,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 2,
      });
      gsap.to(blobs[2], {
        x: 15,
        y: 30,
        scale: 1.05,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 4,
      });
    }
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      id="hero"
    >
      {/* Animated gradient blobs */}
      <div ref={blobsRef} className="absolute inset-0 pointer-events-none">
        <div className="blob w-[500px] h-[500px] bg-coral-300 top-[10%] left-[15%]" />
        <div className="blob w-[400px] h-[400px] bg-teal-300 top-[40%] right-[10%]" />
        <div className="blob w-[350px] h-[350px] bg-lavender-300 bottom-[10%] left-[40%]" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-text-primary) 1px, transparent 1px), linear-gradient(90deg, var(--color-text-primary) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="section-container relative z-10 text-center px-4">
        {/* Badge */}
        <div className="flex items-center justify-center gap-4 mb-4">
          <Sparkles className="w-10 h-10 md:w-14 md:h-14 text-sunny-500" />
          <h1 className="heading-xl">
            <span className="gradient-text">
              Intel Unnati AIIoT Lab
            </span>
          </h1>
        </div>

        <h1
          ref={titleRef}
          className="heading-xl max-w-5xl mx-auto opacity-0"
        >
          <span className="block">Where</span>
          <span className="gradient-text">AI meets IoT</span>
        </h1>

        <p
          ref={subtitleRef}
          className="body-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto mt-6 opacity-0"
        >
          Karunya&apos;s Intel-powered innovation lab — building the future of
          Edge AI, Robotics, and Connected Systems at KITS Coimbatore.
        </p>

        <div
          ref={ctaRef}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 opacity-0"
        >
          <Link href="/devices">
            <Button variant="primary" size="lg" id="hero-cta-devices">
              Explore Devices
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
          <Link href="/about">
            <Button variant="outline" size="lg" id="hero-cta-about">
              Learn More
            </Button>
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-xs text-[var(--color-text-muted)] font-medium">
            Scroll to explore
          </span>
          <div className="w-6 h-10 rounded-full border-2 border-[var(--color-text-muted)]/30 flex items-start justify-center p-1.5">
            <div className="w-1.5 h-3 rounded-full bg-coral-400 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
