/********************Code Starts Here**********************/
function isBigger(first, second) {
  if (first() - second() > 0) {
    return "first";
  } else if (first() - second() < 0) {
    return "second";
  } else if (first() - second() === 0) {
    return "both";
  }
}
/********************Code Ends****************************/

// Reference:
// - https://stackoverflow.com/questions/13286233/pass-a-javascript-function-as-parameter
