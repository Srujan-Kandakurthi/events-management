import { MetadataRoute } from "next";
import { TELANGANA_DISTRICTS } from "@/constants/seo-locations";

const SERVICES = [
  "event-planners",
  "wedding-planners",
];

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const defaultUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://megaevents.in";

  const staticRoutes = [
    "",
    "/about-us",
    "/contact-us",
    "/portfolio",
    "/services",
  ].map((route) => ({
    url: `${defaultUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const dynamicRoutes = SERVICES.flatMap((service) =>
    TELANGANA_DISTRICTS.map((city) => ({
      url: `${defaultUrl}/${service}/${city}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }))
  );

  return [...staticRoutes, ...dynamicRoutes];
}
