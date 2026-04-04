import type {
  Control,
  UseFormGetValues,
  UseFormRegister,
  UseFormSetValue,
} from "react-hook-form";
import type { AdItem } from "../../services";
import {
  CATEGORY_PARAMS_FIELDS,
  ELECTRONIC_CONDITION,
  ELECTRONIC_TYPE,
} from "../../shared";
import { FieldInputControl } from "./field-input-control";
import { DropListControl } from "./drop-list-control";

export const ElectronicsFields = ({
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
  const fields = CATEGORY_PARAMS_FIELDS["electronics"];
  const electronicParamKey = (key: string) => `params.${key}` as keyof AdItem;

  return (
    <>
      <DropListControl
        control={control}
        setValue={setValue}
        dropListItems={ELECTRONIC_TYPE}
        placeholder="Выберите тип"
        formName={electronicParamKey("type")}
        fieldLabel={fields.type}
        classNameFieldLabel="text-sm font-normal"
      />

      <DropListControl
        control={control}
        setValue={setValue}
        dropListItems={ELECTRONIC_CONDITION}
        placeholder="Выберите состояние"
        formName={electronicParamKey("condition")}
        fieldLabel={fields.condition}
        classNameFieldLabel="text-sm font-normal"
      />

      {Object.entries(fields).map(([key, label]) => {
        if (key === "type" || key === "condition") return;

        return (
          <FieldInputControl
            key={key}
            id={key}
            label={label}
            labelClassName="text-sm font-normal"
            register={register(electronicParamKey(key))}
            type={"text"}
            checkedEmptyField={!getValue(electronicParamKey(key))}
          />
        );
      })}
    </>
  );
};
