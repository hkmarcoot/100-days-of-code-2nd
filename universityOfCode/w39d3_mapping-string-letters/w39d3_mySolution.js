function mapLetters(str) {
  var arr1 = [];
  var arr2 = [];
  var resultArr = [];
  // Push unique letters into first array
  for (let i = 0; i < str.length; i++) {
    if (!arr1.includes(str[i])) {
      arr1.push(str[i]);
    }
  }
  // Find out the positions of specific letter
  // and push it into second array
  for (let i = 0; i < arr1.length; i++) {
    var tempArr = [];
    for (let j = 0; j < str.length; j++) {
      if (arr1[i] === str[j]) {
        tempArr.push(j);
      }
    }
    arr2.push(tempArr);
  }
  // Combine first and second array
  for (let i = 0; i < arr1.length; i++) {
    resultArr.push([arr1[i], arr2[i]]);
  }
  // Convert it to object
  const obj = Object.fromEntries(resultArr);
  return obj;
}

console.log(mapLetters("balloon"));
console.log(mapLetters("imagining"));
console.log(mapLetters("mummy"));
console.log(mapLetters("aaaaaaabaaabaaabbb"));

/* Given Helpful Links
   Array.prototype.reduce()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
   Array.prototype.map()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
   Array.prototype.filter()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
   Set Object
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
   Object.fromEntries()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries
  */
