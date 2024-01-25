function mostExpensive(obj) {
  return (
    "The most expensive one is the " +
    Object.keys(obj).reduce((a, b) => (obj[a] > obj[b] ? a : b))
  );
}

console.log(
  mostExpensive({
    "Diamond Earrings": 980,
    "Gold Watch": 250,
    "Pearl Necklace": 4650,
  })
);
console.log(
  mostExpensive({
    "Silver Bracelet": 280,
    "Gemstone Earrings": 180,
    "Diamond Ring": 3500,
  })
);
console.log(
  mostExpensive({
    "Simple Gold Ring": 310,
    "Silver Anklet": 110,
    "Crystal Bracelet": 190,
  })
);

// Reference
// https://stackoverflow.com/questions/27376295/getting-key-with-the-highest-value-from-object

/* Given Helpful Links
   Object.values()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values
   Array.prototype.find()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
   Array.prototype.reduce()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
   Array.prototype.indexOf()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
   Math.max()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
   Object.keys()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
  */
