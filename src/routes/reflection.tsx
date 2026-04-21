import { createFileRoute, Link } from "@tanstack/react-router";
import { ZineLayout, PageHeader } from "@/components/zine/Layout";

export const Route = createFileRoute("/reflection")({
  component: ReflectionPage,
  head: () => ({
    meta: [
      { title: "08 / Reflection — OJT E-Portfolio" },
      { name: "description", content: "A summary reflection on the OJT: challenges, growth, and what comes next." },
      { property: "og:title", content: "Reflection / OJT E-Portfolio" },
    ],
  }),
});

function ReflectionPage() {
  return (
    <ZineLayout>
      <PageHeader no="08" title="Reflect/End" />

      <section className="grid grid-cols-12 border-brutal-b">
        <div className="col-span-12 border-brutal-b p-4 md:col-span-8 md:border-b-0 md:border-r-2 md:p-10">
          <div className="font-mono text-[10px] uppercase tracking-widest">¶ CLOSING STATEMENT</div>
          <p className="mt-4 font-display text-3xl uppercase leading-[1.05] md:text-5xl">
            "I came in expecting to learn frameworks. I left learning how to
            <span className="text-outline"> ship</span>."
          </p>

          <div className="mt-8 space-y-4 text-base leading-relaxed">
            <p>
              The largest challenge was learning to defend my work in critique
              without becoming defensive. Early reviews stung; by week eight I
              was the one organizing them. The biggest success was watching the
              token pipeline land — a piece of plumbing nobody asked for that
              quietly fixed a problem the team had stopped naming.
            </p>
            <p>
              I grew technically — TypeScript, React, design systems — but the
              deeper growth was operational. I learned to write before I code,
              to scope before I commit, to ship in slices, and to treat my
              calendar as a product to be designed, not a place to react.
            </p>
            <p>
              My field of study now reads differently to me. Algorithms and
              HCI feel less like separate courses and more like shared
              vocabulary for the same craft. Going forward, I plan to pursue
              roles that sit on the seam between product engineering and
              design systems, and to keep the practice of writing before
              shipping at the center of my work.
            </p>
          </div>
        </div>

        <aside className="col-span-12 md:col-span-4">
          <div className="border-brutal-b bg-ink p-3 font-mono text-[10px] uppercase tracking-widest text-paper">KEY TAKEAWAYS</div>
          <ol className="divide-y-2 divide-ink">
            {[
              "Spec before code, every time.",
              "Critique is a craft. Practice it.",
              "Ship slices. Defer perfection.",
              "Write more than you talk.",
              "Boring tech, well-applied, wins.",
              "Tools that feel good get maintained.",
            ].map((t, i) => (
              <li key={t} className="flex gap-3 px-4 py-3">
                <span className="font-mono text-xs font-bold">№{String(i + 1).padStart(2, "0")}</span>
                <span className="text-sm">{t}</span>
              </li>
            ))}
          </ol>
          <div className="halftone border-brutal-t h-32" />
        </aside>
      </section>

      {/* SIGN-OFF */}
      <section className="grid grid-cols-1 border-brutal-b md:grid-cols-3">
        <div className="border-b-2 border-ink p-6 md:border-b-0 md:border-r-2">
          <div className="font-mono text-[10px] uppercase tracking-widest">SIGNED</div>
          <div className="mt-3 font-display text-2xl uppercase">JUAN M. DELA CRUZ</div>
        </div>
        <div className="border-b-2 border-ink p-6 md:border-b-0 md:border-r-2">
          <div className="font-mono text-[10px] uppercase tracking-widest">DATE</div>
          <div className="mt-3 font-display text-2xl uppercase">DEC · MMXXV</div>
        </div>
        <div className="p-6">
          <div className="font-mono text-[10px] uppercase tracking-widest">STATUS</div>
          <div className="mt-3 font-display text-2xl uppercase">END / FILE.08</div>
        </div>
      </section>

      <section className="grid grid-cols-3 border-brutal-b font-mono text-[11px] uppercase">
        <Link to="/solutions" className="border-r-2 border-ink p-4 hover:bg-ink hover:text-paper">← 07 / SOLUTIONS</Link>
        <div className="border-r-2 border-ink p-4 text-center">FIN</div>
        <Link to="/" className="p-4 text-right hover:bg-ink hover:text-paper">↑ INDEX</Link>
      </section>
    </ZineLayout>
  );
}
