import { createFileRoute, Link } from "@tanstack/react-router";
import { ZineLayout, PageHeader } from "@/components/zine/Layout";

export const Route = createFileRoute("/deliverables")({
  component: DeliverablesPage,
  head: () => ({
    meta: [
      { title: "04 / Deliverables — OJT E-Portfolio" },
      { name: "description", content: "Project deliverables: artifacts, documents, and impact summaries." },
      { property: "og:title", content: "Deliverables / OJT E-Portfolio" },
    ],
  }),
});

const items = [
  { no: "01", title: "Component Library v1", type: "REACT/TS", size: "184 KB", impact: "Reused across 3 product surfaces. Reduced new-page build time by ~52%.", link: "#" },
  { no: "02", title: "Design Token Pipeline", type: "JSON · CSS", size: "38 KB", impact: "Single source of truth for color, type, spacing. Synced to Figma.", link: "#" },
  { no: "03", title: "Editorial Admin — Phase 1", type: "WEB APP", size: "—", impact: "Replaced legacy admin for 22 active journalists. Reduced publish time by 41%.", link: "#" },
  { no: "04", title: "Storybook Documentation", type: "DOCS", size: "62 PG", impact: "Onboards new engineers in <1 day per internal survey.", link: "#" },
  { no: "05", title: "Accessibility Audit Report", type: "PDF", size: "1.2 MB", impact: "Closed 38 of 41 critical AA violations.", link: "#" },
  { no: "06", title: "End-of-Term Presentation", type: "PDF · DECK", size: "9.4 MB", impact: "Delivered to studio + client stakeholders. Approved for v1.1 scope.", link: "#" },
];

function DeliverablesPage() {
  return (
    <ZineLayout>
      <PageHeader no="04" title="Deliver/ables" />

      <section className="border-brutal-b">
        <div className="grid grid-cols-12 border-brutal-b bg-ink font-mono text-[10px] uppercase tracking-widest text-paper">
          <div className="col-span-1 border-r-2 border-paper p-3">№</div>
          <div className="col-span-5 border-r-2 border-paper p-3">ARTIFACT</div>
          <div className="col-span-2 border-r-2 border-paper p-3">TYPE</div>
          <div className="col-span-2 border-r-2 border-paper p-3 hidden md:block">SIZE</div>
          <div className="col-span-2 p-3 text-right">LINK</div>
        </div>

        {items.map((it) => (
          <article key={it.no} className="grid grid-cols-12 border-brutal-b last:border-b-0">
            <div className="col-span-1 border-r-2 border-ink p-3 font-mono text-sm font-bold">{it.no}</div>
            <div className="col-span-11 border-b-2 border-ink p-3 md:col-span-5 md:border-b-0 md:border-r-2">
              <div className="font-display text-2xl uppercase leading-tight md:text-3xl">{it.title}</div>
              <p className="mt-1 text-sm leading-relaxed">{it.impact}</p>
            </div>
            <div className="col-span-6 border-r-2 border-ink p-3 font-mono text-xs uppercase md:col-span-2">{it.type}</div>
            <div className="col-span-3 border-r-2 border-ink p-3 font-mono text-xs uppercase md:col-span-2">{it.size}</div>
            <div className="col-span-3 p-3 text-right md:col-span-2">
              <a href={it.link} className="inline-block border-brutal bg-paper px-2 py-1 font-mono text-[11px] uppercase shadow-brutal-sm transition-transform hover:translate-x-[-2px] hover:translate-y-[-2px]">
                ↗ OPEN
              </a>
            </div>
          </article>
        ))}
      </section>

      <section className="grid grid-cols-2 border-brutal-b md:grid-cols-4">
        {[
          ["LOC SHIPPED", "14,200"],
          ["COMPONENTS", "62"],
          ["PR REVIEWS", "118"],
          ["IMPACT", "41% ↓"],
        ].map(([k, v]) => (
          <div key={k} className="border-b-2 border-r-2 border-ink p-4 last:border-r-0 md:border-b-0 md:p-6">
            <div className="font-mono text-[10px] uppercase tracking-widest">{k}</div>
            <div className="mt-2 font-display text-3xl md:text-5xl">{v}</div>
          </div>
        ))}
      </section>

      <section className="grid grid-cols-3 border-brutal-b font-mono text-[11px] uppercase">
        <Link to="/project" className="border-r-2 border-ink p-4 hover:bg-ink hover:text-paper">← 03 / PROJECT</Link>
        <div className="border-r-2 border-ink p-4 text-center">PG.005 / 008</div>
        <Link to="/development" className="p-4 text-right hover:bg-ink hover:text-paper">05 / DEVELOPMENT →</Link>
      </section>
    </ZineLayout>
  );
}
