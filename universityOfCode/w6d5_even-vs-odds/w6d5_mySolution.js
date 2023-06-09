function likedSpots(arr, num) {
  let temp = 0;
  if (num % 2 === 0) {
    for (let i = 0; i < arr.length - 1; i++) {
      if (!(arr[i] % 2 === 1 && arr[i + 1] % 2 === 1)) {
        temp++;
      }
    }
    return temp;
  }
  if (num % 2 === 1) {
    for (let i = 0; i < arr.length - 1; i++) {
      if (!(arr[i] % 2 === 0 && arr[i + 1] % 2 === 0)) {
        temp++;
      }
    }
    return temp;
  }
}
