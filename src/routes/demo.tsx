import { createFileRoute } from "@tanstack/react-router";
import { Check, ArrowRight, Calendar, Shield, Sparkles } from "lucide-react";

export const Route = createFileRoute("/demo")({
  head: () => ({
    meta: [
      { title: "Book a Demo — Radix StratEdge People Cloud" },
      { name: "description", content: "See Radix StratEdge in action with a personalized demo for your organization." },
      { property: "og:title", content: "Book a Demo — Radix StratEdge" },
      { property: "og:url", content: "/demo" },
    ],
    links: [{ rel: "canonical", href: "/demo" }],
  }),
  component: Demo,
});

const benefits = [
  "Personalized walk-through of every module",
  "Industry-specific use cases for your business",
  "ROI estimate based on your headcount",
  "Implementation timeline & next steps",
];

function Demo() {
  return (
    <main>
      <section className="relative overflow-hidden bg-hero-glow">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-28">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-white/5 px-3 py-1 text-xs">
              <Calendar className="h-3.5 w-3.5 text-accent" /> 30-minute personalized demo
            </div>
            <h1 className="text-4xl font-semibold leading-[1.05] md:text-6xl">
              <span className="text-gradient">See Radix StratEdge in action.</span>
            </h1>
            <p className="mt-6 text-muted-foreground">
              Get a tailored walkthrough of the platform with one of our HR technology experts.
            </p>
            <ul className="mt-8 space-y-3">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-2 text-sm">
                  <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" /> {b}
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-wrap gap-4 text-xs text-muted-foreground">
              <div className="inline-flex items-center gap-1.5"><Shield className="h-3.5 w-3.5 text-accent" /> SOC 2 Type II</div>
              <div className="inline-flex items-center gap-1.5"><Sparkles className="h-3.5 w-3.5 text-accent" /> 2,500+ enterprises</div>
            </div>
          </div>
          <form className="glass-strong space-y-4 rounded-3xl p-8 shadow-elevated" onSubmit={(e) => e.preventDefault()}>
            <h2 className="text-xl font-semibold">Tell us about your team</h2>
            {[
              { l: "Work Email", t: "email" }, { l: "Full Name", t: "text" },
              { l: "Company", t: "text" }, { l: "Phone", t: "tel" },
            ].map((f) => (
              <div key={f.l}>
                <label className="text-xs text-muted-foreground">{f.l}</label>
                <input type={f.t} className="mt-1 w-full rounded-lg border border-border bg-background/60 px-3 py-2.5 text-sm outline-none focus:border-primary" />
              </div>
            ))}
            <div>
              <label className="text-xs text-muted-foreground">Employees</label>
              <select className="mt-1 w-full rounded-lg border border-border bg-background/60 px-3 py-2.5 text-sm outline-none focus:border-primary">
                <option>1–100</option><option>101–500</option><option>501–2,000</option><option>2,001–10,000</option><option>10,000+</option>
              </select>
            </div>
            <button className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-primary px-5 py-3 text-sm font-semibold text-white shadow-glow">
              Book Free Demo <ArrowRight className="h-4 w-4" />
            </button>
            <p className="text-center text-[11px] text-muted-foreground">By submitting, you agree to our privacy policy.</p>
          </form>
        </div>
      </section>
    </main>
  );
}
