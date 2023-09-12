function add(num1) {
  return function (num2) {
    return num1 + num2;
  };
}

console.log(add(10)(20));
console.log(add(0)(20));
console.log(add(-30)(80));

/* Given Helpful Links
 Currying in JS
   - https://theanubhav.com/2019/02/03/js-currying-in-interview/
 JavaScript Function Closures
   - https://www.w3schools.com/js/js_function_closures.asp
*/
