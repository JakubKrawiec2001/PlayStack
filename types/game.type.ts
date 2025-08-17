import { GAMES_FILTERS } from "@/data/igdb-filters";

export type GameType = {
  id: number;
  category: number;
  cover: number;
  created_at: number;
  game_engines: number[];
  game_modes: number[];
  genres: number[];
  involved_companies: number[];
  name: string;
  parent_game: number;
  platforms: number[];
  player_perspectives: number[];
  release_dates: number[];
  screenshots: number[];
  slug: string;
  summary: string;
  themes: number[];
  updated_at: number;
  url: string;
  videos: number[];
  checksum: string;
  game_type: number;
};

export type GamesFiltersType = (typeof GAMES_FILTERS)[number];
