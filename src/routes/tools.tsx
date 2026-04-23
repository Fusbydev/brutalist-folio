import { createFileRoute, Link } from "@tanstack/react-router";
import { ZineLayout, PageHeader } from "@/components/zine/Layout";
import { members, TBD } from "@/data/members";

export const Route = createFileRoute("/tools")({
  component: ToolsPage,
  head: () => ({
    meta: [
      { title: "06 / Tools & Techniques — OJT E-Portfolio" },
      { name: "description", content: "Modern techniques, software, and skills used and learned by each trainee during the OJT." },
      { property: "og:title", content: "Tools & Techniques / OJT E-Portfolio" },
    ],
  }),
});

type Bucket = { k: string; items: string[] };

const stacks: Record<string, Bucket[]> = {
  abadinas: [
    { k: "DEVELOPMENT TECHNIQUES", items: ["Full-stack (Laravel + Next.js)", "CRUD operations", "API integration"] },
    { k: "DATABASE & VALIDATION", items: ["Structured data handling", "Input validation"] },
    { k: "AUTH & SECURITY", items: ["Laravel Sanctum"] },
    { k: "API TESTING", items: ["Postman"] },
    { k: "CMS TOOLS", items: ["TinyMCE", "Live preview"] },
    { k: "VERSION CONTROL", items: ["Git", "GitHub"] },
    { k: "SOFT SKILLS", items: ["Problem-solving", "Communication", "Teamwork", "Time management"] },
  ],
  angara: [
    { k: "TECHNIQUES", items: ["API Deep-Dive Diagnostics", "Data Cleansing & Mapping", "Machine Learning & Visualization"] },
    { k: "TOOLS", items: ["Toad Oracle / SQL", "Postman", "Microsoft Excel (VLOOKUP, Pivot)", "Google Colab", "Python", "Matplotlib", "Adobe Acrobat"] },
    { k: "SKILLS DEVELOPED", items: ["Problem-Solving", "Time Management"] },
  ],
  fabon: [
    { k: "FULL-STACK DEVELOPMENT", items: ["Laravel", "Vue.js", ".NET Framework"] },
    { k: "AI AUTOMATION", items: ["Repetitive task automation", "Workflow efficiency"] },
    { k: "DATA HANDLING", items: ["Structured DBs", "Filtering & querying", "Accuracy & consistency"] },
    { k: "TECHNICAL SKILLS", items: ["Problem-solving", "Real-world dev experience"] },
    { k: "COMMUNICATION", items: ["Verbal & written", "Team collaboration"] },
    { k: "EMAIL ETIQUETTE", items: ["Formal tone", "Clear structure"] },
  ],
  obina: [
    { k: "UI/UX DESIGN & PROTOTYPING", items: ["Responsive web, mobile, tablet design", "Interactive prototypes", "User-centered design principles"] },
    { k: "DESIGN SYSTEMS & BRANDING", items: ["Consistent UI standards", "Cocogen branding alignment", "Cross-platform visual consistency"] },
    { k: "USER EXPERIENCE OPTIMIZATION", items: ["Improved user flows", "Layout enhancements", "Usability improvements based on feedback"] },
    { k: "CROSS-PLATFORM DESIGN", items: ["Scalable interfaces", "Responsive layouts", "Accessibility-focused design"] },
    { k: "COLLABORATION & AGILE WORKFLOW", items: ["Cross-functional teamwork", "Developer & marketing coordination", "Stakeholder alignment"] },
    { k: "SYSTEM TESTING & VALIDATION", items: ["UI validation", "Design implementation checking", "Functionality assurance"] },
    { k: "TOOLS USED", items: ["Figma", "Adobe tools", "Collaboration tools"] },
    { k: "SKILLS DEVELOPED", items: ["Design thinking", "Communication", "Adaptability", "Attention to detail"] },
],
};

function ToolsPage() {
  return (
    <ZineLayout>
      <PageHeader no="06" title="Tools/Stack" />

      <section className="border-brutal-b">
        {members.map((m) => (
          <article key={m.key} className="border-brutal-b last:border-b-0">
            <div className="grid grid-cols-12 border-brutal-b bg-ink text-paper">
              <div className="col-span-12 p-4 md:col-span-3 md:border-r-2 md:border-paper md:p-6">
                <div className="font-display text-5xl leading-none">№{m.no}</div>
                <div className="mt-2 font-mono text-[11px] uppercase tracking-widest font-bold">{m.short}</div>
                <div className="mt-1 font-mono text-[10px] uppercase opacity-70">{m.name}</div>
              </div>
              <div className="col-span-12 flex items-center p-4 font-mono text-[10px] uppercase tracking-widest opacity-90 md:col-span-9 md:p-6">
                ▌ MODERN TECHNIQUES, SKILLS, AND TOOLS USED / LEARNED
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2">
              {stacks[m.key].map((c, i) => (
                <div
                  key={c.k}
                  className={`border-b-2 border-ink p-4 md:p-6 ${i % 2 === 0 ? "md:border-r-2" : ""} ${i === stacks[m.key].length - 1 || (stacks[m.key].length % 2 === 0 && i === stacks[m.key].length - 2) ? "md:last:border-b-0" : ""}`}
                >
                  <div className="flex items-baseline justify-between border-brutal-b pb-2">
                    <div className="font-display text-xl uppercase">{c.k}</div>
                    <div className="font-mono text-[10px] uppercase tracking-widest">{c.items.length}</div>
                  </div>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {c.items.map((it) => (
                      <li
                        key={it}
                        className="border-brutal bg-paper px-2 py-1 font-mono text-xs uppercase shadow-brutal-sm"
                      >
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </article>
        ))}
      </section>

      <section className="grid grid-cols-3 border-brutal-b font-mono text-[11px] uppercase">
        <Link to="/development" className="border-r-2 border-ink p-4 hover:bg-ink hover:text-paper">← 05 / DEVELOPMENT</Link>
        <div className="border-r-2 border-ink p-4 text-center">PG.007 / 008</div>
        <Link to="/solutions" className="p-4 text-right hover:bg-ink hover:text-paper">07 / SOLUTIONS →</Link>
      </section>
    </ZineLayout>
  );
}
