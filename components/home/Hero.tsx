import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

import { HERO_METRICS, type HeroMetric } from "@/constants/hero-metrics";

function StatItem({ value, label }: HeroMetric) {
  return (
    <div className="flex min-w-0 flex-1 flex-col items-center px-1 text-center sm:px-2">
      <span className="gold-text-gradient font-headline-lg text-[1.75rem] leading-none font-semibold sm:text-headline-md md:text-headline-lg">
        {value}
      </span>
      <span className="mt-1.5 max-w-[9rem] font-label-sm text-[10px] leading-snug tracking-[0.15em] text-on-surface-variant uppercase sm:mt-2 sm:max-w-none sm:text-label-sm sm:tracking-[0.2em]">
        {label}
      </span>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative flex h-dvh max-h-dvh flex-col overflow-hidden">
      <Image
        src="/assets/images/hero-bg.png"
        alt="Luxury event venue with chandelier and banquet tables"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div
        className="absolute inset-0 bg-linear-to-b from-surface/70 via-surface/80 to-surface/95"
        aria-hidden
      />

      <div className="relative z-10 flex min-h-0 flex-1 flex-col pt-20">
        <div className="mx-auto flex min-h-0 w-full max-w-4xl flex-1 flex-col items-center justify-center overflow-visible px-margin-mobile py-4 text-center sm:py-6 md:px-margin-desktop md:py-8">
          <p className="mb-3 font-label-lg text-label-lg tracking-[0.25em] text-secondary-fixed uppercase sm:mb-4">
            ESTABLISHED EXCELLENCE SINCE 2012
          </p>

          <h1 className="overflow-visible font-headline-lg text-[2rem] leading-snug font-semibold text-on-surface sm:text-headline-lg-mobile md:text-display-lg-mobile lg:text-display-lg">
            Turning Every
            <br />
            Celebration Into An
            <br />
            <span className="inline-block overflow-visible whitespace-nowrap">
              <span className="gold-text-gradient font-medium italic">
                Unforgettable
              </span>{" "}
              Experience
            </span>
          </h1>

          <p className="mt-4 max-w-2xl font-body-md text-sm leading-relaxed text-on-surface/90 sm:mt-6 sm:text-body-md">
            From luxury weddings and traditional ceremonies to corporate
            gatherings and private celebrations, we craft extraordinary
            experiences with flawless execution.
          </p>

          <div className="mt-5 flex flex-col items-center justify-center gap-3 sm:mt-6 sm:flex-row sm:gap-6">
            <Link
              href="/contact-us"
              className="min-w-[180px] bg-secondary-fixed px-6 py-3 text-center font-label-lg text-label-lg font-semibold text-on-primary uppercase transition-opacity hover:opacity-90 sm:min-w-[200px] sm:px-8 sm:py-3.5"
            >
              START PLANNING
            </Link>
            <Link
              href="/portfolio"
              className="min-w-[180px] border border-secondary-fixed px-6 py-3 text-center font-label-lg text-label-lg font-semibold text-on-surface uppercase transition-colors hover:bg-secondary-fixed/10 sm:min-w-[200px] sm:px-8 sm:py-3.5"
            >
              VIEW PORTFOLIO
            </Link>
          </div>
        </div>

        <div className="mt-auto shrink-0 mx-auto w-full max-w-container-max px-margin-mobile pb-5 sm:pb-6 md:px-margin-desktop md:pb-8">
          <div className="flex items-center">
            {HERO_METRICS.map((stat, index) => (
              <Fragment key={stat.label}>
                {index > 0 ? (
                  <div
                    className="h-10 w-px shrink-0 bg-on-surface-variant/30 sm:h-12 md:h-14"
                    aria-hidden
                  />
                ) : null}
                <StatItem value={stat.value} label={stat.label} />
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
