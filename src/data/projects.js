// Projetos de EXEMPLO. Substitua título, resumo, descrição, tags, links e mediaLabel
// pelos seus projetos reais — depois troque o <MediaPlaceholder> nas páginas por
// <img>/<video> apontando para suas imagens em src/assets/.
export const projects = [
  {
    slug: 'dashboard-vendas-power-bi',
    title: 'Dashboard de Vendas em Power BI',
    tags: ['Power BI', 'DAX', 'ETL'],
    summary:
      'Painel executivo para acompanhar receita, ticket médio e metas por região, atualizado automaticamente.',
    description:
      'Descreva aqui o problema de negócio, os dados usados, as decisões de modelagem e o impacto gerado (ex: "reduziu em X horas/semana o tempo gasto montando relatórios manuais"). Fale também dos desafios técnicos que você resolveu.',
    mediaLabel: 'Substitua por print ou GIF do dashboard (1200×800)',
    stack: ['Power BI', 'DAX', 'SQL Server', 'Power Query'],
    links: { repo: 'https://github.com/seu-usuario/dashboard-vendas', demo: '' },
  },
  {
    slug: 'pipeline-etl-python',
    title: 'Pipeline de ETL com Python',
    tags: ['Python', 'Pandas', 'Automação'],
    summary:
      'Automação que extrai, limpa e consolida planilhas de múltiplas fontes em um único relatório diário.',
    description:
      'Explique a origem dos dados, as regras de limpeza/validação aplicadas e como o pipeline é executado (agendado, manual, gatilho). Inclua métricas de ganho de tempo ou redução de erros.',
    mediaLabel: 'Substitua por diagrama do pipeline ou print do código (1200×800)',
    stack: ['Python', 'Pandas', 'Airflow', 'PostgreSQL'],
    links: { repo: 'https://github.com/seu-usuario/pipeline-etl', demo: '' },
  },
  {
    slug: 'analise-churn-clientes',
    title: 'Análise de Churn de Clientes',
    tags: ['Análise de Dados', 'Python', 'Estatística'],
    summary:
      'Investigação exploratória para entender os principais fatores associados ao cancelamento de clientes.',
    description:
      'Conte a hipótese inicial, as variáveis analisadas, o método usado (correlação, segmentação, modelo simples) e a recomendação final entregue ao time de negócio.',
    mediaLabel: 'Substitua por gráfico/print da análise (1200×800)',
    stack: ['Python', 'Pandas', 'Matplotlib', 'Jupyter'],
    links: { repo: 'https://github.com/seu-usuario/analise-churn', demo: '' },
  },
  {
    slug: 'automacao-relatorios',
    title: 'Automação de Relatórios Semanais',
    tags: ['Automação', 'VBA/Python', 'Produtividade'],
    summary:
      'Script que gera e envia por e-mail o relatório semanal de indicadores, sem intervenção manual.',
    description:
      'Detalhe o processo manual que existia antes, o que foi automatizado, as ferramentas escolhidas e o tempo economizado pela equipe por semana/mês.',
    mediaLabel: 'Substitua por vídeo curto demonstrando a automação',
    mediaVariant: 'video',
    stack: ['Python', 'smtplib', 'Excel', 'Task Scheduler'],
    links: { repo: 'https://github.com/seu-usuario/automacao-relatorios', demo: '' },
  },
]

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug)
}
