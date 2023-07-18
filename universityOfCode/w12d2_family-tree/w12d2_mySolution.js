const gen = {
  "-3": { m: "great grandfather", f: "great grandmother" },
  "-2": { m: "grandfather", f: "grandmother" },
  "-1": { m: "father", f: "mother" },
  0: { m: "me!", f: "me!" },
  1: { m: "son", f: "daughter" },
  2: { m: "grandson", f: "granddaughter" },
  3: { m: "great grandson", f: "great granddaughter" },
};

function generation(x, y) {
  return gen[x][y];
}

console.log(gen[-2].m);
console.log(generation(-2, "f"));
console.log(generation(-1, "m"));
console.log(generation(-1, "f"));
console.log(generation(3, "m"));
console.log(generation(3, "f"));
console.log(generation(0, "m"));

/* Given Helpful Links
 Working with objects
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects
 Template literals
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
 if else else if
   - https://www.w3schools.com/js/js_if_else.asp
 Accessing Objects
   - https://dmitripavlutin.com/access-object-properties-javascript/
*/
