/**********Code Starts Here************/
function smallBig(arr) {
  arr.sort(function (a, b) {
    return a - b;
  });
  return [arr[0], arr[-1]];
}
/**********Code End********************/
