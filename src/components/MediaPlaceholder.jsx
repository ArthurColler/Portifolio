// Bloco visual reutilizável no lugar de uma imagem/vídeo real.
// Troque por um <img> ou <video> assim que tiver a mídia do projeto —
// o texto abaixo já indica a proporção/tamanho recomendado.
export default function MediaPlaceholder({
  label = 'Substitua por uma imagem 1200×800',
  variant = 'image',
  className = '',
  seed = 0,
}) {
  const gradients = [
    'from-accent/25 via-base-800 to-base-900',
    'from-fuchsia-500/15 via-base-800 to-base-900',
    'from-sky-500/20 via-base-800 to-base-900',
    'from-amber-400/15 via-base-800 to-base-900',
  ]
  const gradient = gradients[seed % gradients.length]

  return (
    <div
      className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${gradient} border border-white/5 flex items-center justify-center ${className}`}
    >
      <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] [background-size:18px_18px]" />
      <div className="relative flex flex-col items-center gap-2 px-6 text-center">
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/5 text-accent">
          {variant === 'video' ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M8 6.5v11l9-5.5-9-5.5Z" fill="currentColor" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <rect x="3.5" y="4.5" width="17" height="15" rx="2" stroke="currentColor" strokeWidth="1.6" />
              <circle cx="8.5" cy="9.5" r="1.5" fill="currentColor" />
              <path d="M4 16.5 9 12l3.5 3 4-4L20.5 17" stroke="currentColor" strokeWidth="1.6" fill="none" />
            </svg>
          )}
        </span>
        <p className="text-xs text-slate-400 max-w-[220px]">{label}</p>
      </div>
    </div>
  )
}
