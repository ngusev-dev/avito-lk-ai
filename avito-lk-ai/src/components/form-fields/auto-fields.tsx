import { type UseFormGetValues, type UseFormRegister } from "react-hook-form";
import type { AdItem } from "../../services";
import { CATEGORY_PARAMS_FIELDS } from "../../shared";
import { FieldInputControl } from "./field-input-control";

export const AutoFields = ({
  register,
  getValue,
}: {
  register: UseFormRegister<AdItem>;
  getValue: UseFormGetValues<AdItem>;
}) => {
  const fields = CATEGORY_PARAMS_FIELDS["auto"];

  const autoParamKey = (key: string) => `params.${key}` as keyof AdItem;

  const isNumberField = (key: string) =>
    key === "yearOfManufacture" || key === "mileage" || key === "enginePower";

  return (
    <>
      {Object.entries(fields).map(([key, label]) => (
        <FieldInputControl
          key={key}
          id={key}
          label={label}
          labelClassName="text-sm font-normal"
          register={register(autoParamKey(key), {
            valueAsNumber: isNumberField(key),
          })}
          type={isNumberField(key) ? "number" : "text"}
          checkedEmptyField={!getValue(autoParamKey(key))}
        />
      ))}
    </>
  );
};
