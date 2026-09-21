export interface Trend {
  n: string;
  title: string;
  body: string;
  quote: string;
  image: { src: string; width: number; height: number };
}

export const trends: Trend[] = [
  {
    n: "01",
    title: "Healthy Convenience",
    body: "Buyers everywhere want nutritious meals without the friction — portioned, ready-to-go solutions that fit into busier daily life instead of asking people to plan around it.",
    quote: "Nourishing meals, zero friction.",
    image: { src: "/trends/healthy-convenience-full.jpg", width: 1400, height: 781 },
  },
  {
    n: "02",
    title: "Food Life Extension",
    body: "Rising grocery costs and growing food-waste awareness are pushing households across every market toward smarter storage that keeps food fresher for longer.",
    quote: "Smart storage. Zero waste. Fresher for longer.",
    image: { src: "/trends/food-life-extension-full.jpg", width: 1400, height: 781 },
  },
  {
    n: "03",
    title: "Climate-Adaptive Living",
    body: "From humid coastlines to dry mountain air, how people hydrate and store food needs to adapt to local climate — not assume one condition fits all.",
    quote: "Resilient. Adaptable. Self-sufficient.",
    image: { src: "/trends/climate-adaptive-full.jpg", width: 1400, height: 781 },
  },
  {
    n: "04",
    title: "Design That Travels",
    body: "The best daily objects now need to work in a small city apartment and a family kitchen alike — modular, durable design built to adapt, not to assume.",
    quote: "Adaptable. Compact. Premium. Anywhere is home.",
    image: { src: "/trends/design-that-travels-full.jpg", width: 1400, height: 781 },
  },
];
