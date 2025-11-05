'use client';

import { motion } from 'framer-motion';
import GradientText from '@/components/ui/GradientText';
import LogoLoop from '@/components/ui/LogoLoop';
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

const skillsLogos = [
  { node: <SiReact />, title: 'React' },
  { node: <SiTypescript />, title: 'TypeScript' },
  { node: <SiJavascript />, title: 'JavaScript' },
  { node: <SiTailwindcss />, title: 'Tailwind CSS' },
  { node: <SiShadcnui />, title: 'Shadcn UI' },
  { node: <SiChakraui />, title: 'Chakra UI' },
  { node: <SiHtml5 />, title: 'HTML5' },
  { node: <SiCss3 />, title: 'CSS3' },
  { node: <SiNodedotjs />, title: 'Node.js' },
  { node: <SiNestjs />, title: 'NestJS' },
  { node: <SiPhp />, title: 'PHP' },
  { node: <SiSalesforce />, title: 'Salesforce (Apex)' },
];

const infraestructureLogos = [
  { node: <SiPostgresql />, title: 'PostgreSQL' },
  { node: <SiGit />, title: 'Git' },
  { node: <SiGithub />, title: 'Github' },
  { node: <SiDocker />, title: 'Docker' },
  { node: <SiMysql />, title: 'MySQL' },
  { node: <SiMongodb />, title: 'MongoDB' },
];

export function SkillsSection() {
  const floatIn = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.7 },
    viewport: { once: true, amount: 0.2 },
  };

  return (
    <section
      id="skills"
      className="flex w-full flex-col items-center p-8 py-80"
    >
      <motion.div
        className="w-full max-w-6xl"
        initial={floatIn.initial}
        whileInView={floatIn.whileInView}
        transition={{ ...floatIn.transition, delay: 0.1 }}
        viewport={floatIn.viewport}
      >
        <div className="flex flex-col gap-8">
          <GradientText
            colors={['#a3e63e', '#10b981']}
            animationSpeed={3}
            className="mb-12 text-center text-5xl"
          >
            Tecnologias & Skills
          </GradientText>
          <div className="flex flex-col gap-8">
            <div className="relative z-10 h-24 w-full">
              <LogoLoop
                logos={skillsLogos}
                speed={100}
                direction="left"
                logoHeight={48}
                gap={60}
                scaleOnHover
                pauseOnHover={false}
                fadeOut
                ariaLabel="Tecnologias de desenvolvimento utilizadas"
              />
            </div>

            <div className="relative z-10 h-24 w-full">
              <LogoLoop
                logos={infraestructureLogos}
                speed={100}
                direction="right"
                logoHeight={48}
                gap={60}
                scaleOnHover
                pauseOnHover={false}
                ariaLabel="Tecnologias de infraestrutura utilizadas"
                fadeOut
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
