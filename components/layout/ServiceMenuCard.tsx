import Link from "next/link";
import { forwardRef } from "react";

import type { ServiceItem } from "@/constants/services";
import { cn } from "@/lib/utils";

type ServiceMenuCardProps = ServiceItem & {
  onNavigate?: () => void;
  className?: string;
  variant?: "light" | "dark";
};

const ServiceMenuCard = forwardRef<HTMLAnchorElement, ServiceMenuCardProps>(
  function ServiceMenuCard(
    { name, description, href, icon: Icon, onNavigate, className, variant = "light" },
    ref,
  ) {
    const isDark = variant === "dark";

    return (
      <Link
        ref={ref}
        href={href}
        onClick={onNavigate}
        className={cn(
          "group flex h-full min-h-[7.25rem] gap-3.5 p-4 transition-transform duration-300 hover:-translate-y-0.5",
          isDark ? "card-dark-solid" : "glass-card",
          className,
        )}
      >
        <span
          className={cn(
            "flex size-10 shrink-0 items-center justify-center border text-secondary-fixed",
            isDark
              ? "border-secondary-fixed/40 bg-surface"
              : "border-secondary-fixed/30 bg-surface-container-high",
          )}
        >
          <Icon className="size-[1.125rem]" strokeWidth={1.5} />
        </span>
        <span className="flex min-w-0 flex-1 flex-col">
          <span className="font-label-lg text-label-lg font-semibold text-on-surface uppercase transition-colors group-hover:text-secondary-fixed">
            {name}
          </span>
          <span className="mt-1.5 line-clamp-2 flex-1 font-body-md text-xs leading-relaxed font-light text-on-surface-variant sm:text-sm">
            {description}
          </span>
        </span>
      </Link>
    );
  },
);

export default ServiceMenuCard;
