import React from "react";

const Button = ({ value, changeVal, isRunning, rowIndex, columnIndex }) => {
  return (
    <button
      onClick={() => {
        if (isRunning) changeVal(rowIndex, columnIndex);
      }}
      style={{
        height: 30,
        width: 30,
        backgroundColor: value ? "#F00" : "#0F0"
      }}
    />
  );
};

export default Button;
