import { createFileRoute, Link } from "@tanstack/react-router";
import { ZineLayout, PageHeader } from "@/components/zine/Layout";

export const Route = createFileRoute("/project")({
  component: ProjectPage,
  head: () => ({
    meta: [
      { title: "03 / Project Background — OJT E-Portfolio" },
      { name: "description", content: "Background of the training project involvement: scope, objectives, and responsibilities." },
      { property: "og:title", content: "Project Background / OJT E-Portfolio" },
    ],
  }),
});

const responsibilities = [
  "Translating Figma specifications into production React components.",
  "Owning the design-token pipeline across web and email.",
  "Pair-coding with senior engineers on the checkout subsystem.",
  "Writing component documentation and Storybook entries.",
  "Participating in weekly client critique and design QA.",
];

function ProjectPage() {
  return (
    <ZineLayout>
      <PageHeader no="03" title="Project/Background" />

      <section className="grid grid-cols-12 border-brutal-b">
        <div className="col-span-12 border-brutal-b p-4 md:col-span-7 md:border-b-0 md:border-r-2 md:p-8">
          <div className="font-mono text-[10px] uppercase tracking-widest">PROJECT.NAME</div>
          <h2 className="mt-2 font-display text-5xl uppercase leading-[0.9] md:text-7xl">
            HALF—
            <br />
            TONE<span className="text-outline">/</span>OS
          </h2>
          <p className="mt-6 text-base leading-relaxed">
            A six-month engagement to rebuild a publishing client's editorial
            CMS as a modular design system and admin surface. The goal: replace
            a brittle bespoke admin with a documented, opinionated component
            library and a faster authoring experience for journalists.
          </p>
        </div>

        <aside className="col-span-12 md:col-span-5">
          <div className="halftone-fade border-brutal-b h-32" />
          <table className="w-full border-collapse font-mono text-[11px] uppercase">
            <tbody>
              {[
                ["CODENAME", "HALFTONE/OS"],
                ["DURATION", "24 WEEKS"],
                ["TEAM", "5 / 2 ENG · 2 DSN · 1 PM"],
                ["MY ROLE", "TRAINEE FE ENGINEER"],
                ["STATUS", "SHIPPED · v1.0"],
                ["LOC ADDED", "~14,200"],
              ].map(([k, v]) => (
                <tr key={k} className="border-brutal-b">
                  <th className="w-36 border-r-2 border-ink bg-ink p-3 text-left text-paper">{k}</th>
                  <td className="p-3">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </aside>
      </section>

      <section className="grid grid-cols-12 border-brutal-b">
        <div className="col-span-12 border-brutal-b p-4 md:col-span-6 md:border-b-0 md:border-r-2 md:p-8">
          <div className="font-mono text-[10px] uppercase tracking-widest">▌ OBJECTIVES</div>
          <ol className="mt-4 space-y-3 font-mono text-sm">
            {[
              "REDUCE ARTICLE PUBLISH TIME BY 40%.",
              "CONSOLIDATE 3 LEGACY ADMINS INTO ONE.",
              "SHIP A TYPED COMPONENT LIBRARY (60+ ITEMS).",
              "ESTABLISH A DESIGN-TOKEN BUILD PIPELINE.",
              "ACHIEVE WCAG 2.2 AA COMPLIANCE ACROSS ADMIN.",
            ].map((o, i) => (
              <li key={o} className="flex gap-3 border-brutal-b pb-3 last:border-b-0">
                <span className="font-bold">{String(i + 1).padStart(2, "0")} ▸</span>
                <span>{o}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="col-span-12 p-4 md:col-span-6 md:p-8">
          <div className="font-mono text-[10px] uppercase tracking-widest">▌ MY RESPONSIBILITIES</div>
          <ul className="mt-4 space-y-3">
            {responsibilities.map((r, i) => (
              <li key={r} className="flex gap-3 border-brutal-b pb-3 text-sm leading-relaxed last:border-b-0">
                <span className="font-mono text-xs font-bold">№{String(i + 1).padStart(2, "0")}</span>
                <span>{r}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="grid grid-cols-3 border-brutal-b font-mono text-[11px] uppercase">
        <Link to="/company" className="border-r-2 border-ink p-4 hover:bg-ink hover:text-paper">← 02 / COMPANY</Link>
        <div className="border-r-2 border-ink p-4 text-center">PG.004 / 008</div>
        <Link to="/deliverables" className="p-4 text-right hover:bg-ink hover:text-paper">04 / DELIVERABLES →</Link>
      </section>
    </ZineLayout>
  );
}
