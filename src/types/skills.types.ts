import { ReactNode } from 'react';

/**
 * @interface BaseSkill
 * Define a estrutura básica para um item de tecnologia/habilidade.
 */
export interface BaseSkill {
  /** O componente React (ícone SVG) a ser renderizado. */
  node: ReactNode;
  /** Nome amigável da tecnologia/skill (obrigatório). */
  title: string;
  /** Link opcional para a documentação ou repositório. */
  href?: string;
}
