import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projectsData } from "@/lib/data";

type ProjectPageProps = { params: { slug: string } };

export function generateStaticParams() {
  return projectsData.map(({ slug }) => ({ slug }));
}

export function generateMetadata({ params }: ProjectPageProps) {
  const project = projectsData.find(({ slug }) => slug === params.slug);
  return project
    ? { title: `${project.title} — Youssef Bayoume`, description: project.overview }
    : { title: "Project — Youssef Bayoume" };
}

export default function ProjectDetailsPage({ params }: ProjectPageProps) {
  const projectIndex = projectsData.findIndex(({ slug }) => slug === params.slug);
  if (projectIndex < 0) notFound();

  const project = projectsData[projectIndex];
  const nextProject = projectsData[(projectIndex + 1) % projectsData.length];

  return (
    <main className="project-detail-page">
      <article className="project-detail">
        <Link href="/#projects" className="back-link"><span aria-hidden="true">←</span> All projects</Link>

        <header className="project-detail-header">
          <p className="section-kicker">PROJECT · {project.period}</p>
          <h1>{project.title}</h1>
          <p className="project-detail-lede">{project.overview}</p>
          <div className="project-detail-meta">
            <div><span>ROLE</span><strong>{project.role}</strong></div>
            <div><span>FOCUS</span><strong>{project.tags.slice(0, 3).join(" · ")}</strong></div>
          </div>
        </header>

        <div className="project-detail-visual">
          {project.imageUrl ? (
            <Image src={project.imageUrl} alt={`${project.title} project preview`} fill priority sizes="(max-width: 900px) 100vw, 940px" />
          ) : (
            <div className="project-detail-placeholder" aria-hidden="true">{project.title}</div>
          )}
        </div>

        <div className="project-detail-grid">
          <section className="project-detail-copy">
            <p className="section-kicker">OVERVIEW</p>
            <h2>What the project does</h2>
            <p>{project.description}</p>
          </section>
          <section className="project-detail-copy">
            <p className="section-kicker">CONTRIBUTIONS</p>
            <h2>My work</h2>
            <ul className="contribution-list">
              {project.contributions.map((contribution) => <li key={contribution}>{contribution}</li>)}
            </ul>
          </section>
        </div>

        <section className="project-detail-stack">
          <p className="section-kicker">TOOLS & TECHNOLOGY</p>
          <ul className="project-tags">{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
        </section>

        <nav className="project-detail-next flex-row-reverse" aria-label="Project navigation">
          <Link href={`/projects/${nextProject.slug}`}>
            <span className="section-kicker">NEXT PROJECT</span>
            <strong>{nextProject.title} <span aria-hidden="true">→</span></strong>
          </Link>
          {project.url && <a href={project.url} target="_blank" rel="noreferrer" className="button-primary">Visit live project <span aria-hidden="true">↗</span></a>}
        </nav>
      </article>
    </main>
  );
}
