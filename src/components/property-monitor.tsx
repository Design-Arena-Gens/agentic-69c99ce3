"use client";

import Image from "next/image";
import { useLanguage } from "@/components/language-provider";
import { inspectionGallery, ledgerEntries } from "@/data/mock-listings";

export function PropertyMonitor() {
  const { messages } = useLanguage();

  return (
    <section className="rounded-3xl border border-brand-emerald/20 bg-white p-8 shadow-xl">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-brand-charcoal">
            {messages.landing.monitorTitle}
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-slate-600">
            {messages.landing.monitorSummary}
          </p>
        </div>
        <div className="rounded-full bg-brand-emerald/10 px-5 py-2 text-xs font-semibold uppercase tracking-wide text-brand-emerald">
          Diaspora Monitor
        </div>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[2fr,1fr]">
        <div className="grid gap-4 md:grid-cols-3">
          {inspectionGallery.map((item) => (
            <figure
              key={item.id}
              className="group overflow-hidden rounded-2xl border border-brand-emerald/15 bg-brand-sand"
            >
              <div className="relative h-40 w-full">
                <Image
                  src={item.imageUrl}
                  alt={item.label}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(min-width: 1024px) 200px, 33vw"
                />
              </div>
              <figcaption className="p-4 text-sm text-brand-charcoal">
                <p className="font-semibold">{item.label}</p>
                <p className="text-xs text-brand-charcoal/60">
                  {item.inspector} · {item.inspectedAt}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>

        <aside className="rounded-2xl border border-brand-emerald/10 bg-brand-sand/60 p-5">
          <h3 className="text-xs font-semibold uppercase tracking-wide text-brand-charcoal/60">
            USD Ledger
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            {ledgerEntries.map((entry) => (
              <li
                key={entry.id}
                className="rounded-xl border border-brand-emerald/20 bg-white px-4 py-3"
              >
                <p className="font-semibold text-brand-charcoal">
                  ${entry.amount.toLocaleString("en-US")}
                </p>
                <p className="text-xs text-brand-charcoal/60">
                  {entry.propertyTitle}
                </p>
                <p className="text-xs text-brand-emerald/80">
                  {formatProvider(entry.provider)} ·{" "}
                  {entry.status.toLowerCase()}
                </p>
                <p className="text-[11px] text-slate-500">{entry.timestamp}</p>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}

function formatProvider(provider: "EVC_PLUS" | "E_DAHAB"): string {
  return provider === "EVC_PLUS" ? "EVC Plus" : "e-Dahab";
}
