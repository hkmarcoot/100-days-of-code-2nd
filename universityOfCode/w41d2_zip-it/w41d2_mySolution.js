function zipIt(arr1, arr2) {
  var result = [];
  if (arr1.length !== arr2.length) return "sizes don't match";
  for (let i = 0; i < arr1.length; i++) {
    result.push([arr1[i], arr2[i]]);
  }
  return result;
}

console.log(zipIt(["Elise", "Mary"], ["John", "Rick"]));
console.log(zipIt(["Ana", "Amy", "Lisa"], ["Bob", "Josh"]));

/* Given Helpful Links
   Array.prototype.map()
     - https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/map
   Conditional Operator
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
   push() Method
     - https://www.w3schools.com/jsref/jsref_push.asp
   if...else
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else
  */
