import { apiService, type AdItem } from "@/services";
import { ROUTE } from "@/shared";
import { useMutation } from "@tanstack/react-query";
import { useForm, useWatch, type SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router";

const cleanEmptyParamsField = (obj: AdItem) => {
  return Object.fromEntries(
    Object.entries(obj.params)
      .map(([key, value]) => {
        return [key, value];
      })
      .filter(([_, value]) => !!value),
  );
};

export const useEditAd = (adData: AdItem) => {
  const navigate = useNavigate();

  const form = useForm<AdItem>({
    mode: "onChange",
    defaultValues: {
      ...adData,
    },
  });

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

  const selectedCategory = useWatch({
    control: form.control,
    name: "category",
  });

  return {
    form,
    submit,
    selectedCategory,
  };
};
