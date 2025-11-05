interface EducationItem {
  titulo: string;
  instituicao: string;
  periodo?: string;
  detalhe?: string;
}

/**
 * @description Dados da formação acadêmica principal.
 */
export const ACADEMIC_DATA: EducationItem[] = [
  {
    titulo: 'Engenharia de Software | Graduação',
    instituicao: 'UniCesumar, Maringá, PR',
    periodo: '2020 – 2025',
  },
];

/**
 * @description Dados adicionais de idiomas e cursos relevantes.
 */
export const EXTRA_EDUCATION_DATA: EducationItem[] = [
  {
    titulo: 'Inglês: Nível Fluente',
    instituicao: 'FISK (2014 - 2018)',
    detalhe: 'Proficiência completa no idioma, focado em conversação técnica.',
  },
  {
    titulo: 'Desenvolvimento Full Stack Moderno',
    instituicao: 'Rocketseat',
    detalhe:
      'Cursos e eventos de imersão cobrindo HTML, CSS, JS, TS, React, Node.js, Next.js e NestJS.',
  },
];
