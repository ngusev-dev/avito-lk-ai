import { useGetAdItems } from "../hooks";
import { HeaderPageContainer } from "./header-page-container";
import { Skeleton } from "./ui/skeleton";

export const HomeHeader = () => {
  const { data, isLoading } = useGetAdItems();

  return (
    <HeaderPageContainer>
      <h1 className="font-bold text-2xl">Мои объявления</h1>
      {!isLoading && (
        <p className="text-gray-400 text-basexl">{data?.total} объявления</p>
      )}
      {isLoading && <Skeleton className="h-6.75 w-50" />}
    </HeaderPageContainer>
  );
};
