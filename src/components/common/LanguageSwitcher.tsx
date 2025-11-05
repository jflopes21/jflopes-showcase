'use client';

import { LOCALES } from '@/constants/locales.constants';
import { useTransition } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';
import { FlagIcon } from './FlagIcon';

export function LanguageSwitcher() {
  const router = useRouter();
  const localeActive = useLocale();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const handleLocaleChange = (newLocale: string) => {
    startTransition(() => {
      router.replace(pathname, { locale: newLocale });
    });
  };

  const renderFlagAndCode = (
    localeCode: string,
    isDropdownItem: boolean = false
  ) => {
    const data = LOCALES.find((loc) => loc.code === localeCode);
    if (!data) return null;

    const FLAG_SIZE = 40;

    return (
      <div className="flex items-center space-x-3">
        <FlagIcon
          code={data.flagCode}
          width={FLAG_SIZE}
          height={FLAG_SIZE}
          className="size-10 shrink-0 rounded-full border border-neutral-600/50"
        />

        <span className={isDropdownItem || !isDropdownItem ? 'font-bold' : ''}>
          {data.code.toUpperCase()}
        </span>
      </div>
    );
  };

  return (
    <Select
      value={localeActive}
      onValueChange={handleLocaleChange}
      disabled={isPending}
    >
      <SelectTrigger className="h-[50px] w-[120px] border-lime-400/20 bg-neutral-900 text-white transition-colors hover:border-lime-400/50">
        <SelectValue className="flex items-center gap-3 font-bold">
          {renderFlagAndCode(localeActive, false)}
        </SelectValue>
      </SelectTrigger>

      <SelectContent className="border-lime-400/50 bg-neutral-900">
        {LOCALES.map((locale) => (
          <SelectItem
            key={locale.code}
            value={locale.code}
            className="cursor-pointer text-white hover:bg-neutral-800/80"
          >
            {renderFlagAndCode(locale.code, true)}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
