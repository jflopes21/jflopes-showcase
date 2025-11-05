import { BaseSkill } from '@/types/skills.types';
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiShadcnui,
  SiChakraui,
  SiNodedotjs,
  SiNestjs,
  SiPhp,
  SiPostgresql,
  SiMysql,
  SiGit,
  SiDocker,
  SiSalesforce,
  SiMongodb,
  SiGithub,
} from 'react-icons/si';

/**
 * @description Array contendo as principais tecnologias de Frontend e Backend (Development Skills).
 */
export const SKILLS_LOGOS: BaseSkill[] = [
  { node: <SiReact />, title: 'React', href: 'https://react.dev' },
  { node: <SiTypescript />, title: 'TypeScript' },
  { node: <SiJavascript />, title: 'JavaScript' },
  { node: <SiTailwindcss />, title: 'Tailwind CSS' },
  { node: <SiShadcnui />, title: 'Shadcn UI' },
  { node: <SiChakraui />, title: 'Chakra UI' },
  { node: <SiNodedotjs />, title: 'Node.js' },
  { node: <SiNestjs />, title: 'NestJS' },
  { node: <SiPhp />, title: 'PHP' },
  { node: <SiSalesforce />, title: 'Salesforce (Apex)' },
  { node: <SiHtml5 />, title: 'HTML5' },
  { node: <SiCss3 />, title: 'CSS3' },
];

/**
 * @description Array contendo as ferramentas de Infraestrutura, DevOps e Banco de Dados (Infrastructure & Tools).
 */
export const INFRASTRUCTURE_LOGOS: BaseSkill[] = [
  { node: <SiPostgresql />, title: 'PostgreSQL' },
  { node: <SiMysql />, title: 'MySQL' },
  { node: <SiMongodb />, title: 'MongoDB' },
  { node: <SiGit />, title: 'Git' },
  { node: <SiGithub />, title: 'Github' },
  { node: <SiDocker />, title: 'Docker' },
];
