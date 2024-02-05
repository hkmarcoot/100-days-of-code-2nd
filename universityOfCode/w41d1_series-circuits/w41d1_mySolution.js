function seriesResistance(arr) {
  var total = arr.reduce((a, c) => a + c, 0);
  return total <= 1 ? total + " ohm" : total + " ohms";
}

function seriesResistance2(arr) {
  var total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total <= 1 ? total + " ohm" : total + " ohms";
}

console.log(seriesResistance([1, 5, 6, 3]));
console.log(seriesResistance([0.5, 0.5]));

/* Given Helpful Links
   Array.prototype.reduce()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
   Template Literals
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
   String.prototype.repeat()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat
  */
