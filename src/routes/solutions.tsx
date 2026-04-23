import { createFileRoute, Link } from "@tanstack/react-router";
import { ZineLayout, PageHeader } from "@/components/zine/Layout";
import { members, TBD } from "@/data/members";

export const Route = createFileRoute("/solutions")({
  component: SolutionsPage,
  head: () => ({
    meta: [
      { title: "07 / Discipline-Related Solutions — OJT E-Portfolio" },
      { name: "description", content: "How each trainee's academic discipline contributed to solving challenges inside Cocogen Insurance." },
      { property: "og:title", content: "Discipline Solutions / OJT E-Portfolio" },
    ],
  }),
});

const solutions: Record<string, string[]> = {
  abadinas: [
    "My academic background in Information Technology helped me contribute to improving system structure and efficiency within the company. I applied my knowledge in web development and database design to build and enhance CRUD-based modules (User, Branch, Promo, Shop) with proper validation and organized data handling.",
    "I also contributed to improving CMS modules by implementing dynamic content management with live preview, allowing more accurate content updates. Additionally, I developed a CTPL API simulation to support real-world workflow testing using Postman. These solutions were integrated into the system to improve data consistency, streamline processes, and support efficient development and testing.",
  ],
  angara: [
    "As an Information Technology student, my academic background in database management and programming allowed me to provide direct solutions to the company's backend challenges.",
    "Database Reporting and Logic Improvements — I applied my knowledge of relational databases to identify anomalies in the company's data. For instance, I created a targeted report by joining two tables to highlight unusual behavior between two columns. I also enhanced an existing script to generate accurate reports on due date inconsistencies by adding new conditions and joining additional tables.",
    "Backend Troubleshooting — Drawing on my programming logic, I performed a deep-dive diagnostic on a failing company API. By systematically testing payload variations, I successfully isolated a critical backend timeout and database-level deadlock, identifying specific 400, 500, and 502 HTTP status codes.",
    "Integration — These solutions were directly integrated into the workflow, serving as the basis for resolving complex API issues alongside my supervisor and improving the overall data reliability of the company's reporting processes.",
  ],
  fabon: [
    "Cocogen implements various discipline-related solutions to maintain order and professionalism in the workplace. These include strict adherence to company policies and a clearly defined code of conduct that guides employee behavior, attendance, and responsibilities.",
    "Attendance and time management are monitored through timekeeping systems to ensure punctuality and accountability. The organization also conducts training programs and seminars to reinforce discipline, work ethics, and continuous professional development.",
    "Regular performance evaluations are carried out to assess employee performance, provide feedback, and implement corrective actions when necessary. In addition, supervisors actively monitor employees and provide immediate guidance to address issues. Open communication channels are encouraged to promote transparency, allowing employees to raise concerns and resolve conflicts in a professional manner.",
  ],
  obina: [
    "My academic background in Information Technology, particularly in UI/UX and system design, enabled me to contribute solutions focused on improving user experience and system usability within the company. I applied design principles such as consistency, hierarchy, and user-centered design in the 2026 System Revamp, where I redesigned interfaces, optimized user flows, and developed responsive prototypes across web, mobile, and tablet platforms. I also contributed to enhancing key features such as onboarding processes (Create Account and Partner Sign-up), motor insurance modules, and policyholder systems to ensure smoother interaction and accessibility. Through collaboration with developers, marketing, and stakeholders, I aligned design solutions with business goals and branding standards. These solutions were integrated into ongoing system development, helping improve design consistency, user engagement, and overall digital experience across Cocogen’s platforms."
  ],
};

function SolutionsPage() {
  return (
    <ZineLayout>
      <PageHeader no="07" title="Solutions/IO" />

      <section className="border-brutal-b">
        {members.map((m) => (
          <article key={m.key} className="grid grid-cols-12 border-brutal-b last:border-b-0">
            <div className="col-span-12 border-brutal-b bg-ink p-4 font-mono text-paper md:col-span-3 md:border-b-0 md:border-r-2 md:p-6">
              <div className="font-display text-5xl leading-none">№{m.no}</div>
              <div className="mt-3 text-[11px] uppercase tracking-widest font-bold">{m.short}</div>
              <div className="mt-1 text-[10px] uppercase opacity-70">{m.name}</div>
              <div className="mt-6 inline-block border-2 border-paper px-2 py-1 text-[10px] uppercase">
                ✓ INTEGRATED
              </div>
            </div>
            <div className="col-span-12 space-y-4 p-4 md:col-span-9 md:p-8">
              <div className="font-mono text-[10px] uppercase tracking-widest">▌ DISCIPLINE → SOLUTION → INTEGRATION</div>
              {solutions[m.key].map((s, i) => (
                <p key={i} className="text-sm leading-relaxed">
                  <span className="font-mono text-xs font-bold">¶ {String(i + 1).padStart(2, "0")}</span>{" "}
                  {s}
                </p>
              ))}
            </div>
          </article>
        ))}
      </section>

      <section className="grid grid-cols-3 border-brutal-b font-mono text-[11px] uppercase">
        <Link to="/tools" className="border-r-2 border-ink p-4 hover:bg-ink hover:text-paper">← 06 / TOOLS</Link>
        <div className="border-r-2 border-ink p-4 text-center">PG.008 / 008</div>
        <Link to="/reflection" className="p-4 text-right hover:bg-ink hover:text-paper">08 / REFLECTION →</Link>
      </section>
    </ZineLayout>
  );
}
