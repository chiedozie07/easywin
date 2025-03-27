import React from "react";
import { useParams } from "react-router-dom";

const SelectedGamePage = () => {
  const { gameId } = useParams<{ gameId: string }>();
  console.log("PARAMS DATA:", gameId);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-gray-200 p-6">
      <h3 className="text-3xl font-bold text-yellow-400 mb-4">Selected Game</h3>

      <div className="bg-gray-800 text-yellow-300 px-6 py-3 rounded-lg shadow-md text-lg font-semibold">
        {gameId ? gameId.replace(/-/g, " ") : "Loading..."}
      </div>
    </div>
  );
};

export default SelectedGamePage;
