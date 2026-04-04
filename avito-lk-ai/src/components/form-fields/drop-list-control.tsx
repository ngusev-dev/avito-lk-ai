import type { AdItem } from "@/services";
import {
  Controller,
  type Control,
  type UseFormSetValue,
} from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Field, FieldLabel } from "../ui/field";
import { cn } from "@/shared";

interface DropListControlProps {
  control: Control<AdItem, unknown, AdItem>;
  setValue: UseFormSetValue<AdItem>;
  dropListItems: { [key: string]: string };
  placeholder?: string;
  formName: keyof AdItem;
  clearAllParamsAfterChange?: boolean;
  fieldLabel?: string;
  classNameFieldLabel?: string;
}

export const DropListControl = ({
  control,
  setValue,
  clearAllParamsAfterChange = false,
  dropListItems,
  formName,
  fieldLabel,
  classNameFieldLabel,
  placeholder = "",
}: DropListControlProps) => {
  return (
    <Field>
      {fieldLabel && (
        <FieldLabel className={cn(classNameFieldLabel)}>
          {fieldLabel}
        </FieldLabel>
      )}
      <Controller
        name={formName}
        control={control}
        render={({ field }) => (
          <Select
            value={field.value as string}
            onValueChange={(val) => {
              field.onChange(val);
              if (clearAllParamsAfterChange)
                setValue("params", {} as AdItem["params"]);
            }}
          >
            <SelectTrigger className="w-full bg-white">
              <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {Object.entries(dropListItems).map(([key, name]) => (
                  <SelectItem value={key} key={key}>
                    {name}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        )}
      />
    </Field>
  );
};
