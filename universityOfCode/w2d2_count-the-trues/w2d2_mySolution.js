/***********************Code Starts Here************************/
function countTrue(arr) {
  let temp = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === true) {
      temp += 1;
    }
  }
  return temp;
}
/***********************Code Ends********************************/
