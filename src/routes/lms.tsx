import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, BookOpen, Trophy, Target, Smartphone, Award, BarChart3, Layers, GitBranch, Users, Play, ChevronRight } from "lucide-react";
import { useState } from "react";
import { CTASection } from "../components/site/PageShell";

export const Route = createFileRoute("/lms")({
  head: () => ({
    meta: [
      { title: "Learning Management System (LMS) — Radix StratEdge" },
      { name: "description", content: "Enterprise LMS with course builder, learning paths, assessments, certifications, gamification and mobile learning. Built into your HRMS." },
      { property: "og:title", content: "Radix LMS — Integrated Learning Platform" },
      { property: "og:description", content: "Upskill your workforce with an integrated LMS." },
      { property: "og:url", content: "/lms" },
    ],
    links: [{ rel: "canonical", href: "/lms" }],
  }),
  component: LMSPage,
});

const features = [
  { icon: BookOpen, title: "Course Builder", desc: "Drag-and-drop authoring with video, SCORM, quizzes and rich media." },
  { icon: GitBranch, title: "Learning Paths", desc: "Sequenced curricula tied to roles, skills and career stages." },
  { icon: Target, title: "Assessments", desc: "MCQ, descriptive, proctored exams with anti-cheat." },
  { icon: Award, title: "Certifications", desc: "Auto-generated certificates with expiry and renewal." },
  { icon: BarChart3, title: "Reporting", desc: "Completion, scores, engagement, ROI dashboards." },
  { icon: Layers, title: "Skill Matrix", desc: "Map skills to competencies and identify gaps." },
  { icon: Users, title: "Manager Dashboard", desc: "Team progress, nudges and learning approvals." },
  { icon: Smartphone, title: "Mobile Learning", desc: "Offline-first iOS & Android apps." },
  { icon: Trophy, title: "Gamification", desc: "Points, badges, leaderboards and rewards." },
];

const faqs = [
  { q: "Does the LMS support SCORM and xAPI?", a: "Yes — full SCORM 1.2 / 2004 and xAPI (Tin Can) support out of the box." },
  { q: "Can I build courses without a vendor?", a: "Absolutely. The built-in authoring tool supports video, documents, quizzes and interactive content." },
  { q: "Is mobile learning included?", a: "Yes — native iOS and Android apps with offline mode are included on all plans." },
  { q: "Do you support classroom and virtual training?", a: "Blended learning is fully supported, including session scheduling, attendance and Zoom/Teams integration." },
];

function LMSPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  return (
    <main>
      <section className="relative overflow-hidden bg-hero-glow">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-24 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-28">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-white/5 px-3 py-1 text-xs">
              <BookOpen className="h-3.5 w-3.5 text-accent" /> Integrated LMS
            </div>
            <h1 className="text-4xl font-semibold leading-[1.05] md:text-6xl">
              <span className="text-gradient">Upskill every employee.</span> Built into your HRMS.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              A modern enterprise LMS with course authoring, learning paths, certifications, gamification and mobile learning — no separate vendor needed.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/demo" className="inline-flex items-center gap-2 rounded-lg bg-gradient-primary px-6 py-3.5 text-sm font-semibold text-white shadow-glow">
                Book Demo <ArrowRight className="h-4 w-4" />
              </Link>
              <button className="inline-flex items-center gap-2 rounded-lg border border-border bg-white/5 px-6 py-3.5 text-sm font-medium">
                <Play className="h-4 w-4" /> Watch Tour
              </button>
            </div>
          </div>
          <div className="glass-strong rounded-3xl p-6 shadow-elevated">
            <div className="text-xs uppercase tracking-wider text-muted-foreground">Learning Dashboard</div>
            <div className="mt-4 grid grid-cols-3 gap-3">
              {[{ l: "Courses", v: "128" }, { l: "Learners", v: "8.4K" }, { l: "Cert. Issued", v: "3,210" }].map((s) => (
                <div key={s.l} className="rounded-xl border border-border bg-card p-3 text-center">
                  <div className="text-xl font-semibold text-gradient">{s.v}</div>
                  <div className="text-[11px] text-muted-foreground">{s.l}</div>
                </div>
              ))}
            </div>
            <div className="mt-5 space-y-3">
              {[
                { c: "Advanced Excel for HR", p: 84 },
                { c: "POSH Compliance 2025", p: 100 },
                { c: "Leadership Foundations", p: 42 },
                { c: "Cyber Security Awareness", p: 67 },
              ].map((l) => (
                <div key={l.c} className="rounded-xl border border-border bg-card p-3">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">{l.c}</span>
                    <span className="text-muted-foreground">{l.p}%</span>
                  </div>
                  <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-muted">
                    <div className="h-full bg-gradient-primary" style={{ width: `${l.p}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold md:text-5xl">Everything you need to run learning at scale.</h2>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="glass rounded-2xl p-6 transition hover:border-primary/50 hover:shadow-glow">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-primary text-white">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-border/60 bg-surface/40 py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-semibold md:text-5xl">LMS FAQ</h2>
          <div className="mt-10 space-y-3">
            {faqs.map((f, i) => (
              <button key={f.q} onClick={() => setOpenFaq(openFaq === i ? null : i)} className="glass block w-full rounded-2xl p-5 text-left">
                <div className="flex justify-between gap-4">
                  <span className="font-medium">{f.q}</span>
                  <ChevronRight className={`h-4 w-4 text-accent transition ${openFaq === i ? "rotate-90" : ""}`} />
                </div>
                {openFaq === i && <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>}
              </button>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
