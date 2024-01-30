function millionRounding(arr) {
  var resultArr = [];
  for (let i = 0; i < arr.length; i++) {
    resultArr.push([arr[i][0], Math.round(arr[i][1] / 1000000) * 1000000]);
  }
  return resultArr;
}

console.log(
  millionRounding([
    ["Tokyo", 37435191],

    ["Delhi", 29399141],

    ["Shanghai", 26317104],
  ])
);

console.log(millionRounding([["Sao Paulo", 21846507]]));

console.log(
  millionRounding([
    ["London", 9304016],

    ["Naples", 2186853],

    ["Nice", 942208],

    ["Abu Dhabi", 1482816],

    ["Riga", 630692],

    ["Vatican City", 572],
  ])
);

// Reference
// https://stackoverflow.com/questions/26906657/round-number-to-nearest-thousand-up-or-down-depending-on-the-number

/* Given Helpful Links
   Math.round()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round
   Array.prototype.map()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
   Map Object
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
   Ternary Operator
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
   for
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
   JavaScript Array map() Method
     - https://www.w3schools.com/jsref/jsref_map.asp
  */
