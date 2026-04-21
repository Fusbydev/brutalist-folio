import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ZineLayout } from "@/components/zine/Layout";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "OJT E-Portfolio / Index — Brutalist Zine" },
      { name: "description", content: "On-the-Job Training e-portfolio. A brutalist zine documenting profile, project, deliverables, and reflection." },
      { property: "og:title", content: "OJT E-Portfolio / Index" },
      { property: "og:description", content: "A high-end brutalist zine documenting an OJT experience." },
    ],
  }),
});

const sections = [
  { no: "01", title: "STUDENT PROFILE", to: "/profile", desc: "Identity. Course. Aspirations.", tag: "WHO" },
  { no: "02", title: "COMPANY PROFILE", to: "/company", desc: "Host org. Industry. Role.", tag: "WHERE" },
  { no: "03", title: "PROJECT BACKGROUND", to: "/project", desc: "Scope. Goals. Responsibilities.", tag: "WHAT" },
  { no: "04", title: "DELIVERABLES", to: "/deliverables", desc: "Outputs. Artifacts. Impact.", tag: "OUTPUT" },
  { no: "05", title: "DEVELOPMENT", to: "/development", desc: "Skills. Behaviors. Growth.", tag: "GROWTH" },
  { no: "06", title: "TOOLS & TECHNIQUES", to: "/tools", desc: "Stack. Methods. Software.", tag: "STACK" },
  { no: "07", title: "DISCIPLINE SOLUTIONS", to: "/solutions", desc: "Theory → Practice.", tag: "SOLVE" },
  { no: "08", title: "REFLECTION", to: "/reflection", desc: "Lessons. Wins. Forward.", tag: "END" },
] as const;

function Index() {
  return (
    <ZineLayout>
      {/* HERO */}
      <section className="border-brutal-b relative overflow-hidden">
        <div className="grid grid-cols-12 gap-0">
          <div className="col-span-12 border-brutal-b px-4 py-2 font-mono text-[10px] uppercase tracking-widest md:px-8">
            ISSUE NO.001 · MMXXV · COCOGEN INSURANCE · 04 INTERNS · BSIT · TIP
          </div>

          <div className="col-span-12 px-4 pt-6 md:col-span-8 md:px-8 md:pt-10">
            <div className="font-mono text-[11px] uppercase tracking-widest">
              ▌ A FOLIO IN EIGHT MOVEMENTS
            </div>
            <h1 className="mt-3 font-display text-[18vw] leading-[0.82] tracking-tight md:text-[12vw]">
              ON—THE
              <br />
              <span className="text-outline">·JOB·</span>
              <br />
              TRAIN<span className="inline-block -translate-y-2">/</span>ING
            </h1>
            <p className="mt-6 max-w-xl font-mono text-xs uppercase leading-relaxed tracking-wider">
              [ A BRUTALIST E-PORTFOLIO / RAW DOCUMENTATION OF FIELD WORK,
              ARTIFACTS, AND REFLECTIONS COMPILED FROM AN ON-THE-JOB TRAINING
              ENGAGEMENT. ]
            </p>
          </div>

          <aside className="col-span-12 border-brutal-t md:border-brutal-t md:col-span-4 md:border-l-2 md:border-t-0">
            <div className="halftone h-40 border-brutal-b md:h-56" />
            <ul className="divide-y-2 divide-ink font-mono text-[11px] uppercase">
              <li className="flex justify-between px-4 py-2"><span>STATUS</span><span className="font-bold">COMPLETED</span></li>
              <li className="flex justify-between px-4 py-2"><span>HOURS</span><span className="font-bold">486 H</span></li>
              <li className="flex justify-between px-4 py-2"><span>SECTIONS</span><span className="font-bold">08 / 08</span></li>
              <li className="flex justify-between px-4 py-2"><span>EDITION</span><span className="font-bold">FIRST</span></li>
              <li className="flex justify-between px-4 py-2"><span>BINDING</span><span className="font-bold">SADDLE-STITCH</span></li>
            </ul>
          </aside>

          <div className="col-span-12 border-brutal-t flex items-center justify-between gap-4 px-4 py-3 font-mono text-[10px] uppercase tracking-widest md:px-8">
            <span>↓ SCROLL OR JUMP TO ANY MOVEMENT</span>
            <span className="hidden md:inline">PG.001 / 008</span>
          </div>
        </div>
      </section>

      {/* TABLE OF CONTENTS */}
      <section className="border-brutal-b">
        <div className="flex items-baseline justify-between border-brutal-b px-4 py-3 md:px-8">
          <h2 className="font-display text-3xl uppercase md:text-5xl">Contents</h2>
          <span className="font-mono text-[10px] uppercase tracking-widest">TABLE / IDX</span>
        </div>
        <ol className="divide-y-2 divide-ink">
          {sections.map((s) => (
            <li key={s.no}>
              <Link
                to={s.to}
                className="group grid grid-cols-12 items-center gap-2 px-4 py-4 transition-colors hover:bg-ink hover:text-paper md:gap-6 md:px-8 md:py-6"
              >
                <span className="col-span-2 font-mono text-sm md:col-span-1 md:text-base">№{s.no}</span>
                <span className="col-span-7 font-display text-2xl uppercase leading-none md:col-span-7 md:text-5xl">
                  {s.title}
                </span>
                <span className="col-span-3 hidden font-mono text-[11px] uppercase tracking-widest md:col-span-3 md:block">
                  {s.desc}
                </span>
                <span className="col-span-3 text-right font-mono text-[10px] uppercase tracking-widest md:col-span-1">
                  [{s.tag}] →
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </section>

      {/* MASTHEAD STRIP */}
      <section className="grid grid-cols-2 border-brutal-b md:grid-cols-4">
        <div className="border-r-2 border-ink p-4 md:p-6">
          <div className="font-mono text-[10px] uppercase tracking-widest">EDITOR</div>
          <div className="mt-2 font-display text-xl uppercase">SELF</div>
        </div>
        <div className="border-r-2 border-ink p-4 md:p-6">
          <div className="font-mono text-[10px] uppercase tracking-widest">FORMAT</div>
          <div className="mt-2 font-display text-xl uppercase">A4 / DIGITAL</div>
        </div>
        <div className="border-r-2 border-ink p-4 md:p-6">
          <div className="font-mono text-[10px] uppercase tracking-widest">METHOD</div>
          <div className="mt-2 font-display text-xl uppercase">PHOTOCOPY</div>
        </div>
        <div className="p-4 md:p-6">
          <div className="font-mono text-[10px] uppercase tracking-widest">YEAR</div>
          <div className="mt-2 font-display text-xl uppercase">MMXXV</div>
        </div>
      </section>
    </ZineLayout>
  );
}
