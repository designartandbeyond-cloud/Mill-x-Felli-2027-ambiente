import AccordionShowcase from "./AccordionShowcase";
import { trends } from "../data/trends";

export default function TrendsAccordion() {
  return (
    <AccordionShowcase
      items={trends.map((t) => ({
        key: t.n,
        eyebrow: t.n,
        title: t.title,
        subtitle: `“${t.quote}”`,
        description: t.body,
        image: t.image,
      }))}
    />
  );
}
