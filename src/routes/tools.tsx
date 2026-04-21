import { createFileRoute, Link } from "@tanstack/react-router";
import { ZineLayout, PageHeader } from "@/components/zine/Layout";

export const Route = createFileRoute("/tools")({
  component: ToolsPage,
  head: () => ({
    meta: [
      { title: "06 / Tools & Techniques — OJT E-Portfolio" },
      { name: "description", content: "Modern techniques, software, and skills used and learned during the OJT." },
      { property: "og:title", content: "Tools & Techniques / OJT E-Portfolio" },
    ],
  }),
});

const cats = [
  {
    k: "ENGINEERING",
    items: ["TypeScript", "React 19", "Node.js", "Vite", "Tailwind v4", "PostgreSQL", "Drizzle", "Vitest"],
  },
  {
    k: "DESIGN / SYSTEMS",
    items: ["Figma", "Tokens Studio", "Storybook", "Style Dictionary", "Adobe InDesign"],
  },
  {
    k: "WORKFLOW",
    items: ["Git / GitHub", "Linear", "Notion", "Slack", "Loom", "Pair Programming"],
  },
  {
    k: "METHODS",
    items: ["Shape Up cycles", "Trunk-based dev", "Continuous critique", "WCAG audits", "Spec-first writing"],
  },
];

const soft = ["Critique", "Pair work", "Async writing", "Time-boxing", "Spec-first thinking", "Public defense of the work"];

function ToolsPage() {
  return (
    <ZineLayout>
      <PageHeader no="06" title="Tools/Stack" />

      <section className="grid grid-cols-1 border-brutal-b md:grid-cols-2">
        {cats.map((c) => (
          <div key={c.k} className="border-b-2 border-ink p-4 last:border-b-0 md:border-b-0 md:border-r-2 md:p-6 md:last:border-r-0 md:[&:nth-child(2n)]:border-r-0 md:[&:nth-child(-n+2)]:border-b-2">
            <div className="flex items-baseline justify-between border-brutal-b pb-2">
              <div className="font-display text-2xl uppercase">{c.k}</div>
              <div className="font-mono text-[10px] uppercase tracking-widest">{c.items.length} ITEMS</div>
            </div>
            <ul className="mt-3 flex flex-wrap gap-2">
              {c.items.map((i) => (
                <li key={i} className="border-brutal bg-paper px-2 py-1 font-mono text-xs uppercase shadow-brutal-sm">
                  {i}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="grid grid-cols-12 border-brutal-b">
        <div className="col-span-12 border-brutal-b p-4 md:col-span-7 md:border-b-0 md:border-r-2 md:p-8">
          <div className="font-mono text-[10px] uppercase tracking-widest">▌ APPLIED — A SHORT NARRATIVE</div>
          <p className="mt-4 text-base leading-relaxed">
            On HALFTONE/OS, I introduced a token pipeline using Style Dictionary
            that compiled a single source of design tokens into Tailwind theme
            variables, CSS custom properties, and Figma library variables. The
            result was a single PR-driven workflow for visual changes — no more
            chasing color drift across surfaces.
          </p>
          <p className="mt-4 text-base leading-relaxed">
            In parallel, I applied Shape Up six-week cycles to scope component
            work into shippable batches, paired daily with a senior engineer
            for the first eight weeks, and ran weekly critiques where the team
            tore the UI apart and we put it back together.
          </p>
        </div>

        <aside className="col-span-12 md:col-span-5">
          <div className="border-brutal-b bg-ink p-3 font-mono text-[10px] uppercase tracking-widest text-paper">SOFT SKILLS / APPLIED</div>
          <ul className="divide-y-2 divide-ink">
            {soft.map((s, i) => (
              <li key={s} className="flex justify-between px-4 py-3 font-mono text-xs uppercase">
                <span>№{String(i + 1).padStart(2, "0")}</span>
                <span className="font-bold">{s}</span>
              </li>
            ))}
          </ul>
        </aside>
      </section>

      <section className="grid grid-cols-3 border-brutal-b font-mono text-[11px] uppercase">
        <Link to="/development" className="border-r-2 border-ink p-4 hover:bg-ink hover:text-paper">← 05 / DEVELOPMENT</Link>
        <div className="border-r-2 border-ink p-4 text-center">PG.007 / 008</div>
        <Link to="/solutions" className="p-4 text-right hover:bg-ink hover:text-paper">07 / SOLUTIONS →</Link>
      </section>
    </ZineLayout>
  );
}
