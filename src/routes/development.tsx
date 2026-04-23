import { createFileRoute, Link } from "@tanstack/react-router";
import { ZineLayout, PageHeader } from "@/components/zine/Layout";
import { members, TBD } from "@/data/members";

export const Route = createFileRoute("/development")({
  component: DevelopmentPage,
  head: () => ({
    meta: [
      { title: "05 / Professional Development — OJT E-Portfolio" },
      { name: "description", content: "Skills, knowledge, and professional behaviors developed by each trainee during the OJT." },
      { property: "og:title", content: "Professional Development / OJT E-Portfolio" },
    ],
  }),
});

const learning: Record<string, string[]> = {
  abadinas: [
    "Developed practical skills in full-stack development using Laravel and Next.js, including implementing CRUD operations, managing databases, integrating APIs, and applying validation techniques.",
    "Gained experience in authentication and security using Laravel Sanctum, as well as testing system functionality through API tools like Postman.",
    "Became more confident in handling real project requirements and translating them into working system features. Improved my ability to analyze problems and choose appropriate technical solutions, and learned to structure code for better readability and maintainability.",
    "This experience helped me understand real-world development practices such as writing clean code, debugging issues, and aligning system features with business needs. It also improved my communication, adaptability, and teamwork.",
    "I learned the importance of following established workflows and coding standards in a team setting, developed better time management skills by handling multiple tasks and deadlines, and gained awareness of how collaboration and feedback contribute to improving system quality.",
  ],
  angara: [
    "My OJT experience drastically accelerated my professional growth by exposing me to a live corporate IT environment. I developed technical hard skills, such as understanding SQL best practices, analyzing complex API documentation, and applying data maps and hashKey validations.",
    "Beyond technical skills, I learned essential workplace behaviors under the mentorship of my supervisor, Mr. Cris Armand Ray G. Viaje. By actively discussing my technical findings with him, I learned how to approach complex problem-solving in a structured, industry-standard manner.",
    "I broadened my professional knowledge by attending company seminars like the Basic Non-Life Primer, E-mail Correspondence, and Resume Writing & Interview Preparation, which taught me the vital corporate standards of communication and industry practices.",
  ],
  fabon: [
    "During my internship I developed my skills in making detailed documentation, and full stack development using the framework they are using. This enhanced my skills about databases, UI/UX, data handling, and more.",
    "I become more committed in making systems that can really help a lot of people. I also enhanced my debugging skills without relying too much on Artificial Intelligence. Lastly, I learned how to structure my code to become more scalable and functional.",
    "This experience helped me realize that real-world projects are far more different than school/personal projects. In the real world it will tire you down, but you will need to come back up and try again. The experience taught me how to handle pressure and work collaboratively with a team. It also taught me how to work solely on my own without the guidance of my supervisor.",
    "Overall, I gained a lot of knowledge in this program that can help me land a job in the future.",
  ],
  obina: [
    "During my OJT at Cocogen Insurance, Inc., I enhanced my UI/UX design and prototyping skills by creating responsive, user-centered designs across web, mobile, and tablet platforms. I learned to translate complex requirements into intuitive solutions while aligning with business goals and branding standards.",
    "I also developed strong professional discipline and adaptability by working through real-world challenges, constant feedback, and tight deadlines. Collaborating with developers and marketing teams helped me improve my communication skills and confidently present and justify my design decisions.",
    "Overall, this experience taught me to take ownership of my work and think beyond just completing tasks. It strengthened my problem-solving abilities and prepared me to deliver meaningful, high-quality solutions in real-world environments.",
  ],
};

function DevelopmentPage() {
  return (
    <ZineLayout>
      <PageHeader no="05" title="Develop/ment" />

      <section className="border-brutal-b">
        {members.map((m, idx) => (
          <article key={m.key} className="grid grid-cols-12 border-brutal-b last:border-b-0">
            <div className={`col-span-12 border-brutal-b p-4 md:col-span-4 md:border-b-0 md:border-r-2 md:p-6 ${idx % 2 === 0 ? "" : "bg-ink text-paper"}`}>
              <div className="font-mono text-[10px] uppercase tracking-widest opacity-70">FILE.0{m.no}</div>
              <div className="mt-2 font-display text-4xl uppercase leading-none">{m.short}</div>
              <div className="mt-2 font-mono text-[10px] uppercase opacity-70">{m.name}</div>
              <div className="mt-4 font-mono text-[10px] uppercase tracking-widest">▌ LEARNING & DEVELOPMENT</div>
            </div>
            <div className="col-span-12 space-y-4 p-4 md:col-span-8 md:p-8">
              {learning[m.key].map((l, i) => (
                <p key={i} className="text-sm leading-relaxed">
                  <span className="font-mono text-xs font-bold">№{String(i + 1).padStart(2, "0")} ▸</span>{" "}
                  {l}
                </p>
              ))}
            </div>
          </article>
        ))}
      </section>

      <section className="grid grid-cols-3 border-brutal-b font-mono text-[11px] uppercase">
        <Link to="/deliverables" className="border-r-2 border-ink p-4 hover:bg-ink hover:text-paper">← 04 / DELIVERABLES</Link>
        <div className="border-r-2 border-ink p-4 text-center">PG.006 / 008</div>
        <Link to="/tools" className="p-4 text-right hover:bg-ink hover:text-paper">06 / TOOLS →</Link>
      </section>
    </ZineLayout>
  );
}
