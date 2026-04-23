import { createFileRoute, Link } from "@tanstack/react-router";
import { ZineLayout, PageHeader } from "@/components/zine/Layout";
import { members, TBD } from "@/data/members";

export const Route = createFileRoute("/project")({
  component: ProjectPage,
  head: () => ({
    meta: [
      { title: "03 / Project Background — OJT E-Portfolio" },
      { name: "description", content: "Background of each trainee's project involvement at Cocogen Insurance: scope, objectives, and responsibilities." },
      { property: "og:title", content: "Project Background / OJT E-Portfolio" },
    ],
  }),
});

const projects: Record<string, { codename: string; body: string[] }> = {
  abadinas: {
    codename: "CMS REVAMP + CHAT MODULE",
    body: [
      "During my OJT, I worked on a CMS Revamp with CTPL API Simulation using Laravel and Next.js, along with developing a Chat Module for handling user inquiries. The project aimed to improve content management, simulate real-world API behavior, and enhance overall user interaction within the system.",
      "I handled backend tasks such as API structuring, database adjustments, and route-controller alignment, while also contributing to frontend features like TinyMCE integration and live preview. For the Chat Module, I was involved from initial setup and integration up to implementing time-based switching between the old chat system during office hours and the new module after hours, including responsiveness fixes and UI improvements.",
      "Overall, my contributions helped create a more scalable, user-friendly, and production-ready system, ensuring reliable API simulation, smoother content management, and improved user communication through the chat feature.",
    ],
  },
  angara: {
    codename: "DATABASE + API RELIABILITY",
    body: [
      "During my OJT at Cocogen Insurance, Inc., I was immersed in projects centered around database management, system reliability, and API integrations. The primary objectives of these tasks were to ensure the integrity of the company's data, maintain continuous system operations, and identify and resolve backend vulnerabilities. These objectives strictly aligned with the company's goals of providing seamless and reliable digital services.",
      "My specific responsibilities included conducting daily system uptime monitoring, executing complex data cleansing operations, and managing bulk IT support tickets. Furthermore, I was deeply involved in backend troubleshooting, where I analyzed API documentation, tested API JSON payloads, and formulated SQL scripts to generate vital operational reports.",
    ],
  },
  fabon: {
    codename: "AUDIT SYSTEM + DOC AUTOMATION",
    body: [
      "During my internship, I took on the dual responsibility of technical documentation and system development. I meticulously documented two core systems in high-detail formats to ensure long-term maintainability. Simultaneously, I engineered a custom Audit and Event Monitoring System from the ground up. Leveraging my expertise in the company's existing tech stack, I was able to deploy a solution that provides real-time tracking of system actions and health events.",
      "Perhaps my most impactful contribution was the development of a Documentation Automation Tool. By automating a manual process that previously took employees up to two weeks to complete, I reduced the turnaround time to just 1–2 days. These contributions have significantly optimized the company's operational efficiency, allowing the team to focus on core development rather than administrative overhead.",
    ],
  },
  obina: { codename: "UI/UX PROTOTYPE FOR WEB, MOBILE APPLICATIONS", body: ["Designed and refined responsive UI/UX prototypes across web, mobile, and tablet platforms, contributing to key systems such as Trip Sagip, AEP 2025, ZAP, E-PartnerHub, and Motor Insurance features while aligning with Cocogen branding and usability standards. Collaborated with cross-functional teams and supported testing to ensure consistent, user-centered designs that enhance workflows, accessibility, and overall user experience.",
    "Delivered high-quality, user-centered designs and prototypes across multiple platforms, helping improve system usability, consistency, and alignment with Cocogen’s digital strategy and branding."
  ] },
};

function ProjectPage() {
  return (
    <ZineLayout>
      <PageHeader no="03" title="Project/Background" />

      <section className="border-brutal-b">
        {members.map((m) => {
          const p = projects[m.key];
          return (
            <article key={m.key} className="grid grid-cols-12 border-brutal-b last:border-b-0">
              <div className="col-span-12 border-brutal-b bg-ink p-4 font-mono text-[11px] uppercase tracking-widest text-paper md:col-span-3 md:border-b-0 md:border-r-2 md:p-6">
                <div className="font-display text-5xl leading-none">№{m.no}</div>
                <div className="mt-3 font-bold">{m.short}</div>
                <div className="mt-1 opacity-70">{m.name}</div>
                <div className="mt-6 opacity-60">CODENAME</div>
                <div className="mt-1 font-display text-base normal-case">{p.codename}</div>
              </div>
              <div className="col-span-12 space-y-4 p-4 md:col-span-9 md:p-8">
                <div className="font-mono text-[10px] uppercase tracking-widest">▌ INVOLVEMENT NARRATIVE</div>
                {p.body.map((b, i) => (
                  <p key={i} className="text-sm leading-relaxed">
                    {b}
                  </p>
                ))}
              </div>
            </article>
          );
        })}
      </section>

      <section className="grid grid-cols-3 border-brutal-b font-mono text-[11px] uppercase">
        <Link to="/company" className="border-r-2 border-ink p-4 hover:bg-ink hover:text-paper">← 02 / COMPANY</Link>
        <div className="border-r-2 border-ink p-4 text-center">PG.004 / 008</div>
        <Link to="/deliverables" className="p-4 text-right hover:bg-ink hover:text-paper">04 / DELIVERABLES →</Link>
      </section>
    </ZineLayout>
  );
}
