import type { UseFormGetValues, UseFormRegister } from "react-hook-form";
import type { AdItem } from "../../services";
import { CATEGORY_PARAMS_FIELDS } from "../../shared";
import { FieldInputControl } from "./field-input-control";

export const ElectronicsFields = ({
  register,
  getValue,
}: {
  register: UseFormRegister<AdItem>;
  getValue: UseFormGetValues<AdItem>;
}) => {
  const fields = CATEGORY_PARAMS_FIELDS["electronics"];
  const electronicParamKey = (key: string) => `params.${key}` as keyof AdItem;

  return (
    <>
      {Object.entries(fields).map(([key, label]) => (
        <FieldInputControl
          key={key}
          id={key}
          label={label}
          labelClassName="text-sm font-normal"
          register={register(electronicParamKey(key))}
          type={"text"}
          checkedEmptyField={!getValue(electronicParamKey(key))}
        />
      ))}
    </>
  );
};
