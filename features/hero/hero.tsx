import { GameType } from "@/types/game.type";
import { getGames } from "@/utils/getGames";
import React from "react";

export const Hero = async () => {
  const games = await getGames();
  return (
    <div className="container bg-custom-dark-800 rounded-lg p-8 min-h-42">
      {games.map((game: GameType) => {
        return (
          <div
            key={game.id}
            className="bg-custom-dark-700 min-h-20 rounded-lg mb-4"
          >
            <h2 className="text-custom-white text-2xl">{game.name}</h2>
          </div>
        );
      })}
    </div>
  );
};
