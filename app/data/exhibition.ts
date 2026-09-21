export interface ExhibitionZone {
  id: string;
  number: number;
  title: string;
  tagline: string;
  /** Percent-based hover trigger area over the booth photo */
  hotspot: { left: number; top: number; width: number; height: number };
  /** Percent position used as the CSS transform-origin when zooming in */
  origin: { x: number; y: number };
  thumb: { src: string; width: number; height: number };
}

export const exhibitionImage = {
  src: "/exhibition/booth.jpg",
  width: 1536,
  height: 1024,
};

export const exhibitionZones: ExhibitionZone[] = [
  {
    id: "lid-system",
    number: 1,
    title: "Universal Lid System",
    tagline: "One lid. More possibilities.",
    hotspot: { left: 0.7, top: 29.3, width: 18.9, height: 31.7 },
    origin: { x: 10.1, y: 45.2 },
    thumb: { src: "/exhibition/zone1.jpg", width: 260, height: 270 },
  },
  {
    id: "modular-tableware",
    number: 2,
    title: "Modular Tableware",
    tagline: "Mix. Match. Expand. For every moment.",
    hotspot: { left: 19.5, top: 36.1, width: 19.5, height: 24.4 },
    origin: { x: 29.3, y: 48.3 },
    thumb: { src: "/exhibition/zone2.jpg", width: 270, height: 180 },
  },
  {
    id: "hydration",
    number: 3,
    title: "Hydration for a Cooler Tomorrow",
    tagline: "Water Station · Pitcher · Water Bottle · Beverage Dispenser",
    hotspot: { left: 42.3, top: 39.1, width: 26.0, height: 25.4 },
    origin: { x: 55.3, y: 51.8 },
    thumb: { src: "/exhibition/zone3.jpg", width: 300, height: 150 },
  },
  {
    id: "pantry-storage",
    number: 4,
    title: "Pantry Storage",
    tagline: "Keep It Fresh. Waste Less.",
    hotspot: { left: 69.3, top: 29.3, width: 15.3, height: 34.2 },
    origin: { x: 77.0, y: 46.4 },
    thumb: { src: "/exhibition/zone4.jpg", width: 200, height: 190 },
  },
  {
    id: "materials-in-harmony",
    number: 5,
    title: "Materials In Harmony",
    tagline: "The Beauty of Combination.",
    hotspot: { left: 84.0, top: 29.3, width: 16.0, height: 34.2 },
    origin: { x: 92.0, y: 46.4 },
    thumb: { src: "/exhibition/zone5.jpg", width: 170, height: 145 },
  },
  {
    id: "fridge-organization",
    number: 6,
    title: "Fridge Organization",
    tagline: "A Fresher Home. A Smarter You.",
    hotspot: { left: 24.1, top: 63.5, width: 28.0, height: 17.6 },
    origin: { x: 38.1, y: 72.3 },
    thumb: { src: "/exhibition/zone6.jpg", width: 300, height: 130 },
  },
  {
    id: "design-art-tabletop",
    number: 7,
    title: "Design Art Tabletop",
    tagline: "Everyday Beauty. Extraordinary Moments.",
    hotspot: { left: 57.3, top: 63.5, width: 42.7, height: 19.5 },
    origin: { x: 78.6, y: 73.2 },
    thumb: { src: "/exhibition/zone7.jpg", width: 300, height: 140 },
  },
];
