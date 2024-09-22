import React, { useState } from "react";

const TicTacToe = () => {
  const [currplayer, setCurrPlayer] = useState("X");
  const [winner, setWinner] = useState("");
  const winningPatterns = [
    [0, 1, 2], // Top row
    [3, 4, 5], // Middle row
    [6, 7, 8], // Bottom row
    [0, 3, 6], // Left column
    [1, 4, 7], // Middle column
    [2, 5, 8], // Right column
    [0, 4, 8], // Main diagonal
    [2, 4, 6], // Anti-diagonal
  ];
  const [cubes, setCubes] = useState(() => {
    let cubicles = [];
    for (let i = 0; i < 9; i++) {
      cubicles.push("");
    }
    return cubicles;
  });

  const checkwinner = () => {
    for (let i = 0; i < winningPatterns.length; i++) {
      const [a, b, c] = winningPatterns[i];
      if (cubes[a] && cubes[a] === cubes[b] && cubes[b] === cubes[c]) {
        return cubes[a];
      }
    }
    return null;
  };

  const handlecubeclick = async (index) => {
    if (cubes[index] !== "") {
      return;
    }

    cubes[index] = currplayer;

    let result = checkwinner();
    if (result !== null) {
      setWinner(result);
      return;
    }
    setCurrPlayer(currplayer === "X" ? "O" : "X");
  };

  const reset = () => {
    let newcubes = [];
    for (let i = 0; i < 9; i++) {
      newcubes.push("");
    }
    setCubes(newcubes);
    setWinner("");
  };

  return (
    <div className="bg-gray-900 w-screen h-screen flex flex-col items-center justify-center">
      {winner && winner.length > 0 && (
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-bold text-white mb-4">{`Winner is ${winner}`}</h1>
          <button
            onClick={reset}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-500 transition duration-300"
          >
            RESET
          </button>
        </div>
      )}
      <div className="grid grid-cols-3 gap-2 bg-gray-800 p-4 rounded-lg shadow-lg">
        {cubes &&
          cubes.length > 0 &&
          cubes.map((cube, index) => (
            <button
              key={index}
              className="border-2 border-gray-700 h-20 w-20 flex items-center justify-center text-4xl font-bold text-white bg-gray-700 hover:bg-gray-600 transition duration-300"
              onClick={() => handlecubeclick(index)}
            >
              {cube}
            </button>
          ))}
      </div>
    </div>
  );
};

export default TicTacToe;
