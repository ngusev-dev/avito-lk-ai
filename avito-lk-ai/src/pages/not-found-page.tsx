import { PageContainer } from "@/components/page-container";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { ROUTE } from "@/shared";
import { CircleX } from "lucide-react";
import { NavLink } from "react-router";

export const NotFoundPage = () => {
  return (
    <PageContainer className="items-center justify-center">
      <div className="flex flex-col justify-center items-center gap-4">
        <CircleX size={120} className="text-gray-400" strokeWidth={1.2} />
        <h1 className="text-xl font-semibold">Упс, 404 - Ничего не найдено</h1>
        <Button variant={"primary"} size={"lg"} asChild>
          <NavLink to={ROUTE.ADS}>
            {({ isPending }) => (
              <>{isPending && <Spinner />} Вернуться на главную</>
            )}
          </NavLink>
        </Button>
      </div>
    </PageContainer>
  );
};
