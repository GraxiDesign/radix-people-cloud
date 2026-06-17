import { useEffect, useRef, useState, type ReactNode, type CSSProperties, type ElementType } from "react";

type Direction = "up" | "down" | "left" | "right" | "fade" | "scale";

interface RevealProps {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
  as?: ElementType;
}

const offsets: Record<Direction, string> = {
  up: "translate3d(0, 28px, 0)",
  down: "translate3d(0, -28px, 0)",
  left: "translate3d(28px, 0, 0)",
  right: "translate3d(-28px, 0, 0)",
  fade: "translate3d(0, 0, 0)",
  scale: "scale(0.94)",
};

export function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration = 700,
  className = "",
  once = true,
  as: Tag = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            if (once) io.unobserve(e.target);
          } else if (!once) {
            setVisible(false);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [once]);

  const style: CSSProperties = {
    opacity: visible ? 1 : 0,
    transform: visible ? "translate3d(0,0,0) scale(1)" : offsets[direction],
    transition: `opacity ${duration}ms cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
    willChange: "opacity, transform",
  };

  const Component = Tag as ElementType;
  return (
    <Component ref={ref as never} style={style} className={className}>
      {children}
    </Component>
  );
}

interface CounterProps {
  to: number;
  from?: number;
  duration?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  formatter?: (n: number) => string;
}

export function Counter({
  to,
  from = 0,
  duration = 1800,
  decimals = 0,
  prefix = "",
  suffix = "",
  className = "",
  formatter,
}: CounterProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [val, setVal] = useState(from);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const ease = (t: number) => 1 - Math.pow(1 - t, 3);
            const tick = (now: number) => {
              const p = Math.min(1, (now - start) / duration);
              setVal(from + (to - from) * ease(p));
              if (p < 1) requestAnimationFrame(tick);
              else setVal(to);
            };
            requestAnimationFrame(tick);
            io.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [from, to, duration]);

  const display = formatter
    ? formatter(val)
    : val.toLocaleString(undefined, {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      });

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
