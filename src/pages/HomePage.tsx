import { AsideFilter, CardItem, TopHeaderFilter } from "../components";

export const HomePage = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col">
        <h1 className="font-semibold text-2xl">Мои объявления</h1>
        <p className="text-gray-400 text-basexl">42 объявления</p>
      </div>
      <TopHeaderFilter />

      <div className="flex gap-6">
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
    </div>
  );
};
