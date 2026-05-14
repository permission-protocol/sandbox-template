// Permission Protocol protected file.
// AI-authored changes to this billing surface require a human signer.

type Money = {
  currency: "USD";
  cents: number;
};

type InvoiceLine = {
  description: string;
  quantity: number;
  unitPrice: Money;
};

type Invoice = {
  id: string;
  customerId: string;
  subtotal: Money;
  tax: Money;
  total: Money;
  status: "draft" | "open" | "paid" | "void";
};

const TAX_RATES_BY_REGION: Record<string, number> = {
  CA: 0.0825,
  CO: 0.029,
  NY: 0.04,
};

export function applyTaxRule(subtotalCents: number, region: string): Money {
  const rate = TAX_RATES_BY_REGION[region] ?? 0;
  return {
    currency: "USD",
    cents: Math.round(subtotalCents * rate),
  };
}

export function createInvoice(customerId: string, lines: InvoiceLine[], region: string): Invoice {
  const subtotalCents = lines.reduce((sum, line) => {
    return sum + line.quantity * line.unitPrice.cents;
  }, 0);

  const tax = applyTaxRule(subtotalCents, region);
  const totalCents = subtotalCents + tax.cents;

  return {
    id: `inv_${Date.now()}`,
    customerId,
    subtotal: { currency: "USD", cents: subtotalCents },
    tax,
    total: { currency: "USD", cents: totalCents },
    status: "open",
  };
}

export async function refundCharge(paymentId: string, amount: Money, reason: string) {
  if (amount.cents <= 0) {
    throw new Error("Refund amount must be positive");
  }

  return {
    id: `rfnd_${Date.now()}`,
    paymentId,
    amount,
    reason,
    status: "pending_review",
    createdAt: new Date().toISOString(),
  };
}

export function healthCheck() {
  return {
    service: "billing-api",
    ok: true,
    protectedBy: "Permission Protocol",
  };
}
