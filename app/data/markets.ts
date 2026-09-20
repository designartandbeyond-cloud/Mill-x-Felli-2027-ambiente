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
  /** Optional product sheet image for the market, shown on its profile page */
  productImage?: { src: string; width: number; height: number };
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
    productImage: { src: "/products/germany.png", width: 2000, height: 1829 },
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
    productImage: { src: "/products/uk.png", width: 2000, height: 1831 },
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
    productImage: { src: "/products/france.png", width: 2000, height: 1834 },
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
    productImage: { src: "/products/switzerland.png", width: 2000, height: 1833 },
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
    productImage: { src: "/products/usa.png", width: 2000, height: 1821 },
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
    productImage: { src: "/products/canada.png", width: 2000, height: 1822 },
  },
];

export const marketBySlug: Record<string, MarketProfile> = Object.fromEntries(
  markets.map((m) => [m.slug, m])
);

export const marketByMapName: Record<string, MarketProfile> = Object.fromEntries(
  markets.map((m) => [m.mapName, m])
);
