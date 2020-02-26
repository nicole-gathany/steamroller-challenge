function steamrollArray(arr) {
  // I'm a ste +"amroller, baby
  let finalArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i]) === true) {
      for (let j = 0; j < arr[i].length; j++) {
        if (Array.isArray(arr[i][j]) === true) {
          for (let k = 0; k < arr[i][j].length; k++) {
            if (Array.isArray(arr[i][j][k]) === true) {
              for (let m = 0; m < arr[i][j][k].length; m++) {
                if (Array.isArray(arr[i][j][k][m]) === true) {
                  console.log("Abra");
                } else if (Array.isArray(arr[i][j][k][m]) === false) {
                  finalArr.push(arr[i][j][k][m]);
                }
              }
            } else if (Array.isArray(arr[i][j][k]) === false) {
              finalArr.push(arr[i][j][k]);
            }
          }
        } else if (Array.isArray(arr[i][j]) === false) {
          finalArr.push(arr[i][j]);
        }
      }
    } else if (Array.isArray(arr[i]) === false) {
      finalArr.push(arr[i]);
    }
  }

  return finalArr;
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));
console.log(steamrollArray([[["a"]], [["b"]]]) + "should return [a, b].");
console.log(
  steamrollArray([1, [2], [3, [[4]]]]) + "; should return [1, 2, 3, 4]."
);
console.log(steamrollArray([1, [], [3, [[4]]]]) + " should return [1, 3, 4].");
console.log(steamrollArray([1, {}, [3, [[4]]]]));
