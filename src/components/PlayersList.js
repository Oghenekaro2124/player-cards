import React from "react";
import Player from "./Player";
import players from "../players";

const PlayersList = () => {
  return (
    <div style={styles.container}>
      {players.map((player, index) => (
        <Player key={index} {...player} />
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    padding: "2rem",
    backgroundColor: "#e9ecef",
  },
};

export default PlayersList;
