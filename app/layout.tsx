import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import MainShell from "@/components/layout/MainShell";
import ScrollToTop from "@/components/layout/ScrollToTop";
import Footer from "@/components/layout/footer";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";
import { montserrat, playfairDisplay } from "@/lib/fonts";

import { Toaster } from "@/components/ui/sonner";

const defaultUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://megaevents.in";

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: {
    default: "Mega Events - Premier Event Planners in Telangana",
    template: "%s | Mega Events",
  },
  description: "Mega Events is the premier event planner across Telangana, including Hyderabad and Nizamabad. We specialize in luxury weddings, engagements, birthday celebrations, and corporate galas, crafting extraordinary experiences with meticulous detail.",
  openGraph: {
    title: "Mega Events - Premier Event Planners in Telangana",
    description: "Crafting extraordinary luxury events across Telangana.",
    type: "website",
    locale: "en_IN",
    siteName: "Mega Events",
    images: [
      {
        url: "/assets/images/mega-events-logo.jpg",
        width: 1200,
        height: 630,
        alt: "Mega Events Luxury Event Planning",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mega Events - Premier Event Planners",
    description: "Crafting extraordinary luxury events across Telangana.",
    images: ["/assets/images/mega-events-logo.jpg"],
  },
};

import { LocalBusinessSchema, OrganizationSchema } from "@/components/seo/Schema";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfairDisplay.variable} ${montserrat.variable} h-full antialiased`}
    >
      <head>
        <OrganizationSchema />
        <LocalBusinessSchema />
      </head>
      <body className="flex min-h-full flex-col bg-surface text-on-surface">
        <ScrollToTop />
        <Header />
        <MainShell>{children}</MainShell>
        <Footer />
        <WhatsAppFloat />
        <Toaster />
      </body>
    </html>
  );
}
