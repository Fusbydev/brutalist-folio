import { createFileRoute, Link } from "@tanstack/react-router";
import { ZineLayout, PageHeader } from "@/components/zine/Layout";
import { members, TBD } from "@/data/members";

import milaImg from "@/lib/assets/milajpg.jpg";
import lloydImg from "@/lib/assets/lloyd.jpg";
import kirkImg from "@/lib/assets/kirk.jpg";
import obinaImg from "@/lib/assets/holy.jpg";

const memberImages: Record<string, string> = {
  abadinas: milaImg,
  angara: lloydImg,
  fabon: kirkImg,
  obina: obinaImg, // Placeholder or missing
};

export const Route = createFileRoute("/profile")({
  component: ProfilePage,
  head: () => ({
    meta: [
      { title: "01 / Student Profiles — OJT E-Portfolio" },
      { name: "description", content: "Profiles of the four BSIT student trainees: identity, academic background, and career aspirations." },
      { property: "og:title", content: "Student Profiles / OJT E-Portfolio" },
    ],
  }),
});

const bios: Record<string, string[]> = {
  abadinas: [
    "I am a fourth-year Bachelor of Science in Information Technology student with a strong interest in web development and system design. Throughout my academic journey, I have developed skills in building responsive web applications using technologies such as HTML, CSS, JavaScript, PHP, and Laravel. I have also gained experience in database management and API integration, allowing me to understand how different components of a system work together in real-world applications.",
    "During my internship, I was exposed to hands-on development tasks, including system testing, debugging, and API simulation. This experience strengthened my problem-solving skills and taught me how to work in a collaborative and professional environment. It also gave me a clearer understanding of industry practices and the importance of writing efficient and reliable code.",
    "As I pursue my career in the IT field, I aim to become a skilled backend developer or data analyst. I am committed to continuous learning and improving my technical abilities, with the goal of contributing to innovative and impactful technology solutions in the future.",
  ],
  angara: [
    "I am a fourth-year Bachelor of Science in Information Technology student wanting to break through the world of data analytics. My name is Lloyd Aldrich A. Angara, and I am currently a student trainee from the Technological Institute of the Philippines completing my practicum at Cocogen Insurance, Inc.",
    "During my internship, I have actively built a strong technical foundation in database management by writing and validating SQL queries via Toad, joining multiple tables to generate reports, and modifying scripts to detect data inconsistencies. I am highly experienced in data cleansing and validation, frequently utilizing Excel functions like VLOOKUP to match user information across multiple source files.",
    "In addition to handling data, I have gained practical experience with API testing and troubleshooting. I have managed and tested API JSON payloads using Postman, mapped data, and conducted deep-dive diagnostics to isolate critical backend timeouts and database-level deadlocks.",
    "To deliberately prepare for a career in data analytics, I proactively practice Python programming and have been applying machine learning and data visualization techniques using the Matplotlib library in Google Colab.",
  ],
  fabon: [
    "As a 4th-year BSIT student committed to making a tangible impact on the digital landscape, I am Kirk Alou John F. Fabon, a developer specializing in backend programming. Throughout my academic career, I have engineered a diverse range of websites, mobile applications, and APIs, spanning from rigorous school assignments to ambitious personal projects. While I am highly adaptable across various programming languages, my core expertise lies in the Laravel framework.",
    "During my internship, I gained extensive experience building systems and automations. This hands-on environment significantly sharpened my skills in debugging, testing, and deployment. Beyond technical growth, I learned the vital importance of writing clean, maintainable code and collaborating effectively within a team. I am now ready to face real-world challenges.",
    "I am driven by a deep curiosity to understand how technology works and a commitment to building reliable, functional systems that improve the digital experience for everyone.",
  ],
  obina: [
    "I am a fourth-year Bachelor of Science in Information Technology student driven by a passion for building systems that are not only functional but also intuitive and user-centered. I specialize in both frontend and backend development, with hands-on experience in UI/UX design allowing me to create complete, scalable solutions that balance performance with user experience.",
    "During my internship, I was actively involved in UI/UX design, where I contributed to improving system interfaces, user flows, and overall usability. I worked on designing and refining layouts, ensuring that applications are visually clear, accessible, and aligned with user needs. In addition, I gained experience in system testing, debugging, and documentation, strengthening my ability to deliver reliable and efficient solutions in a professional environment.",
    "My strength lies in combining technical skills with design thinking. I do not only focus on how a system works, but also on how users interact with it. This approach allows me to develop applications that are both effective and engaging. I am also capable of working collaboratively, communicating ideas clearly, and taking initiative when solving complex problems.",
    "As I continue to grow in the field of technology, I aim to become a well-rounded system developer with strong expertise in backend engineering and user experience design. My goal is to build impactful digital solutions that improve how people interact with technology and deliver meaningful results..",
  ],
};

function ProfilePage() {
  return (
    <ZineLayout>
      <PageHeader no="01" title="Student/Profiles" />

      <section className="border-brutal-b grid grid-cols-1 md:grid-cols-2">
        {members.map((m, idx) => (
          <article
            key={m.key}
            className={`border-b-2 border-ink p-0 last:border-b-0 md:p-0 ${idx % 2 === 0 ? "md:border-r-2" : ""} ${idx < 2 ? "md:border-b-2" : "md:border-b-0"}`}
          >
            {/* Portrait slot */}
            <div className="relative aspect-[4/3] overflow-hidden border-brutal-b bg-newsprint">
              {memberImages[m.key] ? (
                <img
                  src={memberImages[m.key]}
                  alt={m.name}
                  className="h-full w-full object-cover grayscale contrast-125"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="border-brutal bg-paper px-3 py-2 font-mono text-[10px] uppercase tracking-widest">
                    ▣ PHOTO SLOT — {m.short}
                  </div>
                </div>
              )}
              <div className="halftone-dense absolute inset-0 photocopy pointer-events-none" />
              <div className="absolute right-3 top-3 border-brutal bg-paper px-2 py-1 font-mono text-[10px] uppercase">
                ID — 2025/00{m.no}
              </div>
              <div className="absolute bottom-3 left-3 font-mono text-[10px] bg-paper/80 px-1 uppercase tracking-widest">
                FIG.0{m.no} — IDENTIFICATION PORTRAIT
              </div>
            </div>

            {/* Info table */}
            <table className="w-full border-collapse font-mono text-[11px] uppercase">
              <tbody>
                <tr className="border-brutal-b">
                  <th className="w-28 border-r-2 border-ink bg-ink p-3 text-left text-paper">№</th>
                  <td className="p-3 font-bold">{m.no} / 04</td>
                </tr>
                <tr className="border-brutal-b">
                  <th className="w-28 border-r-2 border-ink bg-ink p-3 text-left text-paper">NAME</th>
                  <td className="p-3 font-bold">{m.name}</td>
                </tr>
                <tr className="border-brutal-b">
                  <th className="w-28 border-r-2 border-ink bg-ink p-3 text-left text-paper">COURSE</th>
                  <td className="p-3">BS / INFORMATION TECHNOLOGY</td>
                </tr>
                <tr className="border-brutal-b">
                  <th className="w-28 border-r-2 border-ink bg-ink p-3 text-left text-paper">YEAR</th>
                  <td className="p-3">4TH YEAR</td>
                </tr>
                <tr className="border-brutal-b">
                  <th className="w-28 border-r-2 border-ink bg-ink p-3 text-left text-paper">EMAIL</th>
                  <td className="p-3 normal-case">{m.email ?? "— PENDING —"}</td>
                </tr>
              </tbody>
            </table>

            {/* Bio */}
            <div className="space-y-4 p-4 md:p-6">
              <div className="font-mono text-[10px] uppercase tracking-widest">¶ BIOGRAPHY</div>
              {bios[m.key].map((p, i) => (
                <p key={i} className="font-sans text-sm leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          </article>
        ))}
      </section>

      <section className="grid grid-cols-3 border-brutal-b font-mono text-[11px] uppercase">
        <Link to="/" className="border-r-2 border-ink p-4 hover:bg-ink hover:text-paper">← INDEX</Link>
        <div className="border-r-2 border-ink p-4 text-center">PG.002 / 008</div>
        <Link to="/company" className="p-4 text-right hover:bg-ink hover:text-paper">02 / COMPANY →</Link>
      </section>
    </ZineLayout>
  );
}
