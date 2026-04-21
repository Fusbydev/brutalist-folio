import { Nav } from "./Nav";
import { Link } from "@tanstack/react-router";

export function PageHeader({
  no,
  title,
  meta,
}: {
  no: string;
  title: string;
  meta?: string;
}) {
  return (
    <header className="border-brutal-b">
      <div className="flex items-end justify-between gap-4 px-4 pt-3 font-mono text-[10px] uppercase tracking-widest md:px-8">
        <span>SECTION {no} / OJT.PORTFOLIO</span>
        <span className="hidden md:inline">{meta ?? `LAT 14.5995° N • LON 120.9842° E`}</span>
        <span>FILE.{no}.{title.replace(/\s+/g, "_").toUpperCase()}</span>
      </div>
      <div className="relative px-4 py-6 md:px-8 md:py-10">
        <div className="absolute -left-2 top-2 hidden font-mono text-[10px] -rotate-90 origin-top-left tracking-widest md:block">
          NO.{no}
        </div>
        <h1 className="font-display text-[14vw] leading-[0.85] tracking-tight md:text-[10vw]">
          {title}
        </h1>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-brutal-t mt-16">
      <div className="overflow-hidden border-brutal-b bg-ink py-3 text-paper">
        <div className="flex animate-marquee whitespace-nowrap font-display text-3xl uppercase">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="px-6">
              ON-THE-JOB-TRAINING ✱ E-PORTFOLIO ✱ MMXXV ✱
            </span>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 px-4 py-4 font-mono text-[10px] uppercase tracking-widest md:grid-cols-4 md:px-8">
        <div>© MMXXV / ALL RIGHTS RESERVED</div>
        <div>PRINTED.IN.MANILA</div>
        <div>FOLIO/EDITION.001</div>
        <div className="text-right">
          <Link to="/" className="underline-offset-2 hover:underline">↑ RETURN TO INDEX</Link>
        </div>
      </div>
    </footer>
  );
}

export function ZineLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <Nav />
      {children}
      <Footer />
    </div>
  );
}
