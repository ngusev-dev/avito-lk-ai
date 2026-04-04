import { TRANSMISSION_TYPE } from "./auto-item.constants";
import {
  ELECTRONIC_CONDITION,
  ELECTRONIC_TYPE,
} from "./electronic-item.constants";
import { REAL_ESTATE_TYPE } from "./real-estate.constnants";

export const AD_DROP_LIST_MAP = {
  auto: TRANSMISSION_TYPE,
  real_estate: REAL_ESTATE_TYPE,
  electronics_type: ELECTRONIC_TYPE,
  electronics_condition: ELECTRONIC_CONDITION,
} as const;
