import { FOOTER_EMAIL, FOOTER_PHONE_NUMBERS } from "@/constants/footer";

export function OrganizationSchema() {
  const defaultUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://megaevents.in";
  
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Mega Events",
    url: defaultUrl,
    logo: `${defaultUrl}/assets/images/mega-events-logo.jpg`,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: FOOTER_PHONE_NUMBERS[0]?.display || "",
      contactType: "customer service",
      email: FOOTER_EMAIL,
      areaServed: "IN",
      availableLanguage: "en",
    },
    sameAs: [
      "https://www.instagram.com/megaevents_nzb",
      "https://facebook.com",
      "https://twitter.com",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function LocalBusinessSchema() {
  const defaultUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://megaevents.in";

  const schema = {
    "@context": "https://schema.org",
    "@type": "EventResaleService", // or LocalBusiness depending on specificity
    name: "Mega Events Planners",
    image: `${defaultUrl}/assets/images/hero-bg.png`,
    "@id": defaultUrl,
    url: defaultUrl,
    telephone: FOOTER_PHONE_NUMBERS[0]?.display || "",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rotary Function Hall, Sai Priya Nagar, beside Howard School",
      addressLocality: "Nizamabad",
      addressRegion: "Telangana",
      postalCode: "503001",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 18.660807664878103,
      longitude: 78.09576037386326,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        opens: "09:00",
        closes: "18:00"
      }
    ],
    priceRange: "$$$"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
