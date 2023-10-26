function hoursPassed(t1, t2) {
  if (t1 === t2) {
    return "No time has passed.";
  }
  var tempt1Array = t1.split(" ");
  var tempt2Array = t2.split(" ");
  var t1TimeArray = tempt1Array[0].split(":");
  var t2TimeArray = tempt2Array[0].split(":");

  var timeDiff;
  /* If both time indicator are the same i.e. AM = AM or PM = PM */
  if (tempt1Array[1] === tempt2Array[1]) {
    timeDiff = parseInt(t2TimeArray[0]) - parseInt(t1TimeArray[0]);
    return timeDiff.toString() + " hours";
  }

  /* If time indicator are different */
  if (tempt1Array[1] !== tempt2Array[1]) {
    timeDiff = 12 - parseInt(t1TimeArray[0]) + parseInt(t2TimeArray[0]);
    return timeDiff.toString() + " hours";
  }
}

console.log(hoursPassed("3:00 AM", "9:00 AM"));
console.log(hoursPassed("1:00 AM", "3:00 PM"));
console.log(hoursPassed("1:00 AM", "1:00 AM"));

/* Given Helpful Links
 eval() Method
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval
 String.prototype.split()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
 if...else
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else
 Map
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
 String.prototype.replace()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
 Math.abs()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
*/
