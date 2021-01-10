import React, { useState, useEffect } from "react";
import "./style.css";
import styles from "./styles/mystyle.module.css";

import useInterval from "use-interval";

import ButtonPanel from "./components/ButtonPanel";

import step from "./logic/GameofLife";
import colors from "./styles/colors";

import Slider from "./components/Slider";

import {
	randomNumber,
	emptyNumber,
	arrSetup,
	pattern1,
	pattern2,
} from "./logic/Setup";

export default function App() {
	const len = 30;
	const [arr, setArr] = useState(arrSetup(len, randomNumber));
	const [isRunning, setIsRunning] = useState(false);
	const [timeValue, setTimeValue] = useState(2);

	const mainLoop = (run) => {
		if (run === true) {
			let obj = step(arr);
			setArr(obj.arr);
			if (obj.isComplete == true) setIsRunning(false);
		}
	};

	useInterval(() => {
		mainLoop(isRunning);
	}, 10 * (10 - timeValue) + 200);

	return (
		<div
			className={styles.background}
			styles={{ backgroundColor: colors.background }}
		>
			<div className={styles.container}>
				<h1 className={styles.blackFont}>Welcome to Game of Life</h1>

				<div
					style={{
						width: "100%",
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}
				>
					<ButtonPanel
						arr={arr}
						isRunning={isRunning}
						changeVal={(row, column) => {
							setArr(
								arr.map((arr, index1) =>
									index1 === row
										? arr.map((val, index2) =>
												index2 == column ? !val : val
										  )
										: arr
								)
							);
						}}
					/>
				</div>
				<Slider value={timeValue} setValue={setTimeValue} />
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
							setArr(arrSetup(len, randomNumber));
						}}
					>
						Random
					</button>
					<button
						disabled={isRunning}
						onClick={() => {
							setArr(arrSetup(len, emptyNumber));
						}}
					>
						Empty
					</button>
					<button
						disabled={isRunning}
						onClick={() => {
							let anArr = step(arr);
							setArr(anArr.arr);
						}}
					>
						Step
					</button>
				</div>

				<div>
					<button
						disabled={isRunning}
						onClick={() => {
							setArr(arrSetup(len, pattern1));
						}}
					>
						Pattern 1
					</button>

					<button
						disabled={isRunning}
						onClick={() => {
							setArr(arrSetup(len, pattern2));
						}}
					>
						Pattern 2
					</button>
				</div>

				<div className={styles.blackFont}>
					Any live cell with fewer than two live neighbours dies, as
					if by underpopulation.
					<br />
					Any live cell with two or three live neighbours lives on to
					the next generation.
					<br /> Any live cell with more than three live neighbours
					dies, as if by overpopulation.
					<br /> Any dead cell with exactly three live neighbours
					becomes a live cell, as if by reproduction...
				</div>

				<p className={styles.blackFont}>Made by Semih Yönet</p>
			</div>
		</div>
	);
}
