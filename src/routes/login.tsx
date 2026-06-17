import { createFileRoute, Link } from "@tanstack/react-router";
import { Sparkles, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Login — Radix StratEdge" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Login,
});

function Login() {
  return (
    <main className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-hero-glow px-4">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="glass-strong relative w-full max-w-md rounded-3xl p-8 shadow-elevated">
        <div className="mb-6 flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-primary p-1.5"><Sparkles className="h-full w-full text-white" /></div>
          <div className="leading-tight">
            <div className="text-sm font-semibold">Radix StratEdge</div>
            <div className="-mt-0.5 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">People Cloud</div>
          </div>
        </div>
        <h1 className="text-2xl font-semibold">Welcome back</h1>
        <p className="mt-1 text-sm text-muted-foreground">Sign in to your workspace.</p>
        <form className="mt-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="text-xs text-muted-foreground">Workspace URL</label>
            <div className="mt-1 flex rounded-lg border border-border bg-background/60 focus-within:border-primary">
              <input className="flex-1 bg-transparent px-3 py-2.5 text-sm outline-none" placeholder="your-company" />
              <span className="self-center pr-3 text-xs text-muted-foreground">.radixcloud.com</span>
            </div>
          </div>
          <div>
            <label className="text-xs text-muted-foreground">Work Email</label>
            <input type="email" className="mt-1 w-full rounded-lg border border-border bg-background/60 px-3 py-2.5 text-sm outline-none focus:border-primary" />
          </div>
          <div>
            <label className="text-xs text-muted-foreground">Password</label>
            <input type="password" className="mt-1 w-full rounded-lg border border-border bg-background/60 px-3 py-2.5 text-sm outline-none focus:border-primary" />
          </div>
          <button className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-primary px-5 py-3 text-sm font-semibold text-white shadow-glow">
            Sign In <ArrowRight className="h-4 w-4" />
          </button>
        </form>
        <div className="mt-6 text-center text-xs text-muted-foreground">
          New to Radix? <Link to="/demo" className="text-accent hover:underline">Book a demo</Link>
        </div>
      </div>
    </main>
  );
}
