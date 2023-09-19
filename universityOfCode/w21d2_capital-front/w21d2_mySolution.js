function capFront(str) {
  var arr1 = [];
  var arr2 = [];
  var arr = str.split("");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i].toUpperCase()) {
      arr1.push(arr[i]);
    } else {
      arr2.push(arr[i]);
    }
  }
  return arr1.concat(arr2).join("");
}

console.log(capFront("hApPy"));
console.log(capFront("moveMENT"));

/* Given Helpful Links
 String.prototype.match()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
 String.prototype.split()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
 Array.prototype.concat()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
 Array.prototype.filter()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
*/
