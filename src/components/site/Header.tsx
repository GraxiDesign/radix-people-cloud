import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Menu, X, ChevronDown, Sparkles, ArrowRight, Play,
  Users, Wallet, Clock, CalendarDays, UserCircle2,
  Briefcase, Rocket, Target, GraduationCap, TrendingUp,
  Timer, CalendarClock, Map, MapPin, Compass,
  BarChart3, Brain, ShieldCheck, PlugZap, Code2,
  Factory, HardHat, Stethoscope, ShoppingBag, Truck, Users2, Cpu, BookOpen,
  FileText, Newspaper, Calculator, Wrench, LifeBuoy, Video, Award, Download,
} from "lucide-react";
import { ThemeToggle } from "../../lib/theme";

type Item = { icon: any; label: string; to: string; desc: string; tint?: string };

const platformColumns: { title: string; items: Item[] }[] = [
  {
    title: "Core HR",
    items: [
      { icon: Users, label: "Core HR", to: "/platform/core-hr", desc: "Single source of truth for every employee" },
      { icon: Wallet, label: "Payroll", to: "/platform/payroll-management", desc: "Multi-country payroll & compliance" },
      { icon: Clock, label: "Attendance", to: "/platform/attendance-management", desc: "Shift, biometric & geo capture" },
      { icon: CalendarDays, label: "Leave", to: "/platform/leave-management", desc: "Configurable workflows & balances" },
      { icon: UserCircle2, label: "Employee Self Service", to: "/platform/employee-self-service", desc: "Mobile-first self service" },
    ],
  },
  {
    title: "Talent",
    items: [
      { icon: Briefcase, label: "ATS", to: "/platform/applicant-tracking-system", desc: "AI-powered recruitment pipeline" },
      { icon: Rocket, label: "Onboarding", to: "/platform/employee-onboarding", desc: "Pre-boarding to day-90 journeys" },
      { icon: Target, label: "Performance", to: "/platform/performance-management", desc: "OKRs, feedback & 360° reviews" },
      { icon: GraduationCap, label: "Learning (LMS)", to: "/lms", desc: "Courses, paths & certifications" },
      { icon: TrendingUp, label: "Career Development", to: "/platform/career-development", desc: "Succession & growth plans" },
    ],
  },
  {
    title: "Workforce",
    items: [
      { icon: Timer, label: "Timesheets", to: "/platform/timesheet-management", desc: "Project, client & billable hours" },
      { icon: CalendarClock, label: "Shift Management", to: "/platform/shift-management", desc: "Rosters & auto-scheduling" },
      { icon: Compass, label: "Workforce Planning", to: "/platform/workforce-planning", desc: "Headcount & scenario modeling" },
      { icon: Map, label: "Geo-Fencing", to: "/platform/geo-fencing", desc: "Location-based attendance" },
      { icon: MapPin, label: "Field Workforce", to: "/platform/field-workforce", desc: "On-the-move tracking" },
    ],
  },
  {
    title: "Analytics & Enterprise",
    items: [
      { icon: BarChart3, label: "Workforce Analytics", to: "/platform/workforce-analytics", desc: "Real-time dashboards" },
      { icon: Brain, label: "People Analytics", to: "/platform/people-analytics", desc: "Predictive AI insights" },
      { icon: ShieldCheck, label: "Security & Compliance", to: "/platform/security-compliance", desc: "ISO 27001, SOC 2, GDPR" },
      { icon: PlugZap, label: "Integrations", to: "/platform/integrations", desc: "300+ apps & ecosystems" },
      { icon: Code2, label: "API Platform", to: "/platform/api-platform", desc: "REST APIs & webhooks" },
    ],
  },
];

const solutionsItems: Item[] = [
  { icon: Factory, label: "Manufacturing", to: "/industries/manufacturing", desc: "Shop-floor workforce & compliance", tint: "from-orange/20 to-purple/10" },
  { icon: HardHat, label: "Construction", to: "/industries/construction", desc: "Project-based crews & sites", tint: "from-orange/20 to-emerald/10" },
  { icon: Stethoscope, label: "Healthcare", to: "/industries/healthcare", desc: "Shifts, credentials & HIPAA", tint: "from-sky/20 to-emerald/10" },
  { icon: ShoppingBag, label: "Retail", to: "/industries/retail", desc: "Stores, shifts & seasonal hiring", tint: "from-purple/20 to-sky/10" },
  { icon: Truck, label: "Logistics", to: "/industries/logistics", desc: "Hub-and-spoke workforce", tint: "from-emerald/20 to-sky/10" },
  { icon: Users2, label: "Staffing", to: "/industries/staffing", desc: "Contractors & deployment", tint: "from-purple/20 to-orange/10" },
  { icon: Cpu, label: "IT Services", to: "/industries/it-services", desc: "Projects, timesheets & billing", tint: "from-sky/20 to-purple/10" },
  { icon: BookOpen, label: "Education", to: "/industries/education", desc: "Faculty, attendance & payroll", tint: "from-emerald/20 to-purple/10" },
];

const industriesItems = solutionsItems;

const resourcesItems: Item[] = [
  { icon: Newspaper, label: "Blog", to: "/resources/blog", desc: "Insights from HR leaders" },
  { icon: FileText, label: "Case Studies", to: "/resources/case-studies", desc: "Customer success stories" },
  { icon: Download, label: "Product Brochure", to: "/resources/guides", desc: "Download the full product deck" },
  { icon: Calculator, label: "ROI Calculator", to: "/resources/roi-calculator", desc: "Estimate your savings" },
  { icon: Wrench, label: "Implementation Guide", to: "/resources/implementation", desc: "Go-live in 4-8 weeks" },
  { icon: LifeBuoy, label: "Knowledge Base", to: "/resources/help", desc: "Help articles & docs" },
  { icon: Video, label: "Webinars", to: "/resources/webinars", desc: "Live & on-demand sessions" },
  { icon: Award, label: "Customer Stories", to: "/resources/case-studies", desc: "Real outcomes, real teams" },
];

function FeaturedPanel() {
  return (
    <div className="relative overflow-hidden rounded-2xl p-6 text-white"
         style={{ background: "linear-gradient(135deg, #4F46E5 0%, #9333EA 50%, #0EA5E9 100%)" }}>
      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
      <div className="relative">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider backdrop-blur">
          <Sparkles className="h-3 w-3" /> Live Product Tour
        </div>
        <h4 className="mt-3 text-lg font-semibold leading-tight">Ready to See Radix in Action?</h4>
        <p className="mt-1.5 text-xs text-white/85">
          See how Radix simplifies HR, Payroll, Recruitment, Learning and Workforce Management.
        </p>
        <div className="mt-4 flex flex-col gap-2">
          <Link to="/demo" className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-white px-3 py-2 text-xs font-semibold text-indigo hover:bg-white/90">
            Book Demo <ArrowRight className="h-3.5 w-3.5" />
          </Link>
          <button className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-white/30 bg-white/10 px-3 py-2 text-xs font-semibold backdrop-blur hover:bg-white/20">
            <Play className="h-3.5 w-3.5" /> Watch Tour
          </button>
        </div>
        <div className="mt-5 grid grid-cols-2 gap-2 border-t border-white/20 pt-4 text-[11px]">
          <div><div className="text-sm font-bold">2,500+</div><div className="text-white/75">Organizations</div></div>
          <div><div className="text-sm font-bold">500K+</div><div className="text-white/75">Employees</div></div>
          <div><div className="text-sm font-bold">99.9%</div><div className="text-white/75">Uptime</div></div>
          <div><div className="text-sm font-bold">94%</div><div className="text-white/75">Satisfaction</div></div>
        </div>
      </div>
    </div>
  );
}

function MenuItemCard({ item }: { item: Item }) {
  return (
    <Link
      to={item.to}
      className="group/item flex items-start gap-3 rounded-xl p-2.5 transition-all hover:bg-muted"
    >
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-pastel-purple to-pastel-blue text-indigo transition-transform group-hover/item:scale-105">
        <item.icon className="h-4.5 w-4.5" />
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-1 text-sm font-semibold text-foreground">
          {item.label}
          <ArrowRight className="h-3 w-3 -translate-x-1 opacity-0 transition-all group-hover/item:translate-x-0 group-hover/item:opacity-100" />
        </div>
        <div className="mt-0.5 line-clamp-2 text-xs text-muted-foreground">{item.desc}</div>
      </div>
    </Link>
  );
}

type MenuKey = "platform" | "solutions" | "industries" | "resources";

function MegaMenu({ open, type, onClose }: { open: boolean; type: MenuKey | null; onClose: () => void }) {
  if (!open || !type) return null;

  let content: React.ReactNode = null;
  if (type === "platform") {
    content = (
      <div className="grid grid-cols-[1fr_280px] gap-6">
        <div className="grid grid-cols-4 gap-5">
          {platformColumns.map((col) => (
            <div key={col.title}>
              <div className="mb-2 px-2.5 text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
                {col.title}
              </div>
              <div className="space-y-0.5">
                {col.items.map((it) => <MenuItemCard key={it.to} item={it} />)}
              </div>
            </div>
          ))}
        </div>
        <FeaturedPanel />
      </div>
    );
  } else if (type === "solutions" || type === "industries") {
    const items = type === "solutions" ? solutionsItems : industriesItems;
    content = (
      <div className="grid grid-cols-[1fr_280px] gap-6">
        <div>
          <div className="mb-3 flex items-baseline justify-between">
            <div>
              <h3 className="text-base font-semibold">By Industry</h3>
              <p className="text-xs text-muted-foreground">Purpose-built workflows for every vertical.</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 lg:grid-cols-4">
            {items.map((it) => (
              <Link key={it.to} to={it.to}
                className="group/card relative overflow-hidden rounded-xl border border-border bg-card p-3 transition-all hover:-translate-y-0.5 hover:shadow-soft">
                <div className={`absolute inset-0 bg-gradient-to-br ${it.tint ?? "from-pastel-purple to-pastel-blue"} opacity-50`} />
                <div className="relative">
                  <div className="mb-2 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-card text-indigo shadow-soft">
                    <it.icon className="h-4 w-4" />
                  </div>
                  <div className="text-sm font-semibold">{it.label}</div>
                  <div className="mt-0.5 line-clamp-2 text-[11px] text-muted-foreground">{it.desc}</div>
                  <div className="mt-2 inline-flex items-center gap-1 text-[11px] font-medium text-indigo opacity-0 transition-opacity group-hover/card:opacity-100">
                    Learn more <ArrowRight className="h-3 w-3" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <FeaturedPanel />
      </div>
    );
  } else if (type === "resources") {
    content = (
      <div className="grid grid-cols-[1fr_280px] gap-6">
        <div className="grid grid-cols-2 gap-2 lg:grid-cols-4">
          {resourcesItems.map((it) => <MenuItemCard key={it.to + it.label} item={it} />)}
        </div>
        <FeaturedPanel />
      </div>
    );
  }

  return (
    <div className="absolute left-1/2 top-full z-50 w-screen max-w-[1280px] -translate-x-1/2 px-4 pt-3 sm:px-6 lg:px-8">
      <div className="animate-menu-in rounded-3xl border border-border bg-popover p-6 shadow-menu">
        {content}
      </div>
    </div>
  );
}

const navTriggers: { key: MenuKey; label: string }[] = [
  { key: "platform", label: "Platform" },
  { key: "solutions", label: "Solutions" },
  { key: "industries", label: "Industries" },
  { key: "resources", label: "Resources" },
];

export function Header() {
  const [openMenu, setOpenMenu] = useState<MenuKey | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const cancelClose = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };
  const scheduleClose = () => {
    cancelClose();
    closeTimer.current = setTimeout(() => setOpenMenu(null), 180);
  };
  const openNow = (key: MenuKey) => {
    cancelClose();
    setOpenMenu(key);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpenMenu(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/75 backdrop-blur-xl">
      <div className="relative mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2.5" onClick={() => setOpenMenu(null)}>
          <div className="relative h-9 w-9 overflow-hidden rounded-xl bg-gradient-primary shadow-soft">
            <Sparkles className="absolute inset-0 m-auto h-4.5 w-4.5 text-white" />
          </div>
          <div className="leading-tight">
            <div className="text-sm font-bold tracking-tight">Radix StratEdge</div>
            <div className="-mt-0.5 text-[9px] font-medium uppercase tracking-[0.2em] text-muted-foreground">People Cloud</div>
          </div>
        </Link>

        <nav
          className="hidden items-center gap-0.5 lg:flex"
          onMouseEnter={cancelClose}
          onMouseLeave={scheduleClose}
        >
          {navTriggers.map((t) => (
            <button
              key={t.key}
              onMouseEnter={() => openNow(t.key)}
              onFocus={() => openNow(t.key)}
              onClick={() => setOpenMenu(openMenu === t.key ? null : t.key)}
              className={`flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                openMenu === t.key ? "bg-muted text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {t.label}
              <ChevronDown className={`h-3.5 w-3.5 transition-transform ${openMenu === t.key ? "rotate-180" : ""}`} />
            </button>
          ))}
          <Link to="/pricing" className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition hover:text-foreground">Pricing</Link>
          <Link to="/about" className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition hover:text-foreground">About</Link>
          <Link to="/contact" className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition hover:text-foreground">Contact</Link>

          {/* Mega menu lives inside the nav hover region so moving cursor into it keeps it open */}
          <div
            onMouseEnter={cancelClose}
            onMouseLeave={scheduleClose}
          >
            <MegaMenu open={!!openMenu} type={openMenu} onClose={() => setOpenMenu(null)} />
          </div>
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <ThemeToggle />
          <Link to="/login" className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition hover:text-foreground">
            Login
          </Link>
          <Link
            to="/demo"
            className="inline-flex items-center gap-1.5 rounded-lg bg-gradient-primary px-4 py-2 text-sm font-semibold text-white shadow-glow transition hover:opacity-95"
          >
            Book Demo <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button onClick={() => setMobileOpen((v) => !v)} aria-label="Menu" className="rounded-lg p-2 hover:bg-muted">
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="max-h-[80vh] overflow-y-auto border-t border-border bg-background lg:hidden">
          <div className="space-y-2 px-4 py-4">
            {[
              { title: "Platform", items: platformColumns.flatMap((g) => g.items) },
              { title: "Solutions", items: solutionsItems },
              { title: "Industries", items: industriesItems },
              { title: "Resources", items: resourcesItems },
            ].map((sec) => (
              <details key={sec.title} className="group rounded-xl border border-border bg-card">
                <summary className="flex cursor-pointer items-center justify-between px-4 py-3 text-sm font-semibold">
                  {sec.title}
                  <ChevronDown className="h-4 w-4 transition group-open:rotate-180" />
                </summary>
                <ul className="space-y-0.5 border-t border-border p-2">
                  {sec.items.map((i) => (
                    <li key={i.to + i.label}>
                      <Link to={i.to} className="flex items-start gap-3 rounded-lg p-2.5 hover:bg-muted" onClick={() => setMobileOpen(false)}>
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-pastel-purple text-indigo">
                          <i.icon className="h-4 w-4" />
                        </div>
                        <div>
                          <div className="text-sm font-medium">{i.label}</div>
                          <div className="text-[11px] text-muted-foreground">{i.desc}</div>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </details>
            ))}
            <div className="flex flex-col gap-2 px-1 pt-2">
              <Link to="/pricing" onClick={() => setMobileOpen(false)} className="rounded-lg px-4 py-2.5 text-sm font-medium hover:bg-muted">Pricing</Link>
              <Link to="/about" onClick={() => setMobileOpen(false)} className="rounded-lg px-4 py-2.5 text-sm font-medium hover:bg-muted">About</Link>
              <Link to="/contact" onClick={() => setMobileOpen(false)} className="rounded-lg px-4 py-2.5 text-sm font-medium hover:bg-muted">Contact Sales</Link>
              <div className="grid grid-cols-2 gap-2 pt-2">
                <Link to="/login" onClick={() => setMobileOpen(false)} className="rounded-lg border border-border px-4 py-2.5 text-center text-sm font-medium">Login</Link>
                <Link to="/demo" onClick={() => setMobileOpen(false)} className="rounded-lg bg-gradient-primary px-4 py-2.5 text-center text-sm font-semibold text-white shadow-glow">Book Demo</Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
