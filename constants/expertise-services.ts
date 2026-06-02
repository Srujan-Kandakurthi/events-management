export type ExpertiseService = {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  href: string;
};

export const EXPERTISE_SECTION_COPY = {
  eyebrow: "Our Expertise",
  title: "World-Class Event Services",
  viewMore: "View More",
} as const;

export const EXPERTISE_SERVICES: readonly ExpertiseService[] = [
  {
    id: "wedding-planning",
    title: "Wedding Planning",
    description:
      "Complete wedding management from venue coordination and guest hospitality to stage design, catering, and flawless day-of execution.",
    image: "/assets/images/wedding.png",
    imageAlt: "Elegant wedding ceremony setup",
    href: "/services#wedding-planning",
  },
  {
    id: "wedding-decoration",
    title: "Wedding Decoration",
    description:
      "Luxury floral arrangements, mandap styling, entrance arches, lighting concepts, and bespoke themes tailored to your celebration vision.",
    image: "/assets/images/after-image.jpg",
    imageAlt: "Luxury wedding decoration with floral canopy",
    href: "/services#event-decoration-theme-design",
  },
  {
    id: "engagement-reception",
    title: "Engagement & Rites",
    description:
      "Elegant engagement and reception planning with premium décor, traditional rites coordination, sound, lighting, and stage setup.",
    image: "/assets/images/engagement.jpg",
    imageAlt: "Traditional engagement ceremony",
    href: "/services#engagement-reception",
  },
  {
    id: "birthday-celebrations",
    title: "Birthday Celebrations",
    description:
      "Creative birthday themes, balloon and floral décor, cake styling, entertainment, photography, and memorable experiences for every age.",
    image: "/assets/images/birthday.png",
    imageAlt: "Warm birthday celebration lighting",
    href: "/services#birthday-celebrations",
  },
  {
    id: "housewarming",
    title: "Housewarming Functions",
    description:
      "Traditional housewarming ceremonies with pooja setup, entrance décor, seating, floral themes, and complete guest coordination.",
    image: "/assets/images/house-warming.jpg",
    imageAlt: "Traditional housewarming celebration at home entrance",
    href: "/services#cultural-community-events",
  },
  {
    id: "corporate-events",
    title: "Corporate & Global",
    description:
      "Professional conferences, product launches, award nights, and global corporate gatherings with precision planning and premium production.",
    image: "/assets/images/hero-bg.png",
    imageAlt: "Premium corporate event venue with stage lighting",
    href: "/services#corporate-events",
  },
] as const;
