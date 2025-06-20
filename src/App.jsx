import React, { useContext } from "react";

import GameBoard from "./components/GameBoard";
import { AppContext } from "./context/AppProvider";
import Player1 from "./components/Player1";
import Player2 from "./components/Player2";

export default function App() {
  const { isXTurn } = useContext(AppContext);
  return (
    <main>
      <div id="game-container">
        <div className="flex justify-between items-center ">
          <Player1 isActive={isXTurn ? `active` : ""} symbol="X" />
          <Player2 isActive={!isXTurn ? `active` : ""} symbol="O" />
        </div>
        <GameBoard />
      </div>
      LOG
    </main>
  );
}
