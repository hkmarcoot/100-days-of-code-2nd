function coneVolume(h, r) {
  return ((Math.PI * Math.pow(r, 2) * h) / 3).toFixed(2);
}

console.log(coneVolume(3, 2));
console.log(coneVolume(15, 6));

/* Given Helpful Links
   Volume of a Cone
     - https://www.softschools.com/math/geometry/topics/volume_of_a_cone/
   Number.prototype.toFixed()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
   Math.PI
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/PI
   Math.pow()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/pow
   parseFloat()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat
  */
