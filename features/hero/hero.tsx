import { GameType } from "@/types/game.type";
import { getGames } from "@/utils/getGames";
import React from "react";

export const Hero = async () => {
  const games = await getGames({
    search: "The Witcher",
    limit: 40,
  });
  return (
    <div className="container bg-custom-dark-800 rounded-lg p-8 min-h-42">
      {games.map((game: GameType) => {
        return (
          <div
            key={game.id}
            className="bg-custom-dark-700 min-h-20 rounded-lg mb-4"
          >
            <h2 className="text-custom-white text-2xl">{game.name}</h2>
            <p className="text-custom-white text-xl">
              {game.rating?.toFixed(0)}
            </p>
          </div>
        );
      })}
    </div>
  );
};
