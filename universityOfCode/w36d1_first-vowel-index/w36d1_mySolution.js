const vowel = ["a", "e", "i", "o", "u"];

function firstVowel(str) {
  var lowerCasedStr = str.toLowerCase();
  for (let i = 0; i < lowerCasedStr.length; i++) {
    if (vowel.includes(lowerCasedStr[i])) {
      return i;
    }
  }
}

console.log(firstVowel("apple"));
console.log(firstVowel("hello"));
console.log(firstVowel("STRAWBERRY"));
console.log(firstVowel("pInEaPPLe"));

// Reference
// https://www.w3schools.com/jsref/jsref_includes_array.asp

/* Given Helpful Links
   String.prototype.search()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
   Array.prototype.indexOf()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
   Vowels
     - https://www.pinterest.co.uk/pin/137289488618494389/
  */
