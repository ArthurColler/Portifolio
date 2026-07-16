import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition.jsx'
import SectionReveal from '../components/SectionReveal.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import MediaPlaceholder from '../components/MediaPlaceholder.jsx'
import { projects } from '../data/projects.js'
import profilePhoto from '../assets/profile.png'

const skills = ['Make.com', 'n8n', 'Python', 'SQL', 'PostgreSQL', 'APIs REST']

export default function Home() {
  const featured = projects.slice(0, 3)

  return (
    <PageTransition>
      <section className="mx-auto max-w-6xl px-6 pt-40 pb-24 grid md:grid-cols-[1.2fr,0.8fr] gap-12 items-center">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-accent text-sm font-medium tracking-wide uppercase mb-4"
          >
            Olá, eu sou
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="text-4xl md:text-6xl font-semibold leading-tight"
          >
            Arthur Santos, <span className="text-gradient">Analista de TI</span> que gosta de automatizar o
            chato e deixar o dado fazer sentido
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6 text-lg text-slate-400 max-w-xl"
          >
            Trabalho na fronteira entre suporte técnico, automação de processos (RPA) e dados —
            construindo integrações com Make.com e n8n, escrevendo consultas SQL e montando
            dashboards que ajudam gente de verdade a tomar decisão mais rápido.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <Link
              to="/projetos"
              className="px-6 py-3 rounded-full bg-accent text-base-950 font-medium hover:shadow-glow transition-shadow"
            >
              Ver meus projetos
            </Link>
            <Link
              to="/contato"
              className="px-6 py-3 rounded-full border border-white/10 text-slate-200 hover:bg-white/5 transition-colors"
            >
              Falar comigo
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <MediaPlaceholder
            src={profilePhoto}
            alt="Foto de Arthur Santos"
            className="aspect-square w-full"
          />
        </motion.div>
      </section>

      <SectionReveal className="mx-auto max-w-6xl px-6 pb-24">
        <p className="text-sm uppercase tracking-wide text-slate-500 mb-4">Ferramentas que uso</p>
        <div className="flex flex-wrap gap-3">
          {skills.map((s) => (
            <span key={s} className="px-4 py-2 rounded-full text-sm card-surface text-slate-300">
              {s}
            </span>
          ))}
        </div>
      </SectionReveal>

      <section className="mx-auto max-w-6xl px-6 pb-28">
        <SectionReveal className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">Projetos em destaque</h2>
            <p className="text-slate-400 mt-2">Uma amostra do que já coloquei em prática.</p>
          </div>
          <Link to="/projetos" className="hidden md:block text-sm text-accent hover:underline">
            Ver todos →
          </Link>
        </SectionReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((project, i) => (
            <SectionReveal key={project.slug} delay={i * 0.08}>
              <ProjectCard project={project} index={i} />
            </SectionReveal>
          ))}
        </div>
      </section>
    </PageTransition>
  )
}
