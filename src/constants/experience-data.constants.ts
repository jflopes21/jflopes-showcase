interface ExperienceItem {
  empresa: string;
  cargo: string;
  periodo: string;
  stack: string;
  conquistas: string[];
}

/**
 * @description Dados detalhados de experiência profissional, listados do mais antigo para o mais recente.
 */
export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    empresa: 'Romagnole Produtos Elétricos S.A. | Mandaguari, PR',
    cargo: 'Desenvolvedor de Software',
    periodo: 'Setembro 2020 – Agosto 2024',
    stack: 'React.js, Node.js, Salesforce (Apex), UNIFACE',
    conquistas: [
      'Desenvolvimento e manutenção de aplicações web internas (React/Node.js).',
      'Customização e desenvolvimento na plataforma Salesforce (Apex).',
      'Manutenção e modernização de sistemas legados.',
      'Suporte técnico especializado a usuários.',
    ],
  },
  {
    empresa: 'Gazin | Maringá, PR',
    cargo: 'Desenvolvedor Full Stack',
    periodo: 'Agosto 2024 – Presente',
    stack:
      'NestJS, React, TailwindCSS, Shadcn UI, PHP, Chakra UI, APIs RESTful',
    conquistas: [
      'Desenvolvimento de sistema de análise de crédito/cobrança (NestJS/React) escalável.',
      'Desenvolvimento de sistema de assistência de pós-vendas (PHP/React).',
      'Atuação e consumo em APIs RESTful.',
      'Colaboração em times ágeis (Scrum/Kanban).',
    ],
  },
];
