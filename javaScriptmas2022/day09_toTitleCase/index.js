/* toTitleCase
Write a function that will capitalize every word in a sentence.  

Example Input: "everything, everywhere, all at once"
Example Output: "Everything, Everywhere, All At Once"
*/

/* 
First, write a function that takes in one word and 
capitalizes the first letter of that word.

Example Input: "scrimba"
Example Output: "Scrimba"

Hint: Trying using slice() and .toUpperCase()
*/

function capitalizeWord(word) {
  // This combine two functions into one
  // let arr = [];
  // arr = word.split(" ");
  // for(let i = 0; i < arr.length; i++){
  //     arr[i][0] = arr[i][0].toUpperCase();
  // }
  // return arr.join(" ");
  return word.slice(0, 1).toUpperCase() + word.slice(1);
}

/* 
Now write a function that capitalizes every word in a sentence. 
How can you reuse the function you just wrote? 
*/

function toTitleCase(str) {
  //Solution of using for loop
  // let arr = [];
  // arr = str.split(" ");
  // for(let i = 0; i < arr.length; i++){
  //     arr[i] = capitalizeWord(arr[i]);
  // }
  // return arr.join(" ");

  return str
    .split(" ")
    .map((arr) => capitalizeWord(arr))
    .join(" ");
}

// Test your functions
console.log(capitalizeWord("pumpkin"));
console.log(toTitleCase("pumpkin pranced purposefully across the pond"));

// Link
// https://scrimba.com/scrim/co243434ba0004e877b03710c
