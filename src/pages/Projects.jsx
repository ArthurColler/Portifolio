import { useMemo, useState } from 'react'
import PageTransition from '../components/PageTransition.jsx'
import SectionReveal from '../components/SectionReveal.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import { projects } from '../data/projects.js'

export default function Projects() {
  const categories = useMemo(() => {
    const all = new Set(['Todos'])
    projects.forEach((p) => p.tags.forEach((t) => all.add(t)))
    return Array.from(all)
  }, [])

  const [active, setActive] = useState('Todos')

  const filtered = active === 'Todos' ? projects : projects.filter((p) => p.tags.includes(active))

  return (
    <PageTransition>
      <section className="mx-auto max-w-6xl px-6 pt-36 pb-8">
        <p className="text-accent text-sm font-medium uppercase tracking-wide mb-3">Portfólio</p>
        <h1 className="text-3xl md:text-4xl font-semibold mb-4">Projetos</h1>
        <p className="text-slate-400 max-w-2xl">
          Uma seleção de trabalhos que mostram como eu penso e resolvo problemas com dados.
          Clique em qualquer card para ver os detalhes.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-8">
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded-full text-sm transition-colors ${
                active === cat
                  ? 'bg-accent text-base-950 font-medium'
                  : 'card-surface text-slate-300 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-28">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <SectionReveal key={project.slug} delay={i * 0.06}>
              <ProjectCard project={project} index={i} />
            </SectionReveal>
          ))}
        </div>
        {filtered.length === 0 && (
          <p className="text-slate-500 text-center py-16">Nenhum projeto nessa categoria ainda.</p>
        )}
      </section>
    </PageTransition>
  )
}
