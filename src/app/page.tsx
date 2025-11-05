'use client';
import { ScrollIndicator } from '@/components/common/ScrollIndicator';
import { AboutSection } from '@/components/sections/AboutSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { EducationSection } from '@/components/sections/EducationSection';
import { ExperienceSection } from '@/components/sections/ExperienceSection';
import { HeroSection } from '@/components/sections/HeroSection';
import { SkillsSection } from '@/components/sections/SkillsSection';
import Particles from '@/components/ui/Particles';

export default function Home() {
  return (
    <main className="relative flex flex-col items-center">
      <div className="fixed inset-0 z-0 h-full w-full">
        <Particles
          particleColors={['#10b981']}
          particleCount={100}
          particleSpread={5}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={true}
          disableRotation={false}
        />
      </div>

      <div className="relative z-10 w-full">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <EducationSection />
        <ContactSection />
      </div>

      <ScrollIndicator />
    </main>
  );
}
