import { AlertCircle, ArrowLeftIcon, LucideEdit3 } from "lucide-react";
import {
  Button,
  HeaderPageContainer,
  PageContainer,
  Separator,
} from "../components";

import defaultImage from "/default-image.png";
import { Link } from "react-router";
import { ROUTE } from "../shared/constants/route.constans";

export const ProductPage = () => {
  return (
    <PageContainer>
      <HeaderPageContainer className="gap-3">
        <Link to={ROUTE.ADS}>
          <Button variant={"link"}>
            <ArrowLeftIcon /> Назад
          </Button>
        </Link>
        <div className="flex justify-between text-3xl font-semibold">
          <h2>MacBook Pro 16”</h2>
          <h2>64000 ₽</h2>
        </div>
        <div className="flex justify-between items-center">
          <Button size={"lg"} variant={"primary"}>
            Редактировать <LucideEdit3 />
          </Button>

          <div className="flex flex-col items-end text-gray-400">
            <p>Опубликовано: 10 марта 22:39</p>
            <p>Отредактировано: 10 марта 23:12</p>
          </div>
        </div>
      </HeaderPageContainer>

      <Separator />

      <main className="grid grid-cols-[minmax(0,450px)_1fr] auto-rows-auto gap-8">
        <div className="bg-gray-200 rounded overflow-hidden col-start-1 row-start-1">
          <img src={defaultImage} className="w-full h-full" />
        </div>

        <div className="col-start-2 row-start-1 flex flex-col gap-7 row-span-2">
          <div className="bg-[rgba(249,241,230,1)]/80 p-4 rounded-xl max-w-125 flex flex-col gap-2 shadow">
            <h2 className="font-semibold text-base flex flex-gap gap-2 items-center">
              <AlertCircle size={18} color="rgba(255,169,64,1)" />
              Требуются доработки
            </h2>
            <p>У объявления не заполнены поля:</p>
            <ul className="list-disc ml-6">
              <li>Цвет</li>
              <li>Состояние</li>
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="font-semibold text-basexl ">Характеристики</h2>
            <table className="table-auto max-w-2xs w-full">
              <tbody>
                <tr>
                  <td className="text-gray-500 font-medium">Тип</td>
                  <td>Ноутбук</td>
                </tr>
                <tr>
                  <td className="text-gray-500 font-medium">Бренд</td>
                  <td>Apple</td>
                </tr>
                <tr>
                  <td className="text-gray-500 font-medium">Модель</td>
                  <td>M1 Pro</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="col-start-1 row-start-2 flex flex-col gap-3">
          <h2 className="font-semibold text-basexl">Описание</h2>
          <p>
            Продаю свой MacBook Pro 16" (2021) на чипе M1 Pro. Состояние
            отличное, работал бережно. Мощности хватает на всё: от сложного
            монтажа до кода, при этом ноутбук почти не греется.
          </p>
        </div>
      </main>
    </PageContainer>
  );
};
