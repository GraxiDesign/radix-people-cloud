import { createFileRoute, useParams } from "@tanstack/react-router";
import { PageShell, FeatureGrid } from "../components/site/PageShell";
import { Sparkles, Shield, Brain, Cloud, Users, Briefcase, Cpu } from "lucide-react";

const data: Record<string, { title: string; subtitle: string; bullets: string[] }> = {
  "enterprise-hrms": { title: "Enterprise HRMS Software", subtitle: "Scale to 100K+ employees with multi-entity, multi-country support.", bullets: ["Multi-entity org", "Global payroll", "Advanced governance", "Dedicated success team"] },
  "cloud-hrms": { title: "Cloud HRMS Software", subtitle: "Modern cloud-native architecture with 99.9% uptime SLA.", bullets: ["Cloud-native", "99.9% uptime SLA", "Auto-scaling", "Zero-touch upgrades"] },
  "ai-powered-hr": { title: "AI-Powered HR Software", subtitle: "Predict attrition, screen candidates and surface insights with AI.", bullets: ["Attrition prediction", "AI resume screening", "Smart insights", "Conversational HR"] },
  chro: { title: "Radix for the CHRO", subtitle: "Strategic workforce intelligence and a unified people platform.", bullets: ["Executive dashboards", "Talent strategy", "Engagement insights", "Succession planning"] },
  cfo: { title: "Radix for the CFO", subtitle: "Real-time workforce cost, accuracy and audit-readiness.", bullets: ["Workforce cost", "Payroll accuracy", "Budget vs actuals", "Audit trail"] },
  it: { title: "Radix for IT Leaders", subtitle: "Enterprise security, SSO, APIs and integrations IT teams trust.", bullets: ["SSO & SAML", "Open APIs", "Enterprise security", "On-prem connectors"] },
};

const features = [
  { icon: <Sparkles className="h-5 w-5" />, title: "Built for Scale", desc: "Designed for the world's largest workforces." },
  { icon: <Shield className="h-5 w-5" />, title: "Enterprise Security", desc: "ISO 27001, SOC 2, GDPR, DPDPA." },
  { icon: <Brain className="h-5 w-5" />, title: "AI Everywhere", desc: "Insights embedded across every module." },
];

export const Route = createFileRoute("/solutions/$slug")({
  head: ({ params }) => {
    const d = data[params.slug] ?? { title: params.slug, subtitle: "Solution by Radix StratEdge.", bullets: [] };
    return {
      meta: [
        { title: `${d.title} — Radix StratEdge` },
        { name: "description", content: d.subtitle },
        { property: "og:url", content: `/solutions/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/solutions/${params.slug}` }],
    };
  },
  component: SolPage,
});

function SolPage() {
  const { slug } = useParams({ from: "/solutions/$slug" });
  const d = data[slug] ?? { title: slug, subtitle: "Solution by Radix StratEdge.", bullets: [] };
  return (
    <PageShell eyebrow="Solution" title={d.title} subtitle={d.subtitle} bullets={d.bullets}>
      <FeatureGrid items={features} />
    </PageShell>
  );
}
