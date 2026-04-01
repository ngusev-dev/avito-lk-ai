import type { AxiosResponse } from "axios";
import { API } from "../shared";
import type { ItemsGetInRequestQuery, ItemsGetOutResponse } from "./types";

class ApiService {
  async getAdsItems(
    query?: ItemsGetInRequestQuery,
  ): Promise<AxiosResponse<ItemsGetOutResponse>> {
    return await API.get("/items", {
      params: {
        ...query,
        categories: query?.categories?.join(","),
      },
    });
  }
}

export const apiService = new ApiService();
