function jazzify(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (!arr[i].endsWith("7")) {
      arr[i] = arr[i].concat("7");
    }
  }
  return arr;
}

console.log(jazzify(["G", "F", "C"]));
console.log(jazzify(["Dm", "G", "E", "A"]));
console.log(jazzify(["F7", "F", "C"]));

/* Given Helpful Links
 String.prototype.endsWith()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith
 Adding a Conditional Statement to the Map Function
   - https://stackoverflow.com/questions/41554604/conditional-statement-in-a-map-function-with-es6/41555235
 endsWith() Method
   - https://www.w3schools.com/jsref/jsref_endswith.asp
 Array.prototype.map()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
*/
