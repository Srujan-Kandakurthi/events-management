import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import Hero from "@/app/(home)/components/Hero";
import ExpertiseServices from "@/app/(home)/components/ExpertiseServices";
import ConciergeCta from "@/app/(home)/components/ConciergeCta";

import { TELANGANA_DISTRICTS, unslugifyLocation } from "@/constants/seo-locations";

export async function generateStaticParams() {
  return TELANGANA_DISTRICTS.map((city) => ({
    city: city,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
  const { city } = await params;
  const cityName = unslugifyLocation(city);

  return {
    title: `Best Event Planners in ${cityName} | Mega Events`,
    description: `Looking for top-rated event planners in ${cityName}? Mega Events specializes in luxury weddings, corporate galas, and bespoke celebrations across Telangana.`,
    alternates: {
      canonical: `/event-planners/${city}`,
    },
  };
}

export default async function EventPlannersCityPage({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params;
  const cityName = unslugifyLocation(city);

  return (
    <>
      {/* We reuse the Hero component, but typically you might pass a custom title here if the Hero component supported it. For now, we will add a local SEO block right below the hero. */}
      <Hero />
      
      <section className="bg-surface-container-low py-12 md:py-20">
        <div className="mx-auto max-w-container-max px-4 text-center sm:px-6 md:px-margin-desktop">
          <div className="inline-flex items-center justify-center gap-2 rounded-full bg-secondary-fixed/10 px-4 py-1.5 text-secondary-fixed mb-6">
            <MapPin className="size-4" />
            <span className="font-label-md font-semibold tracking-wider uppercase">Serving {cityName}</span>
          </div>
          <h2 className="font-headline-lg text-3xl font-bold text-on-surface sm:text-4xl md:text-5xl mb-6">
            Premier Event Planners in {cityName}
          </h2>
          <p className="mx-auto max-w-3xl font-body-md text-base leading-relaxed text-on-surface-variant sm:text-lg mb-8">
            Whether you're organizing a grand wedding, a milestone birthday, or a large-scale corporate event in {cityName}, our expert team handles every meticulous detail to craft an extraordinary experience that your guests will remember forever.
          </p>
          <Link
            href="/portfolio"
            className="inline-flex items-center justify-center gap-2 bg-secondary-fixed px-8 py-3.5 font-label-lg text-sm font-semibold tracking-[0.1em] text-on-primary uppercase transition-opacity hover:opacity-90"
          >
            View Our Work
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>

      <ExpertiseServices />
      <ConciergeCta />
    </>
  );
}
