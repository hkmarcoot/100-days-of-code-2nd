/* ******************functions.js******************* */
function daysUntil2021(dateStr) {
  var date1 = new Date(dateStr);
  var date2 = new Date("1/1/2021");

  var Difference_In_Time = date2.getTime() - date1.getTime();

  var Difference_In_Days = Math.round(Difference_In_Time / (1000 * 3600 * 24));
  if (Difference_In_Days === 1) return "1 day";
  return Difference_In_Days.toString() + " days";
}
module.exports = daysUntil2021;

// Reference
// https://www.geeksforgeeks.org/how-to-calculate-the-number-of-days-between-two-dates-in-javascript/

/* Given Helpful Links
   List of Leap Years
     - https://kalender-365.de/leap-years.php
   Date
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
  */
