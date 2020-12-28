const neighbours = arr => {
  let nArr = [];
  let nTotal;
  for (let i = 0; i < arr.length; i++) {
    nArr.push([]);
    for (let j = 0; j < arr[i].length; j++) {
      nTotal = 0;
      if (j > 0) nTotal += arr[i][j - 1];
      if (j < arr[i].length - 1) nTotal += arr[i][j + 1];
      if (i > 0) nTotal += arr[i - 1][j];
      if (i < arr.length - 1) nTotal += arr[i + 1][j];
      nArr[i].push(nTotal);
    }
  }
  return nArr;
};

const step = (arr, setArr) => {
  let nArr = neighbours(arr);
  let isComplete = true;
  return arr.map((row, i) => {
    return row.map((val, j) => {
      if (val === 1) {
        if (nArr[i][j] === 2 || nArr[i][j] === 3) {
          return 1;
        } else {
          isComplete = false;
          return 0;
        }
      } else {
        if (nArr[i][j] === 3) {
          isComplete = false;
          return 1;
        } else {
          return 0;
        }
      }
    });
  });
};

export default step;
