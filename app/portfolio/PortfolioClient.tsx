"use client";

import { useState } from "react";
import Image from "next/image";
import { sectionEyebrowClass } from "@/lib/section-styles";
import { cn } from "@/lib/utils";

const CATEGORIES = [
  "All",
  "Wedding",
  "Engagement",
  "Birthday",
  "House Warming",
  "Corporate",
  "Setup",
];

const PORTFOLIO_ITEMS = [
  {
    id: 1,
    title: "Royal Wedding",
    category: "Wedding",
    imagePath: "/assets/images/wedding.png",
  },
  {
    id: 2,
    title: "Golden Engagement",
    category: "Engagement",
    imagePath: "/assets/images/engagement.jpg",
  },
  {
    id: 3,
    title: "Grand Birthday Celebration",
    category: "Birthday",
    imagePath: "/assets/images/birthday.png",
  },
  {
    id: 4,
    title: "Luxury House Warming",
    category: "House Warming",
    imagePath: "/assets/images/house-warming.jpg",
  },
  {
    id: 5,
    title: "Corporate Gala",
    category: "Corporate",
    imagePath: "/assets/images/hero-bg.png",
  },
  {
    id: 6,
    title: "Decor Setup Before",
    category: "Setup",
    imagePath: "/assets/images/before-image.jpg",
  },
  {
    id: 7,
    title: "Decor Setup After",
    category: "Setup",
    imagePath: "/assets/images/after-image.jpg",
  },
];

// Dark surface color for blur placeholder
const BLUR_DATA_URL =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOMjY39zwAFAgIClX0/0QAAAABJRU5ErkJggg==";

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredItems = PORTFOLIO_ITEMS.filter(
    (item) => activeFilter === "All" || item.category === activeFilter,
  );

  return (
    <main className="flex min-h-screen flex-col items-center pt-8 pb-16 px-6 md:pt-12">
      {/* Header Section */}
      <div className="relative mx-auto max-w-2xl text-center mb-10">
        <p className={cn(sectionEyebrowClass, "mb-4")}>OUR WORK</p>
        <h1 className="relative font-headline-md text-4xl font-bold tracking-tight sm:text-6xl">
          <span className="gold-text-gradient">Portfolio</span>
        </h1>
        <p className="mx-auto mt-6 max-w-lg font-body-md text-base leading-relaxed text-on-surface-variant sm:text-lg">
          Explore our gallery of extraordinary events, crafted with meticulous
          detail and unparalleled elegance.
        </p>
      </div>

      {/* Filter Bar */}
      <div className="mb-10 flex w-full max-w-5xl flex-wrap items-center justify-center gap-2 sm:gap-4">
        {CATEGORIES.map((category) => (
          <button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={cn(
              "rounded-full px-5 py-2 font-label-lg text-xs font-semibold tracking-[0.1em] uppercase transition-all duration-300 border",
              activeFilter === category
                ? "bg-secondary-fixed border-secondary-fixed text-on-primary shadow-[0_0_15px_rgba(212,175,55,0.3)]"
                : "border-outline-variant/60 bg-surface-container-low text-on-surface-variant hover:border-secondary-fixed/50 hover:text-on-surface",
            )}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Image Grid */}
      <div className="w-full max-w-7xl px-4 md:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-surface-container border border-outline-variant/30"
            >
              <Image
                src={item.imagePath}
                alt={item.title}
                fill
                loading="lazy"
                placeholder="blur"
                blurDataURL={BLUR_DATA_URL}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/60 opacity-0 transition-opacity duration-500 group-hover:opacity-100 flex flex-col justify-end p-6">
                <span className="font-label-sm text-[10px] uppercase tracking-[0.15em] text-secondary-fixed mb-1">
                  {item.category}
                </span>
                <h3 className="font-headline-md text-lg text-white font-medium">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
        {filteredItems.length === 0 && (
          <div className="w-full text-center py-20 text-on-surface-variant">
            No projects found for this category.
          </div>
        )}
      </div>
    </main>
  );
}
