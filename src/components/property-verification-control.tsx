"use client";

import { useState } from "react";
import type { Role } from "@prisma/client";
import { canToggleVerification } from "@/lib/authorization";

type Props = {
  propertyId: string;
  initialVerified: boolean;
  currentRole: Role;
};

export function PropertyVerificationControl({
  propertyId,
  initialVerified,
  currentRole,
}: Props) {
  const [isVerified, setIsVerified] = useState(initialVerified);
  const [error, setError] = useState<string | null>(null);

  const allowed = canToggleVerification(currentRole);

  async function handleToggle() {
    if (!allowed) {
      setError("Only Admins or Verified Agents can change verification status.");
      return;
    }

    setError(null);
    setIsVerified((prev) => !prev);

    // TODO: Persist to Supabase via RPC or Prisma/API route.
    await fakeNetwork(propertyId, !isVerified);
  }

  return (
    <div className="flex items-center gap-3 rounded-2xl border border-brand-emerald/20 bg-white px-4 py-3 text-sm shadow">
      <span className="font-semibold text-brand-charcoal">
        Verification Status:
      </span>
      <button
        onClick={handleToggle}
        className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide transition ${
          isVerified
            ? "bg-brand-emerald text-white"
            : "bg-brand-gold text-brand-charcoal"
        }`}
      >
        {isVerified ? "Verified" : "Pending"}
      </button>
      {!allowed && (
        <span className="text-xs text-brand-charcoal/60">
          View only: requires Admin or Verified Agent.
        </span>
      )}
      {error && <span className="text-xs text-red-500">{error}</span>}
    </div>
  );
}

async function fakeNetwork(propertyId: string, status: boolean) {
  console.info("Mock verification update", { propertyId, status });
  return new Promise((resolve) => setTimeout(resolve, 400));
}
