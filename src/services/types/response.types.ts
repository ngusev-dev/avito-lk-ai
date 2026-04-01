export type ItemsGetOutResponse = {
  items: ItemResponse[];
  total: number;
};

export type ItemResponse = {
  category: "auto" | "real_estate" | "electronics";
  title: string;
  price: number;
  needsRevision: boolean;
};
