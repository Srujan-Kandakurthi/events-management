"use client";

import { ArrowRight, ChevronDown, MenuIcon, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
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
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import ServiceMenuCard from "@/components/layout/ServiceMenuCard";
import { MAIN_NAV_ITEMS } from "@/constants/navigation";
import {
  ALL_SERVICES,
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
  "relative h-auto rounded-none bg-transparent! px-2 py-1 pb-1 font-label-lg text-[11px] tracking-[0.12em] uppercase shadow-none ring-0 hover:bg-transparent! focus:bg-transparent! data-active:bg-transparent! data-popup-open:bg-transparent! md:px-2.5 md:text-xs md:tracking-[0.13em] lg:px-3 lg:text-label-lg lg:tracking-[0.15em] xl:px-4";

const navActiveIndicatorClass =
  "absolute right-2 bottom-0 left-2 h-px bg-secondary-fixed md:right-2.5 md:left-2.5 lg:right-3 lg:left-3 xl:right-4 xl:left-4";

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
          <span className={navActiveIndicatorClass} aria-hidden />
        ) : null}
      </Link>
    </NavigationMenuLink>
  );
}

function ServicesMenuHeader({ onClose }: { onClose?: () => void }) {
  return (
    <div className="mb-3 flex items-center justify-between gap-2 border-b border-outline-variant/40 pb-3 sm:mb-4 sm:gap-3">
      <p className="font-label-lg text-xs tracking-[0.13em] text-on-surface uppercase sm:text-label-lg sm:tracking-[0.15em]">
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

const mobileNavLinkClass =
  "flex min-h-10 items-center border-l-2 py-2 pl-3 font-label-lg text-xs tracking-[0.13em] uppercase transition-colors";

function MobileNavLinks({
  pathname,
  onNavigate,
}: {
  pathname: string;
  onNavigate: () => void;
}) {
  const servicesActive = isNavActive(pathname, "/services");

  return (
    <ul className="space-y-0.5">
      {MAIN_NAV_ITEMS.map((item) => {
        if (item.type === "services") {
          return (
            <li key={item.href}>
              <DropdownMenu modal={false}>
                <DropdownMenuTrigger asChild>
                  <button
                    type="button"
                    className={cn(
                      mobileNavLinkClass,
                      "w-full justify-between pr-2 outline-none",
                      servicesActive
                        ? "border-secondary-fixed font-semibold text-secondary-fixed"
                        : "border-transparent text-on-surface-variant hover:text-on-surface",
                    )}
                  >
                    {item.label}
                    <ChevronDown
                      className="size-3.5 shrink-0 opacity-60"
                      strokeWidth={2}
                      aria-hidden
                    />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="start"
                  side="bottom"
                  sideOffset={4}
                  className="z-[60] max-h-56 w-(--radix-dropdown-menu-trigger-width) overflow-y-auto border border-outline-variant/40 bg-surface-container-high p-1 shadow-lg"
                >
                  {ALL_SERVICES.map((service) => (
                    <DropdownMenuItem key={service.id} asChild>
                      <Link
                        href={service.href}
                        onClick={onNavigate}
                        className="cursor-pointer py-1.5 text-[10px] tracking-[0.05em] text-on-surface-variant uppercase focus:bg-surface-container focus:text-on-surface"
                      >
                        {service.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </li>
          );
        }

        const active = isNavActive(pathname, item.href);
        return (
          <li key={item.href}>
            <Link
              href={item.href}
              onClick={onNavigate}
              className={cn(
                mobileNavLinkClass,
                active
                  ? "border-secondary-fixed font-semibold text-secondary-fixed"
                  : "border-transparent text-on-surface-variant hover:text-on-surface",
              )}
            >
              {item.label}
            </Link>
          </li>
        );
      })}
    </ul>
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
          <span className={navActiveIndicatorClass} aria-hidden />
        ) : null}
      </NavigationMenuTrigger>
      <NavigationMenuContent className="bg-surface p-0">
        <div className="w-[min(100vw-2rem,46rem)] bg-surface p-4 sm:p-5 md:w-[46rem] md:p-6">
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
  const [menuOpen, setMenuOpen] = useState(false);
  const [navMenuValue, setNavMenuValue] = useState("");
  const servicesActive = isNavActive(pathname, "/services");

  const closeNavMenu = () => setNavMenuValue("");

  useEffect(() => {
    setNavMenuValue("");
  }, [pathname]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");

    const closeMobileMenu = () => {
      if (mediaQuery.matches) {
        setMenuOpen(false);
      }
    };

    closeMobileMenu();
    mediaQuery.addEventListener("change", closeMobileMenu);
    return () => mediaQuery.removeEventListener("change", closeMobileMenu);
  }, []);

  return (
    <header className="fixed top-0 z-50 w-full font-label-lg">
      <div className="header-blur w-full overflow-visible">
        <div className="relative mx-auto grid h-14 max-w-container-max grid-cols-[minmax(0,1fr)_auto] items-center gap-2 px-4 sm:h-16 sm:gap-3 sm:px-5 md:grid-cols-[auto_1fr_auto] md:gap-3 md:px-6 lg:h-[4.5rem] lg:gap-4 lg:px-margin-desktop xl:gap-6">
        <Link
          href="/"
          className="relative z-10 shrink-0 font-logo text-base font-semibold tracking-[0.08em] text-secondary-fixed uppercase sm:text-lg md:text-base md:tracking-[0.09em] lg:text-logo lg:tracking-[0.12em]"
        >
          {EVENT_NAME}
        </Link>

        <NavigationMenu
          value={navMenuValue}
          onValueChange={setNavMenuValue}
          className="z-50 hidden md:col-start-2 md:row-start-1 md:flex md:justify-self-center"
        >
          <NavigationMenuList className="gap-0.5 md:gap-1 lg:gap-2 xl:gap-3">
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

        <div className="relative z-10 flex shrink-0 items-center justify-end gap-2 sm:gap-3 md:col-start-3 md:row-start-1 md:justify-self-end lg:gap-4">
          <Link
            href="/contact-us"
            className="hidden shrink-0 border border-secondary-fixed bg-transparent px-3 py-2 font-label-lg text-[11px] tracking-[0.12em] text-secondary-fixed uppercase transition-colors hover:bg-secondary-fixed/10 md:inline-flex md:px-4 md:py-2.5 md:text-xs md:tracking-[0.13em] lg:px-5 lg:text-label-lg lg:tracking-[0.15em]"
          >
            BOOK NOW
          </Link>

          <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon-lg"
                className="size-10 border border-white/25 bg-white/10 text-secondary-fixed backdrop-blur-sm hover:border-secondary-fixed/50 hover:bg-white/20 hover:text-secondary-fixed sm:size-11 md:hidden"
                aria-label="Open menu"
              >
                <MenuIcon className="size-5 sm:size-6" strokeWidth={1.5} />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              showCloseButton={false}
              className="flex h-full w-full flex-col gap-0 rounded-none border-l border-outline-variant/30 bg-surface p-0 text-on-surface sm:max-w-xs"
            >
              <SheetTitle className="sr-only">Main navigation</SheetTitle>

              <div className="flex shrink-0 items-center justify-between border-b border-outline-variant/30 px-4 py-3">
                <Link
                  href="/"
                  onClick={() => setMenuOpen(false)}
                  className="font-logo text-sm font-semibold tracking-[0.1em] text-secondary-fixed uppercase"
                >
                  {EVENT_NAME}
                </Link>
                <SheetClose asChild>
                  <Button
                    variant="ghost"
                    size="icon-lg"
                    className="size-10 shrink-0 text-on-surface hover:bg-surface-container-high hover:text-on-surface"
                    aria-label="Close menu"
                  >
                    <X className="size-4" strokeWidth={1.75} />
                  </Button>
                </SheetClose>
              </div>

              <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-4 py-4">
                <nav aria-label="Main navigation">
                  <MobileNavLinks
                    pathname={pathname}
                    onNavigate={() => setMenuOpen(false)}
                  />
                </nav>
              </div>

              <div className="shrink-0 border-t border-outline-variant/30 bg-surface px-4 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
                <Link
                  href="/contact-us"
                  onClick={() => setMenuOpen(false)}
                  className="flex min-h-10 w-full items-center justify-center bg-secondary-fixed font-label-lg text-xs font-semibold tracking-[0.1em] text-on-primary uppercase transition-opacity hover:opacity-90"
                >
                  Book now
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
