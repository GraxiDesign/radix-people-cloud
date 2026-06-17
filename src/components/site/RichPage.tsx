import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, Sparkles, ChevronRight } from "lucide-react";
import type { ReactNode } from "react";

export function Breadcrumbs({ items }: { items: { label: string; to?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-1 text-xs text-muted-foreground">
      {items.map((it, i) => (
        <span key={i} className="inline-flex items-center gap-1">
          {it.to ? (
            <Link to={it.to} className="hover:text-foreground">{it.label}</Link>
          ) : (
            <span className="text-foreground">{it.label}</span>
          )}
          {i < items.length - 1 && <ChevronRight className="h-3 w-3 opacity-60" />}
        </span>
      ))}
    </nav>
  );
}

export function RichHero({
  eyebrow, title, subtitle, bullets, illustration,
}: { eyebrow?: string; title: string; subtitle?: string; bullets?: string[]; illustration?: string }) {
  return (
    <section className="relative overflow-hidden bg-hero-glow">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className={illustration ? "grid items-center gap-10 lg:grid-cols-[1.2fr_1fr]" : ""}>
          <div>
            {eyebrow && (
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-3 py-1 text-xs">
                <Sparkles className="h-3 w-3 text-accent" /> {eyebrow}
              </div>
            )}
            <h1 className="max-w-4xl text-4xl font-semibold leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
              <span className="text-gradient">{title}</span>
            </h1>
            {subtitle && <p className="mt-6 max-w-3xl text-lg text-muted-foreground">{subtitle}</p>}
            {bullets && (
              <ul className="mt-8 grid max-w-3xl gap-3 sm:grid-cols-2">
                {bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />{b}
                  </li>
                ))}
              </ul>
            )}
            <div className="mt-10 flex flex-wrap gap-3">
              <Link to="/demo" className="inline-flex items-center gap-2 rounded-lg bg-gradient-primary px-5 py-3 text-sm font-semibold text-white shadow-glow">
                Book Free Demo <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/pricing" className="inline-flex items-center gap-2 rounded-lg border border-border bg-card/30 px-5 py-3 text-sm font-medium hover:bg-card/60">
                View Pricing
              </Link>
            </div>
          </div>
          {illustration && (
            <div className="group relative hidden lg:block">
              <div className="absolute -inset-8 -z-10 rounded-[2.5rem] bg-gradient-primary opacity-20 blur-3xl animate-illus-glow" />
              <div className="animate-illus-in illus-interactive">
                <img
                  src={illustration}
                  alt=""
                  width={1024}
                  height={768}
                  className="w-full animate-float-soft drop-shadow-[0_30px_60px_rgba(79,70,229,0.25)]"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export function Prose({ paragraphs }: { paragraphs: string[] }) {
  return (
    <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="space-y-5 text-[15px] leading-relaxed text-muted-foreground">
        {paragraphs.map((p, i) => <p key={i}>{p}</p>)}
      </div>
    </section>
  );
}

export function GridCards({ title, items }: { title?: string; items: { title: string; desc: string }[] }) {
  if (!items.length) return null;
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      {title && <h2 className="mb-8 text-2xl font-semibold md:text-3xl">{title}</h2>}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {items.map((f) => (
          <div key={f.title} className="rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-soft">
            <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-pastel-purple to-pastel-blue text-indigo">
              <Sparkles className="h-4 w-4" />
            </div>
            <h3 className="text-base font-semibold">{f.title}</h3>
            <p className="mt-1.5 text-sm text-muted-foreground">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Workflow({ steps }: { steps: { title: string; desc: string }[] }) {
  if (!steps?.length) return null;
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <h2 className="mb-8 text-2xl font-semibold md:text-3xl">How it works</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => (
          <div key={s.title} className="relative rounded-2xl border border-border bg-card p-6">
            <div className="mb-3 inline-flex h-7 min-w-7 items-center justify-center rounded-full bg-gradient-primary px-2 text-xs font-bold text-white">{i + 1}</div>
            <div className="text-base font-semibold">{s.title}</div>
            <div className="mt-1.5 text-sm text-muted-foreground">{s.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function DashboardMock({ title, metrics }: { title: string; metrics: { label: string; value: string; delta?: string }[] }) {
  if (!metrics.length) return null;
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-indigo/10 via-purple/5 to-sky/10 p-6 md:p-10">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <div className="text-xs uppercase tracking-wider text-muted-foreground">Live Dashboard</div>
            <h3 className="mt-1 text-xl font-semibold md:text-2xl">{title}</h3>
          </div>
          <div className="hidden gap-1 sm:flex">
            <span className="h-2 w-2 rounded-full bg-destructive/70" />
            <span className="h-2 w-2 rounded-full bg-warning/70" />
            <span className="h-2 w-2 rounded-full bg-success/70" />
          </div>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((m) => (
            <div key={m.label} className="rounded-2xl border border-border bg-background/70 p-4 backdrop-blur">
              <div className="text-xs text-muted-foreground">{m.label}</div>
              <div className="mt-1.5 text-2xl font-bold tracking-tight">{m.value}</div>
              {m.delta && <div className="mt-1 text-xs font-medium text-success">{m.delta}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function IntegrationsRow({ items }: { items: string[] }) {
  if (!items?.length) return null;
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <h2 className="mb-6 text-2xl font-semibold md:text-3xl">Integrations</h2>
      <div className="flex flex-wrap gap-2">
        {items.map((i) => (
          <span key={i} className="rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium">{i}</span>
        ))}
      </div>
    </section>
  );
}

export function FAQSection({ faqs }: { faqs: { q: string; a: string }[] }) {
  if (!faqs?.length) return null;
  return (
    <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
      <h2 className="mb-8 text-2xl font-semibold md:text-3xl">Frequently asked questions</h2>
      <div className="space-y-3">
        {faqs.map((f) => (
          <details key={f.q} className="group rounded-2xl border border-border bg-card p-5 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold">
              {f.q}
              <ChevronRight className="h-4 w-4 transition group-open:rotate-90" />
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export function RelatedLinks({ items }: { items: { label: string; to: string }[] }) {
  if (!items?.length) return null;
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <h2 className="mb-6 text-2xl font-semibold md:text-3xl">Related</h2>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((r) => (
          <Link key={r.to} to={r.to as any} className="group rounded-2xl border border-border bg-card p-5 transition hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-soft">
            <div className="flex items-center justify-between text-sm font-semibold">
              {r.label}
              <ArrowRight className="h-4 w-4 -translate-x-1 opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export function CTABand({ children }: { children?: ReactNode }) {
  return (
    <section className="mx-auto my-16 max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/15 p-10 text-center md:p-14">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="relative">
          <h2 className="text-2xl font-semibold md:text-4xl">
            <span className="text-gradient">{children ?? "Ready to transform your workforce?"}</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground md:text-base">
            Join 2,500+ organisations running their entire Hire-to-Retire journey on Radix StratEdge.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link to="/demo" className="inline-flex items-center gap-2 rounded-lg bg-gradient-primary px-6 py-3 text-sm font-semibold text-white shadow-glow">
              Book Demo <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-lg border border-border bg-card/40 px-6 py-3 text-sm font-medium">
              Talk to Expert
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function faqJsonLd(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question", name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumbJsonLd(items: { label: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem", position: i + 1, name: it.label, item: it.url,
    })),
  };
}
