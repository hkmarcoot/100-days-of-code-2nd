function tapCode(str) {
  var result = "";
  const obj = {
    A: [1, 1],
    B: [1, 2],
    C: [1, 3],
    K: [1, 3],
    D: [1, 4],
    E: [1, 5],
    F: [2, 1],
    G: [2, 2],
    H: [2, 3],
    I: [2, 4],
    J: [2, 5],
    L: [3, 1],
    M: [3, 2],
    N: [3, 3],
    O: [3, 4],
    P: [3, 5],
    Q: [4, 1],
    R: [4, 2],
    S: [4, 3],
    T: [4, 4],
    U: [4, 5],
    V: [5, 1],
    W: [5, 2],
    X: [5, 3],
    Y: [5, 4],
    Z: [5, 5],
  };
  for (let i = 0; i < str.length; i++) {
    result = result.concat(translate(obj[str[i].toUpperCase()]));
    if (i !== str.length - 1) {
      result = result.concat(" ");
    }
  }
  return result;
}

function translate(arr) {
  var result = "";
  for (let i = 0; i < arr[0]; i++) {
    result = result.concat(".");
  }
  result = result.concat(" ");
  for (let i = 0; i < arr[1]; i++) {
    result = result.concat(".");
  }
  return result;
}

console.log(translate([1, 2]));
console.log(tapCode("abc"));
console.log(tapCode("break"));

/* Given Helpful Links
   Array.prototype.includes()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
   Array.prototype.flat()
     - https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/flat
   Array.prototype.map()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
  */
