import { Metadata } from "next";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About Mega Events | Top Event Planners in Telangana",
  description: "Learn about Mega Events, the premier luxury event planning team in Telangana. We specialize in bringing extraordinary visions to life.",
  alternates: {
    canonical: "/about-us",
  },
};

export default function AboutUsPage() {
  return (
    <main className="">
        <h1 className="text-3xl">About Us Page</h1>
    </main>
  );
}
