"use client";

import { useMemo, useState } from "react";
import type { Role } from "@prisma/client";
import { useLanguage } from "@/components/language-provider";
import { PropertyCard } from "@/components/property-card";
import { DashboardPanels } from "@/components/dashboard-panels";
import { PayRentPanel } from "@/components/pay-rent";
import { PropertyMonitor } from "@/components/property-monitor";
import { PropertyVerificationControl } from "@/components/property-verification-control";
import { featuredListings } from "@/data/mock-listings";

const mockRole: Role = "VERIFIED_AGENT";

export default function HomePage() {
  const { messages } = useLanguage();
  const [query, setQuery] = useState("");

  const filteredListings = useMemo(() => {
    if (!query) {
      return featuredListings;
    }
    const normalized = query.toLowerCase();
    return featuredListings.filter(
      (listing) =>
        listing.district.toLowerCase().includes(normalized) ||
        listing.city.toLowerCase().includes(normalized),
    );
  }, [query]);

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 py-16">
      <section className="grid gap-12 rounded-3xl border border-brand-emerald/15 bg-white p-10 shadow-2xl lg:grid-cols-[3fr,2fr]">
        <div className="flex flex-col gap-8">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-emerald/10 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-brand-emerald">
              USD • Verified • Somalia
            </span>
            <h1 className="text-4xl font-semibold text-brand-charcoal lg:text-5xl">
              {messages.landing.hero.title}
            </h1>
            <p className="text-lg text-slate-600">
              {messages.landing.hero.subtitle}
            </p>
          </div>

          <form className="flex flex-col gap-4 rounded-3xl border border-brand-emerald/20 bg-brand-sand px-6 py-4 shadow-lg sm:flex-row sm:items-center">
            <label className="text-xs font-semibold uppercase tracking-wide text-brand-charcoal/60">
              {messages.landing.hero.searchPlaceholder}
            </label>
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={messages.landing.hero.searchPlaceholder}
              className="w-full rounded-full border border-brand-emerald/30 bg-white px-4 py-3 text-sm text-brand-charcoal shadow focus:border-brand-emerald focus:outline-none focus:ring-2 focus:ring-brand-emerald/30"
            />
          </form>

          <div className="rounded-3xl border border-brand-emerald/15 bg-gradient-to-r from-brand-emerald/10 to-brand-gold/20 p-6">
            <h2 className="text-xl font-semibold text-brand-charcoal">
              {messages.landing.hero.diasporaTitle}
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              {messages.landing.hero.diasporaSummary}
            </p>
            <a
              href="https://wa.me/252618000000"
              target="_blank"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-brand-emerald px-5 py-2 text-sm font-semibold uppercase tracking-wide text-white shadow transition hover:-translate-y-0.5 hover:bg-brand-charcoal"
            >
              {messages.landing.hero.diasporaCta}
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-4 rounded-3xl border border-brand-emerald/15 bg-brand-charcoal/95 p-6 text-white shadow-xl">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-brand-gold">
            Verification Workflow
          </h3>
          <p className="text-sm text-white/80">
            Only Dahab-Rent Admins and Verified Agents can set property
            verification. This logic is enforced across dashboards, APIs, and
            Supabase policies.
          </p>
          <PropertyVerificationControl
            propertyId={featuredListings[0].id}
            initialVerified={featuredListings[0].isVerified}
            currentRole={mockRole}
          />
          <div className="rounded-2xl bg-white/5 p-4 text-xs text-white/70">
            Agent Audit Trail: Each toggle logs the agent, timestamp, and GPS
            coordinates of the inspection.
          </div>
        </div>
      </section>

      <section id="listings" className="space-y-4">
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-brand-charcoal">
              {messages.landing.featuredTitle}
            </h2>
            <p className="text-sm text-slate-600">
              {messages.landing.featuredSubtitle}
            </p>
          </div>
          <span className="text-xs font-semibold uppercase tracking-wide text-brand-emerald">
            {filteredListings.length} listings
          </span>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {filteredListings.map((listing) => (
            <PropertyCard key={listing.id} listing={listing} />
          ))}
        </div>
      </section>

      <DashboardPanels />

      <PayRentPanel />

      <PropertyMonitor />
    </div>
  );
}
