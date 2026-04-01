const currencyFormatter = new Intl.NumberFormat("ru", {
  style: "currency",
  currency: "RUB",
});

export const currencyFormat = (value: number) =>
  currencyFormatter.format(value);
