function countVowelConsonant(str) {
  // write code here
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
// https://scrimba.com/learn/javascriptmas/-count-vowel-consonant-coa5e49d4b957084837f19509
