import React from "react";
import Button from "./Button";

const ButtonRow = ({ row, rowIndex, changeVal, isRunning }) => {
  return (
    <div style={{ margin: 0, display:"flex", flexDirection:"row" }}>
      {row.map((element, columnIndex) => {
        return (
          <Button
            key={`${rowIndex}-${columnIndex}`}
            value={element}
            rowIndex={rowIndex}
            columnIndex={columnIndex}
            changeVal={changeVal}
            isRunning={isRunning}
          />
        );
      })}
    </div>
  );
};

export default ButtonRow;
