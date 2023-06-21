function jackpot(result) {
  return result.every((currentValue) => currentValue === result[0]);
}

console.log(jackpot(["@", "@", "@", "@"]));
console.log(jackpot(["!", "!", "!", "!"]));
console.log(jackpot(["abc", "abc", "abc", "abc"]));
console.log(jackpot(["hee", "heh", "heh", "heh"]));
console.log(jackpot(["SS", "SS", "SS", "Ss"]));
console.log(jackpot(["SS", "SS", "Ss", "Ss"]));

/* Given Helpful Links
 Set Object
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
 Array.prototype.every()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
*/
