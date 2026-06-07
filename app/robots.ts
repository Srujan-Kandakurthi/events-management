import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const defaultUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://megaevents.in";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: `${defaultUrl}/sitemap.xml`,
  };
}
