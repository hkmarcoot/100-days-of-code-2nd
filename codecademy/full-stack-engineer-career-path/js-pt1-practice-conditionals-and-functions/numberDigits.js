function numberDigits(num) {
  if (num >= 0 && num <= 9) {
    return "One digit: " + num;
  } else if (num >= 10 && num <= 99) {
    return "Two digits: " + num;
  } else {
    return "The number is: " + num;
  }
}
