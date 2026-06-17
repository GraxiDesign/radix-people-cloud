import { createFileRoute, useParams } from "@tanstack/react-router";
import { PageShell, FeatureGrid } from "../components/site/PageShell";
import { HardHat, Building2, Stethoscope, ShoppingBag, Cpu, Users, Truck, GraduationCap, Sparkles, Shield, PlugZap } from "lucide-react";

const data: Record<string, { title: string; subtitle: string; bullets: string[]; icon: any }> = {
  manufacturing: { title: "HRMS for Manufacturing", subtitle: "Shift-based workforce, contract labour, plant attendance and statutory compliance — built for the factory floor.", bullets: ["Shift rosters & overtime", "Contract labour management", "Biometric & RFID attendance", "Statutory compliance"], icon: HardHat },
  construction: { title: "Workforce Management for Construction", subtitle: "Track project-site workforce, geo-attendance and contractor compliance across multiple sites.", bullets: ["Site-wise geo attendance", "Contractor management", "Daily wage payroll", "Safety compliance"], icon: Building2 },
  healthcare: { title: "HRMS for Healthcare", subtitle: "Roster nurses and doctors, manage credentials and stay HIPAA-ready.", bullets: ["Nurse & doctor rostering", "Credential tracking", "HIPAA-ready", "24x7 shift management"], icon: Stethoscope },
  retail: { title: "Workforce Management for Retail", subtitle: "Manage store associates, shifts and incentives across hundreds of outlets.", bullets: ["Store-level attendance", "Sales incentives", "Shift rosters", "Mobile-first ESS"], icon: ShoppingBag },
  "it-services": { title: "HRMS for IT Companies", subtitle: "Project timesheets, billable utilization, ESOPs and remote/hybrid policies.", bullets: ["Project timesheets", "Billable utilization", "Hybrid work policies", "ESOP & vesting"], icon: Cpu },
  staffing: { title: "HRMS for Staffing Agencies", subtitle: "High-volume contract workforce, multi-client billing and statutory compliance.", bullets: ["Contract workforce", "Multi-client billing", "Compliance automation", "Bulk onboarding"], icon: Users },
  logistics: { title: "Workforce Management for Logistics", subtitle: "Track drivers, field staff and warehouse teams in real time.", bullets: ["Live driver tracking", "Warehouse rosters", "Geo attendance", "Beat & route plans"], icon: Truck },
  education: { title: "Workforce Management for Education", subtitle: "Faculty timetables, leave, payroll and academic compliance.", bullets: ["Timetable integration", "Faculty payroll", "Academic compliance", "Parent communication"], icon: GraduationCap },
};

const features = [
  { icon: <Sparkles className="h-5 w-5" />, title: "Industry-Configured", desc: "Pre-built policies, workflows and reports for your industry." },
  { icon: <Shield className="h-5 w-5" />, title: "Compliance First", desc: "Stay ahead of every statutory and regulatory requirement." },
  { icon: <PlugZap className="h-5 w-5" />, title: "Ecosystem Integrations", desc: "Connect ERP, biometric devices and operational systems." },
];

export const Route = createFileRoute("/industries/$slug")({
  head: ({ params }) => {
    const d = data[params.slug] ?? { title: params.slug, subtitle: "Industry solution by Radix StratEdge.", bullets: [], icon: Sparkles };
    return {
      meta: [
        { title: `${d.title} — Radix StratEdge People Cloud` },
        { name: "description", content: d.subtitle },
        { property: "og:title", content: d.title },
        { property: "og:description", content: d.subtitle },
        { property: "og:url", content: `/industries/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/industries/${params.slug}` }],
    };
  },
  component: IndustryPage,
});

function IndustryPage() {
  const { slug } = useParams({ from: "/industries/$slug" });
  const d = data[slug] ?? { title: slug, subtitle: "Industry solution by Radix StratEdge.", bullets: [], icon: Sparkles };
  return (
    <PageShell eyebrow="Industry Solution" title={d.title} subtitle={d.subtitle} bullets={d.bullets}>
      <FeatureGrid items={features} />
    </PageShell>
  );
}
