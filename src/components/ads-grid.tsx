import { CardItem, CardItemSkeleton } from "./card-item";
import { ServerCrash } from "lucide-react";
import { useGetAdItems } from "../hooks";
import { PaginatorAdapteer } from "./paginator-adapter";
import { useAdsGlobalFilterStore } from "../store";
import { Skeleton } from "./ui/skeleton";

export const AdsGrid = () => {
  const { data, isLoading, isError } = useGetAdItems();
  const filter = useAdsGlobalFilterStore((store) => store.filter);
  const setFilter = useAdsGlobalFilterStore((store) => store.setFilter);

  const onPageChange = (selectedPage: number) =>
    setFilter({
      skip: (selectedPage - 1) * (filter.limit ?? 10),
    });

  if (isError)
    return (
      <div className="w-full flex flex-col items-center justify-center text-gray-400">
        <ServerCrash size={64} strokeWidth={1} />
        <p>Ошибка при получении данных</p>
      </div>
    );

  return (
    <main className="w-full flex flex-col gap-2.5">
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

      {!isLoading && (
        <PaginatorAdapteer
          total={data?.data.total ?? 0}
          skip={filter.skip}
          limit={filter.limit}
          onPageChange={onPageChange}
        />
      )}

      {isLoading && <Skeleton className="h-10 w-60" />}
    </main>
  );
};
