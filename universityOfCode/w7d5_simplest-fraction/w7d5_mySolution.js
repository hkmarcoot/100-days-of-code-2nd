function simpleFraction(str) {
  var [num, den, numerator = +num, denominator = +den] = str.split("/");
  do {
    var foundOne = false;
    for (let i = 2; i <= Math.floor(denominator / 2); i++) {
      if (numerator % i === 0 && denominator % i === 0) {
        numerator = numerator / i;
        denominator = denominator / i;
        foundOne = true;
      }
    }
  } while (foundOne === true);
  return numerator.toString() + "/" + denominator.toString();
}

console.log(simpleFraction("2/4"));
console.log(simpleFraction("15/25"));
console.log(simpleFraction("4/9"));
console.log(simpleFraction("15/48"));
console.log(simpleFraction("8/41"));
console.log(simpleFraction("13/94"));
console.log(simpleFraction("9/95"));
console.log(simpleFraction("8/69"));
console.log(simpleFraction("4/31"));
console.log(simpleFraction("13/8"));
console.log(simpleFraction("7/86"));
console.log(simpleFraction("19/75"));
console.log(simpleFraction("10/44"));
console.log(simpleFraction("1/93"));
console.log(simpleFraction("17/23"));
console.log(simpleFraction("20/80"));
console.log(simpleFraction("12/13"));
console.log(simpleFraction("8/51"));

// Reference
// https://stackoverflow.com/questions/55194118/how-do-i-parse-a-string-to-number-while-destructuring

/* Given Helpful Links
 Euclid's Algorithm
   - https://en.wikipedia.org/wiki/Greatest_common_divisor#Euclid's_algorithm
 For Loop
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
*/
