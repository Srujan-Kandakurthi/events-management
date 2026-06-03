import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { forwardRef } from "react";

import type { ServiceItem } from "@/constants/services";
import { cn } from "@/lib/utils";

type ServiceMenuCardProps = ServiceItem & {
  onNavigate?: () => void;
  className?: string;
  variant?: "light" | "dark";
  compact?: boolean;
};

const ServiceMenuCard = forwardRef<HTMLAnchorElement, ServiceMenuCardProps>(
  function ServiceMenuCard(
    {
      name,
      description,
      href,
      icon: Icon,
      onNavigate,
      className,
      variant = "light",
      compact = false,
    },
    ref,
  ) {
    const isDark = variant === "dark";

    if (compact) {
      return (
        <Link
          ref={ref}
          href={href}
          onClick={onNavigate}
          className={cn(
            "group flex min-h-14 w-full items-center gap-3 rounded-lg border border-outline-variant/40 bg-surface-container/40 px-3.5 py-3 transition-colors hover:border-secondary-fixed/50 hover:bg-surface-container-high active:bg-surface-container-high",
            className,
          )}
        >
          <span className="flex size-10 shrink-0 items-center justify-center border border-secondary-fixed/40 bg-surface text-secondary-fixed">
            <Icon className="size-[1.125rem]" strokeWidth={1.5} />
          </span>
          <span className="min-w-0 flex-1 font-label-sm text-sm font-semibold tracking-[0.08em] text-on-surface uppercase transition-colors group-hover:text-secondary-fixed">
            {name}
          </span>
          <ChevronRight
            className="size-4 shrink-0 text-on-surface-variant/50 transition-colors group-hover:text-secondary-fixed"
            strokeWidth={2}
            aria-hidden
          />
        </Link>
      );
    }

    return (
      <Link
        ref={ref}
        href={href}
        onClick={onNavigate}
        className={cn(
          "group flex h-full min-h-[7.25rem] gap-3.5 py-5 pr-5 pl-0 transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-0.5",
          isDark ? "service-nav-card" : "glass-card",
          className,
        )}
      >
        <span
          className={cn(
            "ml-5 flex size-10 shrink-0 items-center justify-center border text-secondary-fixed",
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
          <span className="mt-1.5 line-clamp-2 flex-1 font-body-md text-xs leading-relaxed font-light text-on-surface/85 sm:text-sm">
            {description}
          </span>
        </span>
      </Link>
    );
  },
);

export default ServiceMenuCard;
