import { useEffect, useState } from "react";
import Player from "./Player";

const Available = ({ handleChoosePlayer }) => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch("players.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);

  return (
    <div className="grid grid-cols-3 gap-3">
      {players.map((player) => (
        <Player
          key={player.playerId}
          player={player}
          handleChoosePlayer={handleChoosePlayer}
        ></Player>
      ))}
    </div>
  );
};

export default Available;
