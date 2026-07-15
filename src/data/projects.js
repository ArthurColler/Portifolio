// Projetos reais do Arthur, com base no currículo.
// mediaLabel ainda é placeholder — troque por <img>/<video> em src/assets/
// assim que tiver prints, GIFs ou um vídeo curto de cada projeto.
export const projects = [
  {
    slug: 'chatbot-whatsapp-automacao',
    title: 'Chatbot de Automação via WhatsApp',
    tags: ['n8n', 'Automação', 'GCP'],
    summary:
      'TCC que evoluiu de um bot em Node.js para uma automação em n8n na nuvem, usando a API oficial da Meta.',
    description:
      'Trabalho de Conclusão de Curso em Engenharia de Computação: um chatbot para captar orçamentos de clientes via WhatsApp. Comecei com uma versão em Node.js/Express, com webhooks e uma máquina de estados para conduzir a conversa. Migrei da biblioteca não-oficial whatsapp-web.js para a API Cloud oficial da Meta, eliminando o risco de bloqueio de conta. Construí também um pipeline que transforma as respostas não estruturadas em CSVs organizados, exportados automaticamente para o Google Drive — prontos para virar dashboards ou alimentar um ERP. Por fim, portei toda a lógica para o n8n, rodando em uma VM no GCP com Docker, o que deixou a manutenção muito mais simples e ágil de evoluir.',
    mediaLabel: 'Adicionar vídeo curto demonstrando o fluxo do chatbot',
    mediaVariant: 'video',
    stack: ['Node.js', 'n8n', 'GCP', 'Docker', 'Meta Cloud API', 'Google Drive API'],
    links: { repo: '', demo: '' },
  },
  {
    slug: 'hairu-app-mobile',
    title: 'HairU — Aplicativo Mobile',
    tags: ['Flutter', 'Supabase', 'Dados'],
    summary:
      'App mobile em parceria acadêmica com a Unesp, com modelagem de dados no Supabase e um ETL simplificado.',
    description:
      'Projeto acadêmico desenvolvido em parceria com a Unesp. Fiquei responsável pela modelagem e estruturação dos dados no Supabase (PostgreSQL), garantindo a integridade das informações consumidas pelo app em Flutter, além de construir a lógica de backend para extração e tratamento de dados — um ETL simplificado. Também participei das reuniões estratégicas de definição de KPIs, métricas de sucesso e arquitetura da informação do produto.',
    mediaLabel: 'Adicionar print ou GIF do app (1200×800)',
    stack: ['Flutter', 'Supabase', 'PostgreSQL', 'Dart'],
    links: { repo: 'https://github.com/Hair-U/HairU_App', demo: '' },
  },
]

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug)
}
