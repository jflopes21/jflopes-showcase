import React from 'react';
import { motion } from 'framer-motion';

interface TimelineItemProps {
  children: React.ReactNode;
  stack: string;
  isLast: boolean;
  isRight: boolean;
  empresa: string;
}

export function TimelineItem({
  children,
  stack,
  isLast,
  isRight,
  empresa,
}: TimelineItemProps) {
  const animationProps = {
    initial: { scaleY: 0, opacity: 0 },
    whileInView: { scaleY: 1, opacity: 1 },
    transition: { duration: 1, delay: 0.3 },
    viewport: { once: true, amount: 0.5 },
    style: { originY: 0 },
  };

  return (
    <div
      className={`relative flex min-h-[300px] w-full justify-between gap-8 md:gap-16 ${isRight ? 'flex-row' : 'flex-row-reverse'} mb-8 md:mb-0`}
    >
      <motion.div
        className="w-full rounded-xl border border-lime-400/20 bg-neutral-900 p-6 shadow-xl md:w-5/12"
        initial={{ opacity: 0, x: isRight ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        {children}
        <div className="mt-4 border-t border-neutral-700/50 pt-3">
          <span className="mr-2 text-sm font-bold text-lime-300">STACK:</span>
          <span className="text-sm text-neutral-300">{stack}</span>
        </div>
      </motion.div>

      <div className="absolute top-0 left-1/2 hidden h-full -translate-x-1/2 md:block">
        <motion.div
          {...animationProps}
          className="h-full w-px bg-lime-500/50"
          style={{ originY: 0 }}
        />

        <motion.div
          className="absolute top-0 left-1/2 h-4 w-4 -translate-x-1/2 rounded-full border-2 border-lime-400 bg-black"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, delay: 0.5 }}
          viewport={{ once: true, amount: 0.8 }}
        />
      </div>

      <div className="hidden w-5/12 md:block" />
    </div>
  );
}
