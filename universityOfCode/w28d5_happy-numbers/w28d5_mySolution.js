function happy(num) {
  var outcome = num;
  do {
    var outcomeArr = [];
    var newOutcomeArr = [];
    outcomeArr = outcome.toString().split("");
    for (let i = 0; i < outcomeArr.length; i++) {
      newOutcomeArr.push(parseInt(outcomeArr[i]) * parseInt(outcomeArr[i]));
    }
    outcome = 0;
    for (let j = 0; j < newOutcomeArr.length; j++) {
      outcome += parseInt(newOutcomeArr[j]);
    }
  } while (outcome !== 1 && outcome !== 4);

  if (outcome === 1) {
    return true;
  } else if (outcome === 4) {
    return false;
  }
}

console.log(happy(203));
console.log(happy(11));
console.log(happy(107));

/* Given Helpful Links
 Happy Number
   - https://en.wikipedia.org/wiki/Happy_number
 Array.prototype.reduce()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
*/
