import { apiService, type AdItem } from '@/services';
import { ROUTE } from '@/shared';
import { useMutation } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useForm, useWatch, type SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router';

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
    mode: 'onChange',
    defaultValues: initialValues,
  });

  const formValues = useWatch({
    control: form.control,
  });

  useEffect(() => {
    localStorage.setItem(`editAd_${adData.id}`, JSON.stringify(formValues));

    return () => {
      localStorage.removeItem(`editAd_${adData.id}`);
    };
  }, [formValues]);

  const { mutateAsync } = useMutation({
    mutationKey: ['update-ad', adData.id],
    mutationFn: async (ad: AdItem) => apiService.updateAdItem(ad),
  });

  const submit: SubmitHandler<AdItem> = async (data) => {
    const requestData: AdItem = {
      ...data,
      params: cleanEmptyParamsField(data),
    };
    const { toast } = await import('react-hot-toast');
    toast.promise(
      mutateAsync(requestData, {
        onSuccess: () => navigate(ROUTE.DETAIL_AD(adData.id)),
      }),
      {
        loading: 'Сохранение...',
        success: 'Изменения сохранены',
        error: (
          <div className="flex flex-col gap-2">
            <p className="font-medium">Ошибка при сохранении</p>
            <p>При попытке сохранить изменения произошла ошибка. Попробуйте ещё раз или зайдите позже.</p>
          </div>
        ),
      },
    );
  };

  return {
    form,
    submit,
    formValues,
  };
};
