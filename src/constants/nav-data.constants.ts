interface NavItem {
  key: keyof (typeof import('../messages/pt-br.json'))['Navigation'];
  href: string;
}

/**
 * @description Itens de navegação para o PillNav. Usamos #ids das seções.
 */
export const NAV_ITEMS: NavItem[] = [
  { key: 'home', href: '#top' },
  { key: 'about', href: '#about' },
  { key: 'skills', href: '#skills' },
  { key: 'experience', href: '#experience' },
  { key: 'education', href: '#education' },
  { key: 'contact', href: '#contact' },
];
