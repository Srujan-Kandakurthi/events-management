import { Metadata } from "next";
import PortfolioClient from "./PortfolioClient";

export const metadata: Metadata = {
  title: "Our Portfolio | Mega Events Telangana",
  description: "View our extensive portfolio of luxury weddings, corporate galas, and bespoke events planned and executed flawlessly across Telangana.",
  alternates: {
    canonical: "/portfolio",
  },
};

export default function PortfolioPage() {
  return <PortfolioClient />;
}
