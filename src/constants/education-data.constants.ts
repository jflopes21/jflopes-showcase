interface EducationItem {
  tituloKey: string;
  instituicao: string;
  periodo?: string;
  detalheKey?: string;
}

/**
 * @description Dados da formação acadêmica principal, com chaves de tradução para título e detalhes.
 */
export const ACADEMIC_DATA: EducationItem[] = [
  {
    tituloKey: 'academic_software_eng',
    instituicao: 'UniCesumar, Maringá, PR',
    periodo: '2020 – 2025',
  },
];

/**
 * @description Dados adicionais de idiomas e cursos relevantes, com chaves de tradução para título e detalhes.
 */
export const EXTRA_EDUCATION_DATA: EducationItem[] = [
  {
    tituloKey: 'extra_english_title',
    instituicao: 'FISK (2014 - 2018)',
    detalheKey: 'extra_english_detail',
  },
  {
    tituloKey: 'extra_fullstack_title',
    instituicao: 'Rocketseat',
    detalheKey: 'extra_fullstack_detail',
  },
];
