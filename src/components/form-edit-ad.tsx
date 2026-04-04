import { useEditAd } from "@/hooks/forms";
import { NavLink } from "react-router";
import { Field, FieldGroup, FieldLabel, FieldSet } from "./ui/field";
import { Controller } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import type { AdItem } from "@/services";
import { AD_CATEGORY, ROUTE } from "@/shared";

import { FieldInputControl } from "./form-fields/field-input-control";
import { Separator } from "./ui/separator";
import { AutoFields } from "./form-fields/auto-fields";
import { RealEstateFields } from "./form-fields/real-estate-fields";
import { ElectronicsFields } from "./form-fields/electronics-fields";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { AiButton } from "./ai-button";

export const FormEditAd = ({ adData }: { adData: AdItem }) => {
  const {
    form: { handleSubmit, setValue, control, register, formState, getValues },
    selectedCategory,
    submit,
  } = useEditAd(adData);

  return (
    <form onSubmit={handleSubmit(submit)}>
      <FieldGroup>
        <FieldSet>
          <Field>
            <FieldLabel htmlFor="username">Категория</FieldLabel>
            <Controller
              name="category"
              control={control}
              render={({ field }) => (
                <Select
                  value={field.value}
                  onValueChange={(val) => {
                    field.onChange(val);
                    setValue("params", {} as AdItem["params"]);
                  }}
                >
                  <SelectTrigger className="w-full max-w-62 bg-white">
                    <SelectValue placeholder="Выберите категорию" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {Object.entries(AD_CATEGORY).map(([key, name]) => (
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
        </FieldSet>
        <Separator />
        <FieldSet>
          <FieldInputControl
            id="title"
            label={"Название"}
            register={register("title", { required: true })}
            required
            isError={!!formState.errors.title}
            errorMessage="Название должно быть заполнено"
          />
        </FieldSet>
        <Separator />
        <FieldSet className=" flex flex-row items-end">
          <FieldInputControl
            id="price"
            label={"Цена"}
            register={register("price", {
              required: true,
              valueAsNumber: true,
            })}
            isError={!!formState.errors.price}
            type="number"
            errorMessage="Цена должна быть заполнена"
            required
          />
          <AiButton />
        </FieldSet>
        <Separator />
        <FieldSet>
          <Field>
            <FieldLabel htmlFor="price">Характеристики</FieldLabel>
          </Field>
          {selectedCategory === "auto" && (
            <AutoFields register={register} getValue={getValues} />
          )}
          {selectedCategory === "real_estate" && (
            <RealEstateFields register={register} getValue={getValues} />
          )}
          {selectedCategory === "electronics" && (
            <ElectronicsFields register={register} getValue={getValues} />
          )}
        </FieldSet>
        <Separator />

        <FieldSet>
          <Field>
            <FieldLabel htmlFor="price">Описание</FieldLabel>
            <Textarea {...register("description")} />
          </Field>
        </FieldSet>

        <FieldSet className="flex flex-row">
          <Button size={"lg"} variant={"primary"} disabled={!formState.isValid}>
            Сохранить
          </Button>
          <Button size={"lg"} variant={"secondary"} asChild>
            <NavLink to={ROUTE.DETAIL_AD(adData.id)}>Отменить</NavLink>
          </Button>
        </FieldSet>
      </FieldGroup>
    </form>
  );
};
