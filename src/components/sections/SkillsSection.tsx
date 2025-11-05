'use client';

import { motion } from 'framer-motion';
import GradientText from '@/components/ui/GradientText';
import LogoLoop from '@/components/ui/LogoLoop';
import {
  SKILLS_LOGOS,
  INFRASTRUCTURE_LOGOS,
} from '@/constants/skills-data.constants';
import { useTranslations } from 'next-intl';

export function SkillsSection() {
  const t = useTranslations('SkillsSection');

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
            {t('title')}
          </GradientText>
          <div className="flex flex-col gap-8">
            <div className="relative z-10 h-24 w-full">
              <LogoLoop
                logos={SKILLS_LOGOS}
                speed={100}
                direction="left"
                logoHeight={48}
                gap={60}
                scaleOnHover
                pauseOnHover={false}
                fadeOut
                ariaLabel={t('devAriaLabel')}
              />
            </div>

            <div className="relative z-10 h-24 w-full">
              <LogoLoop
                logos={INFRASTRUCTURE_LOGOS}
                speed={100}
                direction="right"
                logoHeight={48}
                gap={60}
                scaleOnHover
                pauseOnHover={false}
                fadeOut
                ariaLabel={t('infraAriaLabel')}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
