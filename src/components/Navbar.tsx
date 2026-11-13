"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X } from "lucide-react";

interface NavbarProps {
  onSearch?: (query: string) => void;
}

export default function Navbar({ onSearch }: NavbarProps) {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const mobileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (mobileSearchOpen) {
      mobileInputRef.current?.focus();
    }
  }, [mobileSearchOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch?.(query);
  };

  const handleClear = () => {
    setQuery("");
    onSearch?.("");
  };

  const handleCloseMobileSearch = () => {
    setMobileSearchOpen(false);
    setQuery("");
    onSearch?.("");
  };

  return (
    <header className="sticky top-0 inset-x-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-zinc-100">
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        aria-label="Primary Navigation"
        className="w-full max-w-7xl mx-auto px-4 sm:px-8 h-16 sm:h-18 flex items-center justify-between gap-3 sm:gap-8"
      >
        {/* Left Brand Wordmark: Large "SHOP" + Small "with great" */}
        <Link
          href="/"
          aria-label="Shop with Great Home"
          className="shrink-0 flex flex-col leading-none group select-none"
        >
          <span className="text-lg sm:text-2xl font-black tracking-tight text-zinc-950">
            SHOP
          </span>
          <span className="text-[9px] sm:text-[11px] font-medium tracking-[0.18em] lowercase text-zinc-500 group-hover:text-zinc-900 transition-colors -mt-0.5">
            with great
          </span>
        </Link>

        {/* Desktop Center Long Search Bar */}
        <form
          onSubmit={handleSubmit}
          className={`hidden sm:flex flex-1 max-w-3xl items-center gap-2.5 px-4 py-2.5 rounded-full border transition-all duration-200 ${
            isFocused
              ? "bg-white border-zinc-900 shadow-xs"
              : "bg-zinc-100/80 border-transparent hover:bg-zinc-100"
          }`}
        >
          <Search className="w-4 h-4 text-zinc-400 shrink-0" />
          <input
            type="search"
            enterKeyHint="search"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              onSearch?.(e.target.value);
            }}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder="Search phones, laptops, audio..."
            aria-label="Search products"
            className="w-full min-w-0 bg-transparent text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none [&::-webkit-search-cancel-button]:hidden"
          />
          {query && (
            <button
              type="button"
              onClick={handleClear}
              aria-label="Clear search"
              className="p-1 -mr-1 text-zinc-400 hover:text-zinc-800 transition-colors shrink-0"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </form>

        {/* Right Actions: Mobile Search Icon Trigger + Sign In Pill */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <button
            type="button"
            onClick={() => setMobileSearchOpen((prev) => !prev)}
            aria-label={mobileSearchOpen ? "Close search" : "Open search"}
            aria-expanded={mobileSearchOpen}
            className="sm:hidden w-9 h-9 rounded-full bg-zinc-100 hover:bg-zinc-200/80 text-zinc-800 flex items-center justify-center transition-colors active:scale-95"
          >
            {mobileSearchOpen ? (
              <X className="w-4 h-4" />
            ) : (
              <Search className="w-4 h-4" />
            )}
          </button>

          <Link
            href="/signin"
            className="shrink-0 bg-zinc-950 hover:bg-zinc-800 text-white text-xs sm:text-sm font-medium px-4 py-2 sm:px-5 sm:py-2.5 rounded-full transition-all duration-200 active:scale-95 whitespace-nowrap"
          >
            Sign In
          </Link>
        </div>
      </motion.nav>

      {/* Expandable Mobile Search Bar Drawer */}
      <AnimatePresence>
        {mobileSearchOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="sm:hidden overflow-hidden border-t border-zinc-100 bg-white px-4"
          >
            <form onSubmit={handleSubmit} className="py-2.5">
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-zinc-100 border border-zinc-200/80 focus-within:bg-white focus-within:border-zinc-900 transition-colors">
                <Search className="w-4 h-4 text-zinc-400 shrink-0" />
                <input
                  ref={mobileInputRef}
                  type="search"
                  enterKeyHint="search"
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value);
                    onSearch?.(e.target.value);
                  }}
                  placeholder="Search phones, laptops, audio..."
                  aria-label="Search products"
                  className="w-full min-w-0 bg-transparent text-base text-zinc-900 placeholder:text-zinc-400 focus:outline-none [&::-webkit-search-cancel-button]:hidden"
                />
                {query && (
                  <button
                    type="button"
                    onClick={handleClear}
                    aria-label="Clear search"
                    className="p-1 -mr-1 text-zinc-400 hover:text-zinc-800"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}