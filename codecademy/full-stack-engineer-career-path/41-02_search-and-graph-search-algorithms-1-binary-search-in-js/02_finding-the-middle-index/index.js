const binarySearch = (arr, target) => {
  // Add left and right variables below
  let left = 0;
  let right = arr.length;
  // Add indexToCheck calculation below
  const indexToCheck = Math.floor((left + right) / 2);
  return indexToCheck;
};

const searchable = [1, 2, 7, 8, 22, 28, 41, 58, 67, 71, 94];
const target = 28;

console.log(binarySearch(searchable, target));

module.exports = { binarySearch };
