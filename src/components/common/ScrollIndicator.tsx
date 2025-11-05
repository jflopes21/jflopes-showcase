'use client';

import { useCallback, useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

const SECTION_IDS = ['about', 'skills', 'experience', 'contact'];

export function ScrollIndicator() {
  const [isVisible, setIsVisible] = useState(false);
  const [nextTargetId, setNextTargetId] = useState('');

  const findNextSection = useCallback(() => {
    let currentSectionIndex = -1;
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    SECTION_IDS.forEach((id, index) => {
      const el = document.getElementById(id);
      if (el && el.offsetTop <= scrollPosition) {
        currentSectionIndex = index;
      }
    });

    if (currentSectionIndex === -1) {
      setNextTargetId(SECTION_IDS[0]);
      setIsVisible(true);
    } else if (currentSectionIndex < SECTION_IDS.length - 1) {
      setNextTargetId(SECTION_IDS[currentSectionIndex + 1]);
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', findNextSection);
    findNextSection();
    return () => window.removeEventListener('scroll', findNextSection);
  }, [findNextSection]);

  const handleScroll = () => {
    const nextEl = document.getElementById(nextTargetId);
    if (nextEl) {
      window.scrollTo({
        top: nextEl.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  if (!isVisible || !nextTargetId) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed bottom-4 left-1/2 z-999 -translate-x-1/2"
    >
      <Button
        variant="outline"
        size="icon"
        onClick={handleScroll}
        className="h-12 w-12 rounded-full border-2 border-lime-400 bg-transparent hover:bg-neutral-800 hover:cursor-pointer"
      >
        <ChevronDown className="h-6 w-6 animate-bounce text-lime-400" />
      </Button>
    </motion.div>
  );
}
