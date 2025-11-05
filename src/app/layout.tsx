import React from 'react';
import '@/app/globals.css';
import routing from '@/i18n/routing';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}
