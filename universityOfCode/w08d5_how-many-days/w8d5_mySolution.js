function getDays(date1, date2) {
  return (date2 - date1) / (1000 * 60 * 60 * 24);
}

console.log(getDays(new Date("June 14, 2019"), new Date("June 20, 2019")));
console.log(
  getDays(new Date("December 29, 2018"), new Date("January 1, 2019"))
);
console.log(getDays(new Date("July 20, 2019"), new Date("July 30, 2019")));

// Reference
// https://stackoverflow.com/questions/7763327/how-to-calculate-date-difference-in-javascript

/* Given Helpful Links
 Date Object
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
 Date.prototype.getDate()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getDate
*/
