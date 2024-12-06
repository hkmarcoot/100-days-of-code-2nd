/* shape-area.js */
const PI = Math.PI;

// Define and export circleArea() and squareArea() below
function circleArea(r) {
  return PI * r * r;
}

function squareArea(r) {
  return r * r;
}
module.exports.circleArea = circleArea;
module.exports.squareArea = squareArea;
