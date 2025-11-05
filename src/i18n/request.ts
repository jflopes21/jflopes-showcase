import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';
import routing from './routing';
import { hasLocale } from 'next-intl';

const defaultLocale = routing.defaultLocale;
const locales = routing.locales;

const importMessages = {
  'pt-br': () => import('../messages/pt-br.json'),
  en: () => import('../messages/en.json'),
  es: () => import('../messages/es.json'),
  'pt-pt': () => import('../messages/pt-pt.json'),
  de: () => import('../messages/de.json'),
  fr: () => import('../messages/fr.json'),
};

export default getRequestConfig(async ({ locale: requestedLocale }) => {
  const locale = hasLocale(locales, requestedLocale)
    ? requestedLocale
    : defaultLocale;

  if (!hasLocale(locales, locale)) notFound();

  const messages = (await importMessages[locale]()).default;

  return {
    locale,
    messages: messages,
  };
});
