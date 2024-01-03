function capMe(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1).toLowerCase();
  }
  return arr;
}

console.log(capMe(["mavis", "senaida", "letty"]));
console.log(capMe(["samuel", "MABELLE", "letitia", "meridith"]));

/* Given Helpful Links
   Array.prototype.map()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map?v=example
   String.prototype.substring()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring
   String.prototype.toUpperCase()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
   Array.prototype.slice()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice?v=example
   String.prototype.toLowerCase()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase
   String.prototype.charAt()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt
  */
