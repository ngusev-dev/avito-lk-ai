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
        <h1 className="font-bold text-2xl">Мои объявления</h1>
        <p className="text-gray-400 text-basexl">42 объявления</p>
      </HeaderPageContainer>

      <TopHeaderFilter />

      <div className="flex flex-col gap-6 md:flex-row">
        <AsideFilter />

        <main className="w-full">
          <section className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-3 w-full">
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
          </section>
        </main>
      </div>
    </PageContainer>
  );
};
