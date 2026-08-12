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
    title: `Best Wedding Planners in ${cityName} | Mega Events`,
    description: `Looking for top-rated wedding planners in ${cityName}? Mega Events specializes in luxury weddings, traditional ceremonies, and bespoke celebrations across Telangana.`,
    alternates: {
      canonical: `/wedding-planners/${city}`,
    },
  };
}

export default async function WeddingPlannersCityPage({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params;
  const cityName = unslugifyLocation(city);

  return (
    <>
      <Hero />
      
      <section className="bg-surface-container-low py-12 md:py-20">
        <div className="mx-auto max-w-container-max px-4 text-center sm:px-6 md:px-margin-desktop">
          <div className="inline-flex items-center justify-center gap-2 rounded-full bg-secondary-fixed/10 px-4 py-1.5 text-secondary-fixed mb-6">
            <MapPin className="size-4" />
            <span className="font-label-md font-semibold tracking-wider uppercase">Serving {cityName}</span>
          </div>
          <h2 className="font-headline-lg text-3xl font-bold text-on-surface sm:text-4xl md:text-5xl mb-6">
            Luxury Wedding Planners in {cityName}
          </h2>
          <p className="mx-auto max-w-3xl font-body-md text-base leading-relaxed text-on-surface-variant sm:text-lg mb-8">
            Your wedding day in {cityName} deserves absolute perfection. Our expert wedding planners handle everything from venue selection to stunning decor, ensuring your special day is beautifully executed and completely stress-free.
          </p>
          <Link
            href="/portfolio"
            className="inline-flex items-center justify-center gap-2 bg-secondary-fixed px-8 py-3.5 font-label-lg text-sm font-semibold tracking-[0.1em] text-on-primary uppercase transition-opacity hover:opacity-90"
          >
            View Wedding Portfolio
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>

      <ExpertiseServices />
      <ConciergeCta />
    </>
  );
}
