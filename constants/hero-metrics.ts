export type HeroMetric = {
  value: string;
  label: string;
};

export const HERO_METRICS: readonly HeroMetric[] = [
  { value: "500+", label: "EVENTS MANAGED" },
  { value: "1000+", label: "HAPPY FAMILIES" },
  { value: "50+", label: "CORPORATE CLIENTS" },
  { value: "10+", label: "YEARS OF EXCELLENCE" },
] as const;
