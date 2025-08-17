"use server";

import { fetchFromIgdbApi } from "@/services/igdb";
import { IgdbFiltersType } from "@/types/igdb.type";

export const getGames = async (filters?: IgdbFiltersType) =>
  fetchFromIgdbApi({
    path: "/games",
    filters,
  });
