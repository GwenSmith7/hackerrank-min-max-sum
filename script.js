"use strict";

function miniMaxSum(arr) {
  // sort array from highest to lowest

  // switch and sort array from lowest to highest

  // store in two new arrays and sum it up

  // sort array lowest to highest
  arr.sort((a, b) => a - b);

  let highSum = [...arr];
  let lowSum = [...arr];

  lowSum.pop();

  lowSum = lowSum.reduce((previous, current) => previous + current);

  highSum.shift();

  highSum = highSum.reduce((previous, current) => previous + current);

  const sumArr = [lowSum, highSum];

  console.log(sumArr.join(" "));
} // end function
