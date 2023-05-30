function countVowelConsonant(str) {
  // write code here
  let newArray = [];
  let number = 0;
  newArray = str.split("");
  number = newArray.reduce((total, alphabet) => {
    return (
      total +
      (alphabet === "a" ||
      alphabet === "e" ||
      alphabet === "i" ||
      alphabet === "o" ||
      alphabet === "u"
        ? 1
        : 2)
    );
  }, 0);
  return number;
}

/**
 * Test Suite
 */
describe("countVowelConsonant()", () => {
  it("returns total of vowels(1) and consonants(2) to be added", () => {
    // arrange
    const value = "abcde";

    // act
    const result = countVowelConsonant(value);

    // log
    console.log("result: ", result);

    // assert
    expect(result).toBe(8);
  });
});

// Link
// https://scrimba.com/scrim/co2864a238944a6db09b512b9
