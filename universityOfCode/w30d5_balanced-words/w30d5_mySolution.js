function balanced(str) {
  const alphabetToNum = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
  };
  var firstHalf = [];
  var secondHalf = [];
  var arr = str.toLowerCase().split("");
  if (arr.length % 2 === 0) {
    firstHalf = arr.slice(0, arr.length / 2);
    secondHalf = arr.slice(arr.length / 2);
  } else {
    firstHalf = arr.slice(0, Math.floor(arr.length / 2));
    secondHalf = arr.slice(Math.ceil(arr.length / 2));
  }
  var firstTotal = firstHalf.reduce((a, c) => a + alphabetToNum[c], 0);
  var secondTotal = secondHalf.reduce((a, c) => a + alphabetToNum[c], 0);

  return firstTotal === secondTotal;
}

console.log(balanced("zips"));
console.log(balanced("brake"));
console.log(balanced("conditionalities"));

/* Given Helpful Links
 String.prototype.charCodeAt()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
 Array.prototype.reduce()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
 indexOf() Method
   - https://www.w3schools.com/jsref/jsref_indexof_array.asp
 For Loop
   - https://www.w3schools.com/js/js_loop_for.asp
 Array.prototype.slice()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
 String.prototype.split()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
 Spread syntax (...)
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
*/
