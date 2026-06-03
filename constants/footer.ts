import type { LucideIcon } from "lucide-react";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import type { ComponentType, SVGProps } from "react";

import {
  FacebookIcon,
  InstagramIcon,
  MailIcon,
  TwitterIcon,
} from "@/components/icons/social-icons";

export type FooterLink = {
  label: string;
  href: string;
};

export type FooterPhoneNumber = {
  display: string;
  whatsapp: string;
};

export type FooterContactItem = {
  id: string;
  label: string;
  icon: LucideIcon;
  lines: readonly string[];
  phoneNumbers?: readonly FooterPhoneNumber[];
};

export type FooterSocialLink = {
  label: string;
  href: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
};

export const FOOTER_QUICK_LINKS: readonly FooterLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact Us", href: "/contact-us" },
] as const;

export const FOOTER_WHATSAPP_MESSAGE =
  "Hi, I would like to know more details about Mega Events services.";

export function getWhatsAppUrl(
  phone: string,
  message: string = FOOTER_WHATSAPP_MESSAGE,
): string {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export const FOOTER_EMAIL = "megaevents.contact@gmail.com";

export function getGmailComposeUrl(
  email: string = FOOTER_EMAIL,
  options?: { subject?: string; body?: string },
): string {
  const params = new URLSearchParams({
    view: "cm",
    fs: "1",
    to: email,
  });

  if (options?.subject) {
    params.set("su", options.subject);
  }

  if (options?.body) {
    params.set("body", options.body);
  }

  return `https://mail.google.com/mail/?${params.toString()}`;
}

export const FOOTER_PHONE_NUMBERS: readonly FooterPhoneNumber[] = [
  { display: "+91 92461 11116", whatsapp: "9192461111116" },
  { display: "+91 79015 28809", whatsapp: "917901528809" },
  { display: "+91 94921 40290", whatsapp: "919492140290" },
] as const;

export const FOOTER_CONTACT_ITEMS: readonly FooterContactItem[] = [
  {
    id: "email",
    label: "EMAIL US",
    icon: Mail,
    lines: [FOOTER_EMAIL],
  },
  {
    id: "phone",
    label: "CONTACT US",
    icon: Phone,
    lines: [],
    phoneNumbers: FOOTER_PHONE_NUMBERS,
  },
  {
    id: "address",
    label: "VISIT US",
    icon: MapPin,
    lines: [
      "Rotary Function Hall,",
      "Sai Priya Nagar,",
      "beside Howard School",
      "Nizamabad, Telangana, 503001",
    ],
  },
  {
    id: "hours",
    label: "HOURS",
    icon: Clock,
    lines: ["Mon – Sat: 09:00 AM – 06:00 PM", "Sun: By Appointment"],
  },
] as const;

export const FOOTER_SOCIAL_LINKS: readonly FooterSocialLink[] = [
  { label: "Instagram", href: "https://www.instagram.com/megaevents_nzb", icon: InstagramIcon },
  { label: "Facebook", href: "https://facebook.com", icon: FacebookIcon },
  { label: "Twitter", href: "https://twitter.com", icon: TwitterIcon },
  { label: "Email", href: getGmailComposeUrl(), icon: MailIcon },
] as const;

export const FOOTER_LEGAL_LINKS: readonly FooterLink[] = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "Cookie Policy", href: "/cookie-policy" },
] as const;

export const FOOTER_MAP_DIRECTIONS_URL =
  "https://www.google.com/maps/search/?api=1&query=110+Golden+Plaza+Midtown+District+Manhattan+NY+10019";

export const FOOTER_DESCRIPTION =
  "Mega Events is the premier curator of prestigious experiences, merging cinematic elegance with technical precision for high-net-worth celebrations and institutional galas.";
