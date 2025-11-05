import { defineRouting } from 'next-intl/routing';

const locales = ['pt-br', 'en', 'es', 'pt-pt', 'de', 'fr'] as const;
const defaultLocale = 'pt-br';

export default defineRouting({
  locales: locales,
  defaultLocale: defaultLocale,
});
