/* *************functions.js***************** */
function getDay(str) {
  var date = new Date(str);
  var num = date.getDay();
  if (num === 0) {
    return "Sunday";
  } else if (num === 1) {
    return "Monday";
  } else if (num === 2) {
    return "Tuesday";
  } else if (num === 3) {
    return "Wednesday";
  } else if (num === 4) {
    return "Thursday";
  } else if (num === 5) {
    return "Friday";
  } else if (num === 6) {
    return "Saturday";
  }
}
module.exports = getDay;

/* Given Helpful Links
   Array.prototype.toLocaleString()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toLocaleString
   Date.prototype.getDay()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getDay
   JavaScript Date Reference
     - https://www.w3schools.com/jsref/jsref_obj_date.asp
*/
