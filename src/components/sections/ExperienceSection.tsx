'use client';

import GradientText from '@/components/ui/GradientText';
import { TimelineItem } from '@/components/ui/TimelineItem';
import { motion } from 'framer-motion';
import { EXPERIENCE_DATA } from '@/constants/experience-data.constants';

export function ExperienceSection() {
  const floatIn = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.7 },
    viewport: { once: true, amount: 0.2 },
  };

  return (
    <section
      id="experience"
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
          Experiência Profissional
        </GradientText>

        <div className="relative">
          {EXPERIENCE_DATA.map((item, index) => (
            <TimelineItem
              key={item.empresa}
              empresa={item.empresa}
              stack={item.stack}
              isLast={index === EXPERIENCE_DATA.length - 1}
              isRight={index % 2 === 0}
            >
              <div className="mb-2">
                <h3 className="text-xl font-bold text-white">{item.empresa}</h3>
                <p className="text-sm text-neutral-400">{item.periodo}</p>
              </div>
              <p className="mb-4 text-lg font-medium text-lime-400">
                {item.cargo}
              </p>

              <div className="text-muted-foreground space-y-2">
                <ul className="list-disc pl-5">
                  {item.conquistas.map((conquista, idx) => (
                    <li key={idx}>{conquista}</li>
                  ))}
                </ul>
              </div>
            </TimelineItem>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
