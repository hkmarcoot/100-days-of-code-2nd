function findNemo(str) {
  var arr = str.split(" ");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "Nemo") {
      return "I found Nemo at " + (i + 1) + "!";
    }
  }
}

console.log(findNemo("I am finding Nemo !"));
console.log(findNemo("Nemo is me"));

/* Given Helpful Links
 String.prototype.split()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
 String.prototype.indexOf()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf
 String.prototype.search()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
 Array.prototype.includes()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
 Array.prototype.findIndex()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
*/
