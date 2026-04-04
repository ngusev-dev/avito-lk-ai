import type { UseFormGetValues, UseFormRegister } from "react-hook-form";
import type { AdItem } from "../../services";
import { CATEGORY_PARAMS_FIELDS } from "../../shared";
import { FieldInputControl } from "./field-input-control";

export const RealEstateFields = ({
  register,
  getValue,
}: {
  register: UseFormRegister<AdItem>;
  getValue: UseFormGetValues<AdItem>;
}) => {
  const fields = CATEGORY_PARAMS_FIELDS["real_estate"];
  const realEstateParamKey = (key: string) => `params.${key}` as keyof AdItem;

  const isNumberField = (key: string) => key === "floor" || key === "area";

  return (
    <>
      {Object.entries(fields).map(([key, label]) => (
        <FieldInputControl
          id={key}
          label={label}
          labelClassName="text-sm font-normal"
          register={register(realEstateParamKey(key), {
            valueAsNumber: isNumberField(key),
          })}
          type={isNumberField(key) ? "number" : "text"}
          inputMode={isNumberField(key) ? "decimal" : "text"}
          step={isNumberField(key) ? 0.1 : "any"}
          checkedEmptyField={!getValue(realEstateParamKey(key))}
        />
      ))}
    </>
  );
};
