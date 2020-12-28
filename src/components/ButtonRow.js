import React from "react";
import Button from "./Button";

const ButtonRow = ({ row, rowIndex, changeVal, isRunning }) => {
  return (
    <p style={{ margin: 0 }}>
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
    </p>
  );
};

export default ButtonRow;
