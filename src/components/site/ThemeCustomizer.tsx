import { useEffect, useState } from "react";
import { Palette, X, Check, Sun, Moon, Sparkles } from "lucide-react";
import { useTheme, type PaletteId } from "../../lib/theme";

export function ThemeCustomizer() {
  const { mode, setMode, palette, setPalette, palettes } = useTheme();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Floating launcher */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Customize theme"
        className="group fixed bottom-6 right-6 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-primary text-white shadow-glow transition hover:scale-105 active:scale-95"
      >
        <span className="absolute inset-0 -z-10 rounded-full bg-gradient-primary opacity-60 blur-xl transition group-hover:opacity-90" />
        <Palette className="h-6 w-6" />
        <span className="pointer-events-none absolute -top-1 -right-1 inline-flex h-3 w-3">
          <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-75 animate-ping" />
          <span className="relative inline-flex h-3 w-3 rounded-full bg-accent" />
        </span>
      </button>

      {/* Backdrop + Drawer */}
      <div
        aria-hidden={!open}
        className={`fixed inset-0 z-50 transition ${open ? "pointer-events-auto" : "pointer-events-none"}`}
      >
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-foreground/30 backdrop-blur-sm transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0"}`}
        />
        <aside
          role="dialog"
          aria-label="Theme customizer"
          className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col border-l border-border bg-card text-card-foreground shadow-elevated transition-transform duration-300 ease-out sm:max-w-md ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Header */}
          <div className="flex items-start justify-between gap-4 border-b border-border bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 px-6 py-5">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-accent">
                <Sparkles className="h-3 w-3" /> Live Theme
              </div>
              <h2 className="mt-2 text-xl font-semibold tracking-tight">Customize your experience</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Pick a color theme and mode — changes apply across every page instantly.
              </p>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="rounded-lg border border-border bg-card/60 p-2 transition hover:bg-muted"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-6 py-6">
            {/* Mode */}
            <div className="mb-6">
              <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Appearance</div>
              <div className="grid grid-cols-2 gap-2 rounded-2xl border border-border bg-muted/40 p-1.5">
                <ModeBtn active={mode === "light"} onClick={() => setMode("light")} icon={<Sun className="h-4 w-4" />} label="Light" />
                <ModeBtn active={mode === "dark"} onClick={() => setMode("dark")} icon={<Moon className="h-4 w-4" />} label="Dark" />
              </div>
            </div>

            {/* Palettes */}
            <div>
              <div className="mb-2 flex items-end justify-between">
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Color theme</div>
                <div className="text-[11px] text-muted-foreground">{palettes.length} presets</div>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {palettes.map((p) => {
                  const active = p.id === palette;
                  return (
                    <button
                      key={p.id}
                      onClick={() => setPalette(p.id as PaletteId)}
                      className={`group relative overflow-hidden rounded-2xl border p-4 text-left transition ${
                        active
                          ? "border-primary bg-card shadow-glow"
                          : "border-border bg-card/60 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-soft"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="text-sm font-semibold text-foreground">{p.name}</div>
                        {active && (
                          <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary text-primary-foreground">
                            <Check className="h-3 w-3" />
                          </span>
                        )}
                      </div>
                      <div className="mt-1 text-xs text-muted-foreground">{p.description}</div>
                      <div className="mt-3 flex gap-1.5">
                        {p.swatches.map((c, i) => (
                          <span
                            key={i}
                            className="h-7 flex-1 rounded-md ring-1 ring-inset ring-border/60"
                            style={{ background: c }}
                          />
                        ))}
                      </div>
                      <div
                        className="mt-3 h-2 rounded-full"
                        style={{
                          background: `linear-gradient(90deg, ${p.swatches[0]}, ${p.swatches[1]}, ${p.swatches[2]})`,
                        }}
                      />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Live preview */}
            <div className="mt-7">
              <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Live preview</div>
              <div className="rounded-2xl border border-border bg-card p-5">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold">Headcount</div>
                  <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-medium text-primary">+12%</span>
                </div>
                <div className="mt-3 flex items-end gap-1.5">
                  {[42, 60, 38, 75, 52, 88, 70].map((h, i) => (
                    <span
                      key={i}
                      className="w-full rounded-md bg-gradient-to-t from-primary to-accent"
                      style={{ height: `${h}px` }}
                    />
                  ))}
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-lg bg-gradient-primary px-3 py-1.5 text-xs font-semibold text-white shadow-glow">Book Demo</span>
                  <span className="rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium">Pricing</span>
                  <span className="rounded-lg bg-accent/15 px-3 py-1.5 text-xs font-medium text-accent">AI Insight</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-border bg-muted/30 px-6 py-4 text-xs text-muted-foreground">
            Saved automatically. Your preference syncs across visits.
          </div>
        </aside>
      </div>
    </>
  );
}

function ModeBtn({ active, onClick, icon, label }: { active: boolean; onClick: () => void; icon: React.ReactNode; label: string }) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center justify-center gap-2 rounded-xl px-3 py-2 text-sm font-medium transition ${
        active ? "bg-card text-foreground shadow-soft" : "text-muted-foreground hover:text-foreground"
      }`}
    >
      {icon}
      {label}
    </button>
  );
}
