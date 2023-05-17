/************Code Starts Here***************/
function secondBest(array) {
  array.sort((a, b) => b - a);
  return array[1];
}
/************Code Ends**********************/
