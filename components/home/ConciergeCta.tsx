import { Phone } from "lucide-react";
import Link from "next/link";

import {
  CONCIERGE_CTA_COPY,
} from "@/constants/concierge-cta";
import { FOOTER_PHONE_NUMBERS } from "@/constants/footer";

function getTelHref(display: string): string {
  return `tel:${display.replace(/\s/g, "")}`;
}

export default function ConciergeCta() {
  const primaryPhone = FOOTER_PHONE_NUMBERS[0];

  return (
    <section className="bg-surface py-10 md:py-24">
      <div className="mx-auto max-w-container-max px-4 sm:px-5 md:px-margin-desktop">
        <div className="relative overflow-hidden rounded-2xl bg-surface-container-low px-6 py-10 sm:rounded-3xl sm:px-8 sm:py-12 md:px-12 md:py-16">
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgb(212_175_55/0.08),transparent_62%)]"
            aria-hidden
          />

          <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
          <h2 className="font-headline-md text-2xl leading-tight font-medium text-on-surface sm:text-3xl sm:leading-snug md:text-headline-lg md:leading-snug lg:text-[2.75rem] lg:leading-tight">
            {CONCIERGE_CTA_COPY.titleStart}
            <br />
            <span className="gold-text-gradient font-medium italic">
              {CONCIERGE_CTA_COPY.titleHighlight}
            </span>
          </h2>

          <p className="mt-4 max-w-2xl font-body-md text-sm leading-relaxed text-on-surface-variant sm:mt-5 sm:text-base md:text-body-md">
            {CONCIERGE_CTA_COPY.description}
          </p>

          <div className="mt-6 flex w-full max-w-xl flex-col gap-3 sm:mt-8 sm:flex-row sm:items-stretch sm:justify-center sm:gap-4">
            <a
              href={getTelHref(primaryPhone.display)}
              className="inline-flex min-h-11 w-full flex-1 items-center justify-center gap-2 border border-on-surface/80 px-5 py-3 font-label-lg text-[10px] font-semibold tracking-[0.1em] text-on-surface uppercase transition-colors hover:border-secondary-fixed hover:text-secondary-fixed sm:min-h-12 sm:min-w-0 sm:px-6 sm:text-xs sm:tracking-[0.12em]"
            >
              <Phone
                className="size-3.5 shrink-0 sm:size-4"
                strokeWidth={1.75}
                aria-hidden
              />
              {CONCIERGE_CTA_COPY.callLabel}
            </a>

            <Link
              href="/contact-us"
              className="inline-flex min-h-11 w-full flex-1 items-center justify-center bg-secondary-fixed px-5 py-3 font-label-lg text-[10px] font-semibold tracking-[0.1em] text-on-primary uppercase transition-opacity hover:opacity-90 sm:min-h-12 sm:min-w-0 sm:px-6 sm:text-xs sm:tracking-[0.12em]"
            >
              {CONCIERGE_CTA_COPY.inquiryLabel}
            </Link>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
