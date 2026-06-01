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
import { EVENT_NAME } from "@/utils/utils";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black text-on-surface-variant">
      <div className="mx-auto max-w-container-max px-margin-mobile py-14 md:px-margin-desktop md:py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="font-logo text-xl tracking-[0.1em] font-semibold text-secondary-fixed uppercase md:text-2xl"
            >
              {EVENT_NAME}
            </Link>
            <p className="mt-5 font-body-md text-sm leading-relaxed text-on-surface-variant">
              {FOOTER_DESCRIPTION}
            </p>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {FOOTER_SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  className="flex size-10 items-center justify-center rounded-lg border border-outline-variant/60 bg-surface/40 text-on-surface transition-colors hover:border-secondary-fixed/50 hover:text-secondary-fixed"
                >
                  <Icon className="size-4" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="w-fit border-b border-secondary-fixed pb-2 font-headline-md text-lg font-medium text-on-surface">
              Quick Links
            </h3>
            <ul className="mt-6 space-y-3">
              {FOOTER_QUICK_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="group flex items-center gap-2 font-body-md text-sm text-on-surface-variant transition-colors hover:text-on-surface"
                  >
                    <ChevronRight
                      className="size-3.5 shrink-0 text-secondary-fixed"
                      strokeWidth={2}
                    />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="w-fit border-b border-secondary-fixed pb-2 font-headline-md text-lg font-medium text-on-surface">
              Contact Information
            </h3>
            <ul className="mt-6 space-y-5">
              {FOOTER_CONTACT_ITEMS.map(({ id, label, icon: Icon, lines }) => (
                <li key={id} className="flex gap-3">
                  <span className="mt-0.5 shrink-0 text-secondary-fixed">
                    <Icon className="size-4" strokeWidth={1.5} />
                  </span>
                  <span>
                    <span className="block font-label-sm text-label-sm tracking-[0.12em] text-secondary-fixed uppercase">
                      {label}
                    </span>
                    {lines.map((line) => (
                      <span
                        key={line}
                        className="mt-0.5 block font-body-md text-sm text-on-surface"
                      >
                        {line}
                      </span>
                    ))}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Map */}
          <div>
            <h3 className="w-fit border-b border-secondary-fixed pb-2 font-headline-md text-lg font-medium text-on-surface">
              Visit Our Location
            </h3>
            <div className="relative mt-6 aspect-[4/3] overflow-hidden border border-outline-variant/50 bg-surface-container">
              <div
                className="absolute inset-0 bg-[linear-gradient(135deg,#161b22_0%,#0d1117_50%,#1a1f28_100%)]"
                aria-hidden
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-30">
                <MapPin className="size-16 text-on-surface-variant" strokeWidth={1} />
              </div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgb(212_175_55/0.08),transparent_55%)]" />
            </div>
            <a
              href={FOOTER_MAP_DIRECTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg border border-outline-variant/60 bg-surface-container-high py-3 font-label-lg text-label-sm text-on-surface transition-colors hover:border-secondary-fixed/40 hover:text-secondary-fixed"
            >
              <Navigation className="size-4" strokeWidth={1.5} />
              Get Directions
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-outline-variant/40 pt-6 text-sm md:flex-row">
          <p className="font-body-md text-on-surface-variant">
            © {year} {EVENT_NAME}. All Rights Reserved.
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
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
