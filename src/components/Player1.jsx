import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppProvider";

export default function Player1({ symbol, isActive }) {
  const [isEditing, setIsEditing] = useState(false);

  const { player1Name, setPlayer1Name } = useContext(AppContext);

  let playerNameToShow = <h2>{player1Name}</h2>;

  if (isEditing) {
    playerNameToShow = (
      <input
        onChange={(e) => setPlayer1Name(e.target.value)}
        type="text"
        value={player1Name}
      />
    );
  }

  function handleEditName() {
    setIsEditing((prev) => !prev);
  }

  return (
    <div className={`flex gap-5 p-2 ${isActive}`}>
      {playerNameToShow}
      <p>{symbol}</p>
      <button onClick={handleEditName} className="cursor-pointer">
        {isEditing ? "Save" : "Edit"}
      </button>
    </div>
  );
}
