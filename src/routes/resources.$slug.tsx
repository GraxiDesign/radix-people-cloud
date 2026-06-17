import { createFileRoute, useParams } from "@tanstack/react-router";
import { PageShell } from "../components/site/PageShell";

const labels: Record<string, { title: string; subtitle: string }> = {
  blog: { title: "Insights & Blog", subtitle: "Ideas, research and stories for modern HR leaders." },
  "case-studies": { title: "Customer Case Studies", subtitle: "How leading enterprises transform their workforce with Radix." },
  guides: { title: "Guides & Ebooks", subtitle: "Practical playbooks for HR, payroll, compliance and learning." },
  help: { title: "Help Center", subtitle: "Documentation, tutorials and product help." },
  webinars: { title: "Webinars", subtitle: "Live and on-demand sessions with HR experts." },
};

export const Route = createFileRoute("/resources/$slug")({
  head: ({ params }) => {
    const d = labels[params.slug] ?? { title: params.slug, subtitle: "Radix Resources" };
    return {
      meta: [
        { title: `${d.title} — Radix StratEdge` },
        { name: "description", content: d.subtitle },
        { property: "og:url", content: `/resources/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/resources/${params.slug}` }],
    };
  },
  component: ResPage,
});

function ResPage() {
  const { slug } = useParams({ from: "/resources/$slug" });
  const d = labels[slug] ?? { title: slug, subtitle: "Radix Resources" };
  return <PageShell eyebrow="Resources" title={d.title} subtitle={d.subtitle} />;
}
