import { Metadata } from "next";
import InquiryForm from "@/components/home/InquiryForm";

export const metadata: Metadata = {
  title: "Contact Us | Mega Events Nizamabad",
  description: "Get in touch with Mega Events to start planning your dream luxury wedding, corporate event, or birthday celebration in Telangana.",
  alternates: {
    canonical: "/contact-us",
  },
};

export default function ContactUsPage() {
  return <InquiryForm />;
}
