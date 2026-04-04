import type {
  UseFormGetValues,
  UseFormRegister,
  Control,
  UseFormSetValue,
} from "react-hook-form";
import type { AdItem } from "../../services";
import { CATEGORY_PARAMS_FIELDS, TRANSMISSION_TYPE } from "../../shared";
import { FieldInputControl } from "./field-input-control";
import { DropListControl } from "./drop-list-control";

export const AutoFields = ({
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
  const fields = CATEGORY_PARAMS_FIELDS["auto"];

  const autoParamKey = (key: string) => `params.${key}` as keyof AdItem;

  const isNumberField = (key: string) =>
    key === "yearOfManufacture" || key === "mileage" || key === "enginePower";

  return (
    <>
      <DropListControl
        control={control}
        setValue={setValue}
        dropListItems={TRANSMISSION_TYPE}
        placeholder="Выберите тип трансмиссии"
        formName={autoParamKey("transmission")}
        fieldLabel={fields.transmission}
        classNameFieldLabel="text-sm font-normal"
      />

      {Object.entries(fields).map(([key, label]) => {
        if (key === "transmission") return;

        return (
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
        );
      })}
    </>
  );
};
