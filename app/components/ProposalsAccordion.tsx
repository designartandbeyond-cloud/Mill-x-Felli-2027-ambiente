import AccordionShowcase from "./AccordionShowcase";
import { proposals } from "../data/proposals";

export default function ProposalsAccordion() {
  return (
    <AccordionShowcase
      items={proposals.map((p) => ({
        key: p.name,
        eyebrow: p.category,
        title: p.name,
        subtitle: p.tagline,
        description: p.description,
        tag: p.materials,
        image: p.image,
      }))}
    />
  );
}
