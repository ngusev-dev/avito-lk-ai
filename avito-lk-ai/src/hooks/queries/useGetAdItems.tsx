import { useQuery } from "@tanstack/react-query";
import { apiService } from "../../services";
import { useAdsGlobalFilterStore } from "../../store";

export const useGetAdItems = () => {
  const queryFilter = useAdsGlobalFilterStore((store) => store.filter);

  return useQuery({
    queryKey: ["get-all-ads", queryFilter],
    queryFn: async () => await apiService.getAdsItems(queryFilter),
    select: (resposne) => resposne.data,
  });
};
