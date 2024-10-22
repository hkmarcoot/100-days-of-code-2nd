// Write function below
function subLength(str, cha) {
  let count = 0;
  let index = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === cha) {
      count++;
      index.push(i);
    }
  }
  if (count != 2) return 0;
  return index[1] - index[0] + 1;
}
