'use client';

import SplitText from '@/components/ui/SplitText';
import GradientText from '@/components/ui/GradientText';
import TextType from '@/components/ui/TextType';

export function HeroSection() {
  return (
    <section className="relative grid min-h-screen w-full place-items-center overflow-hidden p-4">
      <div className="z-10 flex flex-col items-center gap-4">
        <div className="flex flex-row items-baseline gap-4">
          <SplitText
            tag="h1"
            text="Olá, eu sou"
            className="text-center text-6xl font-medium text-white"
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
            className="text-center text-6xl font-medium"
          >
            João Francisco P. Lopes
          </GradientText>
        </div>

        <TextType
          text={['Desenvolvedor Full Stack', 'Engenheiro de Software']}
          typingSpeed={60}
          pauseDuration={600}
          showCursor={true}
          cursorCharacter="|"
          className="text-center text-8xl font-medium"
        />
      </div>
    </section>
  );
}
