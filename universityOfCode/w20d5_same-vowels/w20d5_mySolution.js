function sameVowelGroup(arr) {
  var vowels = ["a", "e", "i", "o", "u"];
  var firstVowels = [];
  var otherVowels = [];
  var result = [];
  result.push(arr[0]);
  for (let i = 0; i < arr[0].length; i++) {
    if (vowels.includes(arr[0][i])) {
      if (!firstVowels.includes(arr[0][i])) {
        firstVowels.push(arr[0][i]);
      }
    }
  }
  for (let i = 1; i < arr.length; i++) {
    otherVowels = [];
    for (let j = 0; j < arr[i].length; j++) {
      if (vowels.includes(arr[i][j])) {
        if (!otherVowels.includes(arr[i][j])) {
          otherVowels.push(arr[i][j]);
        }
      }
    }
    firstVowels.sort();
    otherVowels.sort();
    // console.log("First:" + firstVowels);
    // console.log("other:" + otherVowels);
    if (firstVowels.toString() === otherVowels.toString()) {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(sameVowelGroup(["hoops", "chuff", "bot", "bottom"]));
console.log(sameVowelGroup(["crop", "nomnom", "bolo", "yodeller"]));
console.log(sameVowelGroup(["many", "carriage", "emit", "apricot", "animal"]));
console.log(sameVowelGroup(["toe", "ocelot", "maniac"]));
console.log(sameVowelGroup(["a", "apple", "flat", "map", "shark"]));
console.log(sameVowelGroup(["a", "aa", "ab", "abc", "aaac", "abe"]));

/* Given Helpful Links
 Array.prototype.includes()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
 Array.prototype.sort()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
 Array.prototype.filter()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
 String.prototype.match()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
 Array.prototype.map()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 Set Object
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
 Array.prototype.every()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
*/
