import { create } from "zustand";
import type { ItemsGetInRequestQuery } from "../services";

interface AdsGlobalFilterState {
  filter: ItemsGetInRequestQuery;
  setFilter: (newFilter: ItemsGetInRequestQuery) => void;
}

const initFilter: ItemsGetInRequestQuery = {
  q: "",
  limit: 10,
  skip: 0,
  needsRevision: false,
  categories: undefined,
  sortColumn: "title",
  sortDirection: "desc",
};

export const useAdsGlobalFilterStore = create<AdsGlobalFilterState>((set) => ({
  filter: initFilter,
  setFilter: (newFilter) =>
    set(({ filter }) => {
      return {
        filter: {
          ...filter,
          ...newFilter,
        },
      };
    }),
}));
