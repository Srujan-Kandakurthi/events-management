import Link from "next/link";

import { ALL_SERVICES } from "@/constants/services";

export default function ServicesPage() {
  return (
    <main className="bg-surface px-margin-mobile py-16 md:px-margin-desktop md:py-20">
      <div className="mx-auto max-w-container-max">
        <p className="font-label-lg text-label-lg tracking-[0.2em] text-secondary-fixed uppercase">
          What we offer
        </p>
        <h1 className="mt-3 font-headline-lg text-headline-lg-mobile text-on-surface md:text-headline-lg">
          Our Services
        </h1>
        <p className="mt-4 max-w-2xl font-body-md text-body-md text-on-surface-variant">
          End-to-end event management for weddings, celebrations, corporate
          gatherings, and traditional ceremonies.
        </p>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ALL_SERVICES.map(
            ({ id, name, description, href, icon: Icon }) => (
              <li key={id} id={id}>
                <Link
                  href={href}
                  className="card-dark-solid group flex h-full min-h-[12rem] flex-col gap-4 p-5"
                >
                  <span className="flex size-11 items-center justify-center border border-secondary-fixed/40 bg-surface text-secondary-fixed">
                    <Icon className="size-5" strokeWidth={1.5} />
                  </span>
                  <span className="font-label-lg text-label-lg font-semibold text-on-surface uppercase transition-colors group-hover:text-secondary-fixed">
                    {name}
                  </span>
                  <span className="font-body-md text-sm leading-relaxed text-on-surface-variant">
                    {description}
                  </span>
                </Link>
              </li>
            ),
          )}
        </ul>
      </div>
    </main>
  );
}
