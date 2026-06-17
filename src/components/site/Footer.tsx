import { Link } from "@tanstack/react-router";
import { Sparkles, Linkedin, Twitter, Youtube, Facebook } from "lucide-react";

const cols = [
  {
    title: "Platform",
    links: [
      { l: "Core HR", to: "/platform/core-hr" },
      { l: "Payroll", to: "/platform/payroll-management" },
      { l: "Attendance", to: "/platform/attendance-management" },
      { l: "Leave", to: "/platform/leave-management" },
      { l: "ATS", to: "/platform/applicant-tracking-system" },
      { l: "Performance", to: "/platform/performance-management" },
      { l: "LMS", to: "/lms" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { l: "Enterprise HRMS", to: "/solutions/enterprise-hrms" },
      { l: "Cloud HRMS", to: "/solutions/cloud-hrms" },
      { l: "AI Powered HR", to: "/solutions/ai-powered-hr" },
      { l: "For CHROs", to: "/solutions/chro" },
      { l: "For CFOs", to: "/solutions/cfo" },
    ],
  },
  {
    title: "Industries",
    links: [
      { l: "Manufacturing", to: "/industries/manufacturing" },
      { l: "Construction", to: "/industries/construction" },
      { l: "Healthcare", to: "/industries/healthcare" },
      { l: "Retail", to: "/industries/retail" },
      { l: "IT Services", to: "/industries/it-services" },
      { l: "Staffing", to: "/industries/staffing" },
    ],
  },
  {
    title: "Resources",
    links: [
      { l: "Blog", to: "/resources/blog" },
      { l: "Case Studies", to: "/resources/case-studies" },
      { l: "Guides", to: "/resources/guides" },
      { l: "Help Center", to: "/resources/help" },
      { l: "Webinars", to: "/resources/webinars" },
    ],
  },
  {
    title: "Company",
    links: [
      { l: "About Us", to: "/about" },
      { l: "Contact", to: "/contact" },
      { l: "Pricing", to: "/pricing" },
      { l: "Book Demo", to: "/demo" },
      { l: "Login", to: "/login" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative mt-20 border-t border-border/60 bg-surface/40">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-6">
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2">
              <div className="relative h-8 w-8 overflow-hidden rounded-lg bg-gradient-primary">
                <Sparkles className="absolute inset-0 m-auto h-4 w-4 text-white" />
              </div>
              <div className="leading-tight">
                <div className="text-sm font-semibold">Radix StratEdge</div>
                <div className="-mt-0.5 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">People Cloud</div>
              </div>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Empowering Workforce Transformation through one unified AI-powered Hire-to-Retire platform.
            </p>
            <div className="mt-5 flex gap-3">
              {[Linkedin, Twitter, Youtube, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="rounded-lg border border-border p-2 text-muted-foreground transition hover:border-primary hover:text-foreground">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <div className="mb-4 text-xs font-semibold uppercase tracking-wider text-accent">{c.title}</div>
              <ul className="space-y-2.5">
                {c.links.map((l) => (
                  <li key={l.to}>
                    <Link to={l.to} className="text-sm text-muted-foreground transition hover:text-foreground">
                      {l.l}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-border/60 pt-8 text-sm text-muted-foreground sm:flex-row sm:items-center">
          <div>© {new Date().getFullYear()} Radix StratEdge People Cloud. All rights reserved.</div>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <span className="rounded-md border border-border px-2 py-0.5 text-xs">ISO 27001</span>
            <span className="rounded-md border border-border px-2 py-0.5 text-xs">SOC 2</span>
            <span className="rounded-md border border-border px-2 py-0.5 text-xs">GDPR</span>
            <span className="rounded-md border border-border px-2 py-0.5 text-xs">DPDPA</span>
            <span className="rounded-md border border-border px-2 py-0.5 text-xs">HIPAA Ready</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
