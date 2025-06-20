import React, { useState } from "react";

export default function Players({ defaultName, symbol, isActive }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(defaultName);

  let playerNameToShow = <h2>{playerName}</h2>;

  if (isEditing) {
    playerNameToShow = (
      <input
        onChange={(e) => {
          setPlayerName(e.target.value);
        }}
        type="text"
        value={playerName}
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
