function toBoolArray(str) {
  const alphabet = {
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
  var arr = str.toLowerCase().split("");
  arr = arr.map((x) => alphabet[x]);
  arr = arr.map((x) => (x % 2 === 0 ? 0 : 1));
  arr = arr.map((x) => (x === 1 ? true : false));
  return arr;
}

console.log(toBoolArray("deep"));
console.log(toBoolArray("loves"));
console.log(toBoolArray("tesh"));

/* Given Helpful Links
 String.prototype.charCodeAt()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
 Array.from()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
 Array.prototype.map()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
*/
