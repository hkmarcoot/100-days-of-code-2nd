/* ********************functions.js********************* */
function josephus(n, i) {
  if (n === 1) return 1;
  return ((josephus(n - 1, i) + i - 1) % n) + 1;
}
module.exports = josephus;

//  Reference:
//  https://www.geeksforgeeks.org/josephus-problem/

/* Given Helpful Links
   Josephus Problem — from Wolfram MathWorld
     - https://mathworld.wolfram.com/JosephusProblem.html
   The Josephus Problem ⁠— Numberphile
     - https://www.youtube.com/watch?v=uCsD3ZGzMgE
  */
