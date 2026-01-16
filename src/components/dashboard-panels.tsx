"use client";

import { useLanguage } from "@/components/language-provider";
import { featuredListings, ledgerEntries } from "@/data/mock-listings";

export function DashboardPanels() {
  const { messages } = useLanguage();

  const averageOccupancy = Math.round(
    featuredListings.reduce((acc, listing) => acc + listing.occupancy, 0) /
      featuredListings.length *
      100,
  );
  const totalRevenue = featuredListings
    .reduce((acc, listing) => acc + listing.monthlyPriceUsd, 0)
    .toLocaleString("en-US", { maximumFractionDigits: 0 });
  const soonestRent =
    featuredListings
      .map((listing) => listing.upcomingRentDueInDays)
      .sort((a, b) => a - b)[0] ?? 0;

  return (
    <section
      id="dashboard"
      className="grid gap-6 md:grid-cols-[1.2fr,1fr] md:gap-8"
    >
      <div className="rounded-3xl border border-brand-emerald/20 bg-white p-6 shadow-lg">
        <header className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-brand-charcoal">
            {messages.dashboard.landlord.title}
          </h2>
          <span className="rounded-full bg-brand-emerald/10 px-3 py-1 text-xs font-semibold text-brand-emerald">
            {messages.dashboard.landlord.callout}
          </span>
        </header>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <MetricCard
            label={messages.dashboard.landlord.occupancy}
            value={`${averageOccupancy}%`}
            trend="+4% MoM"
          />
          <MetricCard
            label={messages.dashboard.landlord.revenue}
            value={`$${totalRevenue}`}
            trend="+$1,200 YoY"
          />
        </div>
        <div className="mt-6 rounded-2xl border border-dashed border-brand-emerald/30 p-4 text-sm text-slate-600">
          Verified agents upload video inspections, safety reports, and rent
          receipts each month for diaspora landlords.
        </div>
      </div>

      <div className="rounded-3xl border border-brand-emerald/20 bg-white p-6 shadow-lg">
        <h2 className="text-lg font-semibold text-brand-charcoal">
          {messages.dashboard.tenant.title}
        </h2>
        <div className="mt-4 flex items-center justify-between rounded-2xl bg-brand-emerald/10 p-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-brand-emerald/80">
              {messages.dashboard.tenant.rentDue}
            </p>
            <p className="text-3xl font-bold text-brand-charcoal">
              {soonestRent} days
            </p>
          </div>
          <div className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-brand-emerald shadow">
            USD Billing
          </div>
        </div>
        <div className="mt-6">
          <h3 className="text-xs font-semibold uppercase tracking-wide text-brand-charcoal/60">
            {messages.dashboard.tenant.paymentHistory}
          </h3>
          <ul className="mt-3 space-y-3 text-sm">
            {ledgerEntries.map((entry) => (
              <li
                key={entry.id}
                className="flex items-center justify-between rounded-2xl border border-brand-emerald/15 bg-brand-sand px-4 py-3"
              >
                <div>
                  <p className="font-semibold text-brand-charcoal">
                    {entry.propertyTitle}
                  </p>
                  <p className="text-xs text-slate-500">{entry.timestamp}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-brand-emerald">
                    ${entry.amount.toLocaleString("en-US")}
                  </p>
                  <p className="text-xs text-brand-charcoal/60">
                    {formatProvider(entry.provider)} ·{" "}
                    {entry.status.toLowerCase()}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

type MetricCardProps = {
  label: string;
  value: string;
  trend: string;
};

function MetricCard({ label, value, trend }: MetricCardProps) {
  return (
    <div className="rounded-2xl border border-brand-emerald/20 bg-brand-sand p-4">
      <p className="text-xs font-semibold uppercase tracking-wide text-brand-charcoal/60">
        {label}
      </p>
      <p className="mt-2 text-3xl font-bold text-brand-charcoal">{value}</p>
      <p className="mt-1 text-xs text-brand-emerald">{trend}</p>
    </div>
  );
}

function formatProvider(provider: "EVC_PLUS" | "E_DAHAB"): string {
  switch (provider) {
    case "EVC_PLUS":
      return "EVC Plus";
    case "E_DAHAB":
      return "e-Dahab";
    default:
      return provider;
  }
}
