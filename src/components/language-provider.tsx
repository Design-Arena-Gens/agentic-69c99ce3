"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { Locale, Messages } from "@/lib/i18n";
import { availableLocales, messages } from "@/lib/i18n";

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  messages: Messages;
  locales: Locale[];
};

const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined,
);

const STORAGE_KEY = "dahab-rent-locale";

type Props = {
  children: React.ReactNode;
  defaultLocale?: Locale;
};

export function LanguageProvider({
  children,
  defaultLocale = "en",
}: Props) {
  const [locale, setLocale] = useState<Locale>(() => {
    if (typeof window === "undefined") {
      return defaultLocale;
    }
    const stored = window.localStorage.getItem(STORAGE_KEY) as Locale | null;
    if (stored && availableLocales.includes(stored)) {
      return stored;
    }
    return defaultLocale;
  });

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, locale);
  }, [locale]);

  const value = useMemo<LanguageContextValue>(
    () => ({
      locale,
      setLocale,
      messages: messages[locale],
      locales: availableLocales,
    }),
    [locale],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
