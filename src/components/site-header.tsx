"use client";

import Link from "next/link";
import { LanguageToggle } from "@/components/language-toggle";
import { useLanguage } from "@/components/language-provider";

export function SiteHeader() {
  const { messages } = useLanguage();

  return (
    <header className="sticky top-0 z-40 border-b border-white/30 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
        <Link href="/" className="flex items-center gap-2 text-brand-charcoal">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-emerald text-white font-bold">
            DR
          </div>
          <div>
            <p className="text-lg font-semibold tracking-tight">Dahab-Rent</p>
            <p className="text-xs text-brand-emerald/70">
              Verified Property Network
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-brand-charcoal md:flex">
          <Link href="/" className="hover:text-brand-emerald">
            {messages.navigation.home}
          </Link>
          <a className="hover:text-brand-emerald" href="#dashboard">
            {messages.navigation.dashboard}
          </a>
          <a className="hover:text-brand-emerald" href="#listings">
            {messages.navigation.properties}
          </a>
          <a className="hover:text-brand-emerald" href="#contact">
            {messages.navigation.contact}
          </a>
        </nav>

        <LanguageToggle />
      </div>
    </header>
  );
}
