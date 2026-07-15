import PageTransition from '../components/PageTransition.jsx'
import SectionReveal from '../components/SectionReveal.jsx'
import MediaPlaceholder from '../components/MediaPlaceholder.jsx'

const skillGroups = [
  { title: 'Análise & BI', items: ['Excel Avançado', 'Power BI', 'Google Data Studio', 'DAX'] },
  { title: 'Dados & Código', items: ['SQL', 'Python', 'Pandas', 'Estatística aplicada'] },
  { title: 'Soft skills', items: ['Storytelling de dados', 'Comunicação com stakeholders', 'Curiosidade investigativa'] },
]

const timeline = [
  { year: '20XX', title: 'Graduação em [seu curso]', detail: 'Conte o que mais gostou de estudar e por que escolheu essa área.' },
  { year: '20XX', title: 'Primeira experiência com dados', detail: 'Fale sobre o projeto, estágio ou curso que te fez se apaixonar por análise.' },
  { year: '20XX', title: 'Certificações e cursos', detail: 'Liste cursos/certificações relevantes (ex: Power BI, SQL, Python para dados).' },
  { year: 'Hoje', title: 'Onde você está agora', detail: 'Descreva seu momento atual: o que estuda, o que busca, que tipo de vaga/projeto te interessa.' },
]

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
            Prazer, sou <span className="text-gradient">Seu Nome</span> — e curto dado que conta uma história
          </h1>
          <div className="space-y-4 text-slate-300 leading-relaxed">
            <p>
              Escreva aqui sua apresentação com a sua voz: quem você é fora do trabalho, o que te
              trouxe até a análise de dados e o que você acha mais interessante nessa área. Pode
              ser descontraído — este é o espaço para mostrar personalidade, não só currículo.
            </p>
            <p>
              Fale também sobre sua formação (curso, faculdade, ano) e o que estuda atualmente
              (cursos, certificações, temas que está aprofundando). Termine contextualizando o tipo
              de problema ou vaga que você está buscando agora.
            </p>
          </div>
        </SectionReveal>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-20">
        <SectionReveal>
          <h2 className="text-2xl font-semibold mb-8">Conhecimentos e habilidades</h2>
        </SectionReveal>
        <div className="grid sm:grid-cols-3 gap-6">
          {skillGroups.map((group, i) => (
            <SectionReveal key={group.title} delay={i * 0.1} className="card-surface rounded-2xl p-6">
              <h3 className="text-base font-semibold text-white mb-4">{group.title}</h3>
              <ul className="space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="text-sm text-slate-400 flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </SectionReveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-28">
        <SectionReveal>
          <h2 className="text-2xl font-semibold mb-10">Minha trajetória</h2>
        </SectionReveal>
        <div className="relative border-l border-white/10 ml-2 space-y-10">
          {timeline.map((item, i) => (
            <SectionReveal key={item.title} delay={i * 0.08} className="pl-8 relative">
              <span className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full bg-accent" />
              <p className="text-sm text-accent font-medium mb-1">{item.year}</p>
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="text-slate-400 mt-1 max-w-xl">{item.detail}</p>
            </SectionReveal>
          ))}
        </div>
      </section>
    </PageTransition>
  )
}
