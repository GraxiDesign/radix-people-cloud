import { createFileRoute, useParams, notFound } from "@tanstack/react-router";
import { productMap } from "../content/products";
import {
  Breadcrumbs, RichHero, Prose, GridCards, Workflow, DashboardMock,
  IntegrationsRow, FAQSection, RelatedLinks, CTABand, faqJsonLd, breadcrumbJsonLd,
} from "../components/site/RichPage";
import { illustrations, slugIllustration } from "../lib/illustrations";

const BASE = "https://radix-people-cloud-suite.lovable.app";

export const Route = createFileRoute("/platform/$slug")({
  head: ({ params }) => {
    const p = productMap[params.slug];
    if (!p) return { meta: [{ title: "Radix StratEdge" }] };
    const url = `${BASE}/platform/${p.slug}`;
    return {
      meta: [
        { title: p.metaTitle },
        { name: "description", content: p.metaDescription },
        { property: "og:title", content: p.metaTitle },
        { property: "og:description", content: p.metaDescription },
        { property: "og:url", content: url },
        { property: "og:type", content: "product" },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        { type: "application/ld+json", children: JSON.stringify(faqJsonLd(p.faqs)) },
        { type: "application/ld+json", children: JSON.stringify(breadcrumbJsonLd([
          { label: "Home", url: BASE + "/" },
          { label: "Platform", url: BASE + "/" },
          { label: p.name, url },
        ])) },
      ],
    };
  },
  component: ProductPage,
  notFoundComponent: () => (
    <main className="mx-auto max-w-3xl px-4 py-32 text-center">
      <h1 className="text-3xl font-semibold">Product not found</h1>
    </main>
  ),
});

function ProductPage() {
  const { slug } = useParams({ from: "/platform/$slug" });
  const p = productMap[slug];
  if (!p) throw notFound();

  const related = p.related
    .map((s) => productMap[s])
    .filter(Boolean)
    .map((r) => ({ label: r!.name, to: `/platform/${r!.slug}` }));

  return (
    <main>
      <div className="mx-auto max-w-7xl px-4 pt-6 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Platform" }, { label: p.name }]} />
      </div>
      <RichHero
        eyebrow={p.category}
        title={p.hero.title}
        subtitle={p.hero.subtitle}
        bullets={p.benefits}
        illustration={illustrations[slugIllustration[p.slug] ?? "hr"]}
      />
      <Prose paragraphs={[p.intro, p.body]} />
      <GridCards title="Capabilities" items={p.features} />
      <DashboardMock title={p.dashboard.title} metrics={p.dashboard.metrics} />
      <Workflow steps={p.workflow} />
      <GridCards title="Use cases" items={p.useCases} />
      <IntegrationsRow items={p.integrations} />
      <FAQSection faqs={p.faqs} />
      <RelatedLinks items={related} />
      <CTABand />
    </main>
  );
}
