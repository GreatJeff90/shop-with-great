"use client";

import React from "react";
import { motion } from "framer-motion";

interface BrandItem {
  name: string;
  styleClass: string;
}

const TECH_BRANDS: BrandItem[] = [
  {
    name: "APPLE",
    styleClass: "font-semibold tracking-[0.22em] text-sm sm:text-2xl",
  },
  {
    name: "SAMSUNG",
    styleClass: "font-black tracking-[0.14em] text-sm sm:text-2xl",
  },
  {
    name: "DELL",
    styleClass: "font-extrabold tracking-widest text-base sm:text-3xl",
  },
  {
    name: "Lenovo",
    styleClass: "font-bold tracking-tight text-base sm:text-3xl",
  },
  {
    name: "ASUS",
    styleClass: "font-black tracking-[0.2em] text-sm sm:text-2xl",
  },
  {
    name: "hp",
    styleClass: "font-bold italic tracking-tighter text-base sm:text-3xl",
  },
  {
    name: "Google Pixel",
    styleClass: "font-medium tracking-tight text-sm sm:text-2xl",
  },
  {
    name: "acer",
    styleClass: "font-semibold tracking-wider text-base sm:text-3xl lowercase",
  },
  {
    name: "OnePlus",
    styleClass: "font-bold tracking-normal text-sm sm:text-2xl",
  },
  {
    name: "Microsoft",
    styleClass: "font-semibold tracking-tight text-sm sm:text-2xl",
  },
  {
    name: "XIAOMI",
    styleClass: "font-extrabold tracking-[0.18em] text-sm sm:text-2xl",
  },
  {
    name: "RAZER",
    styleClass: "font-light tracking-[0.28em] text-sm sm:text-2xl",
  },
];

export default function BrandSection() {
  // Duplicate array twice so the marquee loops seamlessly without visible jumps
  const marqueeItems = [...TECH_BRANDS, ...TECH_BRANDS];

  return (
    <section
      aria-label="Featured Phone and Laptop Brands"
      className="w-full bg-white py-6 sm:py-14 border-y border-zinc-100 overflow-hidden select-none"
    >
      <div className="relative max-w-7xl mx-auto">
        {/* Left & Right Edge Fade Masks */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 w-10 sm:w-28 bg-gradient-to-r from-white to-transparent z-10"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 w-10 sm:w-28 bg-gradient-to-l from-white to-transparent z-10"
        />

        {/* Infinite Horizontal Brand Strip */}
        <div className="flex overflow-hidden">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 28,
            }}
            className="flex items-center gap-8 sm:gap-16 shrink-0 pr-8 sm:pr-16"
          >
            {marqueeItems.map((brand, idx) => (
              <span
                key={`${brand.name}-${idx}`}
                className={`text-zinc-800/85 hover:text-zinc-950 transition-colors duration-200 whitespace-nowrap cursor-pointer ${brand.styleClass}`}
              >
                {brand.name}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}