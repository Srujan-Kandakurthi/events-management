export type NavLinkItem = {
  label: string;
  href: string;
  type: "link";
};

export type NavServicesItem = {
  label: string;
  href: string;
  type: "services";
};

export type NavItem = NavLinkItem | NavServicesItem;

export const MAIN_NAV_ITEMS: readonly NavItem[] = [
  { label: "HOME", href: "/", type: "link" },
  { label: "ABOUT US", href: "/about-us", type: "link" },
  { label: "SERVICES", href: "/services", type: "services" },
  { label: "CONTACT US", href: "/contact-us", type: "link" },
] as const;
