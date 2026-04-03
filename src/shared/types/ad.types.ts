import type {
  AutoItemParams,
  ElectronicsItemParams,
  RealEstateItemParams,
} from "./params.types";

export type AdItem = {
  id: number;
  title: string;
  description?: string;
  price: number | null;
  createdAt: string;
  updatedAt: string;
} & AdItemParams;

export type AdItemParams =
  | { category: "auto"; params: AutoItemParams }
  | { category: "real_estate"; params: RealEstateItemParams }
  | { category: "electronics"; params: ElectronicsItemParams };
