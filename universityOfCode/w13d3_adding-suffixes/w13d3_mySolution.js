function add_suffix(str2) {
  return function (str1) {
    return str1 + str2;
  };
}

add_ly = add_suffix("ly");
add_less = add_suffix("less");
add_ing = add_suffix("ing");

console.log(add_ly("hopeless"));
console.log(add_ly("total"));
console.log(add_less("fear"));
console.log(add_less("ruth"));
console.log(add_ing("cheer"));
console.log(add_ing("book"));

// Reference
// Revise w3d1 Same Function Again and w10d2 Function Factory

/* Given Helpful Links
 Closures
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
 Functions
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions
*/
