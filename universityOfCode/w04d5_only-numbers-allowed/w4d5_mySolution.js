function numOnly(arr) {
  return arr.filter((x) => /\d/.test(x));
}

// Reference:
// https://codingbeautydev.com/blog/javascript-check-if-string-contains-numbers/
// https://stackoverflow.com/questions/26716818/using-array-map-to-filter-results-with-if-conditional
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

/* Given Helpful Links
 Regex Check Contain at Least 1 Digit
   - https://stackoverflow.com/questions/3180354/check-if-string-contains-at-least-one-digit
 Number
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
 Array.prototype.filter()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
*/
