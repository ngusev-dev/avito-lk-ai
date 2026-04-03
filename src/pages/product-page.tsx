import { ArrowLeftIcon, LucideEdit3 } from "lucide-react";
import {
  AdSpecificationsTable,
  Button,
  HeaderPageContainer,
  PageContainer,
  Separator,
} from "../components";

import defaultImage from "/default-image.png";
import { Link, useLoaderData } from "react-router";
import { ROUTE } from "../shared/constants/route.constans";
import type { ItemGetByIdOutResponse } from "../services";
import { currencyFormat, dateFormat } from "../shared";

export const ProductPage = () => {
  const ad = useLoaderData<ItemGetByIdOutResponse>();

  return (
    <PageContainer>
      <HeaderPageContainer className="gap-3">
        <Link to={ROUTE.ADS}>
          <Button variant={"link"}>
            <ArrowLeftIcon /> Назад
          </Button>
        </Link>
        <div className="flex justify-between text-3xl font-semibold">
          <h2>{ad.title}</h2>
          <h2>{ad.price && currencyFormat(ad.price)}</h2>
        </div>
        <div className="flex justify-between items-center">
          <Button size={"lg"} variant={"primary"}>
            Редактировать <LucideEdit3 />
          </Button>

          <div className="flex flex-col items-end text-gray-400">
            <p>Опубликовано: {dateFormat(ad.createdAt)} </p>
            <p>Отредактировано: {dateFormat(ad.updatedAt)}</p>
          </div>
        </div>
      </HeaderPageContainer>

      <Separator />

      <main className="grid grid-cols-[minmax(0,450px)_1fr] auto-rows-auto gap-8">
        <div className="bg-gray-200 rounded overflow-hidden col-start-1 row-start-1">
          <img src={defaultImage} className="w-full h-full" />
        </div>

        <AdSpecificationsTable item={ad} />

        <div className="col-start-1 row-start-2 flex flex-col gap-3">
          <h2 className="font-semibold text-basexl">Описание</h2>
          {ad.description && <p>{ad.description}</p>}
          {!ad.description && <p className="text-gray-400">Отсутствует</p>}
        </div>
      </main>
    </PageContainer>
  );
};
