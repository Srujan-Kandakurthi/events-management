import type { LucideIcon } from "lucide-react";
import {
  Baby,
  Building2,
  Cake,
  Camera,
  Flame,
  Gem,
  Landmark,
  Palette,
  Star,
  Heart,
  Users,
  UtensilsCrossed,
} from "lucide-react";

export type ServiceItem = {
  id: string;
  name: string;
  description: string;
  href: string;
  icon: LucideIcon;
  featured: boolean;
};

function serviceHref(id: string) {
  return `/services#${id}`;
}

export const ALL_SERVICES: readonly ServiceItem[] = [
  {
    id: "wedding-planning",
    name: "Wedding Planning",
    description:
      "Complete wedding management including venue coordination, stage decoration, guest management, catering support, entertainment, and seamless execution.",
    href: serviceHref("wedding-planning"),
    icon: Heart,
    featured: true,
  },
  {
    id: "birthday-celebrations",
    name: "Birthday Celebrations",
    description:
      "Creative birthday planning with customized themes, balloon decor, cake arrangements, entertainment, photography, and memorable experiences.",
    href: serviceHref("birthday-celebrations"),
    icon: Cake,
    featured: true,
  },
  {
    id: "corporate-events",
    name: "Corporate Events",
    description:
      "Professional management of conferences, seminars, product launches, annual meetings, award ceremonies, team outings, and corporate gatherings.",
    href: serviceHref("corporate-events"),
    icon: Building2,
    featured: true,
  },
  {
    id: "engagement-reception",
    name: "Engagement & Reception",
    description:
      "Elegant engagement and reception planning with premium decorations, floral arrangements, lighting, sound systems, and stage setup.",
    href: serviceHref("engagement-reception"),
    icon: Gem,
    featured: true,
  },
  {
    id: "event-decoration-theme-design",
    name: "Event Decoration & Theme Design",
    description:
      "Luxury venue decoration, floral arrangements, stage design, entrance setups, seating layouts, lighting concepts, and customized themes.",
    href: serviceHref("event-decoration-theme-design"),
    icon: Palette,
    featured: true,
  },
  {
    id: "seemantham-events",
    name: "Seemantham Events",
    description:
      "Traditional Seemantham ceremony planning with beautiful decorations, seating arrangements, floral themes, cultural setups, and full coordination.",
    href: serviceHref("seemantham-events"),
    icon: Baby,
    featured: false,
  },
  {
    id: "satyanarayana-vratham",
    name: "Satyanarayana Vratham",
    description:
      "Organized Satyanarayana Swamy Vratham arrangements including mandap decoration, pooja setup, seating, lighting, and guest hospitality.",
    href: serviceHref("satyanarayana-vratham"),
    icon: Flame,
    featured: false,
  },
  {
    id: "ganesh-mandap-decoration",
    name: "Ganesh Mandap Decoration",
    description:
      "Creative Ganesh Chaturthi mandap design with thematic backdrops, floral decor, lighting arrangements, and cultural event setups.",
    href: serviceHref("ganesh-mandap-decoration"),
    icon: Landmark,
    featured: true,
  },
  {
    id: "navratri-decoration",
    name: "Navratri Decoration",
    description:
      "Vibrant Navratri and Dasara decoration with thematic stages, traditional decor, lighting concepts, floral arrangements, and cultural management.",
    href: serviceHref("navratri-decoration"),
    icon: Star,
    featured: false,
  },
  {
    id: "cultural-community-events",
    name: "Cultural & Community Events",
    description:
      "Planning and execution of cultural programs, community celebrations, religious events, festivals, and public gatherings end to end.",
    href: serviceHref("cultural-community-events"),
    icon: Users,
    featured: false,
  },
] as const;

/** Shown in header services mega menu (6 main offerings). */
export const FEATURED_NAV_SERVICES: readonly ServiceItem[] = ALL_SERVICES.filter(
  (service) => service.featured,
);
