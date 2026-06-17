import { createFileRoute, useParams } from "@tanstack/react-router";
import { PageShell, FeatureGrid } from "../components/site/PageShell";
import { Sparkles, Shield, Brain } from "lucide-react";

const seo: Record<string, { title: string; subtitle: string; bullets: string[] }> = {
  "hrms-software-india": { title: "Best HRMS Software in India", subtitle: "End-to-end HRMS built for Indian compliance, payroll and statutory requirements.", bullets: ["PF, ESI, PT, TDS", "Form 16 & 24Q", "Indian holiday calendars", "Multi-state compliance"] },
  "payroll-software-india": { title: "Payroll Software India", subtitle: "Automated, compliant payroll for Indian enterprises of any size.", bullets: ["Statutory compliance", "Bank transfer files", "Reimbursements & FBP", "Audit trail"] },
  "attendance-management-software": { title: "Attendance Management Software", subtitle: "Geo, biometric, web and mobile attendance for distributed workforces.", bullets: ["Geo-fencing", "Biometric devices", "Mobile selfie capture", "Shift rosters"] },
  "leave-management-software": { title: "Leave Management Software", subtitle: "Configurable leave policies, balances and approvals — automated.", bullets: ["Any leave policy", "Carry-forward & encashment", "Approval chains", "Holiday calendars"] },
  "employee-self-service-software": { title: "Employee Self Service Software", subtitle: "Modern ESS mobile app for payslips, leave, attendance and helpdesk.", bullets: ["iOS & Android", "Payslip & tax", "Helpdesk", "Announcements"] },
  "applicant-tracking-system": { title: "Applicant Tracking System (ATS)", subtitle: "AI-powered ATS for modern recruitment teams.", bullets: ["30+ job boards", "AI resume parsing", "Interview scheduling", "Offer management"] },
  "recruitment-management-software": { title: "Recruitment Management Software", subtitle: "End-to-end recruitment workflow from requisition to offer.", bullets: ["Requisitions", "Vendor portal", "Candidate pipeline", "Onboarding handoff"] },
  "performance-management-software": { title: "Performance Management Software", subtitle: "OKRs, continuous feedback, 360° reviews and calibration.", bullets: ["OKRs & goals", "Continuous feedback", "360° reviews", "Calibration"] },
  "learning-management-system": { title: "Learning Management System (LMS)", subtitle: "Modern enterprise LMS built into your HRMS.", bullets: ["Course builder", "Learning paths", "Certifications", "Mobile learning"] },
  "workforce-management-software": { title: "Workforce Management Software", subtitle: "Schedule, track and optimize your entire distributed workforce.", bullets: ["Rosters & shifts", "Geo attendance", "Field tracking", "Workforce planning"] },
  "construction-hrms": { title: "HRMS for Construction", subtitle: "Site-based workforce, contractor compliance and daily wage payroll.", bullets: ["Site-wise attendance", "Contractor compliance", "Daily wage payroll", "Safety"] },
  "manufacturing-hrms": { title: "HRMS for Manufacturing", subtitle: "Shift-based plant workforce, contract labour and statutory compliance.", bullets: ["Shift rosters", "Contract labour", "Biometric & RFID", "Statutory"] },
  "healthcare-hrms": { title: "HRMS for Healthcare", subtitle: "Roster nurses, manage credentials and stay HIPAA-ready.", bullets: ["Nurse rostering", "Credential tracking", "HIPAA-ready", "24x7 shifts"] },
  "retail-hrms": { title: "HRMS for Retail", subtitle: "Store associates, incentives and rosters across hundreds of outlets.", bullets: ["Store attendance", "Incentives", "Shift rosters", "Mobile ESS"] },
  "staffing-agency-hrms": { title: "HRMS for Staffing Agencies", subtitle: "High-volume contract workforce with multi-client billing.", bullets: ["Contract workforce", "Multi-client billing", "Compliance", "Bulk onboarding"] },
  "enterprise-hrms-software": { title: "Enterprise HRMS Software", subtitle: "Scale to 100K+ employees across entities and geographies.", bullets: ["Multi-entity", "Global payroll", "Governance", "Dedicated CSM"] },
  "cloud-hrms-software": { title: "Cloud HRMS Software", subtitle: "Modern cloud-native HRMS with 99.9% uptime SLA.", bullets: ["Cloud-native", "99.9% SLA", "Auto-scale", "Zero-touch upgrades"] },
  "ai-powered-hr-software": { title: "AI-Powered HR Software", subtitle: "Predict attrition, screen candidates and surface insights with AI.", bullets: ["Attrition AI", "Resume screening", "Smart insights", "Conversational HR"] },
};

const features = [
  { icon: <Sparkles className="h-5 w-5" />, title: "Enterprise-Grade", desc: "Built for scale, security and reliability." },
  { icon: <Shield className="h-5 w-5" />, title: "Compliance Ready", desc: "ISO 27001, SOC 2, GDPR, DPDPA." },
  { icon: <Brain className="h-5 w-5" />, title: "AI-Powered", desc: "Smart insights across every workflow." },
];

export const Route = createFileRoute("/$seo")({
  head: ({ params }) => {
    const d = seo[params.seo];
    if (!d) return { meta: [{ title: "Radix StratEdge" }] };
    return {
      meta: [
        { title: `${d.title} — Radix StratEdge People Cloud` },
        { name: "description", content: d.subtitle },
        { property: "og:title", content: d.title },
        { property: "og:description", content: d.subtitle },
        { property: "og:url", content: `/${params.seo}` },
      ],
      links: [{ rel: "canonical", href: `/${params.seo}` }],
    };
  },
  component: SeoPage,
  notFoundComponent: () => (
    <div className="flex min-h-[60vh] items-center justify-center text-muted-foreground">Page not found.</div>
  ),
});

function SeoPage() {
  const { seo: slug } = useParams({ from: "/$seo" });
  const d = seo[slug];
  if (!d) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-32 text-center">
        <h1 className="text-3xl font-semibold">Page not found</h1>
        <p className="mt-3 text-muted-foreground">The page <code>/{slug}</code> doesn't exist.</p>
      </main>
    );
  }
  return (
    <PageShell eyebrow="Solution" title={d.title} subtitle={d.subtitle} bullets={d.bullets}>
      <FeatureGrid items={features} />
    </PageShell>
  );
}
