import { createFileRoute, Link } from "@tanstack/react-router";
import { ZineLayout, PageHeader } from "@/components/zine/Layout";

export const Route = createFileRoute("/company")({
  component: CompanyPage,
  head: () => ({
    meta: [
      { title: "02 / Company Profile — OJT E-Portfolio" },
      { name: "description", content: "Host company profile: Cocogen Insurance, Inc. — industry, location, and team assignments." },
      { property: "og:title", content: "Company Profile / OJT E-Portfolio" },
    ],
  }),
});

const teams = [
  "TSD — Software Development",
  "TSD — IT Applications",
  "Innovation — Product Development (UI/UX)",
  "Innovation — Digital Strategy (Software Development)",
];

function CompanyPage() {
  return (
    <ZineLayout>
      <PageHeader no="02" title="Company/Profile" />

      <section className="grid grid-cols-12 border-brutal-b">
        <div className="col-span-12 border-brutal-b p-4 md:col-span-7 md:border-b-0 md:border-r-2 md:p-8">
          <div className="font-mono text-[10px] uppercase tracking-widest">▌ HOST ORGANIZATION</div>
          <h2 className="mt-2 font-display text-5xl uppercase leading-[0.9] md:text-7xl">
            COCOGEN
            <br />
            INSURANCE<span className="text-outline">,</span> INC.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed">
            Cocogen Insurance, Inc. is one of the leading non-life insurance
            companies in the Philippines. The company operates within the
            insurance industry, providing a wide range of insurance products
            and services designed to protect individuals, businesses, and
            assets.
          </p>
          <p className="mt-4 max-w-xl text-base leading-relaxed">
            Cocogen has established a strong presence nationwide, with multiple
            branches located in key cities and localities across the country.
            Its main services include motor insurance, fire insurance, marine
            insurance, personal accident insurance, and various specialized
            insurance solutions. The company is known for its commitment to
            delivering reliable, innovative, and customer-focused insurance
            services.
          </p>
        </div>

        <aside className="col-span-12 md:col-span-5">
          <div className="border-brutal-b stripes h-32" />
          <table className="w-full border-collapse font-mono text-[11px] uppercase">
            <tbody>
              {[
                ["INDUSTRY", "NON-LIFE INSURANCE"],
                ["LOCATION", "PHILIPPINES · NATIONWIDE"],
                ["ROLE", "STUDENT TRAINEES"],
                ["TEAM SIZE", "04 INTERNS / BSIT"],
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

      <section className="border-brutal-b">
        <div className="border-brutal-b bg-ink p-3 font-mono text-[10px] uppercase tracking-widest text-paper">
          ▌ DEPARTMENT / TEAM ASSIGNMENTS
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          {teams.map((t, i) => (
            <div
              key={t}
              className={`border-b-2 border-ink p-5 last:border-b-0 ${i % 2 === 0 ? "md:border-r-2" : ""} ${i < 2 ? "md:border-b-2" : "md:border-b-0"}`}
            >
              <div className="font-mono text-[10px] uppercase tracking-widest">DIV.0{i + 1}</div>
              <p className="mt-2 font-display text-xl uppercase leading-tight">{t}</p>
            </div>
          ))}
        </div>
        <div className="border-brutal-t p-4 font-mono text-xs leading-relaxed">
          These departments are responsible for developing, maintaining, and
          enhancing the company's digital systems, applications, and
          technological initiatives.
        </div>
      </section>

      <section className="grid grid-cols-3 border-brutal-b font-mono text-[11px] uppercase">
        <Link to="/profile" className="border-r-2 border-ink p-4 hover:bg-ink hover:text-paper">← 01 / PROFILE</Link>
        <div className="border-r-2 border-ink p-4 text-center">PG.003 / 008</div>
        <Link to="/project" className="p-4 text-right hover:bg-ink hover:text-paper">03 / PROJECT →</Link>
      </section>
    </ZineLayout>
  );
}
