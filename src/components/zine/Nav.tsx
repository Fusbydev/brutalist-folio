import { Link, useLocation } from "@tanstack/react-router";

const links = [
  { to: "/", label: "INDEX", no: "00" },
  { to: "/profile", label: "PROFILE", no: "01" },
  { to: "/company", label: "COMPANY", no: "02" },
  { to: "/project", label: "PROJECT", no: "03" },
  { to: "/deliverables", label: "DELIVER", no: "04" },
  { to: "/development", label: "DEVELOP", no: "05" },
  { to: "/tools", label: "TOOLS", no: "06" },
  { to: "/solutions", label: "SOLVE", no: "07" },
  { to: "/reflection", label: "REFLECT", no: "08" },
] as const;

export function Nav() {
  const loc = useLocation();
  return (
    <nav className="sticky top-0 z-50 border-brutal-b bg-paper">
      <div className="flex items-stretch overflow-x-auto">
        <div className="flex shrink-0 items-center gap-2 border-r-2 border-ink bg-ink px-3 py-2 font-mono text-[10px] tracking-widest text-paper">
          <span className="inline-block h-2 w-2 animate-flicker bg-paper" />
          <span>REC ⏺ E-PORTFOLIO/v1.0</span>
        </div>
        {links.map((l) => {
          const active = loc.pathname === l.to;
          return (
            <Link
              key={l.to}
              to={l.to}
              className={`group flex shrink-0 items-baseline gap-1 border-r-2 border-ink px-3 py-2 font-mono text-[11px] uppercase tracking-wider transition-colors ${
                active ? "bg-ink text-paper" : "hover:bg-ink hover:text-paper"
              }`}
            >
              <span className="opacity-60">{l.no}/</span>
              <span className="font-bold">{l.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
