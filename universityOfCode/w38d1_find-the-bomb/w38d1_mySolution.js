function bomb(str) {
  return str.toLowerCase().includes("bomb")
    ? "Duck!!!"
    : "There is no bomb, relax.";
}

console.log(bomb("There is a bomb."));
console.log(bomb("Hey, did you find it?"));
console.log(bomb("Hey, did you think ther is a bomb?"));
console.log(bomb("This goes boom!!!"));
console.log(bomb("Hey, did you find the BoMb?"));

/* Given Helpful Links
   includes() Method
     - https://www.w3schools.com/jsref/jsref_includes_array.asp
   String.prototype.match()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
   String.prototype.indexOf()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf
   Array.prototype.find()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
  */
