import PageTransition from '../components/PageTransition.jsx'
import SectionReveal from '../components/SectionReveal.jsx'
import MediaPlaceholder from '../components/MediaPlaceholder.jsx'

const skillGroups = [
  { title: 'Automação & Integrações', items: ['Make.com', 'n8n', 'RPA', 'Webhooks', 'APIs RESTful', 'Meta Cloud API'] },
  { title: 'Dados & BI', items: ['SQL', 'PostgreSQL', 'SQL Server', 'PgAdmin', 'DBeaver', 'Dashboards (BI)', 'ETL'] },
  { title: 'Desenvolvimento', items: ['Python', 'Node.js', 'Bash', 'Flutter', 'Dart'] },
  { title: 'Infra & Suporte', items: ['GCP', 'Docker', 'WinSCP/Putty', 'Suporte N1/N2/N3', 'Sistemas ERP'] },
  { title: 'Gestão & IA', items: ['monday.com', 'Modelagem de Processos', 'Documentação Técnica', 'IA (LLMs) aplicada à automação'] },
]

const experience = [
  {
    role: 'Analista de Sistemas',
    company: 'Media Portal Soluções',
    period: 'Março de 2026 – Atual',
    bullets: [
      'Suporte N2/N3 para sistema de gestão de ativos digitais (MAM), com diagnóstico de incidentes complexos via análise de logs.',
      'Desenvolvimento de integrações via Webhooks e APIs RESTful entre a plataforma proprietária e ferramentas de terceiros.',
    ],
  },
  {
    role: 'Analista de Automações e RPA',
    company: 'Syllos Company',
    period: 'Setembro de 2025 – Março de 2026',
    bullets: [
      'Criação e manutenção de fluxos de integração via Make.com, automatizando a ingestão de dados de fontes heterogêneas.',
      'Estruturação lógica de dados no ecossistema monday.com, transformando fluxos brutos em fontes organizadas para dashboards.',
    ],
  },
  {
    role: 'Analista de Suporte de TI',
    company: 'Globalthings Tecnologia',
    period: 'Novembro de 2023 – Fevereiro de 2025',
    bullets: [
      'Ponto focal técnico do sistema interno da empresa (tipo ERP), referência para toda a equipe de suporte.',
      'Desenvolvimento e manutenção de dashboards de BI via PostgreSQL/PgAdmin, garantindo a precisão dos indicadores.',
    ],
  },
  {
    role: 'Estagiário de TI',
    company: 'SVM Negócios Imobiliários',
    period: 'Abril de 2023 – Novembro de 2023',
    bullets: ['Suporte técnico em ambiente corporativo, com atendimento direto a usuários e manutenção de redes locais.'],
  },
  {
    role: 'Técnico de TI',
    company: 'Atuação autônoma',
    period: 'Janeiro de 2021 – Dezembro de 2021',
    bullets: ['Suporte técnico e manutenção preventiva em ambiente de cartório, incluindo redes locais e organização de processos.'],
  },
]

const education = [
  { year: '2021 – Jul/2026', title: 'Engenharia de Computação', place: 'Centro Universitário FAM (em andamento)' },
  { year: '2018 – 2020', title: 'Técnico Integrado em Informática', place: 'FECAP' },
]

const certificates = [
  'Make Partners (Dev) — Level 1 ao Level 3',
  'Monday CRM — Básico ao Expert',
  'Python do Básico ao Avançado — Udemy/Geek University (64h)',
]

const languages = ['Português (Nativo)', 'Inglês (Avançado)', 'Francês (Básico, em andamento)']

export default function About() {
  return (
    <PageTransition>
      <section className="mx-auto max-w-5xl px-6 pt-36 pb-20 grid md:grid-cols-[0.9fr,1.1fr] gap-12 items-start">
        <SectionReveal>
          <MediaPlaceholder
            label="Substitua por uma foto sua, sem frescura, retrato 3:4"
            className="aspect-[3/4] w-full max-w-sm"
          />
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <p className="text-accent text-sm font-medium uppercase tracking-wide mb-3">Sobre mim</p>
          <h1 className="text-3xl md:text-4xl font-semibold mb-6">
            Prazer, sou <span className="text-gradient">Arthur Santos</span> — e curto automatizar o que é chato
          </h1>
          <div className="space-y-4 text-slate-300 leading-relaxed">
            <p>
              Hoje atuo como Analista de Sistemas, mas no fundo sou aquele tipo de profissional que
              não resiste a um processo manual repetitivo sem pensar em como automatizá-lo. Comecei
              no suporte técnico — resolvendo rede, ensinando gente a usar sistema tipo ERP — e fui
              migrando naturalmente para automação (RPA), integrações via API/webhook e análise de
              dados. Hoje trabalho bastante com Make.com, n8n, SQL e dashboards de BI.
            </p>
            <p>
              Sou formado quase 100% em Engenharia de Computação pelo Centro Universitário FAM
              (conclusão prevista para julho de 2026), com base técnica desde o Técnico Integrado em
              Informática na FECAP. Gosto de aprender fazendo: boa parte do que sei sobre automação e
              IA aplicada veio de resolver problema real no trabalho, não só de curso. Se o assunto é
              tirar um processo manual do caminho ou fazer um dado contar uma história, pode chamar.
            </p>
          </div>
        </SectionReveal>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-20">
        <SectionReveal>
          <h2 className="text-2xl font-semibold mb-8">Conhecimentos e habilidades</h2>
        </SectionReveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, i) => (
            <SectionReveal key={group.title} delay={i * 0.08} className="card-surface rounded-2xl p-6">
              <h3 className="text-base font-semibold text-white mb-4">{group.title}</h3>
              <ul className="space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="text-sm text-slate-400 flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </SectionReveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-20">
        <SectionReveal>
          <h2 className="text-2xl font-semibold mb-10">Experiência profissional</h2>
        </SectionReveal>
        <div className="relative border-l border-white/10 ml-2 space-y-10">
          {experience.map((job, i) => (
            <SectionReveal key={job.role + job.company} delay={i * 0.06} className="pl-8 relative">
              <span className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full bg-accent" />
              <p className="text-sm text-accent font-medium mb-1">{job.period}</p>
              <h3 className="text-lg font-semibold text-white">
                {job.role} <span className="text-slate-500 font-normal">— {job.company}</span>
              </h3>
              <ul className="mt-2 space-y-1.5 max-w-2xl">
                {job.bullets.map((b) => (
                  <li key={b} className="text-slate-400 text-sm">
                    {b}
                  </li>
                ))}
              </ul>
            </SectionReveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-28 grid md:grid-cols-2 gap-10">
        <SectionReveal>
          <h2 className="text-xl font-semibold mb-6">Formação</h2>
          <div className="space-y-5">
            {education.map((e) => (
              <div key={e.title}>
                <p className="text-sm text-accent font-medium">{e.year}</p>
                <p className="text-white font-medium">{e.title}</p>
                <p className="text-sm text-slate-500">{e.place}</p>
              </div>
            ))}
          </div>

          <h3 className="text-sm uppercase tracking-wide text-slate-500 mt-8 mb-3">Idiomas</h3>
          <div className="flex flex-wrap gap-2">
            {languages.map((l) => (
              <span key={l} className="text-xs px-3 py-1.5 rounded-full bg-white/5 text-slate-300">
                {l}
              </span>
            ))}
          </div>
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <h2 className="text-xl font-semibold mb-6">Certificados</h2>
          <ul className="space-y-3">
            {certificates.map((c) => (
              <li key={c} className="text-sm text-slate-400 flex items-start gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent shrink-0 mt-1.5" />
                {c}
              </li>
            ))}
          </ul>
        </SectionReveal>
      </section>
    </PageTransition>
  )
}
