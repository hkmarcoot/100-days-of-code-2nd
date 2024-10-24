// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold = 0;
import { assert } from "chai";
// const { strictEqual } = assert;
import { howManyLightsabersDoYouOwn } from "../src/mySolution.js";

// import pkg from "lodash";
// const { _ } = pkg;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(howManyLightsabersDoYouOwn(), 0);
    assert.strictEqual(howManyLightsabersDoYouOwn("Adam"), 0);
    assert.strictEqual(howManyLightsabersDoYouOwn("Zach"), 18);
  });
});

describe("Random tests", () => {
  const s = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ   ";

  function randint(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  for (let i = 0; i < 100; i++) {
    let word =
      Math.random() <= 0.5
        ? "Zach"
        : Array.from(
            { length: randint(0, 20) },
            (_, i) => s[randint(0, s.length - 1)]
          ).join``;
    let expected = word == "Zach" ? 18 : 0;
    it(`howManyLightsabersDoYouOwn(${JSON.stringify(
      word
    )}) should equal ${expected}`, () => {
      assert.strictEqual(howManyLightsabersDoYouOwn(word), expected);
    });
  }
});
