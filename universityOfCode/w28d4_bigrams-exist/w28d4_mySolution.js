function canFind(arr1, arr2) {
  var checkingArr = [];
  for (let i = 0; i < arr1.length; i++) {
    var individualCheckingArr = [];
    for (let j = 0; j < arr2.length; j++) {
      if (arr2[j].toString().includes(arr1[i].toString())) {
        individualCheckingArr.push("true");
      } else {
        individualCheckingArr.push("false");
      }
    }
    // Checking result for all word for a bigram
    if (individualCheckingArr.includes("true")) {
      checkingArr.push("true");
    } else {
      checkingArr.push("false");
    }
  }
  // Return result for whether all bigram is true or not
  return checkingArr.every((x) => x === "true");
}

console.log(canFind(["at", "be", "th", "au"], ["beautiful", "the", "hat"]));
console.log(
  canFind(["bo", "ta", "el", "st", "ca"], ["books", "table", "cap", "hostel"])
);
console.log(canFind(["la", "te"], ["latte"]));
console.log(
  canFind(["th", "fo", "ma", "or"], ["the", "many", "for", "forest"])
);
console.log(
  canFind(["ay", "be", "ta", "cu"], ["maybe", "beta", "abet", "course"])
);
console.log(canFind(["oo", "mi", "ki", "la"], ["milk", "chocolate", "cooks"]));
console.log(canFind(["la"], []));
console.log(canFind(["la", "at", "te", "ea"], ["latte"]));

// Reference:
// https://www.w3schools.com/jsref/jsref_every.asp
// https://www.w3schools.com/jsref/jsref_includes_array.asp#:~:text=Description,()%20method%20is%20case%20sensitive.
// https://www.w3schools.com/jsref/jsref_includes.asp

/* Given Helpful Links
 What is bigram?
   - https://stackoverflow.com/questions/43463792/what-is-the-difference-between-bigram-and-unigram-text-features-extraction
 String.prototype.includes()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
 Array.prototype.some()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
 Array.prototype.every()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
 String.prototype.search()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
*/
