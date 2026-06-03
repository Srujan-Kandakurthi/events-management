import { ChevronRight, MapPin, Navigation } from "lucide-react";
import Link from "next/link";

import {
  FOOTER_CONTACT_ITEMS,
  FOOTER_DESCRIPTION,
  FOOTER_LEGAL_LINKS,
  FOOTER_MAP_DIRECTIONS_URL,
  FOOTER_QUICK_LINKS,
  FOOTER_SOCIAL_LINKS,
} from "@/constants/footer";
import { cn } from "@/lib/utils";
import { EVENT_NAME } from "@/utils/utils";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black text-on-surface-variant">
      <div className="mx-auto max-w-container-max px-margin-mobile py-12 md:px-margin-desktop md:py-16">
        <div className="grid gap-y-10 md:grid-cols-2 md:gap-x-12 md:gap-y-12 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,0.8fr)_minmax(0,1fr)_minmax(0,1fr)] lg:items-start lg:gap-x-12 xl:gap-x-16">
          {/* Brand */}
          <div className="min-w-0 md:col-start-1 md:row-start-1 lg:col-start-auto lg:row-start-auto">
            <Link
              href="/"
              className="font-logo text-lg tracking-[0.1em] font-semibold text-secondary-fixed uppercase md:text-2xl"
            >
              {EVENT_NAME}
            </Link>
            <p className="mt-4 font-body-md text-xs leading-relaxed text-on-surface-variant md:mt-5 md:text-sm">
              {FOOTER_DESCRIPTION}
            </p>
            <div className="mt-5 flex flex-wrap gap-2 md:mt-6 md:gap-2.5">
              {FOOTER_SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  className="flex size-9 items-center justify-center rounded-lg border border-outline-variant/60 bg-surface/40 text-on-surface transition-colors hover:border-secondary-fixed/50 hover:text-secondary-fixed md:size-10"
                >
                  <Icon className="size-3.5 md:size-4" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div className="min-w-0 md:col-start-1 md:row-start-2 lg:col-start-auto lg:row-start-auto">
            <h3 className="w-fit border-b border-secondary-fixed pb-2 font-headline-md text-base font-medium text-on-surface md:text-lg">
              Quick Links
            </h3>
            <ul className="mt-5 space-y-2.5 md:mt-6 md:space-y-3">
              {FOOTER_QUICK_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="group flex items-center gap-2 font-body-md text-xs text-on-surface-variant transition-colors hover:text-on-surface md:text-sm"
                  >
                    <ChevronRight
                      className="size-3 shrink-0 text-secondary-fixed md:size-3.5"
                      strokeWidth={2}
                    />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="min-w-0 md:col-start-2 md:row-start-2 lg:col-start-auto lg:row-start-auto">
            <h3 className="w-fit border-b border-secondary-fixed pb-2 font-headline-md text-base font-medium text-on-surface md:text-lg">
              Contact Information
            </h3>
            <ul className="mt-5 space-y-4 md:mt-6 md:space-y-5">
              {FOOTER_CONTACT_ITEMS.map(({ id, label, icon: Icon, lines }) => (
                <li key={id} className="flex gap-2.5 md:gap-3">
                  <span className="mt-0.5 shrink-0 text-secondary-fixed">
                    <Icon className="size-3.5 md:size-4" strokeWidth={1.5} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-label-sm text-[10px] tracking-[0.1em] text-secondary-fixed uppercase md:text-label-sm md:tracking-[0.12em]">
                      {label}
                    </span>
                    {lines.map((line) => {
                      const lineClassName = cn(
                        "mt-0.5 block font-body-md text-xs leading-relaxed text-on-surface md:text-sm",
                        id === "email" && "break-all",
                      );

                      if (id === "email") {
                        return (
                          <a
                            key={line}
                            href={`mailto:${line}`}
                            className={cn(
                              lineClassName,
                              "transition-colors hover:text-secondary-fixed",
                            )}
                          >
                            {line}
                          </a>
                        );
                      }

                      return (
                        <span key={line} className={lineClassName}>
                          {line}
                        </span>
                      );
                    })}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Map */}
          <div className="min-w-0 md:col-start-2 md:row-start-1 lg:col-start-auto lg:row-start-auto">
            <h3 className="w-fit border-b border-secondary-fixed pb-2 font-headline-md text-base font-medium text-on-surface md:text-lg">
              Visit Our Location
            </h3>
            <div className="relative mt-5 aspect-[4/3] overflow-hidden border border-outline-variant/50 bg-surface-container md:mt-6">
              <div
                className="absolute inset-0 bg-[linear-gradient(135deg,#161b22_0%,#0d1117_50%,#1a1f28_100%)]"
                aria-hidden
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-30">
                <MapPin className="size-12 text-on-surface-variant md:size-16" strokeWidth={1} />
              </div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgb(212_175_55/0.08),transparent_55%)]" />
            </div>
            <a
              href={FOOTER_MAP_DIRECTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 flex w-full items-center justify-center gap-2 rounded-lg border border-outline-variant/60 bg-surface-container-high py-2.5 font-label-lg text-xs text-on-surface transition-colors hover:border-secondary-fixed/40 hover:text-secondary-fixed md:mt-4 md:py-3 md:text-label-sm"
            >
              <Navigation className="size-3.5 md:size-4" strokeWidth={1.5} />
              Get Directions
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-outline-variant/40 pt-5 text-xs md:mt-12 md:flex-row md:gap-4 md:pt-6 md:text-sm">
          <p className="text-center font-body-md text-on-surface-variant md:text-left">
            © {year} {EVENT_NAME}. All Rights Reserved.
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
            {FOOTER_LEGAL_LINKS.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="font-body-md text-on-surface-variant transition-colors hover:text-on-surface"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
