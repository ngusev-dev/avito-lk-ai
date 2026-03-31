import {
  AsideFilter,
  CardItem,
  HeaderPageContainer,
  PageContainer,
  TopHeaderFilter,
} from "../components";

export const HomePage = () => {
  return (
    <PageContainer>
      <HeaderPageContainer>
        <h1 className="font-semibold text-2xl">Мои объявления</h1>
        <p className="text-gray-400 text-basexl">42 объявления</p>
      </HeaderPageContainer>

      <TopHeaderFilter />

      <div className="flex flex-col gap-6 md:flex-row">
        <AsideFilter />

        <main className="flex flex-wrap gap-3">
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
        </main>
      </div>
    </PageContainer>
  );
};
