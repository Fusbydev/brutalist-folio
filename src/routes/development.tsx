import { createFileRoute, Link } from "@tanstack/react-router";
import { ZineLayout, PageHeader } from "@/components/zine/Layout";

export const Route = createFileRoute("/development")({
  component: DevelopmentPage,
  head: () => ({
    meta: [
      { title: "05 / Professional Development — OJT E-Portfolio" },
      { name: "description", content: "Skills, knowledge, and behaviors developed during the OJT engagement." },
      { property: "og:title", content: "Professional Development / OJT E-Portfolio" },
    ],
  }),
});

const skills = [
  { k: "Component Architecture", v: 92 },
  { k: "Design Systems Thinking", v: 88 },
  { k: "Pair Programming", v: 85 },
  { k: "Async Communication", v: 80 },
  { k: "Critique & Code Review", v: 78 },
  { k: "Stakeholder Presentation", v: 70 },
];

function DevelopmentPage() {
  return (
    <ZineLayout>
      <PageHeader no="05" title="Develop/ment" />

      <section className="grid grid-cols-12 border-brutal-b">
        <div className="col-span-12 border-brutal-b p-4 md:col-span-7 md:border-b-0 md:border-r-2 md:p-8">
          <div className="font-mono text-[10px] uppercase tracking-widest">▌ SUMMARY</div>
          <p className="mt-4 text-base leading-relaxed">
            Six months in a working studio reframed how I think about software.
            Coursework taught me how systems work in isolation; the OJT taught
            me how systems live — under deadline, under critique, and under the
            constraints of real users. The biggest gain wasn't a single
            framework; it was learning to ship in small, opinionated steps.
          </p>
          <p className="mt-4 text-base leading-relaxed">
            I left the engagement with sharper instincts for boundary-drawing
            in components, a real practice of writing before coding, and a
            comfort with critique that I did not have entering. I learned that
            engineering quality is mostly the discipline of small, repeated
            decisions made well.
          </p>
        </div>

        <div className="col-span-12 md:col-span-5">
          <div className="border-brutal-b bg-ink p-4 font-mono text-[11px] uppercase tracking-widest text-paper">SKILL TELEMETRY</div>
          <ul className="divide-y-2 divide-ink">
            {skills.map((s) => (
              <li key={s.k} className="px-4 py-3">
                <div className="flex items-baseline justify-between font-mono text-[11px] uppercase">
                  <span>{s.k}</span>
                  <span className="font-bold">{s.v}/100</span>
                </div>
                <div className="mt-2 h-3 border-brutal bg-paper">
                  <div className="h-full bg-ink" style={{ width: `${s.v}%` }} />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="grid grid-cols-1 border-brutal-b md:grid-cols-3">
        {[
          { k: "WORKPLACE", v: "Studios run on rhythm and trust. Async writing replaces 80% of meetings. Critique is a craft, not a confrontation." },
          { k: "INDUSTRY", v: "Quality compounds. Tooling that 'feels good' to use is shipped faster and maintained longer. Boring tech wins." },
          { k: "SELF", v: "I work best when I write specs first, sketch second, code third. Ship small, iterate visibly, defend the work." },
        ].map((b) => (
          <div key={b.k} className="border-b-2 border-ink p-5 last:border-b-0 md:border-b-0 md:border-r-2 md:last:border-r-0">
            <div className="font-mono text-[10px] uppercase tracking-widest">{b.k} / NOTES</div>
            <p className="mt-3 text-sm leading-relaxed">{b.v}</p>
          </div>
        ))}
      </section>

      <section className="grid grid-cols-3 border-brutal-b font-mono text-[11px] uppercase">
        <Link to="/deliverables" className="border-r-2 border-ink p-4 hover:bg-ink hover:text-paper">← 04 / DELIVERABLES</Link>
        <div className="border-r-2 border-ink p-4 text-center">PG.006 / 008</div>
        <Link to="/tools" className="p-4 text-right hover:bg-ink hover:text-paper">06 / TOOLS →</Link>
      </section>
    </ZineLayout>
  );
}
