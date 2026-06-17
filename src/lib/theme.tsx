import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

type Mode = "light" | "dark";
export type PaletteId = "indigo" | "blue" | "purple" | "emerald" | "orange" | "teal" | "corporate";

type PaletteSpec = {
  id: PaletteId;
  name: string;
  description: string;
  swatches: string[]; // 4 swatches for preview
  light: Record<string, string>;
  dark: Record<string, string>;
};

const mk = (
  primary: string,
  glow: string,
  accent: string,
  secondary: string,
  pastelPrimary: string,
  pastelAccent: string,
  ring = primary,
) => ({
  "--primary": primary,
  "--primary-glow": glow,
  "--primary-foreground": "#FFFFFF",
  "--secondary": secondary,
  "--secondary-foreground": "#FFFFFF",
  "--accent": accent,
  "--accent-foreground": "#FFFFFF",
  "--ring": ring,
  "--indigo": primary,
  "--royal": primary,
  "--purple": secondary,
  "--sky": accent,
  "--pastel-blue": pastelPrimary,
  "--pastel-purple": pastelAccent,
  "--pastel-lavender": pastelPrimary,
  "--pastel-cyan": pastelAccent,
  "--gradient-primary": `linear-gradient(135deg, ${primary} 0%, ${secondary} 50%, ${accent} 100%)`,
  "--gradient-text": `linear-gradient(120deg, ${primary} 0%, ${secondary} 50%, ${accent} 100%)`,
  "--gradient-hero":
    `radial-gradient(1200px 600px at 50% -10%, ${withAlpha(primary, 0.20)}, transparent 60%),` +
    `radial-gradient(800px 500px at 90% 10%, ${withAlpha(accent, 0.16)}, transparent 60%),` +
    `radial-gradient(700px 500px at 10% 30%, ${withAlpha(secondary, 0.14)}, transparent 60%)`,
  "--shadow-glow": `0 0 0 1px ${withAlpha(primary, 0.20)}, 0 24px 60px -20px ${withAlpha(primary, 0.40)}`,
  "--shadow-menu": `0 24px 60px -20px rgba(15,23,42,0.25), 0 8px 24px -8px ${withAlpha(primary, 0.22)}`,
});

const mkDark = (
  primary: string,
  glow: string,
  accent: string,
  secondary: string,
) => ({
  "--primary": primary,
  "--primary-glow": glow,
  "--secondary": secondary,
  "--accent": accent,
  "--accent-foreground": "#06121F",
  "--ring": primary,
  "--indigo": glow,
  "--royal": glow,
  "--purple": secondary,
  "--sky": accent,
  "--pastel-blue": withAlpha(primary, 0.16),
  "--pastel-purple": withAlpha(secondary, 0.16),
  "--pastel-lavender": withAlpha(primary, 0.14),
  "--pastel-cyan": withAlpha(accent, 0.14),
  "--gradient-primary": `linear-gradient(135deg, ${primary} 0%, ${secondary} 50%, ${accent} 100%)`,
  "--gradient-text": `linear-gradient(120deg, #FFFFFF 0%, ${glow} 50%, ${accent} 100%)`,
  "--gradient-hero":
    `radial-gradient(1200px 600px at 50% -10%, ${withAlpha(primary, 0.32)}, transparent 60%),` +
    `radial-gradient(800px 500px at 90% 10%, ${withAlpha(accent, 0.22)}, transparent 60%),` +
    `radial-gradient(700px 500px at 10% 30%, ${withAlpha(secondary, 0.24)}, transparent 60%)`,
  "--shadow-glow": `0 0 0 1px ${withAlpha(primary, 0.32)}, 0 24px 60px -20px ${withAlpha(primary, 0.55)}`,
  "--shadow-menu": `0 24px 60px -20px rgba(0,0,0,0.6), 0 8px 24px -8px ${withAlpha(primary, 0.32)}`,
});

function withAlpha(hex: string, a: number) {
  const h = hex.replace("#", "");
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${a})`;
}

export const PALETTES: PaletteSpec[] = [
  {
    id: "indigo",
    name: "Indigo Default",
    description: "Signature Radix indigo, purple & sky",
    swatches: ["#4F46E5", "#9333EA", "#0EA5E9", "#EDE9FE"],
    light: mk("#4F46E5", "#818CF8", "#0EA5E9", "#9333EA", "#E0E7FF", "#EDE9FE"),
    dark: mkDark("#6366F1", "#A78BFA", "#38BDF8", "#A855F7"),
  },
  {
    id: "blue",
    name: "Zoho Blue",
    description: "Calm, trustworthy enterprise blue",
    swatches: ["#2563EB", "#1D4ED8", "#38BDF8", "#DBEAFE"],
    light: mk("#2563EB", "#60A5FA", "#38BDF8", "#1D4ED8", "#DBEAFE", "#E0F2FE"),
    dark: mkDark("#3B82F6", "#93C5FD", "#38BDF8", "#60A5FA"),
  },
  {
    id: "purple",
    name: "Enterprise Purple",
    description: "Bold, premium and product-first",
    swatches: ["#7C3AED", "#A855F7", "#C084FC", "#EDE9FE"],
    light: mk("#7C3AED", "#A78BFA", "#A855F7", "#6D28D9", "#EDE9FE", "#F3E8FF"),
    dark: mkDark("#8B5CF6", "#C4B5FD", "#A855F7", "#A78BFA"),
  },
  {
    id: "emerald",
    name: "Emerald Green",
    description: "Growth, success and sustainability",
    swatches: ["#059669", "#10B981", "#34D399", "#D1FAE5"],
    light: mk("#059669", "#34D399", "#10B981", "#047857", "#D1FAE5", "#DCFCE7"),
    dark: mkDark("#10B981", "#6EE7B7", "#34D399", "#059669"),
  },
  {
    id: "orange",
    name: "Orange Growth",
    description: "Energetic, warm and human",
    swatches: ["#EA580C", "#FB923C", "#FBBF24", "#FFEDD5"],
    light: mk("#EA580C", "#FB923C", "#FB923C", "#C2410C", "#FFEDD5", "#FEF3C7"),
    dark: mkDark("#F97316", "#FDBA74", "#FBBF24", "#FB923C"),
  },
  {
    id: "teal",
    name: "Modern Teal",
    description: "Fresh, modern and balanced",
    swatches: ["#0F766E", "#14B8A6", "#2DD4BF", "#CCFBF1"],
    light: mk("#0F766E", "#2DD4BF", "#14B8A6", "#0D9488", "#CCFBF1", "#CFFAFE"),
    dark: mkDark("#14B8A6", "#5EEAD4", "#2DD4BF", "#0EA5A0"),
  },
  {
    id: "corporate",
    name: "Corporate Indigo",
    description: "Deep, confident and professional",
    swatches: ["#4338CA", "#6366F1", "#818CF8", "#E0E7FF"],
    light: mk("#4338CA", "#6366F1", "#6366F1", "#3730A3", "#E0E7FF", "#EDE9FE"),
    dark: mkDark("#6366F1", "#A5B4FC", "#818CF8", "#4F46E5"),
  },
];

const MODE_KEY = "radix-theme";
const PALETTE_KEY = "radix-palette";

type Ctx = {
  mode: Mode;
  setMode: (m: Mode) => void;
  toggle: () => void;
  palette: PaletteId;
  setPalette: (p: PaletteId) => void;
  palettes: PaletteSpec[];
};

const ThemeContext = createContext<Ctx | null>(null);

function applyPalette(id: PaletteId, mode: Mode) {
  const spec = PALETTES.find((p) => p.id === id) ?? PALETTES[0];
  const tokens = mode === "dark" ? spec.dark : spec.light;
  const root = document.documentElement;
  for (const [k, v] of Object.entries(tokens)) root.style.setProperty(k, v);
  root.setAttribute("data-palette", spec.id);
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [mode, setModeState] = useState<Mode>("light");
  const [palette, setPaletteState] = useState<PaletteId>("indigo");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const storedMode = (localStorage.getItem(MODE_KEY) as Mode | null) ?? null;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialMode: Mode = storedMode ?? (prefersDark ? "dark" : "light");
    const storedPalette = (localStorage.getItem(PALETTE_KEY) as PaletteId | null) ?? "indigo";
    const validPalette = PALETTES.some((p) => p.id === storedPalette) ? storedPalette : "indigo";

    setModeState(initialMode);
    setPaletteState(validPalette);
    document.documentElement.classList.toggle("dark", initialMode === "dark");
    applyPalette(validPalette, initialMode);
  }, []);

  const setMode = (m: Mode) => {
    setModeState(m);
    document.documentElement.classList.toggle("dark", m === "dark");
    applyPalette(palette, m);
    try { localStorage.setItem(MODE_KEY, m); } catch {}
  };
  const setPalette = (p: PaletteId) => {
    setPaletteState(p);
    applyPalette(p, mode);
    try { localStorage.setItem(PALETTE_KEY, p); } catch {}
  };
  const toggle = () => setMode(mode === "dark" ? "light" : "dark");

  return (
    <ThemeContext.Provider value={{ mode, setMode, toggle, palette, setPalette, palettes: PALETTES }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx)
    return {
      mode: "light" as Mode,
      setMode: () => {},
      toggle: () => {},
      palette: "indigo" as PaletteId,
      setPalette: () => {},
      palettes: PALETTES,
    };
  return ctx;
}

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { mode, toggle } = useTheme();
  const isDark = mode === "dark";
  return (
    <button
      onClick={toggle}
      aria-label="Toggle dark mode"
      className={
        "relative inline-flex h-9 w-16 items-center rounded-full border border-border bg-muted/60 px-1 transition-colors hover:bg-muted " +
        className
      }
    >
      <span
        className="absolute left-1 top-1 flex h-7 w-7 items-center justify-center rounded-full bg-gradient-primary text-white shadow-soft transition-transform duration-300"
        style={{ transform: isDark ? "translateX(28px)" : "translateX(0)" }}
      >
        {isDark ? (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
        ) : (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>
        )}
      </span>
      <span className="ml-auto mr-1.5 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
        {isDark ? "Dark" : "Light"}
      </span>
    </button>
  );
}
