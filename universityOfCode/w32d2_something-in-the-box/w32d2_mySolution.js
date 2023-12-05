function inBox(arr) {
  var tempArr = [];
  // Remove the first and last string in the array
  for (let i = 1; i < arr.length - 1; i++) {
    tempArr.push(arr[i]);
  }
  return tempArr.some((str) => str.slice(1, -1).includes("*"));
}

console.log(inBox(["###", "# #", "###"]));

console.log(inBox(["###", "#*#", "###"]));

console.log(inBox(["#####", "#*  #", "#   #", "#   #", "#####"]));
console.log(inBox(["#####", "*#   #", "#   #", "#   #", "#####"]));
console.log(inBox(["*#####", "#   #", "#   #", "#   #", "#####"]));

// Reference
// https://www.w3schools.com/jsref/jsref_some.asp
// https://www.w3schools.com/jsref/jsref_includes.asp
// https://www.w3schools.com/jsref/jsref_slice_string.asp

/* Given Helpful Links
 Array.prototype.some()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
 String.prototype.includes()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
 Array.prototype.filter()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
 String.prototype.match()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
 String.prototype.search()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
*/
