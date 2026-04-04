import { useEditAd } from "@/hooks/forms";
import { NavLink } from "react-router";
import { Field, FieldGroup, FieldLabel, FieldSet } from "./ui/field";

import type { AdItem } from "@/services";
import { AD_CATEGORY, PROMT_TYPE, ROUTE } from "@/shared";

import { FieldInputControl } from "./form-fields/field-input-control";
import { Separator } from "./ui/separator";
import { AutoFields } from "./form-fields/auto-fields";
import { RealEstateFields } from "./form-fields/real-estate-fields";
import { ElectronicsFields } from "./form-fields/electronics-fields";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { AiButton } from "./ai-button";
import { DropListControl } from "./form-fields/drop-list-control";
import { Spinner } from "./ui/spinner";

export const FormEditAd = ({ adData }: { adData: AdItem }) => {
  const {
    form: { handleSubmit, setValue, control, register, formState, getValues },
    formValues,
    submit,
  } = useEditAd(adData);

  return (
    <form onSubmit={handleSubmit(submit)}>
      <FieldGroup>
        <FieldSet className="max-w-2xl">
          <DropListControl
            control={control}
            setValue={setValue}
            dropListItems={AD_CATEGORY}
            placeholder="Выберите категорию"
            formName="category"
            clearAllParamsAfterChange
            fieldLabel="Категория"
          />
        </FieldSet>
        <Separator />
        <FieldSet className="max-w-2xl">
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
        <FieldSet className="max-w-2xl flex flex-row items-end">
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
          >
            <AiButton getValues={getValues} type={PROMT_TYPE.PRICE} />
          </FieldInputControl>
        </FieldSet>
        <Separator />
        <FieldSet className="max-w-2xl">
          <Field>
            <FieldLabel>Характеристики</FieldLabel>
          </Field>
          {formValues.category === "auto" && (
            <AutoFields
              control={control}
              setValue={setValue}
              register={register}
              getValue={getValues}
            />
          )}
          {formValues.category === "real_estate" && (
            <RealEstateFields
              control={control}
              setValue={setValue}
              register={register}
              getValue={getValues}
            />
          )}
          {formValues.category === "electronics" && (
            <ElectronicsFields
              register={register}
              getValue={getValues}
              control={control}
              setValue={setValue}
            />
          )}
        </FieldSet>
        <Separator />

        <FieldSet>
          <Field>
            <FieldLabel htmlFor="description">Описание</FieldLabel>
            <div className="flex flex-col gap-2">
              <Textarea {...register("description")} />
              <AiButton getValues={getValues} type={PROMT_TYPE.DESCRIPTION} />
            </div>
          </Field>
        </FieldSet>

        <FieldSet className="flex flex-row">
          <Button size={"lg"} variant={"primary"} disabled={!formState.isValid}>
            Сохранить
          </Button>
          <Button size={"lg"} variant={"secondary"} asChild>
            <NavLink to={ROUTE.DETAIL_AD(adData.id)}>
              {({ isPending }) => <>{isPending && <Spinner />} Отменить</>}
            </NavLink>
          </Button>
        </FieldSet>
      </FieldGroup>
    </form>
  );
};
