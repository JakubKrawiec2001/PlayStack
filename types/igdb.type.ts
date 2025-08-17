import { GamesFiltersType } from "./game.type";

export type IgdbFiltersType = GamesFiltersType;

export type IgdbApiRequestType = {
  path: string;
  method?: "GET" | "POST" | "PUT" | "DELETE";
  filters?: IgdbFiltersType | IgdbFiltersType[];
};
