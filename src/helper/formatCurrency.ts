export function formatCurrency(amount: number) {
  return new Intl.NumberFormat("en-NG", {
    currency: "NGN",
    style: "currency",
  }).format(amount);
}
