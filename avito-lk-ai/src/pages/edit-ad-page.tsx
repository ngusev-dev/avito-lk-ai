import { Link, useLoaderData } from 'react-router';

import { ROUTE } from '../shared';

import { ArrowLeftIcon } from 'lucide-react';
import { PageContainer } from '@/components/page-container';
import { HeaderPageContainer } from '@/components/header-page-container';
import { Button } from '@/components/ui/button';
import type { ItemGetByIdOutResponse } from '@/services';
import { FormEditAd } from '@/components/form-edit-ad';

export const EditAdPage = () => {
  const adData = useLoaderData<ItemGetByIdOutResponse>();

  return (
    <PageContainer className="bg-white">
      <HeaderPageContainer>
        <Link to={ROUTE.DETAIL_AD(adData.id)}>
          <Button variant={'link'} className="px-0">
            <ArrowLeftIcon /> Назад
          </Button>
        </Link>
        <h1 className="text-3xl font-semibold">Редактирование объявления</h1>
      </HeaderPageContainer>

      <FormEditAd adData={adData} />
    </PageContainer>
  );
};
