import type { UseFormRegisterReturn } from "react-hook-form";
import { Field, FieldError, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";
import type { ComponentProps } from "react";
import { cn } from "@/shared";

interface FieldInputControlProps extends ComponentProps<"input"> {
  label: string;
  register: UseFormRegisterReturn;
  isError?: boolean;
  errorMessage?: string;
  id: string;
  checkedEmptyField?: boolean;
  labelClassName?: string;
}

export function FieldInputControl({
  register,
  isError = false,
  checkedEmptyField = false,
  errorMessage = "",
  labelClassName = "",
  label,
  id,
  required,
  className,
  ...props
}: FieldInputControlProps) {
  return (
    <Field>
      <FieldLabel
        htmlFor={id}
        required={required}
        className={cn(labelClassName)}
      >
        {label}
      </FieldLabel>
      <Input
        id={id}
        className={cn(
          "bg-white",
          {
            "border-[rgba(255,169,64,1)]": checkedEmptyField,
          },
          className,
        )}
        {...register}
        type="text"
        aria-invalid={isError}
        {...props}
      />
      {isError && <FieldError>{errorMessage}</FieldError>}
    </Field>
  );
}
