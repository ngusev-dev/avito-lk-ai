import type {
  AdItem,
  AutoItemParams,
  ElectronicsItemParams,
  RealEstateItemParams,
} from "../../services";

export const AD_CATEGORY = {
  auto: "Авто",
  real_estate: "Недвижимость",
  electronics: "Электроника",
} as const;

export const CATEGORY_PARAMS_FIELDS: Record<
  AdItem["category"],
  Record<
    | keyof AutoItemParams
    | keyof RealEstateItemParams
    | keyof ElectronicsItemParams,
    string
  >
> = {
  auto: {
    brand: "Бренд",
    model: "Модель",
    yearOfManufacture: "Год выпуска",
    transmission: "Коробка передач",
    mileage: "Пробег",
    enginePower: "Мощность двигателя",
  },
  real_estate: {
    type: "Тип",
    address: "Адрес",
    area: "Площадь",
    floor: "Этаж",
  },
  electronics: {
    type: "Тип",
    brand: "Бренд",
    model: "Модель",
    condition: "Состояние",
    color: "Цвет",
  },
};
