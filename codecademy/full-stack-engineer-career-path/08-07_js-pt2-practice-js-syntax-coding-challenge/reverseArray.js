// Write your code here:
function reverseArray(arr) {
  let result = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }
  return result;
}

// When you're ready to test your code, uncomment the below and run:

const sentence = ["sense.", "make", "all", "will", "This"];

console.log(reverseArray(sentence));
// Should print ['This', 'will', 'all', 'make', 'sense.'];
