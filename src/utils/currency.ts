const USDNumberFormat = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});
const USDNumberFormatWithoutDecimals = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});
export const formatCurrencyUSD = (amount: number) =>
  USDNumberFormat.format(amount);
export const formatCurrencyUSDWithoutDecimals = (amount: number) =>
  USDNumberFormatWithoutDecimals.format(amount);
