const randomNumber = () => {
    return Math.random() < 0.5 ? 0 : 1;
  };
const emptyNumber = () => {
    return 0
}

const arrSetup = (len, func) => {
    let arr = [];
    for (let i = 0; i < len; i++) {
        arr.push([]);
        for (let j = 0; j < len; j++) {
        arr[i].push(func());
        }
    }
    return arr;
};

export {randomNumber, emptyNumber, arrSetup}