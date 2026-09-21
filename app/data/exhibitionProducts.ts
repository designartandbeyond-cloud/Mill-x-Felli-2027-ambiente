export interface ExhibitionVariant {
  letter: string;
  title: string;
  description: string;
  materials: string;
  image: { src: string; width: number; height: number };
}

export interface ExhibitionSignature {
  letter: string;
  title: string;
  description: string;
  render: { src: string; width: number; height: number };
  lifestyle: { src: string; width: number; height: number };
}

export interface ExhibitionProduct {
  zoneId: string;
  intro: string;
  signature: ExhibitionSignature;
  variants: ExhibitionVariant[];
}

export const exhibitionProducts: Record<string, ExhibitionProduct> = {
  "modular-tableware": {
    zoneId: "modular-tableware",
    intro:
      "One ribbed silhouette, built to mix and match across ceramic, glass, and MS components — so a single system can move from pantry shelf to breakfast table to a dinner party spread.",
    signature: {
      letter: "A",
      title: "Silhouette Concept",
      description:
        "The ribbed base silhouette the whole system is built from — from an empty pantry shelf to a full breakfast spread.",
      render: {
        src: "/exhibition/modular-tableware/hero-render.jpg",
        width: 787,
        height: 645,
      },
      lifestyle: {
        src: "/exhibition/modular-tableware/hero-lifestyle.jpg",
        width: 1132,
        height: 928,
      },
    },
    variants: [
      {
        letter: "B",
        title: "Stacking Canister Set",
        description:
          "Nested round canisters with the universal lid, at home on an open shelf as much as in the fridge.",
        materials: "Ceramic · Glass · MS",
        image: {
          src: "/exhibition/modular-tableware/variant-b.jpg",
          width: 1024,
          height: 839,
        },
      },
      {
        letter: "C",
        title: "Tablescape Tiered Set",
        description:
          "Stack it, tier it, or spread it out — one system that resets between a quick snack and a full table setting.",
        materials: "Ceramic · Glass · MS",
        image: {
          src: "/exhibition/modular-tableware/variant-c.jpg",
          width: 1310,
          height: 817,
        },
      },
      {
        letter: "D",
        title: "Everyday Lunch Bowls",
        description: "Sized for a real meal and finished to sit straight on the table, no plate required.",
        materials: "Ceramic · Glass · MS",
        image: {
          src: "/exhibition/modular-tableware/variant-d.jpg",
          width: 1025,
          height: 1372,
        },
      },
      {
        letter: "E",
        title: "Breakfast Stack",
        description: "A striped colourway for the morning routine — stacks small for one, expands for the table.",
        materials: "Ceramic · Glass · MS",
        image: {
          src: "/exhibition/modular-tableware/variant-e.jpg",
          width: 924,
          height: 1238,
        },
      },
      {
        letter: "F",
        title: "Pantry-to-Table Jars",
        description: "Goes from pantry storage straight to the table without a second container.",
        materials: "Ceramic · Glass · MS",
        image: {
          src: "/exhibition/modular-tableware/variant-f.jpg",
          width: 1022,
          height: 1369,
        },
      },
    ],
  },
};
