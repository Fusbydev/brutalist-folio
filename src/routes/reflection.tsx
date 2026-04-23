import { createFileRoute, Link } from "@tanstack/react-router";
import { ZineLayout, PageHeader } from "@/components/zine/Layout";
import { members, TBD } from "@/data/members";

export const Route = createFileRoute("/reflection")({
  component: ReflectionPage,
  head: () => ({
    meta: [
      { title: "08 / Reflection — OJT E-Portfolio" },
      { name: "description", content: "Summary reflections from each of the four interns: challenges, growth, and key takeaways." },
      { property: "og:title", content: "Reflection / OJT E-Portfolio" },
    ],
  }),
});

type Reflection = { quote?: string; body: string[]; takeaways?: { k: string; v: string }[] };

const reflections: Record<string, Reflection> = {
  abadinas: {
    quote: "Learning comes through experience and continuous effort.",
    body: [
      "My OJT experience was both challenging and rewarding, as it exposed me to real-world software development beyond academic learning. One of the main challenges I faced was adapting to actual project requirements, especially in debugging issues, handling database constraints, and ensuring smooth integration between backend and frontend systems. There were moments of uncertainty when working with unfamiliar tools and complex workflows, but these experiences helped me become more independent and analytical. Successfully contributing to system improvements, such as developing modules and testing APIs, became one of my key achievements during the internship.",
      "This experience significantly contributed to my personal and professional growth. I became more disciplined, adaptable, and responsible in handling tasks and meeting deadlines. I also realized that it is normal not to have everything figured out at the beginning, and that learning comes through experience and continuous effort. My confidence improved as I gained hands-on experience in development, problem-solving, and collaboration within a team environment.",
      "The key takeaway from my OJT is the importance of applying theoretical knowledge to real-world situations. It helped me better understand my field of study, particularly in system development, API integration, and database management. Moving forward, I plan to continue improving my technical skills and remain open to learning new technologies. Overall, this experience prepared me to become more capable and ready for future opportunities in the IT industry.",
    ],
  },
  angara: {
    quote: "Documentation is the backbone of IT.",
    body: [],
    takeaways: [
      { k: "CHALLENGES & SUCCESSES", v: "One of the biggest challenges I faced was analyzing and resolving complex API issues and database-level deadlocks. However, this turned into one of my greatest successes; by referring to proper documentation and collaborating with my supervisor, I was able to successfully isolate the issues and resolve the API findings. Successfully generating complex reports by joining up to three tables in Toad SQL was another major milestone." },
      { k: "PERSONAL GROWTH", v: "I transitioned from performing basic trial tasks and monitoring uptime to actively troubleshooting critical backend systems and conducting complex data cleansing tasks." },
      { k: "KEY TAKEAWAYS", v: "I learned that continuous learning and documentation are the backbones of IT. Relying on API documentation and discussing problems openly with seasoned professionals are crucial steps in navigating corporate technology environments." },
      { k: "FUTURE APPLICATION", v: "This OJT solidified my academic understanding of database management and fueled my desire to pursue a career in data analytics. Moving forward, I plan to leverage the practical SQL expertise I gained, alongside my proactive practice with Python, Matplotlib, and machine learning, to break into the data analytics industry." },
    ],
  },
  fabon: {
    quote: "Fulfilling — one word for the whole experience.",
    body: [
      "There is only one word that can describe my internship experience — it was fulfilling. Throughout my OJT, I encountered various challenges that tested my technical knowledge, problem-solving abilities, and adaptability in a real-world work environment. At the same time, these challenges brought a sense of excitement as I was able to apply what I had learned in school to actual projects and tasks.",
      "Each accomplishment, no matter how small, gave me a strong sense of achievement and motivation to continue improving. The experience was not only about developing my technical skills in areas such as development and data handling, but also about growing professionally through better communication, teamwork, and discipline.",
      "Overall, the internship provided me with valuable learning experiences and personal growth, making it truly fulfilling.",
    ],
  },
  obina: {
  quote: "Great design is not just how it looks, but how it works.",
  body: [],
  takeaways: [
    { k: "CHALLENGES & SUCCESSES", v: "One of the biggest challenges I faced was adapting to evolving requirements, fast-paced iterations, and balancing design decisions with technical constraints and business goals. These challenges became opportunities for growth, as I successfully contributed to initiatives like the 2026 System Revamp by improving interfaces, optimizing user flows, and enhancing overall usability." },
    { k: "PERSONAL GROWTH", v: "I grew from applying basic UI/UX concepts to confidently designing real-world systems, participating in cross-functional meetings, and making design decisions that deliver practical and strategic value." },
    { k: "KEY TAKEAWAYS", v: "I learned that effective design goes beyond aesthetics—it must be functional, user-centered, and aligned with business objectives while remaining adaptable to change." },
    { k: "FUTURE APPLICATION", v: "This OJT strengthened my passion for UI/UX and system design. Moving forward, I will continue refining my skills and apply what I’ve learned to create impactful, user-centered digital experiences in my professional career." },
  ],
},
};

function ReflectionPage() {
  return (
    <ZineLayout>
      <PageHeader no="08" title="Reflect/End" />

      <section className="border-brutal-b">
        {members.map((m) => {
          const r = reflections[m.key];
          return (
            <article key={m.key} className="grid grid-cols-12 border-brutal-b last:border-b-0">
              <div className="col-span-12 border-brutal-b p-4 md:col-span-4 md:border-b-0 md:border-r-2 md:p-8">
                <div className="font-mono text-[10px] uppercase tracking-widest">¶ FILE.0{m.no} / SIGNED</div>
                <div className="mt-3 font-display text-3xl uppercase leading-none">{m.short}</div>
                <div className="mt-1 font-mono text-[10px] uppercase opacity-70">{m.name}</div>
                {r.quote && (
                  <p className="mt-6 font-display text-2xl uppercase leading-[1.05]">
                    "<span className="text-outline">{r.quote}</span>"
                  </p>
                )}
                <div className="halftone mt-6 h-24 border-brutal" />
              </div>
              <div className="col-span-12 space-y-4 p-4 md:col-span-8 md:p-8">
                {r.body.map((p, i) => (
                  <p key={i} className="text-sm leading-relaxed">
                    {p}
                  </p>
                ))}
                {r.takeaways && (
                  <ul className="divide-y-2 divide-ink border-brutal">
                    {r.takeaways.map((t) => (
                      <li key={t.k} className="p-4">
                        <div className="font-mono text-[10px] uppercase tracking-widest font-bold">{t.k}</div>
                        <p className="mt-2 text-sm leading-relaxed">{t.v}</p>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </article>
          );
        })}
      </section>

      {/* SIGN-OFF */}
      <section className="grid grid-cols-1 border-brutal-b md:grid-cols-3">
        <div className="border-b-2 border-ink p-6 md:border-b-0 md:border-r-2">
          <div className="font-mono text-[10px] uppercase tracking-widest">SIGNED</div>
          <div className="mt-3 font-display text-xl uppercase">04 INTERNS / BSIT</div>
        </div>
        <div className="border-b-2 border-ink p-6 md:border-b-0 md:border-r-2">
          <div className="font-mono text-[10px] uppercase tracking-widest">HOST</div>
          <div className="mt-3 font-display text-xl uppercase">COCOGEN INSURANCE</div>
        </div>
        <div className="p-6">
          <div className="font-mono text-[10px] uppercase tracking-widest">STATUS</div>
          <div className="mt-3 font-display text-xl uppercase">END / FILE.08</div>
        </div>
      </section>

      <section className="grid grid-cols-3 border-brutal-b font-mono text-[11px] uppercase">
        <Link to="/solutions" className="border-r-2 border-ink p-4 hover:bg-ink hover:text-paper">← 07 / SOLUTIONS</Link>
        <div className="border-r-2 border-ink p-4 text-center">FIN</div>
        <Link to="/" className="p-4 text-right hover:bg-ink hover:text-paper">↑ INDEX</Link>
      </section>
    </ZineLayout>
  );
}
