import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppProvider";

export default function GameBoard() {
  const { board, setBoard } = useContext(AppContext);
  const {
    isXTurn,
    setIsXTurn,
    xHistory,
    oHistory,
    setXHistory,
    setOHistory,
    player1Name,
    player2Name,
  } = useContext(AppContext);

  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  function checkWinner(board) {
    for (let combo of winningCombos) {
      let [a, b, c] = combo;

      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  }

  function handleClick(index) {
    const newBoard = [...board];

    if (newBoard[index] !== null) {
      return;
    }

    console.log("clicked", index);
    const symbol = isXTurn ? "X" : "O";

    newBoard[index] = symbol;

    if (symbol === "X") {
      const newXHistory = [...xHistory, index];

      if (newXHistory.length == 4) {
        const indexToBeRemoved = newXHistory[0];
        newBoard[indexToBeRemoved] = null;
        newXHistory.shift();
      }

      setXHistory(newXHistory);
    } else {
      const newOHistory = [...oHistory, index];

      if (newOHistory.length == 4) {
        const indexToBeRemoved = newOHistory[0];
        newBoard[indexToBeRemoved] = null;
        newOHistory.shift();
      }
      setOHistory(newOHistory);
    }

    setBoard(newBoard);
    let result = checkWinner(newBoard);

    setIsXTurn((prev) => !prev);
    if (result != null) {
      let winningPlayer;
      if (symbol === "X") {
        winningPlayer = player1Name;
        console.log(winningPlayer);
      } else {
        winningPlayer = player2Name;
      }
      window.alert(`${winningPlayer} won the game`);
      return;
    }
  }

  return (
    <>
      <div id="game-board" className="grid grid-cols-3 place-items-center">
        {board.map((cell, index) => (
          <button onClick={() => handleClick(index)} key={index}>
            {cell}
          </button>
        ))}
      </div>
      <button
        onClick={() => {
          setBoard(Array(9).fill(null));
          setXHistory([]);
          setOHistory([]);
        }}
        className="border-2 border-amber-400 pl-4 pr-4 pt-1 pb-1 cursor-pointer"
      >
        Clear
      </button>
    </>
  );
}
