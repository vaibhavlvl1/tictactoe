import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppProvider";

export default function Player2({ symbol, isActive }) {
  const [isEditing, setIsEditing] = useState(false);

  const { player2Name, setPlayer2Name } = useContext(AppContext);

  let playerNameToShow = <h2>{player2Name}</h2>;

  if (isEditing) {
    playerNameToShow = (
      <input
        onChange={(e) => setPlayer2Name(e.target.value)}
        type="text"
        value={player2Name}
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
