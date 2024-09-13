// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold = 0;
import { assert } from "chai";
// const { strictEqual } = assert;
import { aliasGen } from "../src/mySolution.js";

// import pkg from "lodash";
// const { _ } = pkg;

describe("Lets go...", () => {
  it("Tests to see if your function returns the correct values.", () => {
    assert.assertEquals(aliasGen("Mike", "Millington"), "Malware Mike");
    assert.assertEquals(aliasGen("Fahima", "Tash"), "Function T-Rex");
    assert.assertEquals(aliasGen("Daisy", "Petrovic"), "Data Payload");
    assert.assertEquals(aliasGen("Barny", "White"), "Beta Worm");
    assert.assertEquals(aliasGen("Hank", "Kutz"), "Half-life Killer");
    assert.assertEquals(
      aliasGen("7393424", "Anumbha"),
      "Your name must start with a letter from A - Z."
    );
    assert.assertEquals(
      aliasGen("Anuddanumbha", "23200"),
      "Your name must start with a letter from A - Z."
    );
  });

  it("Your code should also work for random tests", () => {
    function newAliasGen(a, b) {
      a = a.slice(0, 1).toUpperCase();
      b = b.slice(0, 1).toUpperCase();

      let letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

      if (letters.indexOf(a) === -1 || letters.indexOf(b) === -1) {
        return "Your name must start with a letter from A - Z.";
      }

      return firstName[a] + " " + surname[b];
    }

    for (let index = 0; index < 155; index++) {
      let a = Math.random()
        .toString(36)
        .replace(/[^a-z1-9]/g, "")
        .substr(0, 5);
      let b = Math.random()
        .toString(36)
        .replace(/[^a-z]+/g, "")
        .substr(0, 5);
      assert.assertEquals(aliasGen(a, b), newAliasGen(a, b));
    }
  });
});
