export type ItemsGetInRequestQuery = {
  q?: string;
  limit?: number;
  skip?: number;
  needsRevision?: boolean;
  categories?: string[];
  sortColumn?: "title" | "createdAt";
  sortDirection?: "asc" | "desc";
};
