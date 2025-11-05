'use client';

import { motion } from 'framer-motion';
import GradientText from '@/components/ui/GradientText';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import { SOCIAL_LINKS } from '@/constants/about-section.constants';
import { useTranslations } from 'next-intl';

export function AboutSection() {
  const t = useTranslations('AboutSection');

  const floatIn = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.7 },
    viewport: { once: true, amount: 0.2 },
  };

  return (
    <section
      id="about"
      className="mx-auto mt-60 grid max-w-6xl grid-cols-1 items-start gap-24 p-8 py-40 md:grid-cols-2"
    >
      <motion.div
        className="flex h-full w-full justify-center"
        initial={floatIn.initial}
        whileInView={floatIn.whileInView}
        transition={{ ...floatIn.transition, delay: 0.1 }}
        viewport={floatIn.viewport}
      >
        <motion.div
          className="relative h-[450px] w-[400px] max-w-xs overflow-hidden rounded-md border-2 bg-linear-to-br from-[#a3e63e]/20 via-[#a3e63e]/0 to-[#10b981]/20 p-0.5 shadow-lg transition-colors duration-300 hover:border-lime-400/50 hover:shadow-lime-400/20"
          whileHover={{
            scale: 1.05,
            rotate: '1deg',
            transition: { type: 'spring', stiffness: 300, damping: 10 },
          }}
        >
          <div className="relative h-full w-full rounded-md">
            <img
              src="/joao-avatar.png"
              alt="João Francisco P. Lopes"
              className="h-full w-full rounded-md object-cover"
            />
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="flex w-full flex-col gap-6"
        initial={floatIn.initial}
        whileInView={floatIn.whileInView}
        transition={{ ...floatIn.transition, delay: 0.2 }}
        viewport={floatIn.viewport}
      >
        <GradientText
          colors={['#a3e63e', '#10b981']}
          animationSpeed={3}
          showBorder={false}
          className="text-5xl font-bold"
        >
          {t('title')}
        </GradientText>

        <motion.p
          className="text-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          {t('resumeText')}
        </motion.p>

        <div className="flex space-x-6">
          <motion.a
            href={SOCIAL_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white transition-transform duration-200"
            whileHover={{ scale: 1.2 }}
          >
            <SiGithub size={36} />
          </motion.a>

          <motion.a
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white transition-transform duration-200"
            whileHover={{ scale: 1.2 }}
          >
            <SiLinkedin size={36} />
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
