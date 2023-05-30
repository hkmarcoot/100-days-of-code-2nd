function sortByLength(strs) {
  //  write code here.
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
// https://scrimba.com/learn/javascriptmas/📏-Sort-by-Length-cyw87yuK?utm_source=convertkit&utm_medium=email&utm_campaign=🎄+JavaScriptmas%3A+Your+Day+10+Challenge+-9604188
