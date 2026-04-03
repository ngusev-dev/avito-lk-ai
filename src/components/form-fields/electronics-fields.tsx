import type { UseFormGetValues, UseFormRegister } from "react-hook-form";
import type { AdItem } from "../../services";
import { CATEGORY_PARAMS_FIELDS, cn } from "../../shared";
import { Field, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";

export const ElectronicsFields = ({
  register,
  getValue,
}: {
  register: UseFormRegister<AdItem>;
  getValue: UseFormGetValues<AdItem>;
}) => {
  const fields = CATEGORY_PARAMS_FIELDS["electronics"];

  return (
    <>
      {Object.entries(fields).map(([key, label]) => (
        <Field key={key}>
          <FieldLabel className="text-sm font-normal" htmlFor={key}>
            {label}
          </FieldLabel>
          <Input
            id={key}
            {...register(`params.${key}` as keyof AdItem)}
            className={cn("bg-white", {
              "border-[rgba(255,169,64,1)]": !getValue(
                `params.${key}` as keyof AdItem,
              ),
            })}
            type={"text"}
          />
        </Field>
      ))}
    </>
  );
};
