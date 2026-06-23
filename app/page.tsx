import { ArrowUpRight, Calendar, CheckCircle2, GraduationCap, MapPin } from "lucide-react";
import { BackgroundEffects } from "@/components/BackgroundEffects";
import { ContactForm } from "@/components/ContactForm";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Section } from "@/components/Section";
import { about, contactLinks, education, experience, profile, projects, skills } from "@/data/constants";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <BackgroundEffects />
      <Navbar />
      <main>
        <Hero />

        <Section id="about" eyebrow="About" title={about.title}>
          <div className="mt-8 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="glass-card p-6">
              {about.paragraphs.map((paragraph, index) => (
                <p key={paragraph} className={`${index > 0 ? "mt-5 " : ""}text-lg leading-8 text-slate-300`}>
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="grid gap-4">
              {about.focusAreas.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded border border-line bg-panel/70 p-4">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-cyan" size={20} aria-hidden="true" />
                  <p className="text-slate-300">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Section id="skills" eyebrow="Skills" title="A practical stack for web, mobile, backend, and cloud.">
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {skills.map((group) => {
              const Icon = group.icon;
              return (
                <article key={group.title} className="glass-card p-5 transition hover:-translate-y-1 hover:border-cyan/35">
                  <div className="mb-5 flex items-center gap-3">
                    <span className="grid h-11 w-11 place-items-center rounded bg-cyan/12 text-cyan ring-1 ring-cyan/25">
                      <Icon size={21} aria-hidden="true" />
                    </span>
                    <h3 className="text-lg font-semibold text-white">{group.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span key={item} className="rounded border border-line bg-ink/70 px-3 py-2 text-sm text-slate-300">
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </Section>

        <Section id="experience" eyebrow="Experience" title="Google Summer of Code 2026 with OpenELIS Global.">
          <article className="mt-8 overflow-hidden rounded border border-cyan/25 bg-[linear-gradient(135deg,rgba(62,231,214,0.12),rgba(244,184,96,0.08)_48%,rgba(255,122,107,0.08))] shadow-glow">
            <div className="grid gap-0 lg:grid-cols-[0.7fr_1.3fr]">
              <div className="border-b border-line p-6 lg:border-b-0 lg:border-r">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan">{experience.program}</p>
                <h3 className="mt-4 text-3xl font-semibold text-white">{experience.company}</h3>
                <p className="mt-3 text-lg text-slate-200">{experience.role}</p>
                <div className="mt-6 flex items-center gap-2 text-slate-300">
                  <Calendar size={18} aria-hidden="true" />
                  {experience.duration}
                </div>
              </div>
              <div className="p-6">
                <ol className="relative grid gap-5 border-l border-cyan/25 pl-6">
                  {experience.highlights.map((item) => (
                    <li key={item} className="relative text-slate-300">
                      <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full bg-cyan ring-4 ring-ink" />
                      {item}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </article>
        </Section>

        <Section id="projects" eyebrow="Projects" title="Selected products with measurable performance impact.">
          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {projects.map((project) => (
              <article key={project.name} className="glass-card flex flex-col p-6 transition hover:-translate-y-1 hover:border-gold/35">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-white">{project.name}</h3>
                    <p className="mt-2 text-slate-300">{project.role}</p>
                  </div>
                  <span className="rounded border border-gold/25 bg-gold/10 px-3 py-1 text-sm text-gold">{project.duration}</span>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="rounded bg-white/[0.07] px-3 py-1.5 text-sm text-slate-300">
                      {tech}
                    </span>
                  ))}
                </div>
                <ul className="mt-6 grid gap-3 text-slate-300">
                  {project.highlights.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-coral" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-7 flex gap-3">
                  <a className="button-secondary" href={project.github} target="_blank" rel="noreferrer">
                    GitHub
                    <ArrowUpRight size={17} aria-hidden="true" />
                  </a>
                  <a className="button-secondary" href={project.liveDemo} aria-label={`${project.name} live demo`}>
                    Live Demo
                    <ArrowUpRight size={17} aria-hidden="true" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section id="education" eyebrow="Education" title="Academic foundation in information technology.">
          <div className="mt-8 rounded border border-line bg-panel/75 p-6">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded bg-cyan/12 text-cyan ring-1 ring-cyan/25">
                  <GraduationCap size={24} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {education.degree}, {education.school}
                  </h3>
                  <p className="mt-2 flex items-center gap-2 text-slate-400">
                    <MapPin size={16} aria-hidden="true" />
                    {education.location}
                  </p>
                </div>
              </div>
              <span className="rounded border border-line px-4 py-2 text-sm text-slate-300">{education.duration}</span>
            </div>
          </div>
        </Section>

        <Section id="contact" eyebrow="Contact" title="Let’s build something useful, scalable, and clean.">
          <div className="mt-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="grid gap-3">
              {contactLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                    className="flex items-center gap-4 rounded border border-line bg-white/[0.045] p-4 transition hover:border-cyan/35 hover:bg-white/[0.07]"
                  >
                    <span className="grid h-11 w-11 place-items-center rounded bg-cyan/12 text-cyan">
                      <Icon size={20} aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-sm text-slate-400">{link.label}</span>
                      <span className="break-all font-medium text-white">{link.value}</span>
                    </span>
                  </a>
                );
              })}
            </div>
            <ContactForm />
          </div>
        </Section>
      </main>

      <footer className="border-t border-line px-5 py-8 text-center text-sm text-slate-400 sm:px-8">
        <p>© 2026 {profile.name}. Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.</p>
        <div className="mt-3 flex justify-center gap-4">
          <a className="hover:text-cyan" href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a className="hover:text-cyan" href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </footer>
    </>
  );
}
