function squareAll(n) {
  return n
    .toString()
    .split("")
    .map((x) => Number(x * x))
    .join("");
}

/* Given Helpful Links
 Array.prototype.map()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 toString() Method
   - https://www.w3schools.com/jsref/jsref_tostring_number.asp
 parseInt() Function
   - https://www.w3schools.com/jsref/jsref_parseint.asp
 split() Method
   - https://www.w3schools.com/jsref/jsref_split.asp
*/
