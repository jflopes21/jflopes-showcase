'use client';

import SplitText from '@/components/ui/SplitText';
import GradientText from '@/components/ui/GradientText';
import TextType from '@/components/ui/TextType';
import { useEffect, useState } from 'react';

export function HeroSection() {
  const NAME_FULL = 'João Francisco P. Lopes';
  const NAME_SHORT = 'João Lopes';
  const [displayName, setDisplayName] = useState(NAME_FULL);
  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.matchMedia('(max-width: 1023px)').matches;

      if (isMobile) {
        setDisplayName(NAME_SHORT);
      } else {
        setDisplayName(NAME_FULL);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="relative grid min-h-screen w-full place-items-center overflow-hidden p-4">
      <div className="z-10 flex flex-col items-center gap-4">
        <div className="flex flex-col items-center gap-2 md:flex-row md:items-baseline md:gap-4">
          <SplitText
            tag="h1"
            text="Olá, eu sou"
            className="text-center text-3xl font-medium text-white md:text-5xl lg:text-6xl"
            from={{ y: 20, opacity: 0 }}
            to={{ y: 0, opacity: 1 }}
            duration={0.6}
            delay={50}
            ease="power3.out"
          />
          <GradientText
            colors={['#a3e63e', '#10b981']}
            animationSpeed={3}
            showBorder={false}
            className="text-center text-5xl font-medium md:text-6xl lg:text-6xl"
          >
            {displayName}
          </GradientText>
        </div>

        <TextType
          text={['Desenvolvedor Full Stack', 'Engenheiro de Software']}
          typingSpeed={60}
          pauseDuration={600}
          showCursor={true}
          cursorCharacter="|"
          className="text-center text-3xl font-medium md:text-6xl lg:text-8xl"
        />
      </div>
    </section>
  );
}
