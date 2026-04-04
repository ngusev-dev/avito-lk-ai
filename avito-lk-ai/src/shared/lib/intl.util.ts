const currencyFormatter = new Intl.NumberFormat("ru", {
  style: "currency",
  currency: "RUB",
});

const dateFormatter = new Intl.DateTimeFormat("ru", {
  dateStyle: "long",
  timeStyle: "short",
});

export const currencyFormat = (value: number) =>
  currencyFormatter.format(value);

export const dateFormat = (value: string) =>
  dateFormatter.format(new Date(value));
