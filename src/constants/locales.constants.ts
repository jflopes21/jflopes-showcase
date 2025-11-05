interface LocaleItem {
  code: string;
  label: string;
  flagCode: string;
}

/**
 * @description Lista de idiomas suportados, com códigos de bandeira ISO 3166-1 alpha-2.
 */
export const LOCALES: LocaleItem[] = [
  { code: 'pt-br', label: 'Português (BR)', flagCode: 'br' },
  { code: 'pt-pt', label: 'Português (PT)', flagCode: 'pt' },
  { code: 'en', label: 'English', flagCode: 'gb' },
  { code: 'es', label: 'Español', flagCode: 'es' },
  { code: 'de', label: 'Deutsch', flagCode: 'de' },
  { code: 'fr', label: 'Français', flagCode: 'fr' },
];

/**
 * @description Código do idioma padrão.
 */
export const DEFAULT_LOCALE = 'pt-br';
