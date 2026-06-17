import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "../components/site/PageShell";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Radix StratEdge People Cloud" },
      { name: "description", content: "Radix StratEdge is on a mission to empower workforce transformation through one unified Hire-to-Retire platform." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: () => (
    <PageShell
      eyebrow="About Us"
      title="Empowering workforce transformation."
      subtitle="Radix StratEdge People Cloud is built by HR and engineering veterans for the world's most ambitious enterprises. Our mission is to unify the entire Hire-to-Retire journey on one intelligent platform."
      bullets={["Founded by HR & technology veterans", "2,500+ enterprise customers", "500K+ employees managed daily", "Global support across 12 countries"]}
    />
  ),
});
