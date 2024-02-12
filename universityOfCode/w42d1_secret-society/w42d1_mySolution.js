function societyName(arr) {
  var newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i][0]);
  }
  newArr = newArr.sort();
  return newArr.join("").toUpperCase();
}

console.log(societyName(["Adam", "Sarah", "Malcolm"]));
console.log(
  societyName(["Phoebe", "Chandler", "Rachel", "Ross", "Monica", "Joey"])
);

// Reference
// sort()
// https://www.freecodecamp.org/news/how-to-sort-alphabetically-in-javascript/

/* Given Helpful Links
   Array.prototype.sort()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
   Array.prototype.join()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
   Array.prototype.map()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
   String.prototype.charAt()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt
   String.prototype.match()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
  */
