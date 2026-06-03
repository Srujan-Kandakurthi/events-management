import Image from "next/image";
import Link from "next/link";
import { CalendarCheck, Images } from "lucide-react";
import { Fragment } from "react";

import { HERO_METRICS, type HeroMetric } from "@/constants/hero-metrics";
import { cn } from "@/lib/utils";
import { sectionEyebrowClass } from "@/lib/section-styles";

function StatItem({ value, label }: HeroMetric) {
  return (
    <div className="flex min-w-0 flex-col items-center px-1 text-center md:flex-1 md:px-2">
      <span className="gold-text-gradient font-headline-lg text-[1.75rem] leading-none font-semibold sm:text-headline-md md:text-headline-lg">
        {value}
      </span>
      <span className="mt-1.5 max-w-[11rem] font-label-sm text-[10px] leading-snug tracking-[0.12em] text-on-surface-variant uppercase sm:mt-2 sm:max-w-none sm:text-label-sm sm:tracking-[0.2em]">
        {label}
      </span>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative flex min-h-dvh flex-col">
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

      {/* Hero content scrolls when needed; my-auto centers copy when space allows */}
      <div className="relative z-10 flex min-h-dvh flex-col pt-[4.25rem] pb-3 md:pt-[5.75rem] md:pb-6 lg:pt-28 lg:pb-8">
        <div className="flex min-h-0 flex-1 flex-col overflow-x-hidden overflow-y-auto px-margin-mobile md:px-margin-desktop">
          <div className="my-auto flex w-full flex-col items-center py-3 text-center md:py-6 lg:py-8">
          <p className={cn(sectionEyebrowClass, "mb-2 sm:mb-3")}>
            ESTABLISHED EXCELLENCE SINCE 2006
          </p>

          <h1 className="max-w-full overflow-visible font-headline-lg text-[2rem] leading-tight font-semibold text-on-surface sm:text-[2.25rem] sm:leading-snug md:text-display-lg-mobile md:leading-snug lg:text-display-lg lg:leading-tight">
            Turning Every
            <br />
            Celebration Into An
            <br />
            <span className="gold-text-gradient font-medium italic">
              Unforgettable
            </span>{" "}
            Experience
          </h1>

          <p className="mt-5 max-w-2xl font-body-md text-sm leading-relaxed text-on-surface/90 sm:mt-4 sm:text-body-md [@media(max-height:800px)]:md:mt-2 [@media(max-height:800px)]:md:text-xs">
            From luxury weddings and traditional ceremonies to corporate
            gatherings and private celebrations, we craft extraordinary
            experiences with flawless execution.
          </p>

          <div className="mt-4 flex w-full max-w-md shrink-0 flex-row items-center justify-center gap-2 sm:mt-5 sm:max-w-none sm:gap-6 [@media(max-height:800px)]:mt-3">
            <Link
              href="/contact-us"
              className="inline-flex min-w-0 flex-1 items-center justify-center gap-1.5 bg-secondary-fixed px-3 py-3 font-label-lg text-[10px] leading-none font-semibold tracking-[0.08em] text-on-primary uppercase transition-opacity hover:opacity-90 sm:min-w-[200px] sm:flex-none sm:gap-2 sm:px-8 sm:py-3.5 sm:text-label-lg sm:leading-normal sm:tracking-[0.15em]"
            >
              <CalendarCheck className="size-3.5 shrink-0 sm:size-4" strokeWidth={2.25} aria-hidden />
              Let's Plan
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex min-w-0 flex-1 items-center justify-center gap-1.5 border border-secondary-fixed px-3 py-3 font-label-lg text-[10px] leading-none font-semibold tracking-[0.08em] text-on-surface uppercase transition-colors hover:bg-secondary-fixed/10 sm:min-w-[200px] sm:flex-none sm:gap-2 sm:px-8 sm:py-3.5 sm:text-label-lg sm:leading-normal sm:tracking-[0.15em]"
            >
              <Images className="size-3.5 shrink-0 sm:size-4" strokeWidth={2.25} aria-hidden />
              <span className="md:hidden">Portfolio</span>
              <span className="hidden md:inline">View Portfolio</span>
            </Link>
          </div>
          </div>
        </div>

        <div className="shrink-0 border-t border-outline-variant/30 pt-3 sm:pt-5 md:pt-6">
          <div className="mx-auto grid w-full max-w-container-max grid-cols-1 gap-y-3 px-margin-mobile min-[400px]:grid-cols-2 min-[400px]:gap-x-4 min-[400px]:gap-y-4 md:flex md:items-center md:gap-y-0 md:px-margin-desktop">
            {HERO_METRICS.map((stat, index) => (
              <Fragment key={stat.label}>
                {index > 0 ? (
                  <div
                    className="hidden h-10 w-px shrink-0 bg-on-surface-variant/30 md:block md:h-12"
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
