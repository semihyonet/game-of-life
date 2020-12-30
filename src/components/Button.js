import React from "react";
import colors from '../styles/colors'
import styles from "../styles/mystyle.module.css"

const Button = ({ value, changeVal, isRunning, rowIndex, columnIndex }) => {
  return (
    <div style={{
      backgroundColor:colors.false,
      height: "2vh",
      width: "2vh",
      alignItems:"center",
      justifyContent:"center",
      }}>
      <button
        onMouseDown={() => {
          if (!isRunning) changeVal(rowIndex, columnIndex);
        }}
        className={(value)?styles.trueButton:styles.falseButton}
        style={{
          borderRadius:0,
          height: "2vh",
          width: "2vh",
          backgroundColor: value ? colors.correct : colors.false,
          padding:0,
          borderWidth:0.5
        }}
      />
    </div>
  );
};

export default Button;
