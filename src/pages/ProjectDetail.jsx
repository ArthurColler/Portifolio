import { Link, useParams, Navigate } from 'react-router-dom'
import PageTransition from '../components/PageTransition.jsx'
import SectionReveal from '../components/SectionReveal.jsx'
import MediaPlaceholder from '../components/MediaPlaceholder.jsx'
import { getProjectBySlug, projects } from '../data/projects.js'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = getProjectBySlug(slug)

  if (!project) return <Navigate to="/projetos" replace />

  const others = projects.filter((p) => p.slug !== slug).slice(0, 2)

  return (
    <PageTransition>
      <section className="mx-auto max-w-4xl px-6 pt-36 pb-10">
        <Link to="/projetos" className="text-sm text-slate-400 hover:text-accent transition-colors">
          ← Voltar para projetos
        </Link>
        <SectionReveal>
          <div className="flex flex-wrap gap-2 mt-6 mb-4">
            {project.tags.map((tag) => (
              <span key={tag} className="text-[11px] uppercase tracking-wide text-accent/80 bg-accent/10 px-2 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-3xl md:text-4xl font-semibold">{project.title}</h1>
          <p className="text-slate-400 mt-4 max-w-2xl">{project.summary}</p>
        </SectionReveal>
      </section>

      <SectionReveal className="mx-auto max-w-4xl px-6 pb-12">
        <MediaPlaceholder
          variant={project.mediaVariant ?? 'image'}
          label={project.mediaLabel}
          className="aspect-video w-full"
        />
      </SectionReveal>

      <section className="mx-auto max-w-4xl px-6 pb-16 grid md:grid-cols-[1.4fr,1fr] gap-10">
        <SectionReveal>
          <h2 className="text-xl font-semibold mb-4">Sobre o projeto</h2>
          <p className="text-slate-300 leading-relaxed">{project.description}</p>
        </SectionReveal>

        <SectionReveal delay={0.1} className="card-surface rounded-2xl p-6 h-fit">
          <h3 className="text-sm uppercase tracking-wide text-slate-500 mb-4">Stack utilizada</h3>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.stack.map((s) => (
              <span key={s} className="text-xs px-3 py-1.5 rounded-full bg-white/5 text-slate-300">
                {s}
              </span>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            {project.links.repo ? (
              <a
                href={project.links.repo}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-center px-4 py-2 rounded-full border border-white/10 hover:bg-white/5 transition-colors"
              >
                Ver repositório
              </a>
            ) : (
              <span className="text-xs text-slate-500 text-center">Adicione o link do repositório quando tiver</span>
            )}
            {project.links.demo ? (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-center px-4 py-2 rounded-full bg-accent text-base-950 font-medium"
              >
                Ver demonstração
              </a>
            ) : (
              <span className="text-xs text-slate-500 text-center">Adicione o link da demo quando tiver</span>
            )}
          </div>
        </SectionReveal>
      </section>

      {others.length > 0 && (
        <section className="mx-auto max-w-4xl px-6 pb-28">
          <SectionReveal>
            <h2 className="text-xl font-semibold mb-6">Outros projetos</h2>
          </SectionReveal>
          <div className="flex flex-wrap gap-4">
            {others.map((p) => (
              <Link
                key={p.slug}
                to={`/projetos/${p.slug}`}
                className="card-surface rounded-xl px-5 py-4 hover:border-accent/30 transition-colors flex-1 min-w-[200px]"
              >
                <p className="text-sm text-white font-medium">{p.title}</p>
                <p className="text-xs text-slate-500 mt-1 line-clamp-1">{p.summary}</p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </PageTransition>
  )
}
