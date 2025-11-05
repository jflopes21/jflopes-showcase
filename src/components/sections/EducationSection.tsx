'use client';

import GradientText from '@/components/ui/GradientText';
import { Card } from '@/components/ui/Card';
import { motion } from 'framer-motion';
import {
  ACADEMIC_DATA,
  EXTRA_EDUCATION_DATA,
} from '@/constants/education-data.constants';
import { useTranslations } from 'next-intl';

export function EducationSection() {
  const t = useTranslations('EducationSection');

  const floatIn = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.7 },
    viewport: { once: true, amount: 0.2 },
  };

  return (
    <section
      id="education"
      className="flex w-full flex-col items-center p-8 py-40"
    >
      <motion.div
        className="w-full max-w-4xl"
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

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div>
            <h2 className="mb-6 border-b border-neutral-700/50 pb-2 text-3xl font-bold text-white">
              {t('academic_subtitle')}
            </h2>
            <div className="space-y-8">
              {ACADEMIC_DATA.map((item, index) => (
                <Card
                  key={index}
                  titulo={t(item.tituloKey)}
                  instituicao={item.instituicao}
                  periodo={item.periodo}
                  index={index}
                />
              ))}
            </div>
          </div>

          <div className="mt-8 md:mt-0">
            <h2 className="mb-6 border-b border-neutral-700/50 pb-2 text-3xl font-bold text-white">
              {t('extra_subtitle')}
            </h2>
            <div className="space-y-8">
              {EXTRA_EDUCATION_DATA.map((item, index) => (
                <Card
                  key={index}
                  titulo={t(item.tituloKey)}
                  instituicao={item.instituicao}
                  detalhe={item.detalheKey ? t(item.detalheKey) : undefined}
                  index={index + ACADEMIC_DATA.length}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
