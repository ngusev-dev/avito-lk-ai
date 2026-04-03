import type { AxiosResponse } from "axios";
import { API } from "../shared";
import type {
  ItemGetByIdOutResponse,
  ItemsGetInRequestQuery,
  ItemsGetOutResponse,
} from "./types";

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

  async getAdItemById(
    adId: number | string,
  ): Promise<AxiosResponse<ItemGetByIdOutResponse>> {
    return await API.get(`/items/${adId}`);
  }
}

export const apiService = new ApiService();
