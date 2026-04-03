import { Link, NavLink, useLoaderData, useNavigate } from "react-router";

import { AD_CATEGORY, ROUTE } from "../shared";
import {
  apiService,
  type AdItem,
  type ItemGetByIdOutResponse,
} from "../services";
import { Controller, useForm, type SubmitHandler } from "react-hook-form";
import { ArrowLeftIcon } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { PageContainer } from "@/components/page-container";
import { HeaderPageContainer } from "@/components/header-page-container";
import { AutoFields } from "@/components/form-fields/auto-fields";
import { RealEstateFields } from "@/components/form-fields/real-estate-fields";
import { ElectronicsFields } from "@/components/form-fields/electronics-fields";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";

export const EditAdPage = () => {
  const navigate = useNavigate();
  const adData = useLoaderData<ItemGetByIdOutResponse>();

  const {
    register,
    handleSubmit,
    control,
    watch,
    setValue,
    getValues,
    formState: { isValid, errors },
  } = useForm<AdItem>({
    mode: "onChange",
    defaultValues: {
      ...adData,
    },
  });

  const selectedCategory = watch("category");

  const { mutate } = useMutation({
    mutationFn: async (ad: AdItem) => apiService.updateAdItem(ad),
    onSuccess: () => {
      navigate(ROUTE.DETAIL_AD(adData.id));
    },
  });

  const submit: SubmitHandler<AdItem> = (data) => {
    console.log();
    const requestData: AdItem = {
      ...data,
      params: cleanEmptyParamsField(data),
    };
    mutate(requestData);
  };

  const cleanEmptyParamsField = (obj: AdItem) => {
    return Object.fromEntries(
      Object.entries(obj.params)
        .map(([key, value]) => {
          return [key, value];
        })
        .filter(([_, value]) => !!value),
    );
  };

  return (
    <PageContainer className="bg-white">
      <HeaderPageContainer>
        <Link to={ROUTE.DETAIL_AD(adData.id)}>
          <Button variant={"link"} className="px-0">
            <ArrowLeftIcon /> Назад
          </Button>
        </Link>
        <h1 className="text-3xl font-semibold">Редактирование объявления</h1>
      </HeaderPageContainer>

      <form onSubmit={handleSubmit(submit)}>
        <FieldGroup>
          <FieldSet className="max-w-xl">
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
          <FieldSet className="max-w-xl">
            <Field>
              <FieldLabel htmlFor="title" required>
                Название
              </FieldLabel>
              <Input
                id="title"
                className="bg-white"
                {...register("title", { required: true })}
                type="text"
                aria-invalid={!!errors.title}
                placeholder="MacBook Pro 16”"
              />
              {errors.title && (
                <FieldError>Название должно быть заполнена</FieldError>
              )}
            </Field>
          </FieldSet>
          <Separator />
          <FieldSet className="max-w-xl">
            <Field>
              <FieldLabel htmlFor="price" required>
                Цена
              </FieldLabel>
              <Input
                id="price"
                {...register("price", { required: true })}
                className="bg-white"
                type="number"
                aria-invalid={!!errors.price}
                placeholder="64000"
              />
              {errors.price && (
                <FieldError>Цена должна быть заполнена</FieldError>
              )}
            </Field>
          </FieldSet>
          <Separator />
          <FieldSet className="max-w-xl">
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

          <FieldSet className="max-w-xl">
            <Field>
              <FieldLabel htmlFor="price">Описание</FieldLabel>
              <Textarea {...register("description")} />
            </Field>
          </FieldSet>

          <FieldSet className="flex flex-row">
            <Button size={"lg"} variant={"primary"} disabled={!isValid}>
              Сохранить
            </Button>
            <Button size={"lg"} variant={"secondary"} asChild>
              <NavLink to={ROUTE.DETAIL_AD(adData.id)}>Отменить</NavLink>
            </Button>
          </FieldSet>
        </FieldGroup>
      </form>
    </PageContainer>
  );
};
