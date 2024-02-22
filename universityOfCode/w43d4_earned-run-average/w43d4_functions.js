/* **********************functions.js************************** */
function era(er, ip) {
  if (ip.toString().includes(".")) {
    var decimalValue = ip.toString().indexOf(".");
    var ipResult = parseInt(ip.toString().substring(decimalValue + 1));
  } else {
    ipResult = 0;
  }
  console.log(ipResult);
  console.log(ipResult);
  return parseFloat(((er / (Math.trunc(ip) + ipResult / 3)) * 9).toFixed(2));
}
module.exports = era;

// Reference
// get decimal portion of a number
// https://www.geeksforgeeks.org/how-to-get-decimal-portion-of-a-number-using-javascript/
// remove decimal part
// https://www.tutorialspoint.com/How-can-I-remove-the-decimal-part-of-JavaScript-number#:~:text=Trunc()%20method-,The%20Math.,after%20removing%20the%20decimal%20part.

/* Given Helpful Links
   ERA Calculator (Earned Run Average)
     - https://captaincalculator.com/sports/baseball/era-calculator/
   Earned Run Average
     - https://en.wikipedia.org/wiki/Earned_run_average
   Number.prototype.toFixed()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
   Innings Pitched
     - https://en.wikipedia.org/wiki/Innings_pitched
  */
