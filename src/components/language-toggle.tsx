"use client";

import { useLanguage } from "@/components/language-provider";
import type { Locale } from "@/lib/i18n";

export function LanguageToggle() {
  const { locale, setLocale, locales, messages } = useLanguage();

  return (
    <div className="flex items-center gap-2 text-sm font-medium text-brand-charcoal">
      <span className="hidden sm:inline">{messages.navigation.languageLabel}</span>
      <div className="flex rounded-full border border-brand-emerald/40 bg-white p-1 shadow-sm">
        {locales.map((item) => (
          <button
            key={item}
            onClick={() => handleChange(item, setLocale)}
            className={`rounded-full px-3 py-1 text-xs font-semibold transition ${
              locale === item
                ? "bg-brand-emerald text-white shadow"
                : "text-brand-emerald hover:bg-brand-emerald/10"
            }`}
          >
            {item.toUpperCase()}
          </button>
        ))}
      </div>
    </div>
  );
}

function handleChange(locale: Locale, setLocale: (locale: Locale) => void) {
  setLocale(locale);
}
