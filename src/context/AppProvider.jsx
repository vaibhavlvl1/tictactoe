import React, { createContext, useState } from "react";

export const AppContext = createContext();

export default function AppProvider({ children }) {
  const [isXTurn, setIsXTurn] = useState(true);
  const [board, setBoard] = useState(Array(9).fill(null));

  const [oHistory, setOHistory] = useState([]);
  const [xHistory, setXHistory] = useState([]);

  const [player1Name, setPlayer1Name] = useState("Player1");
  const [player2Name, setPlayer2Name] = useState("Player2");

  return (
    <AppContext.Provider
      value={{
        isXTurn,
        setIsXTurn,
        board,
        setBoard,
        oHistory,
        xHistory,
        setOHistory,
        setXHistory,
        player1Name,
        setPlayer1Name,
        player2Name,
        setPlayer2Name,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
