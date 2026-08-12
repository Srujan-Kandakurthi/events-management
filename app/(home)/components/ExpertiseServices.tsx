import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import {
  EXPERTISE_SECTION_COPY,
  EXPERTISE_SERVICES,
  type ExpertiseService,
} from "@/constants/expertise-services";
import { sectionContentGapClass, sectionEyebrowClass, sectionPaddingClass, sectionTitleClass } from "@/lib/section-styles";

function ExpertiseServiceCard({
  title,
  description,
  image,
  imageAlt,
  href,
}: ExpertiseService) {
  return (
    <Link
      href={href}
      className="expertise-card group relative block aspect-[4/3] min-h-[12rem] overflow-hidden border border-transparent sm:aspect-[3/4] sm:min-h-[20rem] lg:min-h-[22rem]"
    >
      <Image
        src={image}
        alt={imageAlt}
        fill
        className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />

      <div
        className="absolute inset-0 bg-linear-to-t from-surface/95 via-surface/45 to-surface/15 transition-all duration-300 group-hover:from-surface group-hover:via-surface/75 group-hover:to-surface/35 group-focus-visible:from-surface group-focus-visible:via-surface/75 group-focus-visible:to-surface/35"
        aria-hidden
      />

      <div className="relative flex h-full flex-col p-5">
        <div className="min-h-0 flex-1" aria-hidden />

        <div className="shrink-0 text-start">
          <h3 className="font-headline-md text-xl leading-snug font-semibold text-on-surface sm:text-2xl">
            {title}
          </h3>

          <div className="grid grid-rows-[0fr] opacity-0 transition-[grid-template-rows,opacity] duration-300 ease-out group-hover:grid-rows-[1fr] group-hover:opacity-100 group-focus-visible:grid-rows-[1fr] group-focus-visible:opacity-100">
            <div className="overflow-hidden">
              <p className="line-clamp-3 pt-2.5 pb-0.5 text-start font-body-md text-xs leading-[1.55] font-light text-on-surface/85 sm:text-sm">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function ExpertiseServices() {
  return (
    <section className={`bg-surface ${sectionPaddingClass}`}>
      <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
        <div className="mx-auto max-w-3xl text-center">
          <p className={sectionEyebrowClass}>
            {EXPERTISE_SECTION_COPY.eyebrow}
          </p>
          <h2 className={sectionTitleClass}>
            {EXPERTISE_SECTION_COPY.title}
          </h2>
          <div
            className="mx-auto mt-3 h-px w-14 bg-secondary-fixed md:mt-4"
            aria-hidden
          />
        </div>

        <ul className={`grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 ${sectionContentGapClass}`}>
          {EXPERTISE_SERVICES.map((service) => (
            <li key={service.id}>
              <ExpertiseServiceCard {...service} />
            </li>
          ))}
        </ul>

        <div className="mt-6 flex justify-center sm:mt-12">
          <Link
            href="/services"
            className="inline-flex min-w-[7.5rem] items-center justify-center gap-1.5 border border-secondary-fixed px-5 py-2 font-label-lg text-[10px] leading-none font-semibold tracking-[0.08em] text-secondary-fixed uppercase transition-colors hover:bg-secondary-fixed/10 sm:min-w-[12.5rem] sm:gap-2 sm:px-8 sm:py-3 sm:text-label-lg sm:leading-normal sm:tracking-[0.15em]"
          >
            {EXPERTISE_SECTION_COPY.viewMore}
            <ArrowRight className="size-3.5 sm:size-4" strokeWidth={2.25} aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}
