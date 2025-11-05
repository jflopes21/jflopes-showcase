interface NavItem {
  label: string;
  href: string;
}

/**
 * @description Itens de navegação para o PillNav. Usamos #ids das seções.
 */
export const NAV_ITEMS: NavItem[] = [
  { label: 'Início', href: '#top' },
  { label: 'Sobre', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experiência', href: '#experience' },
  { label: 'Formação', href: '#education' },
  { label: 'Contato', href: '#contact' },
];
