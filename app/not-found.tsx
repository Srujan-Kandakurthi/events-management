"use client";

import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-[calc(100vh-200px)] flex-col items-center justify-center px-6 py-24 text-center">
      <div className="relative mx-auto max-w-2xl">
        <div
          className="pointer-events-none absolute -inset-4 bg-[radial-gradient(circle_at_50%_50%,rgb(212_175_55/0.15),transparent_60%)] blur-2xl"
          aria-hidden
        />
        
        <h1 className="relative font-headline-md text-6xl font-bold tracking-tight sm:text-8xl md:text-[8rem]">
          <span className="gold-text-gradient">404</span>
        </h1>
        
        <h2 className="mt-6 font-headline-md text-2xl font-medium text-on-surface sm:text-3xl">
          Page Not Found
        </h2>
        
        <p className="mx-auto mt-4 max-w-lg font-body-md text-base leading-relaxed text-on-surface-variant sm:text-lg">
          The extraordinary experience you are looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="group flex min-h-12 w-full items-center justify-center gap-2 bg-secondary-fixed px-8 py-3 font-label-lg text-xs font-semibold tracking-[0.12em] text-on-primary uppercase transition-all hover:opacity-90 sm:w-auto sm:min-w-[200px]"
          >
            <Home className="size-4 shrink-0 transition-transform group-hover:scale-110" strokeWidth={1.75} />
            Return Home
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="group flex min-h-12 w-full items-center justify-center gap-2 border border-outline-variant/60 bg-surface/40 px-8 py-3 font-label-lg text-xs font-semibold tracking-[0.12em] text-on-surface uppercase transition-colors hover:border-secondary-fixed/50 hover:text-secondary-fixed sm:w-auto sm:min-w-[200px]"
          >
            <ArrowLeft className="size-4 shrink-0 transition-transform group-hover:-translate-x-1" strokeWidth={1.75} />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
