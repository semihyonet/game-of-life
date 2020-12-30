import React, { useState, useEffect } from "react";
import "./style.css";
import styles from "./styles/mystyle.module.css"

import useInterval from 'use-interval'

import ButtonPanel from "./components/ButtonPanel";

import step from "./logic/GameofLife";
import colors from "./styles/colors";

import Slider from "./components/Slider"

import {randomNumber, emptyNumber, arrSetup} from "./logic/Setup"

export default function App() {
  const len = 30;
  const [arr, setArr] = useState(arrSetup(len,randomNumber));
  const [isRunning, setIsRunning] = useState(false);
  const [timeValue, setTimeValue] = useState(2)

  const mainLoop = (run) => {
    if (run === true) {
      let obj = step(arr)
      setArr(obj.arr);
      if (obj.isComplete == true) setIsRunning(false);
    }
  };

 
  useInterval(() =>{
    mainLoop(isRunning)
  }, 100*(15-timeValue));
  
  return (
    <div className={styles.background } styles={{backgroundColor:colors.background}}>
      <div className={styles.container }>
        <h1 className={styles.blackFont }>Welcome to Game of Life</h1>
      
      <div style={{ width:"100%",display:"flex", flexDirection:"column", alignItems:"center"}}>
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
      </div>
      <Slider 
      value={timeValue}
      setValue={setTimeValue}
      />
      <div>
        <button
          onClick={() => {          
            setIsRunning(!isRunning);
          }}
        >
          {isRunning ? "Stop" : "Start"}
        </button>
        
        
        <button
          disabled={isRunning}
          onClick={() => {          
            setArr(arrSetup(len,randomNumber));
          }}
        >
          Random
        </button>
        <button
          disabled={isRunning}
          onClick={() => {          
            setArr(arrSetup(len,emptyNumber))
          }}
        >
          Empty
        </button>
        <button disabled={isRunning} onClick={() =>
        {
          let anArr = step(arr)
          setArr(anArr.arr);
        }}>
          Step
        </button>
      </div>
      <p className={styles.blackFont}>Made by Semih Yönet</p>
      </div>
    </div>
  );
}
