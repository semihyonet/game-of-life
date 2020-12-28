import React from "react";
import ButtonRow from "./ButtonRow";

const ButtonPanel = ({ arr, changeVal, isRunning }) => {
  return (
    <>
      {arr.map((row, rowIndex) => {
        return (
          <ButtonRow
            key={rowIndex}
            row={row}
            changeVal={changeVal}
            rowIndex={rowIndex}
            isRunning={isRunning}
          />
        );
      })}
    </>
  );
};

export default ButtonPanel;
