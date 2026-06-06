import type { LucideIcon } from "lucide-react";
import {
  Baby,
  Building2,
  Cake,
  Camera,
  Flame,
  Gem,
  Gift,
  GraduationCap,
  Home,
  Landmark,
  Megaphone,
  Music,
  Palette,
  Plane,
  ScrollText,
  Sparkles,
  Star,
  Heart,
  Users,
  UtensilsCrossed,
  Volume2,
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
  {
    id: "housewarming-gruhapravesam",
    name: "Housewarming & Gruhapravesam",
    description:
      "Traditional housewarming ceremonies with pooja setup, entrance décor, seating, floral themes, and complete guest coordination.",
    href: serviceHref("housewarming-gruhapravesam"),
    icon: Home,
    featured: false,
  },
  {
    id: "annaprasana-ceremony",
    name: "Annaprasana Ceremony",
    description:
      "First-rice feeding ceremonies with themed décor, mandap styling, seating layouts, photography coordination, and guest hospitality.",
    href: serviceHref("annaprasana-ceremony"),
    icon: UtensilsCrossed,
    featured: false,
  },
  {
    id: "naming-ceremony",
    name: "Naming Ceremony",
    description:
      "Namkaran and cradle ceremonies with elegant décor, traditional setups, floral arrangements, and seamless family coordination.",
    href: serviceHref("naming-ceremony"),
    icon: Baby,
    featured: false,
  },
  {
    id: "upanayanam-thread-ceremony",
    name: "Upanayanam & Thread Ceremony",
    description:
      "Sacred thread ceremonies with mandap decoration, seating for rituals, lighting, sound, and full day-of event management.",
    href: serviceHref("upanayanam-thread-ceremony"),
    icon: ScrollText,
    featured: false,
  },
  {
    id: "haldi-mehendi-ceremonies",
    name: "Haldi & Mehendi Ceremonies",
    description:
      "Vibrant pre-wedding Haldi and Mehendi setups with themed backdrops, seating, floral décor, music, and entertainment coordination.",
    href: serviceHref("haldi-mehendi-ceremonies"),
    icon: Sparkles,
    featured: false,
  },
  {
    id: "sangeet-cocktail-nights",
    name: "Sangeet & Cocktail Nights",
    description:
      "High-energy Sangeet and cocktail evenings with stage design, lighting, DJ coordination, dance floors, and premium guest experiences.",
    href: serviceHref("sangeet-cocktail-nights"),
    icon: Music,
    featured: false,
  },
  {
    id: "anniversary-celebrations",
    name: "Anniversary Celebrations",
    description:
      "Milestone anniversary parties with custom themes, floral décor, dining setups, entertainment, and memorable celebration planning.",
    href: serviceHref("anniversary-celebrations"),
    icon: Gift,
    featured: false,
  },
  {
    id: "retirement-farewell-events",
    name: "Retirement & Farewell Events",
    description:
      "Professional farewell and retirement functions with stage setup, AV support, guest seating, catering coordination, and gifting displays.",
    href: serviceHref("retirement-farewell-events"),
    icon: Building2,
    featured: false,
  },
  {
    id: "graduation-annual-day",
    name: "Graduation & Annual Day",
    description:
      "School and college graduations, annual days, and convocations with stage production, seating, awards, and program flow management.",
    href: serviceHref("graduation-annual-day"),
    icon: GraduationCap,
    featured: false,
  },
  {
    id: "exhibitions-trade-shows",
    name: "Exhibitions & Trade Shows",
    description:
      "Exhibition stalls, trade show layouts, branding displays, registration desks, lighting, and on-ground logistics for business events.",
    href: serviceHref("exhibitions-trade-shows"),
    icon: Landmark,
    featured: false,
  },
  {
    id: "destination-wedding-planning",
    name: "Destination Wedding Planning",
    description:
      "End-to-end destination wedding logistics including venue sourcing, travel coordination, décor, hospitality, and multi-day execution.",
    href: serviceHref("destination-wedding-planning"),
    icon: Plane,
    featured: false,
  },
  {
    id: "lakshmi-puja-festival-events",
    name: "Lakshmi Puja & Festival Events",
    description:
      "Diwali, Lakshmi Puja, and festival celebrations with traditional mandap décor, lighting, floral themes, and community event support.",
    href: serviceHref("lakshmi-puja-festival-events"),
    icon: Flame,
    featured: false,
  },
  {
    id: "political-public-gatherings",
    name: "Political & Public Gatherings",
    description:
      "Large-scale public meetings, rallies, and political events with stage construction, crowd flow, security coordination, and AV production.",
    href: serviceHref("political-public-gatherings"),
    icon: Megaphone,
    featured: false,
  },
  {
    id: "reunion-social-gatherings",
    name: "Reunion & Social Gatherings",
    description:
      "Family reunions, alumni meets, and social get-togethers with venue styling, catering, entertainment, and guest experience planning.",
    href: serviceHref("reunion-social-gatherings"),
    icon: Users,
    featured: false,
  },
  {
    id: "sound-lighting-production",
    name: "Sound & Lighting Production",
    description:
      "Professional sound systems, stage lighting, LED walls, and technical production for weddings, corporate shows, and cultural programs.",
    href: serviceHref("sound-lighting-production"),
    icon: Volume2,
    featured: false,
  },
  {
    id: "photography-videography",
    name: "Photography & Videography",
    description:
      "Event photography and cinematic videography coordination including candid teams, drone coverage, and highlight reel production.",
    href: serviceHref("photography-videography"),
    icon: Camera,
    featured: false,
  },
  {
    id: "catering-hospitality",
    name: "Catering & Hospitality",
    description:
      "Multi-cuisine catering, live counters, buffet styling, guest seating, and hospitality staff coordination for events of every scale.",
    href: serviceHref("catering-hospitality"),
    icon: UtensilsCrossed,
    featured: false,
  },
] as const;

/** Shown in header services mega menu (6 main offerings). */
export const FEATURED_NAV_SERVICES: readonly ServiceItem[] = ALL_SERVICES.filter(
  (service) => service.featured,
);
