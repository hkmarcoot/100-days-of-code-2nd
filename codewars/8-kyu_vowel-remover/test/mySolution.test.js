// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold = 0;
import { assert } from "chai";
// const { strictEqual } = assert;
import { shortcut } from "../src/mySolution.js";

// import pkg from "lodash";
// const { _ } = pkg;

function doTest(input, expected) {
  const actual = shortcut(input);
  assert.strictEqual(actual, expected, `for "${input}":\n`);
}

describe("Sample Tests", () => {
  it("Should pass sample tests", () => {
    doTest("hello", "hll");
    doTest("how are you today?", "hw r y tdy?");
    doTest("complain", "cmpln");
    doTest("never", "nvr");
  });
});

describe("Random tests", () => {
  function solution(string) {
    return string.replace(/[aeiou]/g, "");
  }

  function randInt(a, b) {
    return (Math.random() * (b - a + 1) + a) | 0;
  }

  function randChar() {
    return String.fromCharCode(randInt(97, 122));
  }

  for (let i = 0; i < 100; i++) {
    const string = Array.from({ length: randInt(0, 20) }, (_) =>
      randChar()
    ).join("");
    ("If you act fast, you too can be part of the anti-duplication squad - send in your membership now!");
    it(`Should pass random tests too`, () => {
      doTest(string, solution(string));
    });
  }
});
