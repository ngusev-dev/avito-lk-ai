import {
  AsideFilter,
  HomeHeader,
  PageContainer,
  TopHeaderFilter,
} from "../components";
import { AdsGrid } from "../components/ads-grid";
export const HomePage = () => {
  return (
    <PageContainer>
      <HomeHeader />

      <TopHeaderFilter />

      <div className="flex flex-col gap-6 md:flex-row">
        <AsideFilter />
        <AdsGrid />
      </div>
    </PageContainer>
  );
};
