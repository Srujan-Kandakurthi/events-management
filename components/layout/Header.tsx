"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { EVENT_NAME } from "@/utils/utils";

const navItems = [
  { label: "HOME", href: "/" },
  { label: "ABOUT US", href: "/about-us" },
  { label: "SERVICES", href: "/services" },
  { label: "CONTACT US", href: "/contact-us" },
] as const;

function isNavActive(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <header
      className={cn(
        "top-0 z-50 w-full font-label-lg",
        isHome
          ? "absolute border-b border-outline-variant/30 bg-surface/20 backdrop-blur-sm"
          : "sticky border-b border-outline-variant/40 bg-surface",
      )}
    >
      <div className="relative mx-auto flex h-20 max-w-container-max items-center justify-between px-margin-mobile md:px-margin-desktop">
        <Link
          href="/"
          className="relative z-10 shrink-0 font-logo text-logo font-semibold text-secondary-fixed uppercase"
        >
          {EVENT_NAME}
        </Link>

        <nav
          className="absolute top-1/2 left-1/2 z-0 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-8 md:flex lg:gap-10"
          aria-label="Main navigation"
        >
          {navItems.map(({ label, href }) => {
            const active = isNavActive(pathname, href);
            return (
              <Link
                key={href}
                href={href}
                className={cn(
                  "font-label-lg text-label-lg relative pb-1 whitespace-nowrap uppercase transition-[color,font-weight]",
                  active
                    ? "font-bold text-secondary-fixed"
                    : "font-medium text-on-surface-variant hover:text-on-surface",
                )}
              >
                {label}
                {active ? (
                  <span
                    className="absolute right-0 bottom-0 left-0 h-px bg-secondary-fixed"
                    aria-hidden
                  />
                ) : null}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/contact-us"
          className="relative z-10 shrink-0 border border-secondary-fixed px-5 py-2.5 font-label-lg text-label-lg text-secondary-fixed uppercase transition-colors hover:bg-secondary-fixed/10"
        >
          BOOK NOW
        </Link>
      </div>
    </header>
  );
}
