import type { Role } from "@prisma/client";

export function canToggleVerification(role: Role | null | undefined): boolean {
  return role === "ADMIN" || role === "VERIFIED_AGENT";
}

export function assertVerificationAccess(role: Role | null | undefined): void {
  if (!canToggleVerification(role)) {
    throw new Error("Insufficient permissions to verify property.");
  }
}
