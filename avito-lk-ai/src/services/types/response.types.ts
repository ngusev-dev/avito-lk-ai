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

export interface OllamaGenerateResponse {
  model: string;
  created_at: string;
  response: string;
  done: boolean;
  context?: number[];
  total_duration?: number;
  load_duration?: number;
  prompt_eval_count?: number;
  eval_count?: number;
  eval_duration?: number;
}
