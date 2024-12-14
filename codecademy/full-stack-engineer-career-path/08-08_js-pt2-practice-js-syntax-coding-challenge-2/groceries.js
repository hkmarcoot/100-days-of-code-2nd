// Write function below
function groceries(arr) {
  if (arr.length === 1) {
    return arr[0].item;
  }
  if (arr.length === 2) {
    return arr[0].item + " and " + arr[1].item;
  }
  let str = "";
  for (let i = 0; i < arr.length - 2; i++) {
    str += arr[i].item + ", ";
  }
  str += arr[arr.length - 2].item + " and " + arr[arr.length - 1].item;
  return str;
}
