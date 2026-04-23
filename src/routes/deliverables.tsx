import { createFileRoute, Link } from "@tanstack/react-router";
import { ZineLayout, PageHeader } from "@/components/zine/Layout";
import { members, TBD } from "@/data/members";

export const Route = createFileRoute("/deliverables")({
  component: DeliverablesPage,
  head: () => ({
    meta: [
      { title: "04 / Deliverables — OJT E-Portfolio" },
      { name: "description", content: "Project deliverables from each of the four interns: artifacts, systems, and impact." },
      { property: "og:title", content: "Deliverables / OJT E-Portfolio" },
    ],
  }),
});

const deliverables: Record<string, string[]> = {
  abadinas: [
    "A functional CTPL API simulation replicating real LTO API behavior, including tested success, failure, and edge case scenarios via Postman.",
    "A documented Postman collection containing test cases and request payloads for API validation.",
    "Enhanced CMS modules (Pages, News, Blogs, Products) with improved structure, consistency, and content handling.",
    "A live preview feature integrated with TinyMCE for real-time content editing.",
    "A fully integrated Chat Module with time-based switching between the legacy and custom chat systems.",
    "A responsive and optimized chat interface for both desktop and mobile devices.",
    "Refactored and organized API structure following MVC best practices.",
    "Developed and enhanced core system management modules including User, Branch, Promo, and Shop Management, implementing full CRUD functionalities, structured data handling, and robust input validation.",
    "Validated and user-friendly form components with proper input handling and error feedback.",
    "A secure authentication system using Laravel Sanctum with login, logout, and protected routes.",
  ],
  angara: [
    "SQL Reports and Scripts — Generated comprehensive reports by joining multiple tables (up to 3 tables) using Toad SQL. Delivered modified SQL scripts for renewal validation and enhanced existing scripts to detect due date inconsistencies.",
    "Data Cleansing and Validation Files — Produced validated Excel files by matching user names across separate source files using formulas like VLOOKUP. Documented designated values and validated company portal features in Excel.",
    "API Diagnostic Documentation — Delivered formal documentation of findings from API post requests, including isolated critical backend timeouts and database-level deadlocks based on distinct HTTP status codes (400, 500, 502).",
    "Support Ticket Logs — Maintained and submitted ticket monitoring reports after resolving bulk IT support tickets.",
    "Task Reports — Created Pivot charts in Excel to effectively summarize weekly task reports.",
    "Impact: directly supported operational efficiency by resolving backend API deadlocks, clearing bulk support tickets to assist end-users, and ensuring data accuracy across the company's systems.",
  ],
  fabon: [
    "A detailed documentation of the system, understandable by end-users and other stakeholders.",
    "Enhanced the user interface of a system to make it more user friendly and visually appealing.",
    "Added more audit logs in the automation to better track the events, errors, and other actions within the system.",
    "Developed a system where they can track the actions, events, errors, etc. of a system. This involved filtering the data, adding CRUD principles, and authentication to better secure the system.",
    "Authored detailed instructions for AI to produce detailed and human-like documentation. This involved creating the template and instructing the AI on what to do and what to use.",
  ],
  obina: [
    "Designed UI/UX prototypes for web, mobile, and tablet platforms, ensuring responsive and consistent user experience across devices.",
    "Created UI/UX designs and iterations for key systems including Trip Sagip, 2025 AEP, and ZAP (mobile and tablet platforms)",
    "Designed and improved 2026 system components such as footer, header, and modal interfaces aligned with modern UI standards",
    "Developed and refined UI/UX for E-PartnerHub (DTP) and partner onboarding (sign-up as partner) workflows",
    "Created design iterations for Motor Insurance features, including checklist modals and improved user flows",
    "Designed Mobile One Plan and Multiple Plan interfaces with clear structure and intuitive navigation",
    "Enhanced Create Account flows and authentication screens for better usability and conversion",
    "Updated web and mobile screens based on the latest Cocogen branding and policyholder experience standards",
    "Contributed to UI/UX improvements for policyholder modules (web and mobile) to ensure consistency and accessibility",
  ],
};

function DeliverablesPage() {
  return (
    <ZineLayout>
      <PageHeader no="04" title="Deliver/ables" />

      <section className="border-brutal-b">
        {members.map((m) => (
          <article key={m.key} className="grid grid-cols-12 border-brutal-b last:border-b-0">
            <div className="col-span-12 border-brutal-b bg-ink p-4 text-paper md:col-span-3 md:border-b-0 md:border-r-2 md:p-6">
              <div className="font-display text-5xl leading-none">№{m.no}</div>
              <div className="mt-3 font-mono text-[11px] uppercase tracking-widest font-bold">{m.short}</div>
              <div className="mt-1 font-mono text-[10px] uppercase opacity-70">{m.name}</div>
              <div className="mt-4 inline-block border-2 border-paper px-2 py-1 font-mono text-[10px] uppercase">
                {deliverables[m.key].length} ITEMS
              </div>
              {/* Showcase placeholder */}
              <div className="mt-6 border-2 border-paper p-3 font-mono text-[10px] uppercase opacity-90">
                📁 SHOWCASE SLOT — UPLOAD IMAGES / DOCS HERE
              </div>
            </div>
            <div className="col-span-12 md:col-span-9">
              <ol className="divide-y-2 divide-ink">
                {deliverables[m.key].map((d, i) => (
                  <li key={i} className="grid grid-cols-12 gap-3 p-4 md:p-5">
                    <span className="col-span-2 font-mono text-xs font-bold md:col-span-1">
                      №{String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="col-span-10 text-sm leading-relaxed md:col-span-11">{d}</span>
                  </li>
                ))}
              </ol>
            </div>
          </article>
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
