interface ExperienceItem {
  empresa: string;
  cargoKey: string;
  periodoKey: string;
  stack: string;
  conquistasKeys: string[];
}

/**
 * @description Dados detalhados de experiência profissional, listados do mais antigo para o mais recente, usando chaves de tradução.
 */
export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    empresa: 'Romagnole Produtos Elétricos S.A. | Mandaguari, PR',
    cargoKey: 'rom_role',
    periodoKey: 'rom_period',
    stack: 'React.js, Node.js, Salesforce (Apex), UNIFACE',
    conquistasKeys: [
      'rom_achieve1',
      'rom_achieve2',
      'rom_achieve3',
      'rom_achieve4',
    ],
  },
  {
    empresa: 'Gazin | Maringá, PR',
    cargoKey: 'gazin_role',
    periodoKey: 'gazin_period',
    stack:
      'NestJS, React, TailwindCSS, Shadcn UI, PHP, Chakra UI, APIs RESTful',
    conquistasKeys: [
      'gazin_achieve1',
      'gazin_achieve2',
      'gazin_achieve3',
      'gazin_achieve4',
    ],
  },
];
