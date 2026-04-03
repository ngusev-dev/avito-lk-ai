import type {
  AutoItemParams,
  ElectronicsItemParams,
  RealEstateItemParams,
} from "./params.types";

type BaseAdForm = {
  id: number;
  title: string;
  price: number;
  description?: string;
};

export type AdItem = BaseAdForm & {
  price: number | null;
  createdAt: string;
  updatedAt: string;
} & AdItemParams;

export type AdItemParams =
  | { category: "auto"; params: AutoItemParams }
  | { category: "real_estate"; params: RealEstateItemParams }
  | { category: "electronics"; params: ElectronicsItemParams };

export type CategoryParamsMap = {
  auto: keyof AutoItemParams;
  real_estate: keyof RealEstateItemParams;
  electronics: keyof ElectronicsItemParams;
};

export type AdFormValues<T extends keyof CategoryParamsMap = never> =
  T extends keyof CategoryParamsMap
    ? BaseAdForm & {
        category: T;
        params: CategoryParamsMap[T];
      }
    : BaseAdForm & {
        category: keyof CategoryParamsMap;
        params: AutoItemParams | RealEstateItemParams | ElectronicsItemParams;
      };
