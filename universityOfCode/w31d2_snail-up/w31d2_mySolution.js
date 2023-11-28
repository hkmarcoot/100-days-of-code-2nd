function totalDistance(stepHeight, stepLength, towerHeight) {
  var distance = (towerHeight / stepHeight) * stepLength + towerHeight;
  return distance.toFixed(1);
}

console.log(totalDistance(0.2, 0.4, 100.0));
console.log(totalDistance(0.12, 0.1, 10.0));
console.log(totalDistance(0.5, 0.5, 25.0));

/* Given Helpful Links
 Number.prototype.toFixed()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
 Round to 1 Decimal Place
   - https://stackoverflow.com/questions/7342957/how-do-you-round-to-one-decimal-place-in-javascript
*/
