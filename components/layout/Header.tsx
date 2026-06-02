"use client";

import { ArrowRight, MenuIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import ServiceMenuCard from "@/components/layout/ServiceMenuCard";
import { MAIN_NAV_ITEMS } from "@/constants/navigation";
import {
  FEATURED_NAV_SERVICES,
} from "@/constants/services";
import { cn } from "@/lib/utils";
import { EVENT_NAME } from "@/utils/utils";

function isNavActive(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }
  return pathname === href || pathname.startsWith(`${href}/`);
}

const navTriggerClass =
  "relative bg-transparent! font-label-lg text-label-lg h-auto rounded-none px-4 py-1 pb-1 uppercase shadow-none ring-0 hover:bg-transparent! focus:bg-transparent! data-active:bg-transparent! data-popup-open:bg-transparent!";

function NavLink({
  label,
  href,
  active,
}: {
  label: string;
  href: string;
  active: boolean;
}) {
  return (
    <NavigationMenuLink asChild>
      <Link
        href={href}
        className={cn(
          navigationMenuTriggerStyle(),
          navTriggerClass,
          active
            ? "font-bold text-secondary-fixed"
            : "font-medium text-on-surface-variant hover:text-on-surface",
        )}
      >
        {label}
        {active ? (
          <span
            className="absolute right-4 bottom-0 left-4 h-px bg-secondary-fixed"
            aria-hidden
          />
        ) : null}
      </Link>
    </NavigationMenuLink>
  );
}

function ServicesMenuHeader({ onClose }: { onClose?: () => void }) {
  return (
    <div className="mb-4 flex items-center justify-between gap-3 border-b border-outline-variant/40 pb-3">
      <p className="font-label-lg text-label-lg tracking-[0.15em] text-on-surface uppercase">
        Available Services
      </p>
      <Link
        href="/services"
        onClick={onClose}
        className="inline-flex shrink-0 items-center gap-1 font-label-sm text-label-sm font-medium text-secondary-fixed uppercase transition-colors hover:text-on-surface"
      >
        View all
        <ArrowRight className="size-3.5" strokeWidth={2.25} aria-hidden />
      </Link>
    </div>
  );
}

function ServicesMegaMenu({
  active,
  isOpen,
  onClose,
}: {
  active: boolean;
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <>
      <NavigationMenuTrigger
        onClick={(event) => {
          if (isOpen) {
            event.preventDefault();
            onClose();
          }
        }}
        className={cn(
          navTriggerClass,
          active
            ? "font-bold text-secondary-fixed"
            : "font-medium text-on-surface-variant hover:text-on-surface",
        )}
      >
        SERVICES
        {active ? (
          <span
            className="absolute right-4 bottom-0 left-4 h-px bg-secondary-fixed"
            aria-hidden
          />
        ) : null}
      </NavigationMenuTrigger>
      <NavigationMenuContent className="bg-surface p-0">
        <div className="w-[min(100vw-2rem,46rem)] bg-surface p-5 md:w-[46rem] md:p-6">
          <ServicesMenuHeader onClose={onClose} />
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-3">
            {FEATURED_NAV_SERVICES.map((service) => (
              <li key={service.id} className="flex h-full">
                <NavigationMenuLink
                  asChild
                  className="services-menu-link h-full w-full ring-0 focus-visible:ring-0"
                >
                  <ServiceMenuCard
                    {...service}
                    variant="dark"
                    className="w-full"
                    onNavigate={onClose}
                  />
                </NavigationMenuLink>
              </li>
            ))}
          </ul>
        </div>
      </NavigationMenuContent>
    </>
  );
}

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [menuOpen, setMenuOpen] = useState(false);
  const [navMenuValue, setNavMenuValue] = useState("");
  const servicesActive = isNavActive(pathname, "/services");

  const closeNavMenu = () => setNavMenuValue("");

  useEffect(() => {
    setNavMenuValue("");
  }, [pathname]);

  return (
    <header
      className={cn(
        "top-0 z-50 w-full font-label-lg",
        isHome ? "pointer-events-none absolute" : "sticky",
      )}
    >
      <div className="header-blur pointer-events-auto w-full overflow-visible">
        <div className="relative mx-auto flex h-16 max-w-container-max items-center justify-between overflow-visible px-margin-mobile md:h-[4.5rem] md:px-margin-desktop">
        <Link
          href="/"
          className="relative z-10 shrink-0 font-logo text-logo font-semibold text-secondary-fixed uppercase"
        >
          {EVENT_NAME}
        </Link>

        <NavigationMenu
          value={navMenuValue}
          onValueChange={setNavMenuValue}
          className="absolute top-1/2 left-1/2 z-50 hidden -translate-x-1/2 -translate-y-1/2 md:flex"
        >
          <NavigationMenuList className="gap-2 lg:gap-3">
            {MAIN_NAV_ITEMS.map((item) => {
              if (item.type === "services") {
                return (
                  <NavigationMenuItem key={item.href} value="services">
                    <ServicesMegaMenu
                      active={servicesActive}
                      isOpen={navMenuValue === "services"}
                      onClose={closeNavMenu}
                    />
                  </NavigationMenuItem>
                );
              }

              const active = isNavActive(pathname, item.href);
              return (
                <NavigationMenuItem key={item.href}>
                  <NavLink
                    label={item.label}
                    href={item.href}
                    active={active}
                  />
                </NavigationMenuItem>
              );
            })}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="relative z-10 flex shrink-0 items-center gap-3 sm:gap-4">
          <Link
            href="/contact-us"
            className="hidden border border-secondary-fixed bg-transparent px-5 py-2.5 font-label-lg text-label-lg text-secondary-fixed uppercase transition-colors hover:bg-secondary-fixed/10 sm:inline-block"
          >
            BOOK NOW
          </Link>

          <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon-lg"
                className="size-11 border border-white/25 bg-white/10 text-secondary-fixed backdrop-blur-sm hover:border-secondary-fixed/50 hover:bg-white/20 hover:text-secondary-fixed md:hidden"
                aria-label="Open menu"
              >
                <MenuIcon className="size-6" strokeWidth={1.5} />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="glass-panel w-full rounded-none border-white/20 p-0 text-on-surface sm:max-w-md"
            >
              <SheetTitle className="sr-only">Main navigation</SheetTitle>
              <div className="flex h-full flex-col overflow-y-auto px-margin-mobile pt-20 pb-8">
                <nav className="flex flex-col gap-1" aria-label="Main navigation">
                  {MAIN_NAV_ITEMS.map((item) => {
                    if (item.type === "link") {
                      const active = isNavActive(pathname, item.href);
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setMenuOpen(false)}
                          className={cn(
                            "py-3 font-label-lg text-label-lg uppercase",
                            active
                              ? "font-bold text-secondary-fixed"
                              : "text-on-surface-variant",
                          )}
                        >
                          {item.label}
                        </Link>
                      );
                    }

                    return (
                      <div key={item.href} className="mt-6">
                        <ServicesMenuHeader onClose={() => setMenuOpen(false)} />
                        <ul className="grid grid-cols-1 gap-3">
                          {FEATURED_NAV_SERVICES.map((service) => (
                            <li key={service.id} className="flex h-full">
                              <ServiceMenuCard
                                {...service}
                                variant="dark"
                                onNavigate={() => setMenuOpen(false)}
                                className="w-full"
                              />
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </nav>
                <Link
                  href="/contact-us"
                  onClick={() => setMenuOpen(false)}
                  className="mt-8 bg-secondary-fixed py-3.5 text-center font-label-lg text-label-lg font-semibold text-on-primary uppercase"
                >
                  BOOK NOW
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
        </div>
      </div>
    </header>
  );
}
