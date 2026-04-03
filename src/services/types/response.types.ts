import type { AdItem } from "../../shared/types/ad.types";

export type ItemsGetOutResponse = {
  items: ItemResponse[];
  total: number;
};

export type ItemResponse = {
  id: number;
  category: "auto" | "real_estate" | "electronics";
  title: string;
  price: number;
  needsRevision: boolean;
};

export type ItemGetByIdOutResponse = AdItem;
