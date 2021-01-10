const randomNumber = () => {
    return Math.random() < 0.5 ? 0 : 1;
  };
const emptyNumber = () => {
    return 0
}

const pattern1 = (len, row) => {
    if (row === (len/2)-1)
    {
        return 1
    }
    else return 0
}

const pattern2 = (len, row, column) => {
    if (row === (len/2)-1)
    {
        return (column % 2)? 1 : 0
    }
    else if( row === (len/2))
    {
        return (column % 2 )?0 : 1
    }
    else return 0
}


const arrSetup = (len, func) => {
    let arr = [];
    for (let i = 0; i < len; i++) {
        arr.push([]);
        for (let j = 0; j < len; j++) {
        arr[i].push(func(len, i, j));
        }
    }
    return arr;
};

export {randomNumber, emptyNumber, arrSetup, pattern1, pattern2}