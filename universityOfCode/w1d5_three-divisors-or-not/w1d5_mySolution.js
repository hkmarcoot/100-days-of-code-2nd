/******************Code Starts Here***************************/
function threeDivisor(num) {
  let temp = 1;
  for (let i = 1; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      temp += 1;
    }
  }
  return temp === 3;
}
/******************Code Ends**********************************/

// Reference:
// - https://www.math.uh.edu/~minru/web/divis2.html
// - https://www.w3schools.com/jsref/jsref_sqrt.asp
