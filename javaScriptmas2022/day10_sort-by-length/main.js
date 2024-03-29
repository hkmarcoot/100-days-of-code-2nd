function sortByLength(strs) {
  //  write code here.
  return strs.sort((a, b) => a.length - b.length);
}

/**
 * Test Suite
 */
describe("sortByLength()", () => {
  it("sorts the strings from shortest to longest", () => {
    // arrange
    const strs = ["abc", "", "aaa", "a", "zz"];

    // act
    const result = sortByLength(strs);

    // log
    console.log("result: ", result);

    // assert
    expect(result).toEqual(["", "a", "zz", "abc", "aaa"]);
  });
});

// Link
// https://scrimba.com/scrim/co78348cfae71afe7aa04cf62
