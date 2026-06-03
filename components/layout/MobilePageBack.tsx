"use client";

import { ArrowLeft } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

export default function MobilePageBack() {
  const pathname = usePathname();
  const router = useRouter();

  if (pathname === "/") {
    return null;
  }

  const handleBack = () => {
    if (typeof window !== "undefined" && window.history.length > 1) {
      router.back();
      return;
    }

    router.push("/");
  };

  return (
    <div className="mx-auto max-w-container-max px-margin-mobile pt-4 md:hidden">
      <button
        type="button"
        onClick={handleBack}
        className="inline-flex items-center gap-1.5 font-label-lg text-[10px] font-semibold tracking-[0.12em] text-secondary-fixed uppercase transition-opacity hover:opacity-80"
      >
        <ArrowLeft className="size-3.5" strokeWidth={2.25} aria-hidden />
        Back
      </button>
    </div>
  );
}
