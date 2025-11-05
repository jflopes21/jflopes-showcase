import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import routing from '@/i18n/routing';
import { hasLocale } from 'next-intl';
import React from 'react';
import type { Metadata } from 'next';
import { figtree } from '@/lib/fonts';

type Props = {
  children: React.ReactNode;
  params: { locale: string } | Promise<{ locale: string }>;
};

export const metadata: Metadata = {
  title: 'JFLOPES - Showcase',
  description: 'Portfólio Full Stack de João Francisco P. Lopes',
};

export default async function RootLayout({ children, params }: Props) {
  const resolvedParams = await params;
  const locale = resolvedParams?.locale;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages({ locale });

  return (
    <html lang={locale} className={`${figtree.variable} font-figtree dark`}>
      <body>
        <NextIntlClientProvider messages={messages} locale={locale}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
