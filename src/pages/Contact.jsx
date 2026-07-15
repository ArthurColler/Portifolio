import PageTransition from '../components/PageTransition.jsx'
import SectionReveal from '../components/SectionReveal.jsx'

const channels = [
  { label: 'E-mail', value: 'seuemail@exemplo.com', href: 'mailto:seuemail@exemplo.com' },
  { label: 'LinkedIn', value: 'linkedin.com/in/seu-usuario', href: 'https://linkedin.com/in/seu-usuario' },
  { label: 'GitHub', value: 'github.com/seu-usuario', href: 'https://github.com/seu-usuario' },
]

export default function Contact() {
  return (
    <PageTransition>
      <section className="mx-auto max-w-4xl px-6 pt-36 pb-16 text-center">
        <SectionReveal>
          <p className="text-accent text-sm font-medium uppercase tracking-wide mb-3">Contato</p>
          <h1 className="text-3xl md:text-4xl font-semibold mb-4">Bora trocar uma ideia?</h1>
          <p className="text-slate-400 max-w-xl mx-auto">
            Se você chegou até aqui, já viu um pouco do que eu faço. Manda uma mensagem — sobre uma
            vaga, um projeto ou só para trocar ideia sobre dados.
          </p>
        </SectionReveal>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-14">
        <SectionReveal className="grid sm:grid-cols-3 gap-4">
          {channels.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noreferrer"
              className="card-surface rounded-2xl p-5 text-center hover:border-accent/30 transition-colors"
            >
              <p className="text-xs uppercase tracking-wide text-slate-500 mb-2">{c.label}</p>
              <p className="text-sm text-white break-all">{c.value}</p>
            </a>
          ))}
        </SectionReveal>
      </section>

      <section className="mx-auto max-w-2xl px-6 pb-28">
        <SectionReveal className="card-surface rounded-2xl p-8">
          <h2 className="text-lg font-semibold mb-1">Ou deixe uma mensagem</h2>
          <p className="text-xs text-slate-500 mb-6">
            Este formulário é só visual por enquanto — para receber as mensagens de verdade,
            conecte-o a um serviço como Formspree, Getform ou um backend próprio.
          </p>
          <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault()
            }}
          >
            <div>
              <label className="block text-sm text-slate-400 mb-1.5" htmlFor="name">
                Nome
              </label>
              <input
                id="name"
                type="text"
                placeholder="Como você se chama?"
                className="w-full rounded-xl bg-base-800 border border-white/10 px-4 py-2.5 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-accent/50"
              />
            </div>
            <div>
              <label className="block text-sm text-slate-400 mb-1.5" htmlFor="email">
                E-mail
              </label>
              <input
                id="email"
                type="email"
                placeholder="seu@email.com"
                className="w-full rounded-xl bg-base-800 border border-white/10 px-4 py-2.5 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-accent/50"
              />
            </div>
            <div>
              <label className="block text-sm text-slate-400 mb-1.5" htmlFor="message">
                Mensagem
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Conte um pouco sobre o motivo do contato"
                className="w-full rounded-xl bg-base-800 border border-white/10 px-4 py-2.5 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-accent/50 resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 rounded-full bg-accent text-base-950 font-medium hover:shadow-glow transition-shadow"
            >
              Enviar mensagem
            </button>
          </form>
        </SectionReveal>
      </section>
    </PageTransition>
  )
}
