export interface Proposal {
  name: string;
  category: string;
  tagline: string;
  description: string;
  materials: string;
  image: { src: string; width: number; height: number };
}

export const proposals: Proposal[] = [
  {
    name: "TERRA",
    category: "Kitchen & Bath",
    tagline: "Rooted in Everyday Life",
    description:
      "Matte stoneware, natural textures and earthy glazes bring calm and authenticity to daily routines — functional storage with a handcrafted look.",
    materials: "Stoneware · Bamboo · Recycled Plastic · Natural Textiles",
    image: { src: "/proposals/terra-full.jpg", width: 1145, height: 1374 },
  },
  {
    name: "LOOP",
    category: "Kitchen & Bath",
    tagline: "Circular by Design",
    description:
      "Smart storage for a lighter tomorrow — a mono-material system that assembles without tools and fully disassembles at end of life.",
    materials: "Mono-material · Beech-inspired Tones · Recycled Plastic",
    image: { src: "/proposals/loop-full.jpg", width: 1199, height: 1312 },
  },
  {
    name: "EMBER",
    category: "Kitchen & Bath",
    tagline: "Warmth Lives Here",
    description:
      "Storage for a warmer, kinder everyday — warm-dimming tones, natural textures and gentle tactility bring quiet comfort into daily life.",
    materials: "Ceramic · Jute · Brushed Metal · Wood",
    image: { src: "/proposals/ember-full.jpg", width: 1050, height: 1400 },
  },
  {
    name: "PAUSE",
    category: "Kitchen & Bath",
    tagline: "Slow Rituals, Brighter Days",
    description:
      "Everyday organization for a calmer you — soft materials, soothing colors and thoughtful details turn daily routines into small rituals.",
    materials: "Stone · Frosted Glass · Natural Textures",
    image: { src: "/proposals/pause-full.jpg", width: 1050, height: 1400 },
  },
  {
    name: "FIELD",
    category: "Kitchen & Bath",
    tagline: "Natural Living, Everyday Care",
    description:
      "Storage that grows with a kinder tomorrow — made from natural fibers and recycled materials, simple, durable and rooted in everyday life.",
    materials: "Natural Fibers · Recycled Materials",
    image: { src: "/proposals/field-full.jpg", width: 1050, height: 1400 },
  },
  {
    name: "ATLAS",
    category: "Kitchen & Bath",
    tagline: "Work Smart. Live Better.",
    description:
      "Organized spaces for a richer everyday — kitchen and bath storage designed for modern, hybrid living, where function, sustainability and refined aesthetics come together.",
    materials: "Cork · Recycled Aluminium · Bio-based Plastic · Felt",
    image: { src: "/proposals/atlas-full.jpg", width: 1050, height: 1400 },
  },
];
