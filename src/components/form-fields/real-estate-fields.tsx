import type { UseFormGetValues, UseFormRegister } from "react-hook-form";
import type { AdItem } from "../../services";
import { Field, FieldLabel, Input } from "../ui";
import { CATEGORY_PARAMS_FIELDS, cn } from "../../shared";

export const RealEstateFields = ({
  register,
  getValue,
}: {
  register: UseFormRegister<AdItem>;
  getValue: UseFormGetValues<AdItem>;
}) => {
  const fields = CATEGORY_PARAMS_FIELDS["real_estate"];

  const isNumberField = (key: string) => key === "floor" || key === "area";

  return (
    <>
      {Object.entries(fields).map(([key, label]) => (
        <Field key={key}>
          <FieldLabel className="text-sm font-normal" htmlFor={key}>
            {label}
          </FieldLabel>
          <Input
            id={key}
            {...register(`params.${key}` as keyof AdItem, {
              valueAsNumber: isNumberField(key),
            })}
            className={cn("bg-white", {
              "border-[rgba(255,169,64,1)]": !getValue(
                `params.${key}` as keyof AdItem,
              ),
            })}
            inputMode={isNumberField(key) ? "decimal" : "text"}
            step={isNumberField(key) ? 0.1 : "any"}
            type={isNumberField(key) ? "number" : "text"}
          />
        </Field>
      ))}
    </>
  );
};
