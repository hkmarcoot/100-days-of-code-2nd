function multiSum(num) {
  var result = 0;
  for (let i = 1; i <= 10; i++) {
    result += num * i;
  }
  return result;
}

console.log(multiSum(1));
console.log(multiSum(6));

/* Given Helpful Links
 Beautiful Pattern In Times Table - Summing The Numbers
   - https://www.youtube.com/watch?v=bjjmuOd1fdc
 Recursion
   - https://developer.mozilla.org/en-US/docs/Glossary/Recursion
*/
