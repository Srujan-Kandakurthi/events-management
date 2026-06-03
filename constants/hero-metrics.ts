export type HeroMetric = {
  value: string;
  label: string;
};

export const HERO_METRICS: readonly HeroMetric[] = [
  { value: "1000+", label: "EVENTS MANAGED" },
  { value: "1000+", label: "HAPPY FAMILIES" },
  { value: "100+", label: "CORPORATE CLIENTS" },
  { value: "30+", label: "YEARS OF EXCELLENCE" },
] as const;
