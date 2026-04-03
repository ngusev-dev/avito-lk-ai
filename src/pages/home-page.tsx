import { HomeHeader } from "@/components/home-header";
import { AdsGrid } from "../components/ads-grid";
import { PageContainer } from "@/components/page-container";
import { TopHeaderFilter } from "@/components/top-header-filter";
import { AsideFilter } from "@/components/aside-filter";

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
