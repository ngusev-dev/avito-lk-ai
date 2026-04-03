import { Dot } from "lucide-react";
import { NavLink } from "react-router";

import defaultImage from "/default-image.png";

import { AD_CATEGORY, ROUTE, currencyFormat } from "../shared";
import { Skeleton } from "./ui/skeleton";
import type { ItemResponse } from "../services";
import { Spinner } from "./ui";

interface CardItemProps {
  item: ItemResponse;
}

export const CardItem = ({ item }: CardItemProps) => {
  return (
    <NavLink
      to={ROUTE.DETAIL_AD(item.id)}
      className="bg-white rounded-[8px] cursor-pointer block border-gray-300 overflow-hidden border relative"
    >
      {({ isPending }) => (
        <>
          {isPending && (
            <div className="absolute top-0 left-0 bottom-0 right-0 bg-gray-400/30 flex items-center justify-center transition-colors">
              <Spinner />
            </div>
          )}
          <div className="bg-gray-50 h-37.5 rounded-b-xl overflow-hidden -mb-5">
            <img src={defaultImage} className="w-full  h-full object-contain" />
          </div>
          <div className="px-4 py-2 flex flex-col gap-3">
            <div className="border border-gray-300 rounded-md w-fit px-3 bg-white ">
              {AD_CATEGORY[item.category]}
            </div>
            <div>
              <p className="text-base">{item.title}</p>
              <small className="text-secondary-45 font-bold text-base">
                {currencyFormat(item.price)}
              </small>
            </div>

            {item.needsRevision && (
              <div className="rounded bg-[rgba(250,173,20,1)]/10 flex items-center text-[rgba(250,173,20,1)] py-0.5">
                <Dot size={20} />
                <p className="text-base">Требует доработок</p>
              </div>
            )}
          </div>
        </>
      )}
    </NavLink>
  );
};

export const CardItemSkeleton = () => {
  return <Skeleton className="block h-67.5 w-full" />;
};
