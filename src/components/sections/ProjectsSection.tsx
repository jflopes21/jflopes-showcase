'use client';

import GradientText from '@/components/ui/GradientText';
import { motion } from 'framer-motion';
import { PROJECTS_DATA } from '@/constants/projects-data.constants';
import { useTranslations } from 'next-intl';
import { ExternalLink } from 'lucide-react';

export function ProjectsSection() {
  const t = useTranslations('ProjectsSection');

  const floatIn = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.7 },
    viewport: { once: true, amount: 0.2 },
  };

  return (
    <section
      id="projects"
      className="flex w-full flex-col items-center p-8 py-40"
    >
      <motion.div
        className="w-full max-w-6xl"
        initial={floatIn.initial}
        whileInView={floatIn.whileInView}
        transition={{ ...floatIn.transition, delay: 0.1 }}
        viewport={floatIn.viewport}
      >
        <GradientText
          colors={['#a3e63e', '#10b981']}
          animationSpeed={3}
          showBorder={false}
          className="mb-16 text-center text-5xl font-bold"
        >
          {t('title')}
        </GradientText>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {PROJECTS_DATA.map((project, index) => (
            <motion.div
              key={project.title}
              initial={floatIn.initial}
              whileInView={floatIn.whileInView}
              transition={{ ...floatIn.transition, delay: index * 0.1 }}
              viewport={floatIn.viewport}
              className="group relative flex flex-col justify-between rounded-2xl border border-neutral-800 bg-neutral-900/50 p-8 transition-all hover:border-lime-400/50 hover:bg-neutral-900"
            >
              <div>
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-white transition-colors group-hover:text-lime-400">
                    {project.title}
                  </h3>
                  {project.link !== '#' && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-400 transition-colors hover:text-white"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>

                <p className="mb-6 leading-relaxed text-neutral-400">
                  {t(project.descriptionKey)}
                </p>
              </div>

              <div className="mt-auto">
                <p className="font-mono text-xs tracking-wider text-lime-400/70 uppercase">
                  {project.stack}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
