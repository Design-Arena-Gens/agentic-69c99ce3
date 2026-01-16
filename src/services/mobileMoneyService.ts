import { getSupabaseBrowserClient } from "@/lib/supabaseClient";
import type { MobileMoneyProvider } from "@prisma/client";

export type MobileMoneyNetwork = Extract<
  MobileMoneyProvider,
  "EVC_PLUS" | "E_DAHAB"
>;

export type MobileMoneyPayload = {
  propertyId: string;
  tenantId?: string;
  amountUsd: number;
  phoneNumber: string;
  network: MobileMoneyNetwork;
  memo?: string;
};

export type MobileMoneyResponse = {
  transactionId: string;
  status: "PENDING" | "SUCCESS" | "FAILED";
  providerReference?: string;
  message: string;
};

export async function initiateMobileMoneyPayment(
  payload: MobileMoneyPayload,
): Promise<MobileMoneyResponse> {
  const supabase = getSupabaseBrowserClient();
  const normalizedPhone = normalizeSomaliNumber(payload.phoneNumber);

  const { data, error } = await supabase.functions.invoke<MobileMoneyResponse>(
    "initiate-rent-payment",
    {
      body: {
        ...payload,
        phoneNumber: normalizedPhone,
      },
    },
  );

  if (error) {
    throw new Error(error.message);
  }

  if (!data) {
    throw new Error("No response from payment gateway.");
  }

  return data;
}

export function normalizeSomaliNumber(phone: string): string {
  const digitsOnly = phone.replace(/[^\d]/g, "");

  if (digitsOnly.startsWith("252")) {
    return `+${digitsOnly}`;
  }

  if (digitsOnly.startsWith("0")) {
    return `+252${digitsOnly.substring(1)}`;
  }

  if (digitsOnly.length === 9) {
    return `+252${digitsOnly}`;
  }

  throw new Error("Invalid Somali mobile number");
}
