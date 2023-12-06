function isAutomorphic(num) {
  return (
    num.toString() === (num * num).toString().slice(-num.toString().length)
  );
}

function isAutomorphic2(num) {
  return (num * num).toString().endsWith(num.toString());
}

console.log(isAutomorphic(5));
console.log(isAutomorphic(6));
console.log(isAutomorphic(25));
console.log(isAutomorphic(7109376));
console.log(isAutomorphic(36));
console.log(isAutomorphic(100));
console.log(isAutomorphic(11));
console.log(isAutomorphic(6025));

/* Given Helpful Links
 String.prototype.endsWith()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith
 String.prototype.toString()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toString
*/
