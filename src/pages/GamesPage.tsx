import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const GamesPage = () => {
  const games: string[] = [
    "Lucky World Cup",
    "Merry Christmas",
    "Magic Millions",
    "Condy Town",
    "Rockets Slots",
    "Treasure Saga",
    "Sound of Fortune",
    "Lion King",
    "Football Winner",
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 flex flex-col items-center px-6 py-6">
      <h3 className="text-2xl font-bold mb-4 text-yellow-400">Choose a Game</h3>

      {/* games navigation */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-3xl">
        {games.map((game) => {
          const formattedGame = game.toLowerCase().replace(/\s+/g, "-");
          return (
            <NavLink
              key={game}
              to={`/games/${formattedGame}`}
              className={({ isActive }) =>
                `block text-center px-6 py-3 rounded-lg transition-all duration-300 ${
                  isActive
                    ? "bg-green-500 text-gray-900 font-bold scale-105 shadow-lg"
                    : "bg-gray-800 hover:bg-gray-700 text-white"
                }`
              }
            >
              {game}
            </NavLink>
          );
        })}
      </div>

      {/* dynamic game content */}
      <div className="mt-6 w-full max-w-3xl bg-gray-800 p-4 rounded-lg shadow-lg">
        <Outlet />
      </div>
    </div>
  );
};

export default GamesPage;
