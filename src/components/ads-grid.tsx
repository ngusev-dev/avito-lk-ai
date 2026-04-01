import { CardItem, CardItemSkeleton } from "./card-item";
import { ServerCrash } from "lucide-react";
import { useGetAdItems } from "../hooks";

export const AdsGrid = () => {
  const { data, isLoading, isError } = useGetAdItems();

  if (isError)
    return (
      <div className="w-full flex flex-col items-center justify-center text-gray-400">
        <ServerCrash size={64} strokeWidth={1} />
        <p>Ошибка при получении данных</p>
      </div>
    );

  return (
    <main className="w-full">
      <section className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-3 w-full h-full">
        {!isLoading && data?.data.items.length === 0 && (
          <p className="flex justify-center items-center text-gray-400">
            Ничего не найдено
          </p>
        )}
        {!isLoading &&
          data?.data.items.map((item, index) => (
            <CardItem key={index} item={item} />
          ))}
        {isLoading &&
          Array.from({ length: 10 }).map((_, index) => (
            <CardItemSkeleton key={index} />
          ))}
      </section>
    </main>
  );
};
