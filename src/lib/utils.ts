// Permission Protocol auto-clear safe file.
// AI-authored helper changes here can pass automatically when tests pass.

export function formatCurrency(cents: number, currency = "USD"): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
  }).format(cents / 100);
}

export function parseCents(input: string): number {
  const normalized = input.replace(/[$,\s]/g, "");
  const value = Number.parseFloat(normalized);

  if (!Number.isFinite(value)) {
    throw new Error(`Invalid currency amount: ${input}`);
  }

  return Math.round(value * 100);
}

export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
