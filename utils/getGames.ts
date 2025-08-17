"use server";

import { fetchFromIgdbApi } from "@/services/igdb";
import { GamesFiltersType } from "@/types/game.type";

export const getGames = async (
  filters?: GamesFiltersType | GamesFiltersType[]
) =>
  fetchFromIgdbApi({
    path: "/games",
    filters,
  });
