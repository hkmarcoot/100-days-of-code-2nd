// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold = 0;
import { assert } from "chai";
import { cannonsReady } from "../src/mySolution.js";

// import pkg from "lodash";
// const { _ } = pkg;

describe("Tests", function () {
  const a = { Mike: "aye", Joe: "aye", Johnson: "aye", Peter: "aye" };
  const b = { Mike: "aye", Joe: "nay", Johnson: "aye", Peter: "aye" };
  it("should Fire on aye", function () {
    assert.strictEqual(cannonsReady(a), "Fire!");
  });
  it("should Shiver me timbers on nay", function () {
    assert.strictEqual(cannonsReady(b), "Shiver me timbers!");
  });
});

describe("Random tests", function () {
  const copy = (o) => JSON.parse(JSON.stringify(o));
  const msg = (o) =>
    Object.entries(o)
      .map(([k, v]) => `${k}:'${v}'`)
      .join(", ");
  it("should work for some randoms", function () {
    for (let i = 0; i < 15; i++) {
      let load = Math.random() < 0.5,
        arr = {
          Mike: load ? "aye" : "nay",
          Joe: "aye",
          Johnson: "aye",
          Peter: "aye",
        };
      assert.strictEqual(
        cannonsReady(copy(arr)),
        load ? "Fire!" : "Shiver me timbers!",
        msg(arr)
      );
    }
  });
  it("should work for some randoms", function () {
    for (let i = 0; i < 12; i++) {
      let load = Math.random() < 0.5,
        arr = { Johnson: load ? "aye" : "nay", Peter: "aye" };
      assert.strictEqual(
        cannonsReady(copy(arr)),
        load ? "Fire!" : "Shiver me timbers!",
        msg(arr)
      );
    }
  });
  it("should work for some randoms", function () {
    const answer = () => (Math.random() < 0.8 ? "aye" : "nay");
    for (let i = 0; i < 17; i++) {
      let arr = { Mike: answer(), Joe: answer(), Johnson: answer() };
      assert.strictEqual(
        cannonsReady(copy(arr)),
        (Object.values(arr).find((g) => g == "nay") || []).length > 0
          ? "Shiver me timbers!"
          : "Fire!",
        msg(arr)
      );
    }
  });
});
