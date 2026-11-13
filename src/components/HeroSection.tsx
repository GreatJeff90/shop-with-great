"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Smartphone } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative w-full bg-white overflow-hidden flex flex-col items-center pt-8 sm:pt-14 select-none">
      {/* Center Copy & CTA */}
      <div className="relative z-20 w-full max-w-3xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center">
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="text-[31px] xs:text-4xl sm:text-5xl md:text-[56px] font-semibold tracking-tight text-zinc-900 leading-[1.14]"
        >
          <span className="block">One Stop Gadget</span>
          <span className="inline-flex items-center justify-center gap-x-2 sm:gap-x-3 mt-1 whitespace-nowrap">
            <span>Store</span>
            {/* Inline Tilted Device Badge */}
            <motion.span
              whileHover={{ rotate: 0, scale: 1.08 }}
              whileTap={{ rotate: 0, scale: 0.96 }}
              transition={{ type: "spring", stiffness: 320, damping: 18 }}
              className="inline-flex items-center justify-center w-8 h-9 sm:w-12 sm:h-13 rounded-lg bg-[#EA580C] text-white shadow-md -rotate-6 align-middle cursor-pointer shrink-0"
              aria-hidden="true"
            >
              <Smartphone className="w-4 h-4 sm:w-6 sm:h-6" />
            </motion.span>
            <span>with Great.</span>
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-2.5 sm:mt-3 text-xs sm:text-base text-zinc-400 font-normal max-w-[290px] sm:max-w-md leading-relaxed"
        >
          Flagship phones, laptops, audio gear, and everyday tech curated by Great.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          className="mt-4 sm:mt-5"
        >
          <a
            href="#collections"
            className="group inline-flex items-center gap-1.5 sm:gap-2 bg-[#141414] hover:bg-zinc-800 text-white text-xs sm:text-sm font-medium px-5 py-2.5 sm:px-6 sm:py-3 rounded-full transition-all duration-200 shadow-sm hover:shadow-md active:scale-95"
          >
            <span>Shop Gadgets</span>
            <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-zinc-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </motion.div>
      </div>

      {/* Showcase Stage: Clean top & bottom margins on mobile, edge-anchored on desktop */}
      <div className="relative z-10 w-full max-w-7xl mx-auto h-[275px] sm:h-[420px] md:h-[490px] mt-6 mb-6 sm:mt-4 sm:mb-0 flex items-center justify-center overflow-hidden pointer-events-none">
        {/* Mobile Image (<640px) */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="pointer-events-auto relative flex sm:hidden w-[520px] h-[520px] shrink-0 items-center justify-center"
        >
          <Image
            src="/hero.png"
            alt="Shop with Great mobile electronics showcase"
            fill
            sizes="520px"
            priority
            className="object-contain drop-shadow-[0_14px_22px_rgba(0,0,0,0.12)]"
          />
        </motion.div>

        {/* Desktop Image (>=640px) */}
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="pointer-events-auto relative hidden sm:flex sm:w-[1100px] md:w-[1320px] sm:h-[1100px] md:h-[1320px] sm:translate-y-3 md:translate-y-4 shrink-0 items-center justify-center"
        >
          <Image
            src="/hero-desktop.png"
            alt="Shop with Great desktop electronics showcase: smartphones, foldables, iPad, JBL speaker, headphones, and PlayStation 5"
            fill
            sizes="(max-width: 768px) 1100px, 1320px"
            priority
            className="object-contain drop-shadow-[0_18px_28px_rgba(0,0,0,0.12)]"
          />
        </motion.div>
      </div>
    </section>
  );
}