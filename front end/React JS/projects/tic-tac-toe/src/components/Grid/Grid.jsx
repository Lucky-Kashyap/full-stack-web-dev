import React, { useState } from "react";
import Card from "../Card/Card";
import "./Grid.css";

const Grid = ({ numberOfCards }) => {
  const [board, setBoard] = useState(Array(numberOfCards).fill(""));

  return (
    <div className="grid-board">
      {board.map((el, index) => (
        <Card key={index} />
      ))}
    </div>
  );
};

export default Grid;
