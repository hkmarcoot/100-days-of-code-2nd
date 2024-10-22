// Write your code here:
function convertToBaby(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push("baby " + arr[i]);
  }
  return result;
}

// When you're ready to test your code, uncomment the below and run:

const animals = ["panda", "turtle", "giraffe", "hippo", "sloth", "human"];

console.log(convertToBaby(animals));
