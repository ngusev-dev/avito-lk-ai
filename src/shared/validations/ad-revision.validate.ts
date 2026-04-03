import {
  AutoItemParamsSchema,
  ElectronicsEstateItemParamsSchema,
  RealEstateItemParamsSchema,
} from "../types";
import type { AdItem } from "../types/ad.types";

export const adValidationFields = (item: AdItem): string[] => {
  const resaltFields = [];
  if (!item.description) resaltFields.push("description");

  const result = getValidationResult(item);

  if (result.success) return resaltFields;

  const fileds = result.error.issues.map((issue) => issue.path.join("."));

  return [...resaltFields, ...fileds];
};

const getValidationResult = (item: AdItem) => {
  if (item.category === "auto")
    return AutoItemParamsSchema.safeParse(item.params);
  if (item.category === "real_estate")
    return RealEstateItemParamsSchema.safeParse(item.params);

  return ElectronicsEstateItemParamsSchema.safeParse(item.params);
};
