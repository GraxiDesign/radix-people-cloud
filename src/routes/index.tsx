import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight, Sparkles, Users, Briefcase, Calendar, Clock, FileText, GraduationCap,
  BarChart3, Shield, Zap, Globe, Brain, Award, TrendingUp, Play, Check, ChevronRight,
  Building2, HardHat, Stethoscope, ShoppingBag, Cpu, UserPlus,
  AlertTriangle, GitBranch, Eye, UserMinus, Heart, Smile,
  Lock, Database, Layers, Workflow, BookOpen, Trophy, Target, Smartphone,
  PlugZap, KeyRound, FileLock2, RefreshCw, Activity, Bell, CheckCircle2,
} from "lucide-react";
import { useState } from "react";
import { Reveal, Counter } from "../components/site/Reveal";
import { illustrations } from "../lib/illustrations";

const illustrationGallery: { key: keyof typeof illustrations; title: string; desc: string; tint: string }[] = [
  { key: "hr",            title: "Core HR",              desc: "Unified employee directory & lifecycle.", tint: "tint-blue" },
  { key: "payroll",       title: "Payroll",              desc: "Multi-country payroll with 99% accuracy.", tint: "tint-green" },
  { key: "recruitment",   title: "Recruitment & ATS",    desc: "AI-powered sourcing and hiring pipeline.", tint: "tint-purple" },
  { key: "learning",      title: "Learning (LMS)",       desc: "Courses, paths and certifications.",       tint: "tint-mint" },
  { key: "engagement",    title: "Employee Engagement",  desc: "Recognition, surveys and pulse feedback.", tint: "tint-pink" },
  { key: "analytics",     title: "Workforce Analytics",  desc: "Dashboards, KPIs and AI insights.",        tint: "tint-cyan" },
  { key: "workforce",     title: "Workforce Planning",   desc: "Headcount, scenarios and budgets.",        tint: "tint-lavender" },
  { key: "integrations",  title: "Integrations",         desc: "300+ apps, REST APIs and webhooks.",       tint: "tint-cyan" },
  { key: "security",      title: "Security & Compliance",desc: "ISO 27001, SOC 2, GDPR, DPDPA.",           tint: "tint-peach" },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Radix StratEdge People Cloud — AI-Powered Hire-to-Retire HRMS" },
      { name: "description", content: "One unified platform for HR, Payroll, ATS, Performance, LMS, Workforce Analytics and Compliance. Trusted by 2500+ enterprises." },
      { property: "og:title", content: "Radix StratEdge People Cloud" },
      { property: "og:description", content: "Empowering Workforce Transformation through one unified AI-powered HRMS." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "Radix StratEdge People Cloud",
        applicationCategory: "BusinessApplication",
        description: "AI-powered Hire-to-Retire HRMS platform.",
        operatingSystem: "Web, iOS, Android",
        offers: { "@type": "Offer", price: "100", priceCurrency: "INR" },
      }),
    }],
  }),
  component: Home,
});

const stats: { v: number; suffix: string; decimals?: number; l: string }[] = [
  { v: 2500, suffix: "+", l: "Organizations" },
  { v: 500, suffix: "K+", l: "Employees Managed" },
  { v: 99.9, suffix: "%", decimals: 1, l: "Platform Uptime" },
  { v: 94, suffix: "%", l: "Customer Satisfaction" },
];

const challenges = [
  { icon: GitBranch, title: "Disconnected HR Systems", desc: "Data trapped across HRIS, payroll, ATS, and spreadsheets.", tint: "tint-purple", icon_c: "icon-purple" },
  { icon: AlertTriangle, title: "Manual Payroll Processes", desc: "Hours lost to reconciliation, errors, and statutory filings.", tint: "tint-peach", icon_c: "icon-peach" },
  { icon: Shield, title: "Compliance Risks", desc: "Constantly changing labor laws across geographies.", tint: "tint-blue", icon_c: "icon-blue" },
  { icon: Eye, title: "Poor Workforce Visibility", desc: "No single source of truth for people decisions.", tint: "tint-cyan", icon_c: "icon-cyan" },
  { icon: UserMinus, title: "High Employee Attrition", desc: "Reactive retention without predictive insight.", tint: "tint-pink", icon_c: "icon-pink" },
  { icon: Heart, title: "Low Engagement", desc: "Disconnected employee experience across touchpoints.", tint: "tint-green", icon_c: "icon-green" },
];

const lifecycle = ["Hire", "Recruit", "Onboard", "Manage", "Develop", "Engage", "Retain", "Separate"];

const products = [
  { icon: UserPlus, title: "ATS", desc: "Source, screen and hire faster with AI-powered recruitment.", tint: "tint-purple", icon_c: "icon-purple" },
  { icon: Sparkles, title: "Onboarding", desc: "Pre-boarding to day-90 journeys, automated.", tint: "tint-lavender", icon_c: "icon-lavender" },
  { icon: Users, title: "Core HR", desc: "Single source of truth for every employee record.", tint: "tint-blue", icon_c: "icon-blue" },
  { icon: Briefcase, title: "Payroll", desc: "Multi-country payroll with statutory compliance.", tint: "tint-green", icon_c: "icon-green" },
  { icon: Clock, title: "Attendance", desc: "Geo, biometric, web and mobile-based capture.", tint: "tint-cyan", icon_c: "icon-cyan" },
  { icon: Calendar, title: "Leave", desc: "Configurable policies, balances and approvals.", tint: "tint-mint", icon_c: "icon-mint" },
  { icon: Target, title: "PMS", desc: "OKRs, continuous feedback, 360° reviews.", tint: "tint-peach", icon_c: "icon-peach" },
  { icon: GraduationCap, title: "LMS", desc: "Course builder, learning paths, certifications.", tint: "tint-green", icon_c: "icon-green" },
  { icon: Smile, title: "ESS", desc: "Self-service mobile app employees actually love.", tint: "tint-yellow", icon_c: "icon-yellow" },
  { icon: BarChart3, title: "Analytics", desc: "Workforce intelligence dashboards out-of-the-box.", tint: "tint-pink", icon_c: "icon-pink" },
  { icon: FileText, title: "Timesheets", desc: "Project, client and billable hour tracking.", tint: "tint-lavender", icon_c: "icon-lavender" },
  { icon: Workflow, title: "Workforce Planning", desc: "Headcount, budget and scenario modeling.", tint: "tint-blue", icon_c: "icon-blue" },
];

const whyRadix = [
  { icon: Database, title: "Single Source of Truth", desc: "One employee record across every module.", tint: "tint-blue", icon_c: "icon-blue" },
  { icon: Zap, title: "Automation First", desc: "Eliminate 60% of manual HR operations.", tint: "tint-yellow", icon_c: "icon-yellow" },
  { icon: Shield, title: "Enterprise Security", desc: "ISO 27001, SOC 2, GDPR, DPDPA certified.", tint: "tint-green", icon_c: "icon-green" },
  { icon: Brain, title: "Faster Decisions", desc: "AI-driven insights at every touchpoint.", tint: "tint-purple", icon_c: "icon-purple" },
  { icon: Heart, title: "Employee Experience", desc: "Consumer-grade UX, mobile-first.", tint: "tint-pink", icon_c: "icon-pink" },
  { icon: PlugZap, title: "Open Ecosystem", desc: "300+ integrations, REST APIs, webhooks.", tint: "tint-cyan", icon_c: "icon-cyan" },
];

const aiFeatures = [
  { icon: Brain, title: "AI Insights" },
  { icon: TrendingUp, title: "Attrition Prediction" },
  { icon: Activity, title: "Performance Analytics" },
  { icon: Users, title: "Talent Analytics" },
  { icon: BarChart3, title: "Workforce Forecasting" },
  { icon: Layers, title: "Executive Dashboards" },
];

const lmsFeatures = [
  "Course Creation", "Learning Paths", "Assessments", "Certifications",
  "Progress Tracking", "Skill Matrix", "Manager Dashboard", "Mobile Learning",
  "Gamification",
];

const integrations = ["SAP", "Oracle", "Tally", "QuickBooks", "Slack", "Microsoft Teams", "Google Workspace", "Zoom", "DocuSign", "Biometric Devices", "REST APIs", "Webhooks"];

const security = [
  { icon: FileLock2, title: "AES-256 Encryption", tint: "tint-blue", icon_c: "icon-blue" },
  { icon: KeyRound, title: "Role-Based Access", tint: "tint-purple", icon_c: "icon-purple" },
  { icon: Shield, title: "Multi-Factor Auth", tint: "tint-green", icon_c: "icon-green" },
  { icon: Activity, title: "Audit Logs", tint: "tint-cyan", icon_c: "icon-cyan" },
  { icon: RefreshCw, title: "Backup & Recovery", tint: "tint-peach", icon_c: "icon-peach" },
  { icon: Lock, title: "Compliance Monitoring", tint: "tint-pink", icon_c: "icon-pink" },
];

const roi: { v: number; suffix: string; decimals?: number; l: string }[] = [
  { v: 60, suffix: "%", l: "Less Manual HR Effort" },
  { v: 40, suffix: "%", l: "Faster Hiring" },
  { v: 35, suffix: "%", l: "Faster Onboarding" },
  { v: 99, suffix: "%", l: "Payroll Accuracy" },
  { v: 4.2, suffix: "X", decimals: 1, l: "Return on Investment" },
];

const industriesList = [
  { icon: HardHat, title: "Manufacturing", to: "/industries/manufacturing" },
  { icon: Stethoscope, title: "Healthcare", to: "/industries/healthcare" },
  { icon: Building2, title: "Construction", to: "/industries/construction" },
  { icon: ShoppingBag, title: "Retail", to: "/industries/retail" },
  { icon: Cpu, title: "IT Services", to: "/industries/it-services" },
  { icon: Users, title: "Staffing", to: "/industries/staffing" },
];

const pricing = [
  {
    name: "Starter", price: "₹100", popular: false,
    features: ["Core HR", "Attendance", "Leave", "ESS Mobile App", "Standard Reports", "Email Support"],
  },
  {
    name: "Professional", price: "₹130", popular: true,
    features: ["Everything in Starter", "Payroll Management", "ATS & Onboarding", "Performance Management", "Custom Workflows", "Priority Support"],
  },
  {
    name: "Enterprise", price: "₹160", popular: false,
    features: ["Everything in Professional", "LMS", "Advanced Analytics & AI", "API & Integrations", "Dedicated CSM", "24/7 Premium Support"],
  },
];

const faqs = [
  { q: "What is Radix StratEdge People Cloud?", a: "A unified AI-powered Hire-to-Retire HRMS covering HR, payroll, ATS, performance, LMS, workforce analytics and compliance on a single platform." },
  { q: "How long does implementation take?", a: "Typical go-live is 4–8 weeks depending on modules and integrations. Our team handles configuration, data migration and training." },
  { q: "Is it suitable for enterprises with 5,000+ employees?", a: "Yes — the platform scales to 100K+ employees and is trusted by enterprises across manufacturing, healthcare, retail and IT services." },
  { q: "Which compliance standards do you support?", a: "ISO 27001, SOC 2 Type II, GDPR, DPDPA and HIPAA Ready. Payroll supports India statutory (PF, ESI, PT, TDS) and multiple geographies." },
  { q: "Does the LMS support certifications and SCORM?", a: "Yes — full SCORM/xAPI support, learning paths, assessments, gamification and auto-issued certificates." },
  { q: "Can the ATS integrate with job boards?", a: "Naukri, LinkedIn, Indeed, Monster and 30+ boards with one-click posting and resume parsing." },
  { q: "How is attendance captured for field workforce?", a: "Geo-fencing, selfie attendance, biometric devices, web/mobile clock-in and offline sync." },
  { q: "Do you offer mobile apps?", a: "Native iOS and Android apps for both employees and managers." },
  { q: "What does pricing include?", a: "Per-employee-per-month pricing includes hosting, updates, security and standard support. No setup fees on annual plans." },
  { q: "Can I try before buying?", a: "Yes — book a personalized demo and a 14-day evaluation environment." },
];

function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-glow" />
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="relative mx-auto max-w-7xl px-4 pt-20 pb-24 sm:px-6 lg:px-8 lg:pt-28">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-white/5 px-3 py-1 text-xs text-muted-foreground">
                <span className="h-1.5 w-1.5 animate-pulse-glow rounded-full bg-accent" />
                AI-Powered Hire-to-Retire HRMS
              </div>
              <h1 className="text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
                <span className="text-gradient">Transform Your Workforce</span>{" "}
                <span className="text-foreground">with AI-Powered HR Technology</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg text-muted-foreground">
                Manage recruitment, onboarding, payroll, attendance, performance, learning, engagement and workforce analytics through a single integrated platform.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/demo" className="inline-flex items-center gap-2 rounded-lg bg-gradient-primary px-6 py-3.5 text-sm font-semibold text-white shadow-glow transition hover:opacity-95">
                  Book Free Demo <ArrowRight className="h-4 w-4" />
                </Link>
                <button className="inline-flex items-center gap-2 rounded-lg border border-border bg-white/5 px-6 py-3.5 text-sm font-medium transition hover:bg-white/10">
                  <Play className="h-4 w-4" /> Watch Product Tour
                </button>
              </div>
              <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
                {stats.map((s, i) => (
                  <Reveal key={s.l} delay={i * 80} direction="up">
                    <div className="text-2xl font-semibold text-gradient md:text-3xl">
                      <Counter to={s.v} suffix={s.suffix} decimals={s.decimals ?? 0} />
                    </div>
                    <div className="mt-1 text-xs text-muted-foreground">{s.l}</div>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* Hero Dashboard Mockup */}
            <div className="relative">
              {/* Animated background blobs */}
              <div className="pointer-events-none absolute -inset-10">
                <div className="absolute left-0 top-10 h-56 w-56 animate-blob rounded-full bg-primary/30 blur-3xl" />
                <div className="absolute right-0 top-32 h-56 w-56 animate-blob rounded-full bg-accent/30 blur-3xl" style={{ animationDelay: "-4s" }} />
                <div className="absolute bottom-0 left-1/3 h-48 w-48 animate-blob rounded-full bg-secondary/25 blur-3xl" style={{ animationDelay: "-8s" }} />
              </div>

              <Reveal direction="scale" duration={900} className="glass-strong relative rounded-3xl p-4 shadow-elevated">
                <div className="mb-3 flex items-center gap-1.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
                  <div className="h-2.5 w-2.5 rounded-full bg-warning/70" />
                  <div className="h-2.5 w-2.5 rounded-full bg-success/70" />
                  <div className="ml-3 text-xs text-muted-foreground">people.radix.cloud / dashboard</div>
                  <div className="ml-auto flex items-center gap-1.5 text-[10px] text-success">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping-slow rounded-full bg-success/60" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
                    </span>
                    Live
                  </div>
                </div>
                <div className="rounded-2xl bg-surface p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs text-muted-foreground">Workforce Overview</div>
                      <div className="mt-1 text-2xl font-semibold">
                        <Counter to={12847} /> Employees
                      </div>
                    </div>
                    <div className="rounded-lg bg-success/15 px-2.5 py-1 text-xs text-success">+3.2% MoM</div>
                  </div>
                  <div className="mt-5 grid grid-cols-3 gap-3">
                    {[
                      { l: "Attendance", v: 96.4, suf: "%", c: "from-primary to-secondary", dec: 1 },
                      { l: "Engagement", v: 8.7, suf: "/10", c: "from-accent to-primary", dec: 1 },
                      { l: "Open Roles", v: 248, suf: "", c: "from-secondary to-accent", dec: 0 },
                    ].map((c) => (
                      <div key={c.l} className="rounded-xl border border-border bg-card p-3">
                        <div className={`mb-2 h-1 w-10 rounded-full bg-gradient-to-r ${c.c}`} />
                        <div className="text-lg font-semibold">
                          <Counter to={c.v} decimals={c.dec} suffix={c.suf} />
                        </div>
                        <div className="text-[11px] text-muted-foreground">{c.l}</div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-5 rounded-xl border border-border bg-card p-4">
                    <div className="mb-3 flex items-center justify-between text-xs">
                      <span className="text-muted-foreground">Headcount Trend</span>
                      <span className="text-accent">Last 12 months</span>
                    </div>
                    <div className="flex h-24 items-end gap-1.5">
                      {[40, 55, 48, 62, 70, 65, 75, 82, 78, 88, 92, 95].map((h, i) => (
                        <div
                          key={i}
                          className="flex-1 animate-bar-rise rounded-t bg-gradient-to-t from-primary to-secondary/40"
                          style={{ height: `${h}%`, animationDelay: `${i * 60}ms` }}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <div className="rounded-xl border border-border bg-card p-3">
                      <div className="text-xs text-muted-foreground">Payroll Run</div>
                      <div className="mt-1 text-base font-semibold">₹4.82 Cr</div>
                      <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-muted">
                        <div className="h-full animate-progress bg-gradient-primary" style={{ width: "78%" }} />
                      </div>
                    </div>
                    <div className="rounded-xl border border-border bg-card p-3">
                      <div className="text-xs text-muted-foreground">Hiring Funnel</div>
                      <div className="mt-1 text-base font-semibold">
                        <Counter to={1284} /> candidates
                      </div>
                      <div className="mt-2 flex gap-1">
                        {[1,2,3,4,5].map(i => <div key={i} className="h-1.5 flex-1 rounded-full" style={{ background: `color-mix(in oklab, var(--primary) ${100-i*15}%, transparent)` }} />)}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* Floating Card: AI Insight */}
              <div className="absolute -bottom-6 -left-6 hidden animate-float rounded-2xl glass-strong p-4 shadow-glow md:block">
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-gradient-primary p-2 text-white"><Brain className="h-5 w-5" /></div>
                  <div>
                    <div className="text-xs text-muted-foreground">AI Insight</div>
                    <div className="text-sm font-medium">Attrition risk: 12 employees</div>
                  </div>
                </div>
              </div>

              {/* Floating Card: Live Notification */}
              <div className="absolute -right-4 top-20 hidden animate-float-soft rounded-2xl glass-strong p-3 shadow-glow md:block" style={{ animationDelay: "-2s" }}>
                <div className="flex items-center gap-2.5">
                  <div className="rounded-lg bg-success/15 p-2 text-success">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-muted-foreground">Payroll processed</div>
                    <div className="text-xs font-semibold">
                      <Counter to={1247} /> employees · ₹4.82 Cr
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Card: Notification bell */}
              <div className="absolute -left-4 top-44 hidden animate-float-soft rounded-2xl glass-strong p-3 shadow-glow lg:block" style={{ animationDelay: "-5s" }}>
                <div className="flex items-center gap-2.5">
                  <div className="relative">
                    <Bell className="h-4 w-4 animate-tick text-accent" />
                    <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-destructive" />
                  </div>
                  <div className="text-xs">
                    <span className="font-semibold">7 leave requests</span>
                    <span className="text-muted-foreground"> pending</span>
                  </div>
                </div>
              </div>

              {/* Floating Card: Top performer */}
              <div className="absolute -right-6 bottom-10 hidden animate-float rounded-2xl glass-strong p-3 shadow-glow lg:block" style={{ animationDelay: "-3s" }}>
                <div className="flex items-center gap-2.5">
                  <div className="rounded-lg bg-gradient-warm p-2 text-white"><Trophy className="h-4 w-4" /></div>
                  <div>
                    <div className="text-[11px] text-muted-foreground">Top performer</div>
                    <div className="text-xs font-semibold">Aanya · Sales · 142% target</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="border-y border-border/60 bg-surface/40 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground">Trusted by Modern Enterprises</div>
          <div className="mt-8 grid grid-cols-2 items-center gap-6 opacity-70 md:grid-cols-6">
            {["TATA", "Reliance", "Mahindra", "Wipro", "Adani", "L&T"].map((l) => (
              <div key={l} className="text-center font-display text-lg font-semibold tracking-wider text-muted-foreground">
                {l}
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {["ISO 27001", "SOC 2 Type II", "GDPR", "HIPAA Ready", "DPDPA"].map((b) => (
              <div key={b} className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs">
                <Shield className="h-3.5 w-3.5 text-accent" /> {b}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CHALLENGES */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="text-xs font-semibold uppercase tracking-wider text-accent">The Problem</div>
          <h2 className="mt-3 text-3xl font-semibold md:text-5xl">Modern HR teams are stuck in silos.</h2>
          <p className="mt-4 text-muted-foreground">Six business challenges that cost enterprises millions every year.</p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {challenges.map((c, i) => (
            <Reveal key={c.title} delay={(i % 3) * 100} direction="up">
              <div className={`group h-full rounded-2xl border ${c.tint} p-6 transition hover:-translate-y-1 hover:shadow-elevated`}>
                <div className={`mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl ${c.icon_c} shadow-soft transition group-hover:scale-110`}>
                  <c.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{c.title}</h3>
                <p className="mt-2 text-sm text-foreground/70">{c.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* HIRE-TO-RETIRE JOURNEY */}
      <section className="relative overflow-hidden border-y border-border/60 bg-surface/40 py-24">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="text-xs font-semibold uppercase tracking-wider text-accent">The Journey</div>
            <h2 className="mt-3 text-3xl font-semibold md:text-5xl">The complete Hire-to-Retire employee lifecycle.</h2>
            <p className="mt-4 text-muted-foreground">One platform from the first job posting to the final exit interview.</p>
          </div>
          <div className="mt-16">
            <div className="relative">
              <div className="absolute left-0 right-0 top-1/2 hidden h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-primary to-transparent md:block" />
              <div className="relative grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-8">
                {lifecycle.map((step, i) => (
                  <div key={step} className="flex flex-col items-center text-center">
                    <div className="glass-strong relative flex h-16 w-16 items-center justify-center rounded-2xl text-sm font-semibold shadow-glow">
                      <div className="absolute inset-0 rounded-2xl bg-gradient-primary opacity-20" />
                      <span className="relative">{String(i + 1).padStart(2, "0")}</span>
                    </div>
                    <div className="mt-3 text-sm font-medium">{step}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT SUITE */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="text-xs font-semibold uppercase tracking-wider text-accent">The Platform</div>
          <h2 className="mt-3 text-3xl font-semibold md:text-5xl">One suite. Twelve enterprise-grade modules.</h2>
          <p className="mt-4 text-muted-foreground">Replace 8+ point solutions with a single unified people cloud.</p>
        </div>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((p, i) => (
            <Reveal key={p.title} delay={(i % 4) * 80} direction="up">
              <div className={`group relative h-full overflow-hidden rounded-2xl border bg-card p-6 transition hover:-translate-y-1 hover:shadow-elevated`}>
                <div className={`pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full ${p.tint} opacity-70 blur-2xl transition group-hover:opacity-100`} />
                <div className="relative">
                  <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl ${p.icon_c} shadow-soft transition group-hover:scale-110 group-hover:-rotate-3`}>
                    <p.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                  <div className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-primary">
                    Learn more <ChevronRight className="h-3 w-3 transition group-hover:translate-x-0.5" />
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ILLUSTRATION GALLERY — Platform at a glance */}
      <section className="relative overflow-hidden border-y border-border/60 bg-surface/40 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="text-xs font-semibold uppercase tracking-wider text-accent">Built for Every HR Workflow</div>
            <h2 className="mt-3 text-3xl font-semibold md:text-5xl">A purpose-built canvas for <span className="text-gradient">every people process</span>.</h2>
            <p className="mt-4 text-muted-foreground">Nine fully integrated experiences, designed for HR teams, managers and employees alike.</p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {illustrationGallery.map((it, i) => (
              <Reveal key={it.key} delay={(i % 3) * 90} direction="up">
                <div className={`group h-full overflow-hidden rounded-3xl border ${it.tint} transition duration-500 hover:-translate-y-1.5 hover:shadow-elevated`}>
                  <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden p-4">
                    <div className="absolute inset-6 -z-10 rounded-2xl bg-gradient-to-br from-white/40 to-transparent opacity-0 blur-2xl transition duration-700 group-hover:opacity-100" />
                    <img
                      src={illustrations[it.key]}
                      alt={`${it.title} illustration`}
                      width={1024}
                      height={768}
                      loading="lazy"
                      className="h-full w-full object-contain transition duration-700 ease-out group-hover:-translate-y-1 group-hover:rotate-[-2deg] group-hover:scale-[1.06]"
                    />
                  </div>
                  <div className="border-t border-border/50 bg-card/60 p-5 backdrop-blur">
                    <div className="text-base font-semibold text-foreground">{it.title}</div>
                    <div className="mt-1 text-sm text-muted-foreground">{it.desc}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY RADIX */}
      <section className="relative overflow-hidden border-y border-border/60 bg-surface/40 py-24">
        <div className="absolute inset-0 bg-hero-glow opacity-50" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="text-xs font-semibold uppercase tracking-wider text-accent">Why Radix</div>
            <h2 className="mt-3 text-3xl font-semibold md:text-5xl">Why choose Radix StratEdge People Cloud?</h2>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {whyRadix.map((w, i) => (
              <Reveal key={w.title} delay={(i % 3) * 100} direction="up">
                <div className={`group h-full rounded-2xl border ${w.tint} p-6 transition hover:-translate-y-1 hover:shadow-elevated`}>
                  <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl ${w.icon_c} shadow-soft transition group-hover:scale-110`}>
                    <w.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{w.title}</h3>
                  <p className="mt-2 text-sm text-foreground/70">{w.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* AI & ANALYTICS */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-accent">AI & Analytics</div>
            <h2 className="mt-3 text-3xl font-semibold md:text-5xl">
              <span className="text-gradient">Workforce intelligence</span> for modern enterprises.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Move from gut-feel HR to evidence-based decisions. Predict attrition, identify top performers, forecast headcount and surface insights — automatically.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-3">
              {aiFeatures.map((f) => (
                <div key={f.title} className="flex items-center gap-3 rounded-xl border border-border bg-card/40 p-3">
                  <div className="rounded-lg bg-gradient-primary p-2 text-white"><f.icon className="h-4 w-4" /></div>
                  <span className="text-sm font-medium">{f.title}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="glass-strong rounded-3xl p-6 shadow-elevated">
            <div className="flex items-center justify-between">
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Attrition Risk — Q4</div>
              <div className="rounded-full bg-destructive/15 px-2.5 py-0.5 text-xs text-destructive">12 high-risk</div>
            </div>
            <div className="mt-6 space-y-4">
              {[
                { team: "Engineering", risk: 68, count: 5 },
                { team: "Sales", risk: 42, count: 3 },
                { team: "Customer Success", risk: 31, count: 2 },
                { team: "Operations", risk: 18, count: 2 },
              ].map((r) => (
                <div key={r.team}>
                  <div className="mb-1.5 flex justify-between text-sm">
                    <span>{r.team}</span>
                    <span className="text-muted-foreground">{r.count} employees</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                    <div className="h-full bg-gradient-to-r from-primary via-secondary to-destructive" style={{ width: `${r.risk}%` }} />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-xl border border-border bg-card p-4">
              <div className="flex items-start gap-3">
                <Brain className="mt-0.5 h-4 w-4 text-accent" />
                <div className="text-sm">
                  <div className="font-medium">AI Recommendation</div>
                  <div className="text-muted-foreground">Engagement drop detected in Eng-Platform. Suggest 1:1 + comp review for 3 employees.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LMS HIGHLIGHT */}
      <section className="relative overflow-hidden border-y border-border/60 bg-surface/40 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="order-2 lg:order-1">
              <div className="glass-strong rounded-3xl p-6 shadow-elevated">
                <div className="flex items-center justify-between border-b border-border pb-4">
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-accent" />
                    <span className="text-sm font-medium">My Learning</span>
                  </div>
                  <div className="text-xs text-muted-foreground">68% complete</div>
                </div>
                <div className="mt-4 space-y-3">
                  {[
                    { c: "Advanced Power BI for HR", p: 84, t: "Analytics Path" },
                    { c: "POSH Compliance 2025", p: 100, t: "Mandatory", done: true },
                    { c: "Leadership Foundations", p: 42, t: "Manager Track" },
                  ].map((l) => (
                    <div key={l.c} className="rounded-xl border border-border bg-card p-4">
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="text-sm font-semibold">{l.c}</div>
                          <div className="text-xs text-muted-foreground">{l.t}</div>
                        </div>
                        {l.done && <Trophy className="h-4 w-4 text-success" />}
                      </div>
                      <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-muted">
                        <div className="h-full bg-gradient-primary" style={{ width: `${l.p}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="text-xs font-semibold uppercase tracking-wider text-accent">Integrated LMS</div>
              <h2 className="mt-3 text-3xl font-semibold md:text-5xl">
                Upskill your workforce with an <span className="text-gradient">integrated LMS</span>.
              </h2>
              <p className="mt-4 text-muted-foreground">
                Build courses, automate learning paths, certify employees and track skills — all inside the same HR platform.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-3">
                {lmsFeatures.map((f) => (
                  <div key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-accent" /> {f}
                  </div>
                ))}
              </div>
              <Link to="/lms" className="mt-8 inline-flex items-center gap-2 rounded-lg bg-gradient-primary px-5 py-3 text-sm font-semibold text-white shadow-glow">
                Explore LMS <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* INTEGRATIONS */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <Reveal direction="scale">
              <div className="group relative">
                <div className="absolute -inset-6 -z-10 rounded-[2.5rem] tint-cyan opacity-80 blur-2xl animate-illus-glow" />
                <div className="illus-interactive">
                  <img
                    src={illustrations.integrations}
                    alt="Integrations ecosystem illustration"
                    width={1024}
                    height={768}
                    loading="lazy"
                    className="w-full animate-float-soft drop-shadow-[0_30px_60px_rgba(14,165,233,0.25)]"
                  />
                </div>
              </div>
            </Reveal>
          </div>
          <div className="order-1 lg:order-2">
            <div className="text-xs font-semibold uppercase tracking-wider text-accent">Integrations</div>
            <h2 className="mt-3 text-3xl font-semibold md:text-5xl">Plays well with your <span className="text-gradient">existing stack</span>.</h2>
            <p className="mt-4 text-muted-foreground">300+ pre-built integrations across ERP, finance, communication and devices — plus REST APIs and webhooks for everything else.</p>
            <div className="mt-8 flex flex-wrap gap-2">
              {integrations.map((i) => (
                <div key={i} className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-2 text-sm transition hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-soft">
                  <PlugZap className="h-4 w-4 text-accent" /> {i}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECURITY */}
      <section className="relative overflow-hidden border-y border-border/60 bg-surface/40 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-accent">Security & Compliance</div>
              <h2 className="mt-3 text-3xl font-semibold md:text-5xl">Enterprise-grade <span className="text-gradient">security</span>, by default.</h2>
              <p className="mt-4 text-muted-foreground">Trusted by regulated enterprises in BFSI, healthcare and manufacturing — with the certifications, controls and audits to prove it.</p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {security.map((s) => (
                  <div key={s.title} className={`group flex items-center gap-3 rounded-2xl border ${s.tint} p-4 transition hover:-translate-y-0.5 hover:shadow-soft`}>
                    <div className={`rounded-xl ${s.icon_c} p-2.5 shadow-soft transition group-hover:scale-110`}><s.icon className="h-4 w-4" /></div>
                    <div className="text-sm font-medium text-foreground">{s.title}</div>
                  </div>
                ))}
              </div>
            </div>
            <Reveal direction="scale">
              <div className="group relative">
                <div className="absolute -inset-6 -z-10 rounded-[2.5rem] tint-lavender opacity-80 blur-2xl animate-illus-glow" />
                <div className="illus-interactive">
                  <img
                    src={illustrations.security}
                    alt="Enterprise security illustration"
                    width={1024}
                    height={768}
                    loading="lazy"
                    className="w-full animate-float drop-shadow-[0_30px_60px_rgba(99,102,241,0.30)]"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>


      {/* ROI */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="text-xs font-semibold uppercase tracking-wider text-accent">Proven Outcomes</div>
          <h2 className="mt-3 text-3xl font-semibold md:text-5xl">Measurable ROI in 90 days.</h2>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3 lg:grid-cols-5">
          {roi.map((r, i) => (
            <Reveal key={r.l} delay={i * 90} direction="up">
              <div className="glass-strong rounded-2xl p-6 text-center shadow-soft transition hover:-translate-y-1 hover:shadow-glow">
                <div className="text-3xl font-semibold text-gradient md:text-4xl">
                  <Counter to={r.v} decimals={r.decimals ?? 0} suffix={r.suffix} />
                </div>
                <div className="mt-2 text-sm text-muted-foreground">{r.l}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CUSTOMER STORIES */}
      <section className="relative overflow-hidden border-y border-border/60 bg-surface/40 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="text-xs font-semibold uppercase tracking-wider text-accent">Customer Stories</div>
            <h2 className="mt-3 text-3xl font-semibold md:text-5xl">Loved across industries.</h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {industriesList.map((i) => (
              <Link key={i.title} to={i.to} className="glass group rounded-2xl p-6 transition hover:border-primary/50 hover:shadow-glow">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-gradient-primary p-3 text-white"><i.icon className="h-5 w-5" /></div>
                  <h3 className="text-lg font-semibold">{i.title}</h3>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">
                  "Radix StratEdge cut our payroll cycle from 8 days to 2 and gave our leadership real visibility into the workforce."
                </p>
                <div className="mt-4 inline-flex items-center gap-1 text-xs text-accent">Read case study <ChevronRight className="h-3 w-3" /></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="text-xs font-semibold uppercase tracking-wider text-accent">Pricing</div>
          <h2 className="mt-3 text-3xl font-semibold md:text-5xl">Transparent, per-employee pricing.</h2>
          <p className="mt-4 text-muted-foreground">Pick the plan that fits. Switch anytime. Annual billing saves up to 20%.</p>
        </div>
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {pricing.map((p) => (
            <div key={p.name} className={`relative rounded-3xl p-8 ${p.popular ? "glass-strong shadow-glow" : "glass"}`}>
              {p.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-primary px-3 py-1 text-xs font-medium text-white">
                  Most Popular
                </div>
              )}
              <div className="text-sm font-medium uppercase tracking-wider text-accent">{p.name}</div>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-semibold">{p.price}</span>
                <span className="text-sm text-muted-foreground">/employee/month</span>
              </div>
              <Link to="/demo" className={`mt-6 block rounded-lg px-4 py-3 text-center text-sm font-medium ${p.popular ? "bg-gradient-primary text-white shadow-glow" : "border border-border bg-white/5 hover:bg-white/10"}`}>
                Book Demo
              </Link>
              <ul className="mt-6 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" /> {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="relative border-y border-border/60 bg-surface/40 py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-xs font-semibold uppercase tracking-wider text-accent">FAQ</div>
            <h2 className="mt-3 text-3xl font-semibold md:text-5xl">Frequently asked questions</h2>
          </div>
          <div className="mt-12 space-y-3">
            {faqs.map((f, i) => (
              <button
                key={f.q}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="glass block w-full rounded-2xl p-5 text-left transition hover:border-primary/40"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="font-medium">{f.q}</span>
                  <ChevronRight className={`h-4 w-4 flex-shrink-0 text-accent transition ${openFaq === i ? "rotate-90" : ""}`} />
                </div>
                {openFaq === i && <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="mx-auto my-20 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-primary/25 via-secondary/15 to-accent/15 p-10 text-center md:p-16">
          <div className="absolute inset-0 grid-bg opacity-20" />
          <div className="relative">
            <h2 className="text-3xl font-semibold md:text-5xl">
              <span className="text-gradient">Ready to transform your workforce?</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              See Radix StratEdge in action with a personalized demo built around your organization.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link to="/demo" className="inline-flex items-center gap-2 rounded-lg bg-gradient-primary px-6 py-3.5 text-sm font-semibold text-white shadow-glow">
                Schedule Demo <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-lg border border-border bg-white/5 px-6 py-3.5 text-sm font-medium">
                Talk to Expert
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
