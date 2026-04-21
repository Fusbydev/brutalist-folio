import { createFileRoute, Link } from "@tanstack/react-router";
import { ZineLayout, PageHeader } from "@/components/zine/Layout";

export const Route = createFileRoute("/profile")({
  component: ProfilePage,
  head: () => ({
    meta: [
      { title: "01 / Student Profile — OJT E-Portfolio" },
      { name: "description", content: "Student profile: identity, academic background, and career aspirations." },
      { property: "og:title", content: "Student Profile / OJT E-Portfolio" },
    ],
  }),
});

function ProfilePage() {
  return (
    <ZineLayout>
      <PageHeader no="01" title="Student/Profile" />

      <section className="grid grid-cols-12 border-brutal-b">
        {/* PORTRAIT BLOCK */}
        <div className="col-span-12 border-brutal-b md:col-span-5 md:border-b-0 md:border-r-2">
          <div className="relative aspect-[4/5] overflow-hidden bg-newsprint">
            <div className="halftone-dense absolute inset-0 photocopy" />
            <div className="absolute inset-0 flex items-end p-4">
              <div className="font-mono text-[10px] uppercase tracking-widest">
                FIG.01 — IDENTIFICATION PORTRAIT / DPI:300 / CTRL+P
              </div>
            </div>
            <div className="absolute right-3 top-3 border-brutal bg-paper px-2 py-1 font-mono text-[10px] uppercase">
              ID — 2025/0001
            </div>
          </div>
          <div className="grid grid-cols-2 divide-x-2 divide-ink border-brutal-t font-mono text-[11px] uppercase">
            <div className="p-3"><div className="opacity-60">HEIGHT</div><div className="font-bold">5'7"</div></div>
            <div className="p-3"><div className="opacity-60">EYES</div><div className="font-bold">BROWN</div></div>
          </div>
        </div>

        {/* INFO BLOCK */}
        <div className="col-span-12 md:col-span-7">
          <table className="w-full border-collapse font-mono text-xs uppercase">
            <tbody>
              {[
                ["NAME", "JUAN MIGUEL DELA CRUZ"],
                ["COURSE", "BS / INFORMATION TECHNOLOGY"],
                ["YEAR", "4TH YEAR · BLOCK A"],
                ["EMAIL", "JUAN.DELACRUZ@MAIL.EDU"],
                ["PHONE", "+63 917 000 0000"],
                ["LOCATION", "MANILA / PH"],
                ["FILE NO.", "OJT-2025-0431"],
              ].map(([k, v]) => (
                <tr key={k} className="border-brutal-b">
                  <th className="w-32 border-r-2 border-ink bg-ink p-3 text-left text-paper">{k}</th>
                  <td className="p-3">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="space-y-5 border-brutal-b p-4 md:p-6">
            <div>
              <div className="mb-2 font-mono text-[10px] uppercase tracking-widest">¶ 01 — BIO</div>
              <p className="font-sans text-base leading-relaxed">
                A fourth-year information technology student with an obsessive
                interest in the seam between engineering rigor and graphic
                expression. I treat code as a craft and interfaces as objects
                that should be examined, broken, and rebuilt.
              </p>
            </div>
            <div>
              <div className="mb-2 font-mono text-[10px] uppercase tracking-widest">¶ 02 — BACKGROUND</div>
              <p className="font-sans text-base leading-relaxed">
                Trained across full-stack development, UI design, and systems
                analysis. Competitive coursework in algorithms, databases, and
                human-computer interaction. Active in the campus tech guild and
                a frequent contributor to design-engineering crit sessions.
              </p>
            </div>
            <div>
              <div className="mb-2 font-mono text-[10px] uppercase tracking-widest">¶ 03 — ASPIRATIONS</div>
              <p className="font-sans text-base leading-relaxed">
                Seeking a career at the intersection of product engineering and
                design systems — building software that is opinionated,
                accessible, and built to last. Long-term: lead a small team
                shipping defensible, high-craft tools.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-3 border-brutal-b font-mono text-[11px] uppercase">
        <Link to="/" className="border-r-2 border-ink p-4 hover:bg-ink hover:text-paper">← INDEX</Link>
        <div className="border-r-2 border-ink p-4 text-center">PG.002 / 008</div>
        <Link to="/company" className="p-4 text-right hover:bg-ink hover:text-paper">02 / COMPANY →</Link>
      </section>
    </ZineLayout>
  );
}
