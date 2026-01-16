"use client";

import Image from "next/image";
import { useLanguage } from "@/components/language-provider";
import type { Listing } from "@/data/mock-listings";

type Props = {
  listing: Listing;
};

export function PropertyCard({ listing }: Props) {
  const { messages } = useLanguage();

  return (
    <article className="group relative overflow-hidden rounded-3xl border border-brand-emerald/15 bg-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-52 w-full overflow-hidden">
        <Image
          src={listing.imageUrl}
          alt={listing.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          sizes="(min-width: 1024px) 400px, 100vw"
        />
        {listing.isVerified && (
          <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-brand-emerald px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white shadow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-4 w-4"
            >
              <path d="M5 12l4.5 4.5L19 7" />
            </svg>
            {messages.propertyCard.verified}
          </span>
        )}
      </div>
      <div className="flex flex-col gap-4 p-6">
        <header className="flex flex-col gap-1">
          <div className="flex items-center justify-between text-xs uppercase tracking-wide text-brand-emerald/70">
            <span>
              {listing.city} • {listing.district}
            </span>
            <span>{(listing.occupancy * 100).toFixed(0)}% occupancy</span>
          </div>
          <h3 className="text-xl font-semibold text-brand-charcoal">
            {listing.title}
          </h3>
          <p className="text-sm text-slate-600">{listing.description}</p>
        </header>

        <ul className="flex flex-wrap gap-2 text-xs text-brand-emerald">
          {listing.amenities.map((amenity) => (
            <li
              key={amenity}
              className="rounded-full bg-brand-emerald/10 px-3 py-1 font-medium"
            >
              {amenity}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex items-center justify-between">
          <div className="text-brand-charcoal">
            <span className="text-2xl font-bold">
              ${listing.monthlyPriceUsd.toLocaleString("en-US")}
            </span>
            <span className="ml-2 text-sm font-medium uppercase tracking-wide text-brand-emerald/80">
              {messages.propertyCard.perMonth}
            </span>
          </div>

          <a
            href={`https://wa.me/${listing.whatsappNumber.replace(/[^\d]/g, "")}`}
            target="_blank"
            className="inline-flex items-center gap-2 rounded-full bg-brand-gold px-4 py-2 text-xs font-semibold uppercase tracking-wide text-brand-charcoal shadow transition hover:-translate-y-0.5 hover:bg-brand-emerald hover:text-white"
          >
            <WhatsAppIcon />
            {messages.propertyCard.viewWhatsapp}
          </a>
        </div>
      </div>
    </article>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      fill="currentColor"
      className="h-4 w-4"
    >
      <path d="M16 3C9.373 3 4 8.373 4 15c0 2.65.802 5.11 2.186 7.168L5 29l7.075-1.934A11.913 11.913 0 0 0 16 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 2c5.523 0 10 4.477 10 10s-4.477 10-10 10a9.908 9.908 0 0 1-4.736-1.215l-.34-.19-.385.105-3.625.993.998-3.457.111-.383-.221-.346A9.933 9.933 0 0 1 6 15c0-5.523 4.477-10 10-10zm-4.004 5.5a.69.69 0 0 0-.55.238c-.148.17-.551.538-.551 1.312 0 .774.564 1.52.642 1.624.079.106 1.094 1.738 2.653 2.873 1.562 1.135 2.816 1.5 3.218 1.64.401.138.768.132 1.057.08.288-.053.954-.39 1.089-.766.135-.377.135-.7.095-.766-.04-.066-.148-.106-.31-.186-.162-.08-.954-.47-1.103-.523-.148-.053-.256-.08-.366.08-.108.16-.42.523-.516.63-.096.106-.189.12-.35.04-.162-.08-.685-.252-1.303-.804-.482-.429-.807-.961-.903-1.121-.096-.16-.01-.246.072-.326.074-.074.162-.186.242-.279.08-.094.107-.16.162-.266.054-.106.027-.198-.014-.278-.04-.08-.361-.952-.495-1.304-.131-.352-.26-.305-.366-.312a1.938 1.938 0 0 0-.37-.033z" />
    </svg>
  );
}
