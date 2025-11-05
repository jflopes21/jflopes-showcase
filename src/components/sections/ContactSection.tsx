'use client';

import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import {
  CONTACT_INFO,
  SOCIAL_LINKS,
  CONTACT_KEYS,
} from '@/constants/contact-data.constants';
import { toast } from 'sonner';
import GradientText from '../ui/GradientText';
import { useTranslations } from 'next-intl';

interface LinkAction {
  type: 'link' | 'copy';
  url?: string;
  textToCopy?: string;
  displayKey?: string;
}

interface ContactLink {
  icon: React.ReactNode;
  nameKey: string;
  action: LinkAction;
}

export function ContactSection() {
  const t = useTranslations('ContactSection');
  const tGlobal = useTranslations('Global');

  const contactLinks: ContactLink[] = [
    {
      icon: <SiGithub size={32} />,
      nameKey: CONTACT_KEYS.GITHUB_NAME,
      action: { type: 'link', url: SOCIAL_LINKS.GITHUB },
    },
    {
      icon: <SiLinkedin size={32} />,
      nameKey: CONTACT_KEYS.LINKEDIN_NAME,
      action: { type: 'link', url: SOCIAL_LINKS.LINKEDIN },
    },
    {
      icon: <Mail size={32} />,
      nameKey: CONTACT_KEYS.EMAIL_DISPLAY,
      action: {
        type: 'copy',
        textToCopy: CONTACT_INFO.EMAIL,
        displayKey: CONTACT_KEYS.EMAIL_DISPLAY,
      },
    },
    {
      icon: <Phone size={32} />,
      nameKey: CONTACT_KEYS.PHONE_DISPLAY,
      action: {
        type: 'copy',
        textToCopy: CONTACT_INFO.PHONE,
        displayKey: CONTACT_KEYS.PHONE_DISPLAY,
      },
    },
  ];

  const floatIn = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.7 },
    viewport: { once: true, amount: 0.2 },
  };

  const handleCopy = (text: string, itemName: string) => {
    navigator.clipboard.writeText(text);
    toast.success(`${tGlobal('copied', { item: itemName })}`, {
      description: text,
      className: 'border-lime-400 bg-neutral-900 text-white',
      style: {
        borderColor: '#a3e63e',
        borderWidth: '1px',
        backgroundColor: '#171717',
        color: '#fff',
      },
      duration: 2500,
    });
  };

  const handleAction = (link: ContactLink) => {
    if (link.action.type === 'link' && link.action.url) {
      window.open(link.action.url, '_blank');
    } else if (link.action.type === 'copy' && link.action.textToCopy) {
      const itemName = t(link.nameKey);
      handleCopy(link.action.textToCopy, itemName);
    }
  };

  return (
    <section
      id="contact"
      className="flex w-full flex-col items-center p-8 py-80"
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
          className="mb-6 text-center text-5xl font-bold"
        >
          {t(CONTACT_KEYS.CTA)}
        </GradientText>
        <p className="mb-14 text-center text-xl">{t(CONTACT_KEYS.SUPPORT)}</p>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {contactLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.action.type === 'link' ? link.action.url : '#'}
              target={link.action.type === 'link' ? '_blank' : '_self'}
              rel={link.action.type === 'link' ? 'noopener noreferrer' : ''}
              onClick={(e) => {
                if (link.action.type === 'copy') {
                  e.preventDefault();
                  handleAction(link);
                }
              }}
              className="flex flex-col items-center justify-center space-y-3 rounded-xl border border-lime-400/50 bg-neutral-900/50 p-6 text-white transition-all hover:border-lime-400/50 hover:bg-lime-500/10"
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl">{link.icon}</div>
              <p className="text-sm font-semibold">
                {/* Se for link, mostra o nome (GitHub/LinkedIn), senão, mostra o display (E-mail/Telefone) */}
                {t(
                  link.action.type === 'copy'
                    ? link.action.displayKey!
                    : link.nameKey
                )}
              </p>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
