export type IgdbFiltersType = {
  where?: string;
  sort?: string;
  search?: string;
  limit?: number;
};

export type IgdbApiRequestType = {
  path: string;
  method?: "GET" | "POST" | "PUT" | "DELETE";
  filters?: IgdbFiltersType;
};
