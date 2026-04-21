import { createFileRoute, Link } from "@tanstack/react-router";
import { ZineLayout, PageHeader } from "@/components/zine/Layout";

export const Route = createFileRoute("/solutions")({
  component: SolutionsPage,
  head: () => ({
    meta: [
      { title: "07 / Discipline-Related Solutions — OJT E-Portfolio" },
      { name: "description", content: "How academic discipline contributed to solving challenges inside the host company." },
      { property: "og:title", content: "Discipline Solutions / OJT E-Portfolio" },
    ],
  }),
});

const solves = [
  {
    no: "01",
    challenge: "Style drift across 3 client surfaces.",
    discipline: "Software Engineering — separation of concerns.",
    solution:
      "Designed a centralized token pipeline (Style Dictionary) and forced all visual changes through a single, reviewable PR path.",
    integrated: "Adopted as the studio default for new client engagements.",
  },
  {
    no: "02",
    challenge: "New engineers needed 2+ weeks to ship their first PR.",
    discipline: "Human-Computer Interaction — affordances + documentation.",
    solution:
      "Authored a Storybook documentation layer with usage do/don'ts and live editable examples for every component.",
    integrated: "Onboarding time reduced to <2 days per internal survey (n=4).",
  },
  {
    no: "03",
    challenge: "Editorial admin failed accessibility audits (41 critical issues).",
    discipline: "Accessibility / WCAG coursework.",
    solution:
      "Audited components against WCAG 2.2 AA, refactored focus management, and introduced an axe-core CI check on PRs.",
    integrated: "Closed 38 of 41 issues. CI gate now blocks regressions.",
  },
  {
    no: "04",
    challenge: "Slow content publishing flow blocking journalists.",
    discipline: "Database / systems analysis.",
    solution:
      "Profiled the publishing pipeline, denormalized two hot read paths, and added an optimistic UI for the most common write path.",
    integrated: "Publish-to-live time dropped from ~9.4s to ~5.5s p95.",
  },
];

function SolutionsPage() {
  return (
    <ZineLayout>
      <PageHeader no="07" title="Solutions/IO" />

      <section className="border-brutal-b">
        {solves.map((s) => (
          <article key={s.no} className="grid grid-cols-12 border-brutal-b last:border-b-0">
            <div className="col-span-12 border-brutal-b bg-ink p-3 font-mono text-[11px] uppercase tracking-widest text-paper md:col-span-2 md:border-b-0 md:border-r-2">
              <div className="font-display text-4xl leading-none">№{s.no}</div>
              <div className="mt-1 opacity-70">CASE / FILE</div>
            </div>
            <div className="col-span-12 grid grid-cols-1 md:col-span-10 md:grid-cols-2">
              <div className="border-b-2 border-ink p-4 md:border-b-0 md:border-r-2 md:p-6">
                <div className="font-mono text-[10px] uppercase tracking-widest">CHALLENGE</div>
                <p className="mt-2 font-display text-xl uppercase leading-tight">{s.challenge}</p>
                <div className="mt-4 font-mono text-[10px] uppercase tracking-widest">DISCIPLINE APPLIED</div>
                <p className="mt-1 text-sm">{s.discipline}</p>
              </div>
              <div className="p-4 md:p-6">
                <div className="font-mono text-[10px] uppercase tracking-widest">SOLUTION</div>
                <p className="mt-2 text-sm leading-relaxed">{s.solution}</p>
                <div className="mt-4 inline-block border-brutal bg-paper px-2 py-1 font-mono text-[10px] uppercase shadow-brutal-sm">
                  ✓ INTEGRATED
                </div>
                <p className="mt-2 text-xs leading-relaxed">{s.integrated}</p>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="grid grid-cols-3 border-brutal-b font-mono text-[11px] uppercase">
        <Link to="/tools" className="border-r-2 border-ink p-4 hover:bg-ink hover:text-paper">← 06 / TOOLS</Link>
        <div className="border-r-2 border-ink p-4 text-center">PG.008 / 008</div>
        <Link to="/reflection" className="p-4 text-right hover:bg-ink hover:text-paper">08 / REFLECTION →</Link>
      </section>
    </ZineLayout>
  );
}
