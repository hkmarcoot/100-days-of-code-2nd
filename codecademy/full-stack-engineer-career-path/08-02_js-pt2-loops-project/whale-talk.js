let input = "bamboo boat under an unbrella";
const vowels = ["a", "e", "i", "o", "u"];
let resultArray = [];
for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < vowels.length; j++) {
    if (input[i] === vowels[j]) {
      if (input[i] === "e" || input[i] === "u") {
        resultArray.push(input[i]);
        resultArray.push(input[i]);
      } else {
        resultArray.push(input[i]);
      }
    }
  }
}
console.log(resultArray.join("").toUpperCase());
