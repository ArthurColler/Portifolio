const socials = [
  { label: 'GitHub', href: 'https://github.com/seu-usuario' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/seu-usuario' },
  { label: 'E-mail', href: 'mailto:seuemail@exemplo.com' },
]

export default function Footer() {
  return (
    <footer className="border-t border-white/5 mt-24">
      <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} Seu Nome — feito com café e curiosidade por dados.
        </p>
        <div className="flex gap-5">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-slate-400 hover:text-accent transition-colors"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
