"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
  styleFitContainer,
} from "react-compare-slider";

import {
  BEFORE_AFTER_COPY,
  BEFORE_AFTER_IMAGES,
} from "@/constants/before-after";
import { sectionEyebrowClass, sectionContentGapClass, sectionPaddingClass, sectionTitleClass } from "@/lib/section-styles";

const compareImageStyle = styleFitContainer({
  objectFit: "cover",
  objectPosition: "center center",
});

function CompareHandle() {
  return (
    <div className="pointer-events-auto flex h-full w-full touch-none flex-col items-center">
      <div className="w-px max-w-px flex-1 bg-secondary-fixed/70 shadow-sm" />
      <div
        aria-hidden
        className="flex size-9 shrink-0 items-center justify-center gap-0 rounded-full border border-secondary-fixed bg-secondary-fixed shadow-[0_3px_12px_rgb(0_0_0/40%)] sm:size-10 md:size-11 md:border-2"
      >
        <ChevronLeft className="size-3 text-on-primary sm:size-3.5" strokeWidth={2.25} />
        <ChevronRight className="size-3 text-on-primary sm:size-3.5" strokeWidth={2.25} />
      </div>
      <div className="w-px max-w-px flex-1 bg-secondary-fixed/70 shadow-sm" />
    </div>
  );
}

export default function BeforeAfterSlider() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className={`relative overflow-hidden bg-surface ${sectionPaddingClass}`}>
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
          <p className={sectionEyebrowClass}>
            {BEFORE_AFTER_COPY.eyebrow}
          </p>
          <h2 className={sectionTitleClass}>
            {BEFORE_AFTER_COPY.title}
          </h2>
        </div>

        <div className={`relative mx-auto max-w-5xl ${sectionContentGapClass}`}>
          <div className="relative aspect-[16/10] w-full touch-none overflow-hidden border border-outline-variant/50 bg-surface-container">
            {isMounted ? (
              <ReactCompareSlider
                className="h-full w-full touch-none select-none"
                style={{ touchAction: "none" }}
                defaultPosition={50}
                onlyHandleDraggable={false}
                handle={<CompareHandle />}
                itemOne={
                  <ReactCompareSliderImage
                    src={BEFORE_AFTER_IMAGES.before}
                    alt="Empty venue space before event decoration"
                    style={compareImageStyle}
                  />
                }
                itemTwo={
                  <ReactCompareSliderImage
                    src={BEFORE_AFTER_IMAGES.after}
                    alt="Luxury decorated event space after transformation"
                    style={compareImageStyle}
                  />
                }
              />
            ) : (
              <div className="relative h-full w-full">
                <ReactCompareSliderImage
                  src={BEFORE_AFTER_IMAGES.before}
                  alt="Empty venue space before event decoration"
                  style={compareImageStyle}
                />
              </div>
            )}

            <div className="pointer-events-none absolute inset-0 z-10 flex items-start justify-between p-3 sm:p-5">
              <span className="inline-flex shrink-0 items-center rounded-full bg-surface/75 px-3.5 py-1 font-label-sm text-[9px] leading-none font-semibold tracking-[0.14em] text-on-surface uppercase backdrop-blur-sm sm:px-4 sm:py-1.5 sm:text-[10px] sm:tracking-[0.15em] md:text-label-sm">
                Before
              </span>
              <span className="inline-flex shrink-0 items-center rounded-full bg-secondary-fixed px-3.5 py-1 font-label-sm text-[9px] leading-none font-semibold tracking-[0.14em] text-on-primary uppercase sm:px-4 sm:py-1.5 sm:text-[10px] sm:tracking-[0.15em] md:text-label-sm">
                After
              </span>
            </div>
          </div>

          <p className="mt-4 text-center font-label-sm text-[10px] tracking-[0.18em] text-on-surface-variant uppercase sm:mt-8 sm:text-label-sm sm:tracking-[0.2em]">
            {BEFORE_AFTER_COPY.hint}
          </p>
        </div>
      </div>
    </section>
  );
}
