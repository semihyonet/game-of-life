import React from "react";

const Button = ({ value, changeVal, isRunning, rowIndex, columnIndex }) => {
  return (
    <button
      onClick={() => {
        if (!isRunning) changeVal(rowIndex, columnIndex);
      }}
      style={{
        height: "2vh",
        width: "2vh",
        backgroundColor: value ? "#F00" : "#0F0",
        padding:0,
        borderWidth:0.5
      }}
    />
  );
};

export default Button;
