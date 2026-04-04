import { z } from "zod";

const AutoTransmissionSchema = z.enum(["automatic", "manual"]);

export const AutoItemParamsSchema = z.strictObject({
  brand: z.string().nonempty(),
  model: z.string().nonempty(),
  yearOfManufacture: z.number().int().positive(),
  transmission: AutoTransmissionSchema,
  mileage: z.number().positive(),
  enginePower: z.number().int().positive(),
});
export type AutoItemParams = z.infer<typeof AutoItemParamsSchema>;

const RealEstateTypeSchema = z.enum(["flat", "house", "room"]);

export const RealEstateItemParamsSchema = z.strictObject({
  type: RealEstateTypeSchema,
  address: z.string().nonempty(),
  area: z.number().positive(),
  floor: z.number().int().positive(),
});
export type RealEstateItemParams = z.infer<typeof RealEstateItemParamsSchema>;

const ElectronicsTypeSchema = z.enum(["phone", "laptop", "misc"]);
const ElectronicsConditionSchema = z.enum(["new", "used"]);

export const ElectronicsEstateItemParamsSchema = z.strictObject({
  type: ElectronicsTypeSchema,
  brand: z.string().nonempty(),
  model: z.string().nonempty(),
  condition: ElectronicsConditionSchema,
  color: z.string().nonempty(),
});
export type ElectronicsItemParams = z.infer<
  typeof ElectronicsEstateItemParamsSchema
>;
