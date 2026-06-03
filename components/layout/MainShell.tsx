"use client";

import { usePathname } from "next/navigation";

import MobilePageBack from "@/components/layout/MobilePageBack";
import { cn } from "@/lib/utils";

export default function MainShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const isHome = usePathname() === "/";

  return (
    <main
      className={cn(
        "flex-1 font-body-md text-body-md",
        !isHome && "pt-14 sm:pt-16 lg:pt-[4.5rem]",
      )}
    >
      <MobilePageBack />
      {children}
    </main>
  );
}
