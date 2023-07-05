function makePlusFunction(num1) {
  return function (num2) {
    return num1 + num2;
  };
}

const plusTwo = makePlusFunction(2);
const plusFive = makePlusFunction(5);
const plusSeven = makePlusFunction(plusTwo(plusFive(0)));
const plusTen = makePlusFunction(10);

console.log(plusFive(2));
console.log(plusFive(-8));
console.log(plusTwo(0));
console.log(plusTwo(18));
console.log(plusTwo(plusFive(plusSeven(plusTen(1)))));
console.log(makePlusFunction(8)(8));
console.log(makePlusFunction(1)(100));
console.log(makePlusFunction(-100)(0));
console.log(makePlusFunction(0)(0));

// Reference
// Review w3d1 Same Function Again

/* Given Helpful Links
 Closures
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
 Function Closures
   - https://www.w3schools.com/js/js_function_closures.asp
*/
