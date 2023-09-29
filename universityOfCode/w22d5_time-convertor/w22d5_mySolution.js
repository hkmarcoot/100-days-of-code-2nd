function convertTime(str) {
  var amorpm = str.slice(-2);
  var time = str.slice(0, -2).split(":");
  if (amorpm === "AM") {
    if (time[0] === "12") {
      return "00:" + time[1].toString() + ":" + time[2].toString();
    } else {
      return (
        time[0].toString() + ":" + time[1].toString() + ":" + time[2].toString()
      );
    }
  } else if (amorpm === "PM") {
    if (time[0] !== "12") {
      return (
        (parseInt(time[0]) + 12).toString() +
        ":" +
        time[1].toString() +
        ":" +
        time[2].toString()
      );
    } else {
      return (
        time[0].toString() + ":" + time[1].toString() + ":" + time[2].toString()
      );
    }
  }
}

console.log(convertTime("07:05:45PM"));
console.log(convertTime("12:40:22AM"));
console.log(convertTime("12:45:54PM"));
console.log(convertTime("05:32:33PM"));
console.log(convertTime("11:59:59PM"));
console.log(convertTime("11:59:59AM"));
console.log(convertTime("06:00:19AM"));

// Reference
// https://javascript.plainenglish.io/javascript-get-last-two-characters-of-string-67fc4863c5b5#:~:text=52-,To%20get%20the%20last%20two%20characters%20of%20a%20string%20in,last%20two%20characters%20of%20str%20.
// https://bobbyhadz.com/blog/javascript-remove-last-n-characters-from-string#:~:text=To%20remove%20the%20last%20N,of%20the%20original%20string%20removed.

/* Given Helpful Links
 Array.prototype.slice()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
 String.prototype.substring()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring
 String.prototype.replace()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
*/
