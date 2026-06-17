import { Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import type { ReactNode } from "react";

export function PageShell({
  eyebrow,
  title,
  subtitle,
  bullets,
  children,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  bullets?: string[];
  children?: ReactNode;
}) {
  return (
    <main>
      <section className="relative overflow-hidden bg-hero-glow">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          {eyebrow && (
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-white/5 px-3 py-1 text-xs text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" /> {eyebrow}
            </div>
          )}
          <h1 className="max-w-4xl text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
            <span className="text-gradient">{title}</span>
          </h1>
          {subtitle && (
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">{subtitle}</p>
          )}
          {bullets && (
            <ul className="mt-8 grid max-w-2xl gap-3 sm:grid-cols-2">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                  {b}
                </li>
              ))}
            </ul>
          )}
          <div className="mt-10 flex flex-wrap gap-3">
            <Link to="/demo" className="inline-flex items-center gap-2 rounded-lg bg-gradient-primary px-5 py-3 text-sm font-medium text-white shadow-glow">
              Book Free Demo <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/pricing" className="inline-flex items-center gap-2 rounded-lg border border-border bg-white/5 px-5 py-3 text-sm font-medium text-foreground transition hover:bg-white/10">
              View Pricing
            </Link>
          </div>
        </div>
      </section>
      {children}
      <CTASection />
    </main>
  );
}

export function CTASection() {
  return (
    <section className="mx-auto my-20 max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/10 p-10 text-center md:p-16">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="relative">
          <h2 className="text-3xl font-semibold md:text-5xl">
            <span className="text-gradient">Ready to Transform Your Workforce?</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Join 2,500+ organizations that run their entire Hire-to-Retire journey on Radix StratEdge.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/demo" className="inline-flex items-center gap-2 rounded-lg bg-gradient-primary px-6 py-3 text-sm font-medium text-white shadow-glow">
              Schedule Demo <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-lg border border-border bg-white/5 px-6 py-3 text-sm font-medium">
              Talk to Expert
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function FeatureGrid({ items }: { items: { icon: ReactNode; title: string; desc: string }[] }) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {items.map((f) => (
          <div key={f.title} className="glass group rounded-2xl p-6 transition hover:border-primary/50 hover:shadow-glow">
            <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-primary text-white">
              {f.icon}
            </div>
            <h3 className="text-lg font-semibold">{f.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
