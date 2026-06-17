import { createFileRoute, Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Radix StratEdge" },
      { name: "description", content: "Get in touch with Radix StratEdge for sales, support or partnerships." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  return (
    <main>
      <section className="relative overflow-hidden bg-hero-glow">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-28">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-accent">Contact</div>
            <h1 className="mt-3 text-4xl font-semibold md:text-6xl"><span className="text-gradient">Let's talk.</span></h1>
            <p className="mt-5 text-muted-foreground">Tell us about your workforce. Our team will get back within one business day.</p>
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3"><Mail className="h-4 w-4 text-accent" /> sales@radixstratedge.com</div>
              <div className="flex items-center gap-3"><Phone className="h-4 w-4 text-accent" /> +91 80 4567 8900</div>
              <div className="flex items-center gap-3"><MapPin className="h-4 w-4 text-accent" /> Bengaluru · Mumbai · Dubai · Singapore</div>
            </div>
          </div>
          <form className="glass-strong space-y-4 rounded-3xl p-8 shadow-elevated" onSubmit={(e) => e.preventDefault()}>
            {[
              { l: "Work Email", t: "email" },
              { l: "Full Name", t: "text" },
              { l: "Company", t: "text" },
              { l: "Employees", t: "text" },
            ].map((f) => (
              <div key={f.l}>
                <label className="text-xs text-muted-foreground">{f.l}</label>
                <input type={f.t} className="mt-1 w-full rounded-lg border border-border bg-background/60 px-3 py-2.5 text-sm outline-none focus:border-primary" />
              </div>
            ))}
            <div>
              <label className="text-xs text-muted-foreground">Message</label>
              <textarea rows={4} className="mt-1 w-full rounded-lg border border-border bg-background/60 px-3 py-2.5 text-sm outline-none focus:border-primary" />
            </div>
            <button className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-primary px-5 py-3 text-sm font-semibold text-white shadow-glow">
              Send Message <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
