import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Radix StratEdge People Cloud" },
      { name: "description", content: "Transparent per-employee pricing. Starter ₹100, Professional ₹130, Enterprise ₹160. Annual billing saves up to 20%." },
      { property: "og:title", content: "Pricing — Radix StratEdge" },
      { property: "og:url", content: "/pricing" },
    ],
    links: [{ rel: "canonical", href: "/pricing" }],
  }),
  component: Pricing,
});

const plans = [
  { name: "Starter", price: "₹100", popular: false, features: ["Core HR", "Attendance", "Leave", "ESS Mobile App", "Standard Reports", "Email Support"] },
  { name: "Professional", price: "₹130", popular: true, features: ["Everything in Starter", "Payroll Management", "ATS & Onboarding", "Performance Management", "Custom Workflows", "Priority Support"] },
  { name: "Enterprise", price: "₹160", popular: false, features: ["Everything in Professional", "LMS", "Advanced Analytics & AI", "API & Integrations", "Dedicated CSM", "24/7 Premium Support"] },
];

const matrix = [
  ["Core HR", true, true, true],
  ["Attendance & Leave", true, true, true],
  ["Employee Self Service", true, true, true],
  ["Payroll Management", false, true, true],
  ["ATS & Onboarding", false, true, true],
  ["Performance Management", false, true, true],
  ["Learning Management (LMS)", false, false, true],
  ["Advanced Analytics & AI", false, false, true],
  ["API Platform & Integrations", false, false, true],
  ["Dedicated Customer Success", false, false, true],
] as const;

function Pricing() {
  return (
    <main>
      <section className="relative overflow-hidden bg-hero-glow">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="relative mx-auto max-w-5xl px-4 py-20 text-center sm:px-6 lg:px-8 lg:py-28">
          <div className="text-xs font-semibold uppercase tracking-wider text-accent">Pricing</div>
          <h1 className="mt-3 text-4xl font-semibold md:text-6xl"><span className="text-gradient">Simple, transparent pricing.</span></h1>
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">Per employee, per month. No hidden fees. Annual billing saves up to 20%.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          {plans.map((p) => (
            <div key={p.name} className={`relative rounded-3xl p-8 ${p.popular ? "glass-strong shadow-glow" : "glass"}`}>
              {p.popular && <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-primary px-3 py-1 text-xs font-medium text-white">Most Popular</div>}
              <div className="text-sm font-medium uppercase tracking-wider text-accent">{p.name}</div>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-semibold">{p.price}</span>
                <span className="text-sm text-muted-foreground">/employee/month</span>
              </div>
              <Link to="/demo" className={`mt-6 block rounded-lg px-4 py-3 text-center text-sm font-medium ${p.popular ? "bg-gradient-primary text-white shadow-glow" : "border border-border bg-white/5 hover:bg-white/10"}`}>Book Demo</Link>
              <ul className="mt-6 space-y-3">
                {p.features.map((f) => <li key={f} className="flex items-start gap-2 text-sm"><Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" /> {f}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
        <h2 className="mb-8 text-center text-2xl font-semibold md:text-3xl">Feature comparison</h2>
        <div className="glass overflow-hidden rounded-2xl">
          <table className="w-full text-sm">
            <thead className="bg-white/5 text-left">
              <tr>
                <th className="p-4 font-medium">Feature</th>
                <th className="p-4 text-center font-medium">Starter</th>
                <th className="p-4 text-center font-medium">Professional</th>
                <th className="p-4 text-center font-medium">Enterprise</th>
              </tr>
            </thead>
            <tbody>
              {matrix.map((row) => (
                <tr key={row[0] as string} className="border-t border-border/60">
                  <td className="p-4">{row[0]}</td>
                  {row.slice(1).map((v, i) => (
                    <td key={i} className="p-4 text-center">
                      {v ? <Check className="mx-auto h-4 w-4 text-accent" /> : <span className="text-muted-foreground">—</span>}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-10 text-center">
          <Link to="/demo" className="inline-flex items-center gap-2 rounded-lg bg-gradient-primary px-6 py-3.5 text-sm font-semibold text-white shadow-glow">Book Demo <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </section>
    </main>
  );
}
