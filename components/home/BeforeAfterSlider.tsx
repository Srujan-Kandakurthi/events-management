"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { ReactCompareSlider } from "react-compare-slider";

import {
  BEFORE_AFTER_COPY,
  BEFORE_AFTER_IMAGES,
} from "@/constants/before-after";

function CompareHandle() {
  return (
    <div className="flex h-full flex-col items-center">
      <div className="w-px flex-1 bg-secondary-fixed/80 shadow-sm" />
      <div
        aria-hidden
        className="flex size-11 shrink-0 items-center justify-center gap-0.5 rounded-full border-2 border-secondary-fixed bg-secondary-fixed shadow-[0_4px_16px_rgb(0_0_0/45%)]"
      >
        <ChevronLeft className="size-3.5 text-on-primary" strokeWidth={2.5} />
        <ChevronRight className="size-3.5 text-on-primary" strokeWidth={2.5} />
      </div>
      <div className="w-px flex-1 bg-secondary-fixed/80 shadow-sm" />
    </div>
  );
}

function CompareImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative h-full w-full">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover object-center"
        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1200px"
      />
    </div>
  );
}

export default function BeforeAfterSlider() {
  return (
    <section className="relative overflow-hidden bg-surface py-16 md:py-24">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        aria-hidden
        style={{
          backgroundImage:
            "radial-gradient(circle, rgb(255 255 255 / 8%) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-label-lg text-label-lg tracking-[0.2em] text-secondary-fixed uppercase">
            {BEFORE_AFTER_COPY.eyebrow}
          </p>
          <h2 className="mt-3 font-headline-md text-3xl leading-tight font-medium text-on-surface sm:text-headline-md md:text-headline-lg">
            {BEFORE_AFTER_COPY.title}
          </h2>
        </div>

        <div className="relative mx-auto mt-10 max-w-5xl md:mt-12">
          <div className="relative aspect-[16/10] w-full overflow-hidden border border-outline-variant/50 bg-surface-container">
            <ReactCompareSlider
              className="h-full w-full"
              defaultPosition={50}
              handle={<CompareHandle />}
              itemOne={
                <CompareImage
                  src={BEFORE_AFTER_IMAGES.before}
                  alt="Empty venue space before event decoration"
                />
              }
              itemTwo={
                <CompareImage
                  src={BEFORE_AFTER_IMAGES.after}
                  alt="Luxury decorated event space after transformation"
                />
              }
            />

            <div className="pointer-events-none absolute inset-0 z-10 flex items-start justify-between p-4 sm:p-5">
              <span className="rounded-full bg-surface/75 px-4 py-1.5 font-label-sm text-label-sm tracking-[0.15em] text-on-surface uppercase backdrop-blur-sm">
                Before
              </span>
              <span className="rounded-full bg-secondary-fixed px-4 py-1.5 font-label-sm text-label-sm tracking-[0.15em] text-on-primary uppercase">
                After
              </span>
            </div>
          </div>

          <p className="mt-6 text-center font-label-sm text-label-sm tracking-[0.2em] text-on-surface-variant uppercase sm:mt-8">
            {BEFORE_AFTER_COPY.hint}
          </p>
        </div>
      </div>
    </section>
  );
}
