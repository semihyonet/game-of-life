import React, { useState, useEffect } from "react";
import "./style.css";

import ButtonPanel from "./components/ButtonPanel";

import step from "./logic/GameofLife";

const randomNumber = () => {
  return Math.random() < 0.5 ? 0 : 1;
};

const arrSetup = len => {
  let arr = [];
  for (let i = 0; i < len; i++) {
    arr.push([]);
    for (let j = 0; j < len; j++) {
      arr[i].push(randomNumber());
    }
  }
  return arr;
};

export default function App() {
  const len = 30;
  const [arr, setArr] = useState(arrSetup(len));
  const [isRunning, setIsRunning] = useState(false);
  //step(arr, setArr);

  const mainLoop = () => {
    setArr(step(arr, setArr));
  };

  useEffect(() => {
    if (isRunning) setInterval(() => mainLoop(), 1000);
  }, [isRunning]);

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <button
        onClick={() => {
          //  const interval = setInterval(() => {

          //}, 1000);

          //  clearInterval(interval);

          setIsRunning(!isRunning);
        }}
      >
        {isRunning ? "Stop" : "Start"}
      </button>
      <ButtonPanel
        arr={arr}
        isRunning={isRunning}
        changeVal={(row, column) => {
          setArr(
            arr.map((arr, index1) =>
              index1 === row
                ? arr.map((val, index2) => (index2 == column ? !val : val))
                : arr
            )
          );
        }}
      />
      <p>Start editing to see some mama happen :)</p>
    </div>
  );
}
