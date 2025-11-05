'use client';

import PillNav from '@/components/ui/PillNav';
import { NAV_ITEMS } from '@/constants/nav-data.constants';
import { useEffect, useState } from 'react';

export function Header() {
  const [activeHash, setActiveHash] = useState('#top');

  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_ITEMS.map((item) =>
        document.getElementById(item.href.replace('#', ''))
      ).filter(Boolean) as HTMLElement[];
      const scrollY = window.scrollY;

      let currentHash = '#top';
      sections.forEach((section) => {
        if (section.offsetTop <= scrollY + window.innerHeight / 2) {
          currentHash = `#${section.id}`;
        }
      });
      setActiveHash(currentHash);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-6 z-999 hidden w-full justify-center p-4 md:flex">
      <PillNav
        items={NAV_ITEMS}
        activeHref={activeHash}
        className="mx-auto"
        baseColor="#171717"
        pillColor="#171717"
        hoveredPillTextColor="#a3e635"
        pillTextColor="#ffffff"
      />
    </div>
  );
}
