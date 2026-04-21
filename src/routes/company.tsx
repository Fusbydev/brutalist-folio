import { createFileRoute, Link } from "@tanstack/react-router";
import { ZineLayout, PageHeader } from "@/components/zine/Layout";

export const Route = createFileRoute("/company")({
  component: CompanyPage,
  head: () => ({
    meta: [
      { title: "02 / Company Profile — OJT E-Portfolio" },
      { name: "description", content: "Host company profile: industry, size, location, and the trainee's role." },
      { property: "og:title", content: "Company Profile / OJT E-Portfolio" },
    ],
  }),
});

function CompanyPage() {
  return (
    <ZineLayout>
      <PageHeader no="02" title="Company/Profile" />

      <section className="grid grid-cols-12 border-brutal-b">
        <div className="col-span-12 border-brutal-b p-4 md:col-span-7 md:border-b-0 md:border-r-2 md:p-8">
          <div className="font-mono text-[10px] uppercase tracking-widest">▌ HOST ORGANIZATION</div>
          <h2 className="mt-2 font-display text-6xl uppercase leading-[0.9] md:text-8xl">
            NORTH—
            <br />
            STUDIO<span className="text-outline">/</span>LAB
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed">
            North Studio/Lab is an independent product studio based in Makati
            City, building software, brand systems, and editorial tools for
            mid-market clients across Southeast Asia. Founded MMXIX, the studio
            operates with a flat 24-person team split between engineering,
            design, and strategy.
          </p>
          <p className="mt-4 max-w-xl text-base leading-relaxed">
            Their portfolio includes work for fintech operators, civic-tech
            non-profits, and indie publishers. The work emphasizes opinionated
            craft, accessible design, and durable engineering.
          </p>
        </div>

        <aside className="col-span-12 md:col-span-5">
          <div className="border-brutal-b stripes h-32" />
          <table className="w-full border-collapse font-mono text-[11px] uppercase">
            <tbody>
              {[
                ["INDUSTRY", "PRODUCT STUDIO / SOFTWARE"],
                ["SIZE", "24 HUMANS"],
                ["FOUNDED", "MMXIX"],
                ["LOCATION", "MAKATI · PHILIPPINES"],
                ["DEPARTMENT", "ENGINEERING / FRONTEND"],
                ["ROLE", "TRAINEE — UI ENGINEER"],
                ["MENTOR", "M. SANTOS"],
                ["TERM", "JUN — DEC / MMXXV"],
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

      <section className="grid grid-cols-1 border-brutal-b md:grid-cols-3">
        {[
          { k: "MAIN SERVICES", v: "Product engineering · Brand systems · Editorial / publishing tooling · Strategic research." },
          { k: "STACK", v: "TypeScript · React · Node · PostgreSQL · Figma · Linear · Notion." },
          { k: "CULTURE", v: "Studio model. Pair-driven critique. Async-first written communication. Strong opinions, loosely held." },
        ].map((b) => (
          <div key={b.k} className="border-b-2 border-ink p-5 last:border-b-0 md:border-b-0 md:border-r-2 md:last:border-r-0">
            <div className="font-mono text-[10px] uppercase tracking-widest">{b.k}</div>
            <p className="mt-3 text-sm leading-relaxed">{b.v}</p>
          </div>
        ))}
      </section>

      <section className="grid grid-cols-3 border-brutal-b font-mono text-[11px] uppercase">
        <Link to="/profile" className="border-r-2 border-ink p-4 hover:bg-ink hover:text-paper">← 01 / PROFILE</Link>
        <div className="border-r-2 border-ink p-4 text-center">PG.003 / 008</div>
        <Link to="/project" className="p-4 text-right hover:bg-ink hover:text-paper">03 / PROJECT →</Link>
      </section>
    </ZineLayout>
  );
}
