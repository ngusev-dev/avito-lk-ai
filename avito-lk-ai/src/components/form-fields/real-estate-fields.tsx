import type {
  UseFormGetValues,
  UseFormRegister,
  Control,
  UseFormSetValue,
} from "react-hook-form";
import { DropListControl } from "./drop-list-control";
import type { AdItem } from "../../services";
import { CATEGORY_PARAMS_FIELDS, REAL_ESTATE_TYPE } from "../../shared";
import { FieldInputControl } from "./field-input-control";

export const RealEstateFields = ({
  register,
  getValue,
  control,
  setValue,
}: {
  register: UseFormRegister<AdItem>;
  getValue: UseFormGetValues<AdItem>;
  control: Control<AdItem, unknown, AdItem>;
  setValue: UseFormSetValue<AdItem>;
}) => {
  const fields = CATEGORY_PARAMS_FIELDS["real_estate"];
  const realEstateParamKey = (key: string) => `params.${key}` as keyof AdItem;

  const isNumberField = (key: string) => key === "floor" || key === "area";

  return (
    <>
      <DropListControl
        control={control}
        setValue={setValue}
        dropListItems={REAL_ESTATE_TYPE}
        placeholder="Выберите тип"
        formName={realEstateParamKey("type")}
        fieldLabel={fields.type}
        classNameFieldLabel="text-sm font-normal"
      />

      {Object.entries(fields).map(([key, label]) => {
        if (key === "type") return;

        return (
          <FieldInputControl
            key={key}
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
        );
      })}
    </>
  );
};
