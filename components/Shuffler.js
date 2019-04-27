// Shuffle the JSON Array, leaving the first x alone if specified
export function shuffle(arr, pinFirstNum = 0) {
  let i;
  let j;
  let temp;
  let staticArr = [];
  let dynArr = [];

  if (pinFirstNum > 0) {
    staticArr = arr.slice(0, pinFirstNum);
    dynArr = arr.slice(pinFirstNum);
  } else {
    dynArr = arr;
  }
  for (i = dynArr.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    temp = dynArr[i];
    dynArr[i] = dynArr[j];
    dynArr[j] = temp;
  }
  staticArr.concat(dynArr);
  return staticArr.concat(dynArr);
}
