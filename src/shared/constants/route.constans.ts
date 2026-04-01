export const ROUTE = {
  ADS: "/ads",
  DETAIL_AD: (id: number) => `/ads/${id}`,
  EDIT_AD: (id: number) => `/ads/${id}/edit`,
} as const;

export const ROUTE_PATH = {
  ADS: "/ads",
  DETAIL_AD: "/ads/:id",
  EDIT_AD: "/ads/:id/edit",
};
