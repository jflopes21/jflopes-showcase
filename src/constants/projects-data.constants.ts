export interface ProjectItem {
  title: string;
  link: string;
  stack: string;
  descriptionKey: string;
}

export const PROJECTS_DATA: ProjectItem[] = [
  {
    title: 'Imobijud',
    link: '#',
    stack: 'Next.js, NestJS, TypeScript, Chakra UI',
    descriptionKey: 'imobijud_desc',
  },
  {
    title: 'Kairos',
    link: 'https://kairos-gestao.app.br',
    stack: 'React, Node.js, TypeScript, Tailwind CSS',
    descriptionKey: 'kairos_desc',
  },
  {
    title: 'Nosso Filme',
    link: 'https://nossofilme.com.br',
    stack: 'Next.js, Tailwind CSS, Framer Motion',
    descriptionKey: 'nossofilme_desc',
  },
  {
    title: 'FaltaUma',
    link: 'https://falta-uma.vercel.app',
    stack: 'React, TypeScript, Tailwind CSS',
    descriptionKey: 'faltauma_desc',
  },
];
