export type MarketSlug =
  | "germany"
  | "uk"
  | "france"
  | "switzerland"
  | "usa"
  | "canada";

export interface MarketProfile {
  slug: MarketSlug;
  /** Country name as used by @react-map/world's cityColors/onSelect keys */
  mapName: string;
  name: string;
  flag: string;
  healthyConvenience: string;
  foodLifeExtension: string;
  climateAdaptive: string;
  coreDriver: string;
}

export const markets: MarketProfile[] = [
  {
    slug: "germany",
    mapName: "Germany",
    name: "Germany",
    flag: "🇩🇪",
    healthyConvenience: "Protein Prep Box",
    foodLifeExtension: "Fresh Stack",
    climateAdaptive: "Hydration Station",
    coreDriver: "Efficiency",
  },
  {
    slug: "uk",
    mapName: "United Kingdom",
    name: "United Kingdom",
    flag: "🇬🇧",
    healthyConvenience: "Smart Leftover Bento",
    foodLifeExtension: "Leftover Keeper",
    climateAdaptive: "Cool Carry",
    coreDriver: "Value",
  },
  {
    slug: "france",
    mapName: "France",
    name: "France",
    flag: "🇫🇷",
    healthyConvenience: "Fresh Lunch Duo",
    foodLifeExtension: "Fresh Produce Keeper",
    climateAdaptive: "Infuse & Cool",
    coreDriver: "Freshness",
  },
  {
    slug: "switzerland",
    mapName: "Switzerland",
    name: "Switzerland",
    flag: "🇨🇭",
    healthyConvenience: "Modular Wellness Box",
    foodLifeExtension: "Precision Fresh Box",
    climateAdaptive: "Hydration Precision",
    coreDriver: "Quality",
  },
  {
    slug: "usa",
    mapName: "United States",
    name: "USA",
    flag: "🇺🇸",
    healthyConvenience: "One-Day Meal Station",
    foodLifeExtension: "Fridge-to-Freezer",
    climateAdaptive: "Hydration Hub",
    coreDriver: "Convenience",
  },
  {
    slug: "canada",
    mapName: "Canada",
    name: "Canada",
    flag: "🇨🇦",
    healthyConvenience: "Seasonal Meal Box",
    foodLifeExtension: "Harvest Keeper",
    climateAdaptive: "Climate Ready Hydration",
    coreDriver: "Resilience",
  },
];

export const marketBySlug: Record<string, MarketProfile> = Object.fromEntries(
  markets.map((m) => [m.slug, m])
);

export const marketByMapName: Record<string, MarketProfile> = Object.fromEntries(
  markets.map((m) => [m.mapName, m])
);
