"use client";

import { useState } from "react";
import {
  initiateMobileMoneyPayment,
  type MobileMoneyNetwork,
} from "@/services/mobileMoneyService";
import { useLanguage } from "@/components/language-provider";
import { featuredListings } from "@/data/mock-listings";

const providers: { label: string; value: MobileMoneyNetwork }[] = [
  { label: "EVC Plus", value: "EVC_PLUS" },
  { label: "e-Dahab", value: "E_DAHAB" },
];

export function PayRentPanel() {
  const { messages } = useLanguage();
  const [phone, setPhone] = useState("");
  const [provider, setProvider] = useState<MobileMoneyNetwork>("EVC_PLUS");
  const [isLoading, setIsLoading] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    setFeedback(null);

    try {
      const property = featuredListings[0];
      const response = await initiateMobileMoneyPayment({
        propertyId: property.id,
        amountUsd: property.monthlyPriceUsd,
        phoneNumber: phone,
        network: provider,
      });
      setFeedback(
        `Transaction ${response.transactionId} → ${response.status}. ${response.message}`,
      );
    } catch (error) {
      if (error instanceof Error) {
        setFeedback(error.message);
      } else {
        setFeedback("Unexpected error");
      }
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section className="rounded-3xl border border-brand-emerald/20 bg-white p-8 shadow-xl">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-brand-charcoal">
            {messages.landing.paymentTitle}
          </h2>
          <p className="mt-2 max-w-xl text-sm text-slate-600">
            {messages.landing.paymentSummary}
          </p>
        </div>
        <div className="rounded-full bg-brand-emerald/10 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-brand-emerald">
          {messages.payments.prompt}
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="mt-6 grid gap-4 md:grid-cols-[1fr_auto]"
      >
        <div className="grid gap-4 md:grid-cols-2">
          <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold uppercase tracking-wide text-brand-charcoal/70">
              {messages.payments.prompt}
            </label>
            <div className="grid grid-cols-2 gap-2">
              {providers.map((option) => (
                <button
                  type="button"
                  key={option.value}
                  onClick={() => setProvider(option.value)}
                  className={`rounded-xl border px-4 py-3 text-sm font-semibold transition ${
                    provider === option.value
                      ? "border-brand-emerald bg-brand-emerald text-white shadow"
                      : "border-brand-emerald/20 bg-white text-brand-charcoal hover:border-brand-emerald/60"
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold uppercase tracking-wide text-brand-charcoal/70">
              {messages.payments.phonePlaceholder}
            </label>
            <input
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              required
              placeholder="61X XXX XXX"
              className="rounded-xl border border-brand-emerald/20 px-4 py-3 text-sm shadow focus:border-brand-emerald focus:outline-none focus:ring-2 focus:ring-brand-emerald/30"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={isLoading || !phone}
          className="flex h-full items-center justify-center rounded-2xl bg-brand-gold px-6 text-sm font-semibold uppercase tracking-wide text-brand-charcoal shadow transition hover:-translate-y-0.5 hover:bg-brand-emerald hover:text-white disabled:cursor-not-allowed disabled:bg-brand-gold/60"
        >
          {isLoading ? "Processing..." : messages.payments.submit}
        </button>
      </form>

      <p className="mt-4 text-xs text-slate-500">{messages.payments.disclaimer}</p>

      {feedback && (
        <div className="mt-4 rounded-xl border border-brand-emerald/20 bg-brand-emerald/5 p-4 text-sm text-brand-charcoal">
          {feedback}
        </div>
      )}
    </section>
  );
}
