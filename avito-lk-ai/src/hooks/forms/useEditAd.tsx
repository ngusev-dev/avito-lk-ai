import { apiService, type AdItem } from "@/services";
import { ROUTE } from "@/shared";
import { useMutation } from "@tanstack/react-query";
import { useEffect } from "react";
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
  const savedDraft = localStorage.getItem(`editAd_${adData.id}`);
  const initialValues = savedDraft ? JSON.parse(savedDraft) : adData;

  const form = useForm<AdItem>({
    mode: "onChange",
    defaultValues: initialValues,
  });

  const formValues = useWatch({
    control: form.control,
  });

  useEffect(() => {
    console.log(formValues);
    localStorage.setItem(`editAd_${adData.id}`, JSON.stringify(formValues));

    return () => {
      localStorage.removeItem(`editAd_${adData.id}`);
    };
  }, [formValues]);

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

  return {
    form,
    submit,
    formValues,
  };
};
